export type ApiResponse<T = null> = {
  success?: boolean;
  status: number;
  error: null | { [key: string]: string } | string;
  message: string;
  data: T;
  meta?: {
    page?: number;
    size?: number;
    totalResults?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  };
};
