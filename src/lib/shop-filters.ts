import { COLORS, SIZE_ORDER, type Category, type Product, priceValue } from "@/data/products";

export type ShopSort = "featured" | "newest" | "price-asc" | "price-desc" | "name-asc";

export const SHOP_SORTS: { value: ShopSort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A to Z" },
];

/** "Collection" filter: featured products and/or new arrivals. */
export type ShopCollection = "featured" | "new";

export const SHOP_COLLECTIONS: { value: ShopCollection; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "New arrivals" },
];

export type ShopFilterState = {
  query: string;
  categories: string[];
  collections: ShopCollection[];
  colors: string[];
  sizes: string[];
  min: number;
  max: number;
  sort: ShopSort;
};

/** Lowest and highest price, rounded out to the nearest $10. */
export function priceBounds(products: Product[]) {
  const prices = products.map(priceValue);
  return {
    min: Math.floor(Math.min(...prices) / 10) * 10,
    max: Math.ceil(Math.max(...prices) / 10) * 10,
  };
}

type Params = Record<string, string | string[] | undefined>;

/** Reads ?q=&category=a,b&show=featured,new&color=&size=&min=&max=&sort= into a filter state (invalid values fall back to defaults). */
export function parseShopFilters(
  params: Params,
  products: Product[],
  categories: Category[],
): ShopFilterState {
  const get = (key: string) => {
    const v = params[key];
    return Array.isArray(v) ? v[0] : v;
  };
  const bounds = priceBounds(products);
  const num = (key: string, fallback: number) => {
    const raw = get(key);
    const v = Number(raw);
    return raw !== undefined && raw !== "" && Number.isFinite(v)
      ? Math.min(bounds.max, Math.max(bounds.min, v))
      : fallback;
  };
  const sort = get("sort") as ShopSort | undefined;
  let min = num("min", bounds.min);
  let max = num("max", bounds.max);
  if (min > max) [min, max] = [max, min];
  const list = (key: string, allowed: readonly string[]) =>
    (get(key) ?? "").split(",").filter((v, i, all) => allowed.includes(v) && all.indexOf(v) === i);
  return {
    query: get("q") ?? "",
    collections: list(
      "show",
      SHOP_COLLECTIONS.map((c) => c.value),
    ) as ShopCollection[],
    colors: list(
      "color",
      COLORS.map((c) => c.id),
    ),
    sizes: list("size", SIZE_ORDER),
    categories: (get("category") ?? "")
      .split(",")
      .filter((c) => categories.some((cat) => cat.slug === c)),
    min,
    max,
    sort: sort && SHOP_SORTS.some((s) => s.value === sort) ? sort : "featured",
  };
}

/** Builds the query string for a filter state (defaults are left out). */
export function shopFiltersToQuery(f: ShopFilterState, products: Product[]) {
  const bounds = priceBounds(products);
  const params = new URLSearchParams();
  if (f.query) params.set("q", f.query);
  if (f.categories.length) params.set("category", f.categories.join(","));
  if (f.collections.length) params.set("show", f.collections.join(","));
  if (f.colors.length) params.set("color", f.colors.join(","));
  if (f.sizes.length) params.set("size", f.sizes.join(","));
  if (f.min > bounds.min) params.set("min", String(f.min));
  if (f.max < bounds.max) params.set("max", String(f.max));
  if (f.sort !== "featured") params.set("sort", f.sort);
  return params.toString();
}
