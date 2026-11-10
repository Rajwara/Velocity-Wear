import type { Metadata } from "next";

/**
 * Link previews (WhatsApp, Facebook, LinkedIn, X, iMessage...).
 * The 1200x630 JPG images live in public/images/share and are built by
 * scripts/make-share-images.py.
 */

export const SITE_NAME = "Velocity Wear";
export const DEFAULT_SHARE_IMAGE = "/images/share/default.jpg";

/**
 * Absolute site address used for share image links. Set NEXT_PUBLIC_SITE_URL to your
 * own domain; on Vercel the project's production address is used automatically.
 */
export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

/** Open Graph + X (Twitter) metadata for a page. */
export function socialMeta({
  title,
  description,
  image = DEFAULT_SHARE_IMAGE,
  alt,
  type = "website",
}: {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  type?: "website" | "article";
}): Pick<Metadata, "openGraph" | "twitter"> {
  const img = { url: image, width: 1200, height: 630, alt: alt ?? title, type: "image/jpeg" };
  return {
    openGraph: { title, description, siteName: SITE_NAME, type, images: [img] },
    twitter: { card: "summary_large_image", title, description, images: [img.url] },
  };
}
