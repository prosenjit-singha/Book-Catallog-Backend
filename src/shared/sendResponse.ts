import { Response } from "express";
import { ApiResponse } from "../types";

const sendResponse = <T>(
  res: Response,
  { status, success, data, message, meta }: Omit<ApiResponse<T>, "error">
): void => {
  const payload: Omit<ApiResponse<T>, "status" | "error"> & {
    statusCode: number;
  } = {
    success: success || true,
    statusCode: status,
    // error: null,
    message,
    meta,
    data,
  };
  res.status(status).json(payload);
};

export default sendResponse;
