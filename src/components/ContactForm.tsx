"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-white"
      >
        Thanks — your inquiry has been received. Our team will reach out to{" "}
        <span className="font-semibold">support@sonline.us</span> shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-medium tracking-wide text-white/70">
          FULL NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="h-11 rounded-lg border border-white/15 bg-white/5 px-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus-visible:ring-2 focus-visible:ring-white/40"
          placeholder="Jane Doe"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium tracking-wide text-white/70">
          EMAIL ADDRESS
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-lg border border-white/15 bg-white/5 px-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus-visible:ring-2 focus-visible:ring-white/40"
          placeholder="jane@company.com"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="organization" className="text-xs font-medium tracking-wide text-white/70">
          ORGANIZATION
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="h-11 rounded-lg border border-white/15 bg-white/5 px-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus-visible:ring-2 focus-visible:ring-white/40"
          placeholder="Acme Corp"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="vision" className="text-xs font-medium tracking-wide text-white/70">
          YOUR VISION
        </label>
        <textarea
          id="vision"
          name="vision"
          rows={4}
          required
          className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus-visible:ring-2 focus-visible:ring-white/40"
          placeholder="Tell us what you're looking to transform..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="sm:col-span-2 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark disabled:opacity-60 cursor-pointer"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
