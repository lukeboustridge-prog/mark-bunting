"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const subjects = [
  "General Inquiry",
  "Find Your Fire Workshop",
  "Spread Your Fire Training",
  "Keynote / MC Booking",
  "Celebrant Services",
  "Podcast Inquiry",
  "Other",
];

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/p/Mark-Bunting-Open-Communications-100063785227789/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/markbunting_opencommunications/", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mark-bunting-121a8a37/", label: "LinkedIn" },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", subject: subjects[0], message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) { e.email = "Please enter your email"; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = "Please enter a valid email address"; }
    if (!form.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-display text-3xl font-bold text-charcoal mb-4">Message Sent!</h1>
          <p className="text-charcoal-light mb-8">Thanks for reaching out. Mark will get back to you shortly &mdash; usually within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: subjects[0], message: "" }); }} className="rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
              Send Another Message
            </button>
            <Link href="/" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">Back to Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Contact</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Let&apos;s Start a Conversation</h1>
          <p className="text-lg text-charcoal-light max-w-lg mx-auto">Have a question, want to book Mark for a workshop, keynote, or celebration? Drop a message below.</p>
        </motion.div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div {...fadeUp} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8 md:p-10 space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Name <span className="text-secondary">*</span></label>
                    <input id="name" type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={`w-full rounded-xl border bg-warm-white px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${errors.name ? "border-secondary" : "border-transparent"}`} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-secondary">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email <span className="text-secondary">*</span></label>
                    <input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={`w-full rounded-xl border bg-warm-white px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${errors.email ? "border-secondary" : "border-transparent"}`} placeholder="you@example.com" />
                    {errors.email && <p className="mt-1 text-xs text-secondary">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full rounded-xl border border-transparent bg-warm-white px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="027 496 1699" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">Subject</label>
                    <select id="subject" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} className="w-full rounded-xl border border-transparent bg-warm-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none">
                      {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message <span className="text-secondary">*</span></label>
                  <textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className={`w-full rounded-xl border bg-warm-white px-4 py-3 text-charcoal placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none ${errors.message ? "border-secondary" : "border-transparent"}`} placeholder="Tell Mark what you're looking for..." />
                  {errors.message && <p className="mt-1 text-xs text-secondary">{errors.message}</p>}
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
              {/* Contact Info */}
              <div className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8">
                <h3 className="font-display text-lg font-bold text-charcoal mb-6">Contact Info</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Mail className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-xs text-slate mb-0.5">Email</p>
                      <a href="mailto:mark@markbunting.co.nz" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">mark@markbunting.co.nz</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Phone className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-xs text-slate mb-0.5">Phone</p>
                      <a href="tel:+64274961699" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">027 496 1699</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"><MapPin className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-xs text-slate mb-0.5">Address</p>
                      <p className="text-sm font-medium text-charcoal">15 Heritage Ave</p>
                      <p className="text-sm text-charcoal-light">Hamilton, Waikato 3210</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8">
                <h3 className="font-display text-lg font-bold text-charcoal mb-6">Follow Mark</h3>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-xl bg-warm-white text-charcoal-light hover:bg-primary hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Location / Map Reference */}
              <div className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8">
                <h3 className="font-display text-lg font-bold text-charcoal mb-4">Based in Hamilton</h3>
                <div className="rounded-xl overflow-hidden mb-4">
                  <iframe
                    title="Mark Bunting location — Hamilton, Waikato, New Zealand"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50273.97421672698!2d175.2253!3d-37.7870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d18a8c2b1e0ed%3A0x500ef6143a29917!2sHamilton%2C%20Waikato!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Mark is based in Hamilton, Waikato but works with teams across New Zealand. Travel is no problem &mdash; he&apos;ll come to you.
                </p>
              </div>

              {/* Quiz CTA */}
              <div className="rounded-2xl gradient-fire p-8 text-center">
                <Flame className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">Not sure what you need?</h3>
                <p className="text-sm text-white/80 mb-5">Take the 15 Fast Flames quiz to discover your communication style first.</p>
                <a
                  href="https://markbunting.coxy.nz/fastflames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary hover:bg-cream transition-colors"
                >
                  Take the Quiz
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
