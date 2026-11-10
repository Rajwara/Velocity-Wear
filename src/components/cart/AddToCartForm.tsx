"use client";

import type { ReactNode } from "react";
import { useCart } from "@/components/cart/CartProvider";

/**
 * Wraps the existing "Add to cart" markup and adds the product to the cart on submit.
 * A quantity field inside the form should be named "quantity".
 */
export default function AddToCartForm({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  const { add } = useCart();
  return (
    <form
      data-cart-form=""
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        const quantity = Number(new FormData(e.currentTarget).get("quantity")) || 1;
        add(slug, quantity);
      }}
    >
      {children}
    </form>
  );
}
