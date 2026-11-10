import type { ReactNode } from "react";

const VARIANT_CLASS = {
  navbar: "w-variant-cb121632-d1e0-c263-1f5d-573345e46fa3",
  neutral: "w-variant-f374aea7-1eb9-61e5-7d22-c759587208ed",
  primary: "",
  white: "w-variant-eb55534b-9ef0-1e2d-9d5d-daab4a5fe5c5",
} as const;

export type ButtonVariant = keyof typeof VARIANT_CLASS;

/** Webflow "Button" component: a link whose label slides on hover. */
export default function Button({
  variant = "primary",
  href,
  target,
  ariaLabel = "Button",
  children,
}: {
  variant?: ButtonVariant;
  href: string;
  target?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const extra = VARIANT_CLASS[variant];
  return (
    <a
      aria-label={ariaLabel}
      data-wf--button--variant={variant}
      href={href}
      target={target}
      className={`button${extra ? " " + extra : ""} w-inline-block`}
    >
      <div className="button-wrap">
        <div className="button-text">{children}</div>
        <div className="button-text">{children}</div>
      </div>
    </a>
  );
}
