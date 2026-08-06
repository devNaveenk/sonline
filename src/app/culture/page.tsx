import type { Metadata } from "next";
import Image from "next/image";
import { TeamMarquee } from "@/components/TeamMarquee";
import { cultureValues, teamMembers } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Culture @ Sonline",
  description:
    "The values we hire for and the team behind Sonline's digital transformation work.",
};

export default function CulturePage() {
  return (
    <>
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">CULTURE @ SONLINE</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            We believe in transformational relationships and always strive
            for customer delight.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cultureValues.map((value) => (
            <div
              key={value.title}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted-bg">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">
            DEVELOPMENT LIFECYCLE
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Partnering with you from ideation to delivery, and beyond.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Sonline works with customers closely throughout the development
            life cycle from the ideation process all the way to successful
            delivery and beyond. We partner with your resources to leverage
            what you already have, whether it&apos;s infrastructure, human
            capital, or application interfaces. Our CREATE framework helps
            organizations define, plan, develop, and succeed in their
            transformation projects, saving significant human capital and
            providing an opportunity to critically evaluate projects prior to
            spending budget dollars.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">OUR TEAM</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            The people behind every transformation.
          </h2>
        </div>
        <div className="mt-8">
          <TeamMarquee members={teamMembers} />
        </div>
      </section>
    </>
  );
}
