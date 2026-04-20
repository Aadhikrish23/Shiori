import { useEmailStore } from "../../../store/emailStore";
import * as emailService from "../../../services/emailService";

export const useEmail = () => {
  const {
    stats,
    dashboard,
    loading,
    setStats,
    setDashboard,
    setLoading,
    job,
    setJob,
  } = useEmailStore();

  // =========================
  // STATS
  // =========================
  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await emailService.getStats();
      setStats(data);
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboard = async () => {
    const data = await emailService.getDashboard();
    setDashboard(data);
  };

  // =========================
  // 🔥 JOB STATUS
  // =========================
  const fetchJobStatus = async () => {
    try {
      const data = await emailService.getJobStatus();

      if (!data || data.status === "completed") {
        setJob(null);
        return null;
      }

      setJob(data);
      return data;
    } catch {
      setJob(null);
      return null;
    }
  };

  // =========================
  // PROCESS EMAILS
  // =========================
  const processEmails = async (options?: {
    startDate?: string;
    endDate?: string;
    includeProcessed?: boolean;
  }) => {
    try {
      if (options?.startDate && options?.endDate) {
        await emailService.processCustom({
          startDate: options.startDate,
          endDate: options.endDate,
          includeProcessed: options.includeProcessed ?? false,
        });
      } else {
        await emailService.processEmails();
      }

      // 🔥 IMPORTANT: fetch job immediately
      await fetchJobStatus();

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const processBulk = async () => {
    try {
      await emailService.processBulk();

      // 🔥 IMPORTANT
      await fetchJobStatus();

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return {
    stats,
    dashboard,
    loading,
    fetchStats,
    fetchDashboard,
    processEmails,
    processBulk,
    job,
    fetchJobStatus,
  };
};