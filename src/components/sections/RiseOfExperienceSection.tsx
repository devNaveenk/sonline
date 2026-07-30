import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceStats } from "@/lib/content";

export function RiseOfExperienceSection() {
  return (
    <section className="bg-muted-bg py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="RISE OF EXPERIENCE"
          title="Transform your organization and customers' experience."
          description="Customer demand is growing exponentially. Being relevant is essential for growth — create meaningful and impactful customer experiences that directly answer human needs."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {experienceStats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="text-4xl font-extrabold text-primary">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
