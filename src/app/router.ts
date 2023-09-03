import express from "express";
import type { Router } from "express";
import AuthRoute from "@/app/modules/auth/auth.route";
import UserRoute from "@/app/modules/user/user.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
