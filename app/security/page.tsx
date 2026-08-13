import type { Metadata } from "next";
import ProseSection, { Block } from "../components/ProseSection";

export const metadata: Metadata = {
  title: "Security & Compliance — WabiCare",
  description: "Trust is infrastructure. Here is how we build it.",
};

const blocks: Block[] = [
  { tag: "p", text: "Trust" },
  { tag: "p", text: "Trust is infrastructure. Here’s how we build it." },
  { tag: "h2", text: "HIPAA" },
  { tag: "p", text: "WabiCare is built for HIPAA: our architecture, policies, and operations are designed to support HIPAA Privacy, Security, and Breach Notification Rule requirements. We act as a Business Associate when processing PHI on behalf of clinic customers." },
  { tag: "li", text: "Business Associate Agreement (BAA) executed before any PHI transmission" },
  { tag: "li", text: "Written policies aligned with the HIPAA Security Rule (administrative, physical, technical safeguards)" },
  { tag: "li", text: "Workforce training on HIPAA Privacy and Security" },
  { tag: "li", text: "Breach notification procedures compliant with HIPAA and HITECH" },
  { tag: "li", text: "HIPAA risk assessment conducted and documented" },
  { tag: "p", text: "Request a BAA: hello@wabicare.com" },
  { tag: "h2", text: "Infrastructure" },
  { tag: "li", text: "Hosted on Microsoft Azure— HIPAA-eligible services under Microsoft’s BAA" },
  { tag: "li", text: "Azure Static Web Apps with global CDN for marketing content" },
  { tag: "li", text: "Azure Container Apps for application backend" },
  { tag: "li", text: "Azure PostgreSQL with Transparent Data Encryption (TDE)" },
  { tag: "li", text: "Azure Blob Storage with server-side encryption for documents" },
  { tag: "li", text: "Private networking and managed identities for service-to-service auth" },
  { tag: "h2", text: "Encryption" },
  { tag: "li", text: "In transit: TLS 1.2+ enforced; HSTS enabled; HTTP automatically redirected to HTTPS" },
  { tag: "li", text: "At rest: AES-256 encryption for database, file storage, and backups" },
  { tag: "li", text: "Managed secrets stored in Azure Key Vault with rotation policies" },
  { tag: "h2", text: "Access Controls" },
  { tag: "li", text: "Organization-level data isolation — no cross-tenant data access" },
  { tag: "li", text: "Role-based access control (RBAC) with least-privilege defaults" },
  { tag: "li", text: "MFA required for administrative access" },
  { tag: "li", text: "Session timeouts and token refresh policies" },
  { tag: "li", text: "Audit logs of PHI access, modifications, and authentication events" },
  { tag: "h2", text: "Software Development" },
  { tag: "li", text: "Code review required for all production changes" },
  { tag: "li", text: "Automated testing and CI/CD pipelines" },
  { tag: "li", text: "Static analysis and dependency vulnerability scanning" },
  { tag: "li", text: "Staging environment for pre-production validation" },
  { tag: "h2", text: "Monitoring & Incident Response" },
  { tag: "li", text: "Continuous logging and monitoring of authentication, API, and data access" },
  { tag: "li", text: "Documented incident response and breach notification runbook" },
  { tag: "li", text: "Responsible disclosure for security researchers: security@wabicare.com" },
  { tag: "h2", text: "Certifications & Audits" },
  { tag: "li", text: "SOC 2 Type II — in progress. Timeline: audit readiness assessment 2026; Type I report targeted Q4 2026; Type II report 2027." },
  { tag: "li", text: "HIPAA — no government certification exists for HIPAA; we operate under self-attestation and can provide documentation of our Security Rule controls upon request." },
  { tag: "h2", text: "Subprocessors" },
  { tag: "p", text: "A current list of subprocessors that may process Customer Data (including Microsoft Azure as our primary infrastructure provider) is available on request. Each subprocessor is vetted, bound by contract, and where applicable, has executed a BAA." },
  { tag: "h2", text: "Contact" },
  { tag: "p", text: "Security questions, compliance documentation requests, or BAA requests:security@wabicare.com" }
];

export default function Page() {
  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-4">
          security & compliance
        </h1>
      </header>
      <ProseSection blocks={blocks} />
    </main>
  );
}
