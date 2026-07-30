"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label="Sonline home">
          <Image
            src="/sonline_logo.png"
            alt="Sonline — where insight meets innovation"
            width={160}
            height={56}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-10 items-center justify-center rounded-lg bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-black cursor-pointer sm:inline-flex"
          >
            Talk to Us
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink transition-colors hover:bg-muted-bg cursor-pointer lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-white px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-muted-bg"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-black cursor-pointer sm:hidden"
            >
              Talk to Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
