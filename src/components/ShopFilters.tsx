"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import ProductCard from "@/components/ProductCard";
import {
  COLORS,
  SIZE_ORDER,
  isNewArrival,
  type Category,
  type Product,
  priceValue,
} from "@/data/products";
import {
  SHOP_COLLECTIONS,
  SHOP_SORTS as SORTS,
  type ShopCollection,
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

/** Products per row in the shop grid; the visitor's choice is remembered in this browser. */
const GRID_KEY = "velocity-wear-shop-columns";
const GRID_OPTIONS = [2, 3, 4] as const;
type GridColumns = (typeof GRID_OPTIONS)[number];
const DEFAULT_COLUMNS: GridColumns = 3;
const gridListeners = new Set<() => void>();
function readColumns(): GridColumns {
  try {
    const v = Number(window.localStorage.getItem(GRID_KEY));
    return (GRID_OPTIONS as readonly number[]).includes(v) ? (v as GridColumns) : DEFAULT_COLUMNS;
  } catch {
    return DEFAULT_COLUMNS;
  }
}
function subscribeColumns(cb: () => void) {
  gridListeners.add(cb);
  return () => gridListeners.delete(cb);
}
function saveColumns(n: GridColumns) {
  try {
    window.localStorage.setItem(GRID_KEY, String(n));
  } catch {
    // storage unavailable: the choice lasts for this page view only
  }
  gridListeners.forEach((cb) => cb());
}

function GridIcon({ n }: { n: number }) {
  const w = 18;
  const gap = 2;
  const bar = (w - gap * (n - 1)) / n;
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <rect
          key={i}
          x={i * (bar + gap)}
          y="0"
          width={bar}
          height="18"
          rx="1.5"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

function featuredRank(p: Product) {
  return p.featured ?? 1000;
}

/**
 * Shop sidebar filters (search, collection, categories, colour, size, price) plus sorting and
 * the product grid. The current filters are kept in the URL
 * (?category=running,tennis&color=black&size=M&show=new&min=20&max=80&sort=price-asc&q=tee)
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
    collections: [],
    colors: [],
    sizes: [],
    min: bounds.min,
    max: bounds.max,
    sort: "featured",
  };
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [panelOpen, setPanelOpen] = useState(false);
  const columns = useSyncExternalStore(subscribeColumns, readColumns, () => DEFAULT_COLUMNS);

  // Keep the URL in sync with the filters so a filtered view can be shared.
  useEffect(() => {
    const qs = shopFiltersToQuery(filters, products);
    const next = qs ? `?${qs}` : window.location.pathname;
    if (next !== window.location.search && (qs || window.location.search)) {
      window.history.replaceState(window.history.state, "", next);
    }
  }, [filters, products]);

  const update = (patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch }));

  const newSlugs = useMemo(
    () => new Set(products.filter((p) => isNewArrival(p, products)).map((p) => p.slug)),
    [products],
  );
  const inCollection = (p: Product, c: ShopCollection) =>
    c === "featured" ? p.featured !== undefined : newSlugs.has(p.slug);

  type Group = "category" | "collection" | "color" | "size";
  /** Does the product pass every filter except the given group? (used for option counts) */
  const matches = (p: Product, except?: Group) => {
    const price = priceValue(p);
    const q = filters.query.trim().toLowerCase();
    return (
      price >= filters.min &&
      price <= filters.max &&
      (!q || p.name.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)) &&
      (except === "category" ||
        !filters.categories.length ||
        filters.categories.includes(p.category)) &&
      (except === "collection" ||
        !filters.collections.length ||
        filters.collections.some((c) => inCollection(p, c))) &&
      (except === "color" ||
        !filters.colors.length ||
        filters.colors.some((c) => p.colors.includes(c))) &&
      (except === "size" || !filters.sizes.length || filters.sizes.some((z) => p.sizes.includes(z)))
    );
  };

  const results = useMemo(() => {
    const sorted = products.filter((p) => matches(p));
    if (filters.sort === "price-asc") sorted.sort((a, b) => priceValue(a) - priceValue(b));
    else if (filters.sort === "price-desc") sorted.sort((a, b) => priceValue(b) - priceValue(a));
    else if (filters.sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (filters.sort === "newest")
      sorted.sort(
        (a, b) => b.addedAt.localeCompare(a.addedAt) || featuredRank(a) - featuredRank(b),
      );
    else sorted.sort((a, b) => featuredRank(a) - featuredRank(b));
    return sorted;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, filters, newSlugs]);

  const toggle = <K extends "categories" | "collections" | "colors" | "sizes">(
    key: K,
    value: Filters[K][number],
  ) => {
    const current = filters[key] as string[];
    update({
      [key]: current.includes(value as string)
        ? current.filter((v) => v !== value)
        : [...current, value],
    } as Partial<Filters>);
  };
  const sizesInUse = SIZE_ORDER.filter((z) => products.some((p) => p.sizes.includes(z)));
  const colorsInUse = COLORS.filter((c) => products.some((p) => p.colors.includes(c.id)));

  const toggleCategory = (slug: string) => toggle("categories", slug);

  const setBand = (min: number | null, max: number | null) =>
    update({ min: min ?? bounds.min, max: max ?? bounds.max });

  const activeChips: { label: string; clear: () => void }[] = [
    ...(filters.query ? [{ label: `“${filters.query}”`, clear: () => update({ query: "" }) }] : []),
    ...filters.collections.map((c) => ({
      label: SHOP_COLLECTIONS.find((x) => x.value === c)?.label ?? c,
      clear: () => toggle("collections", c),
    })),
    ...filters.categories.map((slug) => ({
      label: categories.find((c) => c.slug === slug)?.name ?? slug,
      clear: () => toggleCategory(slug),
    })),
    ...filters.colors.map((c) => ({
      label: COLORS.find((x) => x.id === c)?.name ?? c,
      clear: () => toggle("colors", c),
    })),
    ...filters.sizes.map((z) => ({ label: `Size ${z}`, clear: () => toggle("sizes", z) })),
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
      <div
        className={`shop-menu-block filter-panel${panelOpen ? " is-open" : ""}`}
        data-lenis-prevent=""
      >
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
          <div className="shop-heading">Collection</div>
          <div className="filter-options">
            {SHOP_COLLECTIONS.map((c) => {
              const count = products.filter(
                (p) => inCollection(p, c.value) && matches(p, "collection"),
              ).length;
              const checked = filters.collections.includes(c.value);
              return (
                <label
                  key={c.value}
                  className={`filter-option${checked ? " is-checked" : ""}${count === 0 && !checked ? " is-empty" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle("collections", c.value)}
                  />
                  <span className="filter-box" aria-hidden="true" />
                  <span className="filter-name">
                    {c.label}
                    {c.value === "new" ? <span className="filter-new">New</span> : null}
                  </span>
                  <span className="filter-count">{count}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="shop-wrapper filter-group">
          <div className="shop-heading">Categories</div>
          <div className="filter-options">
            {categories.map((c) => {
              const count = products.filter(
                (p) => p.category === c.slug && matches(p, "category"),
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
          <div className="shop-heading">Colour</div>
          <div className="filter-swatches">
            {colorsInUse.map((c) => {
              const count = products.filter(
                (p) => p.colors.includes(c.id) && matches(p, "color"),
              ).length;
              const checked = filters.colors.includes(c.id);
              return (
                <label
                  key={c.id}
                  className={`filter-swatch${checked ? " is-checked" : ""}${count === 0 && !checked ? " is-empty" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle("colors", c.id)}
                  />
                  <span
                    className="filter-swatch-dot"
                    style={{ background: c.hex }}
                    aria-hidden="true"
                  />
                  <span className="filter-swatch-name">{c.name}</span>
                  <span className="filter-swatch-count">{count}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="shop-wrapper filter-group">
          <div className="shop-heading">Size</div>
          <div className="filter-sizes">
            {sizesInUse.map((z) => {
              const count = products.filter(
                (p) => p.sizes.includes(z) && matches(p, "size"),
              ).length;
              const checked = filters.sizes.includes(z);
              return (
                <label
                  key={z}
                  className={`filter-size${checked ? " is-checked" : ""}${count === 0 && !checked ? " is-empty" : ""}`}
                  title={`${count} ${count === 1 ? "product" : "products"}`}
                >
                  <input type="checkbox" checked={checked} onChange={() => toggle("sizes", z)} />
                  {z}
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
          <div className="filter-grid-switch" role="group" aria-label="Products per row">
            {GRID_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                className={columns === n ? "is-active" : undefined}
                aria-pressed={columns === n}
                aria-label={`${n} products per row`}
                title={`${n} per row`}
                onClick={() => saveColumns(n)}
              >
                <GridIcon n={n} />
              </button>
            ))}
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
            <div role="list" className={`shop-list w-dyn-items shop-cols-${columns}`}>
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
