import { Router } from "express";
import {
  loginUser,
  registerUser,
  changeCurrentPassword,
} from "../controllers/user.controllers.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);

export default router;
