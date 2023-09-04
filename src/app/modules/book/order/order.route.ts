import express from "express";
import * as ctrl from "./order.controller";
import auth from "@/app/middlewares/auth.middleware";
import validateReq from "@/app/middlewares/validateRequest";
import * as schema from "./order.validation";

const router = express.Router();

router.post(
  "/create-order",
  validateReq(schema.orderSchema),
  auth("customer"),
  ctrl.placeOrder
);

router.get("/", auth("admin", "customer"), ctrl.getAllOrders);

router.get("/:orderId", auth("admin", "customer"), ctrl.getSingleOrder);

export default router;
