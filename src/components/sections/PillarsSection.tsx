import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { pillars } from "@/lib/content";

export function PillarsSection() {
  return (
    <section id="pillars" className="bg-muted-bg py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="OUR CORE PILLARS OF TRANSFORMATION"
          title="Experience. Integrate. Visualize. Act."
        />
        <IconCardGrid items={pillars} variant="shadow" columns={4} />
      </div>
    </section>
  );
}
