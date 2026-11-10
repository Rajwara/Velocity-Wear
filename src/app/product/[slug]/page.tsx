import WishlistButton from "@/components/wishlist/WishlistButton";
import AddToCartForm from "@/components/cart/AddToCartForm";
import type { Metadata } from "next";
import { socialMeta } from "@/lib/share";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";
import BenefitsSection from "@/components/BenefitsSection";
import ProductCard from "@/components/ProductCard";
import { getCategory, getProduct, getRelatedProducts, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    ...socialMeta({
      title: product.seo.title,
      description: product.seo.description,
      image: `/images/share/products/${product.slug}.jpg`,
      alt: product.name,
    }),
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  if (!category) notFound();
  const related = getRelatedProducts(product.slug);
  return (
    <SiteShell
      pageId="6a9fc651ba671b490063dd13"
      bundle="product"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="product-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="product-block">
              <div className="product-info-block">
                <div hero-text="" className="product-info">
                  <a href="/shop" aria-label="Text Link" className="product-info-link">
                    Products
                  </a>
                  <div className="product-info-text">/</div>
                  <a
                    href={`/product-category/${category.slug}`}
                    aria-label="Text Link"
                    className="product-info-link"
                  >
                    {category.name}
                  </a>
                  <div className="product-info-text">/</div>
                  <div className="product-info-text light-gray">Product Details</div>
                </div>
              </div>
              <div className="product-title-block">
                <h1 hero-text="" className="product-title">
                  {product.name}
                </h1>
              </div>
              <div className="product-text-block">
                <div hero-text="" className="product-thumb-block">
                  <div
                    data-current="Tab 1"
                    data-easing="ease-in-out-quad"
                    data-duration-in="500"
                    data-duration-out="200"
                    className="product-tabs w-tabs"
                  >
                    <div className="product-tabs-menu w-tab-menu">
                      <a data-w-tab="Tab 1" className="product-tab-link w-inline-block w-tab-link">
                        <img
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                          src={product.image}
                          alt={product.name}
                          className="product-thumb item-one"
                        />
                      </a>
                      <a data-w-tab="Tab 2" className="product-tab-link w-inline-block w-tab-link">
                        <img
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                          src={product.image}
                          alt={product.name}
                          className="product-thumb item-two"
                        />
                      </a>
                      <a data-w-tab="Tab 3" className="product-tab-link w-inline-block w-tab-link">
                        <img
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                          src={product.image}
                          alt={product.name}
                          className="product-thumb item-three"
                        />
                      </a>
                      <a data-w-tab="Tab 4" className="product-tab-link w-inline-block w-tab-link">
                        <img
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                          src={product.image}
                          alt={product.name}
                          className="product-thumb item-four"
                        />
                      </a>
                    </div>
                    <div className="product-tabs-wrap w-tab-content">
                      <div data-w-tab="Tab 1" className="product-tab-pane w-tab-pane w--tab-active">
                        <div className="product-wrapper">
                          <img
                            loading="lazy"
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            src={product.image}
                            alt={product.name}
                            className="product-thumb auto-one"
                          />
                        </div>
                      </div>
                      <div data-w-tab="Tab 2" className="product-tab-pane w-tab-pane">
                        <div className="product-wrapper">
                          <img
                            loading="lazy"
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            src={product.image}
                            alt={product.name}
                            className="product-thumb auto-two"
                          />
                        </div>
                      </div>
                      <div data-w-tab="Tab 3" className="product-tab-pane w-tab-pane">
                        <div className="product-wrapper">
                          <img
                            loading="lazy"
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            src={product.image}
                            alt={product.name}
                            className="product-thumb auto-three"
                          />
                        </div>
                      </div>
                      <div data-w-tab="Tab 4" className="product-tab-pane w-tab-pane">
                        <div className="product-wrapper">
                          <img
                            loading="lazy"
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            src={product.image}
                            alt={product.name}
                            className="product-thumb auto-four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div hero-text="" className="product-details-block">
                  <div className="product-wrap-block">
                    <div className="product-name-block">
                      <div className="product-name">{product.name}</div>
                      <div className="product-excerpt">{product.excerpt}</div>
                    </div>
                    <div className="product-price-block">
                      <div className="product-pricing">
                        <div className="product-original">{product.price}</div>
                        <div className="product-compare">{product.comparePrice}</div>
                      </div>
                      <div className="product-review">
                        <img
                          src="/images/icons/rating-4-star.svg"
                          alt="4 Star"
                          className="product-star"
                        />
                        <div className="product-text">(10) Customer Review</div>
                      </div>
                    </div>
                    <div className="product-cart-block">
                      <div className="product-cart">
                        <AddToCartForm
                          slug={product.slug}
                          className="w-commerce-commerceaddtocartform product-default"
                        >
                          <label
                            htmlFor="quantity-c78f4bf34b22f8525118f52cf663e99a"
                            className="product-content"
                          >
                            Quantity
                          </label>
                          <input
                            type="number"
                            pattern="^[0-9]+$"
                            inputMode="numeric"
                            id="quantity-c78f4bf34b22f8525118f52cf663e99a"
                            name="quantity"
                            min="1"
                            className="w-commerce-commerceaddtocartquantityinput product-quantity"
                            defaultValue="1"
                          />
                          <input
                            type="submit"
                            className="w-commerce-commerceaddtocartbutton product-addbutton"
                            value="Add to Cart"
                          />
                        </AddToCartForm>
                        <WishlistButton slug={product.slug} name={product.name} variant="full" />
                      </div>
                    </div>
                  </div>
                  <div className="product-faq-block">
                    <div className="product-faq is-active">
                      <div className="product-toggle">
                        <div className="product-faq-text">Description</div>
                        <div className="product-faq-icon is-active w-icon-dropdown-toggle" />
                      </div>
                      <div className="product-wrapp">
                        <div className="product-wrap-excerpt">{product.description}</div>
                      </div>
                    </div>
                    <div className="product-faq">
                      <div className="product-toggle">
                        <div className="product-faq-text">Return Policy</div>
                        <div className="product-faq-icon w-icon-dropdown-toggle" />
                      </div>
                      <div className="product-wrapp">
                        <div className="product-wrap-excerpt">{product.returnPolicy}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-section">
          <div className="section-space">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="related-block">
                <div className="related-text-block">
                  <div className="related-text">
                    <div data-wf--section-text--variant="left" className="section-text">
                      <div section-text="" className="section-info">
                        Similar Products
                      </div>
                      <h2 section-text="" className="section-title">
                        More Related Products
                      </h2>
                    </div>
                    <div className="related-btn">
                      <Button variant="primary" href="/shop">
                        All Products
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="related-card-block">
                  <div className="related-card display-show-desktop">
                    <div className="shop-wrapp w-dyn-list">
                      <div role="list" className="shop-list _3-columns w-dyn-items">
                        {related.slice(0, 3).map((product) => (
                          <ProductCard
                            key={product.slug}
                            product={product}
                            animation="card-animation"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="related-card display-show-for-mobile">
                    <div className="shop-wrapp w-dyn-list">
                      <div role="list" className="shop-list _3-columns w-dyn-items">
                        {related.slice(0, 2).map((product) => (
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
                <div className="related-btn-block">
                  <Button variant="primary" href="/shop">
                    All Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BenefitsSection variant="base" />
      </div>
    </SiteShell>
  );
}

const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
