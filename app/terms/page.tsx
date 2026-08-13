import type { Metadata } from "next";
import ProseSection, { Block } from "../components/ProseSection";

export const metadata: Metadata = {
  title: "Terms of Service — WabiCare",
  description: "The agreement governing use of WabiCare.",
};

const blocks: Block[] = [
  { tag: "p", text: "Legal" },
  { tag: "p", text: "Last updated: April 14, 2026" },
  { tag: "p", text: "These Terms of Service (“Terms”) govern your access to and use of the WabiCare platform, website, and related services (the “Services”) provided by WabiCare Global Systems (“WabiCare,” “we,” “us”). By using the Services, you agree to these Terms." },
  { tag: "h2", text: "Eligibility & Accounts" },
  { tag: "p", text: "The Services are intended for use by licensed ABA clinics, schools, and authorized personnel. You must be at least 18 years old and authorized to act on behalf of your organization. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account." },
  { tag: "h2", text: "Subscription & Payment" },
  { tag: "li", text: "Subscriptions are billed per the plan selected at signup." },
  { tag: "li", text: "Fees are non-refundable except as required by law." },
  { tag: "li", text: "We may adjust pricing with 30 days’ notice for the next billing cycle." },
  { tag: "li", text: "Non-payment may result in suspension or termination of Services." },
  { tag: "h2", text: "Acceptable Use" },
  { tag: "p", text: "You agree not to:" },
  { tag: "li", text: "Use the Services for any unlawful purpose or in violation of HIPAA or other applicable laws" },
  { tag: "li", text: "Attempt to gain unauthorized access to the Services or other users’ data" },
  { tag: "li", text: "Reverse engineer, decompile, or extract the underlying code" },
  { tag: "li", text: "Upload malware, interfere with Service availability, or attempt denial-of-service" },
  { tag: "li", text: "Resell, sublicense, or share your account credentials" },
  { tag: "li", text: "Submit false, misleading, or infringing content" },
  { tag: "h2", text: "Protected Health Information (PHI)" },
  { tag: "p", text: "If your use of the Services involves PHI, a Business Associate Agreement (BAA) must be executed before any PHI is transmitted. The BAA governs our handling of PHI and, where its terms conflict with these Terms, the BAA controls for PHI-related matters. Request a BAA at hello@wabicare.com." },
  { tag: "h2", text: "Your Data & Content" },
  { tag: "p", text: "You retain all rights to the content and data you submit to the Services (“Customer Data”). You grant WabiCare a limited license to process Customer Data solely to provide, maintain, and improve the Services on your behalf. You are responsible for ensuring you have the legal right to submit Customer Data, including PHI." },
  { tag: "h2", text: "Intellectual Property" },
  { tag: "p", text: "The Services, including software, design, trademarks, and documentation, are owned by WabiCare or its licensors and protected by intellectual property law. These Terms do not grant you any rights to our marks, logos, or code beyond the limited license to use the Services." },
  { tag: "h2", text: "Service Availability" },
  { tag: "p", text: "We aim for high availability but do not guarantee uninterrupted service. Maintenance windows, outages, or third-party issues may affect access. Specific availability commitments, if any, are described in an applicable Order Form or BAA." },
  { tag: "h2", text: "Termination" },
  { tag: "p", text: "Either party may terminate for material breach with 30 days’ written notice if the breach is not cured. You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. Upon termination, your right to use the Services ends, and Customer Data can be exported or deleted within 30 days, subject to legal retention requirements." },
  { tag: "h2", text: "Disclaimers" },
  { tag: "p", text: "THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WABICARE DOES NOT PROVIDE CLINICAL ADVICE. THE SERVICES ARE TOOLS FOR LICENSED CLINICIANS; CLINICAL DECISIONS REMAIN YOUR RESPONSIBILITY." },
  { tag: "h2", text: "Limitation of Liability" },
  { tag: "p", text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WABICARE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUES, OR DATA. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS WILL NOT EXCEED THE FEES YOU PAID TO WABICARE IN THE 12 MONTHS PRECEDING THE CLAIM." },
  { tag: "h2", text: "Indemnification" },
  { tag: "p", text: "You agree to indemnify and hold harmless WabiCare from claims arising out of your breach of these Terms, your Customer Data, or your use of the Services in violation of applicable law." },
  { tag: "h2", text: "Governing Law & Disputes" },
  { tag: "p", text: "These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws rules. Any dispute arising under these Terms will be resolved in the state or federal courts located in Delaware, and the parties consent to the exclusive jurisdiction of those courts." },
  { tag: "h2", text: "Changes to These Terms" },
  { tag: "p", text: "We may update these Terms from time to time. Material changes will be announced on this page and, where required, via email. Continued use of the Services after changes take effect constitutes acceptance." },
  { tag: "h2", text: "Contact" },
  { tag: "p", text: "Questions about these Terms: hello@wabicare.comWabiCare Global Systems" }
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-4">
          terms of service
        </h1>
      </header>
      <ProseSection blocks={blocks} />
    </main>
  );
}
