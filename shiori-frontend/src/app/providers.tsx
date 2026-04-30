import { useEffect } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useThemeStore } from "../store/themeStore";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { fetchUser, loading } = useAuth();
  const { theme } = useThemeStore();

  useEffect(() => {
    fetchUser();
  }, []);

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