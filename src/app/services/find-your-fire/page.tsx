'use client';

import { motion } from 'framer-motion';
import {
  Flame,
  Zap,
  Users,
  Search,
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Flame Type Data ──────────────────────── */
/*
 * NOTE: These flame descriptions are PLACEHOLDERS pending Mark's actual content.
 * We know the flame colours (Red, Orange, Clear/Blue) exist from Mark's blog and
 * sitemap, but the detailed traits and descriptions below are inferred and should
 * be replaced with Mark's official definitions.
 */

const flameTypes = [
  {
    name: 'Red Flame',
    tagline: 'The Driver',
    color: 'bg-red-600',
    lightBg: 'bg-red-50',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    glowColor: 'shadow-red-200/60',
    icon: Zap,
    traits: [
      'Bold and direct communicator',
      'Action-oriented — moves fast',
      'Natural-born leader',
      'Thrives under pressure',
      'Cuts through the noise',
    ],
    description:
      'Red Flames charge ahead. They are decisive, confident, and results-driven. In a room full of talkers, they are the ones who get things done.',
  },
  {
    name: 'Orange Flame',
    tagline: 'The Connector',
    color: 'bg-primary',
    lightBg: 'bg-orange-50',
    textColor: 'text-primary',
    borderColor: 'border-orange-200',
    glowColor: 'shadow-orange-200/60',
    icon: Users,
    traits: [
      'Warm and people-oriented',
      'Energised by social connection',
      'Naturally persuasive',
      'Creates team cohesion',
      'Lights up every room',
    ],
    description:
      'Orange Flames are the glue that holds teams together. Their warmth and enthusiasm are contagious — an Orange Flame neeeeeds people, and people need them right back.',
  },
  {
    name: 'Clear / Blue Flame',
    tagline: 'The Analyst',
    color: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    glowColor: 'shadow-blue-200/60',
    icon: Search,
    traits: [
      'Analytical and precise',
      'Detail-oriented thinker',
      'Values accuracy and data',
      'Calm under complexity',
      'The voice of reason',
    ],
    description:
      'Clear Flames burn with quiet intensity. They see what others miss, bring clarity to chaos, and their precision is their superpower.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Take the flame assessment to identify your dominant communication style.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Understand',
    description: 'Learn how your flame type shapes your interactions, strengths, and blind spots.',
    icon: Lightbulb,
  },
  {
    step: '03',
    title: 'Adapt',
    description: 'Master the art of flexing your style to connect with every flame type.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Ignite',
    description: 'Put it all into practice with live exercises, role-plays, and real-world scenarios.',
    icon: Flame,
  },
];

/* ─── Animation Variants ───────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function FindYourFirePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* Fire gradient background */}
        <div className="absolute inset-0 gradient-fire opacity-95" />
        {/* Radial overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]" />

        {/* Floating embers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/30"
              style={{
                left: `${15 + i * 14}%`,
                bottom: '10%',
              }}
              animate={{
                y: [0, -200, -400],
                opacity: [0.8, 0.5, 0],
                scale: [1, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm"
          >
            <Flame className="h-4 w-4" />
            Mark&apos;s Signature Framework
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-white md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Find Your Fire
          </motion.h1>

          <motion.p
            className="mt-2 text-xl font-medium text-white/90 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            The OPEN FLAME Techniques
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We don&apos;t all speak the same style. The OPEN FLAME techniques use
            coloured flames to reveal your natural communication personality —
            taking what works from DISC and Myers-Briggs and making it really
            work for you and your team.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
            >
              <Flame className="h-5 w-5 text-primary" />
              Take the Quiz
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What Are the Flames? ───────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              className="mx-auto max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-3xl font-bold text-charcoal md:text-5xl"
                variants={fadeUp}
                custom={0}
              >
                What Are the{' '}
                <span className="text-gradient-fire">OPEN FLAME Techniques</span>?
              </motion.h2>
              <motion.p
                className="mt-6 text-lg leading-relaxed text-slate"
                variants={fadeUp}
                custom={1}
              >
                The OPEN FLAME techniques are built on a simple truth: we don&apos;t all
                speak the same style. Your flame type shapes how you think, how you speak,
                and how others experience you. It takes what works from frameworks like
                DISC and Myers-Briggs and makes them simpler, more visual, and far more
                practical for everyday use.
              </motion.p>
              <motion.p
                className="mt-4 text-lg leading-relaxed text-slate"
                variants={fadeUp}
                custom={2}
              >
                There is no &quot;best&quot; flame — each one has unique strengths.
                The magic happens when you understand yours and learn to read everyone
                else&apos;s. Used by the All Blacks, Chiefs, Crusaders, government
                agencies, schools, corporates, and tradespeople across New Zealand.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src="/images/mark-presenting.jpg"
                alt="Mark Bunting presenting the OPEN FLAME techniques with coloured flames on screen"
                width={600}
                height={400}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Flame Type Cards ───────────────────── */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
              The Flame Types
            </h2>
            <p className="mt-3 text-slate">
              Which one sounds like you?
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {flameTypes.map((flame) => {
              const Icon = flame.icon;
              return (
                <motion.div
                  key={flame.name}
                  variants={cardPop}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-2xl border ${flame.borderColor} bg-white shadow-lg ${flame.glowColor} transition-shadow hover:shadow-xl`}
                >
                  {/* Top color bar */}
                  <div className={`h-1.5 ${flame.color}`} />

                  <div className="p-8">
                    {/* Icon badge */}
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${flame.lightBg}`}
                    >
                      <Icon className={`h-7 w-7 ${flame.textColor}`} />
                    </div>

                    <h3 className={`text-2xl font-bold ${flame.textColor}`}>
                      {flame.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate">
                      {flame.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate">
                      {flame.description}
                    </p>

                    {/* Traits */}
                    <ul className="mt-5 space-y-2">
                      {flame.traits.map((trait) => (
                        <li
                          key={trait}
                          className="flex items-start gap-2 text-sm text-charcoal"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${flame.textColor}`}
                          />
                          {trait}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Audience image */}
          <motion.div
            className="mt-14 overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/images/mark-audience-laughing.webp"
              alt="Engaged audience laughing during an OPEN FLAME techniques session"
              width={1200}
              height={500}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </motion.div>

          {/* Teaser */}
          <motion.p
            className="mt-10 text-center text-sm italic text-slate"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Think you already know your type? Take the quiz to find out for sure — you might be surprised.
          </motion.p>
        </div>
      </section>

      {/* ── How It Works ───────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-slate">
              Whether it&apos;s a half-day workshop, a keynote presentation,
              or a full team programme — in person or online — here&apos;s the journey.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={cardPop}
                  className="relative rounded-2xl bg-white p-7 shadow-md"
                >
                  {/* Step number */}
                  <span className="absolute -top-4 right-6 flex h-9 w-9 items-center justify-center rounded-full gradient-fire text-sm font-bold text-white shadow">
                    {step.step}
                  </span>

                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-secondary/15 blur-3xl" />
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Flame className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Find Your Fire?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Take the flame quiz online, or bring the full OPEN FLAME experience to
            your team with a live workshop or keynote presentation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
            >
              <Flame className="h-5 w-5" />
              Take the Quiz
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a Workshop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
