import * as service from "./order.service";
import catchAsync from "@/shared/catchAsync";
import sendResponse from "@/shared/sendResponse";
import { Request } from "express";

export const getAllOrders = catchAsync(async (req: Request, res) => {
  const data = await service.getAllOrders(req.user);
  sendResponse(res, {
    status: 200,
    data,
    message: "All orders retrieved successfully",
  });
});

export const placeOrder = catchAsync(async (req: Request, res) => {
  console.log(req.user);
  req.body.userId = req.user.userId;
  const data = await service.placeOrder(req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Order placed successfully",
  });
});

export const getSingleOrder = catchAsync(async (req: Request, res) => {
  const data = await service.getSingleOrder(req.params.orderId, req.user);
  sendResponse(res, {
    status: 200,
    data,
    message: "Order placed successfully",
  });
});
