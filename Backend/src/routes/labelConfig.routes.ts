import express from "express";
import {
  getLabels,
  createLabelController,
  updateLabelController,
  deleteLabelController,
} from "../controllers/labelConfig.controller";

const router = express.Router();

router.get("/", getLabels);
router.post("/", createLabelController);
router.put("/:id", updateLabelController);
router.delete("/:id", deleteLabelController);

export default router;