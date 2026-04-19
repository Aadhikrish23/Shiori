import cron from "node-cron";
import { User } from "../models/user.model";
import { emailQueue } from "../queue/emailQueue";

function shouldRun(user: any): boolean {
  const schedule = user.schedule;

  if (!schedule?.enabled) return false;
  if (schedule.isRunning) return false;

  const now = new Date();
  const lastRun = schedule.lastRunAt ? new Date(schedule.lastRunAt) : null;

  if (schedule.type === "interval") {
    if (!lastRun) return true;

    const diffMinutes = (now.getTime() - lastRun.getTime()) / 60000;
    return diffMinutes >= schedule.intervalMinutes;
  }

  if (schedule.type === "daily") {
    const [hour, minute] = schedule.dailyTime.split(":").map(Number);

    const todayRun = new Date();
    todayRun.setHours(hour, minute, 0, 0);

    if (!lastRun) return now >= todayRun;

    const diffDays =
      (now.getTime() - lastRun.getTime()) / (1000 * 60 * 60 * 24);

    return (
      now >= todayRun &&
      diffDays >= schedule.dailyInterval &&
      lastRun < todayRun
    );
  }

  return false;
}

export const startScheduler = () => {
  cron.schedule("* * * * *", async () => {
    console.log("⏱️ Scheduler tick", {
      time: new Date(),
    });

    const users = await User.find({
      "schedule.enabled": true,
      "schedule.isRunning": false,
    });

    for (const user of users) {
      try {
        if (!shouldRun(user)) continue;

        const now = new Date();
        const lastRun =
          user.schedule?.lastRunAt ||
          new Date(now.getTime() - 5 * 60 * 1000);

        const traceId = `cron-${user._id}-${Date.now()}`;

        console.log("📅 SCHEDULER TRIGGER", {
          traceId,
          userId: user._id,
          email: user.email,
          lastRun,
          now,
        });

        // 🔥 ATOMIC LOCK (IMPORTANT)
        const updated = await User.findOneAndUpdate(
          {
            _id: user._id,
            "schedule.isRunning": false,
          },
          {
            $set: { "schedule.isRunning": true },
          },
          { new: true }
        );

        if (!updated) {
          console.log("⛔ SKIPPED (already running)", {
            traceId,
            userId: user._id,
          });
          continue;
        }

        await emailQueue.add(
          "process-user-emails",
          {
            userId: user._id.toString(),
            startTime: lastRun,
            endTime: now,
            jobType: user.plan === "premium" ? "premium" : "free",
            traceId,
          },
          {
            jobId: `cron-${user._id}`, // 🔥 prevents duplicates
            priority: 1,
          }
        );

        console.log("📤 SCHEDULER QUEUED", {
          traceId,
          userId: user._id,
        });
      } catch (err: any) {
        console.error("❌ Scheduler error", {
          error: err.message,
          stack: err.stack,
        });
      }
    }
  });
};