import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The design relies on Webflow's CSS for <img> sizing, so plain <img> is used on purpose.
      "@next/next/no-img-element": "off",
      // Internal links are plain <a> so every navigation is a full page load,
      // which lets the Webflow interaction runtime initialise cleanly.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  { ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"] },
];

export default config;
