import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ApiError from "@/error/apiError";
import httpsStatus from "http-status";
import { ApiResponse } from "@/types";
import { JsonWebTokenError } from "jsonwebtoken";
import config from "@/config";
import { ZodError } from "zod";
import handleZodError from "@/error/handleZodError";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import handlePrismaError from "@/error/handlePrismaError";

const globalErrorHandler: ErrorRequestHandler = (
  err,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status: number = httpsStatus.INTERNAL_SERVER_ERROR;
  let message: string = "Something went wrong!";
  let error: ApiResponse["error"] | null = null;
  if (err instanceof PrismaClientValidationError) {
    status = httpsStatus.BAD_REQUEST;
    error = handlePrismaError.handleValidationError(err);
    message = "Validation Error Occur";
  } else if (err instanceof PrismaClientKnownRequestError) {
    status = httpsStatus.BAD_REQUEST;
    message = "Duplicate Value Exist";
    error = handlePrismaError.handleClientKnownRequestError(err);
  } else if (err instanceof ZodError) {
    status = httpsStatus.BAD_REQUEST;
    message = "Validation error occur.";
    error = handleZodError(err);
  } else if (err instanceof ApiError) {
    status = err.status;
    message = err.message;
    error = err.error;
  } else if (err instanceof JsonWebTokenError) {
    status = httpsStatus.BAD_REQUEST;
    message = "Failed to verify token";
    error = err.message;
  } else if (err instanceof Error) {
    message = err?.message;
  }

  const responseObj: ApiResponse & { stack?: any } = {
    status,
    message,
    error,
    stack: config.node_env !== "production" ? err?.stack : undefined,
    data: null,
  };

  res.status(status).json(responseObj);
};

export default globalErrorHandler;
