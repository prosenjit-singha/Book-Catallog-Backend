import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import service from "./user.service";
import { Request } from "express";

export const getAllUsers = catchAsync(async (req, res) => {
  const data = await service.getAllUsers();

  sendResponse(res, {
    data,
    message: "All users retrieved successfully",
    status: 200,
  });
});

export const getSingleUser = catchAsync(async (req, res) => {
  const data = await service.getSingleUser(req.params.id);

  sendResponse(res, {
    data,
    message: "User data retrieved successfully",
    status: 200,
  });
});

export const getUserProfile = catchAsync(async (req: Request, res) => {
  const data = await service.getSingleUser(req.user.userId);

  sendResponse(res, {
    data,
    message: "User data retrieved successfully",
    status: 200,
  });
});

export const updateUser = catchAsync(async (req, res) => {
  const data = await service.updateUserProfile(req.params.id, req.body);

  sendResponse(res, {
    data,
    message: "User data successfully updated",
    status: 200,
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const data = await service.deleteUser(req.params.id);

  sendResponse(res, {
    data,
    message: "User has been deleted successfully",
    status: 200,
  });
});
