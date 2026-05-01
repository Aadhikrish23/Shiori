import { useAuth } from "../../../features/auth/hooks/useAuth";
const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div
      className="
h-16 flex items-center justify-between px-6 
bg-[var(--card)] border-b border-[var(--border)]
backdrop-blur-xl
"
    >
      <h2 className="text-lg font-semibold relative">
        Welcome 👋
        <span className="absolute -bottom-1 left-0 w-6 h-[2px] bg-blue-500 rounded-full" />
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm">{user?.email}</span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
