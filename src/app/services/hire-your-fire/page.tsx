'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Heart,
  Quote,
  Mic2,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────── */

const offerings = [
  {
    title: 'Funerals',
    icon: Heart,
    accent: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      bar: 'from-blue-400 to-blue-600',
    },
    headline: 'Compassion, reverence and a personal touch',
    paragraphs: [
      'Mark brings compassion, reverence, and a personalised touch to every funeral ceremony he officiates.',
      'Celebrate your loved one’s life with dignity, comfort and grace. Contact Mark to discuss how he can create the most meaningful and personalised, religious or non-sectarian funeral ceremony tailored to your family’s wishes.',
    ],
    bullets: [
      'Religious or non-sectarian',
      'Tailored to your family’s wishes',
      'Dignity, comfort and grace',
    ],
  },
  {
    title: 'Weddings',
    icon: Flame,
    accent: {
      bg: 'bg-pink-50',
      text: 'text-pink-700',
      bar: 'from-pink-400 to-rose-500',
    },
    headline: 'Make your big day extra special',
    paragraphs: [
      'Make your big day extra special with Mark as your wedding celebrant. With warmth and care, Mark creates ceremonies that are all about you and your love story.',
      'Every couple goes through a customised Open Flames couples course to learn effective communication with their partner — not just a great occasion, but a great life.',
    ],
    bullets: [
      'Registered NZ marriage celebrant',
      'Ceremonies built around your story',
      'Includes the Open Flames couples course',
    ],
  },
  {
    title: 'Master of Ceremonies',
    icon: Mic2,
    accent: {
      bg: 'bg-orange-50',
      text: 'text-primary',
      bar: 'from-amber-400 via-primary to-secondary',
    },
    headline: 'Charisma, professionalism, humour',
    paragraphs: [
      'Whether it’s a corporate gathering or a community event, Mark brings charisma, professionalism and humour to every occasion.',
      'Waikato’s premium MC, Mark makes sure he’s not the star — you are. He maintains seamless timing and makes your event a success.',
    ],
    bullets: [
      'Corporate or community events',
      'Seamless timing and pacing',
      'Keeps the spotlight on you',
    ],
  },
];

/* ─── Animation Variants ───────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function HireYourFirePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div className="absolute inset-0 gradient-fire opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.4)_100%)]" />

        {/* Floating embers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/30"
              style={{ left: `${15 + i * 14}%`, bottom: '10%' }}
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
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm"
          >
            <Briefcase className="h-4 w-4" />
            Let&apos;s celebrate
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-white md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hire Your Fire
          </motion.h1>

          <motion.p
            className="mt-3 text-xl font-medium text-white/90 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Celebrant. Master of Ceremonies. The moments that matter.
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Weddings, funerals, corporate events — Mark brings warmth, dignity and a master
            communicator&apos;s touch to the occasions that matter most. He&apos;s not the
            star. You are.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
            >
              <Briefcase className="h-5 w-5 text-primary" />
              Enquire Now
            </Link>
            <a
              href="tel:0274961699"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call Mark
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Offerings ──────────────────────────── */}
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
              The occasions Mark brings to life
            </h2>
            <p className="mt-3 text-slate max-w-2xl mx-auto">
              Three different roles, one consistent promise: a master communicator at your
              side, making sure your moment lands the way you want it to.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  variants={cardPop}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl border border-warm-gray/50"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${o.accent.bar}`} />
                  <div className="flex flex-1 flex-col p-8">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${o.accent.bg}`}
                    >
                      <Icon className={`h-7 w-7 ${o.accent.text}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${o.accent.text}`}>{o.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate">
                      {o.headline}
                    </p>
                    <div className="mt-4 space-y-3 text-slate leading-relaxed text-sm">
                      {o.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-2">
                      {o.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-charcoal"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${o.accent.text}`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-2xl p-10 shadow-lg border border-warm-gray/50"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-flame/15" />
            <p className="text-lg text-charcoal leading-relaxed mb-6 italic">
              &ldquo;Thank you very much for the way you officiated on the occasion of
              Christine&apos;s funeral the other day. It was awesome that you were so
              correct and respectful about her.&rdquo;
            </p>
            <p className="text-sm font-semibold text-charcoal">— Bev</p>
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
          <Briefcase className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to talk about your event?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Whether it&apos;s a wedding, a farewell, or your next big stage moment — Mark
            would love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0274961699"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call Mark
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
