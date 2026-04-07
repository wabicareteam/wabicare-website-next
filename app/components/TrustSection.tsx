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

export default function TrustSection() {
  return (
    <section
      id="integration"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#F5F5F5]"
    >
      <div className="max-w-5xl mx-auto text-center pointer-events-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold lowercase mb-20 text-black">
          Trusted by 1,000+ ABA Providers
        </h2>

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
