import type { Metadata } from "next";
import { companyInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy | Sonline",
  description: "How Sonline uses cookies across sonline.us.",
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
      <p className="text-xs font-semibold tracking-widest text-primary">LEGAL</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="text-lg font-semibold text-ink">What are cookies?</h2>
          <p className="mt-2">
            Cookies are small text files placed on your device when you visit
            a website. They help the site remember your preferences and
            understand how visitors use it.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">How we use cookies</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-ink">Essential cookies</span>{" "}
              — required for the site to function correctly, such as
              remembering your cookie preference.
            </li>
            <li>
              <span className="font-semibold text-ink">Analytics cookies</span>{" "}
              — help us understand how visitors interact with sonline.us so we
              can improve the experience.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">Your choices</h2>
          <p className="mt-2">
            You can accept or decline non-essential cookies from the banner
            shown on your first visit. You can also clear your browser&apos;s
            cookies at any time to reset your preference.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">Contact us</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a
              href={`mailto:${companyInfo.email}`}
              className="font-semibold text-primary hover:text-primary-dark"
            >
              {companyInfo.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
