"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  Phone,
  Dumbbell,
  Footprints,
  Flower2,
  HeartPulse,
  Stethoscope,
  Apple,
  Quote,
  Plus,
} from "lucide-react";
import { Footer } from "./Footer";
import { SubPageNav } from "./SubPageNav";
import type { Leistung } from "@/lib/leistungen";
import { leistungen } from "@/lib/leistungen";

const iconMap = {
  dumbbell: Dumbbell,
  footprints: Footprints,
  flower: Flower2,
  heart: HeartPulse,
  stethoscope: Stethoscope,
  apple: Apple,
};

export function LeistungDetailPage({ leistung }: { leistung: Leistung }) {
  const Icon = iconMap[leistung.iconName];

  return (
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav backLabel="Alle Leistungen" backHref="/#leistungen" />
      <Hero leistung={leistung} Icon={Icon} />
      <ForWhom leistung={leistung} />
      <Benefits leistung={leistung} />
      <Session leistung={leistung} />
      <Results leistung={leistung} />
      <QuoteBlock leistung={leistung} />
      <FaqSection leistung={leistung} />
      <CrossSell current={leistung.slug} />
      <Footer />
    </main>
  );
}

/* ── Hero ── */
function Hero({
  leistung,
  Icon,
}: {
  leistung: Leistung;
  Icon: (typeof iconMap)[keyof typeof iconMap];
}) {
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
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-teal/25 blur-[90px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-mint/15 blur-[100px]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="text-[0.7rem] tracking-[0.15em] uppercase text-mint font-semibold">
                {leistung.hero.kicker}
              </span>
            </motion.div>

            <motion.h1
              style={{ y: headlineY }}
              className="font-display font-bold leading-[0.95] tracking-tight"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
                >
                  {leistung.hero.headline}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-teal italic"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
                >
                  {leistung.hero.headlineItalic}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 lg:mt-10 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl font-normal"
            >
              {leistung.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/erstgespraech"
                className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
              >
                <span>Kostenloses Erstgespräch</span>
                <span className="w-11 h-11 rounded-full bg-forest text-teal group-hover:bg-cream group-hover:text-forest flex items-center justify-center transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <a
                href="tel:+491726223371"
                className="inline-flex items-center gap-2 text-white/85 hover:text-mint transition-colors"
              >
                <Phone size={16} />
                <span className="font-mono text-sm">+49 172 6223371</span>
              </a>
            </motion.div>
          </div>

          {/* Icon disk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex lg:col-span-4 justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-72 h-72 -m-4"
              >
                <div className="absolute inset-0 rounded-full border border-teal/20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-teal shadow-lg shadow-teal/50" />
              </motion.div>
              <div className="relative w-64 h-64 rounded-full bg-forest-mid border border-white/10 flex items-center justify-center shadow-2xl shadow-forest/40">
                <Icon size={90} className="text-mint" strokeWidth={1.3} />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-teal text-forest text-[0.78rem] font-mono tracking-widest px-4 py-1.5 rounded-full">
                  {leistung.num} · {leistung.tag}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── For whom ── */
function ForWhom({ leistung }: { leistung: Leistung }) {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
            Für wen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-10 lg:mb-14">
            {leistung.forWhom.title}
          </h2>
          <ul className="space-y-4">
            {leistung.forWhom.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 text-lg lg:text-xl text-forest/75 leading-relaxed"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/15 text-teal flex items-center justify-center mt-1">
                  <Check size={16} />
                </span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Benefits ── */
function Benefits({ leistung }: { leistung: Leistung }) {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-mint mb-4">
            Nutzen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1]">
            {leistung.benefits.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {leistung.benefits.items.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-forest-mid border border-white/10 rounded-3xl p-7 sm:p-9 hover:border-teal/40 transition-colors"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl mb-3">
                {b.title}
              </div>
              <p className="text-white/85 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Session flow — Sticky Scrollytelling ── */
function Session({ leistung }: { leistung: Leistung }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  const steps = leistung.session.steps;

  return (
    <section className="bg-cream">
      {/* Intro */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
            Ablauf
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-4">
            {leistung.session.title}
          </h2>
          <p className="text-lg text-forest/75 font-mono">{leistung.session.sub}</p>
        </motion.div>
      </div>

      {/* Scrollytelling */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Giant background number */}
          <SessionBgNumber progress={smoothProgress} steps={steps} />

          {/* Progress rail */}
          <SessionRail progress={smoothProgress} steps={steps} />

          {/* Step content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 lg:col-start-2 relative min-h-[420px]">
                {steps.map((step, i) => (
                  <SessionStepCopy
                    key={i}
                    step={step}
                    index={i}
                    total={steps.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile indicator */}
          <SessionIndicator progress={smoothProgress} steps={steps} />
        </div>
      </div>
    </section>
  );
}

function SessionBgNumber({
  progress,
  steps,
}: {
  progress: MotionValue<number>;
  steps: Leistung["session"]["steps"];
}) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {steps.map((_, i) => {
        const segment = 1 / steps.length;
        const start = i * segment;
        const end = start + segment;
        const isFirst = i === 0;
        const isLast = i === steps.length - 1;
        const opacity = useTransform(
          progress,
          [
            isFirst ? -1 : start - 0.05,
            isFirst ? -1 : start + 0.05,
            isLast ? 2 : end - 0.05,
            isLast ? 2 : end + 0.05,
          ],
          [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
        );
        const x = useTransform(
          progress,
          [
            isFirst ? -1 : start - 0.05,
            isFirst ? -1 : start + 0.05,
            isLast ? 2 : end - 0.05,
            isLast ? 2 : end + 0.05,
          ],
          [isFirst ? "0%" : "-5%", "0%", "0%", isLast ? "0%" : "5%"]
        );
        return (
          <motion.div
            key={i}
            style={{ opacity, x, willChange: "transform, opacity" }}
            className="absolute inset-0 flex items-center justify-end pr-4 lg:pr-24"
          >
            <span
              className="font-display font-bold leading-none text-forest/[0.06] select-none"
              style={{ fontSize: "clamp(10rem, 45vw, 56rem)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function SessionRail({
  progress,
  steps,
}: {
  progress: MotionValue<number>;
  steps: Leistung["session"]["steps"];
}) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  const currentStep = useTransform(progress, (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    return String(idx + 1).padStart(2, "0");
  });

  return (
    <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
      <div className="relative w-px h-[50vh] bg-forest/10">
        <motion.div
          style={{ height, willChange: "height" }}
          className="absolute inset-x-0 top-0 bg-teal"
        />
      </div>
      <div className="font-mono text-xs text-forest/75 flex items-center gap-2">
        <motion.span className="text-forest font-semibold">
          {currentStep}
        </motion.span>
        <span className="text-forest/30">/</span>
        <span className="text-forest/30">
          {String(steps.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function SessionStepCopy({
  step,
  index,
  total,
  progress,
}: {
  step: Leistung["session"]["steps"][number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.05,
      isFirst ? -1 : start + 0.05,
      isLast ? 2 : end - 0.05,
      isLast ? 2 : end + 0.05,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const y = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.05,
      isFirst ? -1 : start + 0.05,
      isLast ? 2 : end - 0.05,
      isLast ? 2 : end + 0.05,
    ],
    [isFirst ? 0 : 40, 0, 0, isLast ? 0 : -40]
  );

  return (
    <motion.div
      style={{ opacity, y, willChange: "transform, opacity" }}
      className="absolute inset-x-0"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="font-mono text-xs text-forest/75 tracking-widest">
          SCHRITT {String(index + 1).padStart(2, "0")}
        </div>
        <div className="h-px w-16 bg-teal/40" />
        <div className="font-mono text-xs text-teal font-semibold">
          {step.duration}
        </div>
      </div>

      <h3
        className="font-display font-bold text-forest leading-[0.95] mb-6 lg:mb-8"
        style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
      >
        {step.title}
      </h3>

      <p className="text-lg lg:text-xl text-forest/75 leading-relaxed max-w-xl font-normal">
        {step.text}
      </p>
    </motion.div>
  );
}

function SessionIndicator({
  progress,
  steps,
}: {
  progress: MotionValue<number>;
  steps: Leistung["session"]["steps"];
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
      {steps.map((_, i) => {
        const segment = 1 / steps.length;
        const start = i * segment;
        const end = start + segment;
        const active = useTransform(
          progress,
          [start, start + 0.1, end - 0.1, end],
          [0, 1, 1, 0]
        );
        const width = useTransform(active, [0, 1], [24, 48]);
        const bg = useTransform(active, [0, 1], ["#1A3C3430", "#00B894"]);
        return (
          <motion.div
            key={i}
            style={{ width, backgroundColor: bg as any, willChange: "width" }}
            className="h-1 rounded-full"
          />
        );
      })}
    </div>
  );
}

/* ── Results ── */
function Results({ leistung }: { leistung: Leistung }) {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
            Ergebnisse
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1]">
            {leistung.results.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {leistung.results.points.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 lg:p-6 bg-cream rounded-2xl border border-sand"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal text-forest flex items-center justify-center">
                <Check size={18} strokeWidth={2.5} />
              </span>
              <p className="text-base lg:text-lg text-forest leading-snug pt-1.5 font-medium">
                {r}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Quote ── */
function QuoteBlock({ leistung }: { leistung: Leistung }) {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-forest text-cream rounded-3xl p-10 lg:p-16 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal/15 blur-[100px]" />
          <Quote
            className="absolute top-8 right-8 text-mint/30"
            size={56}
          />

          <div className="relative">
            <blockquote
              className="font-display italic leading-[1.2] text-cream mb-8"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              &ldquo;{leistung.quote.text}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-mint text-forest flex items-center justify-center font-display font-bold">
                {leistung.quote.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">
                  {leistung.quote.name}
                  {leistung.quote.age ? `, ${leistung.quote.age}` : ""}
                </div>
                <div className="text-xs text-white/80">
                  Kunde von Fit mit Marco
                </div>
              </div>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection({ leistung }: { leistung: Leistung }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-3">
            Häufige Fragen
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
            Was oft gefragt wird
          </h2>
        </div>

        <div className="space-y-2.5">
          {leistung.faq.map((f, i) => {
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

/* ── Cross-sell other services ── */
function CrossSell({ current }: { current: string }) {
  const others = leistungen.filter((l) => l.slug !== current).slice(0, 3);
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-10">
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-3">
            Weitere Leistungen
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
            Das könnte dich auch interessieren
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {others.map((o) => {
            const OIcon = iconMap[o.iconName];
            return (
              <Link
                key={o.slug}
                href={`/leistungen/${o.slug}`}
                className="group bg-white border border-sand rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 hover:border-teal/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-forest text-mint group-hover:bg-teal group-hover:text-forest flex items-center justify-center transition-colors">
                    <OIcon size={20} />
                  </div>
                  <span className="font-mono text-xs text-forest/75 tracking-wider">
                    {o.num} · {o.tag}
                  </span>
                </div>
                <div className="font-display font-bold text-xl text-forest leading-tight mb-2">
                  {o.titleShort}
                </div>
                <div className="text-sm text-forest/75">
                  <span className="inline-flex items-center gap-1 text-teal font-semibold mt-2">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
