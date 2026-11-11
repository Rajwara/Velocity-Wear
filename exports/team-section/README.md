# "Meet the Team Behind the Game" section

The team section from the Velocity Wear About page, packaged so you can drop it into any site.
It has the same look and the same scroll animation as the original:

1. **Entry reveal:** the "Team" label, the title and the card row fade up 75px as they scroll into view.
2. **Pinned card animation (desktop, 992px and wider):** the section sticks 64px from the top of the
   screen while you scroll. The three cards start stacked in the right-hand column and slide into a
   row one after another.
3. **Tablet and phone:** no pinning. The cards show as a 2-column grid, then 1 column under 480px.

The animation is rebuilt with GSAP + ScrollTrigger (the original ran on Webflow Interactions),
and it was checked against the live About page at several scroll positions.

```
team-section/
  team-section.css     styles (shared by both versions)
  images/              member-1.webp, member-2.webp, member-3.webp
  html/                plain HTML version: index.html (demo) + team-section.js
  react/               React / Next.js version: TeamSection.tsx + team-section.css
```

## Plain HTML

1. Open `html/index.html` in a browser to see the demo.
2. Copy the markup between `copy from here` and `copy to here` into your page.
3. Include `team-section.css`, GSAP and `team-section.js`, then start it:

```html
<link rel="stylesheet" href="team-section.css" />
...
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="team-section.js"></script>
<script>
  initTeamSection(document.querySelector(".tm-section"), gsap, ScrollTrigger);
</script>
```

`initTeamSection` returns a cleanup function if you ever need to remove the animation.

## React / Next.js

```bash
npm install gsap
```

1. Copy `react/TeamSection.tsx` and `react/team-section.css` into your components folder.
2. Put the photos in `public/images/team/` (or pass your own image paths).
3. Use it:

```tsx
import TeamSection from "@/components/TeamSection";

<TeamSection />

<TeamSection
  label="Coaches"
  title="Meet our coaching staff"
  members={[
    { name: "Jane Doe", role: "Head Coach", image: "/images/team/jane.webp" },
    { name: "Sam Lee", role: "Strength Coach", image: "/images/team/sam.webp" },
    { name: "Ava Khan", role: "Physio", image: "/images/team/ava.webp" },
  ]}
/>
```

It is a client component (`"use client"`), so it works in the Next.js App Router.
In plain React (Vite, CRA) the `"use client"` line is simply ignored.

## Customising

- **Text and people:** edit the HTML, or pass `label`, `title` and `members` props in React.
- **Colours, fonts, corner radius:** change the custom properties at the top of `team-section.css`:
  `--tm-bg`, `--tm-card-bg`, `--tm-ink`, `--tm-font-heading`, `--tm-font-body`, `--tm-radius`.
  The original uses Oswald for headings and Inter for text (the demo loads both from Google Fonts).
- **Fixed header:** `--tm-sticky-top` (default `64px`) is how far from the top the section pins.
  Set it to your header height.
- **Scroll length:** `.tm-height { height: 300vw }` controls how long the animation lasts. Lower it to
  make the animation faster.
- **Photos:** any size works. They are cropped to 10:9, so that ratio looks best.

## Notes

- The pinned animation needs **exactly three** cards. With any other number, the section shows a
  normal grid with only the fade-up reveal.
- Visitors with "reduce motion" switched on see the finished layout with no animation.
- A parent element with `overflow: hidden` stops `position: sticky` from working. Use
  `overflow-x: clip` on the parent instead.
- If your site uses Lenis smooth scrolling, connect it to ScrollTrigger as the Lenis docs describe
  (`lenis.on("scroll", ScrollTrigger.update)`) so the animation stays in sync.
