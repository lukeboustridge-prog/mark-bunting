import Link from "next/link";
import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-bold text-white">
                Mark Bunting Human Communications
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm">
              I teach people to get on with each other. Communication training,
              keynote speaking, and coaching across New Zealand.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/quiz" className="hover:text-primary transition-colors">15 Fast Flames Quiz</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/podcast" className="hover:text-primary transition-colors">Podcast</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="mailto:mark@markbunting.co.nz" className="hover:text-primary transition-colors">mark@markbunting.co.nz</a></li>
              <li className="text-white/60">New Zealand</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Mark Bunting Human Communications. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
