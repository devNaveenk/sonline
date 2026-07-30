import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/detailPagesContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sonline Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Blog
      </Link>

      <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {post.author} | {post.date}
      </p>

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
          </div>
        ))}
      </div>
    </article>
  );
}
