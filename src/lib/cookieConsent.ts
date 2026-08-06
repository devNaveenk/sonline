export const COOKIE_CONSENT_KEY = "sonline-cookie-consent";
export const COOKIE_CONSENT_EVENT = "sonline:cookie-consent-resolved";

export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  return !!window.localStorage.getItem(COOKIE_CONSENT_KEY);
}
