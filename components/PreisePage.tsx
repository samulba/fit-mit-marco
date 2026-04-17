"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  Sparkles,
  Plus,
} from "lucide-react";
import { LogoIcon } from "./Logo";
import { Footer } from "./Footer";

const packages = [
  {
    name: "Schnuppern",
    badge: "Einzelstunde",
    price: "95",
    unit: "€",
    per: "/ 60 Min",
    desc: "Perfekt, um mich kennenzulernen oder unregelmäßig zu trainieren.",
    features: [
      "60 Minuten Training bei dir zuhause",
      "Komplettes Equipment inklusive",
      "Keine Bindung, keine Laufzeit",
      "Individuell auf dich zugeschnitten",
    ],
    cta: "Einzelstunde anfragen",
    highlight: false,
  },
  {
    name: "10er-Karte",
    badge: "Beliebteste Wahl",
    price: "850",
    unit: "€",
    per: "gesamt · 85 € / Std",
    desc: "Für alle, die regelmäßig trainieren wollen ohne sich lange zu binden.",
    features: [
      "10 × 60 Minuten Personal Training",
      "Ersparnis von 100 € gegenüber Einzelstunden",
      "6 Monate gültig ab erster Einheit",
      "Flexibel einlösbar – dein Tempo",
      "Kostenlose Übungen für zuhause",
    ],
    cta: "10er-Karte anfragen",
    highlight: true,
  },
  {
    name: "Monats-Paket",
    badge: "Maximaler Fortschritt",
    price: "320",
    unit: "€",
    per: "pro Monat · 4 Einheiten",
    desc: "Die beste Wahl, wenn du dauerhaft Fortschritte sehen willst.",
    features: [
      "4 × 60 Minuten Training pro Monat",
      "Nur 80 € pro Einheit",
      "Individueller Trainings- und Ernährungsplan",
      "WhatsApp-Support zwischen den Einheiten",
      "Monatlich kündbar nach 3 Monaten",
    ],
    cta: "Monats-Paket anfragen",
    highlight: false,
  },
];

const whatsIncluded = [
  "Hausbesuch im Umkreis von 30 km um München",
  "Komplettes Profi-Equipment (Matten, Bänder, Hanteln, Balance-Tools)",
  "Individuelle Bestandsaufnahme vor dem ersten Training",
  "Anpassung des Plans an Tagesform und Fortschritt",
  "Kostenloses Erstgespräch – immer",
  "Rechnung mit ausgewiesener Steuer (nach § 19 UStG)",
];

const faqs = [
  {
    q: "Warum sind Einzelstunden teurer als Pakete?",
    a: "Pakete belohnen Planungssicherheit – für dich und für mich. Wenn du regelmäßig trainierst, kann ich meine Termine besser strukturieren und gebe den Zeitgewinn als Rabatt weiter.",
  },
  {
    q: "Fallen Anfahrtskosten an?",
    a: "Nein. Im Preis ist alles enthalten, solange du im 30-km-Umkreis um München wohnst. Bei weiteren Entfernungen sprechen wir individuell.",
  },
  {
    q: "Was passiert, wenn ich eine gebuchte Einheit absagen muss?",
    a: "Bis 24 Stunden vorher kostenlos. Danach wird die Einheit in Rechnung gestellt, außer du weist einen triftigen Grund nach (z.B. akute Erkrankung).",
  },
  {
    q: "Kann meine Krankenkasse etwas erstatten?",
    a: "Personal Training ist eine Selbstzahlerleistung. Manche privaten Zusatzversicherungen erstatten Teile im Bereich Reha/Prävention – schau in deinen Vertrag.",
  },
  {
    q: "Kann ich zwischen Paketen wechseln?",
    a: "Jederzeit. Wenn du nach 3 Einzelstunden merkst, dass du regelmäßig trainieren willst, rechnen wir deine gezahlten Einheiten auf das neue Paket an.",
  },
  {
    q: "Gibt es Gruppen- oder Partner-Training?",
    a: "Partnertraining ist möglich – für 2 Personen kommen 30 € pro Einheit dazu. Beide trainieren gemeinsam und teilen sich die Kosten.",
  },
];

