import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { insightPosts } from "@/lib/detailPagesContent";

export const metadata: Metadata = {
  title: "Insights | Sonline",
  description:
    "Perspectives from the Sonline team on change management, leadership, community, and business partnership.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-muted-bg py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-widest text-primary">INSIGHTS</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Perspectives on leadership, change, and community.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insightPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
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
                {post.videoId && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                      <Play className="ml-0.5 h-5 w-5 text-ink" fill="currentColor" aria-hidden="true" />
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">{post.author}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary">
                  {post.videoId ? "WATCH VIDEO" : "READ MORE"}
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
