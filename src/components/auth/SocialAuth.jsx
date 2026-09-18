import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { auth, googleProvider } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

export const SocialAuth = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    try {
      // 1. Mở popup đăng nhập tài khoản Google
      const result = await signInWithPopup(auth, googleProvider);

      // 2. Lấy Firebase ID Token từ kết quả đăng nhập
      const idToken = await result.user.getIdToken();

      // 3. Gửi idToken về backend thông qua AuthContext
      const response = await loginWithGoogle(idToken);

      if (response.success) {
        toast.success(response.message || "Đăng nhập Google thành công!");
        navigate("/dashboard");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      // Bỏ qua nếu người dùng tự đóng popup
      if (error.code !== "auth/popup-closed-by-user") {
        console.error("Lỗi Google Sign-In:", error);
        toast.error("Đăng nhập Google không thành công. Vui lòng thử lại.");
      }
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Social Auth Divider */}
      <div className="relative flex items-center py-1 mt-2">
        <div className="flex-grow border-t border-white/10"></div>
        <span className="flex-shrink-0 mx-4 text-[#908fa0] font-mono text-[10px] uppercase tracking-widest font-semibold">
          OR CONTINUE WITH
        </span>
        <div className="flex-grow border-t border-white/10"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4 w-full">
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loadingGoogle}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0c1426]/90 border border-white/10 rounded-xl hover:bg-[#172036] hover:border-white/20 transition-all duration-200 font-mono text-xs text-white shadow-sm font-medium active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingGoogle ? (
            <svg
              className="animate-spin h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
          )}
          <span>{loadingGoogle ? "Connecting..." : "Google"}</span>
        </button>

        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0c1426]/50 border border-white/5 rounded-xl font-mono text-xs text-white/40 shadow-sm font-medium cursor-not-allowed"
        >
          <svg className="w-4 h-4 text-white/40 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
            ></path>
          </svg>
          GitHub
        </button>
      </div>
    </div>
  );
};