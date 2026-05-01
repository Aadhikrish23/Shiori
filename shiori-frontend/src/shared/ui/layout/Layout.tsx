import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-[var(--bg)]">
      {/* 🌌 THEME SAFE AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent-soft)] rounded-full blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent-soft)] rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <Sidebar />

      <div className="flex-1 relative z-10">
        <Navbar />
        <div className="p-6 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
