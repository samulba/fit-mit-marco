"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Package, Heart, ArrowUpRight } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "Erfahrung aus dem Leistungssport",
    text: "4 Jahre Hochleistungssport-Betreuung und über 8 Jahre Personal-Training-Erfahrung (seit 2018). Training auf Basis fundierter Praxis, zugeschnitten auf deinen Körper.",
  },
  {
    icon: Package,
    title: "Equipment inklusive",
    text: "Ich bringe alles mit, was wir brauchen – Bänder, Hanteln, Matte, Balance- und Koordinationstools. Du brauchst nur bequeme Kleidung.",
  },
  {
    icon: Heart,
    title: "Dein Tempo steht im Mittelpunkt",
    text: "Kein Druck, kein Stress – dein Wohlbefinden entscheidet. Wir trainieren so, wie es für dich heute passt.",
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const numberY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 sm:py-28 lg:py-40 bg-cream relative overflow-x-clip"
    >
      {/* Background number */}
      <motion.div
        style={{ y: numberY }}
        className="absolute -right-10 sm:-right-20 top-10 font-display text-[12rem] sm:text-[18rem] lg:text-[26rem] leading-none font-bold text-forest/[0.035] pointer-events-none select-none"
      >
        200+
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
        {/* ── TOP: 2-col intro — photo + heading/paragraphs ── */}
        <div className="grid xl:grid-cols-12 gap-10 xl:gap-16 items-center mb-16 lg:mb-24">
          {/* Left: Photo */}
          <div className="xl:col-span-5 max-w-lg w-full mx-auto xl:mx-0">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-forest">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-[-5%]"
              >
                <Image
                  src="/marco-about.jpg"
                  alt="Marco Degel – Personal Trainer für Senioren in München und Umgebung"
                  fill
                  sizes="(max-width: 1280px) 90vw, 40vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-mid to-teal/30 -z-10" />
              </motion.div>

              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />

              {/* Top badges */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-sm text-forest text-[0.78rem] tracking-[0.15em] uppercase font-semibold">
                Marco Degel
              </div>
              <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-teal text-forest text-[0.78rem] tracking-[0.15em] font-semibold">
                München
              </div>

              {/* Bottom quote */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-cream/95 backdrop-blur-md rounded-2xl p-5 lg:p-6">
                  <div className="font-display italic text-lg lg:text-xl text-forest leading-tight">
                    &ldquo;Wer rastet, der rostet.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heading + intro paragraphs */}
          <div className="xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
                Über mich
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-forest leading-[0.95] mb-6 lg:mb-8">
                Hi, ich bin <span className="italic text-teal">Marco.</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-forest/80 font-normal leading-relaxed mb-5 max-w-2xl">
                Durch meine Erfahrung im{" "}
                <span className="text-forest font-normal">Fitness- und Gesundheitsbereich</span>{" "}
                weiß ich, wie entscheidend gezieltes Training gerade im Alter
                ist — für Kraft, Beweglichkeit und Lebensqualität im Alltag.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-forest/80 font-normal leading-relaxed max-w-2xl">
                Bei{" "}
                <span className="text-teal font-normal">&bdquo;Fit mit Marco&ldquo;</span>{" "}
                trainieren wir in deiner{" "}
                <span className="text-forest font-normal">privaten Umgebung</span>
                {" "}— kein Gym-Stress, keine fremden Blicke, nur du, ich und
                genau das Training, das dir guttut.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── MIDDLE: Schnupperstunde CTA, full width, prominent ── */}
        <motion.a
          href="/erstgespraech"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden block mb-16 lg:mb-20 rounded-3xl bg-gradient-to-br from-teal/10 via-mint/5 to-cream border border-teal/25 hover:border-teal/60 hover:shadow-soft-lg transition-all duration-500 ease-smooth"
        >
          <div className="absolute top-0 right-0 w-60 h-60 lg:w-96 lg:h-96 rounded-full bg-teal/10 blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">
            <div className="flex-shrink-0 flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-teal text-forest flex items-center justify-center shadow-soft-md group-hover:rotate-[-8deg] transition-transform duration-400">
                <span className="font-display font-bold text-2xl lg:text-3xl">1.</span>
              </div>
              <div className="md:hidden">
                <span className="px-2.5 py-1 rounded-full bg-teal text-forest text-[0.78rem] font-bold tracking-[0.15em] uppercase">
                  kostenlos
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="hidden md:flex items-center gap-3 mb-2">
                <span className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-teal">
                  Das erste Mal ist auf mich
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal text-forest text-[0.78rem] font-bold tracking-[0.15em] uppercase">
                  kostenlos
                </span>
              </div>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-forest leading-tight mb-2 lg:mb-3">
                Schnupper-Trainingsstunde
              </div>
              <div className="text-forest/75 leading-relaxed text-base lg:text-lg max-w-2xl">
                Die erste Trainingsstunde ist gratis. Wir lernen uns kennen,
                schauen wie es dir geht und du spürst direkt, wie sich das
                Training anfühlt — ganz ohne Verpflichtung.
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 text-teal font-semibold text-sm lg:text-base md:flex-col md:items-end lg:flex-row lg:items-center">
              <span className="group-hover:-translate-x-0.5 transition-transform duration-400">
                Termin vereinbaren
              </span>
              <span className="w-12 h-12 rounded-full bg-teal group-hover:bg-forest text-forest group-hover:text-teal flex items-center justify-center transition-all duration-400 group-hover:rotate-45 shadow-soft">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </motion.a>

        {/* ── USPs: 3-col grid, full width ── */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col gap-4 p-6 lg:p-7 rounded-3xl bg-white border border-sand hover:border-teal/40 hover:shadow-soft-md transition-all duration-400 ease-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-forest text-mint flex items-center justify-center group-hover:bg-teal group-hover:text-forest transition-colors">
                <usp.icon size={20} />
              </div>
              <div>
                <div className="font-display font-bold text-forest text-xl mb-2">
                  {usp.title}
                </div>
                <div className="text-forest/75 leading-relaxed text-sm lg:text-base">
                  {usp.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats: horizontal row, full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-10 lg:pt-14 border-t border-forest/10"
        >
          <div className="bg-forest text-cream rounded-2xl p-5 lg:p-7">
            <div className="font-display text-3xl lg:text-5xl font-bold text-mint leading-none">
              200+
            </div>
            <div className="text-[0.75rem] sm:text-[0.78rem] text-white/85 mt-2 lg:mt-3 tracking-[0.2em] uppercase">
              Trainings&shy;stunden
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 lg:p-7 border border-sand">
            <div className="font-display text-3xl lg:text-5xl font-bold text-forest leading-none">
              seit 2018
            </div>
            <div className="text-[0.75rem] sm:text-[0.78rem] text-forest/75 mt-2 lg:mt-3 tracking-[0.2em] uppercase">
              Personal Trainer
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 lg:p-7 border border-sand">
            <div className="font-display text-3xl lg:text-5xl font-bold text-forest leading-none">
              4 J.
            </div>
            <div className="text-[0.75rem] sm:text-[0.78rem] text-forest/75 mt-2 lg:mt-3 tracking-[0.2em] uppercase">
              Hochleistungs&shy;sport
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
