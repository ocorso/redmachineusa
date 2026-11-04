import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Band Bio & Lineup | Red Machine USA',
  description:
    'Meet Red Machine USA — New Jersey classic blues and gritty rock & roll fronted by Owen "O Red" Corso, featuring Brad Ivie, Tim Dunn, Matt Mazella, and Eve LoCastro.',
};

const bandMembers = [
  {
    name: 'Owen “O Red” Corso',
    role: 'Lead Vocals, Guitars',
    highlight: 'Frontman & Songwriter',
    image: '/img/ored.jpg',
    bio: 'Taught himself to write, produce, and perform rock ’n’ roll in Springsteen-celebrated Jersey. Founded Red Machine in 2008 following Villanova, PA projects Ocelot Red and The Good News Band, touring the NYC Metro and San Francisco Bay Area circuits.',
  },
  {
    name: 'Matt Mazella',
    role: 'Drums',
    highlight: 'The Engine Room',
    image: '/img/matt.jpg',
    bio: 'Anchors the band’s driving rhythm section with a pocket-perfect groove that powers both high-energy rockers and deep blues-rock jams.',
  },
  {
    name: 'Brad Ivie',
    role: 'Bass, Vocals',
    highlight: 'The Engine Room',
    image: '/img/brad.jpg',
    bio: 'Veteran bassist locking down the low end alongside Mazella while adding tight vocal harmonies to the live mix.',
  },
  {
    name: 'Tim Dunn',
    role: 'Keyboards, Vocals',
    highlight: 'Melodic Depth',
    image: '/img/tim.jpg',
    bio: 'Brings rich vintage color, organ swells, and melodic keyboard layers—plus backing vocals—to the band’s expansive sound.',
  },
  {
    name: 'Eve LoCastro',
    role: 'Flute, Sax, Vocals',
    highlight: 'Soulful Woodwinds',
    image: '/img/eve.jpg',
    bio: 'Delivers a searing, dynamic edge on flute, saxophone, and vocals that sets Red Machine USA apart on every stage.',
  },
];

const influences = {
  classic: ['Led Zeppelin', 'Eric Clapton', 'Jimi Hendrix', 'Pink Floyd'],
  modern: ['The Black Keys', 'The White Stripes', 'John Mayer'],
};

