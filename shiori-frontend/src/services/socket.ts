import { io } from "socket.io-client";
import { useEmailStore } from "../store/emailStore";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  withCredentials: true,
  transports: ["websocket"],
});

export const initSocketListeners = () => {
  socket.off("connect");
  socket.off("connect_error");
  socket.off("job-progress");
  socket.off("job-complete");
  socket.off("job-failed");

  socket.on("connect", () => {
    console.log("🟢 Socket connected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log("❌ Socket error:", err.message);
  });

  socket.on("job-progress", (data) => {
    console.log("🔥 WS EVENT:", data);

    useEmailStore.setState((state) => ({
      job: {
        ...(state.job || {}), // 🔥 important fix
        status: "active",
        ...data,
      },
    }));
  });

  socket.on("job-complete", () => {
    useEmailStore.setState((state) => ({
      job: {
        ...(state.job || {}),
        status: "completed",
      },
    }));
  });

  socket.on("job-failed", () => {
    useEmailStore.setState((state) => ({
      job: {
        ...(state.job || {}),
        status: "failed",
      },
    }));
  });
};