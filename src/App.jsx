import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { DashboardPage } from "./pages/Dashboard";
import { UserManagementPage } from "./pages/UserManagement";
import { SystemLogsPage } from "./pages/SystemLogs";
import { AuthPage } from "./pages/Auth";

function App() {
  return (
    <Routes>
      {/* Auth routes (Standalone, without MainLayout) */}
      <Route path="/login" element={<AuthPage mode="signin" />} />
      <Route path="/signin" element={<AuthPage mode="signin" />} />
      <Route path="/register" element={<AuthPage mode="signup" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />

      {/* Main Layout routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        }
      />
      <Route
        path="/security"
        element={
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        }
      />
      <Route
        path="/user-management"
        element={
          <MainLayout>
            <UserManagementPage />
          </MainLayout>
        }
      />
      <Route
        path="/system-logs"
        element={
          <MainLayout>
            <SystemLogsPage />
          </MainLayout>
        }
      />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
