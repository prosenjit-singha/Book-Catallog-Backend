import { Router } from "express";
import ctrl from "./auth.controller";
import validateReq from "../../middlewares/validateRequest";
import schema from "./auth.validation";

const router = Router();

router.post("/signin", validateReq(schema.loginCredential), ctrl.signIn);

router.post("/signup", validateReq(schema.signUpSchema), ctrl.signUp);

export default router;
