const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Welcome 👋</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm">User</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;