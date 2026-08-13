import PageHero from "../components/PageHero";
import FeatureCard from "../components/FeatureCard";
import SectionHeader from "../components/SectionHeader";
import GradientButton from "../components/GradientButton";
import {
  CalendarIcon,
  ChartIcon,
  DollarIcon,
  UsersIcon,
  ShieldIcon,
  PulseIcon,
} from "../components/icons";

const workflows = [
  {
    icon: <CalendarIcon />,
    title: "Session Scheduling",
    description:
      "Manage provider schedules, appointments, and session coordination with guardian visibility across your practice.",
  },
  {
    icon: <ChartIcon />,
    title: "Data Collection",
    description:
      "Real-time skill acquisition tracking with DTT, task analysis, frequency, duration, interval, and ABC recording.",
  },
  {
    icon: <DollarIcon />,
    title: "Billing Engine",
    description:
      "Automated 837P generation, ERA processing, authorization tracking, and full revenue cycle management.",
  },
  {
    icon: <UsersIcon />,
    title: "Guardian Portal",
    description:
      "Secure parent communication, progress reports, document signing, intake forms, and schedule visibility.",
  },
  {
    icon: <ShieldIcon />,
    title: "Assessments",
    description:
      "Dynamic assessment management with BCBA queue support, scoring workflows, and progress tracking.",
  },
  {
    icon: <PulseIcon />,
    title: "Telehealth Scheduling",
    description:
      "Schedule and manage telehealth sessions with status tracking for remote supervision and parent training.",
  },
];

// Countable product facts, not outcome claims. An earlier build published
// invented metrics ("68% reduction in billing errors", "4.2h saved per
// clinician per week", "99.9% platform uptime") — do not reintroduce numbers
// we cannot evidence. Real customer outcomes belong in a named case study.
const metrics = [
  { value: "11", label: "data collection methods" },
  { value: "27", label: "integrated API services" },
  { value: "50+", label: "clinical screens" },
  { value: "1-click", label: "session to claim conversion" },
];

export default function ClinicsPage() {
  return (
    <>
      <PageHero
        title="built for ABA clinics"
        subtitle="end-to-end practice management that adapts to your clinical workflow."
        cta={{ label: "Request a Demo", href: "/#contact" }}
      />

      {/* Workflow Section */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-20">
            <SectionHeader label="Clinical Workflows" title="Every Layer of Your Practice" centered />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((w) => (
              <FeatureCard key={w.title} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <SectionHeader label="Platform Scale" title="Built for Clinical Depth" centered />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center group cursor-default">
                <div className="font-serif text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple mb-3">
                  {m.value}
                </div>
                <div className="font-mono text-[9px] font-semibold uppercase tracking-widest text-black/50">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light lowercase text-black mb-6">
            ready to streamline your clinic?
          </h2>
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mb-12">
            Join ABA providers already using WabiCare to deliver better outcomes with less administrative burden.
          </p>
          <GradientButton href="/">Request Priority Access</GradientButton>
        </div>
      </section>
    </>
  );
}
