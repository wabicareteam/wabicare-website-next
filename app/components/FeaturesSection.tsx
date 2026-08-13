import FeatureCard from "./FeatureCard";
import DashboardPreview from "./DashboardPreview";
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
      "Manage provider schedules, appointments, and session coordination with guardian visibility.",
  },
  {
    icon: <ChartIcon />,
    title: "Data Collection",
    description:
      "Real-time skill acquisition and behavior reduction tracking across DTT, task analysis, frequency, duration, and ABC recording.",
  },
  {
    icon: <DollarIcon />,
    title: "Billing Engine",
    description:
      "Automated 837P generation, ERA processing, authorization tracking, and comprehensive revenue cycle management.",
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
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 flex justify-center items-center gap-4 mb-6">
            <span className="w-8 h-px bg-black/20" />
            System Modules
            <span className="w-8 h-px bg-black/20" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light lowercase text-black mb-4">
            Clinical Operations
          </h2>
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/40 leading-loose max-w-lg mx-auto">
            A single pane of glass for your entire practice — from patient intake to billing.
          </p>
        </div>

        {/* Dashboard preview */}
        <div className="mb-20">
          <DashboardPreview />
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
