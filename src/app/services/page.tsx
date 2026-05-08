'use client';

import { motion } from 'framer-motion';
import { Flame, Mic, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Find Your Fire',
    subtitle: 'OPEN FLAME Communication Framework',
    description:
      'Discover your unique communication flame type using the OPEN FLAME techniques — a simpler, more visual alternative to DISC and Myers-Briggs. Used by the All Blacks, Chiefs, Crusaders, government agencies, schools, and corporates across New Zealand.',
    icon: Flame,
    href: '/services/find-your-fire',
    gradient: 'from-amber-400 via-primary to-secondary',
    iconColor: 'text-primary',
  },
  {
    title: 'Spread Your Fire',
    subtitle: 'Presentation & Communication Training',
    description:
      'Transform how you communicate and present — whether on stage, in the boardroom, or on camera. Taught by a 35-year broadcaster who has coached All Blacks, Chiefs, and Crusaders players. Keynotes, team workshops, and 1-on-1 coaching.',
    icon: Mic,
    href: '/services/spread-your-fire',
    gradient: 'from-primary via-secondary to-red-700',
    iconColor: 'text-secondary',
  },
  {
    title: 'Hire Your Fire',
    subtitle: 'Celebrant & Master of Ceremonies',
    description:
      'Mark is a registered marriage and funeral celebrant and an experienced Master of Ceremonies. From wedding ceremonies to funerals to corporate MC work — Mark brings warmth, dignity and a master communicator’s touch to life’s biggest moments.',
    icon: Briefcase,
    href: '/services/hire-your-fire',
    gradient: 'from-accent via-primary to-secondary',
    iconColor: 'text-accent',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
        {/* Decorative embers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
              What Mark Offers
            </span>
          </motion.div>

          <motion.h1
            className="mt-4 text-4xl font-bold text-white md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Services That{' '}
            <span className="text-gradient-fire">Ignite</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Communications coaching, team building, keynote presentations, MC services,
            and celebrant work. Mark Bunting helps you find, fuel, and spread your fire.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-10 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={cardVariants}>
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                  >
                    {/* Gradient bar */}
                    <div
                      className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}
                    />

                    <div className="flex flex-1 flex-col p-8">
                      {/* Icon */}
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cream">
                        <Icon className={`h-7 w-7 ${service.iconColor}`} />
                      </div>

                      <h2 className="text-2xl font-bold text-charcoal">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 flex-1 leading-relaxed text-slate">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="mt-6 flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-secondary">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal py-20">
        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Every great communicator started somewhere. Book a free discovery call
            with Mark and find the right path for you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
