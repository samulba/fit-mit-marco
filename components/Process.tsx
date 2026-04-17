"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { Phone, ClipboardCheck, Home, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Phone,
    num: "01",
    kicker: "Anruf",
    title: "Ruf mich an.",
    subtitle: "+49 176 2346578",
    text: "Ich bin persönlich erreichbar. Erzähl mir von dir, deinen Zielen, deinen Sorgen – ich höre zu, ohne Druck.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    kicker: "Kennenlernen",
    title: "Wir treffen uns.",
    subtitle: "Kostenlos & unverbindlich",
    text: "Bei einem ersten Termin schauen wir gemeinsam, wo du stehst. Ohne Leistungsdruck. Ohne Fachjargon. Ehrlich und auf Augenhöhe.",
  },
  {
    icon: Home,
    num: "03",
    kicker: "Training",
    title: "Wir starten.",
    subtitle: "Bei dir zuhause",
    text: "Ich bringe alles mit, was wir brauchen. Du brauchst nur bequeme Kleidung. In deinen vier Wänden, in deinem Tempo.",
  },
];

export function Process() {
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

  return (
    <section id="process" className="bg-cream">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-24 sm:pt-32 lg:pt-40 pb-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Der Weg
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-forest leading-[0.95]">
            Drei Schritte.
            <br />
            <span className="text-forest/30 italic">Ein neuer Anfang.</span>
          </h2>
          <div className="mt-8 inline-flex items-center gap-2 text-slate text-sm">
            <span className="font-mono text-xs">SCROLL</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic scrollytelling */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Giant step number that stays in view */}
          <BigNumber progress={smoothProgress} />

          {/* Progress indicator on the left */}
          <ProgressRail progress={smoothProgress} />

          {/* Step content that morphs */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Text column */}
                <div className="lg:col-span-7 lg:col-start-2">
                  {steps.map((step, i) => (
                    <StepCopy
                      key={i}
                      step={step}
                      index={i}
                      total={steps.length}
                      progress={smoothProgress}
                    />
                  ))}
                </div>

                {/* Visual column */}
                <div className="hidden lg:block lg:col-span-3 relative aspect-square">
                  {steps.map((step, i) => (
                    <StepVisual
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
          </div>

          {/* Floating step indicator bottom */}
          <StepIndicator progress={smoothProgress} />
        </div>
      </div>
    </section>
  );
}

/* ── Big background number that slides through the viewport ── */
function BigNumber({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {steps.map((step, i) => {
        const segment = 1 / steps.length;
        const start = i * segment;
        const end = start + segment;
        const opacity = useTransform(
          progress,
          [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
          [0, 1, 1, 0]
        );
        const x = useTransform(
          progress,
          [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
          ["-5%", "0%", "0%", "5%"]
        );
        return (
          <motion.div
            key={i}
            style={{
              opacity,
              x,
              willChange: "transform, opacity",
            }}
            className="absolute inset-0 flex items-center justify-end pr-4 lg:pr-24"
          >
            <span
              className="font-display font-bold leading-none text-forest/[0.06] select-none"
              style={{ fontSize: "clamp(18rem, 55vw, 56rem)" }}
            >
              {step.num}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Progress rail on the left (desktop) ── */
function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
      {/* Track */}
      <div className="relative w-px h-[50vh] bg-forest/10">
        <motion.div
          style={{ height, willChange: "height" }}
          className="absolute inset-x-0 top-0 bg-teal"
        />
      </div>
      {/* Counter */}
      <div className="font-mono text-xs text-slate flex items-center gap-2">
        <StepCounter progress={progress} />
        <span className="text-forest/30">/</span>
        <span className="text-forest/30">{String(steps.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function StepCounter({ progress }: { progress: MotionValue<number> }) {
  const active = useTransform(progress, (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    return String(idx + 1).padStart(2, "0");
  });
  return (
    <motion.span className="text-forest font-semibold">{active}</motion.span>
  );
}

/* ── Step copy that morphs in/out ── */
function StepCopy({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  // Crossfade with overlap so there's never empty space
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        willChange: "transform, opacity",
      }}
      className="absolute inset-x-0 px-5 sm:px-6 lg:px-0 lg:inset-x-auto"
    >
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="font-mono text-xs text-slate tracking-widest">
          SCHRITT {step.num}
        </div>
        <div className="h-px w-16 bg-teal/40" />
        <div className="text-xs font-semibold tracking-[0.25em] uppercase text-teal">
          {step.kicker}
        </div>
      </div>

      <h3
        className="font-display font-bold text-forest leading-[0.95] mb-6 lg:mb-8"
        style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
      >
        {step.title}
      </h3>

      <div className="font-mono text-sm text-slate mb-5 lg:mb-6">
        {step.subtitle}
      </div>

      <p className="text-lg lg:text-xl text-slate leading-relaxed max-w-xl font-light">
        {step.text}
      </p>
    </motion.div>
  );
}

/* ── Step visual (animated icon) ── */
function StepVisual({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0.8, 1, 1, 0.8]
  );
  const rotate = useTransform(
    progress,
    [start, end],
    [index % 2 === 0 ? -6 : 6, index % 2 === 0 ? 6 : -6]
  );

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, scale, rotate, willChange: "transform, opacity" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative">
        {/* Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-80 h-80 -m-20"
        >
          <div className="absolute inset-0 rounded-full border border-teal/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-teal shadow-lg shadow-teal/50" />
        </motion.div>
        <div className="absolute inset-0 w-64 h-64 -m-12 rounded-full border border-forest/10" />

        {/* Icon disk */}
        <div className="relative w-40 h-40 rounded-full bg-forest flex items-center justify-center shadow-2xl shadow-forest/30">
          <Icon size={60} className="text-mint" strokeWidth={1.5} />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-teal text-forest text-[0.65rem] font-mono tracking-widest px-3 py-1 rounded-full">
            {step.num}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating indicator bottom mobile ── */
function StepIndicator({ progress }: { progress: MotionValue<number> }) {
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
