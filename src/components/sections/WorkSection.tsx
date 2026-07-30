import { SectionHeading } from "@/components/ui/SectionHeading";
import { work } from "@/lib/content";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <SectionHeading
        eyebrow="OUR WORK"
        title="Transform to perform."
        description="Rapidly build and integrate products and businesses — visualize and act intelligently."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-border p-6 transition-colors hover:border-ink"
          >
            <h3 className="text-base font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            {item.systems && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.systems.map((system) => (
                  <span
                    key={system}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                  >
                    {system}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
