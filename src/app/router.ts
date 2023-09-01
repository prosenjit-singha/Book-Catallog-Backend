import express from "express";
import type { Router } from "express";

const router = express.Router();

type ModuleRoutes = {
  path: string;
  route: Router;
}[];

const moduleRoutes: ModuleRoutes = [];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
