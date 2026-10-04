import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export const DashboardPage = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState("24h");

  const handleExport = () => {
    toast.success("Đang xuất dữ liệu telemetry hệ thống...");
  };

  const handleGenerateApiKey = () => {
    toast.success("Đã tạo mới API Key thành công!");
  };

  return (
    <div className="flex flex-col gap-lg w-full max-w-[1440px] mx-auto relative pb-xl">
      <div className="flex flex-col w-full space-y-lg">

<section className="flex flex-col xl:flex-row xl:items-end justify-between gap-md relative">
<div className="space-y-xs">
<div className="flex items-center gap-sm">
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Cluster: auth-us-east-1
        </span>
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
          v2.14.0-stable
        </span>
</div>
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">System Overview</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Real-time authentication telemetry, active session tracking, and API security health.
      </p>
</div>

<div className="flex flex-wrap items-center gap-sm">

<div className="flex items-center p-base bg-surface-container-low rounded-lg shadow-sm" id="time-filter">
<button className="px-sm py-xs rounded font-label-sm text-label-sm text-on-primary bg-primary-container shadow-sm transition-all" data-range="24h">24 Hours</button>
<button className="px-sm py-xs rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" data-range="7d">7 Days</button>
<button className="px-sm py-xs rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" data-range="30d">30 Days</button>
</div>

<div className="flex items-center gap-xs px-sm py-xs bg-surface-container-low rounded-lg shadow-sm font-label-sm text-label-sm text-on-surface-variant">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="text-on-surface">Live Sync</span>
</div>

<button className="flex items-center gap-xs px-md py-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded-lg font-body-sm text-body-sm shadow-sm transition-all duration-200">
<span className="material-symbols-outlined text-[18px]">file_download</span>
        Export
      </button>
<button className="flex items-center gap-xs px-md py-xs bg-primary hover:bg-primary-fixed text-on-primary rounded-lg font-body-sm text-body-sm shadow-[0_0_20px_rgba(192,193,255,0.25)] hover:shadow-[0_0_25px_rgba(192,193,255,0.4)] transition-all duration-200">
<span className="material-symbols-outlined text-[18px]">key</span>
        Generate API Key
      </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md">

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Auth Requests</span>
<div className="mt-xs flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">1,428,910</span>
</div>
</div>
<div className="p-sm rounded-lg bg-primary-container/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">vpn_key</span>
</div>
</div>
<div className="mt-md flex items-center justify-between">
<div className="flex items-center gap-xs font-label-sm text-label-sm text-tertiary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+14.2%</span>
<span className="text-on-surface-variant text-[11px]">vs last week</span>
</div>
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-surface-container text-on-surface-variant">99.85% succ</span>
</div>

<div className="mt-sm w-full h-8 overflow-hidden">
<svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 28">
<path d="M0,22 Q12,24 20,18 T40,16 T60,10 T80,14 T100,4 L100,28 L0,28 Z" fill="currentColor" fillOpacity="0.08"></path>
<path d="M0,22 Q12,24 20,18 T40,16 T60,10 T80,14 T100,4" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active JWT Sessions</span>
<div className="mt-xs flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">8,492</span>
</div>
</div>
<div className="p-sm rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">shield_person</span>
</div>
</div>
<div className="mt-md flex items-center justify-between">
<div className="flex items-center gap-xs font-label-sm text-label-sm text-tertiary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+6.8%</span>
<span className="text-on-surface-variant text-[11px]">active tokens</span>
</div>
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-surface-container text-on-surface-variant">avg TTL: 2h</span>
</div>

<div className="mt-sm w-full h-8 overflow-hidden">
<svg className="w-full h-full text-secondary" preserveAspectRatio="none" viewBox="0 0 100 28">
<path d="M0,25 Q15,18 30,22 T60,12 T85,15 T100,6 L100,28 L0,28 Z" fill="currentColor" fillOpacity="0.08"></path>
<path d="M0,25 Q15,18 30,22 T60,12 T85,15 T100,6" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Avg Verification Latency</span>
<div className="mt-xs flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">31ms</span>
</div>
</div>
<div className="p-sm rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">bolt</span>
</div>
</div>
<div className="mt-md flex items-center justify-between">
<div className="flex items-center gap-xs font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
<span>-5ms</span>
<span className="text-on-surface-variant text-[11px]">improvement</span>
</div>
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-tertiary/15 text-tertiary font-semibold">Optimal</span>
</div>

<div className="mt-sm w-full h-8 overflow-hidden">
<svg className="w-full h-full text-tertiary" preserveAspectRatio="none" viewBox="0 0 100 28">
<path d="M0,8 Q20,10 35,16 T65,18 T85,14 T100,20 L100,28 L0,28 Z" fill="currentColor" fillOpacity="0.08"></path>
<path d="M0,8 Q20,10 35,16 T65,18 T85,14 T100,20" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-low rounded-xl p-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Threats Blocked</span>
<div className="mt-xs flex items-baseline gap-sm">
<span className="font-headline-md text-headline-md text-error tracking-tight">42</span>
</div>
</div>
<div className="p-sm rounded-lg bg-error/10 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">gpp_maybe</span>
</div>
</div>
<div className="mt-md flex items-center justify-between">
<div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="text-on-surface font-semibold">18</span> brute-force
        </div>
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-surface-container text-error">24 rate-limited</span>
</div>

<div className="mt-sm w-full h-8 overflow-hidden">
<svg className="w-full h-full text-error" preserveAspectRatio="none" viewBox="0 0 100 28">
<path d="M0,24 Q25,22 45,26 T70,18 T85,8 T100,19 L100,28 L0,28 Z" fill="currentColor" fillOpacity="0.08"></path>
<path d="M0,24 Q25,22 45,26 T70,18 T85,8 T100,19" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-md">

<div className="lg:col-span-8 bg-surface-container-low rounded-xl p-md shadow-sm flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Authentication Traffic</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Request throughput and verification attempts over the past 24 hours</p>
</div>

<div className="flex items-center gap-md font-label-sm text-label-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="text-on-surface">Success (200/201)</span>
</div>
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span>
<span className="text-on-surface-variant">Failed / Challenged</span>
</div>
</div>
</div>

<div className="relative mt-md w-full h-64">

<div className="absolute top-4 left-[64%] transform -translate-x-1/2 bg-surface-container-high px-sm py-xs rounded shadow-md pointer-events-none z-10 flex items-center gap-xs font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="text-on-surface font-semibold">16:40:</span>
<span className="text-primary">2,450 req/m</span>
</div>
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 220">
<defs>
<lineargradient id="primary-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#c0c1ff" stopOpacity="0.0"></stop>
</lineargradient>
<lineargradient id="error-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#ffb4ab" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#ffb4ab" stopOpacity="0.0"></stop>
</lineargradient>
</defs>

<line stroke="#2d3449" strokeDasharray="3,3" strokeOpacity="0.5" x1="0" x2="800" y1="20" y2="20"></line>
<line stroke="#2d3449" strokeDasharray="3,3" strokeOpacity="0.5" x1="0" x2="800" y1="75" y2="75"></line>
<line stroke="#2d3449" strokeDasharray="3,3" strokeOpacity="0.5" x1="0" x2="800" y1="130" y2="130"></line>
<line stroke="#2d3449" strokeDasharray="3,3" strokeOpacity="0.5" x1="0" x2="800" y1="185" y2="185"></line>

<path d="M0,205 C70,203 140,200 210,198 C280,195 350,192 420,190 C490,188 530,175 580,172 C640,168 710,190 800,195 L800,215 L0,215 Z" fill="url(#error-grad)"></path>
<path d="M0,205 C70,203 140,200 210,198 C280,195 350,192 420,190 C490,188 530,175 580,172 C640,168 710,190 800,195" fill="none" stroke="#ffb4ab" strokeWidth="1.75"></path>

<path d="M0,165 C60,158 110,140 170,145 C230,150 280,95 350,90 C410,85 470,120 520,70 C560,30 600,25 640,55 C700,100 750,85 800,75 L800,215 L0,215 Z" fill="url(#primary-grad)"></path>
<path d="M0,165 C60,158 110,140 170,145 C230,150 280,95 350,90 C410,85 470,120 520,70 C560,30 600,25 640,55 C700,100 750,85 800,75" fill="none" stroke="#c0c1ff" strokeWidth="2.5"></path>

<circle cx="580" cy="35" fill="#c0c1ff" r="4" stroke="#0b1326" strokeWidth="2"></circle>
</svg>
</div>

<div className="flex justify-between items-center px-xs pt-xs font-label-sm text-label-sm text-on-surface-variant">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span className="text-primary font-semibold">Now</span>
</div>

<div className="mt-md pt-md bg-surface-container/60 rounded-lg p-sm grid grid-cols-3 gap-xs text-center">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Peak RPM</span>
<span className="font-headline-sm text-headline-sm text-on-surface">2,450 <span className="font-body-sm text-body-sm text-on-surface-variant">req/m</span></span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Cache Hit Ratio</span>
<span className="font-headline-sm text-headline-sm text-primary">94.2%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Error Rate</span>
<span className="font-headline-sm text-headline-sm text-tertiary">0.15%</span>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-surface-container-low rounded-xl p-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Auth Methods</h2>
<span className="material-symbols-outlined text-on-surface-variant">fingerprint</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Active identity providers split</p>

<div className="mt-md w-full h-3 rounded-full overflow-hidden flex gap-0.5 bg-surface-container-high">
<div className="bg-primary h-full" style={{ width: "46%" }} title="JWT: 46%"></div>
<div className="bg-secondary h-full" style={{ width: "34%" }} title="Google: 34%"></div>
<div className="bg-tertiary h-full" style={{ width: "15%" }} title="GitHub: 15%"></div>
<div className="bg-outline h-full" style={{ width: "5%" }} title="API Keys: 5%"></div>
</div>

<div className="mt-md space-y-sm">

<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded bg-primary"></span>
<span className="text-on-surface">Email &amp; Password (JWT)</span>
</div>
<div className="font-label-sm text-label-sm text-right">
<span className="text-on-surface font-medium">46%</span>
<span className="text-on-surface-variant ml-xs">(657k)</span>
</div>
</div>

<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded bg-secondary"></span>
<span className="text-on-surface">Google OAuth 2.0</span>
</div>
<div className="font-label-sm text-label-sm text-right">
<span className="text-on-surface font-medium">34%</span>
<span className="text-on-surface-variant ml-xs">(485k)</span>
</div>
</div>

<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded bg-tertiary"></span>
<span className="text-on-surface">GitHub OAuth</span>
</div>
<div className="font-label-sm text-label-sm text-right">
<span className="text-on-surface font-medium">15%</span>
<span className="text-on-surface-variant ml-xs">(214k)</span>
</div>
</div>

<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded bg-outline"></span>
<span className="text-on-surface">M2M API Keys</span>
</div>
<div className="font-label-sm text-label-sm text-right">
<span className="text-on-surface font-medium">5%</span>
<span className="text-on-surface-variant ml-xs">(71k)</span>
</div>
</div>
</div>
</div>

<div className="mt-md pt-md bg-surface-container/60 rounded-lg p-sm flex items-center gap-md">
<div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-sm text-label-sm font-semibold text-primary">82%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wide">MFA Adoption Rate</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">82.4% of users enrolled in WebAuthn/TOTP</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-md">

<div className="lg:col-span-6 bg-surface-container-low rounded-xl p-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]">stream</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Authentication Feed</h2>
</div>
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-surface-container text-on-surface-variant">Auto-updating</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Real-time audit log of identity assertions and access attempts</p>

<div className="mt-md space-y-xs">

<div className="p-sm bg-surface-container/40 hover:bg-surface-container rounded-lg transition-colors flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">
                SJ
              </div>
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface truncate">Sarah Jenkins</span>
<span className="bg-secondary-container/20 text-secondary px-xs py-base rounded text-[11px] font-label-sm leading-none">ADMIN</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                  Google OAuth · <span className="text-on-surface">198.51.100.4</span> (San Francisco, US)
                </div>
</div>
</div>
<div className="text-right flex flex-col items-end flex-shrink-0">
<span className="inline-flex items-center gap-xs px-xs py-base rounded bg-primary/10 text-primary font-label-sm text-label-sm">
                Success
              </span>
<span className="text-[11px] font-label-sm text-on-surface-variant mt-base">2m ago</span>
</div>
</div>

<div className="p-sm bg-surface-container/40 hover:bg-surface-container rounded-lg transition-colors flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-error/15 text-error flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">device_unknown</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface truncate">Unknown Device</span>
<span className="bg-surface-container text-on-surface-variant px-xs py-base rounded text-[11px] font-label-sm leading-none">POST /login</span>
</div>
<div className="font-label-sm text-label-sm text-error truncate">
                  Invalid Password · <span className="text-on-surface">45.33.32.156</span> (Frankfurt, DE)
                </div>
</div>
</div>
<div className="text-right flex flex-col items-end flex-shrink-0">
<span className="inline-flex items-center gap-xs px-xs py-base rounded bg-error/15 text-error font-label-sm text-label-sm">
                Failed
              </span>
<span className="text-[11px] font-label-sm text-on-surface-variant mt-base">5m ago</span>
</div>
</div>

<div className="p-sm bg-surface-container/40 hover:bg-surface-container rounded-lg transition-colors flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">
                MC
              </div>
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-body-sm text-body-sm font-medium text-on-surface truncate">Marcus Chen</span>
<span className="bg-primary/10 text-primary px-xs py-base rounded text-[11px] font-label-sm leading-none">USER</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                  Token Refresh /api/auth/me · <span className="text-on-surface">203.0.113.195</span> (Singapore)
                </div>
</div>
</div>
<div className="text-right flex flex-col items-end flex-shrink-0">
<span className="inline-flex items-center gap-xs px-xs py-base rounded bg-primary/10 text-primary font-label-sm text-label-sm">
                Success
              </span>
<span className="text-[11px] font-label-sm text-on-surface-variant mt-base">8m ago</span>
</div>
</div>

<div className="p-sm bg-surface-container/40 hover:bg-surface-container rounded-lg transition-colors flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm min-w-0">
<div className="w-8 h-8 rounded-full bg-tertiary-container/30 text-tertiary flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-body-sm text-body-sm font-medium text-error truncate">Bot Probe Detected</span>
<span className="bg-error/10 text-error px-xs py-base rounded text-[11px] font-label-sm leading-none">THREAT</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                  Rapid POST /api/auth/register · <span className="text-on-surface">185.220.101.5</span>
</div>
</div>
</div>
<div className="text-right flex flex-col items-end flex-shrink-0">
<span className="inline-flex items-center gap-xs px-xs py-base rounded bg-error text-on-error font-label-sm text-label-sm">
                Blocked
              </span>
<span className="text-[11px] font-label-sm text-on-surface-variant mt-base">12m ago</span>
</div>
</div>
</div>
</div>
<div className="mt-md pt-sm flex justify-end">
<a className="flex items-center gap-xs font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors" href="/dashboard">
          View Complete Audit Stream
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-6 bg-surface-container-low rounded-xl p-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">hub</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Endpoints Health</h2>
</div>
<span className="flex items-center gap-xs font-label-sm text-label-sm text-primary">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            All Operational
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Service health status and response times across edge nodes</p>

<div className="mt-md space-y-xs">

<div className="p-sm bg-surface-container/40 rounded-lg flex items-center justify-between gap-sm">
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-primary-container/20 text-primary font-bold">POST</span>
<span className="font-label-md text-label-md text-on-surface font-mono truncate">/api/auth/login</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-base">
                420k calls/day · 99.9% uptime
              </div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">28ms</span>
<div className="text-[11px] font-label-sm text-primary">Healthy</div>
</div>
</div>

<div className="p-sm bg-surface-container/40 rounded-lg flex items-center justify-between gap-sm">
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-tertiary-container/30 text-tertiary font-bold">GET</span>
<span className="font-label-md text-label-md text-on-surface font-mono truncate">/api/auth/me</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-base">
                680k calls/day · 100% uptime
              </div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">14ms</span>
<div className="text-[11px] font-label-sm text-primary">Ultra-Fast</div>
</div>
</div>

<div className="p-sm bg-surface-container/40 rounded-lg flex items-center justify-between gap-sm">
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-primary-container/20 text-primary font-bold">POST</span>
<span className="font-label-md text-label-md text-on-surface font-mono truncate">/api/auth/register</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-base">
                84k calls/day · 99.7% uptime
              </div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">52ms</span>
<div className="text-[11px] font-label-sm text-tertiary">Normal</div>
</div>
</div>

<div className="p-sm bg-surface-container/40 rounded-lg flex items-center justify-between gap-sm">
<div className="min-w-0">
<div className="flex items-center gap-xs">
<span className="font-label-sm text-label-sm px-xs py-base rounded bg-secondary-container/30 text-secondary font-bold">PUT</span>
<span className="font-label-md text-label-md text-on-surface font-mono truncate">/api/auth/change-password</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-base">
                12k calls/day · 99.9% uptime
              </div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface font-semibold">38ms</span>
<div className="text-[11px] font-label-sm text-primary">Healthy</div>
</div>
</div>
</div>
</div>

<div className="mt-md pt-sm">
<div className="flex justify-between items-center font-label-sm text-label-sm mb-xs">
<span className="text-on-surface-variant">Global Cluster Load</span>
<span className="text-on-surface font-medium">34% (Nominal)</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "34%" }}></div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-xl p-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
<div className="flex items-center gap-md">
<div className="p-sm rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[28px]">verified_user</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Cryptographic Verification &amp; Rotations</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Next automated RS256 JWKS signing key rotation scheduled in <span className="text-on-surface font-mono">14 days, 6 hours</span>. All client SDKs synchronized.
        </p>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="px-md py-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded-lg font-body-sm text-body-sm transition-all">
        Rotate Keys Early
      </button>
<button className="px-md py-xs bg-primary text-on-primary hover:bg-primary-fixed rounded-lg font-body-sm text-body-sm transition-all">
        Key Management
      </button>
</div>
</section>
</div>

    </div>
  );
};
