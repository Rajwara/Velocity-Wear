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
                src="/assets/d63c349c05-6a9fb60d73862f4b02e538a4_03bd8f1ef3be98da18e9c676efb654f7_Athlor-Dark-Logo.svg"
                alt="Sitelogo"
                className={`header-logo dark-logo${brand}`}
              />
              <img
                alt="Sitelogo"
                src="/assets/a6ffb9a74e-6a9fb614dd3d8f3ed9d387ec_6b2fe9712a84dd80b22a43981117bb70_Athlor-Brand-Logo.svg"
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
            <div
              data-open-product=""
              data-wf-cart-type="modal"
              data-wf-cart-query={
                "query Dynamo3 {\n  database {\n    id\n    commerceOrder {\n      comment\n      extraItems {\n        name\n        pluginId\n        pluginName\n        price {\n          decimalValue\n          string\n          unit\n          value\n        }\n      }\n      id\n      startedOn\n      statusFlags {\n        hasDownloads\n        hasSubscription\n        isFreeOrder\n        requiresShipping\n      }\n      subtotal {\n        decimalValue\n        string\n        unit\n        value\n      }\n      total {\n        decimalValue\n        string\n        unit\n        value\n      }\n      updatedOn\n      userItems {\n        count\n        id\n        price {\n          value\n          unit\n          decimalValue\n          string\n        }\n        product {\n          id\n          cmsLocaleId\n          draft\n          archived\n          f_ec_product_type_2dr10dr: productType {\n            id\n            name\n          }\n          f_name_: name\n          f_sku_properties_3dr: skuProperties {\n            id\n            name\n            enum {\n              id\n              name\n              slug\n            }\n          }\n        }\n        rowTotal {\n          decimalValue\n          string\n          unit\n          value\n        }\n        sku {\n          cmsLocaleId\n          draft\n          archived\n          f_main_image_4dr: mainImage {\n            url\n            file {\n              size\n              origFileName\n              createdOn\n              updatedOn\n              mimeType\n              width\n              height\n              variants {\n                origFileName\n                quality\n                height\n                width\n                s3Url\n                error\n                size\n              }\n            }\n            alt\n          }\n          f_sku_values_3dr: skuValues {\n            property {\n              id\n            }\n            value {\n              id\n            }\n          }\n          id\n        }\n        subscriptionFrequency\n        subscriptionInterval\n        subscriptionTrial\n      }\n      userItemsCount\n    }\n  }\n  site {\n    commerce {\n      id\n      businessAddress {\n        country\n      }\n      defaultCountry\n      defaultCurrency\n      quickCheckoutEnabled\n    }\n  }\n}"
              }
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper header-cart"
              data-node-type="commerce-cart-wrapper"
            >
              <a
                className="w-commerce-commercecartopenlink header-toggle w-inline-block"
                role="button"
                aria-haspopup="dialog"
                aria-label="Open cart"
                data-node-type="commerce-cart-open-link"
                href="#"
              >
                <div
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                  className={`w-commerce-commercecartopenlinkcount header-text${brand}`}
                >
                  0
                </div>
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
              </a>
              <div
                style={{ display: "none" }}
                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal header-wrapp"
                data-node-type="commerce-cart-container-wrapper"
              >
                <div
                  data-node-type="commerce-cart-container"
                  role="dialog"
                  className="w-commerce-commercecartcontainer header-grid"
                >
                  <div className="w-commerce-commercecartheader header-title">
                    <h4 className="w-commerce-commercecartheading header-name">Your Cart</h4>
                    <a
                      className="w-commerce-commercecartcloselink header-close w-inline-block"
                      role="button"
                      aria-label="Close cart"
                      data-node-type="commerce-cart-close-link"
                    >
                      <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g fillRule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="w-commerce-commercecartformwrapper header-cont">
                    <form
                      style={{ display: "none" }}
                      className="w-commerce-commercecartform header-default"
                      data-node-type="commerce-cart-form"
                    >
                      <script
                        type="text/x-wf-template"
                        id="wf-template-1121bbf1-00d0-df08-9ccb-e91993dede5b"
                        dangerouslySetInnerHTML={{
                          __html:
                            "%3Cdiv%20class%3D%22w-commerce-commercecartitem%20header-item%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20header-img%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20header-wrap%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20header-cart-name%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22header-cart-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-1121bbf1-00d0-df08-9ccb-e91993dede61%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%20header-option-list%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-1121bbf1-00d0-df08-9ccb-e91993dede61%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22header-cart-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%20header-num%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E",
                        }}
                      />
                      <div
                        className="w-commerce-commercecartlist header-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-1121bbf1-00d0-df08-9ccb-e91993dede5b"
                      >
                        <div className="w-commerce-commercecartitem header-item">
                          <img
                            data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                            alt=""
                            className="w-commerce-commercecartitemimage header-img w-dyn-bind-empty"
                          />
                          <div className="w-commerce-commercecartiteminfo header-wrap">
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname header-cart-name w-dyn-bind-empty"
                            />
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                              className="header-cart-price"
                            >
                              $&nbsp;0.00&nbsp;USD
                            </div>
                            <script
                              type="text/x-wf-template"
                              id="wf-template-1121bbf1-00d0-df08-9ccb-e91993dede61"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E",
                              }}
                            />
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                              className="w-commerce-commercecartoptionlist header-option-list"
                              data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-1121bbf1-00d0-df08-9ccb-e91993dede61"
                            >
                              <li>
                                <span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                  className="w-dyn-bind-empty"
                                />
                                <span>: </span>
                                <span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                  className="w-dyn-bind-empty"
                                />
                              </li>
                            </ul>
                            <a
                              href="#"
                              role="button"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                              className="header-cart-button w-inline-block"
                              data-wf-cart-action="remove-item"
                              data-commerce-sku-id=""
                              aria-label="Remove item from cart"
                            >
                              <div>Remove</div>
                            </a>
                          </div>
                          <input
                            aria-label="Update quantity"
                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                            data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
                            className="w-commerce-commercecartquantity header-num"
                            required
                            pattern="^[0-9]+$"
                            inputMode="numeric"
                            type="number"
                            name="quantity"
                            autoComplete="off"
                            data-wf-cart-action="update-item-quantity"
                            data-commerce-sku-id=""
                            defaultValue="1"
                          />
                        </div>
                      </div>
                      <div className="w-commerce-commercecartfooter header-info">
                        <div
                          aria-atomic="true"
                          aria-live="polite"
                          className="w-commerce-commercecartlineitem header-prices"
                        >
                          <div className="header-prices-title">Subtotal</div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                            className="w-commerce-commercecartordervalue header-prices-text"
                          />
                        </div>
                        <div className="header-action">
                          <div
                            data-node-type="commerce-cart-quick-checkout-actions"
                            style={{ display: "none" }}
                            className="header-payments"
                          >
                            <a
                              data-node-type="commerce-cart-apple-pay-button"
                              role="button"
                              aria-label="Apple Pay"
                              aria-haspopup="dialog"
                              style={{
                                backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
                                backgroundSize: "100% 50%",
                                backgroundPosition: "50% 50%",
                                backgroundRepeat: "no-repeat",
                              }}
                              className="w-commerce-commercecartapplepaybutton header-apple"
                              tabIndex={0}
                            >
                              <div />
                            </a>
                            <a
                              data-node-type="commerce-cart-quick-checkout-button"
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              style={{ display: "none" }}
                              className="w-commerce-commercecartquickcheckoutbutton header-brows"
                            >
                              <svg
                                className="w-commerce-commercequickcheckoutgoogleicon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <polygon
                                    id="google-mark-a"
                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                  />
                                  <polygon
                                    id="google-mark-c"
                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                  />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                  />
                                  <path
                                    fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                  />
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use href="#google-mark-a" />
                                    </mask>
                                    <path
                                      fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"
                                    />
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use href="#google-mark-c" />
                                  </mask>
                                  <path
                                    fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"
                                  />
                                </g>
                              </svg>
                              <svg
                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                                  <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                                  <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                                  <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a>
                          </div>
                          <a
                            href="/checkout"
                            {...{ value: "Continue to Checkout" }}
                            className="w-commerce-commercecartcheckoutbutton header-checkout"
                            data-loading-text="Hang Tight..."
                            data-node-type="cart-checkout-button"
                          >
                            Continue to Checkout
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="w-commerce-commercecartemptystate header-empty">
                      <div aria-label="This cart is empty" aria-live="polite">
                        No items found.
                      </div>
                    </div>
                    <div
                      aria-live="assertive"
                      style={{ display: "none" }}
                      data-node-type="commerce-cart-error"
                      className="w-commerce-commercecarterrorstate header-error"
                    >
                      <div
                        className="w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-link">
              <Button variant="navbar" href="/user/log-in">
                login
              </Button>
            </div>
          </div>
          <div className="header-button-block">
            <div
              data-open-product=""
              data-wf-cart-type="modal"
              data-wf-cart-query={
                "query Dynamo3 {\n  database {\n    id\n    commerceOrder {\n      comment\n      extraItems {\n        name\n        pluginId\n        pluginName\n        price {\n          decimalValue\n          string\n          unit\n          value\n        }\n      }\n      id\n      startedOn\n      statusFlags {\n        hasDownloads\n        hasSubscription\n        isFreeOrder\n        requiresShipping\n      }\n      subtotal {\n        decimalValue\n        string\n        unit\n        value\n      }\n      total {\n        decimalValue\n        string\n        unit\n        value\n      }\n      updatedOn\n      userItems {\n        count\n        id\n        price {\n          value\n          unit\n          decimalValue\n          string\n        }\n        product {\n          id\n          cmsLocaleId\n          draft\n          archived\n          f_ec_product_type_2dr10dr: productType {\n            id\n            name\n          }\n          f_name_: name\n          f_sku_properties_3dr: skuProperties {\n            id\n            name\n            enum {\n              id\n              name\n              slug\n            }\n          }\n        }\n        rowTotal {\n          decimalValue\n          string\n          unit\n          value\n        }\n        sku {\n          cmsLocaleId\n          draft\n          archived\n          f_main_image_4dr: mainImage {\n            url\n            file {\n              size\n              origFileName\n              createdOn\n              updatedOn\n              mimeType\n              width\n              height\n              variants {\n                origFileName\n                quality\n                height\n                width\n                s3Url\n                error\n                size\n              }\n            }\n            alt\n          }\n          f_sku_values_3dr: skuValues {\n            property {\n              id\n            }\n            value {\n              id\n            }\n          }\n          id\n        }\n        subscriptionFrequency\n        subscriptionInterval\n        subscriptionTrial\n      }\n      userItemsCount\n    }\n  }\n  site {\n    commerce {\n      id\n      businessAddress {\n        country\n      }\n      defaultCountry\n      defaultCurrency\n      quickCheckoutEnabled\n    }\n  }\n}"
              }
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper header-cart"
              data-node-type="commerce-cart-wrapper"
            >
              <a
                className="w-commerce-commercecartopenlink header-toggle w-inline-block"
                role="button"
                aria-haspopup="dialog"
                aria-label="Open cart"
                data-node-type="commerce-cart-open-link"
                href="#"
              >
                <div
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                  className={`w-commerce-commercecartopenlinkcount header-text${brand}`}
                >
                  0
                </div>
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
              </a>
              <div
                style={{ display: "none" }}
                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal header-wrapp"
                data-node-type="commerce-cart-container-wrapper"
              >
                <div
                  data-node-type="commerce-cart-container"
                  role="dialog"
                  className="w-commerce-commercecartcontainer header-grid"
                >
                  <div className="w-commerce-commercecartheader header-title">
                    <h4 className="w-commerce-commercecartheading header-name">Your Cart</h4>
                    <a
                      className="w-commerce-commercecartcloselink header-close w-inline-block"
                      role="button"
                      aria-label="Close cart"
                      data-node-type="commerce-cart-close-link"
                    >
                      <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g fillRule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="w-commerce-commercecartformwrapper header-cont">
                    <form
                      style={{ display: "none" }}
                      className="w-commerce-commercecartform header-default"
                      data-node-type="commerce-cart-form"
                    >
                      <script
                        type="text/x-wf-template"
                        id="wf-template-203fabe6-1a4b-3685-76d7-a43071894e6b"
                        dangerouslySetInnerHTML={{
                          __html:
                            "%3Cdiv%20class%3D%22w-commerce-commercecartitem%20header-item%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20header-img%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20header-wrap%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20header-cart-name%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22header-cart-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-203fabe6-1a4b-3685-76d7-a43071894e71%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%20header-option-list%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-203fabe6-1a4b-3685-76d7-a43071894e71%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22header-cart-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%20header-num%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E",
                        }}
                      />
                      <div
                        className="w-commerce-commercecartlist header-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-203fabe6-1a4b-3685-76d7-a43071894e6b"
                      >
                        <div className="w-commerce-commercecartitem header-item">
                          <img
                            data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                            alt=""
                            className="w-commerce-commercecartitemimage header-img w-dyn-bind-empty"
                          />
                          <div className="w-commerce-commercecartiteminfo header-wrap">
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                              className="w-commerce-commercecartproductname header-cart-name w-dyn-bind-empty"
                            />
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                              className="header-cart-price"
                            >
                              $&nbsp;0.00&nbsp;USD
                            </div>
                            <script
                              type="text/x-wf-template"
                              id="wf-template-203fabe6-1a4b-3685-76d7-a43071894e71"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E",
                              }}
                            />
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                              className="w-commerce-commercecartoptionlist header-option-list"
                              data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-203fabe6-1a4b-3685-76d7-a43071894e71"
                            >
                              <li>
                                <span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                  className="w-dyn-bind-empty"
                                />
                                <span>: </span>
                                <span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                  className="w-dyn-bind-empty"
                                />
                              </li>
                            </ul>
                            <a
                              href="#"
                              role="button"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                              className="header-cart-button w-inline-block"
                              data-wf-cart-action="remove-item"
                              data-commerce-sku-id=""
                              aria-label="Remove item from cart"
                            >
                              <div>Remove</div>
                            </a>
                          </div>
                          <input
                            aria-label="Update quantity"
                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                            data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
                            className="w-commerce-commercecartquantity header-num"
                            required
                            pattern="^[0-9]+$"
                            inputMode="numeric"
                            type="number"
                            name="quantity"
                            autoComplete="off"
                            data-wf-cart-action="update-item-quantity"
                            data-commerce-sku-id=""
                            defaultValue="1"
                          />
                        </div>
                      </div>
                      <div className="w-commerce-commercecartfooter header-info">
                        <div
                          aria-atomic="true"
                          aria-live="polite"
                          className="w-commerce-commercecartlineitem header-prices"
                        >
                          <div className="header-prices-title">Subtotal</div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                            className="w-commerce-commercecartordervalue header-prices-text"
                          />
                        </div>
                        <div className="header-action">
                          <div
                            data-node-type="commerce-cart-quick-checkout-actions"
                            style={{ display: "none" }}
                            className="header-payments"
                          >
                            <a
                              data-node-type="commerce-cart-apple-pay-button"
                              role="button"
                              aria-label="Apple Pay"
                              aria-haspopup="dialog"
                              style={{
                                backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
                                backgroundSize: "100% 50%",
                                backgroundPosition: "50% 50%",
                                backgroundRepeat: "no-repeat",
                              }}
                              className="w-commerce-commercecartapplepaybutton header-apple"
                              tabIndex={0}
                            >
                              <div />
                            </a>
                            <a
                              data-node-type="commerce-cart-quick-checkout-button"
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              style={{ display: "none" }}
                              className="w-commerce-commercecartquickcheckoutbutton header-brows"
                            >
                              <svg
                                className="w-commerce-commercequickcheckoutgoogleicon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <polygon
                                    id="google-mark-a"
                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                  />
                                  <polygon
                                    id="google-mark-c"
                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                  />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                  />
                                  <path
                                    fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                  />
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use href="#google-mark-a" />
                                    </mask>
                                    <path
                                      fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"
                                    />
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use href="#google-mark-c" />
                                  </mask>
                                  <path
                                    fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"
                                  />
                                </g>
                              </svg>
                              <svg
                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                                  <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                                  <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                                  <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a>
                          </div>
                          <a
                            href="/checkout"
                            {...{ value: "Continue to Checkout" }}
                            className="w-commerce-commercecartcheckoutbutton header-checkout"
                            data-loading-text="Hang Tight..."
                            data-node-type="cart-checkout-button"
                          >
                            Continue to Checkout
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="w-commerce-commercecartemptystate header-empty">
                      <div aria-label="This cart is empty" aria-live="polite">
                        No items found.
                      </div>
                    </div>
                    <div
                      aria-live="assertive"
                      style={{ display: "none" }}
                      data-node-type="commerce-cart-error"
                      className="w-commerce-commercecarterrorstate header-error"
                    >
                      <div
                        className="w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
