import { ShieldIcon, PulseIcon, LockIcon } from "./icons";
import { ReactNode } from "react";

const badges: { icon: ReactNode; title: string; subtitle: string }[] = [
  {
    icon: <ShieldIcon />,
    title: "HIPAA Compliant",
    subtitle: "End-to-end encryption",
  },
  {
    icon: <PulseIcon />,
    title: "99.9% Uptime",
    subtitle: "Distributed architecture",
  },
  {
    icon: <LockIcon />,
    title: "Bank-Grade Security",
    subtitle: "SOC-2 Type II Certified",
  },
];

function DreamBuildersLogo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
      <svg viewBox="0 0 100 100" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <g fill="#6BAFCF">
          <ellipse cx="80" cy="18" rx="7" ry="5" />
          <ellipse cx="86" cy="21" rx="5" ry="4" />
          <ellipse cx="74" cy="22" rx="4" ry="3" />
        </g>
        <path d="M8 48 L50 16 L92 48" fill="none" stroke="#2E506F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 45 L50 20 L50 38 A6 6 0 0 1 50 50 L50 56 L40 56 A6 6 0 0 1 28 56 L15 56 Z" fill="#D85B47"/>
        <path d="M50 20 L85 45 L85 56 L72 56 A6 6 0 0 1 60 56 L50 56 L50 50 A6 6 0 0 0 50 38 L50 20 Z" fill="#5A9272"/>
        <path d="M15 56 L28 56 A6 6 0 0 0 40 56 L50 56 L50 72 A6 6 0 0 1 50 84 L50 92 L15 92 Z" fill="#4D7FA6"/>
        <path d="M50 56 L60 56 A6 6 0 0 0 72 56 L85 56 L85 92 L50 92 L50 84 A6 6 0 0 0 50 72 L50 56 Z" fill="#F0CB63"/>
      </svg>
      <div className="flex flex-col">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black/70">
          Dream Builders
        </span>
        <span className="font-mono text-[8px] font-semibold uppercase tracking-widest text-brand-pink/80">
          Autism Therapy
        </span>
      </div>
    </div>
  );
}

function AlohaABALogo() {
  return (
    <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aloha-logo.svg" alt="Aloha ABA Therapy" className="h-16" />
    </div>
  );
}

export default function TrustSection() {
  return (
    <section
      id="integration"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
    >
      <div className="max-w-5xl mx-auto text-center pointer-events-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold lowercase mb-12 text-black">
          Trusted by ABA Providers
        </h2>

        {/* Customer Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-20 py-8">
          <DreamBuildersLogo />
          <AlohaABALogo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-y border-black/5 py-16">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center mb-6 shadow-md transition-transform duration-500 group-hover:scale-110">
                {b.icon}
              </div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-black mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple transition-all duration-300">
                {b.title}
              </h4>
              <p className="font-mono text-[9px] font-medium uppercase tracking-wider text-black/60">
                {b.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
