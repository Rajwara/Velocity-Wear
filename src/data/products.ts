// Product catalogue.
export type Product = {
  slug: string;
  name: string;
  /** slug of the product category */
  category: string;
  image: string;
  price: string;
  comparePrice: string;
  excerpt: string;
  description: string;
  returnPolicy: string;
  /** Webflow Ecommerce identifiers, used by the add-to-cart forms */
  skuId: string;
  productId: string;
  /** position in "featured" lists (shop page, home page, related products) */
  featured?: number;
  seo: { title: string; description?: string };
};

export type Category = {
  slug: string;
  name: string;
  title: string;
  seo: { title: string; description?: string };
};

export const products: Product[] = [
  {
    slug: "strike-pro-football-boots",
    name: "Strike Pro Football Boots",
    category: "football",
    image: "/images/products/strike-pro-football-boots.webp",
    price: "$149.99",
    comparePrice: "$189.99",
    excerpt:
      "Low-profile firm-ground boots with a grippy textured upper and a lightweight plate built for quick cuts and clean strikes.",
    description:
      "The Strike Pro pairs a soft synthetic upper with a stiff, lightweight soleplate and conical studs for fast acceleration on firm natural grass. A snug collar locks the foot in place, while the textured strike zone gives you extra control on the ball.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0f2188e5d116637e0726d",
    productId: "6aa0f21746c73ee092d2b7bd",
    featured: 1,
    seo: {
      title: "Strike Pro Football Boots | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Strike Pro Football Boots from Velocity Wear. Low-profile firm-ground boots with a grippy textured upper and a lightweight plate built for quick cuts and clean strikes.",
    },
  },
  {
    slug: "aero-running-tee",
    name: "Aero Running Tee",
    category: "running",
    image: "/images/products/aero-running-tee.webp",
    price: "$39.99",
    comparePrice: "$49.99",
    excerpt:
      "A featherlight running tee with breathable mesh zones and a reflective back-neck detail for early and late runs.",
    description:
      "Made from a quick-drying recycled polyester knit, the Aero Tee moves sweat away from your skin and dries fast. Perforated side panels add airflow where you need it most, flat seams prevent chafing, and a reflective lime detail keeps you visible in low light.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0ec77b17b5e7201441927",
    productId: "6aa0ec769e46435f50ea0046",
    featured: 2,
    seo: {
      title: "Aero Running Tee | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Aero Running Tee from Velocity Wear. A featherlight running tee with breathable mesh zones and a reflective back-neck detail for early and late runs.",
    },
  },
  {
    slug: "club-match-jersey",
    name: "Club Match Jersey",
    category: "football",
    image: "/images/products/club-match-jersey.webp",
    price: "$59.99",
    comparePrice: "$74.99",
    excerpt:
      "An engineered-knit match jersey that stays light when the game gets intense, finished with a lime collar trim.",
    description:
      "The Club Match Jersey uses an engineered knit that is more open where you heat up and denser where you need structure. It is cut for a free range of motion and finished with a clean V-neck and lime trim. Ready for your team's numbers and badges.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0ec2285dc4856e2e7830a",
    productId: "6aa0ec214829aeef3f7d5bef",
    featured: 3,
    seo: {
      title: "Club Match Jersey | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Club Match Jersey from Velocity Wear. An engineered-knit match jersey that stays light when the game gets intense, finished with a lime collar trim.",
    },
  },
  {
    slug: "pace-running-shoes",
    name: "Pace Running Shoes",
    category: "running",
    image: "/images/products/pace-running-shoes.webp",
    price: "$129.99",
    comparePrice: "$159.99",
    excerpt:
      "Everyday running shoes with a breathable knit upper and a soft, springy foam midsole for long, comfortable miles.",
    description:
      "The Pace combines a sock-like knit upper with a responsive foam midsole that cushions every landing and returns energy into each stride. A durable rubber outsole grips wet and dry roads, and the padded heel tab makes them easy to pull on.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0ebd2d83167e10f431aa0",
    productId: "6aa0ebd2209c3215d9d4435a",
    featured: 4,
    seo: {
      title: "Pace Running Shoes | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Pace Running Shoes from Velocity Wear. Everyday running shoes with a breathable knit upper and a soft, springy foam midsole for long, comfortable miles.",
    },
  },
  {
    slug: "thermal-quarter-zip",
    name: "Thermal Quarter-Zip",
    category: "outerwear",
    image: "/images/products/thermal-quarter-zip.webp",
    price: "$79.99",
    comparePrice: "$99.99",
    excerpt:
      "A warm brushed-fleece mid layer with a quarter zip for easy temperature control on cold runs and training days.",
    description:
      "The Thermal Quarter-Zip has a soft brushed interior that traps heat without bulk, and a smooth exterior that layers easily under a shell. Thumbholes keep the sleeves in place and the high collar zips up to block the wind.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0eb618e5d116637ddd237",
    productId: "6aa0eb606ebeb100bce6d49b",
    featured: 5,
    seo: {
      title: "Thermal Quarter-Zip | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Thermal Quarter-Zip from Velocity Wear. A warm brushed-fleece mid layer with a quarter zip for easy temperature control on cold runs and training days.",
    },
  },
  {
    slug: "court-polo-shirt",
    name: "Court Polo Shirt",
    category: "tennis",
    image: "/images/products/court-polo-shirt.webp",
    price: "$54.99",
    comparePrice: "$69.99",
    excerpt:
      "A fitted performance polo with a two-button placket and lime tipping, made to stay cool and sharp on court.",
    description:
      "The Court Polo is made from a smooth, stretchy piqué that wicks sweat and dries quickly through long rallies. A tailored athletic fit, soft collar and lime tipping keep you looking sharp from the first serve to match point.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0eb12697f282ae3bc148b",
    productId: "6aa0eb11d02666b337a24392",
    featured: 6,
    seo: {
      title: "Court Polo Shirt | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Court Polo Shirt from Velocity Wear. A fitted performance polo with a two-button placket and lime tipping, made to stay cool and sharp on court.",
    },
  },
  {
    slug: "seamless-sports-bra",
    name: "Seamless Sports Bra",
    category: "training",
    image: "/images/products/seamless-sports-bra.webp",
    price: "$44.99",
    comparePrice: "$54.99",
    excerpt:
      "A medium-support seamless sports bra with a racerback and a soft ribbed band for training and gym sessions.",
    description:
      "Knitted in one piece with no side seams, the Seamless Sports Bra feels smooth against the skin and moves with you. A supportive ribbed band, removable pads and a racerback make it ideal for strength training, studio classes and runs.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0e8d3f412dea2851798c4",
    productId: "6aa0e8d388eb96ffc47db6d1",
    seo: {
      title: "Seamless Sports Bra | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Seamless Sports Bra from Velocity Wear. A medium-support seamless sports bra with a racerback and a soft ribbed band for training and gym sessions.",
    },
  },
  {
    slug: "flex-training-leggings",
    name: "Flex Training Leggings",
    category: "training",
    image: "/images/products/flex-training-leggings.webp",
    price: "$69.99",
    comparePrice: "$84.99",
    excerpt:
      "High-waisted, squat-proof training leggings with a sculpting matte fabric and a hidden waistband pocket.",
    description:
      "The Flex Leggings are made from a four-way-stretch fabric that supports without restricting. The high waistband stays in place through squats and lunges, a hidden pocket holds a key or card, and reflective lime tabs sit at the hem.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0e7467a1f8ce620c6cf60",
    productId: "6aa0e745b4bc958945a55cce",
    seo: {
      title: "Flex Training Leggings | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Flex Training Leggings from Velocity Wear. High-waisted, squat-proof training leggings with a sculpting matte fabric and a hidden waistband pocket.",
    },
  },
  {
    slug: "ace-pleated-tennis-skirt",
    name: "Ace Pleated Tennis Skirt",
    category: "tennis",
    image: "/images/products/ace-pleated-tennis-skirt.webp",
    price: "$49.99",
    comparePrice: "$59.99",
    excerpt:
      "A classic pleated tennis skirt with built-in shorts, a lime waistband stripe and a ball pocket.",
    description:
      "The Ace skirt swings freely with every movement while the built-in shorts give you full coverage and a secure ball pocket. The soft, wide waistband sits comfortably through every match and the fabric dries fast.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0e958d866d24dfe7079ec",
    productId: "6aa0e958b17b5e72014333b0",
    seo: {
      title: "Ace Pleated Tennis Skirt | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Ace Pleated Tennis Skirt from Velocity Wear. A classic pleated tennis skirt with built-in shorts, a lime waistband stripe and a ball pocket.",
    },
  },
  {
    slug: "storm-shell-jacket",
    name: "Storm Shell Jacket",
    category: "outerwear",
    image: "/images/products/storm-shell-jacket.webp",
    price: "$139.99",
    comparePrice: "$169.99",
    excerpt:
      "A lightweight waterproof running shell with taped seams, an adjustable hood and reflective lime details.",
    description:
      "The Storm Shell keeps rain out and lets heat escape thanks to a breathable waterproof membrane and taped seams. It packs into its own pocket, has an adjustable hood that stays put when you run, and lime zip pullers that are easy to grab with cold hands.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0ea0547e1155178da0191",
    productId: "6aa0ea04dc6b0c1412ca07f6",
    seo: {
      title: "Storm Shell Jacket | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Storm Shell Jacket from Velocity Wear. A lightweight waterproof running shell with taped seams, an adjustable hood and reflective lime details.",
    },
  },
  {
    slug: "training-duffel-bag",
    name: "Training Duffel Bag",
    category: "accessories",
    image: "/images/products/training-duffel-bag.webp",
    price: "$69.99",
    comparePrice: "$89.99",
    excerpt:
      "A tough ripstop duffel with a separate shoe compartment, padded strap and plenty of room for your kit.",
    description:
      "The Training Duffel is made from water-resistant ripstop fabric with a ventilated shoe compartment to keep clean and used kit apart. Inside and outside pockets organise your essentials, and the padded shoulder strap makes it easy to carry.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0e6b0103a27afa189ea99",
    productId: "6aa0e6afaaac254951379e53",
    seo: {
      title: "Training Duffel Bag | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Training Duffel Bag from Velocity Wear. A tough ripstop duffel with a separate shoe compartment, padded strap and plenty of room for your kit.",
    },
  },
  {
    slug: "performance-cap",
    name: "Performance Cap",
    category: "accessories",
    image: "/images/products/performance-cap.webp",
    price: "$29.99",
    comparePrice: "$34.99",
    excerpt:
      "A lightweight running cap with laser-cut ventilation, a sweat-wicking band and a lime under-brim.",
    description:
      "The Performance Cap keeps the sun out of your eyes and the sweat off your face. Laser-cut panels let heat escape, a soft sweatband wicks moisture and the adjustable strap gives a secure fit on every run.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    skuId: "6aa0ea963436baa432d6193d",
    productId: "6aa0ea94b17b5e72014381a9",
    seo: {
      title: "Performance Cap | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Performance Cap from Velocity Wear. A lightweight running cap with laser-cut ventilation, a sweat-wicking band and a lime under-brim.",
    },
  },
];

