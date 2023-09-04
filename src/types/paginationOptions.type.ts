import { Prisma } from "@prisma/client";

export type PaginationOptions = {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: Prisma.SortOrder;
};

export type PaginationOptionsResult = {
  page: number;
  size: number;
  skip: number;
  sortBy: string;
  sortOrder: Prisma.SortOrder;
};
