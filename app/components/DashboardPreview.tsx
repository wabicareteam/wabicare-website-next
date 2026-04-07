"use client";

import { ReactNode, useState } from "react";

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PatientsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SessionsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ScheduleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-current">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

interface NavItem {
  label: string;
  icon: ReactNode;
  active: boolean;
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: <DashboardIcon />, active: true },
  { label: "Patients", icon: <PatientsIcon />, active: false },
  { label: "Sessions", icon: <SessionsIcon />, active: false },
  { label: "Schedule", icon: <ScheduleIcon />, active: false },
  { label: "Billing", icon: <BillingIcon />, active: false },
  { label: "Reports", icon: <ReportsIcon />, active: false },
  { label: "Settings", icon: <SettingsIcon />, active: false },
];

const stats = [
  { label: "Active Patients", value: "24", sub: "Currently enrolled" },
  { label: "Today\u2019s Sessions", value: "8", sub: "Scheduled today" },
  { label: "Pending Intakes", value: "3", sub: "Awaiting processing" },
  { label: "Hours This Week", value: "32.5", sub: "Billed hours" },
];

const patients = ["A.M.", "S.K.", "J.R."];
const schedule = ["9:00 AM", "10:30 AM", "1:00 PM"];

export default function DashboardPreview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200/50">
        {/* Browser chrome */}
        <div className="bg-[#F0F0F0] px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-grow flex justify-center">
            <div className="bg-white rounded-md px-4 py-1 text-[9px] font-mono text-black/40 tracking-wider flex items-center gap-2 w-64 justify-center">
              <svg className="w-2.5 h-2.5 stroke-black/30" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              app.wabicare.com/dashboard
            </div>
          </div>
        </div>

        {/* App UI */}
        <div className="bg-[#F8F8FA] flex min-h-[420px]">
          {/* Sidebar */}
          <div className="w-[76px] bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-0.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple mb-3" />
            <div className="w-10 h-px bg-gray-200 mb-2" />
            {navItems.map((item) => {
              const isActive = item.active;
              const isHover = hovered === item.label;
              const highlight = isActive || isHover;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-0.5 py-2 w-full cursor-pointer transition-all duration-200 ${
                    highlight ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`transition-colors duration-200 ${
                      highlight
                        ? "text-brand-purple"
                        : "text-black/25"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`font-mono text-[6.5px] uppercase tracking-wider transition-all duration-200 ${
                      highlight
                        ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple"
                        : "text-black/30 font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Main content */}
          <div className="flex-grow p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[9px] text-black/60 uppercase tracking-wider">
                {"Clinic › Dashboard"}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-6 rounded-md bg-gray-100" />
                <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-brand-pink to-brand-purple text-white text-[8px] font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(168,139,201,0.5)] hover:scale-105">
                  AI Copilot
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-pink-soft to-brand-purple-soft" />
              </div>
            </div>

            {/* Profile card */}
            <div className="bg-white rounded-xl p-4 mb-5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white text-[10px] font-bold">
                  DR
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold text-black/80 flex items-center gap-2">
                    Dr. Rebecca
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-600 font-bold uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                  <div className="font-mono text-[8px] text-black/60 uppercase tracking-wider">
                    Bright Horizons ABA
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md border border-gray-200 text-[8px] font-mono font-bold uppercase tracking-wider text-black/50 cursor-pointer transition-all duration-200 hover:border-brand-purple/30 hover:text-brand-purple">
                  Refresh
                </div>
                <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-brand-pink to-brand-purple text-white text-[8px] font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(168,139,201,0.5)] hover:scale-105">
                  View Calendar
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
                >
                  <div className="font-mono text-[8px] text-black/60 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="font-serif text-2xl font-semibold text-black">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[7px] text-black/50 uppercase tracking-wider">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom panels */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-[9px] font-bold text-black/80 uppercase tracking-wider">
                    Active Patients
                  </div>
                  <div className="text-[8px] font-mono text-black/30 uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-brand-purple">
                    View All
                  </div>
                </div>
                {patients.map((initials, i) => (
                  <div
                    key={initials}
                    className={`flex items-center gap-3 py-2.5 cursor-pointer transition-all duration-200 hover:bg-brand-purple/5 hover:rounded-lg hover:px-2 hover:-mx-2 ${
                      i < 2 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 flex items-center justify-center text-[8px] font-bold text-brand-purple">
                      {initials}
                    </div>
                    <div>
                      <div className="w-24 h-2 bg-gray-100 rounded-full" />
                      <div className="w-16 h-1.5 bg-gray-50 rounded-full mt-1" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-[9px] font-bold text-black/80 uppercase tracking-wider">
                    {"Today\u2019s Schedule"}
                  </div>
                  <div className="text-[8px] font-mono text-black/30 uppercase tracking-wider cursor-pointer transition-colors duration-200 hover:text-brand-purple">
                    View All
                  </div>
                </div>
                {schedule.map((time, i) => (
                  <div
                    key={time}
                    className={`flex items-center gap-3 py-2.5 ${
                      i < 2 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    <div className="text-[8px] font-mono font-bold text-brand-purple w-14">
                      {time}
                    </div>
                    <div className="w-0.5 h-5 bg-gradient-to-b from-brand-pink to-brand-purple rounded-full" />
                    <div>
                      <div className="w-20 h-2 bg-gray-100 rounded-full" />
                      <div className="w-12 h-1.5 bg-gray-50 rounded-full mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fade overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
