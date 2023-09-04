import { prisma } from "@/helpers/prisma.helper";
import { Order, Prisma, UserRole } from "@prisma/client";

export const placeOrder = async (context: Prisma.OrderCreateInput) => {
  const result = await prisma.order.create({ data: context });
  return result;
};

export const getAllOrders = async ({
  userId,
  role,
}: {
  userId: string;
  role: UserRole;
}) => {
  const where: Prisma.OrderWhereInput = {
    userId: role === "admin" ? undefined : userId,
  };

  const result = await prisma.order.findMany({ where });
  return result;
};

export const getOrdersByUserId = async (userId: string) => {
  const result = await prisma.order.findMany({ where: { userId } });
  return result;
};
