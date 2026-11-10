import type { Post } from "@/data/blog";
import { animationAttr, type Animation } from "@/components/animation";

/** Blog post card used on the home page, blog index and blog category pages. */
export default function BlogCard({ post, animation }: { post: Post; animation?: Animation }) {
  return (
    <div role="listitem" className="blog-item w-dyn-item" {...animationAttr(animation)}>
      <a
        {...{ clickable: "" }}
        aria-label="Blog Post"
        href={`/blog/${post.slug}`}
        className="blog-card w-inline-block"
      >
        <div className="blog-thumb">
          <img
            src={post.thumbnail}
            loading="lazy"
            {...{ scaleup: "" }}
            alt={post.title}
            className="blog-image"
          />
        </div>
        <div className="blog-details">
          <div className="blog-dated">{post.date}</div>
          <div className="blog-name">{post.title}</div>
        </div>
      </a>
    </div>
  );
}
