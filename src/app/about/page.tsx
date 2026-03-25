"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Users, Mic, Target, Award, Heart, ArrowRight, BookOpen, Lightbulb, Sparkles } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const credentials = [
  { icon: Mic, text: "20+ years of professional communication training across NZ and internationally" },
  { icon: Users, text: "Worked with hundreds of teams, from startups to government departments" },
  { icon: BookOpen, text: "Creator of the Open Flames Framework for communication styles" },
  { icon: Award, text: "Keynote speaker at national conferences and corporate events" },
  { icon: Target, text: "Specialist in team dynamics, leadership communication, and conflict resolution" },
  { icon: Heart, text: "Passionate advocate for human connection in an increasingly digital world" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="shrink-0">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl gradient-fire shadow-xl flex items-center justify-center">
                <Flame className="w-20 h-20 text-white/80" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <Flame className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">Meet Mark Bunting</h1>
              <p className="text-lg text-charcoal-light leading-relaxed max-w-xl">
                Mark Bunting is a New Zealand-based communication expert, trainer, and keynote speaker who has spent over two decades helping people get on with each other. His work centres on one simple belief: that better communication changes everything.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fadeUp} className="space-y-6 text-charcoal-light leading-relaxed">
            <p className="text-lg">
              Mark is the creator of the <strong className="text-charcoal">Open Flames Framework</strong> &mdash; a practical, memorable model for understanding communication styles. The framework identifies three core &ldquo;flames&rdquo;: Red (bold and direct), Orange (warm and social), and Clear (analytical and precise). It gives teams a shared language for talking about how they talk &mdash; and that simple shift unlocks enormous potential.
            </p>
            <p className="text-lg">
              Whether he&apos;s running a half-day workshop for a corporate team, delivering a keynote to 500 people, or coaching a leader one-on-one, Mark brings the same combination of warmth, humour, and practical insight. He doesn&apos;t believe in communication theory for its own sake &mdash; he believes in tools you can use on Monday morning.
            </p>
            <p className="text-lg">
              Based in New Zealand, Mark works with organisations of all sizes &mdash; from small businesses to large corporates and government agencies. His clients value his ability to read a room, adapt to any audience, and make even the most communication-averse participants lean in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">My Story</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">How I Found the Fire</h2>
              <div className="space-y-5 text-charcoal-light leading-relaxed">
                <p>Mark didn&apos;t start out as a communication trainer. Like many great teachers, he came to it through lived experience &mdash; years of observing what makes some conversations click and others crash.</p>
                <p>The moment that changed everything was watching two brilliant people &mdash; both talented, both well-intentioned &mdash; completely fail to understand each other. Not because of what they were saying, but because of <em>how</em> they were saying it. That&apos;s when Mark realised the gap wasn&apos;t knowledge. It was communication style.</p>
                <p>That insight became the seed of the Open Flames Framework, and eventually a career devoted to helping people bridge the gap between intention and impact.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl gradient-ember h-80 md:h-96 flex items-center justify-center shadow-lg">
              <Lightbulb className="w-16 h-16 text-white/70" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">My Approach</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Communication That Actually Works</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">Mark&apos;s philosophy is simple: understanding yourself is the first step to understanding others.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "Know Your Flame", description: "Understand your own default communication style, your strengths, your blind spots, and how others experience you.", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: Users, title: "Read the Room", description: "Learn to recognise the communication styles of the people around you and adapt your approach to connect more effectively.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Target, title: "Bridge the Gap", description: "Close the gap between your intention and your impact. Say what you mean in a way that lands, every time.", color: "text-accent", bg: "bg-accent/10" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="rounded-2xl bg-white border border-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Experience &amp; Highlights</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {credentials.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 rounded-xl bg-warm-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-charcoal-light leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready to Light the Fire?</h2>
            <p className="text-lg text-charcoal-light mb-10 max-w-xl mx-auto">Whether you&apos;re looking for a keynote speaker, a team workshop, or one-on-one coaching, Mark would love to hear from you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/quiz" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
                Take the Quiz <Flame className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
