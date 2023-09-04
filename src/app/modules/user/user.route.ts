import express from "express";
import * as ctrl from "./user.controller";
import validateReq from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth.middleware";
import { updateUserSchema } from "./user.validation";

const router = express.Router();

router.get("/", auth("admin"), ctrl.getAllUsers);
router.get("/:id", auth("admin"), ctrl.getSingleUser);
router.patch(
  "/:id",
  validateReq(updateUserSchema),
  auth("admin"),
  ctrl.updateUser
);
router.delete("/:id", auth("admin"), ctrl.deleteUser);

export default router;
