import type { Metadata } from "next";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "FAQ — WabiCare",
  description:
    "Answers to the questions ABA clinic owners, BCBAs, and administrators ask before switching to WabiCare.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I get started?",
    a: "Request a demo and we'll build you a custom plan. Once you're ready, our team sets up your organization, loads your CPT codes and payers, and gets your first clinicians live. You're assigned a real onboarding specialist — not a ticket queue.",
  },
  {
    q: "How do I switch from my current platform?",
    a: "We migrate you. WabiCare moves your patients, authorizations, and historical data from your existing system so you don't start from scratch. We run both systems in parallel during the transition so billing never stops, and we don't call the switch done until your team is confident.",
  },
  {
    q: "What does WabiCare include?",
    a: "One platform runs your whole practice — scheduling, data collection, AI-drafted session notes, the full revenue cycle (eligibility, authorizations, claims, remittance, denial prevention), and a guardian portal for families. No bolt-on tools.",
  },
  {
    q: "Can a startup or small clinic use WabiCare?",
    a: "Yes. It's built for independent clinics and small teams, not just enterprises — you can start with a single clinician and scale up as you grow.",
  },
  {
    q: "Do you handle billing and insurance claims?",
    a: "Yes — the full revenue cycle is built in. WabiCare verifies eligibility, tracks authorizations, generates clean 837P claims, and posts 835 remittances. It catches claims that would be denied — missing authorization, over-unit, future-dated — before they're ever sent, and learns from every denial. Claims flow through an integrated clearinghouse, so submissions go out and payments come back without manual re-uploading.",
  },
  {
    q: "What kind of support will I get?",
    a: "Real people who know ABA. Every customer gets a named onboarding specialist and ongoing support — reach us anytime at info@wabicare.com. We also provide training and help getting your team confident on the platform.",
  },
  {
    q: "What devices can I use? Is there a mobile app?",
    a: "WabiCare runs in any modern browser and on mobile, with a companion app so RBTs and BCBAs can collect data at the point of care — eyes on the client, not the screen.",
  },
  {
    q: "How does the AI work — and is it safe with patient data?",
    a: "WabiCare's AI drafts notes and surfaces insights from the data your team already collects; a clinician always reviews and signs before anything is final. AI processing happens inside your HIPAA-aligned environment, and your patient data is never used to train external models.",
  },
  {
    q: "Is my data secure and HIPAA-compliant?",
    a: "Yes. WabiCare is built HIPAA-first: data is encrypted in transit and at rest, hosted on Microsoft Azure, access is role-based and organization-scoped, and record access is audit-logged. We sign a Business Associate Agreement (BAA) with every clinic — see our HIPAA & BAA page for details.",
  },
  {
    q: "Who owns the data?",
    a: "You do. Your clinical and business data is yours, and we'll help you export it if you ever leave.",
  },
  {
    q: "What does it cost, and how do I pay?",
    a: "WabiCare is subscription-based (per seat, and per student for schools), with billing features priced to replace — and cost less than — a third-party billing service. Request a demo for a custom quote.",
  },
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <SectionHeader label="Answers" title="Frequently Asked Questions" centered />
        <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mt-6">
          The questions we hear most, before clinics switch to WabiCare.
        </p>
      </div>
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((f) => (
          <div key={f.q} className="py-8">
            <h2 className="font-serif text-xl md:text-2xl text-black mb-3">
              {f.q}
            </h2>
            <p className="font-serif text-black/75 text-lg leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mb-6">
          Still have a question? We&apos;d love to help.
        </p>
        <a
          href="mailto:info@wabicare.com"
          className="inline-block px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-md transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02]"
        >
          Email info@wabicare.com
        </a>
      </div>
    </main>
  );
}
