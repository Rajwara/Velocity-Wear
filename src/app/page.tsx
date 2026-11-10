import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import BenefitsSection from "@/components/BenefitsSection";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { getProducts } from "@/data/products";
import { getPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Velocity Wear - Performance Sportswear",
  description:
    "Velocity Wear makes performance sportswear for running, training, football and tennis. Shop new collections, find your fit and train in comfort.",
  openGraph: {
    title: "Velocity Wear - Performance Sportswear",
    description:
      "Velocity Wear makes performance sportswear for running, training, football and tennis. Shop new collections, find your fit and train in comfort.",
  },
};

export default function Page() {
  return (
    <SiteShell
      pageId="6a9f93205a63e5051cc64757"
      bundle="home"
      headerVariant="brand"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="hero-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="home-block">
              <div hero-text="" className="home-wrapp">
                <div className="home-info display-show-for-mobile">
                  <div className="review-img">
                    <img
                      src="/assets/116c973861-6aa385c04c4242dee31e208f_Review-Image-01.webp"
                      alt=""
                      className="review-image item-one"
                    />
                    <img
                      src="/assets/f36358d708-6aa385c3632b1efbd0f42516_Review-Image-02.webp"
                      alt=""
                      className="review-image item-two"
                    />
                    <img
                      src="/assets/817be2fcfd-6aa385c6197cf42097204306_Review-Image-03.webp"
                      alt=""
                      className="review-image item-three"
                    />
                  </div>
                  <div className="review-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 77 18"
                      fill="none"
                      className="review-rating"
                    >
                      <path
                        d="M7.23374 3.26343L9.33921 7.41952L14.0464 8.07806L10.6326 11.3122L11.4447 15.8781L7.23374 13.7268L3.00776 15.8781L3.81987 11.3122L0.406006 8.07806L5.12827 7.41952L7.23374 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M22.8894 3.26343L24.9948 7.41952L29.7171 8.07806L26.3032 11.3122L27.1003 15.8781L22.8894 13.7268L18.6784 15.8781L19.4755 11.3122L16.0767 8.07806L20.7839 7.41952L22.8894 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.5602 3.26343L40.6656 7.41952L45.3729 8.07806L41.959 11.3122L42.7711 15.8781L38.5602 13.7268L34.3342 15.8781L35.1463 11.3122L31.7324 8.07806L36.4396 7.41952L38.5602 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M54.2158 3.26343L56.3212 7.41952L61.0435 8.07806L57.6296 11.3122L58.4267 15.8781L54.2158 13.7268L50.0048 15.8781L50.8019 11.3122L47.4031 8.07806L52.1103 7.41952L54.2158 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M69.8866 3.26343L71.992 7.41952L76.6993 8.07806L73.2854 11.3122L74.0975 15.8781L69.8866 13.7268L65.6606 15.8781L66.4727 11.3122L63.0588 8.07806L67.7661 7.41952L69.8866 3.26343Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="review-label">
                      4.9 Rated<span className="review-span"> 312 verified review</span>
                    </div>
                  </div>
                </div>
                <div className="home-title">
                  <h1 className="home-heading item-one">
                    our trending
                    <br />
                    Badminton Collections
                  </h1>
                  <div className="home-heading item-two">
                    Our Trending
                    <br />
                    Cricket Collections
                  </div>
                  <div className="home-heading item-three">
                    Our Trending
                    <br />
                    Hockey Collections
                  </div>
                  <div className="home-heading item-four">
                    Our Trending
                    <br />
                    Tenis Collections
                  </div>
                  <div className="home-heading item-five">
                    Our Trending
                    <br />
                    GYM Collections
                  </div>
                </div>
                <div className="home-tag">
                  <a
                    aria-label="Text Link"
                    data-wf-target={
                      '[[["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"],[]]]'
                    }
                    href="/product-category/badminton"
                    className="home-category item-one"
                  >
                    Badminton
                  </a>
                  <a
                    aria-label="Text Link"
                    data-wf-target={
                      '[[["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"],[]]]'
                    }
                    href="/product-category/cricket"
                    className="home-category item-two"
                  >
                    Cricket
                  </a>
                  <a
                    aria-label="Text Link"
                    data-wf-target={
                      '[[["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"],[]]]'
                    }
                    href="/product-category/hockey"
                    className="home-category item-three"
                  >
                    Hockey
                  </a>
                  <a
                    aria-label="Text Link"
                    data-wf-target={
                      '[[["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"],[]]]'
                    }
                    href="/product-category/tennis"
                    className="home-category item-four"
                  >
                    Tennis
                  </a>
                  <a
                    aria-label="Text Link"
                    data-wf-target={
                      '[[["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"],[]]]'
                    }
                    href="/product-category/gym"
                    className="home-category item-five"
                  >
                    Gym
                  </a>
                </div>
              </div>
              <div hero-text="" className="home-details">
                <div className="home-info display-show-for-desktop">
                  <div className="review-img">
                    <img
                      src="/assets/116c973861-6aa385c04c4242dee31e208f_Review-Image-01.webp"
                      alt=""
                      className="review-image item-one"
                    />
                    <img
                      src="/assets/f36358d708-6aa385c3632b1efbd0f42516_Review-Image-02.webp"
                      alt=""
                      className="review-image item-two"
                    />
                    <img
                      src="/assets/817be2fcfd-6aa385c6197cf42097204306_Review-Image-03.webp"
                      alt=""
                      className="review-image item-three"
                    />
                  </div>
                  <div className="review-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 77 18"
                      fill="none"
                      className="review-rating"
                    >
                      <path
                        d="M7.23374 3.26343L9.33921 7.41952L14.0464 8.07806L10.6326 11.3122L11.4447 15.8781L7.23374 13.7268L3.00776 15.8781L3.81987 11.3122L0.406006 8.07806L5.12827 7.41952L7.23374 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M22.8894 3.26343L24.9948 7.41952L29.7171 8.07806L26.3032 11.3122L27.1003 15.8781L22.8894 13.7268L18.6784 15.8781L19.4755 11.3122L16.0767 8.07806L20.7839 7.41952L22.8894 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M38.5602 3.26343L40.6656 7.41952L45.3729 8.07806L41.959 11.3122L42.7711 15.8781L38.5602 13.7268L34.3342 15.8781L35.1463 11.3122L31.7324 8.07806L36.4396 7.41952L38.5602 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M54.2158 3.26343L56.3212 7.41952L61.0435 8.07806L57.6296 11.3122L58.4267 15.8781L54.2158 13.7268L50.0048 15.8781L50.8019 11.3122L47.4031 8.07806L52.1103 7.41952L54.2158 3.26343Z"
                        fill="currentColor"
                      />
                      <path
                        d="M69.8866 3.26343L71.992 7.41952L76.6993 8.07806L73.2854 11.3122L74.0975 15.8781L69.8866 13.7268L65.6606 15.8781L66.4727 11.3122L63.0588 8.07806L67.7661 7.41952L69.8866 3.26343Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="review-label">
                      4.9 Rated<span className="review-span"> 312 verified review</span>
                    </div>
                  </div>
                </div>
                <a href="#scroll" className="home-link">
                  Scroll
                </a>
                <div className="home-wrap w-dyn-list">
                  <div role="list" className="home-list w-dyn-items">
                    <div role="listitem" className="home-item w-dyn-item">
                      <a
                        aria-label="Link Block"
                        href="/product/cricket-bat"
                        className="home-card w-inline-block"
                      >
                        <div className="home-img">
                          <img
                            alt="Cricket Bat"
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            src="/assets/ce44048b56-6abccb6c31ad87fd562854a8_Cricket-Bat.webp"
                            className="home-image"
                          />
                        </div>
                        <div className="home-cont">
                          <div className="home-wrapper">
                            <div className="home-wrapper-text">Latest Products</div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 20 20"
                              fill="none"
                              className="home-wrapper-icon"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.4912 5.62515L9.17107 5.625L9.17112 4.375L15.625 4.37522L15.625 10.8017L14.375 10.8016L14.375 6.50907L5.44198 15.4419L4.55811 14.5581L13.4912 5.62515Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="home-content">
                            <div className="home-name">Cricket Bat</div>
                            <div className="home-prices">
                              <div>$139.99</div>
                              <div className="home-price">$179.99</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-thumb">
                <img
                  src="/assets/a7f10591b5-6aab69f3049f7bbe33dc0a6c_Our-Trending-Badminton-Collections.webp"
                  alt="Our Trending Badminton Collection"
                  className="home-bg item-one"
                />
                <img
                  src="/assets/ff1773b60d-6aab6a0c5283e4a43e6e413c_Our-Trending-Cricket-Collections.webp"
                  alt="Our Trending Cricket Collection"
                  className="home-bg item-two"
                />
                <img
                  src="/assets/3498b59b8e-6aab6a1f3d2e4343bbc8e7cb_Our-Trending-Hockey-Collections.webp"
                  alt="Our Trending Hockey Collection"
                  className="home-bg item-three"
                />
                <img
                  src="/assets/5e4b20713b-6aab6a4dd820bf1cbfae9148_Our-Trending-Tennis-Collections.webp"
                  alt="Our Trending Tennis Collection"
                  className="home-bg item-four"
                />
                <img
                  src="/assets/3fa7c0e088-6aab6a5f0a11e533590461e4_Our-Trending-GYM-Collections.webp"
                  alt="Our Trending GYM Collection"
                  className="home-bg item-five"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="scroll" className="about-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="about-block">
                <div className="about-text-block">
                  <div text-animation="" className="about-text">
                    <div className="about-info">
                      <div className="section-info">About Us</div>
                    </div>
                    <div className="about-title">
                      <div className="about-title-text">
                        We deliver durable, high-performance sports gear and
                      </div>
                      <div className="about-title-info">
                        <div className="about-title-text">outdoor equipment built</div>
                        <div className="about-title-gap" />
                        <div className="about-title-text">for real-world results.</div>
                      </div>
                      <div className="about-title-text display-show-for-mobile">
                        We deliver durable, high-performance sports gear and outdoor equipment built
                        for real-world results.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-image-block">
                  <img
                    src="/assets/d440532150-6aa7c95aaa1049e4bf004d12_About-Image.webp"
                    loading="lazy"
                    alt="We deliver durable, high-performance sports gear and outdoor equipment built for real-world results."
                    className="about-image"
                  />
                </div>
                <div className="about-button-block">
                  <a
                    text-animation=""
                    aria-label="Link Block"
                    href="#scroll-down"
                    className="about-button w-inline-block"
                  >
                    <div className="about-button-text">Scroll Down</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="about-button-icon"
                    >
                      <path
                        d="M6.4201 1.17233L6.41542 11.4137L4.49908 9.5008C4.38926 9.38792 4.23845 9.32418 4.08095 9.32418C3.56125 9.32859 3.30606 9.95881 3.67649 10.3233L6.59202 13.2423C6.81995 13.4708 7.19009 13.4708 7.41803 13.2423L10.3336 10.3233C10.9046 9.77196 10.0546 8.92676 9.50641 9.5008L7.58209 11.4251L7.58676 1.17233C7.59261 0.843495 7.32547 0.574848 6.99659 0.578155C6.67262 0.58036 6.41378 0.848412 6.4201 1.17233Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="scroll-down" className="featured-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="featured-block">
                <div className="featured-text-block">
                  <div data-wf--section-text--variant="left" className="section-text">
                    <div section-text="" className="section-info">
                      Featured
                    </div>
                    <h2 section-text="" className="section-title">
                      Best Selling Products
                    </h2>
                  </div>
                </div>
                <div className="featured-card-block">
                  <div className="shop-wrapp w-dyn-list">
                    <div role="list" className="shop-list _3-columns w-dyn-items">
                      {getProducts([
                        "pro-football-boots",
                        "cricket-bat",
                        "football",
                        "badminton-racket",
                        "hockey-bat",
                        "tennis-ball",
                      ]).map((product) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          animation="card-animation"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="category-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="category-block">
                <div className="category-text-block">
                  <div
                    data-wf--section-text--variant="center"
                    className="section-text w-variant-d4089c2a-dd7f-7e7d-077e-4b7e2be9bf72"
                  >
                    <div section-text="" className="section-info">
                      Product Categories
                    </div>
                    <h2 section-text="" className="section-title">
                      Shop By Category
                    </h2>
                  </div>
                </div>
                <div className="category-wrap-block">
                  <div text-animation="" className="category-wrap">
                    <div className="category-wrapper is-hover">
                      <div className="category-card is-hover w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <div className="category-desp">
                              <div className="category-info">
                                <div className="category-num">01</div>
                                <div className="category-line" />
                              </div>
                              <div className="category-title">GYM Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-text w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <a
                              aria-label="Link Block"
                              href="/product-category/gym"
                              className="category-cont w-inline-block"
                            >
                              <div className="category-thumb">
                                <img
                                  src="/assets/3044496e5d-6aa3e1459aa303409242004c_GYM-Products.webp"
                                  loading="lazy"
                                  alt="GYM"
                                  className="category-image"
                                />
                              </div>
                              <div className="category-details">
                                <div className="category-number">
                                  <div className="category-number">01</div>
                                  <div className="category-number">.</div>
                                </div>
                                <div className="category-excerpt">
                                  Our collection includes Barbell Weight Sets, Kettlebell Sets,
                                  Resistance Band Sets, and Workout Benches, everything you need for
                                  a complete and effective home workout.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="category-wrapper">
                      <div className="category-card w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <div className="category-desp">
                              <div className="category-info">
                                <div className="category-num">02</div>
                                <div className="category-line" />
                              </div>
                              <div className="category-title">Football Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-text w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <a
                              aria-label="Link Block"
                              href="/product-category/football"
                              className="category-cont w-inline-block"
                            >
                              <div className="category-thumb">
                                <img
                                  src="/assets/5c9a805bac-6aa3e1263caede545a54214b_Football-Products.webp"
                                  loading="lazy"
                                  alt="Football"
                                  className="category-image"
                                />
                              </div>
                              <div className="category-details">
                                <div className="category-number">
                                  <div className="category-number">02</div>
                                  <div className="category-number">.</div>
                                </div>
                                <div className="category-excerpt">
                                  Our collection includes Footballs, Football Boots, Goalkeeper
                                  Gloves, and Training Accessories, everything you need for a
                                  complete and enjoyable football experience.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="category-wrapper">
                      <div className="category-card w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <div className="category-desp">
                              <div className="category-info">
                                <div className="category-num">03</div>
                                <div className="category-line" />
                              </div>
                              <div className="category-title">Cricket Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-text w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <a
                              aria-label="Link Block"
                              href="/product-category/cricket"
                              className="category-cont w-inline-block"
                            >
                              <div className="category-thumb">
                                <img
                                  src="/assets/5ff3d9cd90-6aa3e13682e489893f4c4c46_Cricket-Products.webp"
                                  loading="lazy"
                                  alt="Cricket"
                                  className="category-image"
                                />
                              </div>
                              <div className="category-details">
                                <div className="category-number">
                                  <div className="category-number">03</div>
                                  <div className="category-number">.</div>
                                </div>
                                <div className="category-excerpt">
                                  Our collection includes Cricket Bats, Cricket Balls, Batting
                                  Gloves, and Protective Gear, everything you need for a complete
                                  and enjoyable cricket experience.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="category-wrapper">
                      <div className="category-card w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <div className="category-desp">
                              <div className="category-info">
                                <div className="category-num">04</div>
                                <div className="category-line" />
                              </div>
                              <div className="category-title">Badminton Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-text w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <a
                              aria-label="Link Block"
                              href="/product-category/badminton"
                              className="category-cont w-inline-block"
                            >
                              <div className="category-thumb">
                                <img
                                  src="/assets/956169ca2a-6aa3e73410279207031af788_Badminton-Products.webp"
                                  loading="lazy"
                                  alt="Badminton"
                                  className="category-image"
                                />
                              </div>
                              <div className="category-details">
                                <div className="category-number">
                                  <div className="category-number">04</div>
                                  <div className="category-number">.</div>
                                </div>
                                <div className="category-excerpt">
                                  Our collection includes Badminton Rackets, Shuttlecocks, Badminton
                                  Shoes, and Accessories, everything you need for a complete and
                                  enjoyable badminton experience.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="category-wrapper">
                      <div className="category-card w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <div className="category-desp">
                              <div className="category-info">
                                <div className="category-num">05</div>
                                <div className="category-line" />
                              </div>
                              <div className="category-title">Tennis Products</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-text w-dyn-list">
                        <div role="list" className="category-list w-dyn-items">
                          <div role="listitem" className="category-item w-dyn-item">
                            <a
                              aria-label="Link Block"
                              href="/product-category/tennis"
                              className="category-cont w-inline-block"
                            >
                              <div className="category-thumb">
                                <img
                                  src="/assets/bbd68f51fe-6aa3e4a240d64a666a345b75_Tennis-Products.webp"
                                  loading="lazy"
                                  alt="Tennis"
                                  className="category-image"
                                />
                              </div>
                              <div className="category-details">
                                <div className="category-number">
                                  <div className="category-number">05</div>
                                  <div className="category-number">.</div>
                                </div>
                                <div className="category-excerpt">
                                  Our collection includes Tennis Rackets, Tennis Balls, Tennis
                                  Shoes, and Accessories, everything you need for a complete and
                                  enjoyable tennis experience.
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="client-block">
                <div className="client-text-block">
                  <div data-wf--section-text--variant="left" className="section-text">
                    <div section-text="" className="section-info">
                      Testimonials
                    </div>
                    <h2 section-text="" className="section-title">
                      Customer’s Feedback
                    </h2>
                  </div>
                </div>
                <div className="client-wrap-block">
                  <div step-animation="" className="client-card-block">
                    <div animated-step="" className="client-card">
                      <div className="client-wrapp">
                        <div className="client-wrap">
                          <img
                            loading="lazy"
                            src="/assets/11e80a52d7-6aa3c5d4db8cb63919248444_d6d27716cb25ac5a687b43f6a86a91db_Jason-Miller.jpg"
                            alt="Jason Miller"
                            className="client-image"
                          />
                          <div className="client-conte">
                            <div className="client-author">Jason Miller</div>
                            <div className="client-design">Amateur Football Player</div>
                          </div>
                        </div>
                        <div className="client-text">
                          “The quality of the football boots is outstanding. Super comfortable and
                          perfect grip on the field.”
                        </div>
                      </div>
                      <div className="client-inform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 119 21"
                          fill="none"
                          className="client-star"
                        >
                          <path
                            d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="client-role">Brought Football Equipments</div>
                      </div>
                    </div>
                    <div animated-step="" className="client-card">
                      <div className="client-wrapp">
                        <div className="client-wrap">
                          <img
                            loading="lazy"
                            src="/assets/bbe9082c98-6aa3c5d4db8cb6391924844a_f073fdf74fc3ed9f64a3c9513b894a14_Amelia-Harris.jpg"
                            alt="Kane Wilsom"
                            className="client-image"
                          />
                          <div className="client-conte">
                            <div className="client-author">Kane Wilsom</div>
                            <div className="client-design">Fitness Enthusiast</div>
                          </div>
                        </div>
                        <div className="client-text">
                          “I ordered gym equipment and delivery was fast. Everything feels durable
                          and premium quality.”
                        </div>
                      </div>
                      <div className="client-inform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 119 21"
                          fill="none"
                          className="client-star"
                        >
                          <path
                            d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="client-role">Brought Gym Equipment</div>
                      </div>
                    </div>
                    <div animated-step="" className="client-card">
                      <div className="client-wrapp">
                        <div className="client-wrap">
                          <img
                            loading="lazy"
                            src="/assets/b8574d0810-6aa3c5d4db8cb63919248447_3eefb6c2dfe613d7d619d315cd7d7586_Sarah-Thompson.jpg"
                            alt="Sarah Thompson"
                            className="client-image"
                          />
                          <div className="client-conte">
                            <div className="client-author">Sarah Thompson</div>
                            <div className="client-design">Passionate Cricketer</div>
                          </div>
                        </div>
                        <div className="client-text">
                          “The quality of the football boots is outstanding. Super comfortable and
                          perfect grip on the field.”
                        </div>
                      </div>
                      <div className="client-inform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 119 21"
                          fill="none"
                          className="client-star"
                        >
                          <path
                            d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                            fill="currentColor"
                          />
                          <path
                            d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="client-role">Brought Cricket Equipments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client-slider-block">
                  <div
                    data-delay="4000"
                    data-animation="slide"
                    className="global-slider w-slider"
                    text-animation=""
                    data-autoplay="false"
                    data-easing="ease"
                    data-hide-arrows="false"
                    data-disable-swipe="false"
                    data-autoplay-limit="0"
                    data-nav-spacing="3"
                    data-duration="500"
                    data-infinite="true"
                  >
                    <div className="global-mask client w-slider-mask">
                      <div className="global-slide w-slide">
                        <div className="client-card">
                          <div className="client-wrapp">
                            <div className="client-wrap">
                              <img
                                loading="lazy"
                                src="/assets/11e80a52d7-6aa3c5d4db8cb63919248444_d6d27716cb25ac5a687b43f6a86a91db_Jason-Miller.jpg"
                                alt="Jason Miller"
                                className="client-image"
                              />
                              <div className="client-conte">
                                <div className="client-author">Jason Miller</div>
                                <div className="client-design">Amateur Football Player</div>
                              </div>
                            </div>
                            <div className="client-text">
                              “The quality of the football boots is outstanding. Super comfortable
                              and perfect grip on the field.”
                            </div>
                          </div>
                          <div className="client-inform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 119 21"
                              fill="none"
                              className="client-star"
                            >
                              <path
                                d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                                fill="currentColor"
                              />
                            </svg>
                            <div className="client-role">Brought Football Equipments</div>
                          </div>
                        </div>
                      </div>
                      <div className="global-slide w-slide">
                        <div className="client-card">
                          <div className="client-wrapp">
                            <div className="client-wrap">
                              <img
                                loading="lazy"
                                src="/assets/bbe9082c98-6aa3c5d4db8cb6391924844a_f073fdf74fc3ed9f64a3c9513b894a14_Amelia-Harris.jpg"
                                alt="Kane Wilsom"
                                className="client-image"
                              />
                              <div className="client-conte">
                                <div className="client-author">Kane Wilsom</div>
                                <div className="client-design">Fitness Enthusiast</div>
                              </div>
                            </div>
                            <div className="client-text">
                              “I ordered gym equipment and delivery was fast. Everything feels
                              durable and premium quality.”
                            </div>
                          </div>
                          <div className="client-inform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 119 21"
                              fill="none"
                              className="client-star"
                            >
                              <path
                                d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                                fill="currentColor"
                              />
                            </svg>
                            <div className="client-role">Brought Gym Equipment</div>
                          </div>
                        </div>
                      </div>
                      <div className="global-slide w-slide">
                        <div className="client-card">
                          <div className="client-wrapp">
                            <div className="client-wrap">
                              <img
                                loading="lazy"
                                src="/assets/b8574d0810-6aa3c5d4db8cb63919248447_3eefb6c2dfe613d7d619d315cd7d7586_Sarah-Thompson.jpg"
                                alt="Sarah Thompson"
                                className="client-image"
                              />
                              <div className="client-conte">
                                <div className="client-author">Sarah Thompson</div>
                                <div className="client-design">Passionate Cricketer</div>
                              </div>
                            </div>
                            <div className="client-text">
                              “The quality of the football boots is outstanding. Super comfortable
                              and perfect grip on the field.”
                            </div>
                          </div>
                          <div className="client-inform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 119 21"
                              fill="none"
                              className="client-star"
                            >
                              <path
                                d="M20.6017 7.25125L13.9567 6.28525L10.9837 0.26325C10.8097 -0.08775 10.2307 -0.08775 10.0597 0.26325L7.08572 6.28525L0.441722 7.25125C0.247722 7.28025 0.0847223 7.41625 0.0257223 7.60325C-0.0352777 7.79025 0.0137223 7.99425 0.156722 8.13025L4.96372 12.8172L3.82972 19.4373C3.79472 19.6313 3.87472 19.8262 4.03372 19.9402C4.19272 20.0562 4.40372 20.0712 4.57772 19.9802L10.5207 16.8552L16.4647 19.9802C16.5387 20.0203 16.6207 20.0392 16.7047 20.0392C16.8107 20.0392 16.9167 20.0062 17.0077 19.9402C17.1647 19.8262 17.2437 19.6313 17.2097 19.4373L16.0757 12.8172L20.8847 8.13025C21.0277 7.99425 21.0757 7.78925 21.0177 7.60325C20.9567 7.41625 20.7967 7.28025 20.6017 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M44.9747 7.25125L38.3317 6.28525L35.3577 0.26325C35.1857 -0.08775 34.6057 -0.08775 34.4347 0.26325L31.4587 6.28525L24.8157 7.25125C24.6227 7.28025 24.4607 7.41625 24.3997 7.60325C24.3377 7.79025 24.3887 7.99425 24.5317 8.13025L29.3397 12.8172L28.2027 19.4373C28.1727 19.6313 28.2497 19.8262 28.4057 19.9402C28.5677 20.0562 28.7787 20.0712 28.9497 19.9802L34.8957 16.8552L40.8377 19.9802C40.9117 20.0203 40.9947 20.0392 41.0777 20.0392C41.1857 20.0392 41.2917 20.0062 41.3837 19.9402C41.5387 19.8262 41.6197 19.6313 41.5847 19.4373L40.4497 12.8172L45.2607 8.13025C45.3997 7.99425 45.4497 7.78925 45.3917 7.60325C45.3317 7.41625 45.1707 7.28025 44.9747 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M69.6007 7.25125L62.9577 6.28525L59.9847 0.26325C59.8117 -0.08775 59.2317 -0.08775 59.0607 0.26325L56.0867 6.28525L49.4427 7.25125C49.2487 7.28025 49.0857 7.41625 49.0267 7.60325C48.9647 7.79025 49.0127 7.99425 49.1577 8.13025L53.9657 12.8172L52.8287 19.4373C52.7957 19.6313 52.8757 19.8262 53.0347 19.9402C53.1917 20.0562 53.4047 20.0712 53.5777 19.9802L59.5217 16.8552L65.4657 19.9802C65.5387 20.0203 65.6217 20.0392 65.7037 20.0392C65.8107 20.0392 65.9177 20.0062 66.0067 19.9402C66.1637 19.8262 66.2457 19.6313 66.2107 19.4373L65.0767 12.8172L69.8857 8.13025C70.0267 7.99425 70.0767 7.78925 70.0167 7.60325C69.9577 7.41625 69.7957 7.28025 69.6007 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.4877 7.25125L86.8427 6.28525L83.8687 0.26325C83.6937 -0.08775 83.1157 -0.08775 82.9457 0.26325L79.9717 6.28525L73.3267 7.25125C73.1307 7.28025 72.9727 7.41625 72.9097 7.60325C72.8487 7.79025 72.8977 7.99425 73.0397 8.13025L77.8497 12.8172L76.7137 19.4373C76.6797 19.6313 76.7587 19.8262 76.9177 19.9402C77.0767 20.0562 77.2877 20.0712 77.4617 19.9802L83.4057 16.8552L89.3477 19.9802C89.4237 20.0203 89.5057 20.0392 89.5897 20.0392C89.6947 20.0392 89.8007 20.0062 89.8917 19.9402C90.0477 19.8262 90.1277 19.6313 90.0947 19.4373L88.9617 12.8172L93.7697 8.13025C93.9087 7.99425 93.9587 7.78925 93.8997 7.60325C93.8407 7.41625 93.6787 7.28025 93.4877 7.25125Z"
                                fill="currentColor"
                              />
                              <path
                                d="M118.278 7.60325C118.217 7.41625 118.053 7.28025 117.861 7.25125L111.216 6.28525L108.242 0.26325C108.07 -0.08775 107.492 -0.08775 107.318 0.26325L104.347 6.28525L97.7007 7.25125C97.5067 7.28025 97.3457 7.41625 97.2847 7.60325C97.2227 7.79025 97.2727 7.99425 97.4157 8.13025L102.224 12.8172L101.09 19.4373C101.057 19.6313 101.134 19.8262 101.295 19.9402C101.453 20.0562 101.664 20.0712 101.837 19.9802L107.78 16.8552L113.725 19.9802C113.799 20.0203 113.88 20.0392 113.964 20.0392C114.071 20.0392 114.177 20.0062 114.269 19.9402C114.424 19.8262 114.504 19.6313 114.47 19.4373L113.337 12.8172L118.145 8.13025C118.288 7.99425 118.337 7.79025 118.278 7.60325Z"
                                fill="currentColor"
                              />
                            </svg>
                            <div className="client-role">Brought Cricket Equipments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="global-arrow w-slider-arrow-left">
                      <div className="w-icon-slider-left" />
                    </div>
                    <div className="global-arrow w-slider-arrow-right">
                      <div className="w-icon-slider-right" />
                    </div>
                    <div className="global-nav w-slider-nav w-round w-num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="latest-block">
                <div className="latest-text-block">
                  <div
                    data-wf--section-text--variant="center"
                    className="section-text w-variant-d4089c2a-dd7f-7e7d-077e-4b7e2be9bf72"
                  >
                    <div section-text="" className="section-info">
                      Blog
                    </div>
                    <h2 section-text="" className="section-title">
                      Latest Article &amp; Insights
                    </h2>
                  </div>
                </div>
                <div className="latest-wrap-block">
                  <div className="blog-wrap w-dyn-list">
                    <div role="list" className="blog-list w-dyn-items">
                      {getPosts([
                        "how-to-choose-the-right-sports-equipment-for-beginners",
                        "best-badminton-rackets-for-power-and-control-in-2026-guide",
                        "complete-guide-to-choosing-the-perfect-cricket-bat-for-players",
                        "how-to-improve-badminton-footwork-for-faster-movement-and-better-court-coverage",
                        "best-home-gym-equipment-guide-for-strength-training-and-daily-fitness-workouts",
                        "top-running-gear-essentials-for-comfort-speed-performance-and-injury-prevention-tips",
                      ]).map((post) => (
                        <BlogCard key={post.slug} post={post} animation="text-animation" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BenefitsSection variant="home" />
      </div>
    </SiteShell>
  );
}

// Hides animated elements until Webflow interactions have initialised.
const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
