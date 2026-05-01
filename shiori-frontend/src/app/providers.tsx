import { useEffect } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useThemeStore } from "../store/themeStore";
import { socket, initSocketListeners } from "../services/socket";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const { fetchUser, loading, user } = useAuth();
  const { theme } = useThemeStore();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    initSocketListeners();
  }, []);

  useEffect(() => {
    if (user?.id) {
      socket.emit("join", user.id.toString()); // 🔥 ensure string
    }
  }, [user]);
  // ✅ APPLY THEME
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading app...</div>;
  }

  return <>{children}</>;
};

export default Providers;
