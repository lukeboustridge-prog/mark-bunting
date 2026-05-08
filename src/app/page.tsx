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
  Users,
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
  Handshake,
  GraduationCap,
  Heart,
  UserCheck,
  ShieldCheck,
  TrendingUp,
  ShieldAlert,
  Briefcase,
} from 'lucide-react';

const FAST_FLAMES_URL = 'https://markbunting.coxy.nz/fastflames/';

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
      <Intro />
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

      {/* Content — full-viewport "COMMUNICATE BETTER" */}
      <div className="relative z-10 w-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-extrabold tracking-tight text-charcoal leading-[0.95]"
          style={{ fontSize: 'clamp(3rem, 14vw, 12rem)' }}
        >
          <span className="block">COMMUNICATE</span>
          <span className="block text-gradient-fire">BETTER</span>
        </motion.h1>

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
            className="w-6 h-10 rounded-full border-2 border-charcoal/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-flame" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   1b. INTRO — "I teach people to get on with each other"
   ────────────────────────────────────────────── */

function Intro() {
  const { ref, inView } = useAnimateOnScroll();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-10 leading-tight"
        >
          I teach people to{' '}
          <span className="text-gradient-fire">get on with each other</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-xl text-charcoal mb-6 leading-relaxed font-medium"
        >
          Don&apos;t spend all your time fighting fires. Use the flames to your advantage.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg text-slate mb-6 leading-relaxed"
        >
          As a human communications specialist I design programmes specifically for you and
          your organisation, tailored to your needs.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={3}
          className="text-lg text-slate mb-6 leading-relaxed"
        >
          It may be through the OPEN Flames framework, presentation and public speaking
          training, personal branding, executive coaching or a simple team-building day.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={4}
          className="text-lg text-charcoal mb-3 leading-relaxed font-medium"
        >
          When you have a team communicating effectively, it&apos;s all HEHE.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={5}
          className="text-lg text-flame font-semibold tracking-wide"
        >
          Harmony. Efficiency. Happiness. Effectiveness.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   2. BENEFITS
   ────────────────────────────────────────────── */

type Benefit = {
  icon: typeof Users;
  title: string;
  paragraphs: string[];
  color: string;
  bg: string;
};

const benefits: Benefit[] = [
  {
    icon: Handshake,
    title: 'Help good people become legendary teams',
    paragraphs: [
      'Do your employees function as a cohesive team, or more like a group of individual contributors?',
      'Even if you have good people on staff, if they don\u2019t work well together, you\u2019ll never grow as fast as you should, and your bottom line will suffer.',
      'Open Flames can help your people come together as a team by providing you with a solid framework for leveraging the collective talents of the group.',
      'Do this and your growth will accelerate, and your profits will soar!',
    ],
    color: 'text-flame',
    bg: 'bg-flame/10',
  },
  {
    icon: GraduationCap,
    title: 'Teach the entire organisation to communicate more effectively',
    paragraphs: [
      'What is the cost of bad communication?',
      'Sales fall through. Deadlines are missed. People quit their jobs. Culture suffers. Frustration rises\u2026 and profits TANK.',
      'The good news is that this can be an easy fix.',
      'With Open Flames training under their belts, your employees will quickly learn how to communicate in all four personality styles.',
      'Fix your communication issues in less than 6 hours and your team will be hard to beat!',
    ],
    color: 'text-ember',
    bg: 'bg-ember/10',
  },
  {
    icon: Heart,
    title: 'Cultivate great culture',
    paragraphs: [
      'How many of your employees wake up excited to come to work every day?',
      'To stay competitive and retain the best talent in today\u2019s business climate, you need a great CULTURE \u2014 but have you noticed the first part of \u2018culture\u2019 is \u2018cult\u2019? You have to create the kind of team that people WANT to be part of without losing themselves in the process.',
      'Our training focuses on finding your fire and appreciating others\u2019.',
    ],
    color: 'text-amber',
    bg: 'bg-amber/10',
  },
  {
    icon: UserCheck,
    title: 'Stop making bad hires',
    paragraphs: [
      'Every bad hiring decision your team makes costs thousands of dollars.',
      'Use the Flames framework to determine the exact traits you are looking for (or are looking to avoid!) in the candidates you interview and what their communication style will add to your existing team dynamic.',
      'When you hire the right people, you win!',
    ],
    color: 'text-flame',
    bg: 'bg-flame/10',
  },
  {
    icon: ShieldCheck,
    title: 'Build trust and loyalty',
    paragraphs: [
      'All life and business is relationships; relationships are built on trust.',
      'When you share the Flames with your employees, they will understand how to apply it at work, at home, and even in the way they see themselves.',
      'They will feel like the organisation is investing in them personally.',
      'Increased trust and loyalty lead to better overall team commitment, culture, and performance!',
    ],
    color: 'text-ember',
    bg: 'bg-ember/10',
  },
  {
    icon: TrendingUp,
    title: 'Ramp up sales performance',
    paragraphs: [
      'People skills are at the heart of sales performance.',
      'Salespeople need to understand which of their own limiting behaviours are costing them sales, how to read the styles of their potential customers so they communicate effectively, and how to make the sales process easy and natural for each of the four Flames.',
    ],
    color: 'text-amber',
    bg: 'bg-amber/10',
  },
  {
    icon: ShieldAlert,
    title: 'Reduce conflict',
    paragraphs: [
      'Did you know that managers typically spend 25% of their time or more resolving personality conflicts in the workplace?',
      'How much money are YOU wasting on conflict? Take the total number of managers in your organisation, multiply by an average manager\u2019s annual salary, and multiply that number by 0.25.',
      'Stop throwing that money away! Instead, invest a small fraction of that cost into OPEN Flames.',
      'Flames will help you reduce conflict in your workplace and free up your managers\u2019 time so they can actually get real work done!',
    ],
    color: 'text-flame',
    bg: 'bg-flame/10',
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
            className="text-4xl sm:text-5xl font-bold text-charcoal mb-6"
          >
            Communication makes your{' '}
            <span className="text-gradient-fire">team work.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate max-w-2xl mx-auto mb-3 leading-relaxed"
          >
            People say communications training is a soft skill. Try running your engine
            without the soft stuff and see how long you last.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-lg text-slate max-w-2xl mx-auto leading-relaxed"
          >
            You&apos;ve got the right players in your team because of what they bring to
            your organisation — now invest in getting them to work together.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={scaleIn}
              custom={i}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-flame/8 transition-all duration-500 hover:-translate-y-1 border border-warm-gray/50 flex flex-col"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.bg} ${b.color} mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3 leading-snug">{b.title}</h3>
              <div className="space-y-3 text-slate leading-relaxed text-sm">
                {b.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
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
    icon: Briefcase,
    title: 'Hire Your Fire',
    subtitle: 'Book Mark for Your Event',
    description:
      'Weddings, funerals, corporate MC work. Mark brings warmth, wit and a master communicator’s touch to the moments that matter most. He’s not the star — you are.',
    href: '/services/hire-your-fire',
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
          <a
            href={FAST_FLAMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-flame hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg shadow-flame/30 hover:shadow-xl hover:shadow-flame/40 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            <Flame className="w-6 h-6" />
            Take the Quiz Now
            <ArrowRight className="w-5 h-5" />
          </a>
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
