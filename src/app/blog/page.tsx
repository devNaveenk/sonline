import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Blog | Sonline",
  description:
    "Articles, industry stories, government regulations, and innovation insights from Sonline.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">BLOG</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Collection of latest articles, industry stories, government
            regulations, and innovation.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-muted-bg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary">
                  READ MORE
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
