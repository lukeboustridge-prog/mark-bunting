"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Headphones, Play, Clock, ExternalLink, Mic2 } from "lucide-react";

interface Episode { number: number; title: string; description: string; date: string; duration: string; }

const episodes: Episode[] = [
  { number: 6, title: "Why Your Good Listener Badge Might Be Fake", description: "Most people think they are good listeners. Most people are wrong. Mark breaks down the difference between performative listening and the real thing, and shares the one habit that changes everything.", date: "18 March 2026", duration: "28 min" },
  { number: 5, title: "Red Flames at the Dinner Table", description: "What happens when a Red Flame hosts Christmas? Spoiler: the meal is on time, the seating plan is strategic, and at least one relative gets told to get to the point. A warm and honest look at direct communicators in family settings.", date: "4 March 2026", duration: "34 min" },
  { number: 4, title: "The Meeting That Should Have Been an Email", description: "We have all sat through them. But why do unnecessary meetings keep happening, and what does communication style have to do with it? Mark dissects the meeting culture problem and offers a flame-based fix.", date: "18 February 2026", duration: "25 min" },
  { number: 3, title: "How to Disagree Without Destroying the Relationship", description: "Conflict is not the problem, it is how we handle it. Mark walks through real-world scenarios where disagreement went wrong and right, using the Open Flames Framework to show why the same words land so differently.", date: "4 February 2026", duration: "31 min" },
  { number: 2, title: "The Feedback Sandwich Is Stale", description: "The classic positive-negative-positive feedback model has been around for decades. Mark argues it is time to retire it, and shares what to do instead for feedback that actually lands.", date: "21 January 2026", duration: "22 min" },
  { number: 1, title: "What Is Your Flame? An Introduction to Open Flames", description: "In the very first episode, Mark introduces the Open Flames Framework, the three communication styles (Red, Orange, and Clear), why they matter, and how understanding them can transform every conversation you have.", date: "7 January 2026", duration: "38 min" },
];

const platforms = [
  { name: "Spotify", href: "#", color: "bg-[#1DB954]" },
  { name: "Apple Podcasts", href: "#", color: "bg-[#9933CC]" },
  { name: "YouTube", href: "#", color: "bg-[#FF0000]" },
  { name: "Google Podcasts", href: "#", color: "bg-[#4285F4]" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Podcast</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Open Flames <br className="hidden sm:block" /><span className="text-gradient-fire">The Podcast</span>
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-8 max-w-lg">
                Conversations about conversation. Mark Bunting explores communication styles, human connection, and the small shifts that make a big difference &mdash; one flame at a time.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate">Listen on</p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((p) => (
                    <a key={p.name} href={p.href} className={`inline-flex items-center gap-2 rounded-full ${p.color} px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}>
                      <Headphones className="w-4 h-4" />{p.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl gradient-fire shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Mic2 className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-white">Open Flames</p>
                    <p className="text-sm text-white/70 mt-1">with Mark Bunting</p>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 -z-10" />
                <div className="absolute -inset-8 rounded-3xl border border-primary/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded player placeholder */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <div className="rounded-2xl bg-charcoal p-6 md:p-8 flex items-center gap-6">
              <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors">
                <Play className="w-6 h-6 text-white ml-0.5" />
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/50 mb-1">Latest Episode</p>
                <p className="font-display text-sm md:text-base font-bold text-white truncate">{episodes[0].title}</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs text-white/50">
                <Clock className="w-3 h-3" />{episodes[0].duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12 md:py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2 {...fadeUp} className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-10">All Episodes</motion.h2>
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <motion.div key={ep.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <a href="#" className="group flex items-start gap-5 rounded-2xl bg-white shadow-sm border border-primary/10 p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    {ep.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-primary transition-colors truncate">{ep.title}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2">{ep.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate">
                      <span>{ep.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{ep.duration}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-white group-hover:bg-primary transition-colors">
                    <Play className="w-4 h-4 text-charcoal-light group-hover:text-white transition-colors ml-0.5" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div {...fadeUp}>
            <Flame className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Never Miss an Episode</h2>
            <p className="text-lg text-charcoal-light mb-10 max-w-lg mx-auto">Subscribe on your favourite platform and get new episodes the moment they drop.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((p) => (
                <a key={p.name} href={p.href} className={`inline-flex items-center gap-2 rounded-full ${p.color} px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}>
                  <ExternalLink className="w-4 h-4" />{p.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
