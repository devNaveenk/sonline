"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqCategory } from "@/lib/faqContent";

interface FaqAccordionProps {
  categories: FaqCategory[];
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(
    `${categories[0]?.category}-0`
  );

  return (
    <div className="space-y-12">
      {categories.map((group) => (
        <div key={group.category}>
          <h2 className="text-sm font-bold tracking-widest text-primary">
            {group.category.toUpperCase()}
          </h2>
          <div className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
            {group.items.map((item, index) => {
              const key = `${group.category}-${index}`;
              const isOpen = openKey === key;
              return (
                <div key={key}>
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted-bg"
                  >
                    <span className="text-base font-semibold text-ink">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
