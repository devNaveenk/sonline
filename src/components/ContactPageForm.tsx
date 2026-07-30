"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { interestOptions } from "@/lib/content";

export default function ContactPageForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      workEmail: formData.get("workEmail"),
      organization: formData.get("organization"),
      interest: formData.get("interest"),
      details: formData.get("details"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setErrorMessage("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-white p-8 text-center"
      >
        <h3 className="text-lg font-semibold text-ink">Message received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out our team will get back to you shortly at
          the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-white p-6 sm:grid-cols-2 sm:p-8"
    >
      {status === "error" && (
        <p
          role="alert"
          className="sm:col-span-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </p>
      )}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="firstName" className="text-xs font-semibold tracking-wide text-muted-foreground">
          FIRST NAME
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          className="h-11 rounded-lg border border-border bg-muted-bg px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
          placeholder="Jane"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lastName" className="text-xs font-semibold tracking-wide text-muted-foreground">
          LAST NAME
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          autoComplete="family-name"
          className="h-11 rounded-lg border border-border bg-muted-bg px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
          placeholder="Doe"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="workEmail" className="text-xs font-semibold tracking-wide text-muted-foreground">
          WORK EMAIL
        </label>
        <input
          id="workEmail"
          name="workEmail"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-lg border border-border bg-muted-bg px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
          placeholder="jane@company.com"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="organization" className="text-xs font-semibold tracking-wide text-muted-foreground">
          ORGANIZATION
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="h-11 rounded-lg border border-border bg-muted-bg px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
          placeholder="Acme Corp"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="interest" className="text-xs font-semibold tracking-wide text-muted-foreground">
          WHAT ARE YOU LOOKING TO EXPLORE?
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          required
          className="h-11 rounded-lg border border-border bg-muted-bg px-3.5 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
        >
          <option value="" disabled>
            Select an area
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="details" className="text-xs font-semibold tracking-wide text-muted-foreground">
          ADDITIONAL DETAILS
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="rounded-lg border border-border bg-muted-bg px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/20"
          placeholder="Tell us more about what you're looking to achieve..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="sm:col-span-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark disabled:opacity-60 cursor-pointer"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>
    </form>
  );
}
