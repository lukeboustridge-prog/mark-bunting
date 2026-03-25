"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: "secondary" | "primary" | "accent";
}

const posts: BlogPost[] = [
  { slug: "the-ultimate-compliment", title: "The Ultimate Compliment", excerpt: "What if the best thing you could say to someone had nothing to do with their appearance, their job title, or their achievements? Here is the compliment that changes relationships.", date: "15 March 2026", readTime: "4 min", category: "Connection", categoryColor: "primary" },
  { slug: "one-little-word", title: "One Little Word That Can Shift Everything", excerpt: "There is a single word most of us use every day that is quietly sabotaging our conversations. Swap it out and watch what happens.", date: "8 March 2026", readTime: "3 min", category: "Language", categoryColor: "accent" },
  { slug: "break-this-golden-rule", title: "Please Break This Golden Rule of Communication", excerpt: "We have all been taught treat others the way you want to be treated. But what if that advice is actually the source of most miscommunication? Time for an upgrade.", date: "28 February 2026", readTime: "5 min", category: "Framework", categoryColor: "secondary" },
  { slug: "orange-flame-accidental-exercise", title: "An Orange Flame Gets Accidental Exercise", excerpt: "When your communication style means you cannot walk past a single person without stopping to chat, even a trip to the supermarket becomes a marathon.", date: "20 February 2026", readTime: "3 min", category: "Orange Flame", categoryColor: "primary" },
  { slug: "naming-and-faming", title: "Warning: Naming and Faming Follows", excerpt: "Why calling out what people do well, publicly and specifically, is one of the most underused tools in every leader kit.", date: "12 February 2026", readTime: "4 min", category: "Leadership", categoryColor: "secondary" },
  { slug: "air-new-zealand", title: "Air New Zealand Was a Really Great Airline", excerpt: "A story about what happens when an organisation loses the communication culture that made it special, and what the rest of us can learn from it.", date: "5 February 2026", readTime: "6 min", category: "Culture", categoryColor: "accent" },
  { slug: "waikato-open-flames", title: "How Waikato Locals Seek First to Understand with Open Flames", excerpt: "A visit to the Waikato showed Mark just how naturally some communities already practise what he teaches. Here is what he learned from the locals.", date: "28 January 2026", readTime: "5 min", category: "Framework", categoryColor: "secondary" },
  { slug: "orange-flame-needs-people", title: "An Orange Flame Neeeeeds People", excerpt: "If you have ever felt physically depleted after a day alone, you might be an Orange Flame. Here is why some of us are wired for connection.", date: "20 January 2026", readTime: "4 min", category: "Orange Flame", categoryColor: "primary" },
  { slug: "better-listener-question", title: "Want to Be a Better Listener? Ask Yourself This Simple Question", excerpt: "Listening is not about silence, it is about intention. One question you can ask yourself before every conversation that will transform how people experience you.", date: "12 January 2026", readTime: "3 min", category: "Listening", categoryColor: "accent" },
];

const categoryColors: Record<string, string> = {
  secondary: "bg-secondary/10 text-secondary",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent-dark",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Blog</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">The Fire Blog</h1>
          <p className="text-lg text-charcoal-light max-w-lg mx-auto">Insights, stories, and practical ideas about communication &mdash; from the frontline of human connection.</p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Link href="#" className="group block">
              <div className="grid md:grid-cols-2 gap-8 rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden">
                <div className="h-64 md:h-auto gradient-fire flex items-center justify-center">
                  <Flame className="w-16 h-16 text-white/60 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[posts[0].categoryColor]}`}>{posts[0].category}</span>
                    <span className="text-xs text-slate">{posts[0].date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{posts[0].title}</h2>
                  <p className="text-charcoal-light leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-12 md:py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href="#" className="group block h-full">
                  <article className="flex flex-col h-full rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-44 bg-gradient-to-br from-warm-white to-primary/10 flex items-center justify-center">
                      <Flame className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[post.categoryColor]}`}>{post.category}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-charcoal-light leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
