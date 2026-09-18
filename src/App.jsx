import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { PublicOnlyRoute } from "./components/auth/PublicOnlyRoute";
import { MainLayout } from "./components/layout/MainLayout";
import { DashboardPage } from "./pages/Dashboard";
import { UserManagementPage } from "./pages/UserManagement";
import { SystemLogsPage } from "./pages/SystemLogs";
import { UserProfilePage } from "./pages/UserProfile";
import { AuthPage } from "./pages/Auth";

function App() {
  return (
    <AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#141d33",
            color: "#dae2fd",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            borderRadius: "0.75rem",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#141d33",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff6b6b",
              secondary: "#141d33",
            },
          },
        }}
      />
      <Routes>
        {/* Auth routes (Public only - redirect to dashboard if already logged in) */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <AuthPage mode="signin" />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicOnlyRoute>
              <AuthPage mode="signin" />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <AuthPage mode="signup" />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicOnlyRoute>
              <AuthPage mode="signup" />
            </PublicOnlyRoute>
          }
        />

        {/* Main Protected Layout routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/security"
          element={
            <ProtectedRoute>
              <MainLayout>
                <UserProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-management"
          element={
            <ProtectedRoute>
              <MainLayout>
                <UserManagementPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/system-logs"
          element={
            <ProtectedRoute>
              <MainLayout>
                <SystemLogsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;