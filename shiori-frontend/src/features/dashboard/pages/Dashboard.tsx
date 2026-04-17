import Layout from "../../../shared/ui/layout/Layout";
import { useEffect } from "react";
import { useEmail } from "../../email/hooks/useEmail";
const Dashboard = () => {
const { dashboard, fetchDashboard } = useEmail();
useEffect(() => {
  fetchDashboard();
}, [fetchDashboard]);

  if (!dashboard) {
    return (
      <Layout>
        <div className="p-6">
          <p className="text-gray-500 text-sm">Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  const labels = (dashboard.labels || []).sort(
    (a: any, b: any) => b.count - a.count
  );

  const total = dashboard.totalProcessed || 1;

  return (
    <Layout>
      <div className="space-y-8 p-4 sm:p-6">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Track how your emails are being categorized
          </p>
        </div>

        {/* 🔥 TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* PRIMARY CARD */}
          <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-sm text-blue-600 font-medium">
              Total Processed
            </p>
            <h2 className="text-3xl font-bold text-blue-700 mt-2">
              {dashboard.totalProcessed || 0}
            </h2>
          </div>

          {/* SECONDARY */}
          <div className="p-6 rounded-xl bg-green-50 border border-green-100">
            <p className="text-sm text-green-600 font-medium">
              Processed Today
            </p>
            <h2 className="text-2xl font-bold text-green-700 mt-2">
              {dashboard.processedToday || 0}
            </h2>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-100">
            <p className="text-sm text-indigo-600 font-medium">
              Active Labels
            </p>
            <h2 className="text-2xl font-bold text-indigo-700 mt-2">
              {dashboard.activeLabels || 0}
            </h2>
          </div>
        </div>

        {/* 🔥 LABEL SECTION */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Label Insights
            </h2>
            <span className="text-xs text-gray-400">
              Sorted by usage
            </span>
          </div>

          {labels.length === 0 ? (
            <div className="bg-white p-6 rounded-xl border text-center">
              <p className="text-gray-500 text-sm">
                No emails processed yet
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {labels.map((label: any, index: number) => {
                const percentage = ((label.count / total) * 100).toFixed(1);
                const isTop = index === 0;

                return (
                  <div
                    key={label._id}
                    className={`p-5 rounded-xl border transition-all cursor-pointer
                      ${
                        isTop
                          ? "bg-indigo-50 border-indigo-200 shadow-sm"
                          : "bg-white hover:shadow-md"
                      }`}
                  >
                    {/* TOP ROW */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {label._id}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isTop ? "text-indigo-600" : "text-gray-400"
                        }`}
                      >
                        {percentage}%
                      </span>
                    </div>

                    {/* BIG NUMBER */}
                    <p className="text-3xl font-bold text-gray-900 mt-3">
                      {label.count}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      emails categorized
                    </p>

                    {/* PROGRESS BAR */}
                    <div className="mt-3 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full ${
                          isTop ? "bg-indigo-500" : "bg-blue-500"
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;