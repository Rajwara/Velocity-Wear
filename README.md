# Velocity Wear

Performance sportswear store built with Next.js (App Router, TypeScript), converted from the Athlor Webflow template.

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
  images/
    brand/       logos (logo-dark.svg / logo-light.svg) and favicons
    hero/        home page slideshow backgrounds (one per collection)
    home/        other home page images
    categories/  category cards (running, training, football, ...)
    products/    product photos, named after the product slug
    blog/        <topic>-featured.webp (post header) and <topic>-thumbnail.webp (cards)
    about/       about page banner, mission image, video poster
    team/        team member photos
    people/      review avatars and testimonial photos
    pages/       blog banner, contact, log in / sign up / reset password, 404
    social/      link-preview images for sharing
    partners/    placeholder partner logos (replace with real ones)
    icons/       small UI icons
  fonts/         Oswald, Lato and Inter Display font files
  videos/        about page story video
  vendor/        Webflow runtime, jQuery, GSAP, ScrollTrigger and Lenis scripts
```

## Editing content

- **Products / categories:** edit `src/data/products.ts`. Adding a product there creates
  its `/product/<slug>` page automatically. `featured` controls the order of the
  featured lists (home, shop, related products); category pages list every product
  whose `category` matches.
- **Shop filters:** the shop page (`/shop`) has search, category, price and sort filters
  (`src/components/ShopFilters.tsx`, styles in `src/styles/shop-filters.css`). They work on
  every product in `src/data/products.ts` automatically, and the current filters are kept in the
  URL, e.g. `/shop?category=running,tennis&max=100&sort=price-asc`.
- **Blog posts:** edit `src/data/blog.ts`. `content` is the post body as HTML.
- **Page copy:** each page lives in `src/app/<route>/page.tsx` as regular JSX.
- **Images:** put files in the matching folder under `public/images/` and reference them as `/images/<folder>/<file>`. Product images are `/images/products/<product-slug>.webp`.

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

- Online card / PayPal payments (cash on delivery works: see below)
- Newsletter and contact forms
- Log in / sign up / reset password, and the password-protected page

### Cart, checkout and orders

- `/cart` shows the full cart; `/checkout` collects contact and delivery details,
  shipping method (standard free / express $14.99) and payment.
- The cart is kept in the visitor's browser (localStorage) by `src/components/cart/`.
- **Payment: cash on delivery** is the only method switched on for now. Card and PayPal
  are shown as "coming soon"; enable them in `PAYMENT_METHODS` in `src/lib/checkout.ts`
  once a payment provider is connected.
- Orders are sent to `POST /api/orders` (`src/app/api/orders/route.ts`), which re-checks
  the products and recalculates every price on the server.
- **Where orders go:** set the environment variable `ORDER_WEBHOOK_URL` to a webhook
  (Zapier, Make, a Google Apps Script for Google Sheets, Slack, etc.) and every order is
  POSTed there as JSON. Without it, orders are only written to the server log, so
  **set this before taking real orders.**

### Floating buttons, newsletter and chat

Every page has floating buttons (`src/components/floating/`): chat and newsletter bottom-left, back to top bottom-right:

- **Chat:** instant answers to common questions (shipping, cash on delivery, returns,
  sizing, order tracking) plus "Email us" and "Chat on WhatsApp" buttons. Set your
  support email and WhatsApp number in `src/lib/site.ts` (the WhatsApp button only
  shows once a number is set). Edit the answers in `TOPICS` in `ChatPanel.tsx`.
- **Newsletter:** opens a sign-up popup. Sign-ups from the popup and the footer form go
  to `POST /api/newsletter`; set `NEWSLETTER_WEBHOOK_URL` to forward them to your email
  tool (e.g. Mailchimp or Klaviyo via Zapier / Make). Without it they are only logged.
- **Back to top:** appears after scrolling down.

For now, submitting the contact / account forms shows a short demo notice (see `installDemoAdapters` in `src/components/WebflowRuntime.tsx`). Replace
those handlers with your own API routes or services when you connect a backend.
