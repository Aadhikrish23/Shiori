import cron from "node-cron";
import { User } from "../models/user.model";
import { emailQueue } from "../queue/emailQueue";

function shouldRun(user: any): boolean {
  const schedule = user.schedule;

  if (!schedule?.enabled) return false;

  const now = new Date();
  const lastRun = schedule.lastRunAt
    ? new Date(schedule.lastRunAt)
    : null;

  // =========================
  // INTERVAL
  // =========================
  if (schedule.type === "interval") {
    if (!lastRun) return true;

    const diffMinutes =
      (now.getTime() - lastRun.getTime()) / 60000;

    return diffMinutes >= schedule.intervalMinutes;
  }

  // =========================
  // DAILY
  // =========================
  if (schedule.type === "daily") {
    const [hour, minute] = schedule.dailyTime
      .split(":")
      .map(Number);

    // ✅ Create UTC date safely (no mutation bugs)
    const scheduledUTC = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hour,
        minute,
        0,
        0
      )
    );

    // IST offset → subtract 5h30m
    scheduledUTC.setUTCMinutes(
      scheduledUTC.getUTCMinutes() - 330
    );

    // ✅ timezone-safe same day check
    const sameDay =
      lastRun &&
      lastRun.toISOString().slice(0, 10) ===
        now.toISOString().slice(0, 10);

    const alreadyRanToday =
      lastRun &&
      lastRun >= scheduledUTC &&
      sameDay;

    console.log("🧠 DAILY FINAL", {
      now: now.toISOString(),
      scheduledUTC: scheduledUTC.toISOString(),
      lastRun: lastRun?.toISOString(),
      alreadyRanToday,
    });

    return now >= scheduledUTC && !alreadyRanToday;
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
    });

    for (const user of users) {
      try {
        const schedule = user.schedule;

        // =========================
        // 🔥 HANDLE RUNNING STATE
        // =========================
        if (schedule.isRunning) {
          if (schedule.runningType === "cron") {
            const lastRun = schedule.lastRunAt
              ? new Date(schedule.lastRunAt)
              : null;

            const now = new Date();

            // 🔥 stale cron recovery (10 min)
            if (
              lastRun &&
              now.getTime() - lastRun.getTime() >
                10 * 60 * 1000
            ) {
              console.log(
                "⚠️ RESETTING STALE CRON LOCK",
                user._id
              );

              await User.findByIdAndUpdate(user._id, {
                "schedule.isRunning": false,
                "schedule.runningType": null,
              });
            } else {
              continue;
            }
          } else {
            // bulk/manual → do nothing
            continue;
          }
        }

        if (!shouldRun(user)) continue;

        const now = new Date();
        const lastRun =
          schedule.lastRunAt ||
          new Date(now.getTime() - 5 * 60 * 1000);

        const traceId = `cron-traceId-${user._id}-${Date.now()}`;

        console.log("📅 SCHEDULER TRIGGER", {
          traceId,
          userId: user._id,
          email: user.email,
          lastRun,
          now,
        });

        // =========================
        // 🔒 ATOMIC LOCK
        // =========================
        const updated = await User.findOneAndUpdate(
          {
            _id: user._id,
            "schedule.isRunning": false,
          },
          {
            $set: {
              "schedule.isRunning": true,
              "schedule.runningType": "cron",
            },
          },
          { returnDocument: "after" }
        );

        if (!updated) {
          console.log("⛔ SKIPPED (race condition)", {
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
            jobType:
              user.plan === "premium" ? "premium" : "free",
            traceId,
          },
          {
            jobId: `cron-${user._id}-${Date.now()}`,
            priority: 1,
          }
        );

        console.log("📤 SCHEDULER QUEUED", {
          traceId,
          userId: user._id,
        });

        // =========================
        // 🔥 OPTIONAL SAFETY UPDATE
        // =========================
        // (prevents duplicate if worker crashes early)
        await User.findByIdAndUpdate(user._id, {
          "schedule.lastRunAt": now,
        });

      } catch (err: any) {
        console.error("❌ Scheduler error", {
          error: err.message,
        });
      }
    }
  });
};