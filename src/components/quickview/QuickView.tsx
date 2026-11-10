"use client";

import WishlistButton from "@/components/wishlist/WishlistButton";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useCart } from "@/components/cart/CartProvider";
import { lockScroll } from "@/lib/scroll";

/** The slice of a product the quick view needs (kept small so it can be passed to the client). */
export type QuickProduct = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: string;
  comparePrice: string;
  excerpt: string;
};

const Ctx = createContext<(p: QuickProduct) => void>(() => {});
export const useQuickView = () => useContext(Ctx);

/** One shared "Quick view" dialog for product cards that use <QuickViewArea>. */
export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<QuickProduct | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const open = useCallback((p: QuickProduct) => setProduct(p), []);

  useEffect(() => {
    if (product && !dialog.current?.open) dialog.current?.showModal();
    lockScroll("quickview", Boolean(product));
  }, [product]);

  return (
    <Ctx.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        className="qv"
        aria-label={product ? `Quick view: ${product.name}` : "Quick view"}
        onClose={() => setProduct(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        {product ? (
          <QuickViewBody key={product.slug} p={product} close={() => dialog.current?.close()} />
        ) : null}
      </dialog>
    </Ctx.Provider>
  );
}

function QuickViewBody({ p, close }: { p: QuickProduct; close: () => void }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="qv-grid">
      <button className="qv-close" type="button" aria-label="Close" onClick={close}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6 6 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="qv-gallery">
        <img className="qv-main" src={p.image} alt={p.name} />
      </div>
      <div className="qv-info">
        <span className="qv-eyebrow">{p.category}</span>
        <h2>{p.name}</h2>
        <div className="qv-price">
          {p.price}
          {p.comparePrice ? <span>{p.comparePrice}</span> : null}
        </div>
        <p className="qv-excerpt">{p.excerpt}</p>
        <div className="qv-buy">
          <div className="cart-qty qv-qty" role="group" aria-label="Quantity">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <input readOnly value={qty} aria-label="Quantity" />
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(99, q + 1))}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="cart-primary qv-add"
            onClick={() => {
              close();
              add(p.slug, qty);
            }}
          >
            Add to cart
          </button>
          <WishlistButton slug={p.slug} name={p.name} className="qv-wish" />
        </div>
        <a className="qv-more" href={`/product/${p.slug}`}>
          View full details
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M4 12h16M14 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