export function PreisePage() {
  return (
    <main className="bg-cream min-h-screen">
      <MiniNav />
      <Hero />
      <Pricing />
      <IncludedBar />
      <GiftCallout />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function MiniNav() {
  return (
    <header className="relative z-20 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoIcon size={36} variant="dark" />
          <div className="font-display font-bold leading-none">
            <div className="text-base">fit mit</div>
            <div className="text-base text-mint -mt-0.5">marco</div>
          </div>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/60 hover:text-mint transition-colors"
        >
          <ArrowLeft size={14} /> Zur Startseite
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-forest text-cream overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />
      <motion.div
        style={{ scale: gridScale }}
        className="absolute inset-0 opacity-[0.05] pointer-events-none hidden md:block"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #55EFC4 1px, transparent 1px), linear-gradient(to bottom, #55EFC4 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-teal/25 blur-[90px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-mint/15 blur-[100px]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full py-16 lg:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mint/30 bg-mint/5 mb-8"
          >
            <Sparkles size={14} className="text-mint" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-mint font-semibold">
              Transparent · Ehrlich · Ohne versteckte Kosten
            </span>
          </motion.div>

          <motion.h1 style={{ y: headlineY }} className="font-display font-bold leading-[0.95]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
              >
                Klare Preise.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block text-teal italic"
                style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
              >
                Keine Tricks.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 lg:mt-12 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Drei Pakete, unterschiedliche Intensität, gleiche Qualität. Kein
            verstecktes Kleingedrucktes, keine Anfahrtspauschalen, keine
            Aufpreise für Equipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#pakete"
              className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
            >
              <span>Pakete ansehen</span>
              <span className="w-11 h-11 rounded-full bg-forest text-teal group-hover:bg-cream group-hover:text-forest flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="rotate-90" />
              </span>
            </a>
            <a
              href="tel:+491726223371"
              className="inline-flex items-center gap-2 text-white/70 hover:text-mint transition-colors"
            >
              <Phone size={16} />
              <span className="font-mono text-sm">+49 172 6223371</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pakete" className="py-24 sm:py-28 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Deine Optionen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1]">
            Drei Wege.
            <br />
            <span className="italic text-forest/40">Ein Ziel.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-3xl p-7 sm:p-9 lg:p-10 flex flex-col ${
                pkg.highlight
                  ? "bg-forest text-cream border-2 border-teal lg:scale-105 shadow-2xl shadow-forest/20"
                  : "bg-white border border-sand"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-forest text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
                  {pkg.badge}
                </div>
              )}

              <div
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
                  pkg.highlight ? "text-mint" : "text-teal"
                }`}
              >
                {pkg.highlight ? "Paket" : pkg.badge}
              </div>

              <div
                className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-3 ${
                  pkg.highlight ? "text-cream" : "text-forest"
                }`}
              >
                {pkg.name}
              </div>

              <p
                className={`leading-relaxed mb-8 ${
                  pkg.highlight ? "text-white/70" : "text-slate"
                }`}
              >
                {pkg.desc}
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className={`font-display font-bold leading-none ${
                    pkg.highlight ? "text-mint" : "text-forest"
                  }`}
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                >
                  {pkg.price}
                </span>
                <span
                  className={`font-display font-bold text-3xl ${
                    pkg.highlight ? "text-mint" : "text-forest"
                  }`}
                >
                  {pkg.unit}
                </span>
              </div>
              <div
                className={`text-sm font-mono mb-8 ${
                  pkg.highlight ? "text-white/50" : "text-slate"
                }`}
              >
                {pkg.per}
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm sm:text-base leading-relaxed ${
                      pkg.highlight ? "text-white/80" : "text-forest"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center ${
                        pkg.highlight ? "bg-teal text-forest" : "bg-teal/15 text-teal"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/erstgespraech"
                className={`group inline-flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-teal hover:bg-mint text-forest"
                    : "bg-forest hover:bg-teal text-white hover:text-forest"
                }`}
              >
                {pkg.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-slate mt-10 font-mono">
          Alle Preise verstehen sich nach § 19 UStG ohne Ausweis der Umsatzsteuer
          (Kleinunternehmerregelung).
        </p>
      </div>
    </section>
  );
}

function IncludedBar() {
  return (
    <section className="py-20 lg:py-24 bg-forest text-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-4">
            In jedem Paket enthalten
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] max-w-2xl">
            Alles drin. Keine Überraschungen.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {whatsIncluded.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-2xl bg-forest-mid border border-white/10"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/15 text-mint flex items-center justify-center mt-0.5">
                <Check size={16} />
              </span>
              <span className="text-white/80 leading-snug pt-1">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GiftCallout() {
  return (
    <section className="py-20 lg:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-sand rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-teal/10 blur-[80px]" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-teal/15 text-teal flex items-center justify-center flex-shrink-0">
              <Sparkles size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest mb-2">
                Verschenken auch möglich
              </h3>
              <p className="text-slate leading-relaxed">
                Du möchtest jemandem Training schenken? Gutscheine in jeder Höhe
                sind möglich – einfach anrufen oder schreiben, ich stelle dir
                einen passenden Gutschein aus.
              </p>
            </div>
            <a
              href="tel:+491726223371"
              className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-teal text-white hover:text-forest px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
            >
              <Phone size={16} />
              Anrufen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-3">
            FAQ
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
            Fragen zu Preisen?
          </h2>
        </div>
        <div className="space-y-2.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? "bg-forest text-white border-forest"
                    : "bg-white border-sand hover:border-teal/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-bold text-base sm:text-lg leading-snug ${
                      isOpen ? "text-white" : "text-forest"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? "bg-teal rotate-45 text-forest" : "bg-cream text-teal"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/80 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
          Noch unsicher?
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-6">
          Starte kostenlos.
        </h2>
        <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed mb-10">
          Bevor du dich für ein Paket entscheidest: Lass uns reden. Das
          Erstgespräch ist kostenlos, unverbindlich und dauert 30 Minuten.
        </p>
        <Link
          href="/erstgespraech"
          className="group inline-flex items-center gap-3 bg-forest hover:bg-teal text-white hover:text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
        >
          Kostenloses Erstgespräch
          <span className="w-11 h-11 rounded-full bg-teal text-forest group-hover:bg-forest group-hover:text-teal flex items-center justify-center transition-colors">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
