import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { WEBFLOW_SITE_ID } from "@/components/webflow-config";
import "@/styles/webflow.css";
import "@/styles/lenis.css";
import "@/styles/fonts.css";
import "@/styles/overrides.css";
import "@/styles/shop-filters.css";
import "@/styles/cart.css";
import "@/styles/cart-page.css";
import "@/styles/floating.css";
import CartProvider from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import FloatingActions from "@/components/floating/FloatingActions";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your live domain so share images get absolute URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: { siteName: "Velocity Wear", images: ["/images/social/default.webp"] },
  title: "Velocity Wear - Performance Sportswear",
  icons: {
    icon: [
      {
        url: "/images/brand/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/images/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: { url: "/images/brand/apple-touch-icon.png", sizes: "180x180" },
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Webflow marks the document as JS-enabled before first paint; its CSS relies on these classes.
const webflowModeScript = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;
const currencySettings = `window.__WEBFLOW_CURRENCY_SETTINGS = ${JSON.stringify({
  currencyCode: "USD",
  symbol: "$",
  decimal: ".",
  fractionDigits: 2,
  group: ",",
  template:
    '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
  hideDecimalForWholeNumbers: false,
})};`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-wf-site={WEBFLOW_SITE_ID} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: webflowModeScript }} />
        <script dangerouslySetInnerHTML={{ __html: currencySettings }} />
      </head>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
          <FloatingActions />
        </CartProvider>
      </body>
    </html>
  );
}
