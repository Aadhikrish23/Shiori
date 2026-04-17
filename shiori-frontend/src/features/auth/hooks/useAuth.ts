import { useAuthStore } from "../../../store/authStore";
import API from "../../../services/api";

export const useAuth = () => {
  const { user, loading, setUser, setLoading } = useAuthStore();

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await API.get("/auth/me");
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    window.location.href = "/auth/login";
  };

  return {
    user,
    loading,
    fetchUser,
    logout,
  };
};