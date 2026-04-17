import { Logo } from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "Über mich" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#stimmen", label: "Stimmen" },
  { href: "/#kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo variant="dark" width={220} height={70} />
            <p className="mt-6 text-white/60 leading-relaxed max-w-sm">
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
                    className="text-white/70 hover:text-teal transition-colors"
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
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-teal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-mint mb-5">
              Kontakt
            </div>
            <ul className="space-y-4 text-white/70">
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
                  href="mailto:fitmitmarcomuc@gmail.com"
                  className="hover:text-teal transition-colors font-mono text-sm"
                >
                  fitmitmarcomuc@gmail.com
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/40">
          <div>© 2026 Fit mit Marco · Marco Degel</div>
          <div className="font-mono text-xs">
            Mit viel Herz gemacht in München.
          </div>
        </div>
      </div>
    </footer>
  );
}
