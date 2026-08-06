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

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 lg:grid-cols-[1.2fr_1fr] lg:py-10">
          <div>
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

          <svg
            className="hidden w-full max-w-sm justify-self-center lg:block"
            viewBox="10 40 400 285"
            fill="none"
            aria-hidden="true"
          >
            <ellipse cx="210" cy="300" rx="150" ry="18" fill="#000" opacity="0.25" />

            <g className="animate-[float_5s_ease-in-out_infinite]">
              <rect x="55" y="55" width="230" height="170" rx="18" fill="#131a3a" stroke="#2f54eb" strokeOpacity="0.5" strokeWidth="2" />
              <path
                d="M55 73 L170 155 L285 73"
                stroke="#2f54eb"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="170" cy="140" r="4" fill="#2f54eb" />
            </g>

            <g className="animate-[float_4s_ease-in-out_infinite_0.6s]">
              <rect x="205" y="150" width="150" height="100" rx="16" fill="#2f54eb" />
              <circle cx="235" cy="185" r="6" fill="#fff" opacity="0.9" />
              <circle cx="260" cy="185" r="6" fill="#fff" opacity="0.6" />
              <circle cx="285" cy="185" r="6" fill="#fff" opacity="0.35" />
              <rect x="223" y="208" width="110" height="8" rx="4" fill="#fff" opacity="0.25" />
              <rect x="223" y="223" width="70" height="8" rx="4" fill="#fff" opacity="0.25" />
            </g>

            <g className="animate-[float_6s_ease-in-out_infinite_0.3s]">
              <circle cx="72" cy="215" r="26" fill="#16a34a" />
              <path
                d="M62 215l7 7 12-14"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            <circle cx="345" cy="70" r="5" fill="#2f54eb" opacity="0.6" />
            <circle cx="30" cy="120" r="4" fill="#16a34a" opacity="0.6" />
            <circle cx="365" cy="200" r="3.5" fill="#fff" opacity="0.4" />
          </svg>
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
