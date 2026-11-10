import CartButton from "@/components/cart/CartButton";
import Button from "@/components/Button";
import NavLink from "@/components/NavLink";

export type HeaderVariant = "base" | "brand";

/** Site header (Webflow "Header Section" component). The "brand" variant is used on dark hero pages. */
export default function Header({ variant = "base" }: { variant?: HeaderVariant }) {
  const brand = variant === "brand" ? " w-variant-de22c446-ce66-1fbd-b845-dbc6bb922e21" : "";
  return (
    <div
      data-wf--header-section--variant={variant}
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`header-section${brand} w-nav`}
    >
      <div className="main-container w-container">
        <div className="header-block">
          <div className="header-brand-block">
            <NavLink href="/" className="header-brand w-nav-brand">
              <img
                loading="eager"
                src="/images/brand/logo-dark.svg"
                alt="Velocity Wear"
                className={`header-logo dark-logo${brand}`}
              />
              <img
                alt="Velocity Wear"
                src="/images/brand/logo-light.svg"
                className={`header-logo brand-logo${brand}`}
              />
            </NavLink>
          </div>
          <nav role="navigation" className="header-menu-block w-nav-menu">
            <div className={`header-menu${brand}`}>
              <NavLink
                aria-label="Nav Link"
                href="/"
                className={`header-menu-link${brand} w-nav-link`}
              >
                Home
              </NavLink>
              <NavLink
                aria-label="Nav Link"
                href="/about"
                className={`header-menu-link${brand} w-nav-link`}
              >
                About
              </NavLink>
              <NavLink
                aria-label="Nav Link"
                href="/shop"
                className={`header-menu-link${brand} w-nav-link`}
              >
                Shop
              </NavLink>
              <NavLink
                aria-label="Nav Link"
                href="/blog"
                className={`header-menu-link${brand} w-nav-link`}
              >
                Blog
              </NavLink>
              <NavLink
                aria-label="Nav Link"
                href="/contact"
                className={`header-menu-link${brand} w-nav-link`}
              >
                Contact
              </NavLink>
              <div className="header-link-block">
                <Button variant="navbar" href="/user/log-in">
                  login
                </Button>
              </div>
            </div>
          </nav>
          <div className={`header-wrapp-block${brand}`}>
            <CartButton countClassName={`header-text${brand}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 24 24"
                fill="none"
                className="header-icon"
              >
                <path
                  d="M23.9999 8.06249V11.8125C23.9999 12.3303 23.5802 12.75 23.0624 12.75H22.4458L22.0509 16.2651C21.997 16.7441 21.5913 17.0978 21.1203 17.098C21.0854 17.098 21.0502 17.096 21.0145 17.092C20.5 17.0343 20.1297 16.5701 20.1876 16.0558L20.6761 11.7079C20.7294 11.2337 21.1304 10.875 21.6078 10.875H22.125V8.99999H1.875V10.875H17.8594C18.3772 10.875 18.7969 11.2949 18.7969 11.8125C18.7969 12.3303 18.3772 12.75 17.8594 12.75H3.45814L4.38392 20.4732C4.49671 21.4149 5.29707 22.125 6.24556 22.125H17.8296C18.785 22.125 19.5861 21.4089 19.6928 20.4593C19.7505 19.9448 20.2145 19.5747 20.729 19.6324C21.2436 19.6903 21.6138 20.1542 21.5561 20.6688C21.3426 22.5678 19.7406 24 17.8296 24H6.24556C4.34858 24 2.74787 22.5797 2.5221 20.6962L1.56977 12.75H0.937502C0.419679 12.75 0 12.3303 0 11.8125V8.06249C0 7.54467 0.419679 7.12499 0.937502 7.12499H4.2627L9.21663 0.382484C9.52315 -0.0346312 10.1098 -0.124536 10.5271 0.182166C10.9444 0.488685 11.0341 1.07536 10.7276 1.49265L6.58943 7.12499H17.4452L13.3068 1.49265C13.0003 1.07536 13.09 0.488685 13.5073 0.182166C13.9246 -0.124536 14.5113 -0.0348143 14.818 0.382484L19.7718 7.12499H23.0624C23.5802 7.12499 23.9999 7.54485 23.9999 8.06249ZM11.0625 15.5625V19.3125C11.0625 19.8303 11.4822 20.25 12 20.25C12.5177 20.25 12.9375 19.8303 12.9375 19.3125V15.5625C12.9375 15.0447 12.5177 14.625 12 14.625C11.4822 14.625 11.0625 15.0447 11.0625 15.5625ZM14.8125 15.5625V19.3125C14.8125 19.8303 15.2322 20.25 15.75 20.25C16.2677 20.25 16.6875 19.8303 16.6875 19.3125V15.5625C16.6875 15.0447 16.2677 14.625 15.75 14.625C15.2322 14.625 14.8125 15.0447 14.8125 15.5625ZM7.31251 15.5625V19.3125C7.31251 19.8303 7.73219 20.25 8.25001 20.25C8.76765 20.25 9.18752 19.8303 9.18752 19.3125V15.5625C9.18752 15.0447 8.76765 14.625 8.25001 14.625C7.73219 14.625 7.31251 15.0447 7.31251 15.5625Z"
                  fill="currentColor"
                />
              </svg>
            </CartButton>
            <div className="header-link">
              <Button variant="navbar" href="/user/log-in">
                login
              </Button>
            </div>
          </div>
          <div className="header-button-block">
            <CartButton countClassName={`header-text${brand}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 24 24"
                fill="none"
                className="header-icon"
              >
                <path
                  d="M23.9999 8.06249V11.8125C23.9999 12.3303 23.5802 12.75 23.0624 12.75H22.4458L22.0509 16.2651C21.997 16.7441 21.5913 17.0978 21.1203 17.098C21.0854 17.098 21.0502 17.096 21.0145 17.092C20.5 17.0343 20.1297 16.5701 20.1876 16.0558L20.6761 11.7079C20.7294 11.2337 21.1304 10.875 21.6078 10.875H22.125V8.99999H1.875V10.875H17.8594C18.3772 10.875 18.7969 11.2949 18.7969 11.8125C18.7969 12.3303 18.3772 12.75 17.8594 12.75H3.45814L4.38392 20.4732C4.49671 21.4149 5.29707 22.125 6.24556 22.125H17.8296C18.785 22.125 19.5861 21.4089 19.6928 20.4593C19.7505 19.9448 20.2145 19.5747 20.729 19.6324C21.2436 19.6903 21.6138 20.1542 21.5561 20.6688C21.3426 22.5678 19.7406 24 17.8296 24H6.24556C4.34858 24 2.74787 22.5797 2.5221 20.6962L1.56977 12.75H0.937502C0.419679 12.75 0 12.3303 0 11.8125V8.06249C0 7.54467 0.419679 7.12499 0.937502 7.12499H4.2627L9.21663 0.382484C9.52315 -0.0346312 10.1098 -0.124536 10.5271 0.182166C10.9444 0.488685 11.0341 1.07536 10.7276 1.49265L6.58943 7.12499H17.4452L13.3068 1.49265C13.0003 1.07536 13.09 0.488685 13.5073 0.182166C13.9246 -0.124536 14.5113 -0.0348143 14.818 0.382484L19.7718 7.12499H23.0624C23.5802 7.12499 23.9999 7.54485 23.9999 8.06249ZM11.0625 15.5625V19.3125C11.0625 19.8303 11.4822 20.25 12 20.25C12.5177 20.25 12.9375 19.8303 12.9375 19.3125V15.5625C12.9375 15.0447 12.5177 14.625 12 14.625C11.4822 14.625 11.0625 15.0447 11.0625 15.5625ZM14.8125 15.5625V19.3125C14.8125 19.8303 15.2322 20.25 15.75 20.25C16.2677 20.25 16.6875 19.8303 16.6875 19.3125V15.5625C16.6875 15.0447 16.2677 14.625 15.75 14.625C15.2322 14.625 14.8125 15.0447 14.8125 15.5625ZM7.31251 15.5625V19.3125C7.31251 19.8303 7.73219 20.25 8.25001 20.25C8.76765 20.25 9.18752 19.8303 9.18752 19.3125V15.5625C9.18752 15.0447 8.76765 14.625 8.25001 14.625C7.73219 14.625 7.31251 15.0447 7.31251 15.5625Z"
                  fill="currentColor"
                />
              </svg>
            </CartButton>
            <div className={`header-btn${brand} w-nav-button`}>
              <div className="header-line">
                <div className={`top${brand}`} />
                <div className={`middle${brand}`} />
                <div className={`bottom${brand}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
