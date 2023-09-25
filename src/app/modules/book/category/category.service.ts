import ApiError from "../../../../error/apiError";
import { prisma } from "../../../../helpers/prisma.helper";
import { Category } from "@prisma/client";
import httpStatus from "http-status";

export const getAllCategories = async () => {
  const result = await prisma.category.findMany({
    where: {},
    orderBy: { createdAt: "desc" },
  });
  return result;
};

export const createCategory = async (context: Category) => {
  const result = await prisma.category.create({ data: context });
  return result;
};

export const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: { id },
    include: {
      books: {
        select: {
          id: true,
          title: true,
          author: true,
          genre: true,
          price: true,
          publicationDate: true,
        },
      },
    },
  });
  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Failed to retrieve category details",
      "Category does not exist"
    );
  }
  return result;
};

export const updateCategory = async (
  id: string,
  context: Partial<Category>
) => {
  const result = await prisma.category.update({ where: { id }, data: context });
  return result;
};

export const deleteCategory = async (id: string) => {
  const result = await prisma.category.delete({ where: { id } });

  return result;
};
