# Restored source — August 2026

The live wabicare.com (published 2026-04-14) was deployed by hand with the
Azure SWA CLI and its source was never committed: `main` held only an Apr 6
homepage and `feat/multi-page-nav` an Apr 8 draft. Neither matched what was
serving.

This branch restores the site from `feat/multi-page-nav` plus the live HTML,
verified page-by-page against a full archive of the live site
(98.9% average text parity; clinics/schools/features exact, homepage 99.9%;
the remainder is whitespace and Cloudflare email obfuscation).

## Recovered
- `/security`, `/privacy`, `/terms`, `/cookies` and all six blog articles
  (they existed only on the live site)
- The four-step demo wizard, "Our Partners and Customers", and the corrected
  trust badges

## Deliberately kept from the live version, not the Apr 8 branch
The April revision was a truthfulness pass. Do not reintroduce:
- "SOC-2 Type II Certified" / "99.9% Uptime" (SOC 2 is *in progress* — see
  `/security`; no HIPAA certification exists to hold)
- "68% reduction in billing errors", "4.2h saved per clinician per week",
  "2min average session note completion", "Join 1,000+ ABA providers"
- FERPA compliance, SIS/district integration, and offline-first claims

## Fixed while restoring
- **Lead capture.** The wizard POSTed to `/api/contact`, but no API was ever
  deployed — Azure returned 500 and the client swallowed it, so every demo
  request since April was lost while the visitor saw "message received".
  `api/contact` now delivers to the sales inbox via Azure Communication
  Services, and the form reports real failures with a mailto fallback.
- **Sitemap.** `/sitemap.xml` served the homepage; it is now generated.
- **404s.** Unknown paths (e.g. `/pricing`) returned the homepage with a 200;
  there is now a real not-found page.

## Deployment
`.github/workflows/deploy.yml` (manual trigger until approved). Requires
repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`, and these application
settings on the Static Web App: `AZURE_COMMUNICATION_CONNECTION_STRING`,
`AZURE_EMAIL_SENDER`, `LEADS_EMAIL`.
