import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="bg-muted-bg py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mx-auto text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Discover Client Reviews
        </h2>
      </div>
      <div className="mt-6">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
