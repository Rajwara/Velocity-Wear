"use client";

/**
 * "Meet the Team Behind the Game" section with its scroll animation.
 *
 *   npm install gsap
 *
 * Copy this file and ../team-section.css into your project (adjust the CSS import
 * path below), put the photos in /public, then:
 *
 *   <TeamSection />                       // default content
 *   <TeamSection title="Our coaches" members={[...]} />
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./team-section.css";

export type TeamMember = {
  name: string;
  role: string;
  /** image URL, e.g. "/images/team/member-1.webp" (works best at a 10:9 ratio) */
  image: string;
  alt?: string;
};

const DEFAULT_MEMBERS: TeamMember[] = [
  { name: "Alex Carter", role: "Founder & CEO", image: "/images/team/member-1.webp" },
  { name: "Daniel Brooks", role: "Product Specialist", image: "/images/team/member-3.webp" },
  { name: "Sophia Miller", role: "Customer Manager", image: "/images/team/member-2.webp" },
];

export default function TeamSection({
  label = "Team",
  title = "Meet the Team Behind the Game",
  members = DEFAULT_MEMBERS,
  id = "team",
}: {
  label?: string;
  title?: string;
  /** Three members get the pinned scroll animation; any other number shows a plain grid. */
  members?: TeamMember[];
  id?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = el.querySelectorAll<HTMLElement>("[data-tm-reveal]");
    const cards = el.querySelectorAll<HTMLElement>(".tm-card");
    const tall = el.querySelector<HTMLElement>(".tm-height");
    const block = el.querySelector<HTMLElement>(".tm-block");
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(reveals, { opacity: 1, y: 0 });
        return;
      }

      // 1. Heading label, title and cards fade up 75px as they scroll into view
      reveals.forEach((r) => {
        gsap.fromTo(
          r,
          { y: 75, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: r, start: "top 92%", once: true },
          },
        );
      });

      // 2. Desktop: pinned card choreography (three cards only)
      if (cards.length !== 3 || !tall || !block) return;
      mm.add("(min-width: 992px)", () => {
        const [c1, c2, c3] = Array.from(cards);
        const stickyTop = () => parseFloat(getComputedStyle(block).top) || 0;

        // Start: all three stacked in the right-hand column, 2 and 3 below the first
        gsap.set(c1, { xPercent: 200 });
        gsap.set(c2, { xPercent: 100, yPercent: 105 });
        gsap.set(c3, { yPercent: 210 });

        gsap
          .timeline({
            defaults: { ease: "power2.out", duration: 0.2 },
            scrollTrigger: {
              trigger: tall,
              start: () => `top ${stickyTop()}px`,
              end: () => `bottom ${stickyTop() + block.offsetHeight}px`,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })
          .to(c1, { xPercent: 100 }, 0.1) // card 1 slides one column left
          .to(c2, { yPercent: 0, duration: 0.18, ease: "power1.out" }, 0.22) // card 2 rises into the right column
          .to(c3, { yPercent: 105, duration: 0.15 }, 0.35) // card 3 rises half way
          .to(c1, { xPercent: 0, duration: 0.15, ease: "power1.inOut" }, 0.45) // card 1 to the first column
          .to(c2, { xPercent: 0, duration: 0.17, ease: "power1.inOut" }, 0.58) // card 2 to the middle column
          .to(c3, { yPercent: 0 }, 0.7) // card 3 into place
          .to({}, { duration: 0.1 }, 0.9); // short hold before unpinning

        return () => gsap.set([c1, c2, c3], { clearProps: "transform" });
      });
    }, el);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [members.length]);

  const animated = members.length === 3;

  return (
    <section
      ref={root}
      id={id}
      className={`tm-section tm-js${animated ? "" : " tm-static"}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="tm-space">
        <div className="tm-container">
          <div className="tm-height">
            <div className="tm-block">
              <div className="tm-head">
                <p className="tm-label" data-tm-reveal="">
                  {label}
                </p>
                <h2 className="tm-title" id={`${id}-title`} data-tm-reveal="">
                  {title}
                </h2>
              </div>
              <div className="tm-wrap" data-tm-reveal="">
                {members.map((m) => (
                  <div className="tm-card" key={m.name}>
                    <div className="tm-card-inner">
                      <img
                        className="tm-photo"
                        src={m.image}
                        alt={m.alt ?? m.name}
                        loading="lazy"
                      />
                      <div className="tm-info">
                        <h3 className="tm-name">{m.name}</h3>
                        <p className="tm-role">{m.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
