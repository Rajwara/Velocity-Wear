import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  title: "Reset Password | Athlor - Webflow Ecommerce Website Template",
  description:
    "Reset your Athlor password securely and regain access to your account with simple recovery steps. Get back to shopping for sports gear with confidence.",
  openGraph: {
    title: "Reset Password | Athlor - Webflow Ecommerce Website Template",
    description:
      "Reset your Athlor password securely and regain access to your account with simple recovery steps. Get back to shopping for sports gear with confidence.",
  },
};

export default function Page() {
  return (
    <WebflowPage pageId="6ab5051c08c310be25f9b370" bundle="default" styles={pageStyles}>
      <div className="user-wrapper">
        <div className="user-thumb">
          <img
            src="/assets/d227080c6a-6ab505eafe81b221e0bb0ae6_Forgot-Password.webp"
            alt="Forgot Password"
            className="user-image"
          />
          <div className="user-detail">
            <a aria-label="Brand" href="/" className="user-brand w-inline-block">
              <img
                src="/assets/d63c349c05-6a9fb60d73862f4b02e538a4_03bd8f1ef3be98da18e9c676efb654f7_Athlor-Dark-Logo.svg"
                alt="Sitelogo"
                className="user-logo"
              />
            </a>
            <div className="user-inform">
              <div className="user-except">
                “The quality of the football boots is outstanding. Super comfortable and perfect
                grip on the field.”
              </div>
              <div className="user-author">
                <img
                  loading="lazy"
                  src="/assets/11e80a52d7-6aa3c5d4db8cb63919248444_d6d27716cb25ac5a687b43f6a86a91db_Jason-Miller.jpg"
                  alt="Jason Miller"
                  className="user-photo"
                />
                <div className="user-writer">
                  <div className="user-name">Jason Miller</div>
                  <div className="user-roles">Amateur Football Player</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-details">
          <div className="user-wrapp">
            <div className="user-title">
              <h1 className="user-heading">Reset Password</h1>
              <div className="user-summary">Fill your email address name and password sign up</div>
            </div>
            <div className="user-form w-form">
              <form
                id="wf-form-Forgot-Password"
                name="wf-form-Forgot-Password"
                data-name="Forgot Password"
                method="get"
                className="user-wrap"
                data-wf-page-id="6ab5051c08c310be25f9b370"
                data-wf-element-id="ac75b3bc-bd3a-7d1b-a365-5a412a314289"
                data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
              >
                <div className="user-grid">
                  <div
                    id="w-node-bbb991ea-482f-0ae0-7112-8776dc316c11-25f9b370"
                    className="user-field"
                  >
                    <label htmlFor="Email" className="user-label">
                      Email *
                    </label>
                    <input
                      className="user-input w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="Write your email"
                      type="email"
                      id="Email"
                      required
                    />
                  </div>
                </div>
                <div className="user-grid">
                  <div
                    id="w-node-_88a1f493-b359-6d46-b893-1cc8b7fa7167-25f9b370"
                    className="user-field"
                  >
                    <label htmlFor="New-Password" className="user-label">
                      New Password *
                    </label>
                    <input
                      className="user-input w-input"
                      maxLength={256}
                      name="New-Password"
                      data-name="New Password"
                      placeholder="Write your password"
                      type="password"
                      id="New-Password"
                      required
                    />
                  </div>
                </div>
                <div className="user-grid">
                  <div
                    id="w-node-_70434e7e-e55e-08d4-d647-bcd4fe932263-25f9b370"
                    className="user-field"
                  >
                    <label htmlFor="Confirm-Password" className="user-label">
                      Confirm Password *
                    </label>
                    <input
                      className="user-input w-input"
                      maxLength={256}
                      name="Confirm-Password"
                      data-name="Confirm Password"
                      placeholder="Write your password"
                      type="password"
                      id="Confirm-Password"
                      required
                    />
                  </div>
                </div>
                <div className="user-grid">
                  <div
                    id="w-node-_81f13fee-fffb-5b60-27e9-99572f44b19a-25f9b370"
                    className="user-field"
                  >
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="user-btn w-button"
                      value="Reset Password"
                    />
                    <div className="user-info">
                      Create an account?{" "}
                      <a href="/user/sign-up" aria-label="Text Link" className="user-link">
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="user-done w-form-done">
                <div className="user-sms">Thank you for your submission!</div>
              </div>
              <div className="user-error w-form-fail">
                <div className="user-sms">Oops! Something went wrong.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebflowPage>
  );
}

// Hides animated elements until Webflow interactions have initialised.
const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
