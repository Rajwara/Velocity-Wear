// Product catalogue.
export type Product = {
  slug: string;
  name: string;
  /** slug of the product category */
  category: string;
  /** colour ids, see COLORS */
  colors: string[];
  /** sizes the product comes in (empty for items without sizes, e.g. bottles) */
  sizes: string[];
  /** date the product was added to the shop (YYYY-MM-DD), used for "New arrivals" */
  addedAt: string;
  image: string;
  price: string;
  comparePrice: string;
  excerpt: string;
  description: string;
  returnPolicy: string;
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
    colors: ["black"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    addedAt: "2026-09-08",
    image: "/images/products/strike-pro-football-boots.webp",
    price: "$149.99",
    comparePrice: "$189.99",
    excerpt:
      "Low-profile firm-ground boots with a grippy textured upper and a lightweight plate built for quick cuts and clean strikes.",
    description:
      "The Strike Pro pairs a soft synthetic upper with a stiff, lightweight soleplate and conical studs for fast acceleration on firm natural grass. A snug collar locks the foot in place, while the textured strike zone gives you extra control on the ball.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["charcoal"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    addedAt: "2026-09-10",
    image: "/images/products/aero-running-tee.webp",
    price: "$39.99",
    comparePrice: "$49.99",
    excerpt:
      "A featherlight running tee with breathable mesh zones and a reflective back-neck detail for early and late runs.",
    description:
      "Made from a quick-drying recycled polyester knit, the Aero Tee moves sweat away from your skin and dries fast. Perforated side panels add airflow where you need it most, flat seams prevent chafing, and a reflective lime detail keeps you visible in low light.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    addedAt: "2026-09-12",
    image: "/images/products/club-match-jersey.webp",
    price: "$59.99",
    comparePrice: "$74.99",
    excerpt:
      "An engineered-knit match jersey that stays light when the game gets intense, finished with a lime collar trim.",
    description:
      "The Club Match Jersey uses an engineered knit that is more open where you heat up and denser where you need structure. It is cut for a free range of motion and finished with a clean V-neck and lime trim. Ready for your team's numbers and badges.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["cream"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    addedAt: "2026-09-15",
    image: "/images/products/pace-running-shoes.webp",
    price: "$129.99",
    comparePrice: "$159.99",
    excerpt:
      "Everyday running shoes with a breathable knit upper and a soft, springy foam midsole for long, comfortable miles.",
    description:
      "The Pace combines a sock-like knit upper with a responsive foam midsole that cushions every landing and returns energy into each stride. A durable rubber outsole grips wet and dry roads, and the padded heel tab makes them easy to pull on.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    addedAt: "2026-09-18",
    image: "/images/products/thermal-quarter-zip.webp",
    price: "$79.99",
    comparePrice: "$99.99",
    excerpt:
      "A warm brushed-fleece mid layer with a quarter zip for easy temperature control on cold runs and training days.",
    description:
      "The Thermal Quarter-Zip has a soft brushed interior that traps heat without bulk, and a smooth exterior that layers easily under a shell. Thumbholes keep the sleeves in place and the high collar zips up to block the wind.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["cream"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    addedAt: "2026-09-20",
    image: "/images/products/court-polo-shirt.webp",
    price: "$54.99",
    comparePrice: "$69.99",
    excerpt:
      "A fitted performance polo with a two-button placket and lime tipping, made to stay cool and sharp on court.",
    description:
      "The Court Polo is made from a smooth, stretchy piqué that wicks sweat and dries quickly through long rallies. A tailored athletic fit, soft collar and lime tipping keep you looking sharp from the first serve to match point.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    addedAt: "2026-09-24",
    image: "/images/products/seamless-sports-bra.webp",
    price: "$44.99",
    comparePrice: "$54.99",
    excerpt:
      "A medium-support seamless sports bra with a racerback and a soft ribbed band for training and gym sessions.",
    description:
      "Knitted in one piece with no side seams, the Seamless Sports Bra feels smooth against the skin and moves with you. A supportive ribbed band, removable pads and a racerback make it ideal for strength training, studio classes and runs.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    addedAt: "2026-09-26",
    image: "/images/products/flex-training-leggings.webp",
    price: "$69.99",
    comparePrice: "$84.99",
    excerpt:
      "High-waisted, squat-proof training leggings with a sculpting matte fabric and a hidden waistband pocket.",
    description:
      "The Flex Leggings are made from a four-way-stretch fabric that supports without restricting. The high waistband stays in place through squats and lunges, a hidden pocket holds a key or card, and reflective lime tabs sit at the hem.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["white"],
    sizes: ["XS", "S", "M", "L", "XL"],
    addedAt: "2026-09-29",
    image: "/images/products/ace-pleated-tennis-skirt.webp",
    price: "$49.99",
    comparePrice: "$59.99",
    excerpt:
      "A classic pleated tennis skirt with built-in shorts, a lime waistband stripe and a ball pocket.",
    description:
      "The Ace skirt swings freely with every movement while the built-in shorts give you full coverage and a secure ball pocket. The soft, wide waistband sits comfortably through every match and the fabric dries fast.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
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
    colors: ["grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    addedAt: "2026-10-02",
    image: "/images/products/storm-shell-jacket.webp",
    price: "$139.99",
    comparePrice: "$169.99",
    excerpt:
      "A lightweight waterproof running shell with taped seams, an adjustable hood and reflective lime details.",
    description:
      "The Storm Shell keeps rain out and lets heat escape thanks to a breathable waterproof membrane and taped seams. It packs into its own pocket, has an adjustable hood that stays put when you run, and lime zip pullers that are easy to grab with cold hands.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Storm Shell Jacket | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Storm Shell Jacket from Velocity Wear. A lightweight waterproof running shell with taped seams, an adjustable hood and reflective lime details.",
    },
  },
  {
    slug: "training-duffel-bag",
    name: "Training Duffel Bag",
    category: "bags",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-10-05",
    image: "/images/products/training-duffel-bag.webp",
    price: "$69.99",
    comparePrice: "$89.99",
    excerpt:
      "A tough ripstop duffel with a separate shoe compartment, padded strap and plenty of room for your kit.",
    description:
      "The Training Duffel is made from water-resistant ripstop fabric with a ventilated shoe compartment to keep clean and used kit apart. Inside and outside pockets organise your essentials, and the padded shoulder strap makes it easy to carry.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Training Duffel Bag | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Training Duffel Bag from Velocity Wear. A tough ripstop duffel with a separate shoe compartment, padded strap and plenty of room for your kit.",
    },
  },
  {
    slug: "performance-cap",
    name: "Performance Cap",
    category: "caps",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-10-08",
    image: "/images/products/performance-cap.webp",
    price: "$29.99",
    comparePrice: "$34.99",
    excerpt:
      "A lightweight running cap with laser-cut ventilation, a sweat-wicking band and a lime under-brim.",
    description:
      "The Performance Cap keeps the sun out of your eyes and the sweat off your face. Laser-cut panels let heat escape, a soft sweatband wicks moisture and the adjustable strap gives a secure fit on every run.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Performance Cap | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Performance Cap from Velocity Wear. A lightweight running cap with laser-cut ventilation, a sweat-wicking band and a lime under-brim.",
    },
  },
  {
    slug: "velocity-trucker-cap",
    name: "Velocity Trucker Cap",
    category: "caps",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-11-01",
    image: "/images/products/velocity-trucker-cap.webp",
    price: "$27.99",
    comparePrice: "$34.99",
    excerpt:
      "A structured trucker cap with a breathable mesh back, curved brim and lime snapback closure.",
    description:
      "The Velocity Trucker Cap has a firm five-panel front, a cool mesh back that lets heat escape and a moisture-wicking sweatband. The curved brim keeps the sun off your face and the snapback closure adjusts for a secure fit, on and off the track.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Velocity Trucker Cap | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Velocity Trucker Cap from Velocity Wear. A structured trucker cap with a breathable mesh back, curved brim and lime snapback closure.",
    },
  },
  {
    slug: "packable-run-cap",
    name: "Packable Run Cap",
    category: "caps",
    colors: ["cream"],
    sizes: ["One Size"],
    addedAt: "2026-11-01",
    image: "/images/products/packable-run-cap.webp",
    price: "$24.99",
    comparePrice: "$29.99",
    excerpt:
      "An ultralight, unstructured running cap that dries fast and folds flat into any pocket.",
    description:
      "Made from a featherweight quick-dry fabric, the Packable Run Cap has no stiff panels, so it can be folded into a pocket or waist pack and pops back into shape. Reflective details keep you visible in low light, and the elastic strap stays put on every run.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Packable Run Cap | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Packable Run Cap from Velocity Wear. An ultralight, unstructured running cap that dries fast and folds flat into any pocket.",
    },
  },
  {
    slug: "insulated-steel-bottle",
    name: "Insulated Steel Bottle 750ml",
    category: "water-bottles",
    colors: ["black"],
    sizes: [],
    addedAt: "2026-11-02",
    image: "/images/products/insulated-steel-bottle.webp",
    price: "$34.99",
    comparePrice: "$39.99",
    excerpt:
      "A double-wall stainless steel bottle that keeps drinks cold for 24 hours and hot for 12.",
    description:
      "The Insulated Steel Bottle has vacuum-sealed double walls to keep water ice-cold through long sessions. The leak-proof lid has a lime carry loop, the powder-coated finish won't sweat or slip, and the wide mouth fits ice cubes and is easy to clean.",
    returnPolicy:
      "Unused items in their original packaging can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Insulated Steel Bottle 750ml | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Insulated Steel Bottle 750ml from Velocity Wear. A double-wall stainless steel bottle that keeps drinks cold for 24 hours and hot for 12.",
    },
  },
  {
    slug: "squeeze-sports-bottle",
    name: "Squeeze Sports Bottle 600ml",
    category: "water-bottles",
    colors: ["grey"],
    sizes: [],
    addedAt: "2026-11-02",
    image: "/images/products/squeeze-sports-bottle.webp",
    price: "$14.99",
    comparePrice: "$19.99",
    excerpt:
      "A soft, lightweight squeeze bottle with a high-flow valve for quick drinks on the move.",
    description:
      "The Squeeze Sports Bottle is made from BPA-free, odour-resistant plastic that's easy to squeeze mid-run or mid-set. The self-sealing high-flow valve won't leak in your bag, and the slim shape fits bike cages and bag pockets.",
    returnPolicy:
      "Unused items in their original packaging can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Squeeze Sports Bottle 600ml | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Squeeze Sports Bottle 600ml from Velocity Wear. A soft, lightweight squeeze bottle with a high-flow valve for quick drinks on the move.",
    },
  },
  {
    slug: "protein-shaker-bottle",
    name: "Protein Shaker Bottle 700ml",
    category: "water-bottles",
    colors: ["black"],
    sizes: [],
    addedAt: "2026-11-03",
    image: "/images/products/protein-shaker-bottle.webp",
    price: "$19.99",
    comparePrice: "$24.99",
    excerpt:
      "A leak-proof shaker with a stainless mixing ball for smooth, lump-free protein shakes.",
    description:
      "The Protein Shaker Bottle has a screw-on lid with a locking flip cap, so nothing leaks into your gym bag. The stainless steel mixing ball blends powders smoothly, and the BPA-free bottle is dishwasher safe.",
    returnPolicy:
      "Unused items in their original packaging can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Protein Shaker Bottle 700ml | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Protein Shaker Bottle 700ml from Velocity Wear. A leak-proof shaker with a stainless mixing ball for smooth, lump-free protein shakes.",
    },
  },
  {
    slug: "everyday-gym-backpack",
    name: "Everyday Gym Backpack",
    category: "bags",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-11-04",
    image: "/images/products/everyday-gym-backpack.webp",
    price: "$79.99",
    comparePrice: "$99.99",
    excerpt:
      "A 25L backpack with a padded laptop sleeve and a ventilated shoe compartment for gym-to-work days.",
    description:
      "The Everyday Gym Backpack carries everything from your laptop to your training kit. A separate ventilated compartment keeps shoes and used kit away from everything else, the padded straps stay comfortable all day, and the water-resistant fabric shrugs off rain.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Everyday Gym Backpack | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Everyday Gym Backpack from Velocity Wear. A 25L backpack with a padded laptop sleeve and a ventilated shoe compartment for gym-to-work days.",
    },
  },
  {
    slug: "running-waist-pack",
    name: "Running Waist Pack",
    category: "bags",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-11-05",
    image: "/images/products/running-waist-pack.webp",
    price: "$29.99",
    comparePrice: "$34.99",
    excerpt: "A slim, bounce-free waist pack that holds your phone, keys and gels while you run.",
    description:
      "The Running Waist Pack sits close to your body with a soft stretch belt that doesn't bounce or chafe. Zipped pockets fit the largest phones, keys and energy gels, and reflective details help you stay visible after dark.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Running Waist Pack | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Running Waist Pack from Velocity Wear. A slim, bounce-free waist pack that holds your phone, keys and gels while you run.",
    },
  },
  {
    slug: "drawstring-gym-sack",
    name: "Drawstring Gym Sack",
    category: "bags",
    colors: ["charcoal"],
    sizes: ["One Size"],
    addedAt: "2026-11-05",
    image: "/images/products/drawstring-gym-sack.webp",
    price: "$19.99",
    comparePrice: "$24.99",
    excerpt: "A lightweight drawstring bag for quick trips to the gym, pitch or pool.",
    description:
      "The Drawstring Gym Sack is made from water-resistant ripstop with tough corner reinforcements and smooth-running cords. A zipped outer pocket keeps your phone and keys separate, and it packs flat when you don't need it.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Drawstring Gym Sack | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Drawstring Gym Sack from Velocity Wear. A lightweight drawstring bag for quick trips to the gym, pitch or pool.",
    },
  },
  {
    slug: "performance-crew-socks",
    name: "Performance Crew Socks (3 Pack)",
    category: "accessories",
    colors: ["black", "grey", "white"],
    sizes: ["S/M", "L/XL"],
    addedAt: "2026-11-06",
    image: "/images/products/performance-crew-socks.webp",
    price: "$24.99",
    comparePrice: "$29.99",
    excerpt: "Cushioned, breathable crew socks with arch support for running and training.",
    description:
      "These Performance Crew Socks have targeted cushioning at the heel and toe, a supportive arch band and breathable mesh zones that keep feet cool and dry. Seamless toes prevent rubbing. The pack includes black, grey and white pairs.",
    returnPolicy:
      "For hygiene reasons, this item can only be returned unopened in its original packaging within 30 days. See our return policy for details.",
    seo: {
      title: "Performance Crew Socks (3 Pack) | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Performance Crew Socks (3 Pack) from Velocity Wear. Cushioned, breathable crew socks with arch support for running and training.",
    },
  },
  {
    slug: "microfibre-gym-towel",
    name: "Microfibre Gym Towel",
    category: "accessories",
    colors: ["charcoal"],
    sizes: ["One Size"],
    addedAt: "2026-11-07",
    image: "/images/products/microfibre-gym-towel.webp",
    price: "$19.99",
    comparePrice: "$24.99",
    excerpt: "A soft, super-absorbent microfibre towel that dries fast and packs small.",
    description:
      "The Microfibre Gym Towel absorbs sweat quickly and dries far faster than cotton, so it's ready for your next session. It folds small into any bag and has a lime trim and hanging loop.",
    returnPolicy:
      "Unused items in their original packaging can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Microfibre Gym Towel | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Microfibre Gym Towel from Velocity Wear. A soft, super-absorbent microfibre towel that dries fast and packs small.",
    },
  },
  {
    slug: "headband-wristband-set",
    name: "Headband & Wristband Set",
    category: "accessories",
    colors: ["black"],
    sizes: ["One Size"],
    addedAt: "2026-11-08",
    image: "/images/products/headband-wristband-set.webp",
    price: "$14.99",
    comparePrice: "$19.99",
    excerpt:
      "A soft terry headband and two wristbands to keep sweat out of your eyes and off your hands.",
    description:
      "This set includes one headband and two wristbands made from soft, absorbent terry with a stretchy fit that stays in place. Perfect for tennis, running and high-intensity training.",
    returnPolicy:
      "For hygiene reasons, this item can only be returned unopened in its original packaging within 30 days. See our return policy for details.",
    seo: {
      title: "Headband & Wristband Set | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Headband & Wristband Set from Velocity Wear. A soft terry headband and two wristbands to keep sweat out of your eyes and off your hands.",
    },
  },
  {
    slug: "touchscreen-running-gloves",
    name: "Touchscreen Running Gloves",
    category: "accessories",
    colors: ["black"],
    sizes: ["S/M", "L/XL"],
    addedAt: "2026-11-09",
    image: "/images/products/touchscreen-running-gloves.webp",
    price: "$24.99",
    comparePrice: "$29.99",
    excerpt:
      "Lightweight thermal running gloves with touchscreen fingertips and reflective details.",
    description:
      "The Touchscreen Running Gloves keep your hands warm on cold runs without bulk. Conductive fingertips let you use your phone without taking them off, a silicone palm grip holds your phone securely, and reflective details add visibility.",
    returnPolicy:
      "Unworn items with tags attached can be returned within 30 days for a full refund or exchange. See our return policy for details.",
    seo: {
      title: "Touchscreen Running Gloves | Velocity Wear - Performance Sportswear",
      description:
        "Shop the Touchscreen Running Gloves from Velocity Wear. Lightweight thermal running gloves with touchscreen fingertips and reflective details.",
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
    slug: "caps",
    name: "Caps",
    title: "Caps Collection",
    seo: {
      title: "Caps | Velocity Wear - Performance Sportswear",
      description:
        "Shop caps from Velocity Wear. Lightweight running caps and trucker caps that keep the sun off and the sweat away.",
    },
  },
  {
    slug: "water-bottles",
    name: "Water Bottles",
    title: "Water Bottles Collection",
    seo: {
      title: "Water Bottles | Velocity Wear - Performance Sportswear",
      description:
        "Shop water bottles from Velocity Wear. Insulated, squeeze and shaker bottles to keep you hydrated through every session.",
    },
  },
  {
    slug: "bags",
    name: "Bags",
    title: "Bags Collection",
    seo: {
      title: "Bags | Velocity Wear - Performance Sportswear",
      description:
        "Shop bags from Velocity Wear. Gym backpacks, duffels, waist packs and drawstring bags for every kind of training.",
    },
  },
  {
    slug: "accessories",
    name: "Accessories",
    title: "Accessories Collection",
    seo: {
      title: "Accessories | Velocity Wear - Performance Sportswear",
      description:
        "Shop accessories from Velocity Wear. Socks, towels, sweatbands and gloves to complete your kit.",
    },
  },
];

/** Colours used by products, in the order they appear in the shop filters. */
export const COLORS = [
  { id: "black", name: "Black", hex: "#0e0e0e" },
  { id: "charcoal", name: "Charcoal", hex: "#3d3d3d" },
  { id: "grey", name: "Grey", hex: "#9a9a9a" },
  { id: "white", name: "White", hex: "#ffffff" },
  { id: "cream", name: "Cream", hex: "#efe9d6" },
] as const;

/** Order sizes are listed in. */
export const SIZE_ORDER = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "S/M",
  "L/XL",
  "UK 6",
  "UK 7",
  "UK 8",
  "UK 9",
  "UK 10",
  "UK 11",
  "One Size",
];

/** Products added within this many days of the newest product count as "New arrivals". */
export const NEW_ARRIVAL_DAYS = 30;

export function isNewArrival(product: Product, all: Product[] = products): boolean {
  const newest = Math.max(...all.map((p) => Date.parse(p.addedAt)));
  return newest - Date.parse(product.addedAt) <= NEW_ARRIVAL_DAYS * 24 * 60 * 60 * 1000;
}

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
