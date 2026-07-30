import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { whyWorkWithUs } from "@/lib/content";

export function WhyWorkWithUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <SectionHeading
        eyebrow="WHY WORK WITH US?"
        title="Let's shape the future together."
        description="The world is evolving rapidly. Let us help you stay ahead of the curve — together, we'll design solutions that transform your vision into reality."
      />
      <IconCardGrid items={whyWorkWithUs} variant="border" columns={4} />
    </section>
  );
}
