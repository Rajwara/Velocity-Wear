"use client";

import { formatPrice, useCart } from "@/components/cart/CartProvider";
import { getCategory, priceValue } from "@/data/products";
import { SHIPPING_OPTIONS } from "@/lib/checkout";

/** The full "View cart" page content. */
export default function CartView() {
  const { items, count, subtotal, loaded, setQuantity, remove, clear } = useCart();

  if (!loaded) {
    return <div className="cartpage-loading" aria-busy="true" />;
  }

  if (!items.length) {
    return (
      <div className="cartpage-empty">
        <div className="cartpage-empty-title">Your cart is empty</div>
        <p>Looks like you haven&apos;t added anything yet.</p>
        <a href="/shop" className="cart-primary">
          Start shopping
        </a>
      </div>
    );
  }

  return (
    <div className="cartpage-grid">
      <section className="cartpage-panel" aria-label="Cart items">
        <div className="cartpage-panel-head">
          <div className="cartpage-panel-title">
            {count} {count === 1 ? "item" : "items"}
          </div>
          <button type="button" className="cartpage-link" onClick={clear}>
            Clear cart
          </button>
        </div>

        <div className="cartpage-table-head" aria-hidden="true">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <ul className="cartpage-items" role="list">
          {items.map(({ product, quantity, lineTotal }) => (
            <li key={product.slug} className="cartpage-item">
              <div className="cartpage-product">
                <a href={`/product/${product.slug}`} className="cartpage-thumb">
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="cartpage-product-info">
                  <div className="cartpage-category">{getCategory(product.category)?.name}</div>
                  <a href={`/product/${product.slug}`} className="cartpage-name">
                    {product.name}
                  </a>
                  <button
                    type="button"
                    className="cartpage-link"
                    onClick={() => remove(product.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cartpage-price" data-label="Price">
                {formatPrice(priceValue(product))}
                <span className="cartpage-compare">{product.comparePrice}</span>
              </div>
              <div className="cartpage-qty-cell" data-label="Quantity">
                <div className="cart-qty" role="group" aria-label={`Quantity of ${product.name}`}>
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
              </div>
              <div className="cartpage-total" data-label="Total">
                {formatPrice(lineTotal)}
              </div>
            </li>
          ))}
        </ul>

        <a href="/shop" className="cartpage-back">
          ← Continue shopping
        </a>
      </section>

      <aside className="cartpage-summary" aria-label="Order summary">
        <div className="cartpage-panel-title">Order summary</div>
        <dl className="cartpage-lines">
          <div>
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>
              {SHIPPING_OPTIONS[0].price === 0 ? "Free" : formatPrice(SHIPPING_OPTIONS[0].price)}
            </dd>
          </div>
          <div>
            <dt>Taxes</dt>
            <dd>Calculated at checkout</dd>
          </div>
        </dl>
        <div className="cartpage-grand">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <a href="/checkout" className="cart-primary">
          Proceed to checkout
        </a>
        <ul className="cartpage-perks" role="list">
          <li>Free standard shipping on all orders</li>
          <li>Easy returns within 30 days</li>
          <li>Secure checkout</li>
        </ul>
      </aside>
    </div>
  );
}
