import type { Metadata } from "next";
import ProseSection, { Block } from "../components/ProseSection";

export const metadata: Metadata = {
  title: "Cookie Policy — WabiCare",
  description: "How WabiCare uses cookies and similar technologies.",
};

const blocks: Block[] = [
  { tag: "p", text: "Legal" },
  { tag: "p", text: "Last updated: April 14, 2026" },
  { tag: "p", text: "This Cookie Policy explains how WabiCare Global Systems (“WabiCare,” “we,” “us”) uses cookies and similar technologies on our website and in our platform." },
  { tag: "h2", text: "What Are Cookies?" },
  { tag: "p", text: "Cookies are small text files placed on your device by websites you visit. They help sites remember preferences, authenticate sessions, and understand how visitors use the site." },
  { tag: "h2", text: "Types of Cookies We Use" },
  { tag: "h3", text: "Strictly Necessary" },
  { tag: "p", text: "Required for core functionality — authentication, session management, and security. These cannot be disabled through our platform." },
  { tag: "h3", text: "Functional" },
  { tag: "p", text: "Remember preferences such as language, theme, or recently viewed items to improve your experience." },
  { tag: "h3", text: "Analytics" },
  { tag: "p", text: "Help us understand how visitors use the site so we can improve it. We use privacy-focused analytics that do not track you across other websites." },
  { tag: "h3", text: "Marketing" },
  { tag: "p", text: "We currently do not use third-party advertising or cross-site tracking cookies. If this changes, this policy will be updated and consent will be requested where required." },
  { tag: "h2", text: "Managing Your Preferences" },
  { tag: "p", text: "You can control cookies in several ways:" },
  { tag: "li", text: "Browser settings — most browsers let you block or delete cookies. Note that blocking strictly necessary cookies may break site functionality." },
  { tag: "li", text: "Consent banner — if you visit from a region with opt-in requirements (EU, UK), we show a consent banner where you can accept or decline non-essential cookies." },
  { tag: "li", text: "Do Not Track — we honor DNT signals for non-essential tracking." },
  { tag: "h2", text: "Third-Party Cookies" },
  { tag: "p", text: "Some cookies may be set by third parties whose services we embed, such as analytics providers or embedded video players. These parties have their own privacy policies." },
  { tag: "h2", text: "Changes to This Policy" },
  { tag: "p", text: "We may update this policy as our cookie usage evolves. Material changes will be posted on this page." },
  { tag: "h2", text: "Contact" },
  { tag: "p", text: "Questions about cookies: privacy@wabicare.com" }
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-4">
          cookie policy
        </h1>
      </header>
      <ProseSection blocks={blocks} />
    </main>
  );
}
