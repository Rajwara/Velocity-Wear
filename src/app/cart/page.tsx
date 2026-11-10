import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import CartView from "@/components/cart/CartView";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Your Cart | Velocity Wear - Performance Sportswear",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <SiteShell pageId="6aa24c4dfebe43e9797a6b15" bundle="default" headerVariant="base">
      <div className="main-wrapper">
        <section className="global-section cartpage">
          <div className="w-layout-blockcontainer main-container w-container">
            <h1 className="shop-title cartpage-heading">Your Cart</h1>
            <CartView />
          </div>
        </section>
        <section className="cartpage-suggest">
          <div className="w-layout-blockcontainer main-container w-container">
            <h2 className="cartpage-suggest-title">You might also like</h2>
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
