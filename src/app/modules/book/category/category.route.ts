import express from "express";
import * as ctrl from "./category.controller";
import auth from "../../../middlewares/auth.middleware";
import validateReq from "../../../middlewares/validateRequest";
import * as schema from "./category.validation";

const router = express.Router();

router.get("/", auth("admin", "customer"), ctrl.getAllCategories);
router.post(
  "/create-category",
  validateReq(schema.create),
  auth("admin"),
  ctrl.createCategory
);
router.get("/:id", auth("admin", "customer"), ctrl.getSingleCategory);
router.patch(
  "/:id",
  validateReq(schema.update),
  auth("admin"),
  ctrl.updateCategory
);
router.delete("/:id", auth("admin"), ctrl.deleteCategory);

export default router;
