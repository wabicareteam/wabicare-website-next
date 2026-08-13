import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import GradientButton from "../components/GradientButton";
import {
  CalendarIcon,
  ChartIcon,
  DollarIcon,
  UsersIcon,
  ShieldIcon,
  PulseIcon,
  LockIcon,
  PlusCircleIcon,
} from "../components/icons";
import { ReactNode } from "react";

interface FeatureGroup {
  label: string;
  title: string;
  features: { icon: ReactNode; title: string; description: string }[];
}

const featureGroups: FeatureGroup[] = [
  {
    label: "Clinical Operations",
    title: "Session & Data Management",
    features: [
      {
        icon: <CalendarIcon />,
        title: "Scheduling",
        description:
          "Manage provider schedules, appointments, and session coordination with calendar views and guardian visibility.",
      },
      {
        icon: <ChartIcon />,
        title: "Data Collection",
        description:
          "DTT, task analysis, frequency, duration, interval, and ABC recording with 11 built-in data collection methods.",
      },
      {
        icon: <PulseIcon />,
        title: "Session Notes",
        description:
          "AI-powered session documentation with auto-populated data summaries. Convert sessions to billable claims in one click.",
      },
      {
        icon: <UsersIcon />,
        title: "Treatment Planning",
        description:
          "Build and manage treatment plans with a comprehensive program builder, goal libraries, and mastery criteria.",
      },
    ],
  },
  {
    label: "Revenue Cycle",
    title: "Billing & Insurance",
    features: [
      {
        icon: <DollarIcon />,
        title: "Claims Management",
        description:
          "Automated 837P generation from session data. ERA/835 posting, denial tracking, and resubmission workflows.",
      },
      {
        icon: <ShieldIcon />,
        title: "Authorization Tracking",
        description:
          "Monitor authorized units in real-time. Get alerts before authorizations expire or units run out.",
      },
      {
        icon: <PlusCircleIcon />,
        title: "Billing Configuration",
        description:
          "Configure clearinghouses, payers, CPT codes, provider credentials, and billing defaults from one settings panel.",
      },
      {
        icon: <ChartIcon />,
        title: "Revenue Analytics",
        description:
          "Dashboard views of collection rates, AR aging reports, payer mix, denial trends, and monthly revenue.",
      },
    ],
  },
  {
    label: "Engagement",
    title: "Team & Family Tools",
    features: [
      {
        icon: <UsersIcon />,
        title: "Guardian Portal",
        description:
          "Parents view progress, sign documents, submit intake forms, and communicate with the clinical team through a secure portal.",
      },
      {
        icon: <LockIcon />,
        title: "Staff Management",
        description:
          "Employee and manager portals, onboarding checklists, org chart, rewards, and role-based permissions for your team.",
      },
      {
        icon: <PulseIcon />,
        title: "Training & LMS",
        description:
          "Course catalog, lesson delivery, quizzes, certification tracking, and CEU management for ongoing staff development.",
      },
      {
        icon: <ShieldIcon />,
        title: "EVV & Compliance",
        description:
          "Electronic visit verification with check-in/check-out tracking, audit trails, and certification renewal monitoring.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="everything you need"
        subtitle="a complete operating system for ABA practices."
        cta={{ label: "Request a Demo", href: "/#contact" }}
      />

      {featureGroups.map((group, i) => (
        <section
          key={group.label}
          className={`py-32 px-8 md:px-12 border-t border-gray-100 ${
            i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-[#FAFAFA]"
          }`}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-20">
              <SectionHeader label={group.label} title={group.title} centered />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light lowercase text-black mb-6">
            see it in action
          </h2>
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mb-12">
            Schedule a personalized walkthrough and discover how WabiCare can transform your practice operations.
          </p>
          <GradientButton href="/">Request a Demo</GradientButton>
        </div>
      </section>
    </>
  );
}
