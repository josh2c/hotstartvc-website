import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-lg md:rounded-3xl">
        {/* Cover image or colored header */}
        <div
          className="flex h-48 items-end p-6"
          style={{
            background: post.coverImage
              ? `url(${post.coverImage}) center/cover`
              : `linear-gradient(135deg, rgba(${post.accentColor}, 0.15) 0%, rgba(${post.accentColor}, 0.05) 100%)`,
          }}
        >
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

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-extrabold leading-tight tracking-tight text-foreground group-hover:text-foreground/80 md:text-xl">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/50">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-4 flex items-center gap-3 text-xs text-foreground/40">
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>{formattedDate}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>{post.readTimeMinutes} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
