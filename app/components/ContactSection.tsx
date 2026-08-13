"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const ORG_TYPES = [
  "ABA Clinic",
  "School District",
  "Therapy Center",
  "Individual Provider",
  "Parent / Caregiver",
];

const TEAM_SIZES = [
  "Solo Provider",
  "2 – 5 Providers",
  "6 – 20 Providers",
  "20+ Providers",
];

const LEADS_EMAIL = "info@wabicare.com";
const STEPS = 4;

const inputClass =
  "w-full bg-white border border-black/10 rounded-md px-4 py-3 font-serif text-black placeholder:text-black/30 focus:outline-none focus:border-brand-purple transition-colors";

interface FormState {
  orgType: string;
  location: string;
  teamSize: string;
  currentSoftware: string;
  name: string;
  email: string;
  organization: string;
  message: string;
}

const EMPTY: FormState = {
  orgType: "",
  location: "",
  teamSize: "",
  currentSoftware: "",
  name: "",
  email: "",
  organization: "",
  message: "",
};

export default function ContactSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const progress = ((step + 1) / STEPS) * 100;
  const next = () => step < STEPS - 1 && setStep(step + 1);

  async function submit() {
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // A lead is only "received" once the server says so. The previous
      // build swallowed errors and always showed success, so every demo
      // request was silently lost while the visitor believed it landed.
      if (!res.ok) throw new Error(`Lead endpoint returned ${res.status}`);
      setSubmitted(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  // Fallback so a prospect is never stranded if the API is down.
  const mailtoHref = `mailto:${LEADS_EMAIL}?subject=${encodeURIComponent(
    "Demo request — WabiCare"
  )}&body=${encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization}`,
      `Organization type: ${form.orgType}`,
      `Location: ${form.location}`,
      `Team size: ${form.teamSize}`,
      `Current software: ${form.currentSoftware}`,
      "",
      form.message,
    ].join("\n")
  )}`;

  if (submitted) {
    return (
      <section
        id="contact"
        className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
      >
        <div className="max-w-xl mx-auto text-center py-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center mx-auto mb-8 shadow-md">
            <svg
              className="w-8 h-8 stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-serif text-3xl font-light lowercase text-black mb-4">
            message received
          </h3>
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose">
            Our team will reach out within 24 hours to schedule your demo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <SectionHeader label="Get Started" title="Request a Demo" centered />
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mt-6 text-center">
            Takes 2 minutes. Get a custom proposal within 24 hours.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-black/50 mb-2">
            <span>
              Step {step + 1} of {STEPS}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[3px] w-full bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="min-h-[280px]">
          {step === 0 && (
            <div>
              <h3 className="font-serif text-2xl font-semibold text-black mb-2">
                What describes you best?
              </h3>
              <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mb-6">
                Select your organization type
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ORG_TYPES.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => {
                      set("orgType", o);
                      next();
                    }}
                    className={`px-5 py-4 rounded-md border font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                      form.orgType === o
                        ? "border-brand-purple bg-white text-black shadow-sm"
                        : "border-black/10 text-black/70 hover:border-brand-purple/60 hover:bg-white"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl font-semibold text-black mb-2">
                Where are you located?
              </h3>
              <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mb-6">
                Help us understand your region
              </p>
              <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                City, State / Province
              </label>
              <input
                type="text"
                placeholder="Salt Lake City, UT"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
                className={inputClass}
              />
              <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mt-8 mb-2">
                Team Size
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TEAM_SIZES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("teamSize", t)}
                    className={`px-5 py-4 rounded-md border font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                      form.teamSize === t
                        ? "border-brand-purple bg-white text-black shadow-sm"
                        : "border-black/10 text-black/70 hover:border-brand-purple/60 hover:bg-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-serif text-2xl font-semibold text-black mb-2">
                Current software usage
              </h3>
              <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mb-6">
                What tools do you currently use?
              </p>
              <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                Current Software / Tools
              </label>
              <input
                type="text"
                placeholder="e.g. CentralReach, Motivity, pen & paper..."
                value={form.currentSoftware}
                onChange={(e) => set("currentSoftware", e.target.value)}
                className={inputClass}
              />
              <p className="font-mono text-[8px] text-black/50 uppercase tracking-wider mt-2">
                List the main tools you use for data collection, scheduling, or
                documentation
              </p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-serif text-2xl font-semibold text-black mb-2">
                Almost there
              </h3>
              <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mb-6">
                How should we reach you?
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Smith"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@clinic.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Bright Horizons ABA"
                    value={form.organization}
                    onChange={(e) => set("organization", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/70 mb-2">
                    Anything else?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you are looking for..."
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {failed && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-red-700 mb-2">
              We could not submit your request
            </p>
            <p className="font-serif text-black/70 text-base">
              Please try again, or email us directly at{" "}
              <a href={mailtoHref} className="underline decoration-black/30 hover:text-brand-purple">
                {LEADS_EMAIL}
              </a>{" "}
              — your answers are pre-filled in that message.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mt-10">
          <button
            type="button"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="font-mono text-[10px] uppercase tracking-widest text-black/60 disabled:opacity-30 hover:text-black transition-colors"
          >
            Previous
          </button>
          {step < STEPS - 1 ? (
            <button
              type="button"
              onClick={next}
              className="px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-md transition-all duration-300 hover:scale-[1.02]"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={sending || !form.name || !form.email}
              className="px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-md transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
