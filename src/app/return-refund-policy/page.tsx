import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Athlor - Webflow Ecommerce Website Template",
  description:
    "Read Athlor’s return and refund policy for clear details on returns, refunds, eligibility, order issues, and the process for requesting a refund or return.",
  openGraph: {
    title: "Return & Refund Policy | Athlor - Webflow Ecommerce Website Template",
    description:
      "Read Athlor’s return and refund policy for clear details on returns, refunds, eligibility, order issues, and the process for requesting a refund or return.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6aa105c70d0944509df21014"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="legal-block">
              <div className="legal-label-block">
                <h1 hero-text="" className="legal-label">
                  Return Policy
                </h1>
              </div>
              <div className="legal-dated-block">
                <div hero-text="" className="legal-dated">
                  Date : September 09, 2026
                </div>
              </div>
              <div className="legal-details-block">
                <div hero-text="" className="legal-details">
                  <div className="legal-title">Introduction</div>
                  <div className="legal-text">
                    Thank you for shopping with our Sports Store. We want you to be completely
                    satisfied with your purchase. If you are not happy with your order, you may be
                    eligible for a return or refund according to the policy below.
                  </div>
                </div>
                <div hero-text="" className="legal-details">
                  <div className="legal-title">Return Eligibility</div>
                  <div className="legal-text">
                    Items can be returned within 7 days of delivery if they meet the following
                    conditions:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>
                      The product is unused and in its original condition
                      <br />
                    </li>
                    <li>The product is in the original packaging</li>
                    <li>The item is not damaged by the customer</li>
                  </ul>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Non-Returnable Items</div>
                  <div className="legal-text">Certain items cannot be returned, including:</div>
                  <ul role="list" className="legal-lists">
                    <li>
                      Used or damaged products
                      <br />
                    </li>
                    <li>Items without original packaging</li>
                    <li>Clearance or final sale items</li>
                  </ul>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Refund Process</div>
                  <div className="legal-text">
                    Once we receive and inspect your returned item, we will notify you about the
                    status of your refund. If approved, your refund will be processed and credited
                    to your original payment method within a few business days.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Exchange Policy</div>
                  <div className="legal-text">
                    If you receive a defective or damaged item, you may request an exchange for the
                    same product. Please contact our support team within 48 hours of receiving the
                    product.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Return Shipping</div>
                  <div className="legal-text">
                    Customers may be responsible for return shipping costs unless the product was
                    damaged or incorrect when delivered.
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
