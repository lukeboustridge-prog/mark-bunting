import Link from "next/link";
import { Flame, Phone, MapPin, Podcast } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-bold text-white">
                Mark Bunting Human Communications
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm mb-6">
              Making NZ a friendlier place, person x person, team x team,
              business x business. Mark Bunting has been helping people
              communicate better for over 15 years using the OPEN FLAME
              techniques.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Mark-Bunting-Open-Communications-100063785227789/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/markbunting_opencommunications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-bunting-121a8a37/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://bunty6.podbean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors"
                aria-label="Podcast"
              >
                <Podcast className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="https://markbunting.coxy.nz/fastflames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  15 Fast Flames Quiz
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-primary transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  href="/services/find-your-fire"
                  className="hover:text-primary transition-colors"
                >
                  Find Your Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/services/spread-your-fire"
                  className="hover:text-primary transition-colors"
                >
                  Spread Your Fire
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hire-your-fire"
                  className="hover:text-primary transition-colors"
                >
                  Hire Your Fire
                </Link>
              </li>
            </ul>

            <h4 className="font-display text-sm font-bold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:0274961699"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  027 496 1699
                </a>
              </li>
              <li>
                <a
                  href="mailto:mark@markbunting.co.nz"
                  className="hover:text-primary transition-colors"
                >
                  mark@markbunting.co.nz
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                Hamilton, Waikato, New Zealand
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Mark Bunting Human Communications.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
