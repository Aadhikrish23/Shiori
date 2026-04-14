import express, { Request, Response } from "express";
import dotenv from "dotenv";
import session from "express-session";
import { requireAuth } from "./middlewares/auth.middleware";
import cors from "cors"
dotenv.config();

import emailRoutes from "./routes/emailRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import connectMongoose from "./config/mongo";
import { connectRedis } from "./config/redis";
import authRoutes from "./routes/authRoutes"
import { startScheduler } from "./cron/scheduler";

// Queue system
import "./queue/worker"; // just import to start worker
import tagRoutes from "./routes/tag.routes";
import labelConfigRoutes from "./routes/labelConfig.routes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "shiori-secret", // change later
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true in production (HTTPS)
      httpOnly: true,
    },
  })
);

app.use("/api/email",requireAuth, emailRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tags",requireAuth, tagRoutes);

app.use("/api/labels",requireAuth, labelConfigRoutes);

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


