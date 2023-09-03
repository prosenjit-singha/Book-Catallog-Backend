import express from "express";
import * as ctrl from "./user.controller";
import validateReq from "@/app/middlewares/validateRequest";
import auth from "@/app/middlewares/auth.middleware";
// import schema from "./auth.validation";

const router = express.Router();

router.get("/", auth("admin"), ctrl.getAllUsers);
router.get("/:id", auth("admin"), ctrl.getSingleUser);
router.patch("/:id", auth("admin"), ctrl.updateUser);
router.patch("/:id", auth("admin"), ctrl.deleteUser);

export default router;
