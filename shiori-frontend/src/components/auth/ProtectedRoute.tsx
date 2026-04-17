import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore.ts";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div className="p-6 text-gray-500">Checking session...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;