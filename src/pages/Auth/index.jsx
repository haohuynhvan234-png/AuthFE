import React from "react";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthTabs } from "../../components/auth/AuthTabs";
import { SignInForm } from "../../components/auth/SignInForm";
import { SignUpForm } from "../../components/auth/SignUpForm";
import { SocialAuth } from "../../components/auth/SocialAuth";

export const AuthPage = ({ mode = "signin" }) => {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] flex items-center justify-center min-h-screen relative p-4 overflow-hidden w-full">
      {/* Glow effect at top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6366f1]/15 rounded-full blur-[140px]"></div>
      </div>

      <main className="w-full max-w-[420px] relative z-10 flex flex-col items-center justify-center mx-auto">
        {/* Glassmorphism Auth Card */}
        <div className="w-full bg-[#141d33]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 flex flex-col gap-6">
          <AuthHeader activeTab={mode} />

          <AuthTabs activeTab={mode} />

          <div className="w-full">
            {mode === "signin" ? <SignInForm /> : <SignUpForm />}
          </div>

          <SocialAuth />
        </div>
      </main>
    </div>
  );
};
