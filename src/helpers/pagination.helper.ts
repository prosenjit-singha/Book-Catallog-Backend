import {
  PaginationOptionsResult,
  PaginationOptions,
} from "../types/paginationOptions.type";

const calculatePagination = (
  options: PaginationOptions
): PaginationOptionsResult => {
  const page = Number(options.page || 1);
  const size = Number(options.size || 10);
  const skip = (page - 1) * size;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  return {
    page,
    size,
    skip,
    sortBy,
    sortOrder,
  };
};

export default calculatePagination;
