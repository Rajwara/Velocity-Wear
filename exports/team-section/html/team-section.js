/**
 * "Meet the Team Behind the Game" animations (needs GSAP 3 + ScrollTrigger).
 *
 *  1. Heading label, title and card group fade up 75px as they scroll into view.
 *  2. Desktop (992px+): the section pins while you scroll and the three cards,
 *     which start stacked on the right, slide into a row one after another.
 *  Tablets / phones show a plain grid. Respects "reduce motion".
 *
 * Usage: initTeamSection(document.querySelector(".tm-section"), gsap, ScrollTrigger)
 * Returns a cleanup function.
 */
function initTeamSection(root, gsap, ScrollTrigger) {
  if (!root || !gsap || !ScrollTrigger) return function () {};
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add("tm-js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = root.querySelectorAll("[data-tm-reveal]");
  var cards = root.querySelectorAll(".tm-card");
  var tall = root.querySelector(".tm-height");
  var block = root.querySelector(".tm-block");
  var mm = gsap.matchMedia();

  var ctx = gsap.context(function () {
    if (reduce) {
      gsap.set(reveals, { opacity: 1, y: 0 });
      return;
    }

    // 1. Fade up on entry
    reveals.forEach(function (el, i) {
      gsap.fromTo(
        el,
        { y: 75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: i === 0 ? 0 : 0.05,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    });

    // 2. Pinned card choreography (only with exactly three cards)
    if (cards.length !== 3 || !tall || !block) {
      root.classList.add("tm-static");
      return;
    }
    mm.add("(min-width: 992px)", function () {
      var c1 = cards[0],
        c2 = cards[1],
        c3 = cards[2];
      var stickyTop = function () {
        return parseFloat(getComputedStyle(block).top) || 0;
      };

      // Start: all three stacked in the right-hand column, cards 2 and 3 below the first.
      gsap.set(c1, { xPercent: 200 });
      gsap.set(c2, { xPercent: 100, yPercent: 105 });
      gsap.set(c3, { yPercent: 210 });

      var tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.2 },
        scrollTrigger: {
          trigger: tall,
          // from when the block pins until it unpins
          start: function () {
            return "top " + stickyTop() + "px";
          },
          end: function () {
            return "bottom " + (stickyTop() + block.offsetHeight) + "px";
          },
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      tl.to(c1, { xPercent: 100 }, 0.1) // card 1 slides one column left
        .to(c2, { yPercent: 0, duration: 0.18, ease: "power1.out" }, 0.22) // card 2 rises into the right column
        .to(c3, { yPercent: 105, duration: 0.15 }, 0.35) // card 3 rises half way
        .to(c1, { xPercent: 0, duration: 0.15, ease: "power1.inOut" }, 0.45) // card 1 to the first column
        .to(c2, { xPercent: 0, duration: 0.17, ease: "power1.inOut" }, 0.58) // card 2 to the middle column
        .to(c3, { yPercent: 0 }, 0.7) // card 3 into place
        .to({}, { duration: 0.1 }, 0.9); // short hold before unpinning

      return function () {
        gsap.set([c1, c2, c3], { clearProps: "transform" });
      };
    });
  }, root);

  return function () {
    mm.revert();
    ctx.revert();
  };
}

if (typeof window !== "undefined") window.initTeamSection = initTeamSection;
