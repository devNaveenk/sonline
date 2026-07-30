import { StatGrid } from "@/components/ui/StatGrid";
import { stats, testimonials } from "@/lib/content";

export function ImpactSection() {
  return (
    <section id="results" className="bg-dark-surface py-14 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold tracking-widest text-primary">
          OUR IMPACT
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          A proven legacy of measurable results.
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Sonline has successfully transformed over 50 organizations
          worldwide across education, government, and corporate enterprises.
          We are committed to fostering sustainable growth by creating
          long-term value — helping you stay agile, competitive, and prepared
          for a dynamic marketplace.
        </p>

        <StatGrid stats={stats} tone="dark" size="lg" />

        <p className="mt-12 text-xs font-semibold tracking-widest text-primary">
          CLIENT REVIEWS
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-dark-surface-2 p-7">
              <blockquote className="text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
