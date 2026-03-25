'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion';
import {
  Flame,
  Sparkles,
  Mic,
  Users,
  MessageCircleHeart,
  Presentation,
  Star,
  Quote,
  ArrowRight,
  Play,
  Headphones,
  Mail,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function useAnimateOnScroll(margin: `${number}px` = '-80px') {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}

/* ──────────────────────────────────────────────
   Section wrapper with scroll animation
   ────────────────────────────────────────────── */

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, inView } = useAnimateOnScroll();
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ══════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Benefits />
      <Services />
      <QuizCTA />
      <Testimonials />
      <LatestContent />
      <Podcast />
      <ContactCTA />
    </main>
  );
}

/* ──────────────────────────────────────────────
   1. HERO
   ────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(160deg, #FFF7ED 0%, #FFEDD5 25%, #FED7AA 50%, #FDBA74 75%, #FB923C 100%)',
        }}
      />

      {/* Decorative flame shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {/* Large flame blob top-right */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, #F97316 0%, #DC2626 60%, transparent 70%)',
          }}
        />
        {/* Ember glow bottom-left */}
        <div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, #F59E0B 0%, #F97316 50%, transparent 70%)',
          }}
        />
        {/* Small sparks */}
        <motion.div
          className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-amber"
          animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-2 h-2 rounded-full bg-flame"
          animate={{ y: [-15, 5, -15], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-4 h-4 rounded-full bg-ember"
          animate={{ y: [-8, 12, -8], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[60%] left-[8%] w-2.5 h-2.5 rounded-full bg-amber"
          animate={{ y: [-12, 8, -12], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Flame-shaped decorative element */}
        <div
          className="absolute top-[10%] right-[8%] w-24 h-40 opacity-15"
          style={{
            background: 'linear-gradient(to top, #F97316, #F59E0B, transparent)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: 'rotate(-15deg)',
          }}
        />
        <div
          className="absolute bottom-[15%] left-[5%] w-16 h-28 opacity-10"
          style={{
            background: 'linear-gradient(to top, #DC2626, #F97316, transparent)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: 'rotate(20deg)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium text-charcoal"
        >
          <Flame className="w-4 h-4 text-flame" />
          Mark Bunting Human Communications
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal mb-6 leading-[1.1]"
        >
          I Teach People to{' '}
          <span className="text-gradient-fire inline-block">
            Get On With Each Other
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-xl sm:text-2xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transforming how people communicate in the workplace and in life
          &mdash; with warmth, humour, and proven frameworks that stick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 bg-flame hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-flame/25 hover:shadow-xl hover:shadow-flame/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Flame className="w-5 h-5" />
            Take the 15 Fast Flames Quiz
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 hover:border-flame text-charcoal hover:text-flame font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-0.5 bg-white/40 backdrop-blur-sm"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-charcoal/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-flame" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   2. BENEFITS
   ────────────────────────────────────────────── */

const benefits = [
  {
    icon: Users,
    title: 'Stronger Teams',
    description:
      'Build workplace relationships that drive collaboration, trust, and results. When your people communicate well, everything else falls into place.',
    color: 'text-flame',
    bg: 'bg-flame/10',
  },
  {
    icon: Presentation,
    title: 'Confident Speakers',
    description:
      "Present with power and presence. Whether it's a boardroom pitch or a keynote stage, learn to own the room and move your audience.",
    color: 'text-ember',
    bg: 'bg-ember/10',
  },
  {
    icon: MessageCircleHeart,
    title: 'Deeper Connections',
    description:
      'Understand yourself and others at a deeper level. Discover communication styles and bridge the gaps that cause friction and misunderstanding.',
    color: 'text-amber',
    bg: 'bg-amber/10',
  },
];

function Benefits() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-flame font-semibold uppercase tracking-wider text-sm mb-3"
          >
            Why Communication Matters
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            Communication Is the{' '}
            <span className="text-gradient-fire">Superpower</span> You Already
            Have
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            Most people have never been taught how to truly connect. Mark&apos;s
            training unlocks the skills you didn&apos;t know you were missing.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={scaleIn}
              custom={i}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-flame/8 transition-all duration-500 hover:-translate-y-1 border border-warm-gray/50"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${b.bg} ${b.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{b.title}</h3>
              <p className="text-slate leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3. SERVICES
   ────────────────────────────────────────────── */

const services = [
  {
    icon: Flame,
    title: 'Find Your Fire',
    subtitle: 'The Open Flames Framework',
    description:
      'Discover your communication flame type and learn how different styles interact. A powerful tool for teams and individuals to unlock better understanding.',
    href: '/services/find-your-fire',
    accent: 'flame' as const,
  },
  {
    icon: Sparkles,
    title: 'Spread Your Fire',
    subtitle: 'Powerful Presenters Training',
    description:
      'Become a compelling, confident speaker. This hands-on workshop transforms nervous presenters into powerful communicators who light up every room.',
    href: '/services/spread-your-fire',
    accent: 'ember' as const,
  },
  {
    icon: Mic,
    title: 'Speech Savers',
    subtitle: 'Professional Speech Writing',
    description:
      'Weddings, funerals, business keynotes — get a professionally crafted speech that sounds like you, only better. Your words, polished to perfection.',
    href: '/services/speech-savers',
    accent: 'amber' as const,
  },
];

const accentMap = {
  flame: {
    border: 'border-flame/30',
    bg: 'bg-flame/10',
    text: 'text-flame',
    hover: 'hover:border-flame',
    bar: '#F97316',
  },
  ember: {
    border: 'border-ember/30',
    bg: 'bg-ember/10',
    text: 'text-ember',
    hover: 'hover:border-ember',
    bar: '#DC2626',
  },
  amber: {
    border: 'border-amber/30',
    bg: 'bg-amber/10',
    text: 'text-amber',
    hover: 'hover:border-amber',
    bar: '#F59E0B',
  },
} as const;

function Services() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} id="services" className="py-24 bg-warm-gray">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-flame font-semibold uppercase tracking-wider text-sm mb-3"
          >
            Your Fire Toolkit
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            Three Ways to{' '}
            <span className="text-gradient-fire">Ignite</span> Your
            Communication
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            Whether you want to understand people better, present like a pro, or
            nail that big speech &mdash; there&apos;s a path for you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <motion.div
                key={s.title}
                variants={scaleIn}
                custom={i}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${a.border} ${a.hover} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full"
                  style={{ background: a.bar }}
                />

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${a.bg} ${a.text} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {s.title}
                </h3>
                <p className={`text-sm font-medium ${a.text} mb-3`}>
                  {s.subtitle}
                </p>
                <p className="text-slate leading-relaxed mb-6">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className={`inline-flex items-center gap-1.5 font-semibold ${a.text} group-hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   4. QUIZ CTA
   ────────────────────────────────────────────── */

function QuizCTA() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, #1F2937 0%, #374151 40%, #4B5563 100%)',
        }}
      />

      {/* Decorative flame glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #DC2626, transparent)' }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 bg-flame/20 rounded-full px-5 py-2 mb-8 text-sm font-medium text-flame"
        >
          <Flame className="w-4 h-4" />
          Free Quiz
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Discover Your{' '}
          <span className="text-gradient-fire">Flame Type</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          What kind of communicator are you? Take the{' '}
          <strong className="text-amber">15 Fast Flames</strong> quiz and
          uncover your unique communication style in under 5 minutes. It&apos;s
          fast, fun, and surprisingly revealing.
        </motion.p>

        <motion.div variants={fadeUp} custom={3}>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2.5 bg-flame hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg shadow-flame/30 hover:shadow-xl hover:shadow-flame/40 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            <Flame className="w-6 h-6" />
            Take the Quiz Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   5. TESTIMONIALS
   ────────────────────────────────────────────── */

const testimonials = [
  {
    name: 'Sarah T.',
    role: 'Team Leader',
    quote:
      "Mark completely changed how our team communicates. The Flames framework gave us a common language, and the laughs along the way made it unforgettable. Our meetings are actually productive now!",
    stars: 5,
  },
  {
    name: 'James R.',
    role: 'CEO',
    quote:
      "I've sat through dozens of communication workshops. Mark's is the only one where people were still talking about it months later. He's the real deal — entertaining, insightful, and genuinely transformative.",
    stars: 5,
  },
  {
    name: 'Michelle K.',
    role: 'Teacher',
    quote:
      "The Powerful Presenters course gave me confidence I never thought I'd have. I went from dreading parent evenings to actually looking forward to them. Mark makes you feel like you can do anything.",
    stars: 5,
  },
  {
    name: 'David L.',
    role: 'Sales Manager',
    quote:
      "My team's close rate went up 30% after Mark's training. Turns out, selling is really just communicating well. Who knew? Well, Mark knew. And now we all do.",
    stars: 5,
  },
];

function Testimonials() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-flame font-semibold uppercase tracking-wider text-sm mb-3"
          >
            Kind Words
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            Sparks From the{' '}
            <span className="text-gradient-fire">Community</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              custom={i}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-warm-gray/50"
            >
              {/* Quote mark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-flame/15" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-amber text-amber"
                  />
                ))}
              </div>

              <p className="text-charcoal-light leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flame to-amber flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   6. LATEST CONTENT
   ────────────────────────────────────────────── */

const blogPosts = [
  {
    title: 'The Ultimate Compliment',
    excerpt:
      "Why the best compliment you can give someone has nothing to do with what they look like, and everything to do with how they made you feel.",
    date: 'March 2026',
  },
  {
    title: 'One Little Word That Can Shift Everything',
    excerpt:
      "Sometimes the tiniest change in your language can transform a conversation. Here's the one word swap that changes everything.",
    date: 'February 2026',
  },
  {
    title: 'Please Break This Golden Rule of Communication',
    excerpt:
      'You\'ve been told to "treat others how you want to be treated". Here\'s why that advice might be doing more harm than good.',
    date: 'January 2026',
  },
];

function LatestContent() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="py-24 bg-warm-gray">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-flame font-semibold uppercase tracking-wider text-sm mb-3"
          >
            Latest Content
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            Fresh <span className="text-gradient-fire">Fuel</span> for Your
            Communication
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Blog posts — 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-flame" />
              From the Blog
            </h3>
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                variants={fadeUp}
                custom={i + 1}
              >
                <Link
                  href="/blog"
                  className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-warm-gray/50 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-medium text-flame mb-2">
                    {post.date}
                  </p>
                  <h4 className="text-lg font-bold text-charcoal group-hover:text-flame transition-colors duration-300 mb-2">
                    {post.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} custom={4}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-flame font-semibold hover:gap-3 transition-all duration-300"
              >
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Videos — 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-charcoal flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-flame" />
              Latest Videos
            </h3>
            <motion.div variants={fadeUp} custom={1}>
              <Link
                href="/videos"
                className="group block bg-charcoal rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Video placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-flame/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white/80 text-xs font-medium">
                      Latest Video
                    </p>
                    <p className="text-white text-sm font-semibold">
                      Communication Tips That Actually Work
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-4 space-y-3"
            >
              {['Why Teams Fail (And How to Fix It)', 'The Art of the Apology'].map(
                (title) => (
                  <Link
                    key={title}
                    href="/videos"
                    className="group flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-warm-gray/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-charcoal flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 text-flame" />
                    </div>
                    <p className="text-sm font-medium text-charcoal group-hover:text-flame transition-colors duration-300">
                      {title}
                    </p>
                  </Link>
                ),
              )}
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="mt-4">
              <Link
                href="/videos"
                className="inline-flex items-center gap-1.5 text-flame font-semibold hover:gap-3 transition-all duration-300"
              >
                View All Videos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   7. PODCAST
   ────────────────────────────────────────────── */

function Podcast() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-warm-gray/50 overflow-hidden"
        >
          {/* Decorative accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background:
                'linear-gradient(90deg, #F59E0B, #F97316, #DC2626)',
            }}
          />

          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Podcast artwork placeholder */}
            <motion.div
              variants={scaleIn}
              custom={0}
              className="shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-flame to-ember flex items-center justify-center shadow-lg"
            >
              <Headphones className="w-14 h-14 text-white" />
            </motion.div>

            <div className="flex-1">
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-flame font-semibold uppercase tracking-wider text-sm mb-2"
              >
                The Podcast
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              >
                Conversations That{' '}
                <span className="text-gradient-fire">Matter</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-slate leading-relaxed mb-6"
              >
                Join Mark for candid conversations about communication,
                connection, and everything in between. Real stories, practical
                tips, and the occasional laugh &mdash; because learning should
                never be boring.
              </motion.p>

              {/* Placeholder player */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="bg-warm-gray rounded-xl p-4 mb-6"
              >
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-flame flex items-center justify-center shrink-0 hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal truncate">
                      Latest Episode: The Listening Trap
                    </p>
                    <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-gradient-to-r from-flame to-amber rounded-full" />
                    </div>
                  </div>
                  <span className="text-xs text-slate shrink-0">24:30</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 text-flame font-semibold hover:gap-3 transition-all duration-300"
                >
                  <Headphones className="w-4 h-4" />
                  All Episodes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   8. CONTACT CTA
   ────────────────────────────────────────────── */

function ContactCTA() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 30%, #FDBA74 60%, #FB923C 100%)',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute top-1/4 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #DC2626, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full opacity-15 blur-2xl"
          style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-4xl sm:text-5xl font-bold text-charcoal mb-6"
        >
          Ready to Ignite Your{' '}
          <span className="text-gradient-fire">Communication?</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-xl text-charcoal-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Whether you need a keynote speaker, a team workshop, or a speech
          that&apos;ll bring the house down &mdash; let&apos;s talk.
        </motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-charcoal hover:bg-charcoal-light text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
