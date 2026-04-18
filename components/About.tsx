"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Package, Heart, ArrowUpRight } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "Erfahrung aus dem Leistungssport",
    text: "4 Jahre Hochleistungssport-Betreuung und mehrere Jahre Personal-Training-Erfahrung. Training auf Basis fundierter Praxis, zugeschnitten auf deinen Körper.",
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
      className="py-24 sm:py-28 lg:py-40 bg-cream relative overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y: numberY }}
        className="absolute -right-10 sm:-right-20 top-10 font-display text-[12rem] sm:text-[18rem] lg:text-[26rem] leading-none font-bold text-forest/[0.035] pointer-events-none select-none"
      >
        200+
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid xl:grid-cols-12 gap-10 xl:gap-20 items-center relative">
        {/* Left: Photo */}
        <div className="xl:col-span-5 max-w-xl w-full mx-auto xl:mx-0">
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-forest">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-[-5%]"
            >
              <Image
                src="/marco.jpg"
                alt="Marco Degel – Personal Trainer für Senioren in München und Umgebung"
                fill
                sizes="(max-width: 1280px) 90vw, 40vw"
                className="object-cover"
                priority={false}
              />
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-mid to-teal/30 -z-10" />
            </motion.div>

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-sm text-forest text-[0.65rem] tracking-[0.25em] uppercase font-semibold">
              Marco Degel
            </div>
            <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-teal text-forest text-[0.65rem] tracking-[0.15em] font-semibold">
              München
            </div>

            {/* Quote at bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-cream/95 backdrop-blur-md rounded-2xl p-5 lg:p-6">
                <div className="font-display italic text-lg lg:text-xl text-forest leading-tight">
                  &ldquo;Wer rastet, der rostet.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            <div className="bg-forest text-cream rounded-2xl p-5 lg:p-6">
              <div className="font-display text-3xl lg:text-4xl font-bold text-mint leading-none">
                200+
              </div>
              <div className="text-[0.65rem] text-white/60 mt-2 tracking-[0.2em] uppercase">
                Trainings&shy;stunden
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 lg:p-6 border border-sand">
              <div className="font-display text-3xl lg:text-4xl font-bold text-forest leading-none">
                4 J.
              </div>
              <div className="text-[0.65rem] text-slate mt-2 tracking-[0.2em] uppercase">
                Hochleistungs&shy;sport
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
              Über mich
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-forest leading-[0.95] mb-6 lg:mb-8">
              Hi, ich bin <span className="italic text-teal">Marco.</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-forest/80 font-light leading-relaxed mb-6 lg:mb-8 max-w-2xl">
              Ich begleite Menschen dabei, auch im Alter{" "}
              <span className="text-forest font-normal">aktiv, mobil und selbstständig</span>{" "}
              zu bleiben. Durch meine Erfahrung im Fitness- und
              Gesundheitsbereich habe ich gesehen, wie wichtig gezieltes
              Training gerade für ältere Menschen ist. Deshalb habe ich mich
              mit{" "}
              <span className="text-teal font-normal">&bdquo;Fit mit Marco&ldquo;</span>{" "}
              auf persönliches, alltagstaugliches Training für Senioren in
              München und Umgebung spezialisiert.
            </p>
          </motion.div>

          <div className="space-y-2 lg:space-y-3 mt-8 lg:mt-12">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-4 sm:gap-5 items-start p-4 sm:p-5 lg:p-6 rounded-2xl hover:bg-white transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-forest text-mint flex items-center justify-center group-hover:bg-teal group-hover:text-forest transition-colors">
                  <usp.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-forest text-lg sm:text-xl mb-1">
                    {usp.title}
                  </div>
                  <div className="text-slate leading-relaxed text-sm sm:text-base">
                    {usp.text}
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-forest/20 group-hover:text-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mt-1 hidden sm:block flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
