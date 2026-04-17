import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };

  return (
    <div className="h-screen flex bg-gray-50">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-12 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shiori</h1>
          <p className="mt-4 text-sm text-indigo-100">
            AI-powered email organization that actually works.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Focus on what matters
          </h2>
          <p className="mt-2 text-sm text-indigo-100">
            Automatically categorize, prioritize, and clean your inbox.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
          
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue to Shiori
          </p>

          <button
            onClick={handleLogin}
            className="mt-6 w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-50 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium">
              Continue with Google
            </span>
          </button>

          <p className="text-xs text-gray-400 mt-6 text-center">
            By continuing, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;