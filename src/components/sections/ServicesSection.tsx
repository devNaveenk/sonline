import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <SectionHeading
        eyebrow="OUR SERVICES"
        title="Every service built to move you forward."
      />
      <IconCardGrid items={services} variant="border" columns={4} />
    </section>
  );
}
