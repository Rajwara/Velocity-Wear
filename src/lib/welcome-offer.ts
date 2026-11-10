/** Remembers (in localStorage) whether to hide the floating "welcome offer" pill. */

const OFFER_KEY = "velocity-wear-offer-dismissed";
const listeners = new Set<() => void>();

export function offerDismissed() {
  try {
    const until = Number(window.localStorage.getItem(OFFER_KEY));
    return Number.isFinite(until) && until > Date.now();
  } catch {
    return false;
  }
}

export function subscribeOffer(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

/** Hide the pill for a number of days (dismissed) or for good (already subscribed). */
export function hideWelcomeOffer(days: number) {
  try {
    window.localStorage.setItem(OFFER_KEY, String(Date.now() + days * 24 * 60 * 60 * 1000));
  } catch {
    // storage unavailable: hide for this page view only
  }
  listeners.forEach((cb) => cb());
}

/** Subscribers don't need the offer again. */
export const SUBSCRIBED_HIDE_DAYS = 3650;
