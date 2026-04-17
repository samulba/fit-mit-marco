"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  Dumbbell,
  Footprints,
  Flower2,
  HeartPulse,
  Stethoscope,
  Apple,
  Quote,
} from "lucide-react";
import type { Leistung } from "@/lib/leistungen";

const iconMap = {
  dumbbell: Dumbbell,
  footprints: Footprints,
  flower: Flower2,
  heart: HeartPulse,
  stethoscope: Stethoscope,
  apple: Apple,
};

type Props = {
  leistung: Leistung | null;
  onClose: () => void;
};

export function ServiceModal({ leistung, onClose }: Props) {
  // Close on ESC + robust scroll lock that survives overscroll / fast scrolling
  useEffect(() => {
    if (!leistung) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Position-fixed scroll lock — prevents scroll chaining on mobile and
    // fixes the issue of background scrolling when reaching top/bottom inside
    // the modal. Also works in Safari where body.overflow:hidden alone fails.
    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      html.style.overflow = prev.htmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [leistung, onClose]);

  return (
    <AnimatePresence>
      {leistung && <Content leistung={leistung} onClose={onClose} />}
    </AnimatePresence>
  );
}

function Content({
  leistung,
  onClose,
}: {
  leistung: Leistung;
  onClose: () => void;
}) {
  const Icon = iconMap[leistung.iconName];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        className="fixed inset-0 z-[80] bg-forest/70 backdrop-blur-md touch-none"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 md:inset-4 lg:inset-10 z-[90] flex items-end md:items-center justify-center pointer-events-none"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="w-full max-w-4xl pointer-events-auto rounded-t-[2rem] md:rounded-[2rem] bg-cream overflow-hidden max-h-[92vh] md:max-h-[90vh] shadow-2xl flex flex-col"
        >
          {/* Hero */}
          <div className="relative bg-forest text-cream p-7 sm:p-10 lg:p-12 overflow-hidden flex-shrink-0">
            {/* Noise */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
              }}
            />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/20 blur-[80px]" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Schließen"
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-cream flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <X size={18} />
            </button>

            <div className="relative flex gap-5 items-start">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream/5 border border-white/10 text-mint flex items-center justify-center">
                <Icon size={28} />
              </div>
              <div className="flex-1 min-w-0 pr-10">
                <div className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-mint mb-2">
                  Leistung {leistung.num} · {leistung.tag}
                </div>
                <h2
                  id="service-modal-title"
                  className="font-display font-bold leading-[1]"
                  style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
                >
                  {leistung.hero.headline}{" "}
                  <span className="italic text-teal">
                    {leistung.hero.headlineItalic}
                  </span>
                </h2>
              </div>
            </div>

            <p className="relative mt-6 text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
              {leistung.hero.sub}
            </p>
          </div>

          {/* Body (scrollable, with overscroll containment so we don't scroll the background) */}
          <div
            className="flex-1 overflow-y-auto p-7 sm:p-10 lg:p-12 space-y-10"
            style={{ overscrollBehavior: "contain" }}
          >
            {/* For whom */}
            <section>
              <SectionLabel>Für wen</SectionLabel>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-forest mt-2 mb-5">
                {leistung.forWhom.title}
              </h3>
              <ul className="space-y-3">
                {leistung.forWhom.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/15 text-teal flex items-center justify-center mt-0.5">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section>
              <SectionLabel>Nutzen</SectionLabel>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-forest mt-2 mb-5">
                {leistung.benefits.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {leistung.benefits.items.map((b) => (
                  <div
                    key={b.title}
                    className="p-5 rounded-2xl bg-white border border-sand"
                  >
                    <div className="font-display font-bold text-forest mb-1.5">
                      {b.title}
                    </div>
                    <p className="text-sm text-slate leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Session */}
            <section>
              <SectionLabel>Ablauf</SectionLabel>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-forest mt-2 mb-1">
                {leistung.session.title}
              </h3>
              <p className="text-sm text-slate font-mono mb-5">
                {leistung.session.sub}
              </p>
              <div className="space-y-2.5">
                {leistung.session.steps.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 items-start p-4 bg-white border border-sand rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-lg bg-forest text-mint flex items-center justify-center font-mono text-xs font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-forest leading-snug">
                        {s.title}
                      </div>
                      <div className="text-sm text-slate mt-0.5">{s.text}</div>
                    </div>
                    <div className="font-mono text-xs text-slate whitespace-nowrap pt-2">
                      {s.duration}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote */}
            <section>
              <figure className="relative bg-forest text-cream rounded-2xl p-7 overflow-hidden">
                <Quote className="absolute top-5 right-5 text-mint/30" size={32} />
                <blockquote className="font-display italic text-lg sm:text-xl leading-snug mb-5 relative">
                  &ldquo;{leistung.quote.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-mint text-forest flex items-center justify-center font-display font-bold text-sm">
                    {leistung.quote.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">
                      {leistung.quote.name}, {leistung.quote.age}
                    </div>
                    <div className="text-white/50 text-xs">
                      Kunde von Fit mit Marco
                    </div>
                  </div>
                </figcaption>
              </figure>
            </section>
          </div>

          {/* Footer CTAs */}
          <div className="border-t border-sand bg-cream p-5 sm:p-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 flex-shrink-0">
            <Link
              href={`/leistungen/${leistung.slug}`}
              className="inline-flex items-center justify-center gap-2 text-forest hover:text-teal font-semibold transition-colors"
              onClick={onClose}
            >
              Ganze Seite öffnen
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/erstgespraech"
              onClick={onClose}
              className="group inline-flex items-center justify-center gap-2 bg-forest hover:bg-teal text-white hover:text-forest px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-teal/30"
            >
              Kostenloses Erstgespräch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-teal">
      {children}
    </div>
  );
}
