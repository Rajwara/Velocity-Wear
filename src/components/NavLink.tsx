"use client";

import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";

/** An <a> that gets Webflow's `w--current` class when it points at the current page. */
export default function NavLink({ href, className, ...rest }: ComponentProps<"a">) {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <a
      href={href}
      className={active ? `${className ?? ""} w--current`.trim() : className}
      aria-current={active ? "page" : undefined}
      {...rest}
    />
  );
}
