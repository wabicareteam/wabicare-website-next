"use client";

import { PlusCircleIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      id="security"
      className="py-12 px-8 md:px-12 border-t border-gray-100 bg-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center text-center md:text-left gap-12 md:gap-0">
        <div className="font-mono text-[9px] text-black/50 leading-[1.8] uppercase tracking-[0.05em] font-medium">
          COMPLIANCE: HIPAA / SOC-2
          <br />
          FRAMEWORK: SECURE V3.1
          <br />
          VERSION: 2.5.0.MAIN
        </div>

        <div
          className="flex justify-center items-center pointer-events-auto group cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center shadow-md">
            <PlusCircleIcon />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 font-mono text-[9px] text-black/50 uppercase tracking-widest font-medium">
          <span>WabiCare Global Systems</span>
          <span>&copy; 2024 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
