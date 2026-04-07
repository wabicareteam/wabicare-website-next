"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#integration", label: "Integration" },
  { href: "#security", label: "Security" },
];

export default function Header() {
  const [time, setTime] = useState("00:00:00 UTC");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(timeString + " UTC");
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.1em] text-black/60 font-medium p-8 md:p-12 absolute top-0 left-0 z-50">
      <div className="flex flex-col gap-1">
        <span
          className="cursor-pointer text-black font-bold tracking-widest transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-pink-soft hover:to-brand-purple-soft"
          onClick={() => window.scrollTo(0, 0)}
        >
          WabiCare // Health OS
        </span>
      </div>

      <nav className="hidden md:flex gap-8 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative pb-1 text-black font-semibold transition-colors duration-300 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple-soft group-hover:to-brand-purple-soft transition-all duration-300">
              {link.label}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-pink-soft to-brand-purple-soft transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="hidden md:flex flex-col gap-1 text-right">
        <span className="text-black font-bold">STATUS: OPTIMAL</span>
        <span className="text-black/60">{time}</span>
      </div>
    </header>
  );
}
