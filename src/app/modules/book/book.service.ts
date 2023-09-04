import { prisma } from "@/helpers/prisma.helper";
import pick from "@/shared/pick";
import { Book, Prisma } from "@prisma/client";
import { BookConst } from "./book.const";
import { paginationFields } from "@/constants";
import calculatePagination from "@/helpers/pagination.helper";

const select: Prisma.BookSelect = {
  id: true,
  title: true,
  author: true,
  categoryId: true,
  category: {
    select: {
      title: true,
    },
  },
  genre: true,
  price: true,
  publicationDate: true,
  reviewAndRatings: {
    select: {
      id: true,
      review: true,
      rating: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      createdAt: true,
    },
  },
  createdAt: true,
  updatedAt: true,
};

export const createBook = async (context: Book) => {
  const data = await prisma.book.create({
    data: context,
    include: { category: { select: { id: true, title: true } } },
  });
  return data;
};

export const getSingleBook = async (id: string) => {
  const result = await prisma.book.findUnique({ where: { id }, select });
  return result;
};

export const updateBook = async (id: string, context: Partial<Book>) => {
  const result = await prisma.book.update({ where: { id }, data: context });
  return result;
};

export const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({ where: { id } });
  return result;
};

export const getAllBooks = async (query: Record<string, any>) => {
  const { search, ...filterData } = pick(query, BookConst.filterableFields);
  const options = pick(query, paginationFields);
  const { limit, page, skip, sortBy, sortOrder } = calculatePagination(options);

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: BookConst.searchableFields.map((field) => {
        return {
          [field]: {
            contains: search,
            mode: "insensitive",
          },
        };
      }),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.entries(filterData).map(([key, value]) => {
        if (key === "minPrice") {
          return {
            price: {
              gte: Number(value),
            },
          };
        } else if (key === "maxPrice") {
          return {
            price: {
              lte: Number(value),
            },
          };
        }

        return {
          [key]: {
            equals: value,
          },
        };
      }),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const data = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
    select,
  });
  const totalResults = await prisma.book.count({
    where: whereConditions,
  });

  return { data, meta: { totalResults, page, limit, sortBy, sortOrder } };
};

export const getBooksByCategoryId = async (categoryId: string) => {
  const book = await prisma.book.findMany({ where: { categoryId }, select });
  return book;
};
