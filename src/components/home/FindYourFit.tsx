import FitGrid, { type FitCard } from "@/components/home/FitGrid";
import { categories, getProductsByCategory, priceValue } from "@/data/products";

/** Which filter tab each category belongs to. Categories not listed show under "All" only. */
const GROUPS: Record<string, string> = {
  running: "apparel",
  training: "apparel",
  outerwear: "apparel",
  football: "sports",
  tennis: "sports",
  caps: "gear",
  "water-bottles": "gear",
  bags: "gear",
  accessories: "gear",
};

/** Home page "Shop by Category / Find Your Fit": filter tabs over every shop category. */
export default function FindYourFit() {
  const cards: FitCard[] = categories.map((c) => {
    const items = getProductsByCategory(c.slug);
    const prices = items.map(priceValue);
    return {
      slug: c.slug,
      group: GROUPS[c.slug] ?? "other",
      title: c.name,
      count: items.length,
      from: prices.length ? Math.min(...prices) : 0,
      image: `/images/categories/${c.slug}.webp`,
    };
  });

  return (
    <section className="fyf" aria-labelledby="fyf-title">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="fyf-head">
          <div>
            <span className="fyf-label">Shop by Category</span>
            <h2 id="fyf-title">Find Your Fit</h2>
          </div>
          <p>
            Shop by what you train for, from running and training kit to football, tennis and
            everyday gear.
          </p>
        </div>
        <FitGrid cards={cards} />
      </div>
    </section>
  );
}
