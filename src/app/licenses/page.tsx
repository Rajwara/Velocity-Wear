import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Licenses | Velocity Wear - Performance Sportswear",
  description:
    "View Velocity Wear’s licenses for information about assets, usage rights, third-party resources and licensing terms.",
  openGraph: {
    title: "Licenses | Velocity Wear - Performance Sportswear",
    description:
      "View Velocity Wear’s licenses for information about assets, usage rights, third-party resources and licensing terms.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6a9f93205a63e5051cc64759"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="utility-block">
              <div className="utility-text-block">
                <h1 hero-text="" className="utility-heading">
                  Licenses
                </h1>
                <p hero-text="" className="utility-excerpt">
                  All graphical assets in this template are licensed for personal and commercial
                  use. If you&apos;d like to use a specific asset, please check the license below.
                </p>
              </div>
              <div className="utility-card-block">
                <div hero-text="" className="utility-card">
                  <div className="utility-wrap">
                    <div className="utility-title">Fonts</div>
                    <p className="utility-text">
                      A clean, versatile, and modern font designed for readability and
                      professionalism, perfect for digital projects.
                    </p>
                  </div>
                  <div className="utility-cont">
                    <div className="utility-info">
                      Oswald :{" "}
                      <a
                        href="https://fonts.google.com/specimen/Oswald/license"
                        aria-label="Text Link"
                        target="_blank"
                        className="utility-link"
                      >
                        https://fonts.google.com/specimen/Oswald/license
                      </a>
                    </div>
                    <div className="utility-info">
                      Inter Display :{" "}
                      <a
                        href="https://fontmeme.com/read/#license"
                        aria-label="Text Link"
                        target="_blank"
                        className="utility-link"
                      >
                        https://fontmeme.com/read/#license
                      </a>
                    </div>
                  </div>
                </div>
                <div hero-text="" className="utility-card">
                  <div className="utility-wrap">
                    <div className="utility-title">Images</div>
                    <p className="utility-text">
                      A leading platform offering a wide variety of high-quality free images,
                      vectors, and illustrations for creative use.
                    </p>
                  </div>
                  <div className="utility-cont">
                    <div className="utility-info">
                      Lummi : &nbsp;
                      <a
                        href="https://www.lummi.ai/license"
                        aria-label="Text Link"
                        target="_blank"
                        className="utility-link"
                      >
                        https://www.lummi.ai/license
                      </a>
                    </div>
                    <div className="utility-info">
                      Magnific : &nbsp;
                      <a
                        href="https://www.magnific.com/ai/docs/ai-content-and-copyright"
                        aria-label="Text Link"
                        target="_blank"
                        className="utility-link"
                      >
                        https://www.magnific.com/ai/docs/ai-content-and-copyright
                      </a>
                    </div>
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
