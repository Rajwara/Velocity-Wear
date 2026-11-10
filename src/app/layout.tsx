import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { WEBFLOW_SITE_ID } from "@/components/webflow-config";
import "@/styles/webflow.css";
import "@/styles/lenis.css";
import "@/styles/fonts.css";
import "@/styles/overrides.css";

export const metadata: Metadata = {
  title: "Velocity Wear - Performance Sportswear",
  icons: {
    icon: [
      {
        url: "/assets/a0a6986749-6ab6312528eead3b5c6d9aa6_Icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/fd0b25bb0b-6ab6312547fcb3c20786d28d_Icon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/assets/cfe2f946be-6ab63125707dea9c2f7ed219_Icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/9728b2af3d-6ab63125c1583bbf4767f7a5_Icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: { url: "/assets/37f8645bf2-6ab631253deda3165eaf2fbd_Icon.png", sizes: "180x180" },
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
      <body>{children}</body>
    </html>
  );
}
