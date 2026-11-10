import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ProductCard from "@/components/ProductCard";
import ThankYouView, { type ThankYouType } from "@/components/ThankYouView";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Thank You | Velocity Wear - Performance Sportswear",
  robots: { index: false },
};

const TYPES: ThankYouType[] = ["order", "newsletter", "contact"];

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

/**
 * Shown after a successful order, newsletter sign-up or contact message:
 * /thank-you?type=order&order=VW-..., /thank-you?type=newsletter, /thank-you?type=contact
 */
export default async function ThankYouPage({ searchParams }: Props) {
  const params = await searchParams;
  const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);
  const requested = first(params.type) as ThankYouType | undefined;
  const type: ThankYouType = requested && TYPES.includes(requested) ? requested : "general";
  const rawOrder = first(params.order);
  const orderNumber = rawOrder && /^VW-[A-Z0-9-]{4,30}$/.test(rawOrder) ? rawOrder : undefined;

  return (
    <SiteShell pageId="6aa24c4dfebe43e9797a6b15" bundle="default" headerVariant="base">
      <div className="main-wrapper">
        <section className="global-section cartpage">
          <div className="w-layout-blockcontainer main-container w-container">
            <ThankYouView type={type} orderNumber={orderNumber} />
          </div>
        </section>
        <section className="cartpage-suggest">
          <div className="w-layout-blockcontainer main-container w-container">
            <h2 className="cartpage-suggest-title">
              {type === "order" ? "Complete your kit" : "Shop our bestsellers"}
            </h2>
            <div className="shop-list _3-columns">
              {getFeaturedProducts()
                .slice(0, 3)
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
