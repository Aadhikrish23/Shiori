import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleLogin = () => {
    setLoading(true);
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };

  // 🎯 Cursor tracking glow
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="h-screen flex bg-black relative overflow-hidden">

      {/* 🌈 ANIMATED GRADIENT */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#0f172a,#1e293b,#0f172a)] opacity-90" />

      {/* ✨ CURSOR GLOW */}
      <div
        className="pointer-events-none absolute w-100 h-100 rounded-full blur-[120px] bg-blue-500/20"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
      />

      {/* 🌌 FLOATING PARTICLES */}
      <Particles />

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex w-[60%] flex-col justify-center px-24 z-10"
      >
        <h1 className="text-6xl font-bold text-white tracking-tight">
          Shiori
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-md leading-relaxed">
          Your inbox, finally under control.
        </p>

        <div className="mt-14 space-y-8">
          <Feature title="AI that understands context">
            Not just filters — actual intelligence.
          </Feature>

          <Feature title="Zero effort automation">
            It learns. It adapts. It improves.
          </Feature>

          <Feature title="Designed for clarity">
            Clean, fast, distraction-free workflow.
          </Feature>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[40%] flex items-center justify-center z-10 p-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            w-full max-w-md
            relative
            p-8 rounded-2xl
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            shadow-[0_30px_100px_rgba(0,0,0,0.8)]
          "
        >
          {/* 💡 neon edge glow */}
          <div className="absolute inset-0 rounded-2xl border border-blue-500/20 blur-sm pointer-events-none" />

          <h2 className="text-2xl font-semibold text-white">
            Welcome back
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Sign in to continue
          </p>

          {/* 🔥 SUPER BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogin}
            disabled={loading}
            className="
              mt-6 w-full flex items-center justify-center gap-3 
              rounded-lg py-3 
              bg-white text-black
              font-medium
              relative overflow-hidden
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
              disabled:opacity-60
            "
          >
            {/* ⚡ pulse effect */}
            <span className="absolute inset-0 bg-blue-500/10 animate-pulse opacity-0 hover:opacity-100" />

            <FcGoogle size={20} />
            {loading ? "Redirecting..." : "Continue with Google"}
          </motion.button>

          <p className="text-xs text-gray-500 mt-6 text-center">
            By continuing, you agree to our terms and privacy policy.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

/* ✨ PARTICLES COMPONENT */
const Particles = () => {
  const particles = Array.from({ length: 25 });

  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
};

/* 🔹 FEATURE BLOCK */
const Feature = ({ title, children }: any) => (
  <div>
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="text-sm text-gray-400 mt-1 max-w-sm">
      {children}
    </p>
  </div>
);

export default Login;