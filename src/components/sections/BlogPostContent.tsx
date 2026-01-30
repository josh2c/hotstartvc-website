import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <article className="px-6 pt-32 pb-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Blog
        </Link>

        {/* Category badge */}
        <div className="mt-8">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `rgba(${post.accentColor}, 0.15)`,
              color: `rgb(${post.accentColor})`,
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex items-center gap-3 text-sm text-foreground/50">
          <span className="font-medium">{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/20" />
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/20" />
          <span>{post.readTimeMinutes} min read</span>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-border" />

        {/* Body paragraphs */}
        <div className="mt-8 space-y-6">
          {post.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-foreground/70 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
