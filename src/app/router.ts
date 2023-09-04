import express from "express";
import type { Router } from "express";
import AuthRoute from "@/app/modules/auth/auth.route";
import UserRoute from "@/app/modules/user/user.route";
import CategoryRoute from "@/app/modules/book/category/category.route";
import OrderRoute from "@/app/modules/book/order/order.route";
import BookRoute from "@/app/modules/book/book.route";
import authorize from "./middlewares/auth.middleware";
import { getUserProfile } from "./modules/user/user.controller";

const router = express.Router();

type ModuleRoutes = {
  path: string;
  route: Router;
}[];

const moduleRoutes: ModuleRoutes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/categories",
    route: CategoryRoute,
  },
  {
    path: "/books",
    route: BookRoute,
  },
  {
    path: "/orders",
    route: OrderRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

router.get("/profile", authorize("admin", "customer"), getUserProfile);

export default router;
