import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
