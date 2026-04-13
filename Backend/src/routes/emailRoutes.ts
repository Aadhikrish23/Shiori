import { Router } from "express";
import { processCustomRange, processUserEmails } from "../controllers/emailController";

const router = Router();

router.post("/process-user", processUserEmails);
router.post("/process-custom", processCustomRange);

export default router;