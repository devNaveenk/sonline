"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "@/lib/cookieConsent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen post-mount to avoid a server/client
    // render mismatch, so this is the correct (not cascading) use of an effect.
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-6 left-6 z-40 w-[22rem] max-w-[calc(100vw-3rem)] rounded-2xl border border-white/10 bg-ink p-5 text-white shadow-2xl"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
        <Cookie className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
      </div>
      <p className="mt-3 text-sm font-semibold text-white">Cookie Preferences</p>
      <p className="mt-1.5 text-sm leading-relaxed text-white/70">
        We use cookies to improve your experience and analyze site traffic.
        See our{" "}
        <Link href="/cookies" className="font-semibold text-white underline hover:text-primary">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => handleChoice("declined")}
          className="h-9 flex-1 rounded-lg border border-white/20 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="h-9 flex-1 rounded-lg bg-primary text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark cursor-pointer"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
