import { Link, useLocation } from "react-router-dom";
import { useThemeStore } from "../../../store/themeStore";

const Sidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeStore();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Labels", path: "/labels" },
    { name: "Emails", path: "/emails" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 min-h-full bg-[#0b1220] border-r border-[#1f2937]  text-white p-5">
      <h1 className="text-2xl font-bold mb-8">Shiori</h1>

      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block p-2 rounded-lg ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-10 border-t border-gray-700 pt-4">
        <button
          onClick={toggleTheme}
          className="w-full p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
