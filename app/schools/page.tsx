import PageHero from "../components/PageHero";
import FeatureCard from "../components/FeatureCard";
import SectionHeader from "../components/SectionHeader";
import GradientButton from "../components/GradientButton";
import {
  CalendarIcon,
  ChartIcon,
  UsersIcon,
  ShieldIcon,
  PulseIcon,
  LockIcon,
} from "../components/icons";

const capabilities = [
  {
    icon: <UsersIcon />,
    title: "IEP Goal Tracking",
    description:
      "Map IEP objectives directly to data collection targets. Track progress across domains with visual timelines for annual reviews.",
  },
  {
    icon: <ChartIcon />,
    title: "Behavior Intervention",
    description:
      "Implement and monitor BIPs with real-time frequency, duration, and ABC data collection across classrooms.",
  },
  {
    icon: <CalendarIcon />,
    title: "Service Scheduling",
    description:
      "Coordinate related services, pull-out sessions, and push-in support across multiple classrooms and providers.",
  },
  {
    icon: <ShieldIcon />,
    title: "FERPA Compliant",
    description:
      "Student data isolation, role-based access, and audit logging designed for educational privacy requirements.",
  },
  {
    icon: <PulseIcon />,
    title: "Progress Reporting",
    description:
      "Auto-generate progress reports aligned to IEP timelines. Share securely with parents and district administrators.",
  },
  {
    icon: <LockIcon />,
    title: "District Integration",
    description:
      "Connect with existing SIS and special education platforms. Streamline data flow between classroom and administration.",
  },
];

const audiences = [
  {
    title: "Special Education Directors",
    description:
      "District-wide visibility into service delivery, compliance timelines, and student outcomes across all schools.",
  },
  {
    title: "BCBAs in Schools",
    description:
      "Clinical-grade data collection tools designed for the unique constraints of school-based ABA services.",
  },
  {
    title: "Paraprofessionals & RBTs",
    description:
      "Simple, intuitive interfaces for consistent data collection. Works offline for classrooms without reliable WiFi.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        title="ABA services in schools"
        subtitle="clinical-grade tools adapted for the school environment."
        cta={{ label: "Schedule a Walkthrough", href: "/#contact" }}
      />

      {/* Capabilities */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-20">
            <SectionHeader
              label="School Modules"
              title="Designed for the Classroom"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <SectionHeader
              label="Built For"
              title="Every Role in Your School"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="relative group rounded-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative z-10 bg-white rounded-xl p-10 h-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-500">
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink-soft group-hover:to-brand-purple transition-all duration-300">
                    {a.title}
                  </h3>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light lowercase text-black mb-6">
            bring clinical rigor to your school
          </h2>
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mb-12">
            WabiCare adapts ABA best practices for school settings — FERPA compliant, offline-ready, and built for team collaboration.
          </p>
          <GradientButton href="/">Get Started</GradientButton>
        </div>
      </section>
    </>
  );
}
