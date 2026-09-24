import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../../api/apiClient";
import { extractErrorMessage } from "../../lib/toast";

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tokenFromUrl = searchParams.get("token") || "";

  const [token, setToken] = useState(tokenFromUrl);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Đặt tên window để khi bấm link trong mail sẽ focus/nhảy vào tab này
  useEffect(() => {
    window.name = "app_window";

    // Ẩn token trên thanh địa chỉ URL của trình duyệt để bảo mật
    if (tokenFromUrl) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [tokenFromUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token.trim()) {
      toast.error("Thiếu mã token đặt lại mật khẩu!");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Mật khẩu mới phải có ít nhất 6 ký tự!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    setLoading(true);

    try {
      const res = await apiClient.post("/api/auth/reset-password", {
        token: token.trim(),
        newPassword,
      });

      toast.success(res.data?.message || "Đặt lại mật khẩu thành công!");
      navigate("/login");
    } catch (err) {
      const message = extractErrorMessage(
        err,
        "Đặt lại mật khẩu thất bại. Token có thể đã hết hạn hoặc không hợp lệ."
      );
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 text-center mb-1">
        <h2 className="text-lg font-bold text-white tracking-wide">Đặt lại mật khẩu mới</h2>
        <p className="text-xs text-[#908fa0]">
          Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
        </p>
      </div>

      {/* New Password */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          NEW PASSWORD
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            lock
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Tối thiểu 6 ký tự"
            required
            minLength={6}
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 hover:text-white transition-colors p-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      {/* Confirm New Password */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          CONFIRM PASSWORD
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            lock_reset
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Nhập lại mật khẩu mới"
            required
            minLength={6}
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="relative w-full py-2.5 mt-2 bg-[#5659f4] hover:bg-[#4548e2] text-white font-mono text-sm font-semibold rounded-xl overflow-hidden group transition-all duration-300 shadow-lg shadow-[#5659f4]/25 flex items-center justify-center active:scale-98 cursor-pointer"
        type="submit"
        disabled={loading}
      >
        <span className={`relative z-10 flex items-center gap-2 transition-opacity duration-200 ${loading ? "opacity-0" : "opacity-100"}`}>
          Xác nhận đổi mật khẩu <span className="material-symbols-outlined text-[18px]">check</span>
        </span>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#5659f4]">
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
          </div>
        )}
      </button>

      <div className="text-center mt-2">
        <Link
          to="/login"
          className="text-xs font-mono text-[#c0c1ff] hover:text-white transition-colors inline-flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          Quay lại Đăng nhập
        </Link>
      </div>
    </form>
  );
};
