import express from "express";
import * as ctrl from "./book.controller";
import auth from "../../middlewares/auth.middleware";
import validateReq from "../../middlewares/validateRequest";
import * as schema from "./book.validation";

const router = express.Router();

router.get(
  "/",
  validateReq(schema.getAllBook),
  auth("admin", "customer"),
  ctrl.getAllBooks
);

router.post(
  "/",
  validateReq(schema.createBook),
  auth("admin"),
  ctrl.createBook
);

// Get Books By Category ID
router.get(
  "/:categoryId/category",
  auth("admin", "customer"),
  ctrl.getBooksByCategoryId
);

router.get("/:id", auth("admin", "customer"), ctrl.getSingleBook);

router.patch(
  "/:id",
  validateReq(schema.updateBook),
  auth("admin"),
  ctrl.updateBook
);

router.delete("/:id", auth("admin"), ctrl.deleteBook);

export default router;
