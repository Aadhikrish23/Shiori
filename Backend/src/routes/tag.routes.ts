import { Router } from "express";
import { getSuggestions } from "../controllers/tag.controller";

const router = Router();

router.get("/suggestions", getSuggestions);

export default router;