'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Phone,
  MapPin,
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
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 25%, #FED7AA 50%, #FDBA74 75%, #FB923C 100%)',
      }} />

      {/* Decorative flame shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
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
        {/* Large soft glows */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #DC2626, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium text-charcoal"
        >
          <Flame className="w-4 h-4 text-flame" />
          Communication Training That Actually Sticks
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
          className="text-xl sm:text-2xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Understand your communication style. Connect with your team.
          Present with confidence. All through one simple framework
          that&apos;s more powerful than DISC or Myers-Briggs.
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
            What&apos;s Your Communication Style?
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 hover:border-flame text-charcoal hover:text-flame font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-0.5 bg-white/40 backdrop-blur-sm"
          >
            How It Works
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
    title: 'Your Team Finally Gets Each Other',
    description:
      'Ever wonder why some colleagues just don\'t click? We don\'t all speak the same style. Discover each other\'s communication colours and watch the friction disappear.',
    color: 'text-flame',
    bg: 'bg-flame/10',
  },
  {
    icon: Presentation,
    title: 'You Present With Confidence',
    description:
      'No more dreading that next presentation. Learn a framework that turns nervous speakers into compelling ones \u2014 simpler than anything you\'ve tried before.',
    color: 'text-ember',
    bg: 'bg-ember/10',
  },
  {
    icon: MessageCircleHeart,
    title: 'Your Relationships Transform',
    description:
      'At work, at home, everywhere in between. When you understand how people are wired, every conversation gets easier. The skills you learn here change everything.',
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
            What You Get
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            Communication Is Your{' '}
            <span className="text-gradient-fire">Superpower</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            You&apos;ve never been taught how to truly connect. One simple framework
            will change how you communicate with everyone around you.
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
    subtitle: 'Understand Your Style',
    description:
      'Take the quiz, discover your flame colour, and finally understand why you click with some people and clash with others. Simple enough to remember, powerful enough to change your team.',
    href: '/services/find-your-fire',
    accent: 'flame' as const,
  },
  {
    icon: Sparkles,
    title: 'Spread Your Fire',
    subtitle: 'Present Like You Mean It',
    description:
      'Stop dreading presentations. Learn to structure your message, own the room, and deliver with the confidence that makes people actually listen.',
    href: '/services/spread-your-fire',
    accent: 'ember' as const,
  },
  {
    icon: Mic,
    title: 'Speech Savers',
    subtitle: 'Your Words, Nailed',
    description:
      'Got a wedding speech that needs to land? A business keynote that has to impress? Get help crafting words that sound like you, only sharper.',
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
            Choose Your Path
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            What Do You{' '}
            <span className="text-gradient-fire">Need</span>?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            Whether you want your team to finally click, your next presentation to land,
            or that important speech to be unforgettable &mdash; pick what fits.
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
          <span className="text-gradient-fire">Flame Colour</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We don&apos;t all speak the same style. Take the{' '}
          <strong className="text-amber">15 Fast Flames</strong> quiz and
          discover your unique communication colour in under 5 minutes. It&apos;s
          fast, fun, and surprisingly revealing &mdash; a simpler alternative to
          DISC and Myers-Briggs that actually works.
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
    name: 'Workshop Participant',
    role: 'Team Session',
    quote:
      'It was perfectly pitched, insightful and connected really well with the team. It definitely changed the vernacular in the group and made the other tasks more interesting as we observed the different coloured flames working together. Everyone rated the session really highly, and the consensus was that it was one of the best sessions we\'ve had.',
    stars: 5,
    isReal: true,
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
            Real Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-4"
          >
            What People{' '}
            <span className="text-gradient-fire">Walk Away With</span>
          </motion.h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={scaleIn}
            custom={0}
            className="relative bg-white rounded-2xl p-10 shadow-lg border border-warm-gray/50"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-flame/10" />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className="w-5 h-5 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-lg text-charcoal leading-relaxed mb-6 italic">
              &ldquo;It was perfectly pitched, insightful and connected really well with the team.
              It definitely changed the vernacular in the group and made the other tasks more
              interesting as we observed the different coloured flames working together. Everyone
              rated the session really highly, and the consensus was that it was one of the
              best sessions we&apos;ve had.&rdquo;
            </p>
            <p className="text-sm font-semibold text-charcoal">
              &mdash; Team Session Feedback
            </p>
          </motion.div>
        </motion.div>

        {/* A few workshop photos as social proof */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          {[
            { src: '/images/mark-audience-laughing.webp', alt: 'Workshop participants laughing and engaged' },
            { src: '/images/mark-group-photo.webp', alt: 'Happy group after a communication workshop' },
            { src: '/images/mark-school-workshop.webp', alt: 'Fun workshop with teachers' },
          ].map((img, i) => (
            <motion.div key={img.src} variants={scaleIn} custom={i} className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="w-full h-32 object-cover"
                unoptimized
              />
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
                      OPEN FLAME Techniques in Action
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
              {['Understanding Your Flame Colour', 'The Art of the Apology'].map(
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
                The Mark Bunting{' '}
                <span className="text-gradient-fire">Podcast</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-slate leading-relaxed mb-4"
              >
                29 episodes covering OPEN FLAME techniques, business communication,
                and life. Featuring segments like &ldquo;Cliff X Face&rdquo;,
                &ldquo;Rich by 60&rdquo;, and &ldquo;TWUTPOR&rdquo; &mdash;
                real stories, practical tips, and the occasional motorcycle tangent.
              </motion.p>

              {/* Podcast platforms */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap gap-3 mb-6"
              >
                <a
                  href="https://podcasts.apple.com/nz/podcast/the-mark-bunting-podcast/id1648406702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-warm-gray rounded-full px-4 py-2 text-sm font-medium text-charcoal hover:bg-flame/10 hover:text-flame transition-colors duration-300"
                >
                  Apple Podcasts
                </a>
                <a
                  href="https://open.spotify.com/show/5JMnvS1LTDnMHEG55CCplm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-warm-gray rounded-full px-4 py-2 text-sm font-medium text-charcoal hover:bg-flame/10 hover:text-flame transition-colors duration-300"
                >
                  Spotify
                </a>
                <a
                  href="https://bunty6.podbean.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-warm-gray rounded-full px-4 py-2 text-sm font-medium text-charcoal hover:bg-flame/10 hover:text-flame transition-colors duration-300"
                >
                  Podbean
                </a>
              </motion.div>

              {/* Placeholder player */}
              <motion.div
                variants={fadeUp}
                custom={4}
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
                      Latest Episode: Cliff X Face
                    </p>
                    <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-gradient-to-r from-flame to-amber rounded-full" />
                    </div>
                  </div>
                  <span className="text-xs text-slate shrink-0">24:30</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={5}>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 text-flame font-semibold hover:gap-3 transition-all duration-300"
                >
                  <Headphones className="w-4 h-4" />
                  All 29 Episodes
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
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 30%, #FED7AA 60%, #FDBA74 100%)',
      }} />

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
          Ready to Change How Your{' '}
          <span className="text-gradient-fire">Team Communicates?</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-xl text-charcoal-light max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Book a workshop, get a keynote for your next event,
          or just start a conversation about what your team needs.
        </motion.p>

        {/* Contact details */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-charcoal-light"
        >
          <a
            href="tel:0274961699"
            className="inline-flex items-center gap-2 hover:text-flame transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            027 496 1699
          </a>
          <span className="hidden sm:inline text-charcoal/20">|</span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Hamilton, Waikato
          </span>
        </motion.div>

        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-charcoal hover:bg-charcoal-light text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </Link>
          <a
            href="tel:0274961699"
            className="inline-flex items-center justify-center gap-2.5 border-2 border-charcoal/20 hover:border-flame text-charcoal hover:text-flame font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:-translate-y-0.5 bg-white/40 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            Call Mark
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://www.facebook.com/p/Mark-Bunting-Open-Communications-100063785227789/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-flame transition-colors duration-300 text-sm font-medium"
          >
            Facebook
          </a>
          <span className="text-charcoal/20">|</span>
          <a
            href="https://www.instagram.com/markbunting_opencommunications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-flame transition-colors duration-300 text-sm font-medium"
          >
            Instagram
          </a>
          <span className="text-charcoal/20">|</span>
          <a
            href="https://www.linkedin.com/in/mark-bunting-121a8a37/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-flame transition-colors duration-300 text-sm font-medium"
          >
            LinkedIn
          </a>
          <span className="text-charcoal/20">|</span>
          <a
            href="https://bunty6.podbean.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal/50 hover:text-flame transition-colors duration-300 text-sm font-medium"
          >
            Podcast
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
