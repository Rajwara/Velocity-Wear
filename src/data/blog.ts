// Blog posts (newest first).
export type Post = {
  slug: string;
  title: string;
  /** slug of the blog category */
  category: string;
  date: string;
  author: string;
  image: string;
  thumbnail: string;
  /** rich text body as HTML */
  content: string;
  seo: { title: string; description?: string };
};

export type BlogCategory = {
  slug: string;
  name: string;
  seo: { title: string; description?: string };
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-the-right-running-shoes",
    title: "How to Choose the Right Running Shoes",
    category: "guides",
    date: "November 3, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/running-shoes-featured.webp",
    thumbnail: "/images/blog/running-shoes-thumbnail.webp",
    content:
      '<p><em>Your shoes are the most important piece of running kit. Here is how to find a pair that feels great from the first mile to the last.</em></p><h2>Know your running</h2><p>Think about where and how far you run. Road runners need cushioning and a durable outsole, trail runners need grip and protection, and if you mix both, a versatile daily trainer is a great place to start.</p><h2>Get the fit right</h2><p>Shop in the afternoon when your feet are slightly larger, and wear the socks you run in. Leave about a thumb\'s width of space in front of your longest toe, and make sure your heel stays locked in without slipping.</p><h2>Cushioning and drop</h2><p>More foam means more comfort on long runs, while firmer shoes feel faster. Heel-to-toe drop affects how your foot lands; if you are happy in your current shoes, stay close to the same drop.</p><h2>Replace them on time</h2><p>Most running shoes last 500 to 800 km. If the midsole feels flat or you notice new aches after runs, it is time for a fresh pair.</p><h2>Quick tips</h2><ul role="list"><li>Choose shoes for the surface you run on most.</li><li>Fit comes first: comfort beats looks or price.</li><li>Try them on with your running socks.</li><li>Track your mileage so you know when to replace them.</li></ul>',
    seo: {
      title: "How to Choose the Right Running Shoes | Velocity Wear - Performance Sportswear",
      description:
        "Your shoes are the most important piece of running kit. Here is how to find a pair that feels great from the first mile to the last.",
    },
  },
  {
    slug: "moisture-wicking-fabrics-explained",
    title: "Moisture-Wicking Fabrics Explained",
    category: "guides",
    date: "October 30, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/moisture-wicking-featured.webp",
    thumbnail: "/images/blog/moisture-wicking-thumbnail.webp",
    content:
      '<p><em>Why does a good training top feel dry when a cotton T-shirt feels soaked? It all comes down to the fabric.</em></p><h2>What moisture-wicking means</h2><p>Wicking fabrics pull sweat away from your skin and spread it across the outside of the garment, where it can evaporate quickly. That keeps you drier, cooler and more comfortable.</p><h2>The fibres that work</h2><p>Polyester, nylon and merino wool are the most common performance fibres. Synthetics dry fastest, while merino stays warm when damp and naturally resists odour.</p><h2>Why cotton holds you back</h2><p>Cotton absorbs sweat and holds on to it. It gets heavy, clings to the skin and can cause chafing and chills on long or cold sessions.</p><h2>Mesh and ventilation</h2><p>Mesh panels at the back, sides and underarms add airflow where you heat up most, helping sweat evaporate even faster.</p><h2>Quick tips</h2><ul role="list"><li>Choose synthetic or merino fabrics for training.</li><li>Look for mesh zones in high-sweat areas.</li><li>Avoid cotton for long or intense sessions.</li><li>Wash with a gentle detergent and skip fabric softener.</li></ul>',
    seo: {
      title: "Moisture-Wicking Fabrics Explained | Velocity Wear - Performance Sportswear",
      description:
        "Why does a good training top feel dry when a cotton T-shirt feels soaked? It all comes down to the fabric.",
    },
  },
  {
    slug: "how-to-layer-for-cold-weather-training",
    title: "How to Layer for Cold-Weather Training",
    category: "guides",
    date: "October 26, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/cold-weather-layering-featured.webp",
    thumbnail: "/images/blog/cold-weather-layering-thumbnail.webp",
    content:
      '<p><em>Training outside in winter is all about layers. The right combination keeps you warm at the start and comfortable once you warm up.</em></p><h2>Base layer</h2><p>Start with a close-fitting, moisture-wicking long-sleeve top. Its job is to move sweat away from your skin so you do not get cold when you slow down.</p><h2>Mid layer</h2><p>Add a light fleece or thermal quarter-zip for warmth. A zip lets you vent heat quickly without taking the layer off.</p><h2>Outer layer</h2><p>A wind- and waterproof shell protects you from the weather. Look for breathable fabric so heat and moisture can still escape.</p><h2>Protect the extremities</h2><p>Gloves, a hat or headband and warm socks make a big difference, because you lose a lot of heat through your hands and head.</p><h2>Quick tips</h2><ul role="list"><li>Dress as if it is 10 degrees warmer than it is.</li><li>Use zips to control your temperature.</li><li>Pick a shell that is breathable as well as waterproof.</li><li>Change out of damp kit soon after you finish.</li></ul>',
    seo: {
      title: "How to Layer for Cold-Weather Training | Velocity Wear - Performance Sportswear",
      description:
        "Training outside in winter is all about layers. The right combination keeps you warm at the start and comfortable once you warm up.",
    },
  },
  {
    slug: "sports-bra-fit-guide",
    title: "Sports Bra Fit Guide",
    category: "guides",
    date: "October 21, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/sports-bra-fit-featured.webp",
    thumbnail: "/images/blog/sports-bra-fit-thumbnail.webp",
    content:
      '<p><em>A sports bra that fits properly makes every workout more comfortable. Use this guide to check your fit and choose the right support.</em></p><h2>Choose your support level</h2><p>Low support suits yoga and walking, medium support suits gym training and cycling, and high support is best for running and high-impact sessions.</p><h2>Check the band</h2><p>The band provides most of the support. It should sit level all the way around and feel snug; you should be able to fit only one or two fingers underneath.</p><h2>Check the cups and straps</h2><p>There should be no gaping or spilling. Straps should feel secure without digging in; if they carry all the weight, the band is probably too loose.</p><h2>Do the movement test</h2><p>Jump, twist and reach overhead. If you feel too much movement or rubbing, try a different size or a higher support level.</p><h2>Quick tips</h2><ul role="list"><li>Match support level to your activity.</li><li>A snug band is the key to good support.</li><li>Re-check your size every year.</li><li>Replace sports bras when the band loses its stretch.</li></ul>',
    seo: {
      title: "Sports Bra Fit Guide | Velocity Wear - Performance Sportswear",
      description:
        "A sports bra that fits properly makes every workout more comfortable. Use this guide to check your fit and choose the right support.",
    },
  },
  {
    slug: "building-your-gym-wardrobe",
    title: "Building Your Gym Wardrobe",
    category: "guides",
    date: "October 17, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/gym-wardrobe-featured.webp",
    thumbnail: "/images/blog/gym-wardrobe-thumbnail.webp",
    content:
      '<p><em>You do not need a huge collection of kit to train well. A few versatile pieces will cover almost every session.</em></p><h2>Start with the essentials</h2><p>Two or three breathable tops, a pair of supportive leggings or shorts, a sports bra if you need one, and a pair of stable training shoes will cover most workouts.</p><h2>Pick versatile colours</h2><p>Neutral colours like black, charcoal and cream mix and match easily, so every top works with every bottom.</p><h2>Choose fabric for your training</h2><p>Quick-dry fabrics are ideal for high-intensity sessions, while softer, stretchier fabrics feel great for mobility and studio classes.</p><h2>Add layers and accessories</h2><p>A light zip-up for warming up, a cap and a good bag finish the kit and make training easier.</p><h2>Quick tips</h2><ul role="list"><li>Buy fewer, better pieces.</li><li>Stick to a colour palette that mixes and matches.</li><li>Have enough kit to cover your weekly sessions.</li><li>Upgrade shoes and sports bras first.</li></ul>',
    seo: {
      title: "Building Your Gym Wardrobe | Velocity Wear - Performance Sportswear",
      description:
        "You do not need a huge collection of kit to train well. A few versatile pieces will cover almost every session.",
    },
  },
  {
    slug: "what-to-wear-for-tennis",
    title: "What to Wear for Tennis",
    category: "guides",
    date: "October 12, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/tennis-wear-featured.webp",
    thumbnail: "/images/blog/tennis-wear-thumbnail.webp",
    content:
      '<p><em>Tennis asks a lot of your clothing: quick sprints, big stretches and long matches in the sun. Here is what to wear.</em></p><h2>Tops</h2><p>Choose a lightweight, moisture-wicking polo or T-shirt with a cut that lets your shoulders move freely through every serve.</p><h2>Shorts and skirts</h2><p>Look for stretchy fabric, built-in shorts or liners, and a pocket to hold a spare ball between points.</p><h2>Shoes</h2><p>Tennis shoes are built for side-to-side movement, with a durable outsole and lateral support. Choose a sole made for your court surface: clay, grass or hard court.</p><h2>Sun protection</h2><p>A cap or visor, sunglasses and breathable light colours help you stay cool on hot days.</p><h2>Quick tips</h2><ul role="list"><li>Check your club\'s dress code before you play.</li><li>Prioritise freedom of movement.</li><li>Wear court-specific shoes.</li><li>Pack a spare top for long matches.</li></ul>',
    seo: {
      title: "What to Wear for Tennis | Velocity Wear - Performance Sportswear",
      description:
        "Tennis asks a lot of your clothing: quick sprints, big stretches and long matches in the sun. Here is what to wear.",
    },
  },
  {
    slug: "football-boots-for-every-surface",
    title: "Football Boots for Every Surface",
    category: "guides",
    date: "October 8, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/football-boots-featured.webp",
    thumbnail: "/images/blog/football-boots-thumbnail.webp",
    content:
      '<p><em>The right boots depend on where you play. Wearing the wrong studs can cost you grip and even increase the risk of injury.</em></p><h2>Firm ground (FG)</h2><p>Moulded studs for natural grass pitches in normal conditions. This is the most common type of boot and a good all-round choice.</p><h2>Soft ground (SG)</h2><p>Longer, often metal studs that bite into wet, muddy pitches. They should not be used on hard or artificial surfaces.</p><h2>Artificial grass (AG)</h2><p>Shorter, more numerous studs spread the pressure across the sole, giving grip on 3G and 4G pitches without sticking.</p><h2>Indoor and turf (IN/TF)</h2><p>Flat rubber soles for indoor courts and small rubber studs for hard, short artificial turf.</p><h2>Quick tips</h2><ul role="list"><li>Match your studs to the surface you play on most.</li><li>Look for a snug fit with little room at the toe.</li><li>Break new boots in gradually.</li><li>Clean and air-dry boots after every match.</li></ul>',
    seo: {
      title: "Football Boots for Every Surface | Velocity Wear - Performance Sportswear",
      description:
        "The right boots depend on where you play. Wearing the wrong studs can cost you grip and even increase the risk of injury.",
    },
  },
  {
    slug: "how-to-care-for-your-activewear",
    title: "How to Care for Your Activewear",
    category: "guides",
    date: "October 3, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/activewear-care-featured.webp",
    thumbnail: "/images/blog/activewear-care-thumbnail.webp",
    content:
      '<p><em>Performance fabrics last much longer when you look after them properly. A few simple habits keep your kit fresh and in shape.</em></p><h2>Air it out first</h2><p>Do not leave sweaty kit in your bag. Hang it up to dry before it goes in the laundry basket to stop odours from setting in.</p><h2>Wash cool and gentle</h2><p>Turn garments inside out, close zips and wash at 30°C on a gentle cycle. Hot water can damage stretch fibres.</p><h2>Skip the fabric softener</h2><p>Softener coats technical fabrics and blocks their ability to wick sweat. Use a mild detergent or a sport-specific wash instead.</p><h2>Dry naturally</h2><p>Hang activewear to dry instead of using the tumble dryer. Heat breaks down elastane and can cause shrinking.</p><h2>Quick tips</h2><ul role="list"><li>Dry sweaty kit before washing.</li><li>Wash inside out at 30°C.</li><li>Never use fabric softener.</li><li>Air-dry whenever you can.</li></ul>',
    seo: {
      title: "How to Care for Your Activewear | Velocity Wear - Performance Sportswear",
      description:
        "Performance fabrics last much longer when you look after them properly. A few simple habits keep your kit fresh and in shape.",
    },
  },
  {
    slug: "does-compression-wear-help-recovery",
    title: "Does Compression Wear Help Recovery?",
    category: "guides",
    date: "September 30, 2026",
    author: "Velocity Wear Team",
    image: "/images/blog/compression-recovery-featured.webp",
    thumbnail: "/images/blog/compression-recovery-thumbnail.webp",
    content:
      '<p><em>Compression tights and tops are popular with athletes of every level. Here is what they can and cannot do for your recovery.</em></p><h2>How compression works</h2><p>Compression garments apply gentle, even pressure to your muscles. This can support blood flow and reduce muscle vibration during exercise.</p><h2>The benefits</h2><p>Many athletes find compression reduces muscle soreness after hard sessions and helps their legs feel fresher the next day.</p><h2>When to wear it</h2><p>Wear compression during long runs or intense training for support, or after training and while travelling to help you recover.</p><h2>Getting the right fit</h2><p>Compression should feel snug but never painful or restrictive. Use the size guide and choose by your measurements, not your usual size.</p><h2>Quick tips</h2><ul role="list"><li>Use compression alongside rest, sleep and good nutrition.</li><li>Choose the right size for real benefits.</li><li>Try wearing it after your hardest sessions.</li><li>Replace garments when they lose their tightness.</li></ul>',
    seo: {
      title: "Does Compression Wear Help Recovery? | Velocity Wear - Performance Sportswear",
      description:
        "Compression tights and tops are popular with athletes of every level. Here is what they can and cannot do for your recovery.",
    },
  },
];

export const blogCategories: BlogCategory[] = [
  {
    slug: "guides",
    name: "Sportswear Guides",
    seo: {
      title: "Sportswear Guides | Velocity Wear - Performance Sportswear",
      description:
        "Expert advice from Velocity Wear on choosing, wearing and caring for performance sportswear.",
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Most recent posts first. */
export function getLatestPosts(count: number): Post[] {
  return posts.slice(0, count);
}

/** Returns posts in the order of the given slugs. */
export function getPosts(slugs: string[]): Post[] {
  return slugs.map((s) => getPost(s)).filter((p): p is Post => Boolean(p));
}

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getPostsByCategory(slug: string): Post[] {
  return posts.filter((p) => p.category === slug);
}
