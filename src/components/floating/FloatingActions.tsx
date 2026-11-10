"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import ChatPanel from "@/components/floating/ChatPanel";
import NewsletterModal from "@/components/floating/NewsletterModal";
import { scrollToTop } from "@/lib/scroll";
import { WELCOME_OFFER } from "@/lib/site";
import { hideWelcomeOffer, offerDismissed, subscribeOffer } from "@/lib/welcome-offer";

/** Floating buttons: chat and the welcome-offer (newsletter) pill bottom-left, back to top bottom-right. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hidden on the server and until the browser says it hasn't been dismissed.
  const offerVisible = !useSyncExternalStore(subscribeOffer, offerDismissed, () => true);
  const dismissOffer = () => hideWelcomeOffer(WELCOME_OFFER.hideForDays);

  const closeNewsletter = useCallback(() => setNewsletterOpen(false), []);
  const closeChat = useCallback(() => setChatOpen(false), []);

  return (
    <>
      <div className="fab-stack fab-stack-left">
        <button
          type="button"
          className={`fab fab-chat${chatOpen ? " is-active" : ""}`}
          onClick={() => setChatOpen((o) => !o)}
          aria-label={chatOpen ? "Close chat" : "Chat with us"}
          aria-expanded={chatOpen}
          aria-haspopup="dialog"
        >
          {chatOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path
                d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16H6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="9.5" r="1.2" fill="currentColor" />
              <circle cx="12" cy="9.5" r="1.2" fill="currentColor" />
              <circle cx="15.5" cy="9.5" r="1.2" fill="currentColor" />
            </svg>
          )}
          <span className="fab-tip">{chatOpen ? "Close chat" : "Chat with us"}</span>
        </button>
        {offerVisible ? (
          <div className="fab-offer">
            <button
              type="button"
              className="fab-offer-pill"
              onClick={() => {
                setChatOpen(false);
                setNewsletterOpen(true);
              }}
              aria-haspopup="dialog"
            >
              <span className="fab-offer-dot" aria-hidden="true" />
              {WELCOME_OFFER.label}
            </button>
            <button
              type="button"
              className="fab-offer-close"
              aria-label="Dismiss welcome offer"
              onClick={dismissOffer}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
      <div className="fab-stack fab-stack-right">
        <button
          type="button"
          className={`fab fab-top${showTop ? " is-visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M12 19V5M5 12l7-7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="fab-tip">Back to top</span>
        </button>
      </div>

      <ChatPanel open={chatOpen} onClose={closeChat} raised={offerVisible} />
      <NewsletterModal open={newsletterOpen} onClose={closeNewsletter} />
    </>
  );
}
