import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Velocity Wear - Performance Sportswear",
  description:
    "Read Velocity Wear’s privacy policy to learn how personal data, customer information, website activity, and online store interactions are collected and protected.",
  openGraph: {
    images: ["/images/social/default.webp"],
    title: "Privacy Policy | Velocity Wear - Performance Sportswear",
    description:
      "Read Velocity Wear’s privacy policy to learn how personal data, customer information, website activity, and online store interactions are collected and protected.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6aa103754829aeef3f88c6ba"
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
                  Privacy &amp; Policy
                </h1>
              </div>
              <div className="legal-dated-block">
                <div hero-text="" className="legal-dated">
                  Date : September 09, 2026
                </div>
              </div>
              <div className="legal-details-block">
                <div hero-text="" className="legal-details">
                  <div className="legal-title">Privacy Policy for Velocity Wear</div>
                  <div className="legal-text">
                    Welcome to Velocity Wear. Your privacy is important to us. This Privacy Policy
                    outlines how we collect, use, and protect your information when you visit or
                    interact with our website.
                  </div>
                </div>
                <div hero-text="" className="legal-details">
                  <div className="legal-title">Information We Collect</div>
                  <div className="legal-text">
                    We may collect different types of information when you use our website,
                    including your name, email address, phone number, billing and shipping address,
                    and payment details (processed securely through third-party providers).
                  </div>
                  <div className="legal-text">
                    In addition, we may automatically collect certain information such as your
                    browser type and version, device information, IP address, pages you visit, time
                    spent on the site, and referring website URLs to help us improve your experience
                    and our services.
                  </div>
                </div>
                <div hero-text="" className="legal-details">
                  <div className="legal-title">How We Use Your Information</div>
                  <div className="legal-text">
                    We use the collected information for purposes such as:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>Providing and managing our services</li>
                    <li>Processing orders and transactions</li>
                    <li>Improving website functionality and user experience</li>
                    <li>Communicating with you (updates, promotions, customer support)</li>
                    <li>Ensuring security and preventing fraud</li>
                  </ul>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Cookies and Tracking Technologies</div>
                  <div className="legal-text">
                    Velocity Wear uses cookies and similar technologies to:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>Enhance user experience</li>
                    <li>Analyze website traffic</li>
                    <li>Remember your preferences</li>
                  </ul>
                  <div className="legal-text">
                    You can control or disable cookies through your browser settings.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Sharing Your Information</div>
                  <div className="legal-text">
                    We do not sell or rent your personal information. However, we may share it with:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>
                      Trusted third-party service providers (payment processors, hosting, analytics)
                    </li>
                    <li>Legal authorities if required by law</li>
                    <li>Business partners in case of a merger, sale, or acquisition</li>
                  </ul>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Data Security</div>
                  <div className="policy-text">
                    We take appropriate technical and organizational measures to protect your data
                    from:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>Unauthorized access</li>
                    <li>Loss or misuse</li>
                    <li>Disclosure or alteration</li>
                  </ul>
                  <div className="legal-text">
                    However, no online platform can guarantee 100% security.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Third-Party Links</div>
                  <div className="legal-text">
                    Our website may contain links to external websites. We are not responsible for
                    their privacy practices or content. We encourage you to review their privacy
                    policies.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Your Rights</div>
                  <div className="policy-text">
                    Depending on your location, you may have the right to:
                  </div>
                  <ul role="list" className="legal-lists">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent</li>
                    <li>Object to data processing</li>
                  </ul>
                  <div className="legal-text">
                    To exercise your rights, please contact us at:{" "}
                    <a
                      href="mailto:example@gmail.com?subject=example%40gmail.com"
                      aria-label="Email"
                      className="policy-link"
                    >
                      example@gmail.com
                    </a>
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Children&apos;s Privacy</div>
                  <div className="legal-text">
                    Velocity Wear does not knowingly collect personal information from children
                    under 13. If you believe a child has provided personal data, please contact us,
                    and we will remove it promptly.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Changes to This Policy</div>
                  <div className="legal-text">
                    We may update this Privacy Policy from time to time. Changes will be posted on
                    this page with an updated date.
                  </div>
                </div>
                <div text-animation="" className="legal-details">
                  <div className="legal-title">Contact Us</div>
                  <div className="legal-text">
                    If you have any questions about this Privacy Policy, please contact us:
                  </div>
                  <div className="legal-text">
                    <strong>Velocity Wear</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:example@gmail.com?subject=example%40gmail.com"
                      aria-label="Email"
                      className="policy-link"
                    >
                      example@gmail.com
                      <br />
                    </a>
                    Phone:{" "}
                    <a href="tel:(555)1234567" aria-label="Phone" className="policy-link">
                      (555) 123 4567
                      <br />
                    </a>
                    Address:{" "}
                    <a
                      href="https://maps.app.goo.gl/9uuCznSCbBTtQwze7"
                      aria-label="Address"
                      target="_blank"
                      className="policy-link"
                    >
                      Flat 69, Thaw Bento, USA
                    </a>
                  </div>
                  <div className="legal-text">
                    By using Velocity Wear, you agree to the terms of this Privacy Policy.
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
