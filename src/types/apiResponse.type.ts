export type ApiResponse<T = null> = {
  status: number;
  error: null | { [key: string]: string } | string;
  message: string;
  data: T;
  meta?: {
    page: number;
    size: number;
    totalResults: number;
    sortBy: string;
    sortOrder: "asc" | "desc" | 1 | -1 | "ascending" | "descending";
  };
};
