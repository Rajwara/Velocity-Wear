"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { type Category, type Product, priceValue } from "@/data/products";
import {
  SHOP_SORTS as SORTS,
  type ShopFilterState as Filters,
  type ShopSort as Sort,
  priceBounds,
  shopFiltersToQuery,
} from "@/lib/shop-filters";

const PRICE_BANDS = [
  { label: "Under $50", min: null, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100 – $150", min: 100, max: 150 },
  { label: "$150+", min: 150, max: null },
] as const;

function featuredRank(p: Product) {
  return p.featured ?? 1000;
}

/**
 * Shop sidebar filters (search, categories, price) plus sorting and the product grid.
 * The current filters are kept in the URL (?category=running,tennis&min=20&max=80&sort=price-asc&q=tee)
 * so a filtered view can be bookmarked or shared.
 */
export default function ShopFilters({
  products,
  categories,
  initialFilters,
}: {
  products: Product[];
  categories: Category[];
  /** Filters read from the URL by the page */
  initialFilters: Filters;
}) {
  const bounds = useMemo(() => priceBounds(products), [products]);
  const defaults: Filters = {
    query: "",
    categories: [],
    min: bounds.min,
    max: bounds.max,
    sort: "featured",
  };
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [panelOpen, setPanelOpen] = useState(false);

  // Keep the URL in sync with the filters so a filtered view can be shared.
  useEffect(() => {
    const qs = shopFiltersToQuery(filters, products);
    const next = qs ? `?${qs}` : window.location.pathname;
    if (next !== window.location.search && (qs || window.location.search)) {
      window.history.replaceState(window.history.state, "", next);
    }
  }, [filters, products]);

  const update = (patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch }));

  const matchesExceptCategory = (p: Product) => {
    const price = priceValue(p);
    const q = filters.query.trim().toLowerCase();
    return (
      price >= filters.min &&
      price <= filters.max &&
      (!q || p.name.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    );
  };

  const results = useMemo(() => {
    const list = products.filter(
      (p) =>
        matchesExceptCategory(p) &&
        (!filters.categories.length || filters.categories.includes(p.category)),
    );
    const sorted = [...list];
    if (filters.sort === "price-asc") sorted.sort((a, b) => priceValue(a) - priceValue(b));
    else if (filters.sort === "price-desc") sorted.sort((a, b) => priceValue(b) - priceValue(a));
    else if (filters.sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => featuredRank(a) - featuredRank(b));
    return sorted;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, filters]);

  const toggleCategory = (slug: string) =>
    update({
      categories: filters.categories.includes(slug)
        ? filters.categories.filter((c) => c !== slug)
        : [...filters.categories, slug],
    });

  const setBand = (min: number | null, max: number | null) =>
    update({ min: min ?? bounds.min, max: max ?? bounds.max });

  const activeChips: { label: string; clear: () => void }[] = [
    ...(filters.query ? [{ label: `“${filters.query}”`, clear: () => update({ query: "" }) }] : []),
    ...filters.categories.map((slug) => ({
      label: categories.find((c) => c.slug === slug)?.name ?? slug,
      clear: () => toggleCategory(slug),
    })),
    ...(filters.min > bounds.min || filters.max < bounds.max
      ? [
          {
            label: `$${filters.min} – $${filters.max}`,
            clear: () => update({ min: bounds.min, max: bounds.max }),
          },
        ]
      : []),
  ];

  const clearAll = () => setFilters({ ...defaults, sort: filters.sort });
  const span = bounds.max - bounds.min || 1;

  return (
    <>
      <div className={`shop-menu-block filter-panel${panelOpen ? " is-open" : ""}`}>
        <div className="filter-panel-head">
          <div className="filter-panel-title">Filters</div>
          <button type="button" className="filter-close" onClick={() => setPanelOpen(false)}>
            Show {results.length} {results.length === 1 ? "product" : "products"}
          </button>
        </div>

        <div className="shop-wrapper filter-group">
          <label className="shop-heading" htmlFor="shop-search">
            Search
          </label>
          <input
            id="shop-search"
            type="search"
            className="filter-search"
            placeholder="Search products"
            value={filters.query}
            onChange={(e) => update({ query: e.target.value })}
          />
        </div>

        <div className="shop-wrapper filter-group">
          <div className="shop-heading">Categories</div>
          <div className="filter-options">
            {categories.map((c) => {
              const count = products.filter(
                (p) => p.category === c.slug && matchesExceptCategory(p),
              ).length;
              const checked = filters.categories.includes(c.slug);
              return (
                <label
                  key={c.slug}
                  className={`filter-option${checked ? " is-checked" : ""}${count === 0 && !checked ? " is-empty" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleCategory(c.slug)}
                  />
                  <span className="filter-box" aria-hidden="true" />
                  <span className="filter-name">{c.name}</span>
                  <span className="filter-count">{count}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="shop-wrapper filter-group">
          <div className="shop-heading">Price</div>
          <div
            className="filter-range"
            style={
              {
                "--from": `${((filters.min - bounds.min) / span) * 100}%`,
                "--to": `${((filters.max - bounds.min) / span) * 100}%`,
              } as React.CSSProperties
            }
          >
            <div className="filter-range-track" />
            <input
              type="range"
              aria-label="Minimum price"
              min={bounds.min}
              max={bounds.max}
              step={5}
              value={filters.min}
              onChange={(e) => update({ min: Math.min(Number(e.target.value), filters.max) })}
            />
            <input
              type="range"
              aria-label="Maximum price"
              min={bounds.min}
              max={bounds.max}
              step={5}
              value={filters.max}
              onChange={(e) => update({ max: Math.max(Number(e.target.value), filters.min) })}
            />
          </div>
          <div className="filter-price-inputs">
            <label>
              <span>Min</span>
              <input
                type="number"
                min={bounds.min}
                max={filters.max}
                value={filters.min}
                onChange={(e) =>
                  update({
                    min: Math.max(bounds.min, Math.min(Number(e.target.value) || 0, filters.max)),
                  })
                }
              />
            </label>
            <span className="filter-dash">–</span>
            <label>
              <span>Max</span>
              <input
                type="number"
                min={filters.min}
                max={bounds.max}
                value={filters.max}
                onChange={(e) =>
                  update({
                    max: Math.min(bounds.max, Math.max(Number(e.target.value) || 0, filters.min)),
                  })
                }
              />
            </label>
          </div>
          <div className="filter-bands">
            {PRICE_BANDS.map((b) => {
              const min = b.min ?? bounds.min;
              const max = b.max ?? bounds.max;
              const active = filters.min === min && filters.max === max;
              return (
                <button
                  key={b.label}
                  type="button"
                  className={`filter-band${active ? " is-active" : ""}`}
                  onClick={() => (active ? setBand(null, null) : setBand(b.min, b.max))}
                >
                  {b.label}
                </button>
              );
            })}
          </div>
        </div>

        {activeChips.length ? (
          <button type="button" className="filter-clear" onClick={clearAll}>
            Clear all filters
          </button>
        ) : null}
      </div>

      <div id="w-node-_079c05cf-fd73-b042-15a7-6f3fc587dfb0-797a6b15" className="shop-wrapp-block">
        <div className="filter-toolbar">
          <button type="button" className="filter-toggle" onClick={() => setPanelOpen(true)}>
            Filters{activeChips.length ? ` (${activeChips.length})` : ""}
          </button>
          <div className="filter-result-count" aria-live="polite">
            {results.length} {results.length === 1 ? "product" : "products"}
          </div>
          <label className="filter-sort">
            <span>Sort by</span>
            <select value={filters.sort} onChange={(e) => update({ sort: e.target.value as Sort })}>
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {activeChips.length ? (
          <div className="filter-chips">
            {activeChips.map((chip) => (
              <button key={chip.label} type="button" className="filter-chip" onClick={chip.clear}>
                {chip.label}
                <span aria-hidden="true">×</span>
                <span className="filter-sr">Remove filter</span>
              </button>
            ))}
            <button type="button" className="filter-chip-clear" onClick={clearAll}>
              Clear all
            </button>
          </div>
        ) : null}

        {results.length ? (
          <div className="shop-wrapp w-dyn-list">
            <div role="list" className="shop-list w-dyn-items">
              {results.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="filter-empty">
            <div className="filter-empty-title">No products match these filters</div>
            <p>Try removing a filter or widening the price range.</p>
            <button type="button" className="filter-clear" onClick={clearAll}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
      {panelOpen ? (
        <button
          type="button"
          aria-label="Close filters"
          className="filter-backdrop"
          onClick={() => setPanelOpen(false)}
        />
      ) : null}
    </>
  );
}
