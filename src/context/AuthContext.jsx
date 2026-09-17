import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { extractErrorMessage } from "../lib/toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null,
  );
  const [loading, setLoading] = useState(true);

  // Validate session on app start
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          const res = await apiClient.get("/api/auth/me");
          if (res.data && res.data.user) {
            setUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }
        } catch (err) {
          console.warn(
            "Session validation failed:",
            err?.response?.data?.message || err.message,
          );
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setToken(null);
          setUser(null);
        }
      } else {
        setToken(null);
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await apiClient.post("/api/auth/login", { email, password });
      const { token: newToken, user: userData, message } = res.data;

      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(userData));

      setToken(newToken);
      setUser(userData);

      return {
        success: true,
        message: message || "Đăng nhập thành công!",
        data: res.data,
      };
    } catch (err) {
      const message = extractErrorMessage(
        err,
        "Đăng nhập thất bại. Vui lòng thử lại.",
      );
      return { success: false, error: message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await apiClient.post("/api/auth/register", {
        name,
        email,
        password,
      });
      return {
        success: true,
        message: res.data?.message || "Đăng ký tài khoản thành công!",
        data: res.data,
      };
    } catch (err) {
      const message = extractErrorMessage(
        err,
        "Đăng ký thất bại. Vui lòng thử lại.",
      );
      return { success: false, error: message };
    }
  };

  const logout = async () => {
    try {
      await apiClient.post("/api/auth/logout");
    } catch (err) {
      console.warn("Logout API notice:", err?.message);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    try {
      const res = await apiClient.put("/api/auth/change-password", {
        oldPassword,
        newPassword,
      });
      return {
        success: true,
        message: res.data?.message || "Đổi mật khẩu thành công!",
      };
    } catch (err) {
      const message = extractErrorMessage(
        err,
        "Đổi mật khẩu thất bại. Vui lòng kiểm tra lại.",
      );
      return { success: false, error: message };
    }
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
