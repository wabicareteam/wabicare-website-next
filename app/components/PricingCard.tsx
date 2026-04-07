interface PricingCardProps {
  tier: string;
  name: string;
  features: { text: string; active: boolean }[];
  cta: string;
  featured: boolean;
}

export default function PricingCard({
  tier,
  name,
  features,
  cta,
  featured,
}: PricingCardProps) {
  return (
    <div className="relative group flex flex-col rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(236,72,153,0.15)]">
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple z-0 transition-opacity duration-500 ${
          featured
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
      <div
        className={`relative z-10 flex flex-col bg-white rounded-xl p-10 h-full transition-shadow duration-500 ${
          featured
            ? "shadow-[0_4px_6px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.18),0_6px_12px_rgba(0,0,0,0.08)]"
            : "shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        }`}
      >
        {featured && (
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-brand-pink to-brand-purple text-white px-4 py-1.5 text-[8px] uppercase tracking-widest font-bold rounded-full shadow-md">
            Most Utilized
          </div>
        )}

        <div className="mb-10">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              featured
                ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple"
                : "text-black/40"
            }`}
          >
            {tier}
          </span>
          <h3 className="font-serif text-3xl font-semibold mt-2 text-black">
            {name}
          </h3>
        </div>

        <ul className="flex-grow space-y-4 mb-12 text-[11px] font-semibold uppercase tracking-wider text-black/70">
          {features.map((f) => (
            <li
              key={f.text}
              className={`flex items-center gap-3 ${
                !f.active ? "text-black/30" : ""
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  f.active
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple shadow-sm"
                    : "bg-gray-200"
                }`}
              />
              {f.text}
            </li>
          ))}
        </ul>

        <a href="#contact" className="block w-full py-4 text-[10px] text-center uppercase tracking-[0.2em] font-bold text-white rounded-md bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02]">
          {cta}
        </a>
      </div>
    </div>
  );
}
