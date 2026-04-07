import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group h-full cursor-pointer rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(224,154,184,0.15)]">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="relative z-10 h-full bg-white rounded-xl p-10 flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow duration-500">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center mb-8 shadow-[0_6px_16px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.06)]">
          {icon}
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-4 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink-soft group-hover:to-brand-purple transition-all duration-300">
          {title}
        </h3>
        <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
