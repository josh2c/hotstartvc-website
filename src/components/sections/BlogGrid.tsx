"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  blogPosts,
  blogCategories,
  type BlogCategory,
} from "@/lib/blog-data";
import BlogCard from "@/components/ui/BlogCard";

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory | "All">(
    "All"
  );

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeFilter);

  return (
    <section className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Filter pills */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {(["All", ...blogCategories] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  activeFilter === category
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-transparent text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <p className="text-lg text-foreground/40">
              No posts in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
