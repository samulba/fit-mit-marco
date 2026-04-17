"use client";

import Link from "next/link";
import { useRef, FormEvent, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageCircle,
  ClipboardList,
  ShieldCheck,
  Clock,
  Gift,
  Sparkles,
  Check,
} from "lucide-react";
import { LogoIcon } from "./Logo";
import { Footer } from "./Footer";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/xqewprjy";

type Status = "idle" | "sending" | "sent" | "error";

const whatHappens = [
  {
    icon: MessageCircle,
    title: "Wir reden – du entscheidest.",
    text: "30 Minuten am Telefon oder bei dir vor Ort. Du erzählst mir von dir, deinen Zielen und Sorgen. Ich höre zu.",
  },
  {
    icon: ClipboardList,
    title: "Gemeinsame Bestandsaufnahme.",
    text: "Wir schauen ehrlich, wo du stehst – Beweglichkeit, Kraft, Balance. Ohne Leistungsdruck, ohne Fachjargon.",
  },
  {
    icon: Sparkles,
    title: "Dein persönlicher Plan.",
    text: "Du bekommst eine klare Einschätzung, was möglich ist – und drei konkrete erste Schritte. Egal ob mit mir oder ohne.",
  },
];

const benefits = [
  { icon: Gift, text: "100 % kostenlos – keine versteckten Kosten" },
  { icon: ShieldCheck, text: "Unverbindlich – du gehst keinerlei Verpflichtung ein" },
  { icon: Clock, text: "30 Minuten – dein Tempo, dein Zuhause" },
  { icon: Check, text: "Kein Verkaufsgespräch – nur ehrlicher Austausch" },
];

const faqs = [
  {
    q: "Was kostet das Erstgespräch?",
    a: "Nichts. Null. Das Erstgespräch ist komplett kostenlos – auch wenn wir am Ende feststellen, dass wir nicht zusammen passen. Das ist mein Weg dir zu zeigen, dass ich es ernst meine.",
  },
  {
    q: "Muss ich mich danach entscheiden?",
    a: "Nein. Du hast nach dem Gespräch alle Zeit der Welt. Kein Druck, kein Abschluss vor Ort. Melde dich wenn du dich entschieden hast – oder auch nicht.",
  },
  {
    q: "Wie lange dauert es?",
    a: "Rechne mit ca. 30 Minuten. Wenn wir mehr Zeit brauchen, nehmen wir sie uns.",
  },
  {
    q: "Was muss ich vorbereiten?",
    a: "Nichts. Bequeme Kleidung und ein Glas Wasser – mehr braucht es nicht. Wenn du Vorerkrankungen hast, erwähne sie im Gespräch.",
  },
];

export function ErstgespraechPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Hero />
      <WhatHappens />
      <BenefitsBar />
      <FormSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

