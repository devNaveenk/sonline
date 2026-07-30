import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { whyChooseUs } from "@/lib/content";

export function WhySonlineSection() {
  return (
    <section id="why-sonline" className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <SectionHeading
        eyebrow="WHY CHOOSE US?"
        title="Built to transform. Trusted to deliver."
      />
      <IconCardGrid items={whyChooseUs} variant="border" columns={4} />
    </section>
  );
}
