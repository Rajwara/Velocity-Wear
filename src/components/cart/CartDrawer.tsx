"use client";

import { useEffect, useRef } from "react";
import { formatPrice, useCart } from "@/components/cart/CartProvider";
import { getCategory, priceValue } from "@/data/products";

/** Slide-out cart shown when an item is added or the header cart icon is clicked. */
export default function CartDrawer() {
  const { items, count, subtotal, isOpen, close, setQuantity, remove } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <div className={`cart-layer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className="cart-backdrop"
        aria-label="Close cart"
        tabIndex={-1}
        onClick={close}
      />
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        inert={!isOpen}
      >
        <div className="cart-head">
          <div className="cart-title">
            Your Cart <span>({count})</span>
          </div>
          <button ref={closeRef} type="button" className="cart-close" onClick={close}>
            <span aria-hidden="true">×</span>
            <span className="filter-sr">Close cart</span>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-title">Your cart is empty</div>
            <p>Find your next favourite piece of kit.</p>
            <a href="/shop" className="cart-primary">
              Shop now
            </a>
          </div>
        ) : (
          <>
            <ul className="cart-items" role="list" data-lenis-prevent="">
              {items.map(({ product, quantity, lineTotal }) => (
                <li key={product.slug} className="cart-item">
                  <a href={`/product/${product.slug}`} className="cart-thumb">
                    <img src={product.image} alt={product.name} />
                  </a>
                  <div className="cart-info">
                    <a href={`/product/${product.slug}`} className="cart-name">
                      {product.name}
                    </a>
                    <div className="cart-meta">
                      {getCategory(product.category)?.name} · {formatPrice(priceValue(product))}
                    </div>
                    <div className="cart-row">
                      <div
                        className="cart-qty"
                        role="group"
                        aria-label={`Quantity of ${product.name}`}
                      >
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(product.slug, quantity - 1)}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min={1}
                          max={99}
                          inputMode="numeric"
                          aria-label="Quantity"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(product.slug, Math.max(1, Number(e.target.value) || 1))
                          }
                        />
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(product.slug, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="cart-line-total">{formatPrice(lineTotal)}</div>
                    </div>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => remove(product.slug)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-foot">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="cart-note">Shipping and taxes are calculated at checkout.</p>
              <a href="/checkout" className="cart-primary">
                Checkout
              </a>
              <a href="/cart" className="cart-secondary">
                View cart
              </a>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
