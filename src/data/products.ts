// Product catalogue (extracted from the Webflow CMS export).
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
    slug: "pro-football-boots",
    name: "Pro Football Boots",
    category: "football",
    image: "/assets/2c7be63021-6abccb5ce5cd25ddb73622ec_Pro-Football-Boots.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.\n",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0f2188e5d116637e0726d",
    productId: "6aa0f21746c73ee092d2b7bd",
    featured: 1,
    seo: {
      title: "Pro Football Boots | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Pro Football Boots on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "cricket-bat",
    name: "Cricket Bat",
    category: "cricket",
    image: "/assets/ce44048b56-6abccb6c31ad87fd562854a8_Cricket-Bat.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0ec77b17b5e7201441927",
    productId: "6aa0ec769e46435f50ea0046",
    featured: 2,
    seo: {
      title: "Cricket Bat | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Cricket Bat on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "football",
    name: "Football",
    category: "football",
    image: "/assets/fa42493358-6ab4dc905074e0a2841417d7_Football.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0ec2285dc4856e2e7830a",
    productId: "6aa0ec214829aeef3f7d5bef",
    featured: 3,
    seo: {
      title: "Football | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Football on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "badminton-racket",
    name: "Badminton Racket",
    category: "badminton",
    image: "/assets/43ceb5e34c-6ab4dca24637718c937359c8_Badminton-Racket.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.\n",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0ebd2d83167e10f431aa0",
    productId: "6aa0ebd2209c3215d9d4435a",
    featured: 4,
    seo: {
      title: "Badminton Racket | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Badminton Racket on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "hockey-bat",
    name: "Hockey Bat",
    category: "hockey",
    image: "/assets/13936b2b96-6ab4dcb6f9f8f4c2774fd6d3_Hockey-Bat.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.\n",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0eb618e5d116637ddd237",
    productId: "6aa0eb606ebeb100bce6d49b",
    featured: 5,
    seo: {
      title: "Hockey Bat | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Hockey Bat on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "tennis-ball",
    name: "Tennis Ball",
    category: "tennis",
    image: "/assets/e4a1e75118-6ab4dccb5a25b02a98bf7987_Tennis-Ball.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0eb12697f282ae3bc148b",
    productId: "6aa0eb11d02666b337a24392",
    featured: 6,
    seo: {
      title: "Tennis Ball | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Tennis Ball on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "cricket-ball",
    name: "Cricket Ball",
    category: "cricket",
    image: "/assets/69f0218ecc-6ab50a7be59071c85204ea69_Cricket-Ball.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.\n",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0ea0547e1155178da0191",
    productId: "6aa0ea04dc6b0c1412ca07f6",
    seo: {
      title: "Cricket Ball | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Cricket Ball on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "cricketers-helmet",
    name: "Cricketers Helmet",
    category: "cricket",
    image: "/assets/f2dca84d34-6ab50a882b317c839e6b22e3_Cricketers-Helmet.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0e958d866d24dfe7079ec",
    productId: "6aa0e958b17b5e72014333b0",
    seo: {
      title: "Cricketers Helmet | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Cricketers Helmet on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "badminton-shuttlecock",
    name: "Badminton Shuttlecock",
    category: "badminton",
    image: "/assets/71443ea9b1-6ab50a9b290e025c23fbaa22_Badminton-Shuttlecock.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0e8d3f412dea2851798c4",
    productId: "6aa0e8d388eb96ffc47db6d1",
    seo: {
      title: "Badminton Shuttlecock | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Badminton Shuttlecock on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "badminton-equipment",
    name: "Badminton Equipment",
    category: "badminton",
    image: "/assets/0b853986b9-6ab50aad348d20b1c8f72f71_Badminton-Equipment.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.\n",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0e7467a1f8ce620c6cf60",
    productId: "6aa0e745b4bc958945a55cce",
    seo: {
      title: "Badminton Equipment | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Badminton Equipment on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "racket-carry-bag",
    name: "Racket Carry Bag",
    category: "tennis",
    image: "/assets/174f571705-6ab50abcd372bc4825db6242_Cricket-Carry-Bag.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0e6b0103a27afa189ea99",
    productId: "6aa0e6afaaac254951379e53",
    seo: {
      title: "Racket Carry Bag | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Racket Carry Bag on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
  {
    slug: "dumbbells",
    name: "Dumbbells",
    category: "gym",
    image: "/assets/223a491079-6ab50a6be2a24151e883861e_Dumbbells.webp",
    price: "$139.99",
    comparePrice: "$179.99",
    excerpt:
      "Made for active play, this gear combines easy handling, dependable grip, and responsive performance to keep you moving with confidence.",
    description:
      "The Pro Smash is built for athletes who demand speed, power, and control in every game. Its lightweight construction enables quicker movement, while the balanced design precision.",
    returnPolicy:
      "Customers can return the Pro Smash if it arrives damaged, defective, or differs from the product description. Please review our return policy for eligibility, conditions, and return instructions.",
    skuId: "6aa0ea963436baa432d6193d",
    productId: "6aa0ea94b17b5e72014381a9",
    seo: {
      title: "Dumbbells | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Dumbbells on Athlor, with detailed product information, features, and specifications for sportswear, equipment, and game products online.",
    },
  },
];

export const categories: Category[] = [
  {
    slug: "cricket",
    name: "Cricket",
    title: "Cricket Products",
    seo: {
      title: "Cricket | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Cricket on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
  {
    slug: "badminton",
    name: "Badminton",
    title: "Badminton Products",
    seo: {
      title: "Badminton | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Badminton on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
  {
    slug: "football",
    name: "Football",
    title: "Football Products",
    seo: {
      title: "Football | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Football on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
  {
    slug: "tennis",
    name: "Tennis",
    title: "Tennis Products",
    seo: {
      title: "Tennis | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Tennis on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
  {
    slug: "hockey",
    name: "Hockey",
    title: "Hockey Products",
    seo: {
      title: "Hockey | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop Hockey on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
  {
    slug: "gym",
    name: "GYM",
    title: "GYM Products",
    seo: {
      title: "GYM | Athlor - Webflow Ecommerce Website Template",
      description:
        "Shop GYM on Athlor, featuring quality sportswear, equipment, and products for athletes, teams, and sports enthusiasts across popular games.",
    },
  },
];

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
