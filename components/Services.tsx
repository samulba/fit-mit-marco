"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  Footprints,
  Flower2,
  HeartPulse,
  Stethoscope,
  Apple,
  ArrowUpRight,
} from "lucide-react";
import { ServiceModal } from "./ServiceModal";
import { getLeistungBySlug, type Leistung } from "@/lib/leistungen";

const services = [
  {
    icon: Dumbbell,
    num: "01",
    slug: "kraft-muskelaufbau",
    title: "Kraft & Muskelaufbau",
    text: "Gezieltes Training zum Erhalt und Aufbau deiner Muskulatur – für mehr Stabilität im Alltag.",
    tag: "Fundament",
  },
  {
    icon: Footprints,
    num: "02",
    slug: "balance-sturzpraevention",
    title: "Balance & Sturzprävention",
    text: "Übungen die deine Balance stärken und das Sturzrisiko deutlich senken.",
    tag: "Sicherheit",
  },
  {
    icon: Flower2,
    num: "03",
    slug: "beweglichkeit-mobilitaet",
    title: "Beweglichkeit & Mobilität",
    text: "Sanfte Dehnungen und Mobilisierung für mehr Flexibilität und weniger Schmerzen.",
    tag: "Freiheit",
  },
  {
    icon: HeartPulse,
    num: "04",
    slug: "herz-kreislauf",
    title: "Herz-Kreislauf",
    text: "Moderates Ausdauertraining, das dein Herz stärkt und deine Energie steigert.",
    tag: "Vitalität",
  },
  {
    icon: Stethoscope,
    num: "05",
    slug: "reha-nachsorge",
    title: "Reha & Nachsorge",
    text: "Begleitendes Training nach Operationen oder Verletzungen – in Abstimmung mit deinem Arzt.",
    tag: "Heilung",
  },
  {
    icon: Apple,
    num: "06",
    slug: "ernaehrungsberatung",
    title: "Ernährungsberatung",
    text: "Praktische Tipps für eine ausgewogene Ernährung, die dein Training optimal unterstützt.",
    tag: "Balance",
  },
];

export function Services() {
  const [activeLeistung, setActiveLeistung] = useState<Leistung | null>(null);

  const openService = (slug: string) => {
    const l = getLeistungBySlug(slug);
    if (l) setActiveLeistung(l);
  };

  return (
    <section id="leistungen" className="bg-forest text-cream relative">
      {/* 100vh Intro */}
      <div className="min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-teal/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-mint/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-5">
              Leistungen
            </div>
            <h2
              className="font-display font-bold leading-[0.95] mb-8"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Sechs Wege.
              <br />
              <span className="text-white/30 italic">Ein Ziel.</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed font-light">
              Jedes Training ist individuell auf dich zugeschnitten. Oft
              kombinieren wir mehrere Bereiche – abhängig davon, was dein
              Körper gerade braucht.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 text-mint text-xs font-mono tracking-widest uppercase">
              <span className="h-px w-8 bg-mint" />
              Scroll um zu entdecken
            </div>
          </motion.div>
        </div>

        {/* Number badge right */}
        <div className="hidden lg:block absolute bottom-10 right-10">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center font-mono text-xs text-white/40"
              >
                0{n}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop XL: horizontal scroll */}
      <HorizontalScroll onOpen={openService} />

      {/* Mobile/Tablet/Laptop: stacked grid */}
      <div className="xl:hidden pb-20 px-5 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <button
                type="button"
                onClick={() => openService(s.slug)}
                className="group relative bg-forest-mid border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-teal/40 transition-colors block h-full w-full text-left"
              >
                <div className="absolute top-4 right-5 font-display text-5xl leading-none text-white/[0.05] group-hover:text-teal/20 transition-colors">
                  {s.num}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-cream/5 border border-white/10 flex items-center justify-center text-mint">
                      <s.icon size={19} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-mint text-[0.6rem] tracking-[0.2em] uppercase font-semibold">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm mb-4">
                    {s.text}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-mint text-xs font-semibold">
                    Details ansehen
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
          <motion.a
            href="/erstgespraech"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group sm:col-span-2 bg-teal text-forest rounded-3xl p-8 flex items-center justify-between"
          >
            <div>
              <div className="font-display text-2xl font-bold leading-tight">
                Bereit? <span className="italic text-forest/60">Ich auch.</span>
              </div>
              <div className="text-xs mt-1 font-mono">Erstgespräch buchen</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-forest text-teal flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={20} />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        leistung={activeLeistung}
        onClose={() => setActiveLeistung(null)}
      />
    </section>
  );
}

function HorizontalScroll({ onOpen }: { onOpen: (slug: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <div ref={ref} className="hidden xl:block relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 xl:gap-8 pl-6 lg:pl-10 pr-10"
        >
          {services.map((s, i) => (
            <ServiceCard
              key={s.num}
              service={s}
              index={i}
              onOpen={onOpen}
            />
          ))}
          <motion.a
            href="/erstgespraech"
            whileHover={{ scale: 1.02 }}
            className="group flex-shrink-0 w-[60vw] lg:w-[35vw] h-[60vh] rounded-3xl bg-teal text-forest p-10 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-forest/60 mb-4">
                07 · nächster Schritt
              </div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Bereit?
                <br />
                <span className="italic text-forest/60">Ich auch.</span>
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">
                Erstgespräch buchen
              </span>
              <div className="w-14 h-14 rounded-full bg-forest text-teal flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 text-xs tracking-[0.25em] uppercase text-white/30">
        ← scroll →
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: (typeof services)[number];
  index: number;
  onOpen: (slug: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex-shrink-0 w-[60vw] lg:w-[35vw] h-[60vh]"
    >
      <button
        type="button"
        onClick={() => onOpen(service.slug)}
        className="group block h-full w-full text-left rounded-3xl bg-forest-mid border border-white/10 p-10 flex flex-col justify-between relative overflow-hidden hover:border-teal/40 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-teal/0 to-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-8 right-10 font-display text-[8rem] leading-none text-white/[0.04] group-hover:text-teal/10 transition-colors">
          {service.num}
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-cream/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-mint">
              <service.icon size={24} />
            </div>
            <span className="px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-mint text-[0.65rem] tracking-[0.25em] uppercase font-semibold">
              {service.tag}
            </span>
          </div>
        </div>
        <div className="relative">
          <h3 className="font-display text-4xl lg:text-5xl font-bold leading-[1.05] mb-5">
            {service.title}
          </h3>
          <p className="text-white/60 leading-relaxed text-base lg:text-lg max-w-sm mb-8">
            {service.text}
          </p>
          <div className="flex items-center gap-2 text-mint text-sm font-semibold">
            Details ansehen
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </button>
    </motion.div>
  );
}
