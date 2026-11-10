/** Attribute names the Webflow interactions use to pick elements to animate. */
export type Animation = "card-animation" | "text-animation" | "hero-text";

export function animationAttr(animation?: Animation): Record<string, string> {
  return animation ? { [animation]: "" } : {};
}
