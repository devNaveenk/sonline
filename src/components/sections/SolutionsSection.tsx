import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/lib/content";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-muted-bg py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="OUR SOLUTIONS"
          title="Flagship platforms, built to scale."
          description="Our flagship platforms, Edukadu and BallotDA, leverage cutting-edge AI/ML driven solutions to empower organizations, driving efficiency, innovation, and enhanced decision-making in their respective domains."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition-colors hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary hover:text-primary-dark cursor-pointer"
              >
                LEARN MORE
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
