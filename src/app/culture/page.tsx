import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cultureValues, teamMembers } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Culture @ Sonline",
  description:
    "The values we hire for and the team behind Sonline's digital transformation work.",
};

export default function CulturePage() {
  return (
    <>
      <section className="bg-muted-bg py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">CULTURE @ SONLINE</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            We believe in transformational relationships and always strive
            for customer delight.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cultureValues.map((value) => (
            <div
              key={value.title}
              className="overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative aspect-[16/10] bg-muted-bg">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted-bg py-14 lg:py-20">
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

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <p className="text-xs font-semibold tracking-widest text-primary">OUR TEAM</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          The people behind every transformation.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-muted-bg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{member.name}</p>
              <p className="text-xs text-primary">{member.role}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center">
          <h2 className="max-w-xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            Schedule your free consultation.
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark cursor-pointer"
          >
            Talk to Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
