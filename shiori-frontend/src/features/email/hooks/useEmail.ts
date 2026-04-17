import { useEmailStore } from "../../../store/emailStore";
import * as emailService from "../../../services/emailService";

export const useEmail = () => {
  const {
    stats,
    dashboard,
    loading,
    processing,
    setStats,
    setDashboard,
    setLoading,
    setProcessing,
  } = useEmailStore();

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

  const processEmails = async (options?: {
    startDate?: string;
    endDate?: string;
    includeProcessed?: boolean;
  }) => {
    try {
      setProcessing(true);

      if (options?.startDate && options?.endDate) {
        await emailService.processCustom({
          startDate: options.startDate,
          endDate: options.endDate,
          includeProcessed: options.includeProcessed ?? false,
        });
      } else {
        await emailService.processEmails();
      }
    } finally {
      setProcessing(false);
    }
  };

  return {
    stats,
    dashboard,
    loading,
    processing,
    fetchStats,
    fetchDashboard,
    processEmails,
  };
};