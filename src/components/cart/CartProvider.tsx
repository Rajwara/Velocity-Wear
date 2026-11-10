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
import { getProduct, priceValue, type Product } from "@/data/products";

const STORAGE_KEY = "velocity-wear-cart";
const MAX_QTY = 99;

export type CartLine = { slug: string; quantity: number };
export type CartItem = CartLine & { product: Product; lineTotal: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l): l is CartLine =>
        typeof l?.slug === "string" &&
        typeof l?.quantity === "number" &&
        l.quantity > 0 &&
        Boolean(getProduct(l.slug)),
    );
  } catch {
    return [];
  }
}

const clampQty = (n: number) => Math.max(1, Math.min(MAX_QTY, Math.floor(n) || 1));

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

/**
 * Shopping cart kept in the visitor's browser (localStorage), so it works without a
 * backend. Replace the storage with your commerce API when you connect one.
 */
export default function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Load the saved cart after hydration, and follow changes made in other tabs.
  useEffect(() => {
    const sync = () => {
      setLines(readStorage());
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

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage can be unavailable (e.g. private mode); the cart still works for this visit.
    }
  }, [lines, loaded]);

  // Lock page scroll while the cart is open.
  useEffect(() => {
    document.documentElement.classList.toggle("cart-open", isOpen);
  }, [isOpen]);

  const add = useCallback((slug: string, quantity = 1) => {
    if (!getProduct(slug)) return;
    setLines((prev) =>
      prev.some((l) => l.slug === slug)
        ? prev.map((l) =>
            l.slug === slug ? { ...l, quantity: clampQty(l.quantity + quantity) } : l,
          )
        : [...prev, { slug, quantity: clampQty(quantity) }],
    );
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.slug !== slug)
        : prev.map((l) => (l.slug === slug ? { ...l, quantity: clampQty(quantity) } : l)),
    );
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((l) => {
        const product = getProduct(l.slug);
        return product ? { ...l, product, lineTotal: priceValue(product) * l.quantity } : null;
      })
      .filter((i): i is CartItem => i !== null);
    return {
      items,
      count: items.reduce((n, i) => n + i.quantity, 0),
      subtotal: items.reduce((n, i) => n + i.lineTotal, 0),
      isOpen,
      add,
      setQuantity,
      remove,
      clear,
      open,
      close,
    };
  }, [lines, isOpen, add, setQuantity, remove, clear, open, close]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
