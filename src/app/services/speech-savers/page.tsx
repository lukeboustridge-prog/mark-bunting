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
  Mic,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Data ─────────────────────────────────── */

const serviceTypes = [
  {
    title: 'Wedding Celebrations & Speeches',
    description:
      'Mark is a registered marriage celebrant who performs beautiful wedding ceremonies. He also coaches best men, maids of honour, fathers of the bride, and the happy couple on speeches that make them laugh, cry, and remember forever.',
    icon: Heart,
    color: 'text-secondary',
    bg: 'bg-red-50',
  },
  {
    title: 'Funeral & Memorial Services',
    description:
      'As a registered funeral celebrant, Mark brings warmth, dignity, and authenticity to life celebrations. He also helps family and friends craft eulogies that honour memories with grace.',
    icon: Flower2,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Business Presentations & MC',
    description:
      'With 35 years of broadcasting experience, Mark is an accomplished Master of Ceremonies for conferences, awards nights, and corporate events. He also coaches business presentations, pitches, and AGM addresses.',
    icon: Briefcase,
    color: 'text-primary',
    bg: 'bg-orange-50',
  },
  {
    title: 'Special Occasions',
    description:
      'Retirements, milestones, roasts, farewells — whatever the occasion, Mark can MC, celebrate, or coach you to make your words count.',
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
      'We start with a conversation. Tell Mark about the person, the event, the tone you want, and any stories or memories you want to include.',
  },
  {
    step: '02',
    title: 'Craft & Create',
    description:
      'Whether Mark is performing the ceremony or coaching your speech, he crafts words that sound like you — not a template, not generic, but genuinely your story elevated.',
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
      'Optional coaching session to help you rehearse, nail the timing, and feel completely confident on the day — or let Mark deliver it himself.',
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

        {/* Decorative circles */}
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
            Celebrant, MC &amp; Speech Coaching
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
            Ceremonies performed. Speeches perfected.
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mark is a registered marriage and funeral celebrant, an experienced
            Master of Ceremonies, and a speech coach. Whether you need someone to
            lead the ceremony or help you nail your own words — life&apos;s biggest
            moments deserve the best.
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
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Mark at Work ─────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src="/images/mark-event-selfie.webp"
                alt="Mark Bunting MCing at an event"
                width={600}
                height={400}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-charcoal md:text-4xl">
                More Than a{' '}
                <span className="text-gradient-fire">Speech Writer</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate">
                With 35 years of broadcasting experience, Mark doesn&apos;t just help
                you write words — he performs ceremonies, MCs events, and coaches you
                to deliver with confidence. He is a registered celebrant for both
                weddings and funerals, bringing warmth, humour, and professionalism
                to every occasion.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Registered Celebrant', 'Master of Ceremonies', 'Speech Coach', '35 Years Broadcasting'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
                  >
                    <Mic className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service Types ────────────────────── */}
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
              Services for Every{' '}
              <span className="text-gradient-fire">Occasion</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate">
              Ceremonies, MC work, and speech coaching — no matter the moment.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {serviceTypes.map((type) => {
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
      <section className="py-20 md:py-28">
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
              Four simple steps from first conversation to perfect delivery.
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
      <section className="bg-warm-white py-20 md:py-28">
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
              Every occasion is unique, so pricing depends on the scope, timeline, and
              whether you need a celebrant, MC, speech coaching, or a combination.
              Here is a general guide:
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
                tier: 'Speech Coaching',
                description: 'Expert help writing and rehearsing your speech',
                features: ['Initial consultation', 'Custom speech drafting', 'Revision rounds', 'Delivery coaching'],
              },
              {
                tier: 'Celebrant Services',
                description: 'Mark performs your wedding or memorial ceremony',
                features: ['Planning consultation', 'Personalised ceremony', 'Professional delivery', 'Coordination with venue'],
                highlight: true,
              },
              {
                tier: 'MC & Full Package',
                description: 'Master of Ceremonies plus speech coaching combined',
                features: ['Event MC services', 'Speech coaching included', 'Run sheet coordination', 'Day-of support'],
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
            Whether you need a celebrant, an MC, or a speech coach — get in touch
            and let&apos;s make your occasion unforgettable.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
          >
            Start the Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
