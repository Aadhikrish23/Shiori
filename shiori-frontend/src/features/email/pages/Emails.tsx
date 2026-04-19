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
  const { stats, fetchStats, processing } = useEmail();
  const { saveSchedule, getSchedule } = useSchedule();
  const [mode, setMode] = useState<"interval" | "daily">("interval");
  const [unit, setUnit] = useState<"minutes" | "hours">("minutes");
  const [value, setValue] = useState(5);
  const [dailyInterval, setDailyInterval] = useState(1);
  const [time, setTime] = useState("09:00");
  const [initialized, setInitialized] = useState(false);
  const [saving, setSaving] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
    label: "",
    action: "",
    type: "",
  });

  const [openModal, setOpenModal] = useState(false);

  // 🔥 scheduler state
  const [enabled, setEnabled] = useState(false);
  const [interval, setIntervalValue] = useState(5);

  // =========================
  // FETCH EMAILS
  // =========================
  useEffect(() => {
    fetchEmails(filters);
  }, [filters]);

  // =========================
  // AUTO REFRESH AFTER PROCESS
  // =========================
  useEffect(() => {
    if (!processing) {
      fetchEmails(filters);
      fetchStats();
    }
  }, [processing]);

  // =========================
  // POLLING (REAL TIME FEEL)
  // =========================
  useEffect(() => {
    let interval: any;

    if (processing) {
      interval = setInterval(() => {
        fetchStats(); // only stats during processing
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [processing]);

  // =========================
  // LOAD SCHEDULE
  // =========================
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
      } catch (err) {
        console.error(err);
      } finally {
        setInitialized(true); // 🔥 prevents overwrite
      }
    };

    load();
  }, []);

  // =========================
  // SAVE SCHEDULE
  // =========================
  useEffect(() => {
    if (!initialized) return; // 🔥 CRITICAL

    if (!enabled) {
      saveSchedule({ enabled: false });
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setSaving(true);

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
        console.error("Save failed", err);
      } finally {
        setSaving(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [enabled, mode, unit, value, dailyInterval, time, initialized]);

  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Emails</h1>
            <p className="text-sm text-gray-500">
              View and verify AI email classification
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            disabled={processing}
            className={`px-4 py-2 rounded text-white ${
              processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {processing ? "Processing..." : "Process Emails"}
          </button>
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

        {/* 🤖 AUTOMATION */}
        <div className="bg-white p-5 rounded border space-y-5">
          <h2 className="font-semibold text-lg">Automation</h2>

          {/* ENABLE */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <span>Enable automation</span>
            {saving && (
              <span className="text-sm text-gray-400 ml-2">Saving...</span>
            )}
          </div>

          <div
            className={`space-y-4 ${
              !enabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {/* MODE */}
            <div className="flex gap-3">
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

                <select
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="border p-2 rounded"
                >
                  {unit === "minutes" ? (
                    <>
                      <option value={5}>5</option>
                      <option value={15}>15</option>
                      <option value={30}>30</option>
                    </>
                  ) : (
                    <>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={5}>5</option>
                    </>
                  )}
                </select>

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
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <span>Every</span>

                  <input
                    type="number"
                    min={1}
                    value={dailyInterval}
                    onChange={(e) => setDailyInterval(Number(e.target.value))}
                    className="border p-2 rounded w-20"
                  />

                  <span>day(s)</span>
                </div>

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

        {/* FILTERS */}
        <EmailFilters filters={filters} setFilters={setFilters} />

        {/* TABLE HEADER */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 text-xs font-semibold">
          <div className="col-span-5">Email</div>
          <div className="col-span-2">Label</div>
          <div className="col-span-2">Action</div>
          <div className="col-span-2">Confidence</div>
          <div className="col-span-1">Date</div>
        </div>

        {/* EMAIL LIST */}
        <div className="bg-white rounded border">
          {loading ? (
            <p className="p-6 text-gray-500">Loading...</p>
          ) : emails.length === 0 ? (
            <p className="p-6 text-gray-500">No emails found</p>
          ) : (
            emails.map((email) => <EmailRow key={email._id} email={email} />)
          )}
        </div>

        {/* PAGINATION */}
        <Pagination
          pagination={pagination}
          onPageChange={(page) => setFilters({ ...filters, page })}
        />
      </div>

      <ProcessModal open={openModal} onClose={() => setOpenModal(false)} />
    </Layout>
  );
};

export default Emails;
