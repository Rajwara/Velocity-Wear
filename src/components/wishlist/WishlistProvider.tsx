"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/data/products";

const STORAGE_KEY = "velocity-wear-wishlist";

type WishlistValue = {
  /** saved product slugs, most recently saved first */
  slugs: string[];
  count: number;
  /** false until the saved list has been read from the browser */
  loaded: boolean;
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistValue | null>(null);

function read(): string[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed)
      ? parsed.filter((s): s is string => typeof s === "string" && Boolean(getProduct(s)))
      : [];
  } catch {
    return [];
  }
}

function write(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // storage unavailable (private mode): the list lasts for this visit only
  }
}

/** Wishlist kept in the visitor's browser (localStorage), shared across pages and tabs. */
export default function WishlistProvider({ children }: { children: ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const sync = () => {
      setSlugs(read());
      setLoaded(true);
    };
    const id = window.setTimeout(sync, 0);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) sync();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const update = useCallback((fn: (prev: string[]) => string[]) => {
    setSlugs((prev) => {
      const next = fn(prev);
      write(next);
      return next;
    });
  }, []);

  const toggle = useCallback(
    (slug: string) =>
      update((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [slug, ...prev])),
    [update],
  );
  const remove = useCallback(
    (slug: string) => update((prev) => prev.filter((s) => s !== slug)),
    [update],
  );
  const clear = useCallback(() => update(() => []), [update]);

  const value = useMemo<WishlistValue>(
    () => ({
      slugs,
      count: slugs.length,
      loaded,
      has: (slug) => slugs.includes(slug),
      toggle,
      remove,
      clear,
    }),
    [slugs, loaded, toggle, remove, clear],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside <WishlistProvider>");
  return ctx;
}
