import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact | Athlor - Webflow Ecommerce Website Template",
  description:
    "Contact Athlor for information about sports products, sportswear, equipment, orders, and online store support for your sports business.",
  openGraph: {
    title: "Contact | Athlor - Webflow Ecommerce Website Template",
    description:
      "Contact Athlor for information about sports products, sportswear, equipment, orders, and online store support for your sports business.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6aa12c0a6eaebdfc0db4894b"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="contact-block">
              <div className="contact-title-block">
                <div className="contact-title-wrap">
                  <h1 className="contact-title">
                    Contact our
                    <br />
                  </h1>
                  <div className="contact-gap" />
                  <div className="contact-title">sports</div>
                </div>
                <div className="contact-title-wrap">
                  <div className="contact-title">gear specialist</div>
                </div>
              </div>
              <div className="contact-text-block">
                <div hero-text="" className="contact-form-block w-form">
                  <form
                    id="wf-form-Contact-Us"
                    name="wf-form-Contact-Us"
                    data-name="Contact Us"
                    method="get"
                    className="contact-form"
                    data-wf-page-id="6aa12c0a6eaebdfc0db4894b"
                    data-wf-element-id="a450152a-375e-0a32-d8df-625983bbbbab"
                    data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                  >
                    <div className="contact-field">
                      <div className="contact-field-wrap">
                        <label htmlFor="First-Name" className="contact-field-label">
                          First Name
                        </label>
                        <input
                          className="contact-field-place w-input"
                          maxLength={256}
                          name="First-Name"
                          data-name="First Name"
                          placeholder="Your first name"
                          type="text"
                          id="First-Name"
                          required
                        />
                      </div>
                      <div className="contact-field-wrap">
                        <label htmlFor="Last-Name" className="contact-field-label">
                          Last Name
                        </label>
                        <input
                          className="contact-field-place w-input"
                          maxLength={256}
                          name="Last-Name"
                          data-name="Last Name"
                          placeholder="Your last name"
                          type="text"
                          id="Last-Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="contact-field">
                      <div className="contact-field-wrap">
                        <label htmlFor="Email" className="contact-field-label">
                          Email
                        </label>
                        <input
                          className="contact-field-place w-input"
                          maxLength={256}
                          name="Email"
                          data-name="Email"
                          placeholder="Write your email"
                          type="email"
                          id="Email"
                          required
                        />
                      </div>
                      <div className="contact-field-wrap">
                        <label htmlFor="Subject" className="contact-field-label">
                          Subject
                        </label>
                        <input
                          className="contact-field-place w-input"
                          maxLength={256}
                          name="Subject"
                          data-name="Subject"
                          placeholder="Write your subject"
                          type="text"
                          id="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="contact-field">
                      <div
                        id="w-node-a450152a-375e-0a32-d8df-625983bbbbbf-0db4894b"
                        className="contact-field-wrap"
                      >
                        <label htmlFor="Message" className="contact-field-label">
                          Message
                        </label>
                        <textarea
                          placeholder="Write your message"
                          maxLength={5000}
                          id="Message"
                          name="Message"
                          data-name="Message"
                          className="contact-field-place contact-field-area w-input"
                        />
                      </div>
                    </div>
                    <div className="contact-field">
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        id="w-node-a450152a-375e-0a32-d8df-625983bbbbc4-0db4894b"
                        className="contact-button w-button"
                        value="Submit"
                      />
                    </div>
                  </form>
                  <div className="contact-done w-form-done">
                    <div className="contact-message">Thank you for your submission!</div>
                  </div>
                  <div className="contact-error w-form-fail">
                    <div className="contact-message">Oops! Something went wrong.</div>
                  </div>
                </div>
                <div className="contact-image-block">
                  <img
                    src="/assets/de0cd4f6ef-6aa12c9af03533b5cc0459b0_e8787c3fd86958a09f84900bac1cc2bd_Contact-Our-Sports-Gear-Specialist.webp"
                    alt="Contact Our Sprots Gear Specialist"
                    className="contact-image"
                  />
                </div>
              </div>
              <div className="contact-card-block">
                <div card-animation="" className="contact-card">
                  <div className="contact-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-icon"
                    >
                      <g clipPath="url(#clip0_279_1486)">
                        <path
                          d="M18.9677 14.8671C18.4763 14.3555 17.8837 14.082 17.2556 14.082C16.6326 14.082 16.0348 14.3505 15.5232 14.8621L13.9226 16.4576C13.7909 16.3867 13.6592 16.3209 13.5326 16.255C13.3502 16.1639 13.178 16.0777 13.0311 15.9866C11.5317 15.0343 10.1691 13.7933 8.86229 12.1875C8.22911 11.3872 7.80362 10.7135 7.49464 10.0297C7.91 9.64979 8.29496 9.25469 8.6698 8.87479C8.81163 8.73296 8.95346 8.58607 9.09529 8.44424C10.159 7.38051 10.159 6.00273 9.09529 4.939L7.71245 3.55616C7.55542 3.39913 7.39333 3.23704 7.24137 3.07495C6.93745 2.7609 6.61833 2.43671 6.28908 2.13279C5.79774 1.64652 5.21016 1.38818 4.59218 1.38818C3.97421 1.38818 3.3765 1.64652 2.86996 2.13279C2.86489 2.13786 2.86489 2.13786 2.85983 2.14292L1.13761 3.88034C0.489239 4.52871 0.119467 5.31891 0.0384213 6.23574C-0.0831474 7.71482 0.352474 9.0926 0.686788 9.99424C1.50738 12.2078 2.7332 14.2593 4.56179 16.4576C6.78042 19.1068 9.44987 21.1988 12.4992 22.6728C13.6643 23.225 15.2193 23.8784 16.9567 23.9898C17.0631 23.9949 17.1745 24 17.2759 24C18.446 24 19.4286 23.5795 20.1986 22.7438C20.2036 22.7336 20.2138 22.7286 20.2188 22.7184C20.4822 22.3993 20.7862 22.1106 21.1053 21.8016C21.3231 21.5939 21.546 21.3761 21.7638 21.1482C22.2652 20.6264 22.5286 20.0186 22.5286 19.3956C22.5286 18.7674 22.2602 18.1647 21.7486 17.6581L18.9677 14.8671ZM20.7811 20.2009C20.776 20.2009 20.776 20.206 20.7811 20.2009C20.5835 20.4137 20.3809 20.6062 20.1631 20.8189C19.8339 21.133 19.4995 21.4622 19.1855 21.832C18.6739 22.3791 18.0711 22.6374 17.2809 22.6374C17.2049 22.6374 17.1239 22.6374 17.0479 22.6323C15.5435 22.5361 14.1455 21.9485 13.0969 21.447C10.2299 20.0591 7.71245 18.0887 5.62045 15.5915C3.89316 13.5096 2.73826 11.5848 1.97339 9.51809C1.50231 8.25682 1.33009 7.27414 1.40607 6.34718C1.45672 5.75453 1.68466 5.26319 2.10509 4.84276L3.83238 3.11547C4.08058 2.88247 4.34398 2.75583 4.60231 2.75583C4.92143 2.75583 5.17977 2.94832 5.34186 3.11041C5.34692 3.11547 5.35199 3.12054 5.35705 3.1256C5.66604 3.41433 5.95983 3.71319 6.26882 4.0323C6.42585 4.1944 6.58794 4.35649 6.75003 4.52364L8.13287 5.90649C8.6698 6.44342 8.6698 6.93982 8.13287 7.47675C7.98598 7.62365 7.84415 7.77054 7.69725 7.91237C7.27176 8.34799 6.86653 8.75322 6.42585 9.14832C6.41571 9.15845 6.40558 9.16352 6.40052 9.17365C5.9649 9.60927 6.04594 10.0348 6.13712 10.3235C6.14219 10.3387 6.14725 10.3539 6.15232 10.3691C6.51196 11.2403 7.01849 12.0609 7.78843 13.0385L7.79349 13.0436C9.19153 14.7658 10.6656 16.1081 12.2915 17.1364C12.4992 17.2681 12.712 17.3745 12.9146 17.4758C13.0969 17.567 13.2692 17.6531 13.416 17.7442C13.4363 17.7544 13.4566 17.7696 13.4768 17.7797C13.6491 17.8658 13.8111 17.9063 13.9783 17.9063C14.3987 17.9063 14.6621 17.6429 14.7482 17.5568L16.4806 15.8245C16.6528 15.6522 16.9263 15.4446 17.2455 15.4446C17.5595 15.4446 17.8178 15.6421 17.9749 15.8143C17.9799 15.8194 17.9799 15.8194 17.985 15.8245L20.776 18.6155C21.2978 19.1322 21.2978 19.664 20.7811 20.2009Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.9701 5.70896C14.2972 5.93183 15.5028 6.55994 16.4652 7.52236C17.4276 8.48478 18.0507 9.69034 18.2786 11.0175C18.3343 11.3518 18.623 11.5848 18.9523 11.5848C18.9928 11.5848 19.0283 11.5797 19.0688 11.5747C19.4436 11.5139 19.6918 11.1593 19.6311 10.7845C19.3575 9.17873 18.5977 7.71484 17.4378 6.55487C16.2778 5.39491 14.8139 4.6351 13.2082 4.36157C12.8333 4.30079 12.4838 4.54899 12.418 4.91876C12.3521 5.28853 12.5953 5.64817 12.9701 5.70896Z"
                          fill="currentColor"
                        />
                        <path
                          d="M23.9723 10.5869C23.5215 7.94279 22.2754 5.53674 20.3607 3.62203C18.446 1.70732 16.04 0.461243 13.3958 0.0104253C13.0261 -0.0554245 12.6766 0.197844 12.6107 0.567615C12.5499 0.942452 12.7981 1.29196 13.173 1.35781C15.5334 1.75798 17.6862 2.87742 19.3983 4.58445C21.1104 6.29654 22.2248 8.44932 22.6249 10.8098C22.6807 11.1441 22.9694 11.3771 23.2986 11.3771C23.3392 11.3771 23.3746 11.372 23.4151 11.367C23.7849 11.3113 24.0382 10.9567 23.9723 10.5869Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1486">
                          <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="contact-txt">
                      <div className="contact-text">Phone Number</div>
                      <div className="contact-info">(112) 123 4567</div>
                    </div>
                  </div>
                  <a
                    aria-label="Phone"
                    href="tel:(555)1234567"
                    className="contact-link w-inline-block"
                  >
                    <div className="contact-link-text">Call Now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-link-icon"
                    >
                      <g clipPath="url(#clip0_279_1482)">
                        <path
                          d="M23.725 11.3364C23.7247 11.3361 23.7245 11.3358 23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4997 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645C23.7245 12.6642 23.7247 12.6639 23.7251 12.6636C24.0922 12.2971 24.0911 11.7016 23.725 11.3364Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1482">
                          <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div card-animation="" className="contact-card">
                  <div className="contact-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-icon"
                    >
                      <path
                        d="M21.8906 3.5625H2.10938C0.943922 3.5625 0 4.51228 0 5.67188V18.3281C0 19.4946 0.950859 20.4375 2.10938 20.4375H21.8906C23.0463 20.4375 24 19.4986 24 18.3281V5.67188C24 4.51434 23.0598 3.5625 21.8906 3.5625ZM21.5952 4.96875C21.1642 5.39742 13.7476 12.775 13.4916 13.0297C13.0931 13.4281 12.5634 13.6475 12 13.6475C11.4366 13.6475 10.9069 13.4281 10.5071 13.0284C10.3349 12.8571 3.00014 5.56097 2.40478 4.96875H21.5952ZM1.40625 18.0419V5.95898L7.48303 12.0037L1.40625 18.0419ZM2.40567 19.0312L8.48006 12.9955L9.51408 14.0241C10.1781 14.6881 11.061 15.0538 12 15.0538C12.939 15.0538 13.8219 14.6881 14.4846 14.0254L15.5199 12.9955L21.5943 19.0312H2.40567ZM22.5938 18.0419L16.517 12.0037L22.5938 5.95898V18.0419Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="contact-txt">
                      <div className="contact-text">Email</div>
                      <div className="contact-info">example@gmail.com</div>
                    </div>
                  </div>
                  <a
                    aria-label="Email"
                    href="mailto:example@gmail.com?subject=example%40gmail.com"
                    className="contact-link w-inline-block"
                  >
                    <div className="contact-link-text">Send Message</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-link-icon"
                    >
                      <g clipPath="url(#clip0_279_1482)">
                        <path
                          d="M23.725 11.3364C23.7247 11.3361 23.7245 11.3358 23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4997 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645C23.7245 12.6642 23.7247 12.6639 23.7251 12.6636C24.0922 12.2971 24.0911 11.7016 23.725 11.3364Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1482">
                          <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div card-animation="" className="contact-card">
                  <div className="contact-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-icon"
                    >
                      <path
                        d="M11.415 23.6869C11.5454 23.8825 11.7649 24 12 24C12.2351 24 12.4546 23.8825 12.585 23.6869C14.2491 21.1909 16.7 18.1084 18.408 14.9733C19.7736 12.4666 20.4375 10.3287 20.4375 8.4375C20.4375 3.78506 16.6524 0 12 0C7.34756 0 3.5625 3.78506 3.5625 8.4375C3.5625 10.3287 4.22639 12.4666 5.59205 14.9733C7.29872 18.106 9.75436 21.1961 11.415 23.6869ZM12 1.40625C15.877 1.40625 19.0312 4.56047 19.0312 8.4375C19.0312 10.0877 18.4234 12.0055 17.1731 14.3006C15.7009 17.0029 13.6 19.7441 12 22.0485C10.4002 19.7444 8.29922 17.003 6.82692 14.3006C5.57658 12.0055 4.96875 10.0877 4.96875 8.4375C4.96875 4.56047 8.12297 1.40625 12 1.40625Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 12.6562C14.3262 12.6562 16.2188 10.7637 16.2188 8.4375C16.2188 6.11128 14.3262 4.21875 12 4.21875C9.67378 4.21875 7.78125 6.11128 7.78125 8.4375C7.78125 10.7637 9.67378 12.6562 12 12.6562ZM12 5.625C13.5508 5.625 14.8125 6.88669 14.8125 8.4375C14.8125 9.98831 13.5508 11.25 12 11.25C10.4492 11.25 9.1875 9.98831 9.1875 8.4375C9.1875 6.88669 10.4492 5.625 12 5.625Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="contact-txt">
                      <div className="contact-text">Office Address</div>
                      <div className="contact-info">Flat 69, Thaw Bento, USA</div>
                    </div>
                  </div>
                  <a
                    aria-label="Google Map"
                    href="https://maps.app.goo.gl/9uuCznSCbBTtQwze7"
                    target="_blank"
                    className="contact-link w-inline-block"
                  >
                    <div className="contact-link-text">Get Direction</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="contact-link-icon"
                    >
                      <g clipPath="url(#clip0_279_1482)">
                        <path
                          d="M23.725 11.3364C23.7247 11.3361 23.7245 11.3358 23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4997 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645C23.7245 12.6642 23.7247 12.6639 23.7251 12.6636C24.0922 12.2971 24.0911 11.7016 23.725 11.3364Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1482">
                          <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
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
