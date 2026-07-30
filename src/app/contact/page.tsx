import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import ContactPageForm from "@/components/ContactPageForm";
import { companyInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Sonline",
  description:
    "Get in touch with Sonline's team of digital transformation experts. Talk to sales, ask a general question, or explore a partnership.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] opacity-40"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="200" fill="url(#contact-hero-gradient-1)" />
          <defs>
            <radialGradient id="contact-hero-gradient-1">
              <stop offset="0%" stopColor="#2f54eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2f54eb" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-32 -left-16 h-[24rem] w-[24rem] opacity-30"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="200" fill="url(#contact-hero-gradient-2)" />
          <defs>
            <radialGradient id="contact-hero-gradient-2">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <p className="text-xs font-semibold tracking-widest text-primary">
            GET IN TOUCH
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Our team of transformation experts is ready to help you plan your
            next move whether that&apos;s a quick question or a full
            roadmap.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Contact details</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Reach us directly, or use the form and we&apos;ll route your
              message to the right team.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    EMAIL
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-semibold text-ink hover:text-primary"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    CALL
                  </p>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`}
                    className="text-sm font-semibold text-ink hover:text-primary"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    LOCATION
                  </p>
                  <p className="text-sm font-semibold text-ink">{companyInfo.hq}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    FOLLOW US
                  </p>
                  <a
                    href={companyInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-ink hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactPageForm />
        </div>
      </section>
    </>
  );
}
