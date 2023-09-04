import { prisma } from "../../../../helpers/prisma.helper";
import { Category } from "@prisma/client";

export const getAllCategories = async () => {
  const result = await prisma.category.findMany({ where: {} });
  return result;
};

export const createCategory = async (context: Category) => {
  const result = await prisma.category.create({ data: context });
  return result;
};

export const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({ where: { id } });
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
