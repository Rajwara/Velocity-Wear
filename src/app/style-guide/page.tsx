import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Style Guide | Velocity Wear - Performance Sportswear",
  description:
    "Explore Velocity Wear’s style guide for typography, colors, buttons, forms, layouts, and reusable design elements to build a consistent sports website.",
  openGraph: {
    title: "Style Guide | Velocity Wear - Performance Sportswear",
    description:
      "Explore Velocity Wear’s style guide for typography, colors, buttons, forms, layouts, and reusable design elements to build a consistent sports website.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6a9f93205a63e5051cc64758"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="style-guide-block">
              <h1 hero-text="" className="style-guide-name">
                Style Guide
              </h1>
              <div hero-text="" className="style-guide-wrapp">
                <div className="style-guide-title">Colors</div>
                <div className="w-layout-grid style-guide-grid">
                  <div className="colorbox-card">
                    <div className="colorbox-square primary" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Primary</div>
                      <div className="colorbox-code">#E1EC2B</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square neutral" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Neutral</div>
                      <div className="colorbox-code">#0e0e0e</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square gradient-two" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Gradient Two</div>
                      <div className="colorbox-code">#080808</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square dark-shade" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Dark Shade</div>
                      <div className="colorbox-code">#2a2520</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square gradient-one" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Gradient 01</div>
                      <div className="colorbox-code">#484848</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square dark-gray" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Dark Gray</div>
                      <div className="colorbox-code">#737373</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square light-gray" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Light Gray</div>
                      <div className="colorbox-code">#6c6c6c</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square cream" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Cream</div>
                      <div className="colorbox-code">#f8f6eb</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square background" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">Background</div>
                      <div className="colorbox-code">#f5f5f5</div>
                    </div>
                  </div>
                  <div className="colorbox-card">
                    <div className="colorbox-square white" />
                    <div className="colorbox-wrapp">
                      <div className="colorbox-name">White</div>
                      <div className="colorbox-code">#FFFFFF</div>
                    </div>
                  </div>
                </div>
              </div>
              <div hero-text="" className="style-guide-wrapp">
                <div className="style-guide-title">Typography</div>
                <div className="style-guide-wrap">
                  <div className="typography-block">
                    <div className="typography-left-block">
                      <div className="typography-name">Aa</div>
                      <div className="typography-subtitle">Oswald, Inter Display</div>
                      <p className="typography-summary">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz1234567890
                      </p>
                    </div>
                    <div className="typography-right-block">
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H1</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h1 className="typography-title h1">Typography...</h1>
                          <div className="typography-info">Size: 140</div>
                        </div>
                      </div>
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H2</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h2 className="typography-title h2">Typography...</h2>
                          <div className="typography-info">Size: 64</div>
                        </div>
                      </div>
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H3</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h3 className="typography-title h3">Typography...</h3>
                          <div className="typography-info">Size: 44</div>
                        </div>
                      </div>
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H4</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h4 className="typography-title h4">Typography...</h4>
                          <div className="typography-info">Size: 30</div>
                        </div>
                      </div>
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H5</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h5 className="typography-title h5">Typography...</h5>
                          <div className="typography-info">Size: 24</div>
                        </div>
                      </div>
                      <div className="typography-wrap">
                        <div className="typography-text-wrap">
                          <div className="typography-text">H6</div>
                        </div>
                        <div className="typography-info-wrap">
                          <h6 className="typography-title h6">Typography...</h6>
                          <div className="typography-info">Size: 16</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div text-animation="" className="style-guide-wrapp">
                <div className="style-guide-title">Buttons</div>
                <div className="style-guide-wrap">
                  <div className="style-guide-button">
                    <Button variant="primary" href="#">
                      Button
                    </Button>
                    <Button variant="neutral" href="#">
                      Button
                    </Button>
                    <Button variant="white" href="#">
                      Button
                    </Button>
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
