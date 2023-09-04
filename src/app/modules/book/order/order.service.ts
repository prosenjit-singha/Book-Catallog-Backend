import ApiError from "../../../../error/apiError";
import { prisma } from "../../../../helpers/prisma.helper";
import { Order, Prisma, UserRole } from "@prisma/client";
import httpStatus from "http-status";

type UserInfo = {
  userId: string;
  role: UserRole;
};

export const placeOrder = async (context: Prisma.OrderCreateInput) => {
  const result = await prisma.order.create({ data: context });
  return result;
};

export const getAllOrders = async ({ userId, role }: UserInfo) => {
  const where: Prisma.OrderWhereInput = {
    userId: role === "admin" ? undefined : userId,
  };

  const result = await prisma.order.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return result;
};

export const getSingleOrder = async (
  bookId: string,
  { role, userId }: UserInfo
) => {
  const result = await prisma.order.findUnique({ where: { id: bookId } });

  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Failed to retrieve order information",
      "Order does not exist"
    );
  }

  if (role === "admin") {
    return result;
  } else {
    if (result.userId !== userId) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        "Failed to retrieve order information",
        "Forbidden Request"
      );
    } else {
      return result;
    }
  }
};
