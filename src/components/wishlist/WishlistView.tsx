"use client";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { getProduct, type Product } from "@/data/products";

/** Content of the /wishlist page. */
export default function WishlistView() {
  const { slugs, loaded, clear } = useWishlist();
  const { add } = useCart();
  const items = slugs.map((s) => getProduct(s)).filter((p): p is Product => Boolean(p));

  if (!loaded) return <div className="cartpage-loading" aria-busy="true" />;

  if (!items.length) {
    return (
      <div className="cartpage-empty">
        <div className="wish-empty-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="34" height="34">
            <path
              d="M12 20.5s-7.5-4.6-9.6-9.2C.9 8 2.6 4.2 6.3 3.6c2.1-.3 4 .7 5.7 2.7 1.7-2 3.6-3 5.7-2.7 3.7.6 5.4 4.4 3.9 7.7-2.1 4.6-9.6 9.2-9.6 9.2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="cartpage-empty-title">Your wishlist is empty</div>
        <p>Tap the heart on any product to save it here for later.</p>
        <a href="/shop" className="cart-primary">
          Discover products
        </a>
      </div>
    );
  }

  return (
    <div className="wish-page">
      <div className="wish-toolbar">
        <div className="filter-result-count">
          {items.length} saved {items.length === 1 ? "item" : "items"}
        </div>
        <div className="wish-actions">
          <button type="button" className="cartpage-link" onClick={clear}>
            Clear wishlist
          </button>
          <button
            type="button"
            className="cart-primary wish-all"
            onClick={() => items.forEach((p) => add(p.slug, 1))}
          >
            Add all to cart
          </button>
        </div>
      </div>
      <div role="list" className="shop-list shop-cols-4 wish-grid">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
