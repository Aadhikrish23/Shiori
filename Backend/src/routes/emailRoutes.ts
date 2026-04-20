import { Router } from "express";
import {
  getDashboardController,
  getEmailStatsController,
  processCustomRange,
  processUserEmails,
  getEmailListController,
  getEmailOverviewController,
  processBulkEmails
} from "../controllers/emailController";
import { cancelJob, getJobStatus } from "../controllers/jobController";

const router = Router();

router.post("/process-user", processUserEmails);
router.post("/process-custom", processCustomRange);
router.get("/stats", getEmailStatsController);
router.get("/dashboard", getDashboardController);
router.get("/list", getEmailListController);
router.get("/overview", getEmailOverviewController);
router.post("/process-bulk", processBulkEmails);
router.get("/job-status", getJobStatus);
router.post("/cancel-job", cancelJob);

export default router;
