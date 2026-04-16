import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useEmailStore } from "../store/emailStore";

const Dashboard = () => {
  const { dashboard, fetchDashboard } = useEmailStore();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const labels = dashboard?.labels || [];

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* 🔥 TOP STATS */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Processed</p>
            <h2 className="text-xl font-bold">
              {dashboard?.totalProcessed || 0}
            </h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Processed Today</p>
            <h2 className="text-xl font-bold">
              {dashboard?.processedToday || 0}
            </h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Active Labels</p>
            <h2 className="text-xl font-bold">
              {dashboard?.activeLabels || 0}
            </h2>
          </div>
        </div>

        {/* 🔥 LABEL CARDS */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Label Overview
          </h2>

          {labels.length === 0 && (
            <p className="text-gray-400">
              No emails processed yet
            </p>
          )}

          <div className="grid grid-cols-3 gap-4">
            {labels.map((label: any) => (
              <div
                key={label._id}
                className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium capitalize">
                    📂 {label._id}
                  </span>
                </div>

                <p className="text-2xl font-bold mt-2">
                  {label.count}
                </p>

                <p className="text-sm text-gray-500">
                  emails
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;