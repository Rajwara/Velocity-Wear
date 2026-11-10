/**
 * Scroll helpers that cooperate with the Lenis smooth-scroll instance started in
 * WebflowRuntime (it ignores plain window.scrollTo while it is animating).
 */

export function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

const locks = new Set<string>();

/** Stops page scrolling behind popups. Each caller passes its own key. */
export function lockScroll(key: string, locked: boolean) {
  if (locked) locks.add(key);
  else locks.delete(key);
  const any = locks.size > 0;
  document.documentElement.classList.toggle("scroll-locked", any);
  if (any) window.__lenis?.stop();
  else window.__lenis?.start();
}
