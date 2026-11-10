"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { formatPrice, useCart } from "@/components/cart/CartProvider";
import {
  COUNTRIES,
  PAYMENT_METHODS,
  REQUIRED_FIELDS,
  SHIPPING_OPTIONS,
  validateCustomer,
  type CustomerDetails,
  type CustomerField,
  type OrderRequest,
  type OrderResponse,
  type PaymentMethod,
  type ShippingOption,
} from "@/lib/checkout";

const EMPTY: CustomerDetails = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  region: "",
  postcode: "",
  country: "United States",
};

type Errors = Partial<Record<CustomerField, string>>;

/** Checkout page: contact, delivery, shipping method, payment (cash on delivery) and summary. */
export default function CheckoutView() {
  const { items, subtotal, loaded, clear } = useCart();
  const [values, setValues] = useState<CustomerDetails>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [shippingId, setShippingId] = useState<ShippingOption["id"]>("standard");
  const [paymentId, setPaymentId] = useState<PaymentMethod["id"]>("cod");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [order, setOrder] = useState<OrderResponse | null>(null);

  const shipping = SHIPPING_OPTIONS.find((o) => o.id === shippingId) ?? SHIPPING_OPTIONS[0];
  const total = subtotal + shipping.price;

  const set = (field: CustomerField, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const focusFirstError = (found: Errors) => {
    const first = (Object.keys(EMPTY) as CustomerField[]).find((f) => found[f]);
    if (first) document.getElementById(`co-${first}`)?.focus();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setFormError("");
    const found = validateCustomer(values);
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirstError(found);
      return;
    }
    setSubmitting(true);
    try {
      const payload: OrderRequest = {
        customer: values,
        shipping: shippingId,
        payment: paymentId,
        items: items.map((i) => ({ slug: i.slug, quantity: i.quantity })),
      };
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) {
          setErrors(data.fields);
          focusFirstError(data.fields);
        }
        setFormError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setOrder(data as OrderResponse);
      clear();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setFormError("We couldn't reach the store. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (order) return <Confirmation order={order} />;

  if (!loaded) return <div className="cartpage-loading" aria-busy="true" />;

  if (!items.length) {
    return (
      <div className="cartpage-empty">
        <div className="cartpage-empty-title">Your cart is empty</div>
        <p>Add something to your cart before checking out.</p>
        <a href="/shop" className="cart-primary">
          Go to shop
        </a>
      </div>
    );
  }

  const input = (
    field: CustomerField,
    label: string,
    props: InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div className={`co-field${errors[field] ? " has-error" : ""}`}>
      <label htmlFor={`co-${field}`}>
        {label}
        {REQUIRED_FIELDS.includes(field) ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={`co-${field}`}
        name={field}
        value={values[field]}
        maxLength={200}
        onChange={(e) => set(field, e.target.value)}
        aria-invalid={Boolean(errors[field])}
        aria-describedby={errors[field] ? `co-${field}-error` : undefined}
        {...props}
      />
      {errors[field] ? (
        <div id={`co-${field}-error`} className="co-error">
          {errors[field]}
        </div>
      ) : null}
    </div>
  );

  return (
    <form className="cartpage-grid checkout-grid" data-cart-form="" onSubmit={onSubmit} noValidate>
      <div className="checkout-main">
        <ol className="checkout-steps" aria-label="Checkout progress">
          <li className="is-done">
            <a href="/cart">Cart</a>
          </li>
          <li className="is-current" aria-current="step">
            Details
          </li>
          <li>Confirmation</li>
        </ol>

        <section className="cartpage-panel co-section">
          <h2 className="co-title">
            <span>1</span> Contact information
          </h2>
          <div className="co-row">
            {input("email", "Email", {
              type: "email",
              autoComplete: "email",
              placeholder: "you@example.com",
            })}
            {input("phone", "Phone", {
              type: "tel",
              autoComplete: "tel",
              placeholder: "The courier will call before delivery",
            })}
          </div>
        </section>

        <section className="cartpage-panel co-section">
          <h2 className="co-title">
            <span>2</span> Delivery address
          </h2>
          <div className="co-row">
            {input("firstName", "First name", { autoComplete: "given-name" })}
            {input("lastName", "Last name", { autoComplete: "family-name" })}
          </div>
          {input("address", "Address", {
            autoComplete: "address-line1",
            placeholder: "Street and house number",
          })}
          {input("apartment", "Apartment, suite, etc. (optional)", {
            autoComplete: "address-line2",
          })}
          <div className="co-row co-row-3">
            {input("city", "City", { autoComplete: "address-level2" })}
            {input("region", "State / Region", { autoComplete: "address-level1" })}
            {input("postcode", "Postcode / ZIP", { autoComplete: "postal-code" })}
          </div>
          <div className={`co-field${errors.country ? " has-error" : ""}`}>
            <label htmlFor="co-country">
              Country<span aria-hidden="true"> *</span>
            </label>
            <select
              id="co-country"
              name="country"
              autoComplete="country-name"
              value={values.country}
              onChange={(e) => set("country", e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="cartpage-panel co-section">
          <h2 className="co-title">
            <span>3</span> Shipping method
          </h2>
          <div className="co-options" role="radiogroup" aria-label="Shipping method">
            {SHIPPING_OPTIONS.map((o) => (
              <label key={o.id} className={`co-option${shippingId === o.id ? " is-selected" : ""}`}>
                <input
                  type="radio"
                  name="shipping"
                  value={o.id}
                  checked={shippingId === o.id}
                  onChange={() => setShippingId(o.id)}
                />
                <span className="co-radio" aria-hidden="true" />
                <span className="co-option-text">
                  <strong>{o.label}</strong>
                  <span>{o.detail}</span>
                </span>
                <span className="co-option-price">{o.price ? formatPrice(o.price) : "Free"}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="cartpage-panel co-section">
          <h2 className="co-title">
            <span>4</span> Payment
          </h2>
          <div className="co-options" role="radiogroup" aria-label="Payment method">
            {PAYMENT_METHODS.map((m) => (
              <label
                key={m.id}
                className={`co-option${paymentId === m.id ? " is-selected" : ""}${m.enabled ? "" : " is-disabled"}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={m.id}
                  checked={paymentId === m.id}
                  disabled={!m.enabled}
                  onChange={() => setPaymentId(m.id)}
                />
                <span className="co-radio" aria-hidden="true" />
                <span className="co-option-text">
                  <strong>{m.label}</strong>
                  <span>{m.detail}</span>
                </span>
                {m.enabled ? null : <span className="co-soon">Coming soon</span>}
              </label>
            ))}
          </div>
          {paymentId === "cod" ? (
            <div className="co-notice" role="note">
              Pay <strong>{formatPrice(total)}</strong> in cash to the courier when your order
              arrives. Please have the exact amount ready.
            </div>
          ) : null}
        </section>

        {formError ? (
          <div className="co-form-error" role="alert">
            {formError}
          </div>
        ) : null}

        <div className="co-actions">
          <a href="/cart" className="cartpage-back">
            ← Back to cart
          </a>
          <button type="submit" className="cart-primary co-submit" disabled={submitting}>
            {submitting ? "Placing order…" : `Place order · ${formatPrice(total)}`}
          </button>
        </div>
      </div>

      <aside className="cartpage-summary checkout-summary" aria-label="Order summary">
        <div className="cartpage-panel-title">Order summary</div>
        <ul className="co-summary-items" role="list">
          {items.map(({ product, quantity, lineTotal }) => (
            <li key={product.slug}>
              <span className="co-summary-thumb">
                <img src={product.image} alt="" />
                <span className="co-summary-qty">{quantity}</span>
              </span>
              <span className="co-summary-name">{product.name}</span>
              <span>{formatPrice(lineTotal)}</span>
            </li>
          ))}
        </ul>
        <dl className="cartpage-lines">
          <div>
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>{shipping.price ? formatPrice(shipping.price) : "Free"}</dd>
          </div>
          <div>
            <dt>Payment</dt>
            <dd>{PAYMENT_METHODS.find((m) => m.id === paymentId)?.label}</dd>
          </div>
        </dl>
        <div className="cartpage-grand">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        <a href="/cart" className="cartpage-link co-edit">
          Edit cart
        </a>
      </aside>
    </form>
  );
}

function Confirmation({ order }: { order: OrderResponse }) {
  return (
    <div className="co-confirm">
      <div className="co-confirm-badge" aria-hidden="true">
        ✓
      </div>
      <h2 className="cartpage-empty-title">Thank you, {order.firstName}!</h2>
      <p>
        Your order <strong>{order.orderNumber}</strong> has been placed. We&apos;ll contact you at{" "}
        <strong>{order.email}</strong> with delivery updates.
      </p>
      <div className="co-notice" role="note">
        Payment: <strong>{order.payment}</strong>. Please have{" "}
        <strong>{formatPrice(order.total)}</strong> ready in cash when your order arrives.
      </div>
      <div className="cartpage-summary co-confirm-summary">
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
        </dl>
        <div className="cartpage-grand">
          <span>Total to pay on delivery</span>
          <span>{formatPrice(order.total)}</span>
        </div>
      </div>
      <a href="/shop" className="cart-primary">
        Continue shopping
      </a>
    </div>
  );
}
