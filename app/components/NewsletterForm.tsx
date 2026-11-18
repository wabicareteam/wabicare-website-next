"use client";

import { useState } from "react";

const LEADS_EMAIL = "info@wabicare.com";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!emailOk) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source: "newsletter" }),
      });
      if (!res.ok) throw new Error(`Subscribe endpoint returned ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  // Fallback so no one is stranded if the API is down.
  const mailtoHref = `mailto:${LEADS_EMAIL}?subject=${encodeURIComponent(
    "Newsletter signup"
  )}&body=${encodeURIComponent(`Please add ${email} to the WabiCare updates list.`)}`;

  if (status === "done") {
    return (
      <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/70 leading-loose">
        You&apos;re in — check your inbox to confirm. No spam, unsubscribe anytime.
      </p>
    );
  }

  return (
    <form
      onSubmit={subscribe}
      className="flex flex-col gap-3 max-w-md mx-auto"
      noValidate
    >
      {/* honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL ADDRESS"
          className="flex-grow px-6 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#FAFAFA] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={!emailOk || status === "sending"}
          className="px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white rounded-md bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02] cursor-pointer whitespace-nowrap disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-default"
        >
          {status === "sending" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-mono text-[9px] uppercase tracking-wider text-red-600">
          Could not subscribe just now — please email us at{" "}
          <a href={mailtoHref} className="underline hover:text-brand-purple">
            {LEADS_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
