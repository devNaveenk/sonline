import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-ink py-8 text-white lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-primary">
          READY TO BEGIN YOUR TRANSFORMATION JOURNEY?
        </p>
        <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Let&apos;s shape the future together.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70">
          Connect with our advisory team to design your roadmap for AI
          readiness and digital excellence.
        </p>
        <Link
          href="/contact"
          className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark cursor-pointer"
        >
          Talk to Us
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
