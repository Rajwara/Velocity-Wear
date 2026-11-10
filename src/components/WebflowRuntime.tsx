"use client";

import { useEffect } from "react";
import { BUNDLES, type Bundle } from "@/components/webflow-config";
import { hideWelcomeOffer, SUBSCRIBED_HIDE_DAYS } from "@/lib/welcome-offer";

export type LenisInstance = {
  on(event: string, cb: () => void): void;
  raf(time: number): void;
  scrollTo(target: number | string | HTMLElement, options?: Record<string, unknown>): void;
  stop(): void;
  start(): void;
};
type Gsap = {
  registerPlugin(...plugins: unknown[]): void;
  ticker: { add(cb: (time: number) => void): void; lagSmoothing(v: number): void };
};

declare global {
  interface Window {
    __webflowRuntimeLoaded?: boolean;
    gsap?: Gsap;
    ScrollTrigger?: { update(): void };
    Lenis?: new (options: Record<string, unknown>) => LenisInstance;
    /** the running smooth-scroll instance (see src/lib/scroll.ts) */
    __lenis?: LenisInstance;
  }
}

/**
 * In the export these load as blocking scripts, so they are ready before Webflow
 * initialises on DOMContentLoaded. Here the page has already loaded, so Webflow
 * starts as soon as its script runs: load the animation libraries first.
 */
const ANIMATION_LIBS = [
  "/vendor/lenis.min.js",
  "/vendor/gsap.min.js",
  "/vendor/ScrollTrigger.min.js",
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function showMessage(text: string) {
  document.querySelector(".clone-message")?.remove();
  const el = document.createElement("div");
  el.className = "clone-message";
  el.setAttribute("role", "status");
  el.textContent = text;
  document.body.append(el);
  setTimeout(() => el.remove(), 5000);
}

/**
 * Sends one of the site's Webflow-built forms to an API route, then goes to the
 * thank-you page. On failure Webflow's own error block is shown.
 */
async function submitForm(
  form: HTMLFormElement,
  endpoint: string,
  payload: Record<string, unknown>,
  thankYouType: string,
) {
  const wrapper = form.closest(".w-form");
  const fail = wrapper?.querySelector<HTMLElement>(".w-form-fail");
  const submit = form.querySelector<HTMLInputElement | HTMLButtonElement>("[type=submit]");
  if (fail) fail.style.display = "none";
  if (submit) submit.disabled = true;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error();
    if (thankYouType === "newsletter") hideWelcomeOffer(SUBSCRIBED_HIDE_DAYS);
    window.location.assign(`/thank-you?type=${thankYouType}`);
  } catch {
    if (fail) fail.style.display = "block";
    if (submit) submit.disabled = false;
  }
}

/**
 * Handles the forms that came from the Webflow export. Newsletter and contact forms are
 * sent to /api/newsletter and /api/contact; the account forms (log in, sign up, reset
 * password, protected page) still need an account service, so they show a notice.
 */
function installDemoAdapters() {
  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLElement;
      // Cart and checkout forms are handled by the app (src/components/cart).
      if (form.closest("[data-cart-form]")) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const f = form as HTMLFormElement;
      if (!f.checkValidity()) {
        f.reportValidity();
        return;
      }
      const data = new FormData(f);
      const get = (name: string) => String(data.get(name) ?? "");
      if (f.matches('[data-name="Newsletter"]')) {
        void submitForm(
          f,
          "/api/newsletter",
          { email: get("email"), source: "footer" },
          "newsletter",
        );
        return;
      }
      if (f.matches('[data-name="Contact Us"]')) {
        void submitForm(
          f,
          "/api/contact",
          {
            firstName: get("First-Name"),
            lastName: get("Last-Name"),
            email: get("Email"),
            subject: get("Subject"),
            message: get("Message"),
          },
          "contact",
        );
        return;
      }
      showMessage("Accounts aren't set up yet: connect an account service to enable this form.");
    },
    true,
  );
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as HTMLElement).closest("a");
      if (a && /\/paypal-checkout(?:[/?#]|$)/.test(a.getAttribute("href") || "")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        showMessage("PayPal checkout requires a connected payment service.");
      }
    },
    true,
  );
}

function initSmoothScroll() {
  const { Lenis, gsap, ScrollTrigger } = window;
  if (!Lenis || !gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });
  window.__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/**
 * Loads the original Webflow runtime (interactions, navbar, tabs, sliders…),
 * GSAP/ScrollTrigger and Lenis smooth scrolling once the page has hydrated.
 *
 * Internal links are plain <a> tags, so every navigation is a full page load
 * and the runtime always initialises against a fresh document.
 */
export default function WebflowRuntime({ pageId, bundle }: { pageId: string; bundle: Bundle }) {
  useEffect(() => {
    if (window.__webflowRuntimeLoaded) return;
    window.__webflowRuntimeLoaded = true;
    document.documentElement.setAttribute("data-wf-page", pageId);
    installDemoAdapters();
    (async () => {
      for (const src of ANIMATION_LIBS) await loadScript(src);
      initSmoothScroll();
      for (const src of BUNDLES[bundle]) {
        if (!ANIMATION_LIBS.includes(src)) await loadScript(src);
      }
    })().catch((err) => console.error(err));
  }, [pageId, bundle]);
  return null;
}
