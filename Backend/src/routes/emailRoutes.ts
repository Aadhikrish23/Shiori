import { Router } from "express";
import { getEmailStatsController, processCustomRange, processUserEmails } from "../controllers/emailController";

const router = Router();

router.post("/process-user", processUserEmails);
router.post("/process-custom", processCustomRange);
router.get("/stats", getEmailStatsController);

export default router;