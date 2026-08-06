import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-[38px] text-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image
                src="/sonline_logo.png"
                alt="Sonline"
                width={140}
                height={49}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {companyInfo.aboutParagraph}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold tracking-widest text-white">
                QUICK LINKS
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/#work" className="hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="hover:text-white">
                    Culture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-white">
                MORE
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/insights" className="hover:text-white">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[38px] flex flex-col gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sonline LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
