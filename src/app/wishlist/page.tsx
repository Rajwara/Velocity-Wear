import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import WishlistView from "@/components/wishlist/WishlistView";

export const metadata: Metadata = {
  title: "Wishlist | Velocity Wear - Performance Sportswear",
  robots: { index: false },
};

export default function WishlistPage() {
  return (
    <SiteShell pageId="6aa24c4dfebe43e9797a6b15" bundle="default" headerVariant="base">
      <div className="main-wrapper">
        <section className="global-section cartpage">
          <div className="w-layout-blockcontainer main-container w-container">
            <h1 className="shop-title cartpage-heading">Your Wishlist</h1>
            <WishlistView />
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
