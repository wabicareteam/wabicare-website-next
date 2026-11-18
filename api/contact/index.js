/**
 * POST /api/contact — demo requests (4-step wizard) and newsletter signups.
 *
 * History: the site shipped with this route referenced by the front end but
 * no API deployed, so Azure answered 500 "Backend call failure" while the
 * client swallowed the error and showed "message received". Every lead was
 * lost. This function is the missing half; the client now also surfaces
 * failures instead of faking success.
 *
 * A body with `source: "newsletter"` is a newsletter signup (email only);
 * anything else is a demo request (name + email required).
 *
 * Delivery uses Azure Communication Services — the same email path the
 * clinical backend already uses in production. Configuration comes from
 * application settings (never committed):
 *   AZURE_COMMUNICATION_CONNECTION_STRING  (required)
 *   AZURE_EMAIL_SENDER                     (verified ACS sender address)
 *   LEADS_EMAIL                            (defaults to info@wabicare.com)
 *
 * No PHI is involved: this handles prospect contact details only.
 */

const LEADS_EMAIL_DEFAULT = "info@wabicare.com";

const FIELDS = [
  ["name", "Full name"],
  ["email", "Email"],
  ["organization", "Organization"],
  ["orgType", "Organization type"],
  ["location", "Location"],
  ["teamSize", "Team size"],
  ["currentSoftware", "Current software"],
  ["message", "Message"],
];

const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const trim = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

module.exports = async function (context, req) {
  const body = req.body || {};
  const isNewsletter = trim(body.source, 40) === "newsletter";

  const lead = {};
  for (const [key] of FIELDS) {
    lead[key] = trim(body[key], key === "message" ? 4000 : 200);
  }

  // Validation. Demo requests need a name + email; newsletter signups need
  // only a valid email, so a visitor is never blocked for leaving the rest.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email);
  if (!emailOk || (!isNewsletter && !lead.name)) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: {
        error: isNewsletter
          ? "A valid email address is required."
          : "A name and a valid email address are required.",
      },
    };
    return;
  }

  const connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
  const sender = process.env.AZURE_EMAIL_SENDER;
  const to = process.env.LEADS_EMAIL || LEADS_EMAIL_DEFAULT;

  if (!connectionString || !sender) {
    // Fail loudly rather than pretending: an unconfigured deployment must
    // not report success. The client shows its mailto fallback on non-2xx.
    context.log.error(
      "Lead delivery not configured — missing ACS connection string or sender."
    );
    context.res = {
      status: 503,
      headers: { "Content-Type": "application/json" },
      body: { error: "Lead delivery is not configured." },
    };
    return;
  }

  const heading = isNewsletter
    ? "New newsletter signup — wabicare.com"
    : "New demo request — wabicare.com";

  const rows = FIELDS.filter(([k]) => lead[k])
    .map(
      ([k, label]) =>
        `<tr><td style="padding:6px 12px;font:600 12px sans-serif;color:#555;white-space:nowrap;vertical-align:top">${esc(
          label
        )}</td><td style="padding:6px 12px;font:14px sans-serif;color:#111">${esc(
          lead[k]
        ).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const html = `<div style="font-family:sans-serif">
    <h2 style="font:600 18px sans-serif;color:#111">${esc(heading)}</h2>
    <table style="border-collapse:collapse;margin-top:12px">${rows}</table>
    <p style="font:12px sans-serif;color:#777;margin-top:20px">
      Reply directly to ${esc(lead.email)} to reach this ${
    isNewsletter ? "subscriber" : "prospect"
  }.
    </p>
  </div>`;

  const plain = FIELDS.filter(([k]) => lead[k])
    .map(([k, label]) => `${label}: ${lead[k]}`)
    .join("\n");

  const subject = isNewsletter
    ? "Newsletter signup — wabicare.com"
    : `Demo request — ${lead.organization || lead.name}`;

  try {
    const { EmailClient } = require("@azure/communication-email");
    const client = new EmailClient(connectionString);
    const poller = await client.beginSend({
      senderAddress: sender,
      recipients: { to: [{ address: to }] },
      content: { subject, plainText: plain, html },
      replyTo: [{ address: lead.email, displayName: lead.name || lead.email }],
    });
    await poller.pollUntilDone();

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { ok: true },
    };
  } catch (err) {
    context.log.error("Lead email failed", err);
    context.res = {
      status: 502,
      headers: { "Content-Type": "application/json" },
      body: { error: "Could not deliver the request." },
    };
  }
};
