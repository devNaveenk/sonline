import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { stats, heroCapabilities } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            EXPERIENCE. INTEGRATE. VISUALIZE. ACT.
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Transforming
            <span className="block text-muted-foreground">
              Possibilities into Reality.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Sonline is your trusted catalyst for reinvention and growth.
            Backed by over a decade of expertise, we deliver transformative
            solutions that integrate strategy, innovation, AI, and technology
            to empower businesses to excel in a competitive digital
            landscape. Whether it&apos;s optimizing operations, strengthening
            IT leadership, enhancing customer engagement, or embracing
            digital transformation, we&apos;re here to guide you through
            every phase of your journey.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark cursor-pointer"
            >
              Talk to Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-6 text-sm font-semibold text-ink transition-colors hover:border-ink cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-dark-surface p-8 text-white shadow-2xl">
            <p className="text-xs font-semibold tracking-wide text-white/50">
              ESTABLISHED 2015
            </p>
            <div className="mt-6 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {heroCapabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
