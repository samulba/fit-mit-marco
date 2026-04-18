import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Home, Phone } from "lucide-react";
import { SubPageNav } from "@/components/SubPageNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description:
    "Diese Seite gibt es leider nicht. Schau auf der Startseite vorbei oder ruf Marco direkt an.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/", label: "Zur Startseite" },
  { href: "/erstgespraech", label: "Kostenloses Erstgespräch" },
  { href: "/preise", label: "Preise & Pakete" },
  { href: "/ratgeber", label: "Ratgeber lesen" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav />

      <section className="relative bg-forest text-cream min-h-[80vh] flex items-center overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-teal/20 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-mint/15 blur-[70px] pointer-events-none" />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-20 text-center">
          {/* Big 404 */}
          <div
            className="font-display font-bold italic text-mint/20 leading-none select-none mb-4"
            style={{ fontSize: "clamp(8rem, 28vw, 22rem)" }}
            aria-hidden="true"
          >
            404
          </div>

          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-5">
            Seite nicht gefunden
          </div>

          <h1
            className="font-display font-bold leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Hier geht's leider{" "}
            <span className="italic text-teal">nicht weiter.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed font-light mb-10">
            Diese Seite gibt es nicht (oder nicht mehr). Aber kein Grund zur
            Sorge — hier sind die wichtigsten Seiten, und du kannst mich auch
            direkt anrufen.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-6 pr-2 py-2 rounded-full font-semibold transition-all duration-400 hover:shadow-teal-glow"
            >
              <Home size={16} />
              <span>Zur Startseite</span>
              <span className="w-10 h-10 rounded-full bg-forest text-teal group-hover:bg-cream group-hover:text-forest flex items-center justify-center transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <a
              href="tel:+491726223371"
              className="inline-flex items-center gap-2 text-white/70 hover:text-mint transition-colors font-medium"
            >
              <Phone size={16} />
              <span className="font-mono text-sm">+49 172 6223371</span>
            </a>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl border border-white/15 bg-white/5 hover:border-teal/40 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  size={14}
                  className="text-mint transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
