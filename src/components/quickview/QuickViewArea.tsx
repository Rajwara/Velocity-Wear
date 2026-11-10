"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { useQuickView, type QuickProduct } from "@/components/quickview/QuickView";

/**
 * Wraps a product photo. With a mouse, a round "Quick view" button follows the
 * cursor over the photo, and clicking opens the quick view dialog instead of the
 * product page. Touch screens and keyboards keep the normal link.
 */
export default function QuickViewArea({
  product,
  className = "",
  children,
}: {
  product: QuickProduct;
  className?: string;
  children: ReactNode;
}) {
  const open = useQuickView();
  const box = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  const place = (e: PointerEvent) => {
    const el = box.current;
    const d = dot.current;
    if (!el || !d || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    d.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
    el.classList.add("qva-on");
  };

  return (
    <div
      ref={box}
      className={`qva ${className}`}
      onPointerEnter={place}
      onPointerMove={place}
      onPointerLeave={() => box.current?.classList.remove("qva-on")}
      onClickCapture={(e) => {
        if (!box.current?.classList.contains("qva-on")) return;
        e.preventDefault();
        e.stopPropagation();
        box.current.classList.remove("qva-on");
        open(product);
      }}
    >
      {children}
      <span className="qva-dot" ref={dot} aria-hidden="true">
        <span>Quick view</span>
      </span>
    </div>
  );
}
