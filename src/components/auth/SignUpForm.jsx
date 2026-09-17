import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export const SignUpForm = ({ onSubmitSuccess }) => {
  const { register, login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple strength check: green as long as password is >= 6 chars
  const isPasswordValid = password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      toast.error("Mật khẩu phải có từ 6 ký tự trở lên.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không trùng khớp.");
      return;
    }

    setLoading(true);

    const result = await register(name, email, password);

    if (result.success) {
      toast.success(result.message || "Đăng ký tài khoản thành công!");
      // Try auto-login
      const loginResult = await login(email, password);
      setLoading(false);

      if (!loginResult.success && onSubmitSuccess) {
        onSubmitSuccess();
      }
    } else {
      setLoading(false);
      toast.error(result.error);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          FULL NAME
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            person
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Nguyen Van A"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          EMAIL ADDRESS
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            mail
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="name@company.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          PASSWORD (TỐI THIỂU 6 KÝ TỰ)
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            lock
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Tối thiểu 6 ký tự"
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Visual feedback for password >= 6 chars */}
        {password.length > 0 && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${isPasswordValid ? "bg-[#10b981]" : "bg-[#ff6b6b]"}`}></div>
            <span className={`text-[11px] font-mono ${isPasswordValid ? "text-[#10b981]" : "text-[#ff6b6b]"}`}>
              {isPasswordValid ? "Mật khẩu hợp lệ (≥ 6 ký tự)" : `${password.length}/6 ký tự`}
            </span>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          CONFIRM PASSWORD
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            lock_reset
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Nhập lại mật khẩu"
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="relative w-full py-2.5 mt-1 bg-[#5659f4] hover:bg-[#4548e2] text-white font-mono text-sm font-semibold rounded-xl overflow-hidden group transition-all duration-300 shadow-lg shadow-[#5659f4]/25 flex items-center justify-center active:scale-98 cursor-pointer"
        type="submit"
        disabled={loading}
      >
        <span className={`relative z-10 flex items-center gap-2 transition-opacity duration-200 ${loading ? "opacity-0" : "opacity-100"}`}>
          Create Account <span className="material-symbols-outlined text-[18px]">person_add</span>
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
    </form>
  );
};