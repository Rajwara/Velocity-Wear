"use client";

import { useSyncExternalStore } from "react";
import { formatPrice } from "@/components/cart/CartProvider";
import { LAST_ORDER_KEY, type OrderResponse } from "@/lib/checkout";

export type ThankYouType = "order" | "newsletter" | "contact" | "general";

const noop = () => () => {};

function readOrder(orderNumber?: string): string | null {
  try {
    const raw = window.sessionStorage.getItem(LAST_ORDER_KEY);
    if (!raw) return null;
    const order = JSON.parse(raw) as OrderResponse;
    return !orderNumber || order.orderNumber === orderNumber ? raw : null;
  } catch {
    return null;
  }
}

const COPY: Record<ThankYouType, { eyebrow: string; title: string; text: string }> = {
  order: {
    eyebrow: "Order confirmed",
    title: "Thank you for your order!",
    text: "We've received your order and we're getting it ready.",
  },
  newsletter: {
    eyebrow: "Welcome to the club",
    title: "You're on the list!",
    text: "Thanks for subscribing. Look out for your welcome offer in your inbox, along with new drops, training tips and member-only deals.",
  },
  contact: {
    eyebrow: "Message sent",
    title: "Thanks for getting in touch!",
    text: "We've received your message and will reply within one working day.",
  },
  general: {
    eyebrow: "All done",
    title: "Thank you!",
    text: "We've received your submission.",
  },
};

const ORDER_STEPS = [
  {
    title: "Confirmation",
    text: "We'll call or email you to confirm your order and delivery address.",
  },
  { title: "Packed & shipped", text: "Your order is packed and handed to our courier." },
  { title: "Pay on delivery", text: "Pay the courier in cash when your order arrives." },
];

/** Content of the /thank-you page. */
export default function ThankYouView({
  type,
  orderNumber,
}: {
  type: ThankYouType;
  orderNumber?: string;
}) {
  // The order summary is handed over from checkout in sessionStorage (same tab only).
  const raw = useSyncExternalStore(
    noop,
    () => (type === "order" ? readOrder(orderNumber) : null),
    () => null,
  );
  const order = raw ? (JSON.parse(raw) as OrderResponse) : null;
  const copy = COPY[type];

  return (
    <div className="ty">
      <div className="ty-card">
        <div className="ty-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="38" height="38">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ty-eyebrow">{copy.eyebrow}</div>
        <h1 className="ty-title">
          {type === "order" && order ? `Thank you, ${order.firstName}!` : copy.title}
        </h1>
        <p className="ty-text">
          {copy.text}
          {type === "order" && order ? (
            <>
              {" "}
              A confirmation will be sent to <strong>{order.email}</strong>.
            </>
          ) : null}
        </p>

        {type === "order" && orderNumber ? (
          <div className="ty-order-number">
            <span>Order number</span>
            <strong>{orderNumber}</strong>
          </div>
        ) : null}

        {type === "order" && order ? (
          <div className="ty-summary">
            <ul className="co-summary-items" role="list">
              {order.items.map((item) => (
                <li key={item.slug}>
                  <span className="co-summary-thumb">
                    <img src={item.image} alt="" />
                    <span className="co-summary-qty">{item.quantity}</span>
                  </span>
                  <span className="co-summary-name">{item.name}</span>
                  <span>{formatPrice(item.lineTotal)}</span>
                </li>
              ))}
            </ul>
            <dl className="cartpage-lines">
              <div>
                <dt>Subtotal</dt>
                <dd>{formatPrice(order.subtotal)}</dd>
              </div>
              <div>
                <dt>{order.shipping.label}</dt>
                <dd>{order.shipping.price ? formatPrice(order.shipping.price) : "Free"}</dd>
              </div>
              <div>
                <dt>Payment</dt>
                <dd>{order.payment}</dd>
              </div>
            </dl>
            <div className="cartpage-grand">
              <span>Total to pay</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        ) : null}

        {type === "order" ? (
          <ol className="ty-steps">
            {ORDER_STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="ty-step-num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}

        <div className="ty-actions">
          <a href="/shop" className="cart-primary">
            Continue shopping
          </a>
          <a href={type === "contact" ? "/faq" : "/blog"} className="cart-secondary">
            {type === "contact" ? "Read our FAQ" : "Read our blog"}
          </a>
        </div>
      </div>
    </div>
  );
}
