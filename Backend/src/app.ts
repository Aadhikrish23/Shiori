import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import emailRoutes from "./routes/emailRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import connectMongoose from "./config/mongo";
import { connectRedis } from "./config/redis";
import authRoutes from "./routes/authRoutes"
import { startScheduler } from "./cron/scheduler";

// Queue system
import "./queue/worker"; // just import to start worker

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/email", emailRoutes);
app.use("/auth",authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is working...🥳🥳");
});

app.use(errorHandler);

const startServer = async () => {
  await connectMongoose();
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);

    // 🔥 Start scheduler AFTER server ready
    startScheduler();
    console.log("🟢 Scheduler started...");
  });
};

startServer();