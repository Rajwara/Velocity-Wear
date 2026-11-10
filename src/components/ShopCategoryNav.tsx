import { categories } from "@/data/products";

/** Category sidebar on the shop and category pages. Pass the active category slug as `current`. */
export default function ShopCategoryNav({ current }: { current?: string }) {
  return (
    <div className="shop-navigate">
      <a
        aria-label="Link Block"
        href="/shop"
        aria-current="page"
        className="shop-category-link w-inline-block w--current"
      >
        <div className="shop-category-text">All Products</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          className="shop-category-icon"
        >
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="1.571"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="1.571"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <div className="shop-category-wrap w-dyn-list">
        <div role="list" className="shop-category-list w-dyn-items">
          {categories.map((category) => (
            <div role="listitem" className="shop-category-item w-dyn-item" key={category.slug}>
              <a
                aria-label="Link Block"
                href={`/product-category/${category.slug}`}
                className={`shop-category-link w-inline-block${category.slug === current ? " w--current" : ""}`}
                aria-current={category.slug === current ? "page" : undefined}
              >
                <div className="shop-category-text">{category.name}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shop-category-icon"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.571"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.571"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
