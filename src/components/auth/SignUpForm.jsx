import React, { useState } from "react";

export const SignUpForm = ({ onSubmitSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getStrength = (val) => {
    let strength = 0;
    if (val.length > 5) strength++;
    if (val.length > 8) strength++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength++;
    if (/[0-9!@#$%^&*]/.test(val)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onSubmitSuccess) onSubmitSuccess();
    }, 600);
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
            placeholder="John Doe"
            required
            type="text"
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
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5 w-full">
        <label className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider font-semibold">
          PASSWORD
        </label>
        <div className="relative group w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]/60 group-focus-within:text-[#c0c1ff] transition-colors text-[18px]">
            lock
          </span>
          <input
            className="w-full bg-[#0c1426]/90 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 font-sans text-sm text-white placeholder-[#464554] focus:outline-none focus:border-[#8083ff]/60 transition-all duration-200 shadow-inner"
            placeholder="Create a password"
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

        {/* Strength indicators */}
        <div className="flex gap-1 h-1 w-full mt-1 rounded-full overflow-hidden bg-[#0c1426]">
          <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 1 ? (strength === 1 ? "bg-[#ff6b6b]" : strength === 2 ? "bg-[#f7be1d]" : "bg-[#10b981]") : ""}`}></div>
          <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 2 ? (strength === 2 ? "bg-[#f7be1d]" : "bg-[#10b981]") : ""}`}></div>
          <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 3 ? "bg-[#10b981]" : ""}`}></div>
          <div className={`h-full flex-1 transition-colors duration-300 ${strength >= 4 ? "bg-[#10b981]" : ""}`}></div>
        </div>
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
            placeholder="Confirm your password"
            required
            type="password"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="relative w-full py-2.5 mt-1 bg-[#5659f4] hover:bg-[#4548e2] text-white font-mono text-sm font-semibold rounded-xl overflow-hidden group transition-all duration-300 shadow-lg shadow-[#5659f4]/25 flex items-center justify-center active:scale-98"
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
