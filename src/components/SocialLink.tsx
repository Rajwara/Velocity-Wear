import type { ReactNode } from "react";
import { SOCIAL_LINKS } from "@/lib/site";

/** Footer social icon. Links to the profile set in SOCIAL_LINKS (src/lib/site.ts), if any. */
export default function SocialLink({
  network,
  label,
  children,
}: {
  network: keyof typeof SOCIAL_LINKS;
  label: string;
  children: ReactNode;
}) {
  const href = SOCIAL_LINKS[network];
  if (!href) {
    return (
      <span className="footer-social-link w-inline-block is-unlinked" aria-hidden="true">
        {children}
      </span>
    );
  }
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social-link w-inline-block"
    >
      {children}
    </a>
  );
}
