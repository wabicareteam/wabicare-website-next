"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/clinics", label: "Clinics" },
  { href: "/schools", label: "Schools" },
  { href: "/features", label: "Features" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="w-full flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.1em] text-black/60 font-medium px-8 md:px-12 py-6 fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
      <div className="flex flex-col gap-1">
        <Link
          href="/"
          className="cursor-pointer text-black font-bold tracking-widest transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-pink-soft hover:to-brand-purple-soft"
        >
          WabiCare // Therapy OS
        </Link>
      </div>

      <nav className="hidden md:flex gap-8 pointer-events-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative pb-1 text-black font-semibold transition-colors duration-300 group"
            >
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple"
                    : "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple-soft group-hover:to-brand-purple-soft"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-pink-soft to-brand-purple-soft transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <a
        href="https://app.wabicare.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold text-white rounded-md bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02]"
      >
        Login / Signup
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-5 h-px bg-black transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
          }`}
        />
        <span
          className={`w-5 h-px bg-black transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-5 h-px bg-black transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple"
                    : "text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-pink-soft hover:to-brand-purple-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
