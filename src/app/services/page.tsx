import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceDetails } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Our Services | Sonline",
  description:
    "Comprehensive digital transformation, AI & data analytics, IT consulting, and digital marketing services from Sonline.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">OUR SERVICES</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Comprehensive digital solutions for your business growth.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sonline offers a comprehensive range of services designed to help
            organizations achieve transformation and measurable outcomes. Our
            expertise spans across digital transformation, AI/ML driven
            solutions, process optimization, and tailored platforms that
            address your unique challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="space-y-12">
          {serviceDetails.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted-bg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-base font-medium text-primary">{service.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-8 text-white lg:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready to explore how our services can move you forward?
          </h2>
          <Link
            href="/contact"
            className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark cursor-pointer"
          >
            Talk to Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
