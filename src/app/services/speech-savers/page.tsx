'use client';

import { motion } from 'framer-motion';
import {
  PenTool,
  Heart,
  Briefcase,
  PartyPopper,
  Flower2,
  ArrowRight,
  Flame,
  CheckCircle2,
  MessageSquareQuote,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────── */

const speechTypes = [
  {
    title: 'Wedding Speeches',
    description:
      'Best man, maid of honour, father of the bride, or the happy couple — we will craft words that make them laugh, cry, and remember forever.',
    icon: Heart,
    color: 'text-secondary',
    bg: 'bg-red-50',
  },
  {
    title: 'Funeral Eulogies',
    description:
      'The hardest speech you will ever give deserves the most care. We will help you honour their memory with grace and authenticity.',
    icon: Flower2,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Business Presentations',
    description:
      'Pitches, keynotes, award acceptances, AGM addresses — polished, persuasive, and unmistakably you.',
    icon: Briefcase,
    color: 'text-primary',
    bg: 'bg-orange-50',
  },
  {
    title: 'Special Occasions',
    description:
      'Retirements, milestones, roasts, farewells — whatever the occasion, we will make your words count.',
    icon: PartyPopper,
    color: 'text-accent',
    bg: 'bg-amber-50',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We start with a conversation. Tell us about the person, the event, the tone you want, and any stories or memories you want to include.',
  },
  {
    step: '02',
    title: 'First Draft',
    description:
      'Our writers craft a speech that sounds like you — not a template, not generic, but genuinely your words elevated.',
  },
  {
    step: '03',
    title: 'Refine & Polish',
    description:
      'We work together to fine-tune every line until it is exactly right. As many revisions as it takes.',
  },
  {
    step: '04',
    title: 'Deliver With Confidence',
    description:
      'Optional coaching session to help you rehearse, nail the timing, and feel completely confident on the day.',
  },
];

/* ─── Animation Variants ───────────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SpeechSaversPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* Warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,transparent_30%,rgba(0,0,0,0.3)_100%)]" />

        {/* Quill decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute right-[10%] top-[15%] h-40 w-40 rounded-full border border-white/10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[8%] bottom-[20%] h-56 w-56 rounded-full border border-white/10"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm"
          >
            <PenTool className="h-4 w-4" />
            Professional Speech Writing
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-white md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Speech Savers
          </motion.h1>

          <motion.p
            className="mt-4 text-xl font-medium text-white/90 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Your words, your story, beautifully crafted
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Life&apos;s biggest moments deserve words that match. We help you say what
            you mean, mean what you say, and leave your audience moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Speech Types ───────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
              Speeches for Every{' '}
              <span className="text-gradient-fire">Occasion</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate">
              No matter the moment, we will help you find the perfect words.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {speechTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex gap-5 rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${type.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${type.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">{type.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
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
            <p className="mt-3 text-slate">
              Four simple steps from blank page to standing ovation.
            </p>
          </motion.div>

          <motion.div
            className="space-y-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[23px] top-12 h-full w-0.5 bg-gradient-to-b from-primary/40 to-transparent" />
                )}

                {/* Step number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-fire text-sm font-bold text-white shadow-md">
                  {step.step}
                </div>

                <div className="pt-1">
                  <h3 className="text-xl font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            className="relative rounded-2xl bg-white p-10 shadow-lg md:p-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageSquareQuote className="absolute -top-5 left-8 h-10 w-10 text-accent" />
            <blockquote className="text-lg italic leading-relaxed text-charcoal md:text-xl">
              &quot;I was dreading my best man speech for months. Mark helped me turn
              a jumble of memories into something that had the whole room in tears —
              the good kind. I have never felt so confident at a mic.&quot;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary" />
              <div>
                <p className="font-semibold text-charcoal">James T.</p>
                <p className="text-sm text-slate">Best Man, Wellington</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing / Quote ────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Investment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Every speech is unique, so pricing depends on the scope, timeline, and
              whether you want delivery coaching included. Here is a general guide:
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              {
                tier: 'Essential',
                description: 'Speech writing with one round of revisions',
                features: ['Initial consultation', 'Custom-written speech', '1 revision round'],
              },
              {
                tier: 'Premium',
                description: 'Full writing service with unlimited revisions',
                features: ['In-depth consultation', 'Custom-written speech', 'Unlimited revisions', 'Delivery tips guide'],
                highlight: true,
              },
              {
                tier: 'Complete',
                description: 'Writing + delivery coaching to nail the performance',
                features: ['Everything in Premium', '1-on-1 delivery coaching', 'Rehearsal session', 'Day-of support'],
              },
            ].map((pkg) => (
              <motion.div
                key={pkg.tier}
                variants={fadeUp}
                className={`rounded-2xl p-8 ${
                  pkg.highlight
                    ? 'border-2 border-primary bg-white/10 shadow-lg shadow-primary/10'
                    : 'border border-white/10 bg-white/5'
                }`}
              >
                {pkg.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{pkg.tier}</h3>
                <p className="mt-2 text-sm text-gray-400">{pkg.description}</p>
                <ul className="mt-5 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-ember py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)]" />

        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Flame className="mx-auto mb-6 h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Your Moment Deserves the Right Words
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Do not leave it to chance. Get in touch and let&apos;s start crafting
            a speech you will be proud to deliver.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
          >
            Start Your Speech
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
