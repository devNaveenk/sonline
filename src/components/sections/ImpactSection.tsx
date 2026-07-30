import { StatGrid } from "@/components/ui/StatGrid";
import { stats } from "@/lib/content";

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
      </div>
    </section>
  );
}
