# Velocity Wear

A Next.js (App Router, TypeScript) version of the Athlor Webflow sports store export.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are pre-rendered)
npm start        # serve the production build
npm run lint
npm run typecheck
```

## Project structure

```
src/
  app/                         one folder per route (App Router)
    page.tsx                   home
    about, shop, blog, contact, faq, changelog, licenses, style-guide,
    privacy-policy, return-refund-policy, external-link, 401, user/*
    product/[slug]             product detail (generated from src/data/products.ts)
    product-category/[slug]    category listing
    blog/[slug]                blog post (generated from src/data/blog.ts)
    blog-category/[slug]       blog category listing
    not-found.tsx              404 page
    layout.tsx                 <html>, global CSS, favicons
  components/
    SiteShell.tsx              header + page + footer frame used by most pages
    Header.tsx / Footer.tsx    site header ("base" and "brand" variants) and footer
    ProductCard, BlogCard, ShopCategoryNav, Button, BenefitsSection
    NavLink.tsx                marks the link to the current page as active
    WebflowPage.tsx            page wrapper that loads the Webflow runtime
    WebflowRuntime.tsx         loads jQuery/Webflow/GSAP/Lenis after hydration
    webflow-config.ts          which Webflow script bundle each page type uses
  data/
    products.ts                products and product categories
    blog.ts                    blog posts and blog categories
  styles/                      Webflow CSS, fonts, Lenis CSS and local overrides
public/
  assets/                      images, fonts, video
  webflow/                     original Webflow, GSAP, ScrollTrigger and Lenis scripts
```

## Editing content

- **Products / categories:** edit `src/data/products.ts`. Adding a product there creates
  its `/product/<slug>` page automatically. `featured` controls the order of the
  featured lists (home, shop, related products); category pages list every product
  whose `category` matches.
- **Blog posts:** edit `src/data/blog.ts`. `content` is the post body as HTML.
- **Page copy:** each page lives in `src/app/<route>/page.tsx` as regular JSX.
- **Images:** put files in `public/assets/` and reference them as `/assets/<file>`.

## How the Webflow parts work

The layout and styling are the original Webflow CSS (`src/styles/webflow.css`), and the
animations, navbar, tabs, accordions and sliders still come from the original Webflow
scripts. `WebflowRuntime` loads them in the same order as the export once React has
hydrated, and sets the Webflow page id the interactions need.

Internal links are plain `<a>` tags (not `next/link`). Every navigation is a full page
load, so the Webflow interaction runtime always starts on a fresh page. Client-side
navigation would need the runtime to be torn down and re-initialised on every route
change.

Each page also includes a small block of page-specific CSS (`pageStyles`). It hides the
animated elements until the Webflow interactions have initialised, as in the export.

## What still needs a backend

The export came from a Webflow Ecommerce site, and these features need a service
behind them:

- Add to cart, the cart drawer and checkout (Webflow Ecommerce APIs)
- Newsletter and contact forms
- Log in / sign up / reset password, and the password-protected page

For now, submitting a form, adding to cart or clicking checkout shows a short demo
notice (see `installDemoAdapters` in `src/components/WebflowRuntime.tsx`). Replace
those handlers with your own API routes or services when you connect a backend.
