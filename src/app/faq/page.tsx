import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqCategories } from "@/lib/faqContent";

export const metadata: Metadata = {
  title: "FAQs | Sonline",
  description:
    "Answers to common questions about Sonline's services, solutions, culture, and how to work with us.",
};

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] opacity-40"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="200" fill="url(#faq-hero-gradient-1)" />
          <defs>
            <radialGradient id="faq-hero-gradient-1">
              <stop offset="0%" stopColor="#2f54eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2f54eb" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 lg:grid-cols-[1.2fr_1fr] lg:py-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary">
              FAQS
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Answers to your questions.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Everything you need to know about who we are, what we build,
              and how to start working with Sonline.
            </p>
          </div>

          <svg
            className="hidden w-full max-w-sm justify-self-center lg:block"
            viewBox="10 40 400 260"
            fill="none"
            aria-hidden="true"
          >
            <ellipse cx="210" cy="280" rx="140" ry="16" fill="#000" opacity="0.25" />

            <g className="animate-[float_5s_ease-in-out_infinite]">
              <rect x="70" y="60" width="200" height="150" rx="18" fill="#131a3a" stroke="#2f54eb" strokeOpacity="0.5" strokeWidth="2" />
              <circle cx="170" cy="115" r="26" fill="#2f54eb" opacity="0.15" />
              <path
                d="M160 108c0-8 7-13 14-13s14 5 14 12c0 8-9 9-13 15"
                stroke="#2f54eb"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="174" cy="140" r="2.5" fill="#2f54eb" />
              <rect x="100" y="165" width="140" height="8" rx="4" fill="#fff" opacity="0.2" />
              <rect x="100" y="180" width="95" height="8" rx="4" fill="#fff" opacity="0.15" />
            </g>

            <g className="animate-[float_4s_ease-in-out_infinite_0.6s]">
              <circle cx="315" cy="90" r="34" fill="#2f54eb" />
              <text x="315" y="101" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff">
                ?
              </text>
            </g>

            <g className="animate-[float_6s_ease-in-out_infinite_0.3s]">
              <circle cx="80" cy="220" r="24" fill="#16a34a" />
              <path
                d="M70 220l7 7 12-14"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            <circle cx="345" cy="180" r="5" fill="#2f54eb" opacity="0.6" />
            <circle cx="55" cy="90" r="4" fill="#16a34a" opacity="0.6" />
          </svg>
        </div>
      </section>

      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>
    </>
  );
}
