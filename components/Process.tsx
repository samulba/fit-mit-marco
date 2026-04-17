"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import {
  Phone,
  ClipboardCheck,
  Home,
  ArrowDown,
} from "lucide-react";

type Step = {
  icon: typeof Phone;
  num: string;
  keyword: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  text: string;
  visual: "phone" | "clipboard" | "home";
  duration: string;
  need: string;
};

const steps: Step[] = [
  {
    icon: Phone,
    num: "01",
    keyword: "Anruf",
    eyebrow: "Du greifst zum Hörer",
    title: "Ruf mich",
    titleAccent: "einfach an.",
    subtitle: "+49 172 6223371",
    text: "Ich bin persönlich erreichbar. Erzähl mir von dir, deinen Zielen, deinen Sorgen – ich höre zu, ohne Druck.",
    visual: "phone",
    duration: "~ 30 Min",
    need: "Telefon",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    keyword: "Analyse",
    eyebrow: "Wir lernen uns kennen",
    title: "Gemeinsame",
    titleAccent: "Bestandsaufnahme.",
    subtitle: "Kostenlos & unverbindlich",
    text: "Bei einem ersten Termin schauen wir, wo du stehst. Ohne Leistungsdruck. Ohne Fachjargon. Ehrlich und auf Augenhöhe.",
    visual: "clipboard",
    duration: "~ 45 Min",
    need: "Zeit für dich",
  },
  {
    icon: Home,
    num: "03",
    keyword: "Training",
    eyebrow: "Wir starten wirklich",
    title: "Bei dir",
    titleAccent: "zuhause.",
    subtitle: "Equipment kommt mit",
    text: "Ich bringe alles mit, was wir brauchen. Du brauchst nur bequeme Kleidung. In deinen vier Wänden, in deinem Tempo.",
    visual: "home",
    duration: "60 Min / Einheit",
    need: "Bequeme Kleidung",
  },
];

