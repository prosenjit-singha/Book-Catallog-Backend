import express from "express";
import * as ctrl from "./category.controller";
import auth from "@/app/middlewares/auth.middleware";
// import validateReq from "@/app/middlewares/validateRequest";
// import schema from "./auth.validation";

const router = express.Router();

router.get("/", auth("admin", "customer"), ctrl.getAllCategories);
router.post("/", auth("admin"), ctrl.createCategory);
router.get("/:id", auth("admin"), ctrl.getSingleCategory);
router.patch("/:id", auth("admin"), ctrl.updateCategory);
router.patch("/:id", auth("admin"), ctrl.deleteCategory);

export default router;
