import { Router } from "express";
import { processUserEmails } from "../controllers/emailController";

const router = Router();

router.post("/process-user", processUserEmails);

export default router;