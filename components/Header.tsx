'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Pulse Indicator */}
        <Link
          href="/"
          className="font-[family-name:var(--font-oswald)] font-bold tracking-wider uppercase text-xl sm:text-2xl flex items-center gap-2.5 text-white hover:text-red-500 transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block animate-pulse shadow-[0_0_12px_#dc2626]"></span>
          Red Machine <span className="text-red-500">USA</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/#offerings" className="hover:text-red-400 transition-colors">
            Live Formats
          </Link>
          <Link href="/bio" className="hover:text-red-400 transition-colors">
            Band Bio
          </Link>
          <Link href="/#media" className="hover:text-red-400 transition-colors">
            Audio &amp; Video
          </Link>
          <Link href="/#specs" className="hover:text-red-400 transition-colors">
            Stage &amp; Tech
          </Link>
          <Link href="/#catalogue" className="hover:text-red-400 transition-colors">
            Catalogue &amp; AI
          </Link>
          <Link
            href="/#booking"
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold transition-all shadow-md shadow-red-600/20"
          >
            Book a Date
          </Link>
        </nav>

        {/* Mobile Nav Quick Buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/bio" className="text-xs text-zinc-300 hover:text-white font-semibold uppercase tracking-wider">
            Bio
          </Link>
          <Link
            href="/#booking"
            className="px-3.5 py-1.5 rounded-md bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
