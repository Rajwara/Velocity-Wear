"use client";

import { useWishlist } from "@/components/wishlist/WishlistProvider";

export function HeartIcon({ filled, size = 20 }: { filled: boolean; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M12 20.5s-7.5-4.6-9.6-9.2C.9 8 2.6 4.2 6.3 3.6c2.1-.3 4 .7 5.7 2.7 1.7-2 3.6-3 5.7-2.7 3.7.6 5.4 4.4 3.9 7.7-2.1 4.6-9.6 9.2-9.6 9.2Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Save / unsave a product.
 * - "icon": round heart button (product cards, quick view)
 * - "full": wide button with a label (product page)
 */
export default function WishlistButton({
  slug,
  name,
  variant = "icon",
  className = "",
}: {
  slug: string;
  name: string;
  variant?: "icon" | "full";
  className?: string;
}) {
  const { has, toggle } = useWishlist();
  const saved = has(slug);
  const label = saved ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`;

  return (
    <button
      type="button"
      className={`wish-btn wish-${variant}${saved ? " is-saved" : ""} ${className}`.trim()}
      aria-pressed={saved}
      aria-label={variant === "icon" ? label : undefined}
      title={variant === "icon" ? (saved ? "Saved to wishlist" : "Add to wishlist") : undefined}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
    >
      <HeartIcon filled={saved} size={variant === "icon" ? 19 : 20} />
      {variant === "full" ? <span>{saved ? "Saved to wishlist" : "Add to wishlist"}</span> : null}
    </button>
  );
}

/** Header heart linking to the wishlist page, with the number of saved items. */
export function WishlistHeaderLink({ countClassName }: { countClassName: string }) {
  const { count } = useWishlist();
  return (
    <a
      href="/wishlist"
      className="header-toggle wish-header w-inline-block"
      aria-label={`Wishlist, ${count} ${count === 1 ? "item" : "items"}`}
    >
      {count > 0 ? <div className={`${countClassName} header-badge`}>{count}</div> : null}
      <span className="wish-header-icon">
        <HeartIcon filled={count > 0} size={20} />
      </span>
    </a>
  );
}