export const categories: Category[] = [
  {
    slug: "running",
    name: "Running",
    title: "Running Collection",
    seo: {
      title: "Running | Velocity Wear - Performance Sportswear",
      description:
        "Shop running sportswear from Velocity Wear. Lightweight tees, shorts and running shoes built for every mile.",
    },
  },
  {
    slug: "training",
    name: "Training",
    title: "Training Collection",
    seo: {
      title: "Training | Velocity Wear - Performance Sportswear",
      description:
        "Shop training sportswear from Velocity Wear. Supportive sports bras, leggings and tops for the gym and studio.",
    },
  },
  {
    slug: "football",
    name: "Football",
    title: "Football Collection",
    seo: {
      title: "Football | Velocity Wear - Performance Sportswear",
      description:
        "Shop football sportswear from Velocity Wear. Boots and match kit made for speed and control.",
    },
  },
  {
    slug: "tennis",
    name: "Tennis",
    title: "Tennis Collection",
    seo: {
      title: "Tennis | Velocity Wear - Performance Sportswear",
      description:
        "Shop tennis sportswear from Velocity Wear. Polos and skirts that stay cool and move with you on court.",
    },
  },
  {
    slug: "outerwear",
    name: "Outerwear",
    title: "Outerwear Collection",
    seo: {
      title: "Outerwear | Velocity Wear - Performance Sportswear",
      description:
        "Shop outerwear sportswear from Velocity Wear. Waterproof shells and warm layers for training in any weather.",
    },
  },
  {
    slug: "accessories",
    name: "Accessories",
    title: "Accessories Collection",
    seo: {
      title: "Accessories | Velocity Wear - Performance Sportswear",
      description:
        "Shop accessories sportswear from Velocity Wear. Caps, bags and essentials to complete your kit.",
    },
  },
];

/** Numeric price, e.g. "$149.99" -> 149.99 */
export function priceValue(product: Product): number {
  return Number(product.price.replace(/[^0-9.]/g, ""));
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Returns products in the order of the given slugs. */
export function getProducts(slugs: string[]): Product[] {
  return slugs.map((s) => getProduct(s)).filter((p): p is Product => Boolean(p));
}

export function getFeaturedProducts(): Product[] {
  return products
    .filter((p) => p.featured !== undefined)
    .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
}

export function getRelatedProducts(slug: string): Product[] {
  return getFeaturedProducts().filter((p) => p.slug !== slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}
