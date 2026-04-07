import FeatureCard from "./FeatureCard";
import {
  CalendarIcon,
  ChartIcon,
  DollarIcon,
  UsersIcon,
} from "./icons";

const features = [
  {
    icon: <CalendarIcon />,
    title: "Session Scheduling",
    description:
      "Intelligent calendar matrices with automated conflict resolution and guardian synchronization.",
  },
  {
    icon: <ChartIcon />,
    title: "Data Collection",
    description:
      "Real-time skill acquisition and behavior reduction tracking with offline-first capabilities.",
  },
  {
    icon: <DollarIcon />,
    title: "Billing Engine",
    description:
      "Automated 837P generation, clearinghouse integration, and comprehensive revenue cycle management.",
  },
  {
    icon: <UsersIcon />,
    title: "Guardian Portal",
    description:
      "Secure communication gateway for progress reports, document signing, and schedule management.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#F5F5F5]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-20">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-black/20" />
            System Modules
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light lowercase text-black">
            Clinical Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-auto">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
