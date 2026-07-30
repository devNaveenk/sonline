import { ArrowRight } from "lucide-react";
import { payrollIntegration, payrollSystems } from "@/lib/content";

export function FeaturedProjectSection() {
  return (
    <section id="featured-project" className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="overflow-hidden rounded-3xl bg-ink text-white">
        <div className="p-8 sm:p-12 lg:p-16">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary">
            FEATURED PROJECT
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Connecting BallotDA to Enterprise Payroll Systems
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Election offices manage thousands of temporary poll workers per
            cycle. We integrated BallotDA&apos;s poll worker payroll data
            directly with the enterprise payroll systems counties already run
            on — turning a manual, error-prone handoff into an automated,
            audit-ready pipeline.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {payrollSystems.map((system) => (
              <span
                key={system}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {system}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {payrollIntegration.map((item) => (
              <div key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-12 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark cursor-pointer"
          >
            Talk to Us About This Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
