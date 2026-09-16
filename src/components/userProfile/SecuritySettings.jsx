import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const SecuritySettings = () => {
  const { changePassword } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getStrength = (val) => {
    let strength = 0;
    if (val.length > 5) strength++;
    if (val.length > 8) strength++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength++;
    if (/[0-9!@#$%^&*]/.test(val)) strength++;
    return strength;
  };

  const strength = getStrength(newPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!currentPassword) {
      setErrorMessage("Vui lòng nhập mật khẩu hiện tại.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("Mật khẩu mới phải có ít nhất 6 ký tự.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Mật khẩu mới và mật khẩu xác nhận không trùng khớp.");
      return;
    }

    setLoading(true);
    const result = await changePassword(currentPassword, newPassword);
    setLoading(false);

    if (result.success) {
      setSuccessMessage(result.message || "Đổi mật khẩu thành công!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setErrorMessage(result.error);
    }
  };

  return (
    <div className="bg-[#172036]/70 backdrop-blur-xl rounded-2xl p-xl shadow-xl relative overflow-hidden border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Header Title */}
      <div className="flex items-center gap-md mb-lg">
        <div className="w-10 h-10 rounded-full bg-[#8083ff]/20 border border-[#8083ff]/30 flex items-center justify-center text-[#c0c1ff]">
          <span className="material-symbols-outlined text-xl">history</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-white font-bold text-lg">
            Security
          </h3>
          <p className="font-body-sm text-body-sm text-[#908fa0] text-xs">
            Manage your password and authentication settings
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 rounded-xl p-3 mb-4 text-xs text-[#ff6b6b] flex items-center gap-2 font-sans">
          <span className="material-symbols-outlined text-[18px]">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-3 mb-4 text-xs text-[#10b981] flex items-center gap-2 font-sans">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Form Fields */}
      <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
        {/* Current Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            CURRENT PASSWORD
          </label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            NEW PASSWORD
          </label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
          {newPassword.length > 0 && (
            <div className="mt-xs">
              <div className="flex gap-1 h-1 w-full rounded-full overflow-hidden bg-[#0c1426]">
                <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 1 ? (strength === 1 ? "bg-[#ff6b6b]" : strength === 2 ? "bg-[#f7be1d]" : "bg-[#10b981]") : ""}`}></div>
                <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 2 ? (strength === 2 ? "bg-[#f7be1d]" : "bg-[#10b981]") : ""}`}></div>
                <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 3 ? "bg-[#10b981]" : ""}`}></div>
                <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 4 ? "bg-[#10b981]" : ""}`}></div>
              </div>
              <span className={`font-mono text-[11px] mt-1 inline-block ${strength <= 1 ? "text-[#ff6b6b]" : strength === 2 ? "text-[#f7be1d]" : "text-[#10b981]"}`}>
                {strength <= 1 ? "Weak password" : strength === 2 ? "Medium password" : "Strong password"}
              </span>
            </div>
          )}
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col gap-xs">
          <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
            CONFIRM NEW PASSWORD
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full bg-[#0e1628]/80 text-white placeholder-[#464554] rounded-xl py-3 px-4 font-body-md text-sm outline-none border border-white/5 focus:border-[#8083ff]/50 transition-all shadow-inner"
          />
        </div>

        {/* Submit button */}
        <div className="mt-sm flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#5659f4] hover:bg-[#4548e2] text-white font-label-md text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-[#5659f4]/25 transition-all active:scale-98 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};
