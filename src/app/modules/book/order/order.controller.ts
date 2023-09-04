import * as service from "./order.service";
import catchAsync from "@/shared/catchAsync";
import sendResponse from "@/shared/sendResponse";
import { Request } from "express";

export const getAllOrders = catchAsync(async (req: Request, res) => {
  const data = await service.getAllOrders({
    userId: req.user.userId,
    role: req.user.role,
  });
  sendResponse(res, {
    status: 200,
    data,
    message: "All orders retrieved successfully",
  });
});

export const placeOrder = catchAsync(async (req: Request, res) => {
  req.body.userId = req.user.userId;
  const data = await service.placeOrder(req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Order placed successfully",
  });
});
