import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import CheckoutView from "@/components/cart/CheckoutView";

export const metadata: Metadata = {
  title: "Checkout | Velocity Wear - Performance Sportswear",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <SiteShell pageId="6aa24c4dfebe43e9797a6b15" bundle="default" headerVariant="base">
      <div className="main-wrapper">
        <section className="global-section cartpage">
          <div className="w-layout-blockcontainer main-container w-container">
            <h1 className="shop-title cartpage-heading">Checkout</h1>
            <CheckoutView />
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
