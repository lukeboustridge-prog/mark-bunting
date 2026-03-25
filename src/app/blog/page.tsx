import Link from "next/link";
import Image from "next/image";
import { Flame, Clock, ArrowRight, BookOpen } from "lucide-react";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const revalidate = 60;

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

export default async function BlogPage() {
  const posts = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.published, true))
    .orderBy(desc(blogPosts.publishedAt));

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-cream">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Blog</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              The Fire Blog
            </h1>
            <p className="text-lg text-charcoal-light max-w-lg mx-auto mb-12">
              Insights, stories, and practical ideas about communication &mdash;
              from the frontline of human connection.
            </p>
            <div className="rounded-2xl bg-white shadow-sm border border-primary/10 p-12">
              <Flame className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="font-display text-xl font-bold text-charcoal mb-2">
                Posts are on the way
              </p>
              <p className="text-charcoal-light">
                New articles will appear here soon. Check back shortly.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Blog</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            The Fire Blog
          </h1>
          <p className="text-lg text-charcoal-light max-w-lg mx-auto">
            Insights, stories, and practical ideas about communication &mdash;
            from the frontline of human connection.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 md:h-auto min-h-[280px]">
                {featured.imageUrl ? (
                  <Image
                    src={featured.imageUrl}
                    alt={featured.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full gradient-fire flex items-center justify-center">
                    <Flame className="w-16 h-16 text-white/60 group-hover:scale-110 transition-transform" />
                  </div>
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(featured.category)}`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate">
                    {formatDate(featured.publishedAt)}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-charcoal-light leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  Read more{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      {rest.length > 0 && (
        <section className="py-12 md:py-16 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="flex flex-col h-full rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-warm-white to-primary/10 flex items-center justify-center">
                          <Flame className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-charcoal-light leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate">
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
