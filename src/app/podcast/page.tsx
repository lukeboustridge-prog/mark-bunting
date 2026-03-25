'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Headphones, Play, Clock, ExternalLink, Mic2 } from 'lucide-react';

interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
}

const episodes: Episode[] = [
  {
    id: 'ep4',
    title: 'Episode 4 — ft. Shaun O\'Neill on Business Dedication',
    description:
      'Shaun O\'Neill joins Mark to talk about what real dedication to your business looks like. Plus the "Rich by 60" segment returns with practical wealth-building wisdom.',
    date: '31 July 2024',
    duration: '53 min',
  },
  {
    id: 'ep3',
    title: 'Episode 3 — Handling Bad News, Bison Lessons & Business Tax',
    description:
      'How do you deliver bad news well? What can bison teach us about resilience? Mark covers all this plus a deep dive into business taxation essentials.',
    date: '10 July 2024',
    duration: '1 hr 1 min',
  },
  {
    id: 'ep2',
    title: 'Episode 2 — Purpose, Stephen Bartlett & Business Setup',
    description:
      'Mark shares his purpose and what drives him, unpacks insights from Stephen Bartlett, and Ian Black joins to talk about getting your business setup right.',
    date: '25 June 2024',
    duration: '53 min',
  },
  {
    id: 'ep1',
    title: 'Episode 1 — 10 Things They Don\'t Tell You About Being in Your Own Business',
    description:
      'The very first episode. Graham Billings joins Mark to talk SMART plans, CRM systems, and the ten things nobody warns you about when you go out on your own.',
    date: '18 June 2024',
    duration: '45 min',
  },
  {
    id: 'rocks-thankful',
    title: 'Rocks — The Real Power of Being Thankful',
    description:
      'Mark explores gratitude — not the Instagram version, but the real, practical power of being thankful and how it shifts everything in your communication and relationships.',
    date: '21 March 2023',
    duration: '',
  },
  {
    id: 'rocks-green',
    title: 'Rocks — The \'Green\' Thing',
    description:
      'What does being "green" really mean for business and life? Mark tackles the topic with his trademark honesty and OPEN FLAME lens.',
    date: '8 March 2023',
    duration: '',
  },
  {
    id: 'rocks-diving',
    title: 'Rocks — Diving Boards and Parthenons',
    description:
      'An exploration of the metaphors we live by — diving boards (taking the leap) and Parthenons (building something that lasts). What does your communication style say about which one you are?',
    date: '1 December 2022',
    duration: '',
  },
  {
    id: 'rocks-giving',
    title: 'Rocks — Real Giving',
    description:
      'Mark unpacks what real giving looks like — beyond the donation jar — and why the best communicators are also the most generous.',
    date: '30 November 2022',
    duration: '',
  },
];

const platforms = [
  {
    name: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/nz/podcast/the-mark-bunting-podcast/id1648406702',
    color: 'bg-[#9933CC]',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/show/5JMnvS1LTDnMHEG55CCplm',
    color: 'bg-[#1DB954]',
  },
  {
    name: 'iHeart Radio',
    href: 'https://www.iheart.com/podcast/338-the-mark-bunting-podcast-102835441/',
    color: 'bg-[#C6002B]',
  },
  {
    name: 'Podbean',
    href: 'https://bunty6.podbean.com',
    color: 'bg-[#6B8E23]',
  },
];

const segments = [
  { name: 'Cliff X Face', description: 'Facing challenges head-on' },
  { name: 'Rich by 60', description: 'Practical wealth-building wisdom' },
  { name: 'Did You Know?', description: 'Surprising facts and insights' },
  { name: 'TWUTPOR', description: 'The wrap-up that pulls on reflection' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  29 Episodes &middot; Since Oct 2022
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                The Mark Bunting{' '}
                <br className="hidden sm:block" />
                <span className="text-gradient-fire">Podcast</span>
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-4 max-w-lg">
                &quot;I&apos;m on a mission to make this country friendlier.&quot;
              </p>
              <p className="text-base text-slate leading-relaxed mb-8 max-w-lg">
                Mark teaches OPEN FLAME communication techniques and explores
                topics from business and human behaviour to motorcycling. Featuring
                segments like &quot;Cliff X Face&quot;, &quot;Rich by 60&quot;,
                &quot;Did You Know?&quot; and &quot;TWUTPOR&quot;.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate">Listen on</p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full ${p.color} px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}
                    >
                      <Headphones className="w-4 h-4" />
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl gradient-fire shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Mic2 className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-white">
                      The Mark Bunting
                    </p>
                    <p className="font-display text-lg font-bold text-white/90">
                      Podcast
                    </p>
                    <p className="text-sm text-white/70 mt-1">
                      bunty6.podbean.com
                    </p>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 -z-10" />
                <div className="absolute -inset-8 rounded-3xl border border-primary/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-xl font-bold text-charcoal mb-6">
              Regular Segments
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {segments.map((seg) => (
                <div
                  key={seg.name}
                  className="rounded-2xl bg-white border border-primary/10 p-5 shadow-sm"
                >
                  <p className="font-display text-sm font-bold text-primary">
                    {seg.name}
                  </p>
                  <p className="text-xs text-slate mt-1">{seg.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embedded player placeholder */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <div className="rounded-2xl bg-charcoal p-6 md:p-8 flex items-center gap-6">
              <a
                href="https://bunty6.podbean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors"
              >
                <Play className="w-6 h-6 text-white ml-0.5" />
              </a>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/50 mb-1">Latest Episode</p>
                <p className="font-display text-sm md:text-base font-bold text-white truncate">
                  {episodes[0].title}
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </div>
              {episodes[0].duration && (
                <div className="hidden sm:flex items-center gap-1 text-xs text-white/50">
                  <Clock className="w-3 h-3" />
                  {episodes[0].duration}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12 md:py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            {...fadeUp}
            className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-10"
          >
            Episodes
          </motion.h2>
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <a
                  href="https://bunty6.podbean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl bg-white shadow-sm border border-primary/10 p-6 md:p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mic2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-primary transition-colors">
                      {ep.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2">
                      {ep.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate">
                      <span>{ep.date}</span>
                      {ep.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ep.duration}
                        </span>
                      )}
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-lg text-charcoal-light mb-10 max-w-lg mx-auto">
              Subscribe on your favourite platform and join Mark&apos;s mission to
              make this country friendlier.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full ${p.color} px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {p.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
