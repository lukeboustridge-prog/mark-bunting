"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame, ChevronDown } from "lucide-react";

const FAST_FLAMES_URL = "https://markbunting.coxy.nz/fastflames/";

const serviceLinks = [
  { href: "/services/find-your-fire", label: "Find Your Fire" },
  { href: "/services/spread-your-fire", label: "Spread Your Fire" },
  { href: "/services/hire-your-fire", label: "Hire Your Fire" },
];

const navLinks: Array<{
  href: string;
  label: string;
  hasDropdown?: boolean;
  external?: boolean;
}> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: FAST_FLAMES_URL, label: "Quiz", external: true },
  { href: "/blog", label: "Blog" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-primary/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Flame className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-display text-xl font-bold text-charcoal">
            Mark Bunting
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-charcoal-light hover:text-primary transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="w-52 rounded-xl bg-white shadow-lg border border-primary/10 py-2">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-charcoal-light hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-charcoal-light hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-light hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Book Mark
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-primary/10 bg-cream"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-base font-medium text-charcoal-light hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pl-4 pt-3">
                            <Link
                              href="/services"
                              onClick={() => setMobileOpen(false)}
                              className="text-sm font-medium text-charcoal-light hover:text-primary transition-colors"
                            >
                              All Services
                            </Link>
                            {serviceLinks.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-charcoal-light hover:text-primary transition-colors"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-charcoal-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-charcoal-light hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Book Mark
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
