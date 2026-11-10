import type { Metadata } from "next";
import { socialMeta } from "@/lib/share";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import BenefitsSection from "@/components/BenefitsSection";
import ProductCard from "@/components/ProductCard";
import ShopCategoryNav from "@/components/ShopCategoryNav";
import { categories, getCategory, getProductsByCategory } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  if (!category) return {};
  return {
    title: category.seo.title,
    description: category.seo.description,
    ...socialMeta({
      title: category.seo.title,
      description: category.seo.description,
      image: `/images/share/categories/${category.slug}.jpg`,
      alt: category.title,
    }),
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const categoryProducts = getProductsByCategory(category.slug);
  return (
    <SiteShell
      pageId="6aa0e059b75af79d7249c05e"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="shop-block">
              <div className="shop-title-block">
                <h1 hero-text="" className="shop-title">
                  {category.title}
                </h1>
              </div>
              <div className="shop-post-block">
                <div hero-text="" className="shop-post">
                  <div className="shop-menu-block">
                    <div className="shop-wrapper">
                      <div className="shop-heading">Categories</div>
                      <ShopCategoryNav current={category.slug} />
                    </div>
                  </div>
                  <div
                    id="w-node-_6cf7382e-f6aa-7ebf-b5a2-5c8c912f84b5-7249c05e"
                    className="shop-wrapp-block"
                  >
                    <div className="shop-wrapp w-dyn-list">
                      <div role="list" className="shop-list w-dyn-items">
                        {categoryProducts.map((product) => (
                          <ProductCard key={product.slug} product={product} />
                        ))}
                      </div>
                    </div>
                  </div>
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
