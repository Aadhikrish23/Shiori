import { useState } from "react";
import { getEmailList } from "../../../services/emailService";

export const useEmailList = () => {
  const [emails, setEmails] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchEmails = async (params: any = {}) => {
    try {
      setLoading(true);

      const query: any = JSON.parse(JSON.stringify(params));

      if (params.action === "archived") {
        query.isArchived = true;
        delete query.action;
      }

      if (params.action === "important") {
        query.isImportant = true;
        delete query.action;
      }

      const data = await getEmailList(query);

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
    setEmails,
  };
};
