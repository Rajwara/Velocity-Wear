"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE_CONTACT } from "@/lib/site";

type Message = { from: "bot" | "user"; text: string };

type Topic = { id: string; question: string; keywords: string[]; answer: string };

/** Instant answers. Keep them in line with the shipping and returns policies. */
const TOPICS: Topic[] = [
  {
    id: "shipping",
    question: "How long does delivery take?",
    keywords: [
      "deliver",
      "delivery",
      "delivered",
      "shipping",
      "ship",
      "how long",
      "arrive",
      "express",
    ],
    answer:
      "Standard delivery is free and takes 3–5 working days. Need it sooner? Choose Express at checkout ($14.99, 1–2 working days).",
  },
  {
    id: "cod",
    question: "Can I pay cash on delivery?",
    keywords: ["cash", "cod", "pay", "payment", "paying", "credit card", "debit card", "paypal"],
    answer:
      "Yes! Cash on delivery is available on every order. Just have the exact amount ready when the courier arrives. Card and PayPal payments are coming soon.",
  },
  {
    id: "returns",
    question: "What is your returns policy?",
    keywords: ["return", "returns", "refund", "refunds", "exchange", "exchanges", "wrong size"],
    answer:
      "You can return or exchange unworn items with tags attached within 30 days. See our Return & Refund Policy page for the full details.",
  },
  {
    id: "sizing",
    question: "Which size should I choose?",
    keywords: ["size", "sizes", "sizing", "fit", "fits", "small", "large", "medium"],
    answer:
      "Our kit is true to size. For a compression or second-skin fit (leggings, sports bras), choose your usual size; if you're between sizes, size up. Send us your height and weight and we'll recommend a size.",
  },
  {
    id: "track",
    question: "Where is my order?",
    keywords: ["track", "tracking", "my order", "where is", "status", "vw"],
    answer:
      "We'll contact you by email or phone with delivery updates. Send us your order number (it starts with VW-) and we'll check the status for you.",
  },
];

const GREETING =
  "Hi! 👋 Welcome to Velocity Wear. Pick a question below or type your own — we're happy to help.";
const FALLBACK =
  "Thanks for your message! A team member can help with that — tap one of the buttons below to reach us directly.";

/** Support chat with instant answers to common questions and links to contact the team. */
export default function ChatPanel({
  open,
  onClose,
  raised = false,
}: {
  open: boolean;
  onClose: () => void;
  /** true when the welcome-offer pill sits under the chat button */
  raised?: boolean;
}) {
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: GREETING }]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const asked = new Set(messages.filter((m) => m.from === "user").map((m) => m.text.toLowerCase()));

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const reply = (userText: string, answer: string) => {
    setMessages((m) => [...m, { from: "user", text: userText }]);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: answer }]);
    }, 650);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    const lower = text.toLowerCase();
    const topic = TOPICS.find((t) =>
      t.keywords.some((k) =>
        new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(lower),
      ),
    );
    reply(text, topic ? topic.answer : FALLBACK);
  };

  const whatsappHref = SITE_CONTACT.whatsapp
    ? `https://wa.me/${SITE_CONTACT.whatsapp}?text=${encodeURIComponent("Hi Velocity Wear! I have a question:")}`
    : "";

  return (
    <div
      className={`chat-panel${open ? " is-open" : ""}${raised ? " is-raised" : ""}`}
      role="dialog"
      aria-label="Chat with Velocity Wear"
      aria-hidden={!open}
      inert={!open}
    >
      <div className="chat-head">
        <img src="/images/brand/logo-light.svg" alt="Velocity Wear" className="chat-logo" />
        <div className="chat-head-text">
          <div className="chat-head-title">Support</div>
          <div className="chat-head-status">
            <span className="chat-dot" aria-hidden="true" /> We usually reply within a few hours
          </div>
        </div>
        <button type="button" className="chat-close" onClick={onClose}>
          <span aria-hidden="true">×</span>
          <span className="filter-sr">Close chat</span>
        </button>
      </div>

      <div className="chat-messages" ref={listRef} data-lenis-prevent="" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`chat-msg is-${m.from}`}>
            {m.text}
          </div>
        ))}
        {typing ? (
          <div className="chat-msg is-bot chat-typing" aria-label="Typing">
            <span />
            <span />
            <span />
          </div>
        ) : null}
        <div className="chat-quick">
          {TOPICS.filter((t) => !asked.has(t.question.toLowerCase())).map((t) => (
            <button key={t.id} type="button" onClick={() => reply(t.question, t.answer)}>
              {t.question}
            </button>
          ))}
        </div>
      </div>

      <div className="chat-contact">
        {whatsappHref ? (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="chat-wa">
            Chat on WhatsApp
          </a>
        ) : null}
        <a href={`mailto:${SITE_CONTACT.email}`} className="chat-mail">
          Email us
        </a>
      </div>

      <form className="chat-form" onSubmit={onSubmit} data-cart-form="">
        <label htmlFor="chat-input" className="filter-sr">
          Type your message
        </label>
        <input
          ref={inputRef}
          id="chat-input"
          placeholder="Type your question…"
          autoComplete="off"
          maxLength={500}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="submit" aria-label="Send message" disabled={!draft.trim()}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M3 11.5 21 3l-8.5 18-2.2-7.3L3 11.5Z" fill="currentColor" />
          </svg>
        </button>
      </form>
    </div>
  );
}
