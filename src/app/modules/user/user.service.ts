import ApiError from "@/error/apiError";
import { prisma } from "@/helpers/prisma.helper";
import type { User } from "@prisma/client";
import httpStatus from "http-status";

export const getUserProfile = async (id: string): Promise<User> => {
  const data = await prisma.user.findUnique({ where: { id } });
  if (!data) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Failed to retrieve user profile",
      "User does not exist"
    );
  }
  return data;
};

export const updateUserProfile = async (
  id: string,
  context: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({ where: { id }, data: context });
  return result;
};

export const getAllUsers = async () => {
  const result = await prisma.user.findMany();

  return result;
};
