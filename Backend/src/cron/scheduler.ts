import cron from "node-cron";
import { User } from "../models/user.model";
import { emailQueue } from "../queue/emailQueue";

function shouldRun(user: any): boolean {
  const schedule = user.schedule;

  if (!schedule?.enabled) return false;
  if (schedule.isRunning) return false;

  const now = new Date();
  const lastRun = schedule.lastRunAt
    ? new Date(schedule.lastRunAt)
    : null;

  // 🔥 INTERVAL
  if (schedule.type === "interval") {
    if (!lastRun) return true;

    const diffMinutes =
      (now.getTime() - lastRun.getTime()) / 60000;

    return diffMinutes >= schedule.intervalMinutes;
  }

  // 🔥 DAILY
  if (schedule.type === "daily") {
    const [hour, minute] = schedule.dailyTime.split(":").map(Number);

    const todayRun = new Date();
    todayRun.setHours(hour, minute, 0, 0);

    if (!lastRun) return now >= todayRun;

    const diffDays =
      (now.getTime() - lastRun.getTime()) /
      (1000 * 60 * 60 * 24);

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
    console.log("⏱️ Scheduler tick...");

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

        console.log(
          `🚀 Scheduling: ${user.email} | ${lastRun} → ${now}`
        );

        // 🔥 mark running
        await User.findByIdAndUpdate(user._id, {
          "schedule.isRunning": true,
        });

        await emailQueue.add(
          "process-user-emails",
          {
            userId: user._id.toString(),
            startTime: lastRun,
            endTime: now,
          }
        );
      } catch (err) {
        console.error("❌ Scheduler error:", err);
      }
    }
  });
};