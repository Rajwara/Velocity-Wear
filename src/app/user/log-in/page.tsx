import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  title: "Log In | Athlor - Webflow Ecommerce Website Template",
  description:
    "Log in to Athlor to manage your account, track sports gear orders, access personalized shopping features, and enjoy a seamless online experience.",
  openGraph: {
    title: "Log In | Athlor - Webflow Ecommerce Website Template",
    description:
      "Log in to Athlor to manage your account, track sports gear orders, access personalized shopping features, and enjoy a seamless online experience.",
  },
};

export default function Page() {
  return (
    <WebflowPage pageId="6ab503ea43e437a1b6548e37" bundle="default" styles={pageStyles}>
      <div className="user-wrapper">
        <div className="user-thumb">
          <img
            src="/assets/0d7474b796-6ab504cf08282cc1c2b72383_Log-In.webp"
            alt="Log In"
            className="user-image"
          />
          <div className="user-detail">
            <a href="/" className="user-brand w-inline-block">
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
              <h1 className="user-heading">Welcome Back</h1>
              <div className="user-summary">Fill your email address and password to login in</div>
            </div>
            <div className="user-form w-form">
              <form
                id="wf-form-Log-In"
                name="wf-form-Log-In"
                data-name="Log In"
                method="get"
                className="user-wrap"
                data-wf-page-id="6ab503ea43e437a1b6548e37"
                data-wf-element-id="ac75b3bc-bd3a-7d1b-a365-5a412a314289"
                data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
              >
                <div className="user-grid">
                  <div
                    id="w-node-bbb991ea-482f-0ae0-7112-8776dc316c11-b6548e37"
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
                    id="w-node-_88a1f493-b359-6d46-b893-1cc8b7fa7167-b6548e37"
                    className="user-field"
                  >
                    <label htmlFor="Password" className="user-label">
                      Password *
                    </label>
                    <input
                      className="user-input w-input"
                      maxLength={256}
                      name="Password"
                      data-name="Password"
                      placeholder="Write your password"
                      type="password"
                      id="Password"
                      required
                    />
                    <div className="user-requ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="user-icon"
                      >
                        <path
                          d="M6.00001 4C6.00001 3.82319 6.07027 3.65362 6.19527 3.52859C6.32027 3.40357 6.48987 3.33333 6.66667 3.33333C6.78254 3.33587 6.89574 3.36855 6.99507 3.42818C7.09447 3.4878 7.17661 3.5723 7.23334 3.67333C7.29727 3.77039 7.33201 3.88378 7.33334 4C7.33334 4.17681 7.26307 4.34638 7.13807 4.47141C7.01307 4.59643 6.84347 4.66667 6.66667 4.66667C6.48987 4.66667 6.32027 4.59643 6.19527 4.47141C6.07027 4.34638 6.00001 4.17681 6.00001 4ZM13.3333 6.66667C13.3333 7.9852 12.9423 9.27413 12.2098 10.3705C11.4773 11.4668 10.4361 12.3213 9.21787 12.8259C7.99974 13.3305 6.65927 13.4625 5.36607 13.2053C4.07286 12.948 2.88497 12.3131 1.95263 11.3807C1.02027 10.4483 0.385339 9.26047 0.128099 7.96727C-0.129134 6.67407 0.00289237 5.3336 0.507472 4.11545C1.01206 2.89727 1.86654 1.85608 2.96287 1.12353C4.0592 0.390993 5.34814 0 6.66667 0C7.54214 0 8.40907 0.17244 9.21787 0.507467C10.0267 0.8425 10.7617 1.33357 11.3807 1.95262C11.9997 2.57168 12.4908 3.30661 12.8259 4.11545C13.1609 4.92428 13.3333 5.7912 13.3333 6.66667ZM12 6.66667C12 5.6118 11.6872 4.58069 11.1012 3.70363C10.5151 2.82656 9.68221 2.14298 8.70767 1.73931C7.73314 1.33564 6.66074 1.23003 5.62621 1.43581C4.59163 1.6416 3.64131 2.14955 2.89543 2.89543C2.14955 3.64131 1.64161 4.59162 1.43581 5.6262C1.23003 6.66073 1.33565 7.73313 1.73931 8.70767C2.14298 9.6822 2.82657 10.5151 3.70363 11.1012C4.58069 11.6872 5.61181 12 6.66667 12C8.08114 12 9.43774 11.4381 10.4379 10.4379C11.4381 9.43773 12 8.08113 12 6.66667ZM7.33334 8V6C7.33334 5.8232 7.26307 5.6536 7.13807 5.5286C7.01307 5.4036 6.84347 5.33333 6.66667 5.33333H6.00001C5.82321 5.33333 5.65361 5.4036 5.52861 5.5286C5.40361 5.6536 5.33334 5.8232 5.33334 6C5.33334 6.1768 5.40361 6.3464 5.52861 6.4714C5.65361 6.5964 5.82321 6.66667 6.00001 6.66667V8.66667C6.00001 8.84347 6.07027 9.01307 6.19527 9.13807C6.32027 9.26307 6.48987 9.33333 6.66667 9.33333H7.33334C7.51014 9.33333 7.67974 9.26307 7.80474 9.13807C7.92974 9.01307 8.00001 8.84347 8.00001 8.66667C8.00001 8.48987 7.92974 8.32027 7.80474 8.19527C7.67974 8.07027 7.51014 8 7.33334 8Z"
                          fill="currentColor"
                        />
                      </svg>
                      <a aria-label="Text Link" href="/user/reset-password" className="user-text">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="user-grid">
                  <div
                    id="w-node-_81f13fee-fffb-5b60-27e9-99572f44b19a-b6548e37"
                    className="user-field"
                  >
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="user-btn w-button"
                      value="Login"
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
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="user-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
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
