import PricingCard from "./PricingCard";

const tiers = [
  {
    tier: "Tier 01",
    name: "Solo Clinician",
    price: "$149",
    features: [
      { text: "Single Provider License", active: true },
      { text: "HIPAA Cloud Storage", active: true },
      { text: "Automated Data Collection", active: true },
      { text: "Multi-Clinic Dashboard", active: false },
    ],
    cta: "Initialize Access",
    featured: false,
  },
  {
    tier: "Tier 02",
    name: "Small Team",
    price: "$429",
    features: [
      { text: "Up to 5 Providers", active: true },
      { text: "Priority Support Queue", active: true },
      { text: "Advanced Billing Engine", active: true },
      { text: "Guardian Portal Access", active: true },
    ],
    cta: "Scale Operations",
    featured: true,
  },
  {
    tier: "Tier 03",
    name: "Enterprise",
    price: "Custom",
    features: [
      { text: "Unlimited Providers", active: true },
      { text: "Custom EHR Integration", active: true },
      { text: "Dedicated Data Officer", active: true },
      { text: "White-label Interface", active: true },
    ],
    cta: "Contact Systems",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-20 pointer-events-none w-full">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 flex justify-center items-center gap-4 mb-6">
            <span className="w-8 h-px bg-black/20" />
            Access Models
            <span className="w-8 h-px bg-black/20" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light lowercase text-black">
            Scalable Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pointer-events-auto items-stretch">
          {tiers.map((t) => (
            <PricingCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
