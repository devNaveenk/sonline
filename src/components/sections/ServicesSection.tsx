import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <Link
        href="/services"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark cursor-pointer"
      >
        View all services
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
