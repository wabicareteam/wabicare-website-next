import type { Metadata } from "next";
import ProseSection, { Block } from "../components/ProseSection";

export const metadata: Metadata = {
  title: "Privacy Policy — WabiCare",
  description: "How we collect, use, and protect information.",
};

const blocks: Block[] = [
  { tag: "p", text: "Legal" },
  { tag: "p", text: "Last updated: April 14, 2026" },
  { tag: "p", text: "WabiCare Global Systems (“WabiCare,” “we,” “us”) provides practice management software for ABA therapy clinics. This Privacy Policy describes how we collect, use, and protect information when you visit our website and use our services." },
  { tag: "p", text: "WabiCare acts as a Business Associate under HIPAA when processing Protected Health Information (PHI) on behalf of our clinic customers (Covered Entities). A Business Associate Agreement (BAA) governs our handling of PHI — see HIPAA & PHI below." },
  { tag: "h2", text: "Information We Collect" },
  { tag: "h3", text: "Information You Provide" },
  { tag: "li", text: "Account details (name, email, organization, role)" },
  { tag: "li", text: "Billing information (processed by our payment processor)" },
  { tag: "li", text: "Content you upload or generate within the platform" },
  { tag: "li", text: "Communications you send to our support team" },
  { tag: "h3", text: "Information Collected Automatically" },
  { tag: "li", text: "Log data (IP address, browser type, device, timestamps)" },
  { tag: "li", text: "Usage analytics (pages visited, features used, session duration)" },
  { tag: "li", text: "Cookies and similar technologies (see Cookies below)" },
  { tag: "h3", text: "Protected Health Information (PHI)" },
  { tag: "p", text: "Our clinic customers may input PHI into the platform, including patient demographics, clinical notes, session data, and billing records. We process PHI solely on behalf of the customer under an executed BAA." },
  { tag: "h2", text: "How We Use Information" },
  { tag: "li", text: "To provide, maintain, and improve the WabiCare platform" },
  { tag: "li", text: "To authenticate users and secure accounts" },
  { tag: "li", text: "To process payments and manage subscriptions" },
  { tag: "li", text: "To communicate service updates, security notices, and support responses" },
  { tag: "li", text: "To comply with legal obligations and enforce our Terms of Service" },
  { tag: "li", text: "To detect, prevent, and respond to fraud or security incidents" },
  { tag: "p", text: "We do not sell personal information or PHI. We do not use PHI for marketing or advertising." },
  { tag: "h2", text: "HIPAA & PHI" },
  { tag: "p", text: "When a clinic customer transmits PHI to WabiCare, WabiCare is a HIPAA Business Associate. We enter into a BAA with each customer before accepting PHI. Our safeguards include:" },
  { tag: "li", text: "Encryption of PHI in transit (TLS 1.2+) and at rest (AES-256)" },
  { tag: "li", text: "Role-based access controls and organization-level data isolation" },
  { tag: "li", text: "Audit logging of PHI access and modifications" },
  { tag: "li", text: "Workforce training on HIPAA Privacy and Security Rules" },
  { tag: "li", text: "Breach notification procedures compliant with HIPAA and HITECH" },
  { tag: "p", text: "To request a BAA, contact hello@wabicare.com." },
  { tag: "h2", text: "How We Share Information" },
  { tag: "p", text: "We share information only in these circumstances:" },
  { tag: "li", text: "Subprocessors — vetted service providers (cloud hosting, email, analytics, payments) bound by contracts and BAAs where applicable." },
  { tag: "li", text: "Legal requirements — to comply with valid subpoenas, court orders, or regulatory requests." },
  { tag: "li", text: "Business transfers — in the event of a merger, acquisition, or sale of assets, with appropriate notice and continued protection." },
  { tag: "li", text: "With your consent — for any other sharing, we will ask first." },
  { tag: "p", text: "We use cookies and similar technologies for authentication, preferences, and analytics. You can control cookies through your browser settings. Essential cookies are required for the platform to function." },
  { tag: "h2", text: "Data Retention" },
  { tag: "p", text: "We retain account information for the duration of your subscription plus a reasonable period for legal and operational purposes. PHI is retained and deleted per the terms of the BAA. Upon termination, data can be exported or deleted within 30 days, subject to legal retention requirements." },
  { tag: "h2", text: "Your Rights" },
  { tag: "p", text: "Depending on your location, you may have the right to access, correct, delete, or port your personal information, or object to certain processing. To exercise these rights, email privacy@wabicare.com. For PHI, direct requests to the clinic that is the Covered Entity." },
  { tag: "p", text: "We implement administrative, physical, and technical safeguards to protect information. No system is perfectly secure; if we discover a breach, we will notify affected parties per applicable law and our BAAs." },
  { tag: "h2", text: "Children's Privacy" },
  { tag: "p", text: "WabiCare is a B2B platform not directed at children. PHI for pediatric patients is submitted by authorized clinic staff under a BAA." },
  { tag: "h2", text: "Changes to This Policy" },
  { tag: "p", text: "We may update this policy. Material changes will be announced on this page and, where required, via email." },
  { tag: "h2", text: "Contact" },
  { tag: "p", text: "Questions about this policy: privacy@wabicare.comWabiCare Global Systems" }
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-4">
          privacy policy
        </h1>
      </header>
      <ProseSection blocks={blocks} />
    </main>
  );
}
