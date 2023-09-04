import { ApiResponse } from "../types";

class ApiError extends Error {
  status: number;
  error: ApiResponse["error"];
  constructor(
    status: number,
    message: string | undefined,
    error: ApiResponse["error"] = null
  ) {
    super(message);
    this.status = status;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
