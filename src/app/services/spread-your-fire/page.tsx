'use client';

import { motion } from 'framer-motion';
import {
  Mic,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Shield,
  BookOpen,
  Users,
  Eye,
  MessageSquareQuote,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────── */

const skillAreas = [
  {
    title: 'Compelling Structure',
    description: 'Learn to build presentations that take your audience on a journey — with a clear beginning, turning point, and powerful close.',
    icon: BookOpen,
  },
  {
    title: 'Confident Delivery',
    description: 'Master vocal variety, pacing, pauses, and physicality so your presence commands the room before you say a word.',
    icon: Shield,
  },
  {
    title: 'Storytelling That Sticks',
    description: 'Weave stories that make your message unforgettable. Facts tell, stories sell — and we will show you how.',
    icon: Lightbulb,
  },
  {
    title: 'Audience Engagement',
    description: 'Read the room, handle Q&A with ease, and turn passive listeners into active participants.',
    icon: Users,
  },
  {
    title: 'Visual Impact',
    description: 'Design slides that support (not replace) your message. Less text, more impact.',
    icon: Eye,
  },
  {
    title: 'Overcoming Nerves',
    description: 'Transform anxiety into energy. Practical techniques to calm the butterflies and own the stage.',
    icon: BarChart3,
  },
];

const formats = [
  {
    title: 'Keynote Speaking',
    description: 'Mark delivers a high-energy keynote to inspire your audience at conferences, retreats, or company events.',
    features: ['60-90 minutes', 'Up to 500+ attendees', 'Fully customised content'],
  },
  {
    title: 'Team Workshops',
    description: 'Interactive, hands-on training for teams who want to level up their presentation skills together.',
    features: ['Half or full day', '8-30 participants', 'Live practice & feedback'],
  },
  {
    title: '1-on-1 Coaching',
    description: 'Personalised coaching for executives, TEDx speakers, or anyone preparing for a high-stakes presentation.',
    features: ['Flexible scheduling', 'In-person or virtual', 'Tailored to your goal'],
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
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SpreadYourFirePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-charcoal py-28 md:py-40">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-5 py-2 text-sm font-semibold text-primary"
          >
            <Mic className="h-4 w-4" />
            Presentation Training
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-white md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Spread Your{' '}
            <span className="text-gradient-fire">Fire</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Become the kind of presenter people remember. Learn to captivate,
            persuade, and inspire — whether you are on stage, in the boardroom,
            or on camera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
            >
              Book Training
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── The Problem ────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* Stats side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.h2
                className="text-3xl font-bold text-charcoal md:text-4xl"
                variants={fadeUp}
                custom={0}
              >
                The Problem With{' '}
                <span className="text-secondary">Public Speaking</span>
              </motion.h2>

              {[
                { stat: '75%', label: 'of people experience glossophobia — the fear of public speaking' },
                { stat: '70%', label: 'of employees say presentation skills are critical for career success' },
                { stat: '8 sec', label: 'is the average audience attention span you need to capture' },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-start gap-4"
                >
                  <span className="shrink-0 text-3xl font-bold text-gradient-fire">
                    {item.stat}
                  </span>
                  <p className="text-slate">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <p className="text-lg leading-relaxed text-charcoal">
                Most people don&apos;t fear speaking — they fear being <strong>boring</strong>.
                They fear the blank stares, the wandering eyes, the polite applause that
                says &quot;thank goodness that&apos;s over.&quot;
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal">
                It doesn&apos;t have to be that way. With the right training, anyone can
                become a speaker who lights up the room.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Solution ───────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              The Solution
            </span>
            <h2 className="mt-4 text-3xl font-bold text-charcoal md:text-4xl">
              Mark&apos;s Approach
            </h2>
            <p className="mt-4 text-lg text-slate">
              Forget death-by-PowerPoint workshops. Mark&apos;s training is practical,
              energetic, and built on real-world experience. You will be on your feet,
              practising, and getting feedback from the very first session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What You'll Learn ──────────────────── */}
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
              What You&apos;ll Learn
            </h2>
            <p className="mt-3 text-slate">
              Six core skill areas that transform how you present.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {skillAreas.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-7 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Formats ────────────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Choose Your Format
            </h2>
            <p className="mt-3 text-gray-400">
              Flexible options to suit your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {formats.map((format) => (
              <motion.div
                key={format.title}
                variants={cardVariant}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white">{format.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {format.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {format.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
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
            <MessageSquareQuote className="absolute -top-5 left-8 h-10 w-10 text-primary" />
            <blockquote className="text-lg italic leading-relaxed text-charcoal md:text-xl">
              &quot;Before Mark&apos;s training, I dreaded every presentation. Now I actually
              look forward to them. He didn&apos;t just teach me to speak — he taught me
              to connect. The feedback from my team has been incredible.&quot;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full gradient-fire" />
              <div>
                <p className="font-semibold text-charcoal">Sarah M.</p>
                <p className="text-sm text-slate">Senior Manager, Auckland</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-fire py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_30%,rgba(0,0,0,0.3)_100%)]" />

        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Flame className="mx-auto mb-6 h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Set the Stage on Fire?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Whether you need a keynote speaker, team training, or one-on-one coaching,
            let&apos;s start the conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-charcoal shadow-lg transition-transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
