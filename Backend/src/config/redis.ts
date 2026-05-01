import { createClient } from "redis";

const REDIS_URL = "redis://127.0.0.1:6379";

export const redisClient = createClient({
  url: REDIS_URL,
});

// 🔥 NEW CLIENTS FOR PUB/SUB
export const pubClient = createClient({
  url: REDIS_URL,
});

export const subClient = createClient({
  url: REDIS_URL,
});

const handleError = (label: string) => (err: any) => {
  console.error(`❌ Redis ${label} error:`, err);
};

redisClient.on("error", handleError("main"));
pubClient.on("error", handleError("pub"));
subClient.on("error", handleError("sub"));

export const connectRedis = async () => {
  if (!redisClient.isOpen) await redisClient.connect();
  if (!pubClient.isOpen) await pubClient.connect();
  if (!subClient.isOpen) await subClient.connect();

  console.log("🟢 Redis connected (all clients)");
};