import Layout from "../../../shared/ui/layout/Layout";
import { useEffect, useState } from "react";
import { useEmailList } from "../hooks/useEmailList";
import { useEmail } from "../hooks/useEmail";
import { useSchedule } from "../hooks/useSchedule";

import EmailRow from "../components/EmailRow";
import EmailFilters from "../components/EmailFilters";
import Pagination from "../components/Pagination";
import ProcessModal from "../components/ProcessModal";

const Emails = () => {
  const { emails, pagination, loading, fetchEmails } = useEmailList();
  const { stats, fetchStats, job, fetchJobStatus, processBulk } = useEmail();

  const { saveSchedule, getSchedule } = useSchedule();

  // =========================
  // FILTERS
  // =========================
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    label: "",
    action: "",
    type: "",
  });

  const [openModal, setOpenModal] = useState(false);

  // =========================
  // SCHEDULER STATE
  // =========================
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"interval" | "daily">("interval");

  const [unit, setUnit] = useState<"minutes" | "hours">("minutes");
  const [value, setValue] = useState(5);

  const [dailyInterval, setDailyInterval] = useState(1);
  const [time, setTime] = useState("09:00");

  const [initialized, setInitialized] = useState(false);

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    fetchEmails(filters);
  }, [filters]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getSchedule();
        if (!data) return;

        setEnabled(data.enabled);
        setMode(data.type);

        if (data.type === "interval") {
          if (data.intervalMinutes >= 60) {
            setUnit("hours");
            setValue(data.intervalMinutes / 60);
          } else {
            setUnit("minutes");
            setValue(data.intervalMinutes);
          }
        }

        if (data.type === "daily") {
          setDailyInterval(data.dailyInterval || 1);
          setTime(data.dailyTime || "09:00");
        }
      } finally {
        setInitialized(true);
      }
    };

    load();
  }, []);

  // =========================
  // 🔥 POLLING (FIXED)
  // =========================
  // useEffect(() => {
  //   if (!job || job.status !== "active") return;

  //   const interval = setInterval(async () => {
  //     const data = await fetchJobStatus();

  //     if (!data || data.status !== "active") {
  //       clearInterval(interval);
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [job?.status]);

  // =========================
  // 🔥 REFRESH AFTER COMPLETE
  // =========================
  useEffect(() => {
    if (job?.status === "completed") {
      fetchEmails(filters);
      fetchStats();
    }
  }, [job?.status]);

  // =========================
  // 🔥 AUTO SAVE SCHEDULER
  // =========================
  useEffect(() => {
    if (!initialized) return;

    const timeout = setTimeout(async () => {
      try {
        if (!enabled) {
          await saveSchedule({ enabled: false });
          return;
        }

        let payload: any = {
          enabled,
          type: mode,
        };

        if (mode === "interval") {
          payload.intervalMinutes = unit === "hours" ? value * 60 : value;
        }

        if (mode === "daily") {
          payload.dailyInterval = dailyInterval;
          payload.dailyTime = time;
        }

        await saveSchedule(payload);
      } catch (err) {
        console.error(err);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [enabled, mode, unit, value, dailyInterval, time, initialized]);

  // =========================
  // UI
  // =========================
  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Emails</h1>
            <p className="text-sm text-gray-500">
              AI-powered email classification
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setOpenModal(true)}
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Custom Process
            </button>

            <button
              onClick={async () => {
                const ok = await processBulk();
                if (ok) alert("Bulk started 🚀");
              }}
              className="px-4 py-2 rounded bg-purple-600 text-white"
            >
              Bulk Process
            </button>
          </div>
        </div>

        {/* 🔥 PROGRESS
        {job?.status === "active" && (
          <div className="bg-white border rounded-xl p-5">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Processing...</span>
              <span>{job.progress || 0}%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-600 transition-all duration-300"
                style={{ width: `${job.progress || 0}%` }}
              />
            </div>

            <button
              onClick={() => emailService.cancelJob()}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        )} */}

        {/* 🔥 AUTOMATION */}
        <div className="bg-white p-5 rounded-xl border space-y-4">
          <h2 className="font-semibold text-lg">Automation</h2>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <span>Enable automation</span>
          </div>

          <div
            className={`space-y-4 ${
              !enabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {/* MODE */}
            <div className="flex gap-2">
              <button
                onClick={() => setMode("interval")}
                className={`px-3 py-1 rounded ${
                  mode === "interval" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                Interval
              </button>

              <button
                onClick={() => setMode("daily")}
                className={`px-3 py-1 rounded ${
                  mode === "daily" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                Daily
              </button>
            </div>

            {/* INTERVAL */}
            {mode === "interval" && (
              <div className="flex gap-2 items-center">
                <span>Every</span>

                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="border p-2 rounded w-20"
                />

                <select
                  value={unit}
                  onChange={(e) =>
                    setUnit(e.target.value as "minutes" | "hours")
                  }
                  className="border p-2 rounded"
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
            )}

            {/* DAILY */}
            {mode === "daily" && (
              <div className="flex gap-3 items-center">
                <span>Every</span>

                <input
                  type="number"
                  value={dailyInterval}
                  onChange={(e) => setDailyInterval(Number(e.target.value))}
                  className="border p-2 rounded w-20"
                />

                <span>day(s)</span>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>
            )}
          </div>
        </div>

        {/* 🔥 STATS */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-xl font-semibold">
              {stats?.totalProcessed || 0}
            </p>
          </div>

          <div className="bg-white p-4 rounded border">
            <p className="text-xs text-gray-500">Today</p>
            <p className="text-xl font-semibold">
              {stats?.processedToday || 0}
            </p>
          </div>

          <div className="bg-white p-4 rounded border">
            <p className="text-xs text-gray-500">Last Run</p>
            <p className="text-sm">
              {stats?.lastRunAt
                ? new Date(stats.lastRunAt).toLocaleString()
                : "Never"}
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <EmailFilters filters={filters} setFilters={setFilters} />

        {/* LIST */}
        <div className="bg-white rounded border">
          {loading ? (
            <p className="p-6 text-gray-500">Loading...</p>
          ) : emails.length === 0 ? (
            <p className="p-6 text-gray-500">No emails found</p>
          ) : (
            emails.map((email) => <EmailRow key={email._id} email={email} />)
          )}
        </div>

        <Pagination
          pagination={pagination}
          onPageChange={(page) => setFilters({ ...filters, page })}
        />
      </div>

      <ProcessModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onComplete={() => {
          fetchEmails(filters);
          fetchStats();
        }}
      />
    </Layout>
  );
};

export default Emails;
