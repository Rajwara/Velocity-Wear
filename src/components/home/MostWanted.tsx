import QuickViewArea from "@/components/quickview/QuickViewArea";
import type { QuickProduct } from "@/components/quickview/QuickView";
import { getCategory, getFeaturedProducts } from "@/data/products";

/** Home page "Best Sellers / Most Wanted Right Now": a heading beside six best-selling products. */
export default function MostWanted() {
  const items: QuickProduct[] = getFeaturedProducts()
    .slice(0, 6)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      category: getCategory(p.category)?.name ?? "",
      image: p.image,
      price: p.price,
      comparePrice: p.comparePrice,
      excerpt: p.excerpt,
    }));

  return (
    <section id="scroll-down" className="mw" aria-labelledby="mw-title">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="mw-grid">
          <div className="mw-side">
            <span className="mw-label">Best Sellers</span>
            <h2 id="mw-title">Most Wanted Right Now</h2>
            <div className="mw-end">
              <p>
                Our best-selling kit, from match-day boots to everyday running essentials our
                customers come back for season after season.
              </p>
              <a className="mw-btn" href="/shop">
                <span className="mw-roll">
                  <span data-t="Shop Best Sellers">Shop Best Sellers</span>
                </span>
                <span className="mw-ico" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12h16M14 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="mw-products">
            {items.map((it) => (
              <a className="mw-product" key={it.slug} href={`/product/${it.slug}`}>
                <span className="mw-pill">
                  <i aria-hidden="true">★</i> Best seller · {it.category}
                </span>
                <QuickViewArea className="mw-thumb" product={it}>
                  <img src={it.image} alt={it.name} loading="lazy" />
                </QuickViewArea>
                <div className="mw-name">{it.name}</div>
                <div className="mw-price">
                  {it.price}
                  <span>{it.comparePrice}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
