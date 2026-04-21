import { useEffect, useState } from "react";
import { useSchedule } from "./useSchedule";

interface Schedule {
  enabled: boolean;
  type: "interval" | "daily";
  intervalMinutes?: number;
  dailyInterval?: number;
  dailyTime?: string;
  lastScheduledRunAt?: string | null;
}

export const useScheduler = (fetchStats?: () => Promise<void>) => {
  const { getSchedule } = useSchedule();

  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [nextRun, setNextRun] = useState<Date | null>(null);
  const [remaining, setRemaining] = useState("");
  const [hasTriggered, setHasTriggered] = useState(false);

  // =========================
  // 🧠 CALCULATE NEXT RUN
  // =========================
  const getNextRun = (schedule: Schedule) => {
    if (!schedule?.enabled) return null;

    const now = new Date();

    if (schedule.type === "interval") {
      if (!schedule.lastScheduledRunAt) return now;

      const last = new Date(schedule.lastScheduledRunAt);
      return new Date(last.getTime() + (schedule.intervalMinutes || 0) * 60000);
    }

    if (schedule.type === "daily") {
      if (!schedule.dailyTime) return null;

      const [h, m] = schedule.dailyTime.split(":").map(Number);

      const next = new Date();
      next.setHours(h, m, 0, 0);

      if (next <= now) {
        next.setDate(next.getDate() + (schedule.dailyInterval || 1));
      }

      return next;
    }

    return null;
  };

  // =========================
  // 📥 LOAD SCHEDULE
  // =========================
  const loadSchedule = async () => {
    const data = await getSchedule();
    if (!data) return;

    setSchedule(data);

    if (!data.enabled) {
      setNextRun(null);
      setRemaining("");
      return;
    }

    const next = getNextRun(data);
    setNextRun(next);
  };

  useEffect(() => {
    loadSchedule();
  }, []);

  // =========================
  // ⏱ COUNTDOWN (PURE UI)
  // =========================
  useEffect(() => {
    if (!nextRun) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextRun.getTime() - now.getTime();

      if (diff <= 0) {
        setRemaining("Running...");

        if (!hasTriggered) {
          setHasTriggered(true);

          // 🔥 force refresh after cron likely finishes
          setTimeout(async () => {
            await refreshNextRun();
            if (fetchStats) {
              await fetchStats();
            }
            setHasTriggered(false);
          }, 5000); // adjust if needed
        }

        return;
      }

      const hours = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);

      if (hours > 0) {
        setRemaining(`${hours}h ${mins}m`);
      } else {
        const secs = Math.floor((diff % 60000) / 1000);
        setRemaining(`${mins}m ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextRun]);

  // =========================
  // 🔄 AUTO SYNC WITH BACKEND
  // =========================
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getSchedule();

      if (!data?.enabled) {
        setNextRun(null);
        setRemaining("");
        return;
      }

      const next = getNextRun(data);
      setNextRun(next);
      setHasTriggered(false);
      fetchStats;
    }, 10000); // every 10 sec

    return () => clearInterval(interval);
  }, []);

  // =========================
  // 🔄 MANUAL REFRESH
  // =========================
  const refreshNextRun = async () => {
    const data = await getSchedule();

    if (!data?.enabled) {
      setNextRun(null);
      setRemaining("");
      return;
    }

    const next = getNextRun(data);
    setNextRun(next);
  };

  // =========================
  // 🧾 FORMAT
  // =========================
  const formatNextRun = (date: Date | null) => {
    if (!date) return "—";

    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    const time = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    if (isToday) return `Today at ${time}`;
    if (isTomorrow) return `Tomorrow at ${time}`;

    return (
      date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      }) + `, ${time}`
    );
  };

  return {
    schedule,
    nextRun,
    remaining,
    refreshNextRun,
    formatNextRun,
  };
};
