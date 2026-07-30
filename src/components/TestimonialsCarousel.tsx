import Image from "next/image";
import type { TestimonialItem } from "@/lib/types";

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[];
}

function TestimonialCard({ t }: { t: TestimonialItem }) {
  return (
    <figure className="relative flex h-[23rem] w-[22rem] shrink-0 flex-col rounded-2xl border border-border bg-white pb-7 pt-12 shadow-sm">
      <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
        <Image
          src={t.logo}
          alt={`${t.organization} logo`}
          width={64}
          height={64}
          className="h-full w-full object-contain p-1.5"
        />
      </div>
      <div className="flex flex-1 flex-col px-7">
        <blockquote className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">
          {t.quote}
        </blockquote>
        <figcaption className="mt-auto border-t border-border pt-4">
          <p className="text-sm font-semibold text-ink">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee-slow pause-on-hover gap-6 pb-2 pt-8">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 gap-6" aria-hidden={track === 1}>
            {testimonials.map((t) => (
              <TestimonialCard key={`${track}-${t.name}-${t.organization}`} t={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