export function Process() {
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
    <section id="process" className="bg-forest text-cream relative">
      {/* Intro on forest */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-10 -right-20 w-[400px] h-[400px] rounded-full bg-teal/15 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-4">
              Der Weg
            </div>
            <h2
              className="font-display font-bold leading-[1]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Drei Schritte.
              <br />
              <span className="italic text-teal">Ein neuer Anfang.</span>
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 text-mint text-sm">
              <span className="font-mono text-xs tracking-widest uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={14} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic stage */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 130}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-forest">
          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
            }}
          />

          <ParallaxGrid progress={smoothProgress} />
          <GiantWord progress={smoothProgress} />
          <ShiftingGlow progress={smoothProgress} />
          <CinematicRail progress={smoothProgress} />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left: Animated visual */}
              <div className="hidden lg:block lg:col-span-5 relative aspect-square max-h-[70vh]">
                {steps.map((step, i) => (
                  <VisualScene
                    key={i}
                    step={step}
                    index={i}
                    total={steps.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>

              {/* Right: Text */}
              <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[500px]">
                {steps.map((step, i) => (
                  <TextStage
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

          <MobileTicker progress={smoothProgress} />
        </div>
      </div>
    </section>
  );
}

/* ─────────── Layer: Parallax Grid ─────────── */
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

/* ─────────── Layer: Giant Morphing Word ─────────── */
function GiantWord({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {steps.map((step, i) => {
        const segment = 1 / steps.length;
        const start = i * segment;
        const end = start + segment;
        const isFirst = i === 0;
        const isLast = i === steps.length - 1;

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
            <span style={{ fontSize: "clamp(16rem, 32vw, 32rem)" }}>
              {step.keyword}
            </span>
          </motion.span>
        );
      })}
    </div>
  );
}

/* ─────────── Layer: Shifting Glow ─────────── */
function ShiftingGlow({ progress }: { progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 0.5, 1], ["25%", "65%", "35%"]);
  const y = useTransform(progress, [0, 0.5, 1], ["25%", "65%", "40%"]);
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
      className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

/* ─────────── Layer: Progress Rail (right) ─────────── */
function CinematicRail({ progress }: { progress: MotionValue<number> }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  const current = useTransform(progress, (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    return String(idx + 1).padStart(2, "0");
  });

  return (
    <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
      <div className="font-mono text-[0.65rem] text-white/40 tracking-widest uppercase">
        Schritt
      </div>
      <div className="relative w-px h-[40vh] bg-white/10">
        <motion.div
          style={{ height, willChange: "height" }}
          className="absolute inset-x-0 top-0 bg-teal"
        />
        {steps.map((_, i) => {
          const pos = ((i + 0.5) / steps.length) * 100;
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
        <span className="text-white/40">
          {String(steps.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ─────────── Stage: Visual Scene per Step ─────────── */
function VisualScene({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
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

  return (
    <motion.div
      style={{ opacity, scale, willChange: "transform, opacity" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {step.visual === "phone" && <PhoneScene />}
      {step.visual === "clipboard" && <ClipboardScene />}
      {step.visual === "home" && <TrainingScene />}
    </motion.div>
  );
}

/* ── Scene: Phone (connecting) ── */
function PhoneScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2.2, 2.2], opacity: [0.6, 0, 0] }}
          transition={{
            duration: 2.4,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute w-40 h-40 rounded-full border border-mint"
        />
      ))}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-teal/25"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal" />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -12, 12, -10, 10, 0] }}
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
      {[-1, 0, 1].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
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

/* ── Scene: Clipboard with writing lines ── */
function ClipboardScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-mint/20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mint" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-56 h-64 rounded-[1.5rem] bg-cream text-forest shadow-2xl shadow-teal/20 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-24 h-6 bg-forest rounded-t-lg rounded-b-md flex items-center justify-center">
          <div className="w-10 h-2 bg-teal rounded-full" />
        </div>
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
              style={{ originX: 0, width: `${w * 100}%` }}
              className="h-2 rounded-full bg-forest/20"
            />
          ))}
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
      </motion.div>
    </div>
  );
}

/* ── Scene: Training at home — House + exercising figure + breathing glow ── */
function TrainingScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Rotating outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-teal/20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal" />
      </motion.div>

      {/* Breathing aura around the house */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 rounded-full bg-teal/15 blur-2xl"
      />

      {/* House with figure inside */}
      <div className="relative">
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          fill="none"
          className="drop-shadow-2xl"
        >
          {/* Roof */}
          <path
            d="M 40 120 L 130 40 L 220 120 L 200 130 L 130 75 L 60 130 Z"
            fill="#55EFC4"
          />
          {/* Chimney */}
          <rect x="168" y="62" width="18" height="36" fill="#00B894" />
          <rect x="164" y="58" width="26" height="8" fill="#55EFC4" />
          {/* House body */}
          <rect
            x="55"
            y="125"
            width="150"
            height="130"
            rx="6"
            fill="#F8F5F0"
          />
          {/* Door */}
          <rect x="70" y="195" width="34" height="60" rx="2" fill="#1A3C34" />
          <circle cx="98" cy="227" r="1.5" fill="#55EFC4" />
          {/* Left window */}
          <rect x="70" y="140" width="34" height="34" rx="2" fill="#1A3C34" />
          <line
            x1="87"
            y1="140"
            x2="87"
            y2="174"
            stroke="#55EFC4"
            strokeWidth="1"
          />
          <line
            x1="70"
            y1="157"
            x2="104"
            y2="157"
            stroke="#55EFC4"
            strokeWidth="1"
          />
          {/* Right window — big, figure visible inside */}
          <rect
            x="118"
            y="140"
            width="78"
            height="45"
            rx="2"
            fill="#1A3C34"
          />
          <line
            x1="157"
            y1="140"
            x2="157"
            y2="185"
            stroke="#55EFC4"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <line
            x1="118"
            y1="162"
            x2="196"
            y2="162"
            stroke="#55EFC4"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>

        {/* Exercising figure inside the big window (absolute positioned) */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: "118px",
            top: "140px",
            width: "78px",
            height: "45px",
          }}
        >
          <motion.svg
            animate={{ y: [0, -3, 0, -3, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewBox="0 0 60 50"
            className="absolute inset-0 w-full h-full"
          >
            {/* head */}
            <circle cx="30" cy="12" r="4" fill="#55EFC4" />
            {/* body */}
            <motion.rect
              x="27"
              y="16"
              width="6"
              height="16"
              rx="2"
              fill="#55EFC4"
              animate={{ scaleY: [1, 0.92, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ originY: 0 }}
            />
            {/* arms going up & down (dumbbell press) */}
            <motion.g
              animate={{ rotate: [-10, 40, -10] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ originX: "30px", originY: "18px" }}
            >
              <rect x="15" y="17" width="15" height="2.5" rx="1" fill="#55EFC4" />
              <rect x="30" y="17" width="15" height="2.5" rx="1" fill="#55EFC4" />
              <rect x="10" y="14" width="5" height="8" rx="1" fill="#00B894" />
              <rect x="45" y="14" width="5" height="8" rx="1" fill="#00B894" />
            </motion.g>
            {/* legs */}
            <rect x="27" y="32" width="2.5" height="14" rx="1" fill="#55EFC4" />
            <rect x="30.5" y="32" width="2.5" height="14" rx="1" fill="#55EFC4" />
          </motion.svg>
        </div>

        {/* Progress badge popping above house */}
        <motion.div
          animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 -right-4 bg-teal text-forest px-3 py-1.5 rounded-full font-mono text-[0.6rem] tracking-widest uppercase shadow-lg shadow-teal/30"
        >
          Let&apos;s go
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────── Stage: Text Reveal ─────────── */
function TextStage({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
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

  const local = useTransform(progress, [start, end], [0, 1]);
  const wordOpacity = useTransform(local, [0, 0.25], [0, 1]);
  const wordOpacity2 = useTransform(local, [0.1, 0.4], [0, 1]);
  const wordY = useTransform(local, [0, 0.25], [30, 0]);
  const wordY2 = useTransform(local, [0.1, 0.4], [30, 0]);
  const textOpacity = useTransform(local, [0.3, 0.55], [0, 1]);
  const textY = useTransform(local, [0.3, 0.55], [20, 0]);
  const statsOpacity = useTransform(local, [0.5, 0.75], [0, 1]);
  const statsY = useTransform(local, [0.5, 0.75], [20, 0]);
  const eyebrowOpacity = useTransform(local, [0, 0.15], [0, 1]);
  const eyebrowY = useTransform(local, [0, 0.15], [20, 0]);

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, willChange: "opacity" }}
      className="absolute inset-x-0"
    >
      {/* Eyebrow */}
      <motion.div
        style={{ opacity: eyebrowOpacity, y: eyebrowY }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/30 text-mint flex items-center justify-center">
          <Icon size={18} />
        </div>
        <div>
          <div className="font-mono text-[0.65rem] text-mint tracking-[0.25em] uppercase font-semibold">
            Schritt {step.num} · {step.keyword}
          </div>
          <div className="font-mono text-xs text-white/40 mt-0.5">
            {step.eyebrow}
          </div>
        </div>
      </motion.div>

      {/* Headline */}
      <h3
        className="font-display font-bold leading-[0.95] mb-6 lg:mb-8"
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

      {/* Subtitle in mono */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="font-mono text-sm text-mint mb-5"
      >
        {step.subtitle}
      </motion.div>

      {/* Body */}
      <motion.p
        style={{ opacity: textOpacity, y: textY }}
        className="text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl font-light"
      >
        {step.text}
      </motion.p>

      {/* Footer stats */}
      <motion.div
        style={{ opacity: statsOpacity, y: statsY }}
        className="mt-10 flex items-center gap-6 pt-6 border-t border-white/10"
      >
        <div>
          <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">
            Dauer
          </div>
          <div className="font-mono text-sm text-mint">{step.duration}</div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div>
          <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">
            Du brauchst
          </div>
          <div className="font-mono text-sm text-mint">{step.need}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── Mobile Bottom Ticker ─────────── */
function MobileTicker({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
      {steps.map((_, i) => {
        const segment = 1 / steps.length;
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
