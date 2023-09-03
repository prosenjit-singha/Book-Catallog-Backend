import * as service from "./category.service";
import catchAsync from "@/shared/catchAsync";
import sendResponse from "@/shared/sendResponse";

export const getAllCategories = catchAsync(async (req, res) => {
  const data = await service.getAllCategories();
  sendResponse(res, {
    status: 200,
    data,
    message: "Categories retrieved successfully",
  });
});

export const getSingleCategory = catchAsync(async (req, res) => {
  const data = await service.getSingleCategory(req.params.id);
  sendResponse(res, {
    status: 200,
    data,
    message: "Category retrieved successfully",
  });
});

export const createCategory = catchAsync(async (req, res) => {
  const data = await service.createCategory(req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Categories created successfully",
  });
});

export const updateCategory = catchAsync(async (req, res) => {
  const data = await service.updateCategory(req.params.id, req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "Category updated successfully",
  });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const data = await service.deleteCategory(req.params.id);
  sendResponse(res, {
    status: 200,
    data,
    message: "Category deleted successfully",
  });
});
