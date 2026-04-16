import { Router } from "express";
import { getSchedule, saveSchedule } from "../controllers/scheduleController";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.put("/", requireAuth, saveSchedule);
router.get("/", requireAuth, getSchedule);

export default router;