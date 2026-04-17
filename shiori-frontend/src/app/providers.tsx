import { useEffect } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";
const Providers = ({ children }: { children: React.ReactNode }) => {
const { fetchUser, loading } = useAuth();
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading app...</div>;
  }

  return <>{children}</>;
};

export default Providers;