import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const DashboardPage = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <div className="flex flex-col gap-lg w-full max-w-[1440px] mx-auto pb-xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md bg-surface-container-low rounded-2xl p-lg border border-white/5">
        <div className="space-y-xs">
          <div className="flex items-center gap-sm">
            <span
              className={`inline-flex items-center gap-xs px-sm py-0.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold ${
                isAdmin
                  ? "bg-[#6f00be]/20 text-[#ddb7ff] border border-[#6f00be]/40"
                  : "bg-primary/10 text-primary border border-primary/20"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  isAdmin ? "bg-[#ddb7ff]" : "bg-primary"
                }`}
              ></span>
              Role: {user?.role ? user.role.toUpperCase() : "USER"}
            </span>
            <span className="inline-flex items-center px-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-xs">
              v1.0.0
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
            Xin chào, {user?.name || "User"}!
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Chào mừng bạn đến với hệ thống bảng điều khiển xác thực AuthAPI.
          </p>
        </div>

        <div className="flex items-center gap-sm">
          <Link
            to="/security"
            className="flex items-center gap-xs px-md py-xs bg-primary hover:bg-primary-fixed text-on-primary rounded-lg font-body-sm text-body-sm shadow-[0_0_20px_rgba(192,193,255,0.25)] transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
            Hồ sơ & Bảo mật
          </Link>
        </div>
      </div>

      {/* RBAC Status & Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {/* User Info Card */}
        <div className="bg-surface-container-low rounded-xl p-md border border-white/5 flex flex-col justify-between space-y-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Tài khoản hiện tại
            </span>
            <div className="p-xs rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
          <div>
            <p className="font-body-lg text-on-surface font-semibold truncate">{user?.name}</p>
            <p className="font-mono text-xs text-on-surface-variant truncate">{user?.email}</p>
          </div>
          <div className="pt-xs border-t border-white/5 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Trạng thái:</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Đã xác thực
            </span>
          </div>
        </div>

        {/* RBAC Permission Card */}
        <div className="bg-surface-container-low rounded-xl p-md border border-white/5 flex flex-col justify-between space-y-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Quyền hạn (RBAC)
            </span>
            <div className="p-xs rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            </div>
          </div>
          <div>
            <p className="font-headline-sm text-headline-sm text-on-surface">
              {isAdmin ? "Admin Access" : "User Standard"}
            </p>
            <p className="font-body-sm text-xs text-on-surface-variant">
              {isAdmin
                ? "Tài khoản có quyền quản trị hệ thống."
                : "Tài khoản người dùng tiêu chuẩn."}
            </p>
          </div>
          <div className="pt-xs border-t border-white/5 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Mức truy cập:</span>
            <span className={isAdmin ? "text-[#ddb7ff] font-semibold" : "text-primary font-semibold"}>
              {isAdmin ? "FULL_CONTROL" : "STANDARD_USER"}
            </span>
          </div>
        </div>

        {/* System Security Card */}
        <div className="bg-surface-container-low rounded-xl p-md border border-white/5 flex flex-col justify-between space-y-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Bảo mật phiên đăng nhập
            </span>
            <div className="p-xs rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
          </div>
          <div>
            <p className="font-headline-sm text-headline-sm text-on-surface">JWT / Bearer</p>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Phiên bảo mật được cấp qua Authorization Header.
            </p>
          </div>
          <div className="pt-xs border-t border-white/5 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Cơ chế bảo vệ:</span>
            <span className="text-emerald-400 font-medium">Active</span>
          </div>
        </div>
      </div>

      {/* RBAC Inspection Box */}
      <div className="bg-surface-container-low rounded-xl p-md border border-white/5 space-y-md">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
          <h2 className="font-title-md text-title-md text-on-surface font-semibold">
            Kiểm tra Phân quyền (RBAC Inspector)
          </h2>
        </div>
        <div className="p-md rounded-lg bg-[#0b1326] border border-white/5 font-mono text-xs space-y-xs">
          <p className="text-[#908fa0]">// Thông tin đối tượng xác thực hiện tại:</p>
          <p className="text-emerald-400">user = {JSON.stringify({ id: user?._id || user?.id, name: user?.name, email: user?.email, role: user?.role }, null, 2)}</p>
        </div>
      </div>
    </div>
  );
};
