import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/security":
        return "User Profile & Security";
      case "/dashboard":
      case "/":
        return "Dashboard";
      default:
        return "Dashboard";
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Đã đăng xuất thành công.");
    navigate("/login");
  };
  
  const userLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
  const avatarImg =
    userLocalStorage.avatar || "https://via.placeholder.com/150";

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-[#0b1326]/90 backdrop-blur-xl border-b border-white/5 z-40 flex items-center justify-between px-lg">
      <div className="flex items-center gap-sm">
        <h2 className="text-white font-semibold text-sm tracking-wide">
          {getPageTitle()}
        </h2>
      </div>

      <div className="flex items-center gap-md">
        <span
          className={`px-3 py-1 rounded-full text-xs font-mono border uppercase tracking-wider font-semibold ${
            user?.role === "admin"
              ? "bg-[#6f00be]/30 text-[#ddb7ff] border-[#6f00be]/40"
              : "bg-[#1e2942] text-[#3b82f6] border-[#3b82f6]/30"
          }`}
        >
          {user?.role ? user.role.toUpperCase() : "USER"}
        </span>

        <div className="flex items-center gap-md pl-md border-l border-white/10">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/security")}
          >
            <img
              alt="Profile Avatar"
              title="View Profile & Security"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#c0c1ff]/30 hover:ring-[#c0c1ff]/60 transition-all"
              src={avatarImg}
            />
            <span className="text-xs font-mono text-white font-semibold hidden md:inline">
              {user?.name || "User"}
            </span>
          </div>

          <button
            onClick={handleLogout}
            title="Đăng xuất"
            className="text-[#908fa0] hover:text-[#ff6b6b] transition-colors p-1 flex items-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
