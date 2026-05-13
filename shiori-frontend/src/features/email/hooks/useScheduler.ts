import { useEffect,  useState } from "react";
import { useSchedule } from "./useSchedule";

interface Schedule {
  enabled: boolean;
  type: "interval" | "daily";
  intervalMinutes?: number;
  dailyInterval?: number;
  dailyTime?: string;
  lastScheduledRunAt?: string | null;
}

export const useScheduler = () => {
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
          setTimeout(async () => {
            await refreshNextRun();
            setHasTriggered(false);
          }, 5000);
        }

        return;
      }

      // 🔥 CALCULATION LOGIC
      const diffSecs = Math.floor(diff / 1000);
      const diffMins = Math.floor(diffSecs / 60);
      const diffHrs = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHrs / 24);

      if (diffDays > 0) {
        // e.g., "2d 4h"
        const remainingHrs = diffHrs % 24;
        setRemaining(`${diffDays}d ${remainingHrs}h`);
      } else if (diffHrs > 0) {
        // e.g., "5h 30m"
        const remainingMins = diffMins % 60;
        setRemaining(`${diffHrs}h ${remainingMins}m`);
      } else if (diffMins > 0) {
        // e.g., "15m 30s"
        const remainingSecs = diffSecs % 60;
        setRemaining(`${diffMins}m ${remainingSecs}s`);
      } else {
        // e.g., "45s"
        setRemaining(`${diffSecs}s`);
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
