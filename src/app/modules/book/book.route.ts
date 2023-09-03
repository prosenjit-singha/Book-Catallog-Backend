import express from "express";
import * as ctrl from "./book.controller";
import auth from "@/app/middlewares/auth.middleware";
import validateReq from "@/app/middlewares/validateRequest";
import * as schema from "./book.validation";

const router = express.Router();

router.get(
  "/",
  validateReq(schema.getAllBook),
  auth("admin", "customer"),
  ctrl.getAllBooks
);

router.post(
  "/",
  validateReq(schema.createBook),
  auth("admin"),
  ctrl.createBook
);

router.get("/:id", auth("admin", "customer"), ctrl.getSingleBook);

router.patch(
  "/:id",
  validateReq(schema.updateBook),
  auth("admin", "customer"),
  ctrl.updateBook
);

router.delete("/:id", auth("admin", "customer"), ctrl.deleteBook);

export default router;
