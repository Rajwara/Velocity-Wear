"use client";

import type { ReactNode } from "react";
import { useCart } from "@/components/cart/CartProvider";

/** Header cart icon with the item count; opens the cart drawer. */
export default function CartButton({
  countClassName,
  children,
}: {
  countClassName: string;
  /** the bag icon */
  children: ReactNode;
}) {
  const { count, open, isOpen } = useCart();
  return (
    <div className="header-cart">
      <button
        type="button"
        className="header-toggle cart-toggle w-inline-block"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
        onClick={open}
      >
        <div className={countClassName}>{count}</div>
        {children}
      </button>
    </div>
  );
}