const socialLinks = [
  { name: 'YouTube', url: 'https://bit.ly/RMonYT', handle: 'bit.ly/RMonYT' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/redmachineusa', handle: '@redmachineusa' },
  { name: 'Instagram', url: 'https://instagram.com/redmachineusa', handle: '@redmachineusa' },
  { name: 'Facebook', url: 'https://facebook.com/redmachineusa', handle: '/redmachineusa' },
  { name: 'X / Twitter', url: 'https://twitter.com/redmachineusa', handle: '@redmachineusa' },
];

export default function BioPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white font-sans">
      {/* Top Navbar */}
      <Header />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/rmnj-hero.jpg"
            alt="Red Machine USA Band"
            className="w-full h-full object-cover object-center opacity-20 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/90 to-zinc-950" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Official Artist Biography &bull; RMNJ
          </span>
          <h1 className="font-[family-name:var(--font-oswald)] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
            Roots in Classic Blues.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Heart in Gritty Rock &amp; Roll.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Red Machine USA fuses vintage ambience with crisp guitar licks, driving rhythms, and soulful woodwinds into an indomitable live sound and original music guaranteed to make you move.
          </p>
        </div>
      </section>

      {/* The 5-Piece Lineup Grid with Member Photos */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500">The Powerhouse Lineup</span>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl uppercase font-bold text-white mt-1">
            Meet the Band
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-zinc-900/90 border border-zinc-800 hover:border-red-600/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                {/* Member Photo */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 right-3 text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-zinc-950/80 backdrop-blur-sm text-red-400 border border-red-500/30">
                    {member.highlight}
                  </span>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-oswald)] text-2xl uppercase font-bold text-white">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-red-400 mb-3">{member.role}</div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Narrative Bio + Influences Sidebar */}
      <section className="py-16 md:py-20 px-4 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full Story */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl uppercase font-bold text-white tracking-wide border-b border-zinc-800 pb-3">
              The Story of Red Machine USA
            </h2>

            <p>
              Frontman <strong className="text-white">Owen Corso</strong>, a.k.a.{' '}
              <span className="text-red-500 font-bold">&ldquo;O Red,&rdquo;</span> taught himself to write, produce, and perform rock &rsquo;n&rsquo; roll in Springsteen-celebrated Jersey. After earlier projects including Villanova, PA-based{' '}
              <strong className="text-white">Ocelot Red</strong> and{' '}
              <strong className="text-white">The Good News Band</strong>, Corso launched{' '}
              <strong className="text-white">Red Machine</strong> in 2008, touring the New York City Metro and San Francisco Bay Area circuits.
            </p>

            <p>
              Now based in New Jersey with a powerhouse 5-piece lineup, the band&rsquo;s reimagined, expansive sound is carving out a distinct niche across the region. Red Machine&rsquo;s sound invokes classic rock heavyweights like{' '}
              <strong className="text-white">Led Zeppelin, Eric Clapton, Jimi Hendrix, and Pink Floyd</strong>, paired with the modern garage-rock energy of{' '}
              <strong className="text-white">The Black Keys, The White Stripes, and John Mayer</strong>.
            </p>

            <p>
              The engine room features <strong className="text-white">Matt Mazella&rsquo;s</strong> pocket-perfect groove on drums and veteran bassist <strong className="text-white">Brad Ivie</strong> locking down the low end. Adding rich color and melodic depth are <strong className="text-white">Tim Dunn</strong> on keys and <strong className="text-white">Eve LoCastro</strong>, bringing a searing, dynamic edge on flute and sax.
            </p>

            <div className="p-6 rounded-xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border border-red-900/50 text-zinc-200 font-medium">
              Red Machine USA is back in the groove, in the studio, and bringing explosive live sets to stages across New Jersey — forging the path for a new generation of rock and blues.
            </div>
          </div>

          {/* Right Column: Group Photo + Sonic DNA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img
                src="/img/rmnj-hero.jpg"
                alt="Red Machine USA Full Lineup"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Sonic DNA Card */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500">Sonic DNA</span>
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl uppercase font-bold text-white mt-1 mb-4">
                For Fans Of
              </h3>

              <div className="mb-5">
                <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Classic Rock Heavyweights
                </div>
                <div className="flex flex-wrap gap-2">
                  {influences.classic.map((artist) => (
                    <span
                      key={artist}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs font-semibold"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Modern Garage &amp; Blues-Rock Energy
                </div>
                <div className="flex flex-wrap gap-2">
                  {influences.modern.map((artist) => (
                    <span
                      key={artist}
                      className="px-3 py-1.5 rounded-lg bg-red-950/30 border border-red-800/40 text-red-300 text-xs font-semibold"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Streaming Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500">Connect &amp; Listen</span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl uppercase font-bold text-white mt-1">
            Official Socials &amp; Channels
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-red-500/60 hover:bg-zinc-900 transition-all text-center group"
            >
              <div className="font-[family-name:var(--font-oswald)] text-lg uppercase font-bold text-white group-hover:text-red-400 transition-colors">
                {social.name}
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-1 truncate">{social.handle}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Banner Back to Booking */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12">
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl uppercase font-bold text-white mb-3">
            Ready to Bring Red Machine USA to Your Stage?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Available as the full 5-piece electric band or Owen Corso solo acoustic across Bergen County, North Jersey, and NYC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#booking"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-red-600/25"
            >
              Book a Date Now
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm transition-all"
            >
              &larr; Back to Main EPK
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}
