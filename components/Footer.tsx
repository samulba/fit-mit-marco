"use client";

import { Logo } from "./Logo";
import { MapPin, Phone, Mail, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "Über mich" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/fuer-angehoerige", label: "Für Angehörige" },
  { href: "/erstgespraech", label: "Erstgespräch" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "#cookie-settings", label: "Cookie-Einstellungen" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo variant="dark" width={220} height={70} />
            <p className="mt-6 text-white/85 leading-relaxed max-w-sm">
              Individuelles Personal Training für Senioren in München und
              Umgebung.
            </p>

            <a
              href="/erstgespraech"
              className="inline-flex items-center gap-2 mt-8 bg-teal hover:bg-mint text-forest px-5 py-3 rounded-full text-sm font-semibold transition-all"
            >
              Kostenloses Erstgespräch →
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-5">
              Navigation
            </div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/85 hover:text-teal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-5">
              Rechtliches
            </div>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  {l.href === "#cookie-settings" ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          typeof window !== "undefined" &&
                          typeof (window as any).__openCookieSettings ===
                            "function"
                        ) {
                          (window as any).__openCookieSettings();
                        }
                      }}
                      className="text-white/85 hover:text-teal transition-colors text-left"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      href={l.href}
                      className="text-white/85 hover:text-teal transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-5">
              Kontakt
            </div>
            <ul className="space-y-4 text-white/85">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-teal mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+491726223371"
                  className="hover:text-teal transition-colors font-mono text-sm"
                >
                  +49 172 6223371
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-teal mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:hallo@fitmitmarco.com"
                  className="hover:text-teal transition-colors font-mono text-sm"
                >
                  hallo@fitmitmarco.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-teal mt-1 flex-shrink-0"
                />
                <div>
                  <div className="font-medium text-white">
                    München & Umgebung
                  </div>
                  <div className="text-sm">Umkreis 30 km</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Credit bar — legible, classy, dofollow backlink for VicinusMedia */}
        <div className="pt-8 border-t border-white/10">
          <a
            href="https://www.vicinusmedia.com"
            target="_blank"
            rel="noopener"
            className="group block"
            aria-label="Webdesign und Entwicklung von VicinusMedia"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-teal/40 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/30 text-mint flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-forest transition-colors">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-[0.78rem] font-mono tracking-[0.15em] uppercase text-mint mb-1">
                    Design &amp; Entwicklung
                  </div>
                  <div className="font-display font-bold text-lg text-white leading-tight">
                    VicinusMedia{" "}
                    <span className="italic text-white/80 font-normal">
                      — Webdesign aus München
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-mint text-sm font-semibold">
                <span>vicinusmedia.com</span>
                <span className="w-8 h-8 rounded-full bg-teal/15 group-hover:bg-teal group-hover:text-forest text-mint flex items-center justify-center transition-all group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Tiny copyright row */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-white/85">
          <div>© 2026 Fit mit Marco · Marco Degel</div>
          <div className="font-mono text-xs">
            Mit viel Herz gemacht in München.
          </div>
        </div>
      </div>
    </footer>
  );
}
