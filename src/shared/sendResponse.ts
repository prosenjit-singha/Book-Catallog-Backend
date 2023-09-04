import { Response } from "express";
import { ApiResponse } from "../types";

const sendResponse = <T>(
  res: Response,
  { status, data, message, meta }: Omit<ApiResponse<T>, "error">
): void => {
  const payload: ApiResponse<T> = {
    status,
    error: null,
    message,
    meta,
    data,
  };
  res.status(status).json(payload);
};

export default sendResponse;
