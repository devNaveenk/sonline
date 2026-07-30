import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/content";

export function Header() {
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
        <Link
          href="/contact"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-black cursor-pointer"
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
}
