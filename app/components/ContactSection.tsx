"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <SectionHeader
            label="Get Started"
            title="Request a Demo"
            centered
          />
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mt-6 text-center">
            Tell us about your practice and we will schedule a personalized
            walkthrough of WabiCare.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
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
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/50 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="DR. JANE SMITH"
                  className="w-full px-5 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#F5F5F5] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300 placeholder:text-black/20"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/50 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="JANE@CLINIC.COM"
                  className="w-full px-5 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#F5F5F5] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300 placeholder:text-black/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/50 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="CLINIC / SCHOOL NAME"
                  className="w-full px-5 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#F5F5F5] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300 placeholder:text-black/20"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/50 mb-2">
                  Team Size
                </label>
                <select className="w-full px-5 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#F5F5F5] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300 text-black/60 cursor-pointer appearance-none">
                  <option value="">Select</option>
                  <option value="solo">Solo Provider</option>
                  <option value="2-5">2 - 5 Providers</option>
                  <option value="6-20">6 - 20 Providers</option>
                  <option value="20+">20+ Providers</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] font-bold uppercase tracking-widest text-black/50 mb-2">
                How Can We Help? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="TELL US ABOUT YOUR PRACTICE AND WHAT YOU ARE LOOKING FOR..."
                className="w-full px-5 py-4 text-[10px] font-mono uppercase tracking-widest bg-[#F5F5F5] rounded-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-all duration-300 placeholder:text-black/20 resize-none"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="px-12 py-5 text-[10px] uppercase tracking-[0.2em] font-bold text-white rounded-md bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 shadow-[0_6px_16px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02] cursor-pointer"
              >
                Request Priority Access
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
