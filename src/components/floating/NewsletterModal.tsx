"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { lockScroll } from "@/lib/scroll";
import { hideWelcomeOffer, SUBSCRIBED_HIDE_DAYS } from "@/lib/welcome-offer";

/** Newsletter sign-up popup, opened from the floating envelope button. */
export default function NewsletterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    lockScroll("newsletter", open);
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 200);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      lockScroll("newsletter", false);
    };
  }, [open, onClose]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "popup" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
      hideWelcomeOffer(SUBSCRIBED_HIDE_DAYS);
      window.location.assign("/thank-you?type=newsletter");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`nl-layer${open ? " is-open" : ""}`} aria-hidden={!open}>
      <button
        type="button"
        className="nl-backdrop"
        aria-label="Close newsletter"
        tabIndex={-1}
        onClick={onClose}
      />
      <div
        className="nl-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nl-title"
        inert={!open}
      >
        <div className="nl-media" aria-hidden="true">
          <img src="/images/home/about-banner.webp" alt="" loading="lazy" />
        </div>
        <div className="nl-body">
          <button type="button" className="nl-close" onClick={onClose}>
            <span aria-hidden="true">×</span>
            <span className="filter-sr">Close</span>
          </button>
          <>
            <div className="nl-eyebrow">Welcome offer</div>
            <h2 id="nl-title" className="nl-title">
              Join the Velocity Club
            </h2>
            <p className="nl-text">
              Sign up to get your welcome offer by email, plus first access to new collections,
              training tips and member-only deals.
            </p>
            <form className="nl-form" onSubmit={onSubmit} noValidate data-cart-form="">
              <label htmlFor="nl-email" className="filter-sr">
                Email address
              </label>
              <input
                ref={inputRef}
                id="nl-email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                maxLength={200}
                aria-invalid={status === "error"}
                aria-describedby={status === "error" ? "nl-error" : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
              />
              <button
                type="submit"
                className="cart-primary nl-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            {status === "error" ? (
              <div id="nl-error" className="nl-error" role="alert">
                {message}
              </div>
            ) : null}
            <p className="nl-legal">
              By subscribing you agree to our <a href="/privacy-policy">Privacy Policy</a>. You can
              unsubscribe at any time.
            </p>
          </>
        </div>
      </div>
    </div>
  );
}
