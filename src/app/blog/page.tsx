import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Velocity Wear - Performance Sportswear",
  description:
    "Explore the Velocity Wear blog for sports news, tips, insights, and helpful content covering sportswear, equipment, and popular games and activities.",
  openGraph: {
    title: "Blog | Velocity Wear - Performance Sportswear",
    description:
      "Explore the Velocity Wear blog for sports news, tips, insights, and helpful content covering sportswear, equipment, and popular games and activities.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6aa1208f1f8272e7df8f21ee"
      bundle="default"
      headerVariant="brand"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="hero-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="blog-hero-block">
              <h1 hero-text="" className="blog-hero-title">
                Explore Our Stories Blog &amp; Insights
              </h1>
              <img
                src="/assets/d014689b45-6aa121b41f8272e7df9016d2_Explore-Our-Stories-Blog---Insights.webp"
                alt={"Explore Our Stories Blog & Insights"}
                className="blog-hero-image"
              />
            </div>
          </div>
        </section>
        <section className="blog-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="blog-block">
                <div className="blog-wrap w-dyn-list">
                  <div role="list" className="blog-list w-dyn-items">
                    {getPosts([
                      "how-to-select-the-best-football-boots-for-different-playing-surfaces",
                      "essential-swimming-gear-for-beginners-to-improve-technique-and-speed",
                      "must-have-recovery-tools-to-prevent-injuries-and-reduce-muscle-soreness",
                      "how-to-choose-the-right-sports-equipment-for-beginners",
                      "best-badminton-rackets-for-power-and-control-in-2026-guide",
                      "complete-guide-to-choosing-the-perfect-cricket-bat-for-players",
                    ]).map((post) => (
                      <BlogCard key={post.slug} post={post} animation="card-animation" />
                    ))}
                  </div>
                  <div
                    role="navigation"
                    aria-label="List"
                    className="w-pagination-wrapper pagination"
                  >
                    <a
                      href="/blog?67d27b8d_page=2"
                      aria-label="Next Page"
                      className="w-pagination-next pagin"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 30 28"
                        fill="none"
                        className="pagin-icon"
                      >
                        <g clipPath="url(#clip0_4_1884)">
                          <path
                            d="M29.6563 13.2258C29.6559 13.2255 29.6556 13.2251 29.6552 13.2247L23.532 7.53725C23.0732 7.11118 22.3312 7.11276 21.8746 7.54096C21.4181 7.96911 21.4198 8.66162 21.8786 9.08775L25.9897 12.9062H1.17188C0.524648 12.9062 0 13.3959 0 14C0 14.6041 0.524648 15.0937 1.17188 15.0937H25.9897L21.8786 18.9122C21.4199 19.3384 21.4181 20.0309 21.8747 20.459C22.3313 20.8873 23.0733 20.8888 23.532 20.4627L29.6553 14.7752C29.6556 14.7749 29.6559 14.7745 29.6563 14.7742C30.1153 14.3467 30.1138 13.6519 29.6563 13.2258Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_1884">
                            <rect width="30" height="28" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <link rel="prerender" href="/blog?67d27b8d_page=2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

// Hides animated elements until Webflow interactions have initialised.
const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
