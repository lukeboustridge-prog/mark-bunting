import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Flame } from "lucide-react";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

export const revalidate = 60;

const SITE_URL = "https://markbunting.co.nz";

const categoryColors: Record<string, string> = {
  Connection: "bg-primary/10 text-primary",
  Language: "bg-accent/10 text-accent-dark",
  Framework: "bg-secondary/10 text-secondary",
  "Orange Flame": "bg-primary/10 text-primary",
  Leadership: "bg-secondary/10 text-secondary",
  Culture: "bg-accent/10 text-accent-dark",
  Listening: "bg-accent/10 text-accent-dark",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] || "bg-primary/10 text-primary";
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

async function getPost(slug: string) {
  const [post] = await db
    .select()
    .from(blogPosts)
    .where(and(eq(blogPosts.slug, slug), eq(blogPosts.published, true)))
    .limit(1);
  return post ?? null;
}

export async function generateStaticParams() {
  const posts = await db
    .select({ slug: blogPosts.slug })
    .from(blogPosts)
    .where(eq(blogPosts.published, true));
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Mark Bunting`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl ? [post.imageUrl] : undefined,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt?.toISOString(),
    author: { "@type": "Person", name: "Mark Bunting", url: SITE_URL },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to the blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(post.category)}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-slate">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-charcoal-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Hero image */}
      {post.imageUrl ? (
        <section className="pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-warm-white shadow-sm border border-primary/10">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative aspect-[16/9] gradient-fire rounded-2xl flex items-center justify-center">
              <Flame className="w-16 h-16 text-white/70" />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <article className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-charcoal prose-p:text-charcoal-light prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-charcoal prose-blockquote:border-primary prose-blockquote:text-charcoal-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
