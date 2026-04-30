import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <div className="p-6 min-h-screen bg-(--bg)">{children}</div>
      </div>
    </div>
  );
};

export default Layout;