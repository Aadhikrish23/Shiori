import { Router } from "express";
import {
  googleLogin,
  googleCallback,
  getMe,
} from "../controllers/authController";

const router = Router();

router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);
router.get("/me", getMe);

export default router;