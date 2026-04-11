import { Router } from "express";
import {  processEmails } from "../controllers/emailController";

const router = Router();



router.get("/process", processEmails);

export default router;