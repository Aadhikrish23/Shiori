import { Router } from "express";
import { classify, fetchEmails, processEmails } from "../controllers/emailController";

const router = Router();

router.post("/classify", classify);
router.get("/fetch", fetchEmails);

router.get("/process", processEmails);

export default router;