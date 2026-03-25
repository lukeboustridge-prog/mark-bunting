"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Users, Mic, Target, Award, Heart, ArrowRight, BookOpen, Lightbulb, Sparkles, Radio, Tv, Landmark, GraduationCap } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const credentials = [
  { icon: Radio, text: "35 years in broadcasting — multi-award winning nationwide radio broadcaster" },
  { icon: Tv, text: "Former television presenter" },
  { icon: Landmark, text: "Two-term Hamilton City Councillor (top-polling), chaired community committee" },
  { icon: Users, text: "Worked with the All Blacks, Chiefs, Crusaders, NPC rugby teams, and international sports teams" },
  { icon: GraduationCap, text: "B.Ed, Dip Tchg — trained teacher turned communication specialist" },
  { icon: Mic, text: "Podcaster — The Mark Bunting Podcast (29 episodes and counting)" },
  { icon: Target, text: "Trains large commercial entities, government organisations, schools, and charities" },
  { icon: Heart, text: "Marriage and funeral celebrant, MC, and master of ceremonies" },
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
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/mark-portrait-bw.png"
                  alt="Mark Bunting — arms open, ready to ignite"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <Flame className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Meet Mark Bunting</h1>
              <p className="text-xl text-primary font-display font-semibold mb-4">Igniter, delighter and internal fire lighter</p>
              <p className="text-lg text-charcoal-light leading-relaxed max-w-xl">
                Based in Hamilton, New Zealand, Mark is a former broadcaster, TV presenter, and city councillor who now dedicates his life to one mission: making New Zealand a friendlier place &mdash; person by person, team by team, business by business.
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
              Mark Bunting is not your typical corporate trainer. With <strong className="text-charcoal">35 years in broadcasting</strong> as a multi-award winning nationwide radio broadcaster, a career in television presenting, and <strong className="text-charcoal">two terms as a top-polling Hamilton City Councillor</strong>, Mark has spent a lifetime communicating with people from every walk of life.
            </p>
            <p className="text-lg">
              A trained teacher (B.Ed, Dip Tchg), Mark has worked alongside the <strong className="text-charcoal">All Blacks, the Chiefs, the Crusaders</strong>, NPC rugby teams, and international sports teams. He trains large commercial entities, government organisations, schools, and charities. He&apos;s also a marriage and funeral celebrant, MC, and the host of <em>The Mark Bunting Podcast</em>.
            </p>
            <p className="text-lg">
              Through all of it, Mark noticed something fundamental: <strong className="text-charcoal">we don&apos;t all speak the same style</strong>. That insight led him to create the <strong className="text-charcoal">OPEN FLAME</strong> techniques &mdash; a simpler, more practical alternative to DISC and Myers-Briggs that makes personality and communication frameworks <em>really work</em> for you and your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">My Journey</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">From the Classroom to the Airwaves to City Hall</h2>
              <div className="space-y-5 text-charcoal-light leading-relaxed">
                <p>Mark started where all great communicators should &mdash; <strong className="text-charcoal">in the classroom</strong>. A trained teacher with a Bachelor of Education, he learned early that connecting with people is a skill you can build, not a gift you&apos;re born with.</p>
                <p>From teaching, he moved into <strong className="text-charcoal">broadcasting</strong>, spending 35 years on air as a multi-award winning nationwide radio broadcaster. He became a household voice, then a <strong className="text-charcoal">television presenter</strong>, honing the ability to read an audience and adapt in real time.</p>
                <p>Mark then took his communication skills into public life, serving <strong className="text-charcoal">two terms as Hamilton City Councillor</strong> &mdash; top-polling both times &mdash; and chairing the community committee. The experience gave him a front-row seat to what happens when communication breaks down, and what&apos;s possible when it works.</p>
                <p>Today, Mark channels all of that experience into helping teams and organisations communicate better, using the practical tools he&apos;s developed over a lifetime.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                <Image
                  src="/images/mark-workshop-action.webp"
                  alt="Mark presenting to a room during a workshop"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                <Image
                  src="/images/mark-school-workshop.webp"
                  alt="Mark lying playfully with a group of teachers — showcasing his infectious energy"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The OPEN FLAME Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">The OPEN FLAME Approach</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">A Simpler Way to Understand People</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">Mark created the OPEN FLAME techniques because he saw teams struggling with overly complex personality tools. His approach is the simpler alternative to DISC and Myers-Briggs &mdash; one that actually sticks.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "We Don't All Speak the Same Style", description: "The core insight behind OPEN FLAME. Once your team understands this, everything changes. You stop taking things personally and start communicating with intention.", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: Users, title: "Made for Real Teams", description: "No jargon, no four-letter codes to memorise. OPEN FLAME gives teams a shared language they'll actually use on Monday morning — in meetings, emails, and one-on-ones.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Target, title: "Practical, Not Theoretical", description: "Built from 35 years of real-world communication — in broadcast studios, council chambers, dressing rooms with the All Blacks, and classrooms across NZ.", color: "text-accent", bg: "bg-accent/10" },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Experience &amp; Credentials</h2>
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

          {/* Event selfie image */}
          <motion.div {...fadeUp} className="mt-12 rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-96">
            <Image
              src="/images/mark-event-selfie.webp"
              alt="Mark taking a selfie with a huge audience behind him"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready to Light the Fire?</h2>
            <p className="text-lg text-charcoal-light mb-10 max-w-xl mx-auto">Whether you need a keynote speaker, a team workshop, an MC, or a celebrant &mdash; Mark would love to hear from you.</p>
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
