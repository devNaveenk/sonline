import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { insightPosts } from "@/lib/detailPagesContent";

interface InsightPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sonline Insights`,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:py-14">
      <Link
        href="/insights"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Insights
      </Link>

      <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{post.author}</p>

      {post.videoId ? (
        <a
          href={`https://www.youtube.com/watch?v=${post.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 block aspect-[16/9] overflow-hidden rounded-2xl bg-muted-bg cursor-pointer"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-1 h-6 w-6 text-ink" fill="currentColor" aria-hidden="true" />
            </span>
          </div>
        </a>
      ) : (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-muted-bg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-8 space-y-8">
        {post.sections.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
            )}
            {section.body &&
              section.body.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {section.image && (
              <div className="relative mt-4 overflow-hidden rounded-xl border border-border bg-white">
                <Image
                  src={section.image}
                  alt={section.heading ?? post.title}
                  width={960}
                  height={720}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
