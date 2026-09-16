import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { id: "dashboard", path: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "user-management", path: "/user-management", label: "User Management", icon: "group" },
    { id: "system-logs", path: "/system-logs", label: "System Logs", icon: "terminal" },
    { id: "security", path: "/security", label: "Security & Profile", icon: "security" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-[#0c1427] z-50 border-r border-white/5 flex flex-col pt-md">
      {/* Brand Logo */}
      <div 
        className="px-lg mb-xl flex items-center gap-sm cursor-pointer select-none" 
        onClick={() => navigate("/dashboard")}
      >
        <div className="w-8 h-8 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(99,102,241,0.3)]">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
        </div>
        <span className="font-headline-sm text-headline-sm text-white tracking-tight font-bold">
          AuthAPI
        </span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-md space-y-xs">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (location.pathname === "/" && item.id === "dashboard");

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-md py-sm rounded-lg transition-all text-left font-medium text-sm ${
                isActive
                  ? "bg-[#283252] text-[#c0c1ff] font-semibold shadow-sm"
                  : "text-[#c7c4d7] hover:bg-[#1b243d] hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined mr-md text-[20px]">{item.icon}</span>
              <span className="font-body-md text-body-md">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Current User Card */}
      {user && (
        <div className="p-md mx-md mb-xs rounded-xl bg-[#141d33] border border-white/5 flex items-center justify-between">
          <div className="flex flex-col truncate">
            <span className="text-xs font-semibold text-white truncate">{user.name}</span>
            <span className="text-[11px] font-mono text-[#908fa0] truncate">{user.email}</span>
          </div>
          <button
            onClick={handleLogout}
            title="Đăng xuất"
            className="text-[#908fa0] hover:text-[#ff6b6b] transition-colors p-1.5 rounded-lg hover:bg-white/5 ml-2"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      )}

      {/* Footer Version Info */}
      <div className="p-md m-md rounded-lg bg-surface-container/30 border border-white/5 flex flex-col gap-xs">
        <div className="flex items-center gap-xs text-xs font-mono text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>v2.4.0-prod</span>
        </div>
        <p className="text-[11px] text-on-surface-variant/60">
          AuthAPI Infrastructure
        </p>
      </div>
    </aside>
  );
};
