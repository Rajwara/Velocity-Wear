import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { getBlogCategory, getPost, posts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.seo.title, description: post.seo.description };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const category = getBlogCategory(post.category);
  if (!category) notFound();
  return (
    <SiteShell
      pageId="6aa0e1d9103a27afa188a0eb"
      bundle="default"
      headerVariant="base"
      styles={pageStyles}
    >
      <div className="main-wrapper">
        <section className="global-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="blog-details-block">
              <div className="blog-text-block">
                <div className="blog-label-block">
                  <div hero-text="" className="blog-label">
                    <a aria-label="Text Link" href="/blog" className="blog-label-link">
                      Blog
                    </a>
                    <div className="blog-label-text">&nbsp;/ Blog Details</div>
                  </div>
                </div>
                <div className="blog-heading-block">
                  <h1 hero-text="" className="blog-heading">
                    {post.title}
                  </h1>
                </div>
                <div className="blog-information-block">
                  <div hero-text="" className="blog-information">
                    <div
                      id="w-node-_48606d14-e6e1-73c1-7d0f-cac72b241495-a188a0eb"
                      className="blog-information-wrap"
                    >
                      <div className="blog-information-text">
                        <strong>Category :&nbsp;</strong>
                      </div>
                      <a href={`/blog-category/${category.slug}`} className="blog-information-link">
                        {category.name}
                      </a>
                    </div>
                    <div
                      id="w-node-_492b1646-24c6-4406-0649-149cacd72077-a188a0eb"
                      className="blog-information-wrap"
                    >
                      <div className="blog-information-text">
                        <strong>Dated:&nbsp;</strong>
                      </div>
                      <div className="blog-information-text">{post.date}</div>
                    </div>
                    <div
                      id="w-node-_0dab1770-a7fe-7d30-a31e-b747b878b70d-a188a0eb"
                      className="blog-information-wrap"
                    >
                      <div className="blog-information-text">
                        <strong>Author:&nbsp;</strong>
                      </div>
                      <div className="blog-information-text">{post.author}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-image-block">
                <div hero-text="" className="blog-image-wrap">
                  <img src={post.image} loading="lazy" alt={post.title} className="blog-image" />
                </div>
              </div>
              <div className="blog-content-block">
                <div
                  hero-text=""
                  className="blog-content w-richtext"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

const pageStyles =
  'html.w-mod-js:not(.w-mod-ix3):is([hero-text]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([hero-text]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([text-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([card-animation]) * {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3) :is(:is(.button, .button) .button-text, .middle, [hero-text], [text-animation], [card-animation], [counter] [counter-forward], [counter] [counter-reverse], .steps-wrapp .steps-card, :is(.story-video, .story-video) .story-state.play-state, [data-wf-target*=\'["6a9f93205a63e5051cc64757","a1904db8-5b25-8ca7-3967-4f9219595d42"]\'], .home-bg.item-one, .home-heading.item-one, [data-wf-target*=\'["6a9f93205a63e5051cc64757","c8b10b84-ed66-4d51-bce6-587a0df37f38"]\'], .home-bg.item-two, .home-heading.item-two, [data-wf-target*=\'["6a9f93205a63e5051cc64757","30911678-ec42-5ea3-6ee0-239caa978090"]\'], .home-bg.item-three, .home-heading.item-three, [data-wf-target*=\'["6a9f93205a63e5051cc64757","e476e40d-25e8-1cef-6349-0de39afb8562"]\'], .home-bg.item-four, .home-heading.item-four, [data-wf-target*=\'["6a9f93205a63e5051cc64757","2f2dad9a-eb0a-7516-3ad1-a0acaa52d04e"]\'], .home-bg.item-five, .home-heading.item-five, .section-text [section-text], .buy-now-details, .buy-now-line, .buy-now-icon) {visibility: hidden !important;}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){@media not all and (max-width: 991px) and (min-width: 768px){html.w-mod-js:not(.w-mod-ix3) :is(.team-height .team-card.item-one, .team-height .team-card.item-two, .team-height .team-card.item-three) {visibility: hidden !important;}}}}@media not all and (max-width: 479px) and (min-width: 0px){@media not all and (max-width: 767px) and (min-width: 480px){html.w-mod-js:not(.w-mod-ix3) :is([step-animation] [animated-step]) {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3):is([animated-step]) {visibility: hidden !important;}html.w-mod-js:not(.w-mod-ix3):is([animated-step]) * {visibility: hidden !important;}}}@media not all and (max-width: 991px) and (min-width: 768px){@media not all and (min-width: 992px){html.w-mod-js:not(.w-mod-ix3) :is([animated-step]) {visibility: hidden !important;}}}';
