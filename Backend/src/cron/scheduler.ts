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

    if (!lastRun) {
      return now >= todayRun;
    }

    return lastRun < todayRun && now >= todayRun;
  }

  return false;
}

export const startScheduler = () => {
  cron.schedule("* * * * *", async () => {
    console.log("⏱️ Scheduler tick...");

    const users = await User.find();

    for (const user of users) {
      try {
        if (!shouldRun(user)) continue;

        const now = new Date();

        let lastRun;

        if (!user.schedule?.lastRunAt) {
          // 🔥 FIRST RUN ONLY
          lastRun = new Date(now.getTime() - 5 * 60 * 1000);
        } else {
          lastRun = new Date(user.schedule.lastRunAt);
        }

        console.log(`🚀 Scheduling user: ${user._id} | ${lastRun} → ${now}`);

        // 🔥 ONLY mark running here (NOT lastRunAt)
        await User.findByIdAndUpdate(user._id, {
          "schedule.isRunning": true,
        });

        // ✅ PASS TIME RANGE
        await emailQueue.add(
          "process-user-emails",
          {
            userId: user._id.toString(),
            startTime: lastRun,
            endTime: now,
          },
          {
            jobId: `user-${user._id}`, // prevent duplicates
          },
        );
      } catch (err) {
        console.error("❌ Scheduler error:", err);
      }
    }
  });
};
