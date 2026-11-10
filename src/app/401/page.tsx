import type { Metadata } from "next";
import WebflowPage from "@/components/WebflowPage";

export const metadata: Metadata = {
  title: "Protected | Velocity Wear - Performance Sportswear",
  description: "This Velocity Wear page is password protected.",
  openGraph: {
    images: ["/images/social/default.webp"],
    title: "Protected | Velocity Wear - Performance Sportswear",
    description: "This Velocity Wear page is password protected.",
  },
};

export default function Page() {
  return (
    <WebflowPage pageId="6a9f93205a63e5051cc6475c" bundle="default" styles={pageStyles}>
      <div className="protected-section">
        <div className="protected-block w-password-page w-form">
          <form
            action="/.wf_auth"
            method="post"
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className="protected-form w-password-page"
            data-wf-page-id="6a9f93205a63e5051cc6475c"
            data-wf-element-id="68bed06ce232e506cd78f4b800000000000c"
          >
            <h1 className="protected-title">Protected Page</h1>
            <label htmlFor="pass" className="protected-text w-password-page">
              Password
            </label>
            <input
              className="protected-field w-password-page w-input"
              autoFocus
              maxLength={256}
              name="pass"
              data-name="field"
              placeholder="Enter your password"
              type="password"
              id="pass"
            />
            <input
              type="submit"
              data-wait="Please wait..."
              className="protected-btn w-password-page w-button"
              value="Submit"
            />
            <div className="protected-error w-password-page w-form-fail">
              <div className="protected-sms">Incorrect password. Please try again.</div>
            </div>
            <div style={{ display: "none" }} className="w-password-page w-embed w-script">
              <input type="hidden" name="path" value={"<%WF_FORM_VALUE_PATH%>"} />
              <input type="hidden" name="page" value={"<%WF_FORM_VALUE_PAGE%>"} />
            </div>
            <div style={{ display: "none" }} className="w-password-page w-embed w-script" />
          </form>
        </div>
      </div>
    </WebflowPage>
  );
}

// Hides animated elements until Webflow interactions have initialised.
const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
