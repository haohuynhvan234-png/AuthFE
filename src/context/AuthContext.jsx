import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  const getErrorMessage = (err, defaultMsg) => {
    if (err.response?.data?.message) {
      return err.response.data.message;
    }
    if (err.response?.status === 500) {
      return "Lỗi máy chủ (500). Vui lòng thử lại sau hoặc kiểm tra log backend.";
    }
    if (!err.response) {
      return "Không thể kết nối tới server Backend (http://localhost:3000). Hãy chắc chắn Backend đang chạy.";
    }
    return defaultMsg;
  };

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
          console.warn("Session validation failed:", err?.response?.data?.message || err.message);
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
      const { token: newToken, user: userData } = res.data;

      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(userData));

      setToken(newToken);
      setUser(userData);

      return { success: true, data: res.data };
    } catch (err) {
      const message = getErrorMessage(err, "Đăng nhập thất bại. Vui lòng thử lại.");
      return { success: false, error: message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await apiClient.post("/api/auth/register", { name, email, password });
      return { success: true, data: res.data };
    } catch (err) {
      const message = getErrorMessage(err, "Đăng ký thất bại. Vui lòng thử lại.");
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
      return { success: true, message: res.data.message };
    } catch (err) {
      const message = getErrorMessage(err, "Đổi mật khẩu thất bại. Vui lòng kiểm tra lại.");
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
