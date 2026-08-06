import { ClientsMarquee } from "@/components/ClientsMarquee";
import { clientLogos } from "@/lib/content";

export function ClientsSection() {
  return (
    <section className="border-y border-border bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          <span className="text-ink">Your Success, </span>
          <span className="text-primary">Our Clients</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Delivering excellence to counties, schools, and organizations nationwide.
        </p>
      </div>
      <div className="mt-8">
        <ClientsMarquee clients={clientLogos} />
      </div>
    </section>
  );
}
