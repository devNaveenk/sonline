import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionDetails, createFramework } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Our Solutions | Sonline",
  description:
    "Sonline's flagship platforms — Edukadu, BallotDA, LGA Search, and OMS Flow plus our CREATE transformation framework.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">OUR APPROACH</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            The CREATE Framework
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sonline&apos;s team understands the challenges businesses face
            when navigating complex ecosystems of applications and systems.
            Our innovative CREATE framework is a proven methodology designed
            to guide organizations through critical decision-making
            processes evaluating your current systems, identifying
            redundancies, and charting a path forward that optimizes
            resources and supports your long-term goals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {createFramework.map((step) => (
            <div
              key={step.step}
              className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          By aligning your applications with business objectives, our
          methodology ensures that your development resources focus on
          mission-critical projects, reducing operational silos and enabling
          cohesive reporting and performance tracking.
        </p>
      </section>

      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">
            OUR SOLUTIONS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Flagship platforms, built to scale.
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-7xl space-y-8 px-6">
          {solutionDetails.map((solution, index) => (
            <div
              key={solution.title}
              className={`group grid grid-cols-1 items-center gap-8 rounded-2xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl lg:grid-cols-2 lg:p-8 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted-bg">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <div className="inline-flex h-12 items-center rounded-lg bg-muted-bg px-3 transition-colors duration-300 group-hover:bg-primary/10">
                  <Image
                    src={solution.logo}
                    alt={`${solution.title} logo`}
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink transition-colors duration-300 group-hover:text-primary">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.body}
                </p>
                {solution.url && (
                  <a
                    href={solution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary hover:text-primary-dark cursor-pointer"
                  >
                    LEARN MORE
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-8 text-white lg:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready to see which solution fits your organization?
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
