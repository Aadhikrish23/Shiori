import { useState } from "react";
import { getEmailList } from "../../../services/emailService";

export const useEmailList = () => {
  const [emails, setEmails] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchEmails = async (params: any = {}) => {
    try {
      setLoading(true);
      const data = await getEmailList(params);

      setEmails(data.data);
      setPagination(data.pagination);
    } finally {
      setLoading(false);
    }
  };

  return {
    emails,
    pagination,
    loading,
    fetchEmails,
  };
};