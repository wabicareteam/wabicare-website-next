import type { Metadata } from "next";
import ProseSection, { Block } from "../components/ProseSection";

export const metadata: Metadata = {
  title: "HIPAA & BAA — WabiCare",
  description:
    "WabiCare signs a Business Associate Agreement with every customer. How we protect PHI.",
};

const blocks: Block[] = [
  {
    tag: "p",
    text: "Protecting patient health information is foundational to WabiCare — not an add-on.",
  },
  { tag: "h2", text: "We sign a BAA with every customer" },
  {
    tag: "p",
    text: "WabiCare acts as a Business Associate to the practices we serve. We provide a Business Associate Agreement (BAA) to every clinic, school, and provider organization, and we execute it before any protected health information (PHI) is stored. To request or review our BAA, email info@wabicare.com.",
  },
  { tag: "h3", text: "What a BAA covers" },
  {
    tag: "p",
    text: "A BAA is the HIPAA-required contract that governs how a service provider handles PHI on your behalf — the permitted uses of PHI, the safeguards we maintain, our breach-notification commitments, and the return or destruction of PHI when our relationship ends.",
  },
  { tag: "h2", text: "How we protect PHI" },
  { tag: "h3", text: "Technical safeguards" },
  { tag: "li", text: "Encryption in transit (TLS) and at rest (AES-256)" },
  { tag: "li", text: "Hosted on Microsoft Azure HIPAA-eligible services, under Microsoft's BAA" },
  { tag: "li", text: "Role-based access, scoped so each organization sees only its own data — no cross-tenant access" },
  { tag: "li", text: "Audit logging of PHI access, with immutable logs" },
  { tag: "li", text: "Secrets and keys stored in a managed key vault, never in code" },
  { tag: "h3", text: "Administrative & physical safeguards" },
  { tag: "li", text: "Least-privilege access, granted only as needed to operate the service" },
  { tag: "li", text: "Code review on changes before they reach production" },
  { tag: "li", text: "Documented incident-response and breach-notification procedures" },
  { tag: "li", text: "Data centers with physical security managed by Microsoft Azure" },
  { tag: "h2", text: "Breach notification" },
  {
    tag: "p",
    text: "In the event of a breach of unsecured PHI, WabiCare will notify affected customers without unreasonable delay and within the timeframe required by HIPAA and your BAA, and cooperate with your notification obligations.",
  },
  { tag: "h2", text: "Data ownership" },
  {
    tag: "p",
    text: "Your data is yours. We use it only to deliver the service, never to train external AI models, and never sell it. On termination, we return or securely destroy PHI in accordance with your BAA.",
  },
  { tag: "h2", text: "Compliance status" },
  { tag: "li", text: "HIPAA — built to the HIPAA Privacy and Security Rules; no government HIPAA certification exists, and we operate under self-attestation with documentation available on request" },
  { tag: "li", text: "Microsoft Azure — our infrastructure inherits Azure's SOC 2, ISO 27001, and HITRUST-certified platform controls" },
  { tag: "li", text: "SOC 2 Type II — in progress (see our Security page for the timeline)" },
  { tag: "h2", text: "Questions" },
  {
    tag: "p",
    text: "BAA requests, security questions, or compliance documentation: info@wabicare.com.",
  },
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-4">
          hipaa &amp; baa
        </h1>
      </header>
      <ProseSection blocks={blocks} />
    </main>
  );
}
