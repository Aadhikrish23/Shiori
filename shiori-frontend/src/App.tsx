import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore.ts";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Labels from "./pages/Labels";
import Emails from "./pages/Processing";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const { fetchUser, loading } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading app...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/labels"
          element={
            <ProtectedRoute>
              <Labels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/emails"
          element={
            <ProtectedRoute>
              <Emails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;