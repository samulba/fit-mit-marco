"use client";

import Link from "next/link";
import { useRef, FormEvent, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ClipboardList,
  ShieldCheck,
  Clock,
  Gift,
  Map,
  Check,
} from "lucide-react";
import { Footer } from "./Footer";
import { SubPageNav } from "./SubPageNav";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/xqewprjy";

type Status = "idle" | "sending" | "sent" | "error";

const whatHappens = [
  {
    icon: MessageCircle,
    keyword: "Anruf",
    eyebrow: "Du greifst zum Hörer",
    title: "Wir reden –",
    titleAccent: "du entscheidest.",
    text: "30 Minuten am Telefon oder bei dir vor Ort. Du erzählst mir von dir, deinen Zielen, deinen Sorgen. Ich höre zu.",
    visual: "phone" as const,
  },
  {
    icon: ClipboardList,
    keyword: "Analyse",
    eyebrow: "Ich schaue hin",
    title: "Gemeinsame",
    titleAccent: "Bestandsaufnahme.",
    text: "Wir schauen ehrlich, wo du stehst – Beweglichkeit, Kraft, Balance. Ohne Leistungsdruck. Ohne Fachjargon.",
    visual: "clipboard" as const,
  },
  {
    icon: Map,
    keyword: "Plan",
    eyebrow: "Du nimmst etwas mit",
    title: "Dein",
    titleAccent: "persönlicher Plan.",
    text: "Du bekommst eine klare Einschätzung, was möglich ist – und drei konkrete Schritte. Egal ob mit mir oder ohne.",
    visual: "route" as const,
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
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav />
      <Hero />
      <WhatHappens />
      <BenefitsBar />
      <FormSection />
      <FaqSection />
      <Footer />
    </main>
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
            className="mt-8 lg:mt-12 text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl mx-auto font-normal"
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
              className="inline-flex items-center gap-2 text-white/85 hover:text-mint transition-colors"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/85"
      >
        <span className="text-[0.75rem] tracking-[0.18em] uppercase">
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

/* ═══════════════════════════════════════════════════════════════════
   WHAT HAPPENS — Cinematic Sticky Scrollytelling
   Full-stage with giant morphing word, animated SVG scenes,
   layered parallax backgrounds, word-by-word reveal.
   ═══════════════════════════════════════════════════════════════════ */

function WhatHappens() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <section className="bg-forest text-cream relative">
      {/* Intro */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-10 -right-20 w-[400px] h-[400px] rounded-full bg-teal/15 blur-[70px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-mint mb-4">
              Was dich erwartet
            </div>
            <h2 className="font-display font-bold leading-[1]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Keine Versprechen.
              <br />
              <span className="italic text-teal">Nur ein Gespräch.</span>
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 text-mint text-xs font-mono tracking-widest uppercase">
              <span className="h-px w-8 bg-mint" />
              In drei Akten
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic stage */}
      <div
        ref={containerRef}
        style={{ height: `${whatHappens.length * 130}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-forest">
          {/* Layer: Noise */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
            }}
          />

          {/* Layer: Parallax grid */}
          <ParallaxGrid progress={smoothProgress} />

          {/* Layer: Giant morphing background word */}
          <GiantWord progress={smoothProgress} />

          {/* Layer: Color-shifting glow */}
          <ShiftingGlow progress={smoothProgress} />

          {/* Layer: Progress rail (desktop) */}
          <CinematicRail progress={smoothProgress} />

          {/* Stage content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left: Animated visual */}
              <div className="hidden lg:block lg:col-span-5 relative aspect-square max-h-[70vh]">
                {whatHappens.map((step, i) => (
                  <VisualScene
                    key={i}
                    step={step}
                    index={i}
                    total={whatHappens.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>

              {/* Right: Text stage */}
              <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[500px]">
                {whatHappens.map((step, i) => (
                  <TextStage
                    key={i}
                    step={step}
                    index={i}
                    total={whatHappens.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile progress ticker */}
          <MobileTicker progress={smoothProgress} />
        </div>
      </div>
    </section>
  );
}

/* ── Layer: Parallax grid ── */
function ParallaxGrid({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(progress, [0, 0.5, 1], [0.06, 0.1, 0.06]);
  return (
    <motion.div
      style={{ y, opacity, willChange: "transform, opacity" }}
      className="absolute inset-0 pointer-events-none z-0 hidden md:block"
    >
      <div
        className="absolute inset-[-10%]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #55EFC4 1px, transparent 1px), linear-gradient(to bottom, #55EFC4 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </motion.div>
  );
}

/* ── Layer: Giant morphing background word ── */
function GiantWord({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {whatHappens.map((step, i) => {
        const segment = 1 / whatHappens.length;
        const start = i * segment;
        const end = start + segment;
        const isFirst = i === 0;
        const isLast = i === whatHappens.length - 1;

        const opacity = useTransform(
          progress,
          [
            isFirst ? -1 : start - 0.04,
            isFirst ? -1 : start + 0.06,
            isLast ? 2 : end - 0.06,
            isLast ? 2 : end + 0.04,
          ],
          [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
        );
        const scale = useTransform(
          progress,
          [
            isFirst ? -1 : start - 0.04,
            isFirst ? -1 : start + 0.06,
            isLast ? 2 : end - 0.06,
            isLast ? 2 : end + 0.04,
          ],
          [isFirst ? 1 : 1.15, 1, 1, isLast ? 1 : 0.85]
        );
        const letterSpacing = useTransform(
          progress,
          [start, end],
          ["-0.04em", "0.02em"]
        );

        return (
          <motion.span
            key={i}
            style={{
              opacity,
              scale,
              letterSpacing,
              willChange: "transform, opacity",
            }}
            className="absolute font-display font-bold italic text-white/[0.045] select-none whitespace-nowrap"
            aria-hidden="true"
          >
            <span style={{ fontSize: "clamp(7rem, 26vw, 32rem)" }}>
              {step.keyword}
            </span>
          </motion.span>
        );
      })}
    </div>
  );
}

/* ── Layer: Color-shifting glow orb ── */
function ShiftingGlow({ progress }: { progress: MotionValue<number> }) {
  // Glow moves across the viewport and changes hue per step
  const x = useTransform(progress, [0, 0.5, 1], ["20%", "60%", "30%"]);
  const y = useTransform(progress, [0, 0.5, 1], ["20%", "70%", "40%"]);
  const hue = useTransform(
    progress,
    [0, 0.33, 0.66, 1],
    ["#00B894", "#55EFC4", "#A8D5BA", "#00B894"]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        backgroundColor: hue as any,
        willChange: "transform, background-color",
      }}
      className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[80px] opacity-30 pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

/* ── Layer: Desktop progress rail ── */
function CinematicRail({ progress }: { progress: MotionValue<number> }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  const current = useTransform(progress, (v) => {
    const idx = Math.min(whatHappens.length - 1, Math.floor(v * whatHappens.length));
    return String(idx + 1).padStart(2, "0");
  });

  return (
    <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
      <div className="font-mono text-[0.78rem] text-white/85 tracking-widest uppercase">
        Akt
      </div>
      <div className="relative w-px h-[40vh] bg-white/10">
        <motion.div
          style={{ height, willChange: "height" }}
          className="absolute inset-x-0 top-0 bg-teal"
        />
        {whatHappens.map((_, i) => {
          const pos = ((i + 0.5) / whatHappens.length) * 100;
          return (
            <div
              key={i}
              style={{ top: `${pos}%` }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30"
            />
          );
        })}
      </div>
      <div className="flex items-center gap-1.5 font-mono text-xs">
        <motion.span className="text-mint font-semibold">{current}</motion.span>
        <span className="text-white/20">/</span>
        <span className="text-white/85">
          {String(whatHappens.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ── Stage: Animated SVG visual per step ── */
function VisualScene({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof whatHappens)[number];
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
      isFirst ? -1 : start - 0.04,
      isFirst ? -1 : start + 0.06,
      isLast ? 2 : end - 0.06,
      isLast ? 2 : end + 0.04,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const scale = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.04,
      isFirst ? -1 : start + 0.06,
      isLast ? 2 : end - 0.06,
      isLast ? 2 : end + 0.04,
    ],
    [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85]
  );

  // Local progress 0..1 inside this step
  const local = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ opacity, scale, willChange: "transform, opacity" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {step.visual === "phone" && <PhoneScene local={local} />}
      {step.visual === "clipboard" && <ClipboardScene local={local} />}
      {step.visual === "route" && <RouteScene local={local} />}
    </motion.div>
  );
}

/* ── Scene 1: Phone with pulsating ripples ── */
function PhoneScene({ local }: { local: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* CSS-only ripples */}
      <div className="absolute w-40 h-40 rounded-full border border-mint anim-ripple" />
      <div className="absolute w-40 h-40 rounded-full border border-mint anim-ripple-2" />
      <div className="absolute w-40 h-40 rounded-full border border-mint anim-ripple-3" />

      {/* CSS-only outer ring */}
      <div className="absolute w-80 h-80 rounded-full border border-teal/25 anim-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal" />
      </div>

      {/* Central disk with phone icon */}
      <motion.div
        animate={{
          rotate: [0, -12, 12, -10, 10, 0],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="relative w-44 h-44 rounded-[2rem] bg-gradient-to-br from-teal to-mint text-forest shadow-2xl shadow-teal/30 flex items-center justify-center"
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Signal dots */}
      {[-1, 0, 1].map((i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            delay: i * 0.2 + 1,
            repeat: Infinity,
          }}
          style={{
            left: `calc(50% + ${i * 28}px)`,
            top: "calc(50% - 90px)",
          }}
          className="absolute w-2 h-2 rounded-full bg-mint"
        />
      ))}
    </div>
  );
}

/* ── Scene 2: Clipboard with writing lines ── */
function ClipboardScene({ local }: { local: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* CSS-only orbiting ring */}
      <div className="absolute w-80 h-80 rounded-full border border-mint/20 anim-spin-reverse-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mint" />
      </div>

      {/* CSS-only floating clipboard */}
      <div className="relative w-56 h-64 rounded-[1.5rem] bg-cream text-forest shadow-2xl shadow-teal/20 overflow-hidden anim-float-y">
        {/* Top clip */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-24 h-6 bg-forest rounded-t-lg rounded-b-md flex items-center justify-center">
          <div className="w-10 h-2 bg-teal rounded-full" />
        </div>

        {/* Writing lines (draw in repeatedly) */}
        <div className="absolute inset-0 pt-12 px-6 space-y-4">
          {[0.9, 0.7, 0.95, 0.6, 0.85].map((w, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.85, 1],
              }}
              style={{
                originX: 0,
                width: `${w * 100}%`,
              }}
              className="h-2 rounded-full bg-forest/20"
            />
          ))}
          {/* Checkmark that pops */}
          <motion.div
            animate={{
              scale: [0, 0, 1, 1, 0],
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.6, 0.7, 0.9, 1],
            }}
            className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-teal text-forest flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Scene 3: Route with 3 milestones being drawn in ── */
function RouteScene({ local }: { local: MotionValue<number> }) {
  // The S-shaped path we'll draw through
  const pathD =
    "M 40 240 C 40 180, 180 180, 180 140 C 180 100, 40 100, 40 60 L 180 60";

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* CSS-only outer rotating ring */}
      <div className="absolute w-80 h-80 rounded-full border border-mint/20 anim-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-mint" />
      </div>

      {/* CSS-only floating map card */}
      <div className="relative w-60 h-72 rounded-[1.5rem] bg-cream text-forest shadow-2xl shadow-teal/20 overflow-hidden p-6 anim-float-y">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-forest/70">
            Dein Plan
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal/40" />
          </div>
        </div>

        {/* Map subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1A3C34 1px, transparent 1px), linear-gradient(to bottom, #1A3C34 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Path SVG */}
        <svg
          viewBox="0 0 220 300"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base (faint) path */}
          <path
            d={pathD}
            stroke="#1A3C34"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 5"
            strokeOpacity="0.15"
          />
          {/* Active (drawn) path */}
          <motion.path
            d={pathD}
            stroke="#00B894"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.55, 0.85, 1],
            }}
          />

          {/* 3 milestones that pop in sequentially */}
          {[
            { cx: 40, cy: 240, label: "A", delay: 0 },
            { cx: 180, cy: 140, label: "B", delay: 1.2 },
            { cx: 180, cy: 60, label: "C", delay: 2.4 },
          ].map((m) => (
            <g key={m.label}>
              <motion.circle
                cx={m.cx}
                cy={m.cy}
                r="10"
                fill="#00B894"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1, 0] }}
                transition={{
                  duration: 4.5,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeOut",
                  times: [
                    m.delay / 4.5,
                    Math.min(1, (m.delay + 0.2) / 4.5),
                    0.85,
                    1,
                  ],
                }}
                style={{ transformOrigin: `${m.cx}px ${m.cy}px` }}
              />
              <motion.circle
                cx={m.cx}
                cy={m.cy}
                r="10"
                fill="none"
                stroke="#00B894"
                strokeWidth="1.5"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 2.2, 2.2, 1],
                  opacity: [0.8, 0, 0, 0],
                }}
                transition={{
                  duration: 4.5,
                  delay: 0,
                  repeat: Infinity,
                  ease: "easeOut",
                  times: [
                    m.delay / 4.5,
                    Math.min(1, (m.delay + 0.6) / 4.5),
                    0.85,
                    1,
                  ],
                }}
                style={{ transformOrigin: `${m.cx}px ${m.cy}px` }}
              />
              <text
                x={m.cx}
                y={m.cy + 1.5}
                fontSize="8"
                fontWeight="700"
                fontFamily="ui-monospace, monospace"
                fill="#F8F5F0"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {m.label}
              </text>
            </g>
          ))}

          {/* Moving pin that travels the route */}
          <motion.g
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: ["0%", "100%", "100%", "0%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.55, 0.85, 1],
            }}
            style={{
              offsetPath: `path("${pathD}")`,
              offsetRotate: "0deg",
            }}
          >
            <circle cx="0" cy="0" r="5" fill="#55EFC4" />
            <circle cx="0" cy="0" r="2.5" fill="#1A3C34" />
          </motion.g>
        </svg>

        {/* Footer pill */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-full bg-forest text-cream">
          <span className="font-mono text-[0.75rem] tracking-widest uppercase">
            3 Schritte
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#55EFC4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Stage: Text reveal with word-by-word animation ── */
function TextStage({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof whatHappens)[number];
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
      isFirst ? -1 : start - 0.04,
      isFirst ? -1 : start + 0.06,
      isLast ? 2 : end - 0.06,
      isLast ? 2 : end + 0.04,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  // Local progress for word reveal inside this step
  const local = useTransform(progress, [start, end], [0, 1]);
  const wordOpacity = useTransform(local, [0, 0.25], [0, 1]);
  const wordOpacity2 = useTransform(local, [0.1, 0.4], [0, 1]);
  const wordY = useTransform(local, [0, 0.25], [30, 0]);
  const wordY2 = useTransform(local, [0.1, 0.4], [30, 0]);
  const textOpacity = useTransform(local, [0.3, 0.55], [0, 1]);
  const textY = useTransform(local, [0.3, 0.55], [20, 0]);

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, willChange: "opacity" }}
      className="absolute inset-x-0"
    >
      {/* Eyebrow */}
      <motion.div
        style={{
          opacity: useTransform(local, [0, 0.15], [0, 1]),
          y: useTransform(local, [0, 0.15], [20, 0]),
        }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/30 text-mint flex items-center justify-center">
          <Icon size={18} />
        </div>
        <div>
          <div className="font-mono text-[0.78rem] text-mint tracking-[0.15em] uppercase font-semibold">
            Akt {String(index + 1).padStart(2, "0")} · {step.keyword}
          </div>
          <div className="font-mono text-xs text-white/85 mt-0.5">
            {step.eyebrow}
          </div>
        </div>
      </motion.div>

      {/* Headline (word by word) */}
      <h3
        className="font-display font-bold leading-[0.95] mb-8 lg:mb-10"
        style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
      >
        <motion.span
          style={{ opacity: wordOpacity, y: wordY, display: "block" }}
        >
          {step.title}
        </motion.span>
        <motion.span
          style={{
            opacity: wordOpacity2,
            y: wordY2,
            display: "block",
          }}
          className="italic text-teal"
        >
          {step.titleAccent}
        </motion.span>
      </h3>

      {/* Body */}
      <motion.p
        style={{ opacity: textOpacity, y: textY }}
        className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-xl font-normal"
      >
        {step.text}
      </motion.p>

      {/* Footer stats */}
      <motion.div
        style={{
          opacity: useTransform(local, [0.5, 0.75], [0, 1]),
          y: useTransform(local, [0.5, 0.75], [20, 0]),
        }}
        className="mt-10 flex items-center gap-6 pt-6 border-t border-white/10"
      >
        <div>
          <div className="text-[0.75rem] tracking-[0.2em] uppercase text-white/85 mb-1">
            Dauer
          </div>
          <div className="font-mono text-sm text-mint">
            {index === 0 ? "~ 5 Min" : index === 1 ? "~ 30 Min" : "~ 10 Min"}
          </div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div>
          <div className="text-[0.75rem] tracking-[0.2em] uppercase text-white/85 mb-1">
            Du brauchst
          </div>
          <div className="font-mono text-sm text-mint">
            {index === 0 ? "Telefon" : index === 1 ? "Zeit für dich" : "Offenheit"}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Mobile bottom ticker ── */
function MobileTicker({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
      {whatHappens.map((_, i) => {
        const segment = 1 / whatHappens.length;
        const start = i * segment;
        const end = start + segment;
        const active = useTransform(
          progress,
          [start, start + 0.1, end - 0.1, end],
          [0, 1, 1, 0]
        );
        const width = useTransform(active, [0, 1], [20, 56]);
        const bg = useTransform(active, [0, 1], ["#ffffff20", "#00B894"]);
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
            <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
              Dein Termin
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-6">
              Schreib mir.
              <br />
              <span className="italic text-forest/65">
                Ich melde mich heute noch.
              </span>
            </h2>
            <p className="text-lg text-forest/75 leading-relaxed mb-8 max-w-lg">
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
                  <div className="text-xs text-white/85 mt-0.5">
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
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                Wann erreiche ich dich am besten?
              </label>
              <select
                name="preferredTime"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15 focus:shadow-soft transition-all duration-400 text-charcoal text-base"
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
                className="block text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2"
              >
                Worum geht&apos;s?{" "}
                <span className="text-forest/75 font-normal normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="erstgespraech-message"
                name="message"
                rows={4}
                placeholder="z. B. Ich habe seit Monaten Rückenschmerzen und möchte wieder fit werden…"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15 focus:shadow-soft transition-all duration-400 resize-none text-charcoal text-base"
              />
            </div>

            <p className="text-xs text-forest/75 mb-6 leading-relaxed">
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
        className="block text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={`eg-${name}`}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-cream focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15 focus:shadow-soft transition-all duration-400 text-charcoal text-base"
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
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-3">
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
          <p className="text-forest/75 mb-5">
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
