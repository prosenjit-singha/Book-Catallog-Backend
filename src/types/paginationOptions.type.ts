import { Prisma } from "@prisma/client";

export type PaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: Prisma.SortOrder;
};

export type PaginationOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: Prisma.SortOrder;
};
