'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Home() {
  const [selectedAct, setSelectedAct] = useState('Full Band (5-Piece)');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/book.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ act: selectedAct, venue, date, email, message }),
      });

      if (!res.ok) throw new Error('Failed to submit booking inquiry');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please email us directly at redmachineusa@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Header />

      {/* Hero Section with Main Hero Image */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 border-b border-zinc-900 overflow-hidden">
        {/* Background Atmospheric Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/rmnj-hero.jpg"
            alt="Red Machine USA Live on Stage"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-25 scale-105 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/85 to-zinc-950" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/60 text-red-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Bergen County, NJ &bull; NYC &bull; Tri-State Official EPK
              </div>

              <h1 className="font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
                Built For The Room.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Full 5-Piece Band
                </span>{' '}
                <span className="text-zinc-500 font-light">or</span>{' '}
                <span className="text-zinc-200">Solo Acoustic.</span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed">
                Crowd-tested classic rock, blues, indie, and jam energy that keeps patrons ordering another round—available as a turnkey 5-piece electric band or an intimate solo acoustic taproom set.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#offerings"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-600/25"
                >
                  Compare Live Formats
                </a>
                <a
                  href="#booking"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm transition-all"
                >
                  Check Availability
                </a>
              </div>
            </div>

            {/* Right Featured Hero Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/20 bg-zinc-900 group">
                <img
                  src="/img/rmnj-hero.jpg"
                  alt="Red Machine USA Full Band Live"
                  fetchPriority="high"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      Live Showcase
                    </span>
                    <div className="font-[family-name:var(--font-oswald)] text-xl uppercase font-bold text-white mt-1">
                      Red Machine USA — 5-Piece Lineup
                    </div>
                  </div>
                  <Link
                    href="/bio"
                    className="text-xs font-mono text-red-400 hover:text-red-300 underline shrink-0"
                  >
                    Meet the Band &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Trust Bar for Bookers */}
          <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-3.5">
              <div className="text-[11px] font-mono uppercase text-red-400">Backline & PA</div>
              <div className="text-sm font-bold text-white mt-0.5">100% Turnkey Ready</div>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-3.5">
              <div className="text-[11px] font-mono uppercase text-red-400">Set Lengths</div>
              <div className="text-sm font-bold text-white mt-0.5">1 to 3 Hour Slots</div>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-3.5">
              <div className="text-[11px] font-mono uppercase text-red-400">Home Base</div>
              <div className="text-sm font-bold text-white mt-0.5">Ridgewood / North NJ</div>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 rounded-lg p-3.5">
              <div className="text-[11px] font-mono uppercase text-red-400">Booking Direct</div>
              <div className="text-sm font-bold text-white mt-0.5 truncate">redmachineusa@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Live Offerings */}
      <section id="offerings" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500">Tailored To Your Venue</span>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl uppercase font-bold text-white tracking-wide mt-1">
            Two Turnkey Live Formats
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Whether you need a packed Friday night dance floor or a relaxed Sunday afternoon brewery vibe, we scale to fit your room.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Full Band */}
          <div className="group relative bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 hover:border-red-600/60 rounded-2xl p-8 flex flex-col justify-between transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                  Full Electric • High Energy
                </span>
                <span className="text-xs text-zinc-400 font-mono">5-Piece Lineup</span>
              </div>

              <h3 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl uppercase font-bold text-white mb-3">
                Red Machine — Full Band
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Driving classic rock, blues, indie rock, and soulful woodwinds built for weekend bar rooms, music clubs, festivals, and community block parties across North Jersey and NYC.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Classic Rock & Blues', '90s/00s Indie', 'Guitar & Sax/Flute', 'Crowd Singalongs', 'Original Cuts'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-300 mb-8 border-t border-zinc-800/80 pt-6">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Full Backline Available:</strong> Complete PA system, drum kit, amps, and mics provided—or we tie seamlessly into your house FOH.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Ideal Rooms:</strong> Friday/Saturday night bars, rock venues, Porchfest/town stages, and private events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Meet the Lineup:</strong>{' '}
                    <Link href="/bio" className="text-red-400 hover:underline">
                      View our full 5-piece band bio &amp; member profiles &rarr;
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              onClick={() => setSelectedAct('Full Band (5-Piece)')}
              className="block text-center w-full py-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-600/20"
            >
              Book Full Band
            </a>
          </div>

          {/* Card 2: Solo Acoustic */}
          <div className="group relative bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 flex flex-col justify-between transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider">
                  Acoustic • Small Footprint
                </span>
                <span className="text-xs text-zinc-400 font-mono">Solo Act</span>
              </div>

              <h3 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl uppercase font-bold text-white mb-3">
                Owen “O Red” Corso — Solo Acoustic
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Warm, engaging acoustic sets tailored for craft breweries, taprooms, tavern happy hours, and restaurant patios. Elevates the room&apos;s vibe without overpowering conversation.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['70s–00s Classics', 'Americana / Blues Rock', 'Indie Acoustic', 'Taproom Favorites', 'Stripped Originals'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-300 mb-8 border-t border-zinc-800/80 pt-6">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Zero-Hassle Setup:</strong> 20-minute load-in, compact 5&apos;x5&apos; corner footprint, 100% self-contained column PA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Ideal Rooms:</strong> Craft breweries, gastropubs, outdoor patios, Sunday afternoon sessions &amp; dinners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-white">Flexible Volume:</strong> Dialed precisely to fit intimate indoor dining rooms or lively taproom crowds.</span>
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              onClick={() => setSelectedAct('Solo Acoustic')}
              className="block text-center w-full py-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-wider text-sm transition-all border border-zinc-700"
            >
              Book Solo Acoustic
            </a>
          </div>
        </div>
      </section>

      {/* Media & Rehearsal Vault Section */}
      <section id="media" className="py-20 px-4 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-500">Sight &amp; Sound</span>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl uppercase font-bold text-white mt-1">
                Live Media &amp; Rehearsal Cuts
              </h2>
            </div>
            <p className="text-zinc-400 text-sm mt-2 md:mt-0">
              Watch on{' '}
              <a href="https://bit.ly/RMonYT" target="_blank" rel="noreferrer" className="text-red-400 underline">
                YouTube
              </a>{' '}
              or stream on{' '}
              <a href="https://soundcloud.com/redmachineusa" target="_blank" rel="noreferrer" className="text-red-400 underline">
                SoundCloud
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Live Video Promo Card */}
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 flex flex-col justify-between">
              <a
                href="https://bit.ly/RMonYT"
                target="_blank"
                rel="noreferrer"
                className="aspect-video rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group"
              >
                <img
                  src="/img/rmnj-hero.jpg"
                  alt="Red Machine USA Video Reel"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center text-xl mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                  <span className="font-[family-name:var(--font-oswald)] text-xl uppercase tracking-wide text-white">
                    Watch Live Videos on YouTube
                  </span>
                  <span className="text-xs text-zinc-300 mt-1">bit.ly/RMonYT</span>
                </div>
              </a>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>Full 5-Piece Outdoor &amp; Bar Highlights</span>
                <span className="font-mono text-red-400">HD Live Audio</span>
              </div>
            </div>

            {/* Audio Sampler Card */}
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-oswald)] text-2xl uppercase font-bold text-white">
                    Rehearsal &amp; Live Vault
                  </h3>
                  <a
                    href="https://soundcloud.com/redmachineusa"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-red-400 text-xs font-mono transition-colors"
                  >
                    SoundCloud &rarr;
                  </a>
                </div>
                <p className="text-zinc-400 text-xs mb-5">
                  Unedited rehearsal room recordings and live board mixes showcasing what you get on stage.
                </p>

                <div className="space-y-3">
                  {[
                    { title: 'Full Band — Classic Blues & Rock Live Cut', sub: '5-Piece Rehearsal Session', badge: 'Full Band' },
                    { title: 'Full Band — Original Rock & Woodwinds Cut', sub: 'Guitar, Keys, Sax/Flute & Rhythm', badge: 'Original' },
                    { title: 'Owen Corso — Solo Acoustic Taproom Cut', sub: 'Vocals & Acoustic Guitar', badge: 'Solo Acoustic' },
                  ].map((track, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/90 flex items-center justify-between hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-red-600/15 border border-red-500/30 text-red-400 flex items-center justify-center text-xs font-bold">
                          ▶
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white">{track.title}</div>
                          <div className="text-xs text-zinc-500">{track.sub}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {track.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>Google Drive Rehearsal Sync</span>
                <a href="#booking" className="text-red-400 hover:underline font-semibold">
                  Request Custom Setlist &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Talent Buyer FAQ */}
      <section id="specs" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-oswald)] text-3xl uppercase font-bold text-white mb-6">
          Venue &amp; Sound Engineer Quick Specs
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 text-sm">
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-red-500 font-mono text-xs uppercase mb-1.5">01 / Coverage Area</div>
            <div className="font-bold text-base text-white mb-1.5">Ridgewood, Bergen County &amp; NYC</div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Available for local bar residencies, craft breweries, town festivals, Porchfest, and private events across North Jersey and the Tri-State area.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-red-500 font-mono text-xs uppercase mb-1.5">02 / Turnkey Sound &amp; Gear</div>
            <div className="font-bold text-base text-white mb-1.5">Full Backline &amp; PA Provided</div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              No house PA? No problem. We bring a complete PA system, mixers, drum kit, and amps—or we can tie directly into your venue&apos;s soundboard.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-red-500 font-mono text-xs uppercase mb-1.5">03 / Direct Contact</div>
            <div className="font-bold text-base text-white mb-1.5">Fast Turnaround for Bookers</div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Reach out via the form below or email{' '}
              <a href="mailto:redmachineusa@gmail.com" className="text-red-400 underline">
                redmachineusa@gmail.com
              </a>{' '}
              for quick date holds and quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & AI Twin Banner with rmnj-ai-selfie.png */}
      <section id="catalogue" className="py-8 px-4 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-950/40 border border-zinc-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/img/rmnj-ai-selfie.png"
              alt="Red Machine USA AI Twin"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-red-500/40 shadow-lg shrink-0"
            />
            <div>
              <span className="text-xs font-mono uppercase text-red-400">Career Archive &bull; Interactive Experience</span>
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl sm:text-3xl uppercase font-bold text-white mt-1">
                Original Song Catalogue &amp; &ldquo;AI Twin&rdquo; Bandmate Chat
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mt-2 leading-relaxed">
                Explore decades of original material spanning Ocelot Red, The Good News Band, and Red Machine USA—complete with an interactive AI twin that knows the story behind every track.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-300 text-xs font-mono uppercase">
            Phase 2 &amp; 3 Coming Soon
          </span>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-4 max-w-3xl mx-auto">
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500">Direct Booking Inquiry</span>
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl uppercase font-bold text-white mt-1">
              Book a Date
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Lock in a date for your venue or event. Inquiries save directly to our booking system and alert{' '}
              <a href="mailto:redmachineusa@gmail.com" className="text-red-400 font-mono hover:underline">
                redmachineusa@gmail.com
              </a>.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800 text-center text-emerald-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                ✓
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] font-bold uppercase text-2xl mb-1 text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-emerald-300">
                Thanks for reaching out. We&apos;ll check our calendar and get right back to you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Select Performance Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Full Band (5-Piece)', 'Solo Acoustic'].map((format) => (
                    <button
                      type="button"
                      key={format}
                      onClick={() => setSelectedAct(format)}
                      className={`py-3 px-4 rounded-lg border text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedAct === format
                          ? 'bg-red-600/20 border-red-500 text-white shadow-sm'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Venue Name &amp; Town
                  </label>
                  <input
                    type="text"
                    required
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="e.g., Five Dimes Brewery, Westwood NJ"
                    className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Target Date(s)
                  </label>
                  <input
                    type="text"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="e.g., Friday, Nov 13 or Open Weekends"
                    className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Your Email or Phone
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="booker@venue.com"
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Set Times, PA Info &amp; Compensation
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the slot, whether you have house sound or need our PA, and budget..."
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:border-red-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              {error && <p className="text-xs text-red-400 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-600/25 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Sending Inquiry...' : `Request Booking — ${selectedAct}`}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
