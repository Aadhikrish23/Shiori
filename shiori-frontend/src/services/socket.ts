import { io } from "socket.io-client";
import { useEmailStore } from "../store/emailStore";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  withCredentials: true,
  transports: ["websocket"], // 🔥 force websocket (no upgrade issues)
});

// 🔥 INIT ALL LISTENERS IN ONE PLACE
export const initSocketListeners = () => {
  const setJob = useEmailStore.getState().setJob;

  // ✅ connection logs
  socket.on("connect", () => {
    console.log("🟢 Socket connected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log("❌ Socket error:", err.message);
  });

  // 🔄 progress updates
  socket.on("job-progress", (data) => {
    setJob({
      status: "active",
      progress: data.progress,
    });
  });

  // ✅ completed
  socket.on("job-complete", () => {
    setJob({
      status: "completed",
      progress: 100,
    });
  });

  // ❌ failed
  socket.on("job-failed", () => {
    setJob({
      status: "failed",
      progress: 0,
    });
  });
};