/* ───────────────── Floating nav (overlays hero for full 100vh) ───────────────── */
function FloatingNav() {
  return (
    <div className="absolute top-0 inset-x-0 z-30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-5 flex items-center justify-between text-cream">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Zurück zur Startseite"
        >
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
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-forest text-cream overflow-hidden flex items-center"
    >
      <FloatingNav />
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Grid */}
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

      {/* Glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-48 -right-48 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-teal/25 blur-[90px]"
      />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-mint/15 blur-[100px]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full py-16 lg:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mint/30 bg-mint/5 backdrop-blur-sm mb-8"
          >
            <Gift size={14} className="text-mint" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-mint font-semibold">
              Kostenlos · Unverbindlich · 30 Minuten
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={{ y: headlineY }}
            className="font-display font-bold leading-[0.95] tracking-tight"
          >
            <SplitLine delay={0.2}>
              <span
                className="block"
                style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
              >
                Lass uns
              </span>
            </SplitLine>
            <SplitLine delay={0.35}>
              <span
                className="block text-teal italic"
                style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
              >
                reden.
              </span>
            </SplitLine>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 lg:mt-12 text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light"
          >
            30 Minuten. Kein Druck. Kein Verkauf.
            <br />
            Nur du, ich und die Frage: Passen wir zusammen?
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 lg:mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#anfrage"
              className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
            >
              <span>Termin anfragen</span>
              <span className="w-11 h-11 rounded-full bg-forest text-teal group-hover:bg-cream group-hover:text-forest flex items-center justify-center transition-colors">
                <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="tel:+491726223371"
              className="inline-flex items-center gap-2 text-white/70 hover:text-mint transition-colors"
            >
              <Phone size={16} />
              <span className="font-mono text-sm">oder +49 172 6223371</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">
          So läuft's ab
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function SplitLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─────────────────── What happens ─────────────────── */
function WhatHappens() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Was dich erwartet
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1]">
            Keine Versprechen.
            <br />
            <span className="italic text-teal">Nur ein Gespräch.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {whatHappens.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-sand hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="absolute top-6 right-7 font-display text-5xl leading-none text-sand group-hover:text-teal/20 transition-colors">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-forest text-mint group-hover:bg-teal group-hover:text-forest flex items-center justify-center mb-6 transition-colors">
                <step.icon size={22} />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-forest leading-tight mb-3 pr-10">
                {step.title}
              </h3>
              <p className="text-slate leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Benefits bar ─────────────────── */
function BenefitsBar() {
  return (
    <section className="py-16 lg:py-20 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/15 text-mint flex items-center justify-center">
                <b.icon size={18} />
              </div>
              <div className="font-medium text-base leading-snug pt-1.5">
                {b.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Form ─────────────────── */
function FormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message || "Versand fehlgeschlagen.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Netzwerkfehler – bitte später erneut versuchen.");
      setStatus("error");
    }
  }

  return (
    <section
      id="anfrage"
      className="py-24 sm:py-28 lg:py-36 bg-cream relative overflow-hidden"
    >
      {/* decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
              Dein Termin
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-6">
              Schreib mir.
              <br />
              <span className="italic text-forest/40">
                Ich melde mich heute noch.
              </span>
            </h2>
            <p className="text-lg text-slate leading-relaxed mb-8 max-w-lg">
              Hinterlasse deine Nummer – ich rufe dich innerhalb von 24 Stunden
              zurück und wir finden einen Termin, der für uns beide passt.
            </p>

            {/* Direct call */}
            <div className="bg-forest text-cream rounded-3xl p-6 lg:p-8">
              <div className="text-xs tracking-[0.2em] uppercase text-mint mb-3">
                Lieber direkt anrufen?
              </div>
              <a
                href="tel:+491726223371"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-teal text-forest flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl group-hover:text-mint transition-colors">
                    +49 172 6223371
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">
                    Mo – Sa, 8:00 – 20:00 Uhr
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-sand shadow-sm"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <input
              type="hidden"
              name="_subject"
              value="Neue Erstgespräch-Anfrage über fitmitmarco.de"
            />
            <input type="hidden" name="source" value="/erstgespraech" />

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-forest mb-7">
              Erstgespräch anfragen
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <Field label="Vorname" name="firstName" required />
              <Field label="Nachname" name="lastName" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <Field label="Telefon" name="phone" type="tel" required />
              <Field label="E-Mail" name="email" type="email" required />
            </div>

            <div className="mb-5">
              <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                Wann erreiche ich dich am besten?
              </label>
              <select
                name="preferredTime"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all text-charcoal text-base"
                defaultValue=""
              >
                <option value="" disabled>
                  Bitte wählen…
                </option>
                <option>Vormittags (8 – 12 Uhr)</option>
                <option>Mittags (12 – 14 Uhr)</option>
                <option>Nachmittags (14 – 18 Uhr)</option>
                <option>Abends (18 – 20 Uhr)</option>
                <option>Egal – ruf einfach an</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="erstgespraech-message"
                className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2"
              >
                Worum geht&apos;s?{" "}
                <span className="text-slate font-normal normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="erstgespraech-message"
                name="message"
                rows={4}
                placeholder="z. B. Ich habe seit Monaten Rückenschmerzen und möchte wieder fit werden…"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-none text-charcoal text-base"
              />
            </div>

            <p className="text-xs text-slate mb-6 leading-relaxed">
              Mit dem Absenden stimmst du zu, dass deine Angaben zur Bearbeitung
              deiner Anfrage verwendet werden. Mehr in der{" "}
              <Link href="/datenschutz" className="text-teal underline">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full group inline-flex items-center justify-center gap-3 bg-forest hover:bg-teal text-white hover:text-forest px-6 py-5 rounded-full font-semibold text-base transition-all hover:shadow-2xl hover:shadow-teal/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Wird gesendet…"}
              {status === "sent" && "✓ Danke! Ich melde mich heute noch."}
              {status === "idle" && (
                <>
                  Erstgespräch anfragen
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
              {status === "error" && "Erneut versuchen"}
            </button>

            {status === "error" && errorMsg && (
              <p className="mt-3 text-sm text-coral" role="alert">
                {errorMsg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={`eg-${name}`}
        className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={`eg-${name}`}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all text-charcoal text-base"
      />
    </div>
  );
}

/* ─────────────────── FAQ ─────────────────── */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-12 sm:mb-14">
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-3">
            Noch Fragen?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
            Das fragen sich viele.
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors ${
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
                      isOpen
                        ? "bg-teal rotate-45 text-forest"
                        : "bg-cream text-teal"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14m-7-7h14"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
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

        <div className="mt-12 text-center">
          <p className="text-slate mb-5">
            Andere Frage? Einfach anrufen – ich beantworte sie direkt.
          </p>
          <a
            href="tel:+491726223371"
            className="inline-flex items-center gap-2 text-forest font-display font-bold text-xl hover:text-teal transition-colors"
          >
            <Phone size={18} /> +49 172 6223371
          </a>
        </div>
      </div>
    </section>
  );
}
