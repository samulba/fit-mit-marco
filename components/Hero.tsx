"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // ─── Mouse-tracking for interactive spotlight + parallax ───
  // Raw pointer position relative to the section
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  // Smoothed pointer for buttery motion
  const smoothX = useSpring(pointerX, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });

  // Spotlight radial gradient that follows the cursor
  const spotlightX = useTransform(smoothX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(smoothY, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(85, 239, 196, 0.18), transparent 70%)`;

  // Subtle parallax offsets for the glow orbs (move opposite to cursor)
  const orbAx = useTransform(smoothX, [0, 1], [30, -30]);
  const orbAyFromPointer = useTransform(smoothY, [0, 1], [30, -30]);
  const orbAy = useTransform(
    [glowY1, orbAyFromPointer] as any,
    ([scroll, mouse]: number[]) => scroll + mouse
  );
  const orbBx = useTransform(smoothX, [0, 1], [-40, 40]);
  const orbByFromPointer = useTransform(smoothY, [0, 1], [-30, 30]);
  const orbBy = useTransform(
    [glowY2, orbByFromPointer] as any,
    ([scroll, mouse]: number[]) => scroll + mouse
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Listen at window level and recompute the position relative to the hero's
    // bounding box. This way the fixed header (and any other overlay) does not
    // trigger a false mouseleave on the hero itself. The spotlight keeps
    // tracking smoothly as long as the cursor is visually within hero bounds.
    let rafId = 0;
    let lastEvent: MouseEvent | null = null;

    const update = () => {
      rafId = 0;
      if (!lastEvent || !el) return;
      const rect = el.getBoundingClientRect();
      const x = (lastEvent.clientX - rect.left) / rect.width;
      const y = (lastEvent.clientY - rect.top) / rect.height;
      // Only update while the pointer is visually inside the hero viewport
      if (
        lastEvent.clientX >= rect.left &&
        lastEvent.clientX <= rect.right &&
        lastEvent.clientY >= rect.top &&
        lastEvent.clientY <= rect.bottom
      ) {
        pointerX.set(Math.max(0, Math.min(1, x)));
        pointerY.set(Math.max(0, Math.min(1, y)));
      }
    };

    const onMove = (e: MouseEvent) => {
      lastEvent = e;
      // Throttle to the next frame so spring smoothing has clean samples
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const onPageLeave = (e: MouseEvent) => {
      // Only reset when the cursor truly leaves the document (e.g. leaving
      // the window), not when it hops onto the fixed nav overlay.
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onPageLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onPageLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pointerX, pointerY]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-forest text-cream"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Mouse-tracking spotlight */}
      <motion.div
        style={{
          background: spotlight,
          willChange: "background",
        }}
        className="absolute inset-0 pointer-events-none z-[2] hidden md:block"
        aria-hidden="true"
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

      {/* Glow orbs (with scroll + mouse parallax) */}
      <motion.div
        style={{ x: orbAx, y: orbAy, willChange: "transform" }}
        className="absolute -top-48 -right-48 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-teal/25 blur-[90px]"
      />
      <motion.div
        style={{ x: orbBx, y: orbBy, willChange: "transform" }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-mint/15 blur-[100px]"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-14 xl:pt-32 xl:pb-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left: Text */}
          <div className="xl:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-mint/25 bg-mint/[0.04] backdrop-blur-sm mb-6 lg:mb-10 shadow-soft-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
              </span>
              <span className="text-[0.6rem] sm:text-[0.7rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-mint/90 font-medium">
                München · Hausbesuche im Umkreis 30 km
              </span>
            </motion.div>

            {/* Massive Headline */}
            <motion.h1
              style={{ y: headlineY }}
              className="font-display font-bold leading-[0.95] tracking-tight"
            >
              <SplitLine delay={0.3}>
                <span className="block text-[clamp(2.25rem,8vw,7rem)]">
                  Dein Körper
                </span>
              </SplitLine>
              <SplitLine delay={0.45}>
                <span className="block text-[clamp(2.25rem,8vw,7rem)] text-white/40 italic">
                  kann mehr
                </span>
              </SplitLine>
              <SplitLine delay={0.6}>
                <span className="block text-[clamp(2.25rem,8vw,7rem)]">
                  als du <span className="text-teal italic">denkst.</span>
                </span>
              </SplitLine>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-6 lg:mt-10 text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed font-light max-w-xl"
            >
              Ich helfe Menschen ab 60, ihre{" "}
              <strong className="text-mint font-normal">
                Stärke, Beweglichkeit und Lebensfreude
              </strong>{" "}
              zurückzugewinnen – individuell, sicher und bei dir zuhause.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <MagneticButton
                href="/erstgespraech"
                strength={14}
                className="group relative overflow-hidden inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-6 sm:pl-7 pr-2 py-2 rounded-full font-semibold transition-colors duration-400 hover:shadow-teal-glow w-fit"
              >
                {/* sheen overlay */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-smooth"
                />
                <span className="relative z-10 text-sm sm:text-base">
                  Kostenloses Erstgespräch
                </span>
                <span className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-forest text-teal group-hover:text-forest group-hover:bg-cream flex items-center justify-center transition-all duration-400">
                  <ArrowDown size={16} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-400" />
                </span>
              </MagneticButton>
              <a
                href="#about"
                className="group inline-flex items-center gap-3 text-white/70 hover:text-mint text-sm font-medium transition-colors duration-400"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-mint group-hover:bg-mint/10 flex items-center justify-center transition-all duration-400 group-hover:scale-105">
                  <Play size={12} className="fill-current ml-0.5" />
                </span>
                <span className="link-underline">So arbeite ich</span>
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mt-10 lg:mt-14 flex flex-wrap items-center gap-6 lg:gap-10 pt-6 border-t border-white/10"
            >
              <Stat value="200+" label="Trainings­stunden" />
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <Stat value="4 J." label="Hochleistungs­sport" />
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <Stat value="30 km" label="um München" />
            </motion.div>
          </div>

          {/* Right: Marco photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:block xl:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-forest-mid border border-white/10 shadow-2xl shadow-forest/30">
              {/* Photo with parallax */}
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0"
              >
                <Image
                  src="/marco.jpg"
                  alt="Marco Degel – Personal Trainer für Senioren in München"
                  fill
                  sizes="(max-width: 1280px) 0px, 40vw"
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent" />
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[110%] h-[110%] rounded-full border border-teal/10 absolute" />
                <div className="w-[85%] h-[85%] rounded-full border border-teal/10 absolute" />
              </div>

              {/* Top badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-forest/50 backdrop-blur-md border border-white/20 text-white text-[0.65rem] tracking-[0.2em] uppercase">
                Marco Degel
              </div>

              {/* Bottom quote card */}
              <div className="absolute bottom-5 left-5 right-5 bg-cream/95 backdrop-blur-md rounded-2xl p-5 text-forest">
                <div className="font-display italic text-lg leading-tight">
                  &ldquo;Dein Körper ist stärker,
                  <br /> als du glaubst.&rdquo;
                </div>
                <div className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase text-forest/50">
                  Personal Trainer · seit 2013
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-teal text-forest rounded-2xl px-5 py-4 shadow-xl rotate-[6deg]">
              <div className="font-display font-bold text-xl leading-none">
                12+
              </div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase mt-1">
                Jahre
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* Bottom fade — smooth handoff to next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-forest/80 pointer-events-none z-[2]"
      />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-xl text-mint leading-none">
        {value}
      </div>
      <div className="text-[0.6rem] text-white/40 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
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
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
