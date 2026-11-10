// Generated from the Webflow export: which interaction bundles each page type loads.
export const WEBFLOW_SITE_ID = "6a9f93205a63e5051cc64762";

/**
 * Scripts each page type loads, in order (jQuery, Webflow runtime + commerce,
 * the page's interaction bundle, then GSAP + ScrollTrigger).
 */
export const BUNDLES = {
  home: [
    "/vendor/jquery-3.5.1.min.dc5e7f18c8.js",
    "/vendor/webflow.schunk.e661489a1c70db1e.js",
    "/vendor/webflow.schunk.ac5290ee18253806.js",
    "/vendor/webflow.62d08ba2.027b2a6e062b4d26.js",
    "/vendor/gsap.min.js",
    "/vendor/ScrollTrigger.min.js",
  ],
  default: [
    "/vendor/jquery-3.5.1.min.dc5e7f18c8.js",
    "/vendor/webflow.schunk.e661489a1c70db1e.js",
    "/vendor/webflow.schunk.ac5290ee18253806.js",
    "/vendor/webflow.schunk.c465ca6e444b1fc2.js",
    "/vendor/webflow.ba4f9cd6.508db24761113f78.js",
    "/vendor/gsap.min.js",
    "/vendor/ScrollTrigger.min.js",
  ],
  about: [
    "/vendor/jquery-3.5.1.min.dc5e7f18c8.js",
    "/vendor/webflow.schunk.e661489a1c70db1e.js",
    "/vendor/webflow.schunk.81e84d375e916845.js",
    "/vendor/webflow.schunk.ac5290ee18253806.js",
    "/vendor/webflow.77314eb7.d1176d19d057888c.js",
    "/vendor/gsap.min.js",
    "/vendor/ScrollTrigger.min.js",
  ],
  product: [
    "/vendor/jquery-3.5.1.min.dc5e7f18c8.js",
    "/vendor/webflow.schunk.e661489a1c70db1e.js",
    "/vendor/webflow.schunk.ac5290ee18253806.js",
    "/vendor/webflow.schunk.c465ca6e444b1fc2.js",
    "/vendor/webflow.add7b1ee.bb596d5227a5741e.js",
    "/vendor/gsap.min.js",
    "/vendor/ScrollTrigger.min.js",
  ],
} as const;

export type Bundle = keyof typeof BUNDLES;
