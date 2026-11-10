import NavLink from "@/components/NavLink";

export default function Footer({ pageId }: { pageId: string }) {
  return (
    <section className="footer-section">
      <div className="footer-block">
        <div className="footer-menu-block">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="footer-menu">
              <div className="footer-wrap item-one">
                <div className="footer-cont">
                  <div className="footer-name">Get In Touch</div>
                  <div className="footer-navbar">
                    <a aria-label="Phone" href="tel:(555)123345" className="footer-nav-link">
                      (555) 123 345
                    </a>
                    <a
                      aria-label="Email"
                      href="mailto:support@example.com?subject=support%40example.com"
                      className="footer-nav-link"
                    >
                      support@example.com
                    </a>
                    <a
                      aria-label="Google Map"
                      href="https://maps.app.goo.gl/jZavk1JyXRH1HEhX6"
                      target="_blank"
                      className="footer-nav-link"
                    >
                      Elgin St. Celina , Delaware 10299
                    </a>
                  </div>
                  <div className="footer-social">
                    <a
                      aria-label="Facebook"
                      href="https://www.facebook.com/TNCFlow"
                      target="_blank"
                      className="footer-social-link w-inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="footer-social-icon"
                      >
                        <path
                          d="M9.23896 16V8.70218H11.6875L12.0549 5.85725H9.23896V4.04118C9.23896 3.21776 9.46667 2.65661 10.6488 2.65661L12.154 2.65599V0.111384C11.8937 0.0775563 11.0002 0 9.96017 0C7.78849 0 6.30172 1.32557 6.30172 3.75942V5.85725H3.8457V8.70218H6.30172V16H9.23896Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      aria-label="Instagram"
                      href="https://www.instagram.com/tncflow"
                      target="_blank"
                      className="footer-social-link w-inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="footer-social-icon"
                      >
                        <g clipPath="url(#clip0_41_398)">
                          <path
                            d="M15.9836 4.70404C15.9461 3.8539 15.8086 3.26944 15.6117 2.76299C15.4085 2.22541 15.096 1.74412 14.6865 1.34401C14.2864 0.937683 13.8019 0.621948 13.2705 0.421957C12.7612 0.22502 12.1797 0.0875415 11.3296 0.0500586C10.4731 0.00940124 10.2012 0 8.02891 0C5.85661 0 5.5847 0.00940124 4.73139 0.0468842C3.88125 0.0843671 3.29678 0.221967 2.79046 0.418783C2.25275 0.621948 1.77146 0.934509 1.37136 1.34401C0.965027 1.74412 0.649413 2.22858 0.449301 2.75994C0.252363 3.26944 0.114885 3.85073 0.0774023 4.70087C0.036745 5.55736 0.0273438 5.82926 0.0273438 8.00156C0.0273438 10.1739 0.036745 10.4458 0.0742279 11.2991C0.111711 12.1492 0.249311 12.7337 0.446249 13.2401C0.649413 13.7777 0.965027 14.259 1.37136 14.6591C1.77146 15.0654 2.25593 15.3812 2.78728 15.5812C3.29678 15.7781 3.87807 15.9156 4.72834 15.9531C5.58153 15.9907 5.85356 16 8.02585 16C10.1982 16 10.4701 15.9907 11.3234 15.9531C12.1735 15.9156 12.758 15.7781 13.2643 15.5812C14.3396 15.1654 15.1897 14.3153 15.6055 13.2401C15.8023 12.7306 15.9399 12.1492 15.9774 11.2991C16.0148 10.4458 16.0242 10.1739 16.0242 8.00156C16.0242 5.82926 16.0211 5.55736 15.9836 4.70404ZM14.5428 11.2366C14.5083 12.018 14.3771 12.4399 14.2677 12.7212C13.9988 13.4183 13.4456 13.9715 12.7486 14.2403C12.4673 14.3497 12.0423 14.481 11.2639 14.5153C10.42 14.5529 10.1669 14.5622 8.03208 14.5622C5.89726 14.5622 5.64099 14.5529 4.80013 14.5153C4.01872 14.481 3.59677 14.3497 3.31546 14.2403C2.96859 14.1121 2.65286 13.909 2.39658 13.6433C2.1309 13.3838 1.92774 13.0713 1.79954 12.7244C1.69014 12.4431 1.55889 12.018 1.52458 11.2397C1.48698 10.3958 1.4777 10.1426 1.4777 8.00779C1.4777 5.87297 1.48698 5.6167 1.52458 4.77596C1.55889 3.99455 1.69014 3.5726 1.79954 3.29129C1.92774 2.9443 2.1309 2.62869 2.39976 2.37229C2.65908 2.10661 2.97164 1.90345 3.31864 1.77537C3.59994 1.66597 4.02507 1.53472 4.8033 1.50029C5.64722 1.46281 5.90044 1.45341 8.03513 1.45341C10.1731 1.45341 10.4262 1.46281 11.2671 1.50029C12.0485 1.53472 12.4704 1.66597 12.7518 1.77537C13.0986 1.90345 13.4144 2.10661 13.6706 2.37229C13.9363 2.63174 14.1395 2.9443 14.2677 3.29129C14.3771 3.5726 14.5083 3.99761 14.5428 4.77596C14.5802 5.61987 14.5896 5.87297 14.5896 8.00779C14.5896 10.1426 14.5802 10.3927 14.5428 11.2366Z"
                            fill="currentColor"
                          />
                          <path
                            d="M8.0301 3.89136C5.76098 3.89136 3.91992 5.73229 3.91992 8.00154C3.91992 10.2708 5.76098 12.1117 8.0301 12.1117C10.2993 12.1117 12.1403 10.2708 12.1403 8.00154C12.1403 5.73229 10.2993 3.89136 8.0301 3.89136ZM8.0301 10.6677C6.55801 10.6677 5.36393 9.47375 5.36393 8.00154C5.36393 6.52932 6.55801 5.33537 8.0301 5.33537C9.50231 5.33537 10.6963 6.52932 10.6963 8.00154C10.6963 9.47375 9.50231 10.6677 8.0301 10.6677Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.2629 3.72883C13.2629 4.25871 12.8333 4.68836 12.3033 4.68836C11.7734 4.68836 11.3438 4.25871 11.3438 3.72883C11.3438 3.19881 11.7734 2.76929 12.3033 2.76929C12.8333 2.76929 13.2629 3.19881 13.2629 3.72883Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_41_398">
                            <rect width="16" height="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      aria-label="Tiktok"
                      href="https://www.tiktok.com/@tncflow.com"
                      target="_blank"
                      className="footer-social-link w-inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="footer-social-icon"
                      >
                        <g clipPath="url(#clip0_41_403)">
                          <path
                            d="M15.0105 4.01221C14.0973 4.01221 13.2548 3.70971 12.5783 3.19939C11.8023 2.61439 11.2448 1.75627 11.048 0.767207C10.9992 0.522832 10.973 0.270645 10.9705 0.012207H8.36203V7.13971L8.3589 11.0438C8.3589 12.0875 7.67921 12.9725 6.73703 13.2838C6.46359 13.3741 6.16827 13.4169 5.86077 13.4C5.46828 13.3785 5.10046 13.26 4.78077 13.0688C4.10046 12.6619 3.63921 11.9238 3.62671 11.0794C3.60702 9.75971 4.6739 8.68377 5.99265 8.68377C6.25296 8.68377 6.50296 8.72627 6.73703 8.80346V6.85533V6.15502C6.49015 6.11846 6.2389 6.09939 5.98484 6.09939C4.5414 6.09939 3.1914 6.69939 2.2264 7.78033C1.49702 8.59721 1.05952 9.63939 0.992025 10.7322C0.903587 12.1678 1.4289 13.5325 2.44765 14.5394C2.59734 14.6872 2.75452 14.8244 2.9189 14.951C3.79234 15.6231 4.86015 15.9875 5.98484 15.9875C6.2389 15.9875 6.49015 15.9688 6.73703 15.9322C7.78765 15.7766 8.75703 15.2956 9.52203 14.5394C10.462 13.6103 10.9814 12.3769 10.987 11.0641L10.9736 5.23408C11.422 5.58002 11.9123 5.86627 12.4386 6.08846C13.257 6.43377 14.1248 6.60877 15.018 6.60846V4.71439V4.01158C15.0186 4.01221 15.0111 4.01221 15.0105 4.01221Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_41_403">
                            <rect width="16" height="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      aria-label="X (Twitter)"
                      href="https://www.x.com/TNCFlow"
                      target="_blank"
                      className="footer-social-link w-inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="footer-social-icon"
                      >
                        <g clipPath="url(#clip0_41_407)">
                          <path
                            d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_41_407">
                            <rect width="16" height="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-wrap item-two">
                <div className="footer-cont">
                  <div className="footer-name">Navigation</div>
                  <div className="footer-navbar">
                    <NavLink aria-label="Text Link" href="/" className="footer-nav-link">
                      Home
                    </NavLink>
                    <NavLink aria-label="Text Link" href="/about" className="footer-nav-link">
                      About
                    </NavLink>
                    <NavLink aria-label="Text Link" href="/shop" className="footer-nav-link">
                      Shop
                    </NavLink>
                    <NavLink aria-label="Text Link" href="/blog" className="footer-nav-link">
                      Blog
                    </NavLink>
                    <NavLink aria-label="Text Link" href="/contact" className="footer-nav-link">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="footer-wrap item-three">
                <div className="footer-cont">
                  <div className="footer-name">Utilities</div>
                  <div className="footer-navbar">
                    <NavLink aria-label="Text Link" href="/faq" className="footer-nav-link">
                      FAQ
                    </NavLink>
                    <NavLink aria-label="Text Link" href="/cart" className="footer-nav-link">
                      Cart
                    </NavLink>
                    <NavLink
                      aria-label="Text Link"
                      href="/privacy-policy"
                      className="footer-nav-link"
                    >
                      Privacy Policy
                    </NavLink>
                    <NavLink
                      aria-label="Text Link"
                      href="/return-refund-policy"
                      className="footer-nav-link"
                    >
                      Return &amp; Refund Policy
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="footer-wrap item-four">
                <div className="footer-cont">
                  <div className="footer-name">Newsletter</div>
                  <div className="footer-navbar">
                    <div className="footer-form w-form">
                      <form
                        id="wf-form-Newsletter"
                        name="wf-form-Newsletter"
                        data-name="Newsletter"
                        method="get"
                        className="footer-wrapp"
                        data-wf-page-id={pageId}
                        data-wf-element-id="42e44b08-69fd-e168-153c-bb480fba417b"
                      >
                        <input
                          className="footer-field w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          aria-label="Email"
                          placeholder="Enter your email"
                          type="email"
                          id="email"
                          required
                        />
                        <input
                          type="submit"
                          data-wait=""
                          className="footer-btn w-button"
                          value=""
                        />
                      </form>
                      <div className="footer-done w-form-done">
                        <div className="footer-sms">Thank you for your submission!</div>
                      </div>
                      <div className="footer-error w-form-fail">
                        <div className="footer-sms">Oops! Something went wrong.</div>
                      </div>
                    </div>
                    <div className="footer-title">
                      By subscribing you agree to with our{" "}
                      <NavLink href="/privacy-policy" className="footer-link">
                        Privacy Policy
                      </NavLink>{" "}
                      and provide consent to receive updates from our company .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mark-block">
          <div className="footer-mark">
            <div className="footer-loop">
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
            </div>
            <div className="footer-loop">
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
              <div className="footer-watermark">Velocity Wear.</div>
            </div>
          </div>
        </div>
        <div className="footer-copy-block">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="footer-copy">
              <div className="footer-info">
                <div className="footer-info-text">Copyright © Velocity Wear</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
