import cors from "cors";
import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";
import router from "./router";
// import router from "./routes";
const app: Application = express();

app.use(cors());
//parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => res.send("Server is running..."));

app.use("/api/v1", router);

//global error handler
app.use(globalErrorHandler);

//handle not found apis
app.use((_req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    message: "Api Not Found!",
    data: null,
  });
});

export default app;
