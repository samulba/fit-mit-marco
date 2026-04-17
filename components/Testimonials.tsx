"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Marco hat mir geholfen, nach meiner Hüft-OP wieder sicher auf den Beinen zu stehen. Seine Geduld und sein Fachwissen sind außergewöhnlich.",
    name: "Helga M.",
    age: 72,
    source: "Google Bewertung",
  },
  {
    text: "Seit ich mit Marco trainiere, fühle ich mich zehn Jahre jünger. Die Rückenschmerzen sind fast weg und ich bin viel beweglicher geworden.",
    name: "Werner K.",
    age: 68,
    source: "Google Bewertung",
  },
  {
    text: "Marco ist pünktlich, professionell und macht das Training zu einem echten Highlight meiner Woche. Kann ich nur weiterempfehlen!",
    name: "Ingrid S.",
    age: 75,
    source: "Empfehlung",
  },
  {
    text: "Ich hätte nie gedacht, dass ich mit 70 noch so fit werden kann. Marco zeigt einem, was alles möglich ist – mit viel Humor und Einfühlungsvermögen.",
    name: "Hans-Peter W.",
    age: 70,
    source: "Google Bewertung",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      id="stimmen"
      className="py-24 sm:py-28 lg:py-40 bg-cream relative overflow-hidden"
    >
      <motion.div
        style={{ y: quoteY }}
        className="absolute -top-10 sm:-top-20 left-1/2 -translate-x-1/2 font-display italic text-[18rem] sm:text-[24rem] lg:text-[30rem] leading-none text-forest/[0.04] pointer-events-none select-none"
      >
        &ldquo;
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Kundenstimmen
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-forest leading-[0.95]">
            Echte Menschen.
            <br />
            <span className="text-forest/30 italic">Echte Ergebnisse.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((t, i) => {
            const layouts = [
              "md:col-span-4",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-4",
            ];
            const isFeatured = i === 0 || i === 3;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`${layouts[i]} relative group rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all ${
                  isFeatured
                    ? "bg-forest text-cream"
                    : "bg-white border border-sand"
                }`}
              >
                <Quote
                  className={`absolute top-6 right-6 sm:top-8 sm:right-8 ${
                    isFeatured ? "text-mint/30" : "text-sage/40"
                  }`}
                  size={36}
                />

                <div className="flex gap-1 mb-4 sm:mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p
                  className={`font-display italic leading-relaxed mb-6 sm:mb-8 ${
                    isFeatured
                      ? "text-xl sm:text-2xl lg:text-3xl text-cream"
                      : "text-base sm:text-lg lg:text-xl text-forest"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <div
                  className={`flex items-center gap-3 pt-4 sm:pt-5 border-t ${
                    isFeatured ? "border-white/10" : "border-sand/80"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                      isFeatured
                        ? "bg-mint text-forest"
                        : "bg-gradient-to-br from-sage to-teal/40 text-forest"
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        isFeatured ? "text-white" : "text-forest"
                      }`}
                    >
                      {t.name}, {t.age}
                    </div>
                    <div
                      className={`text-xs ${
                        isFeatured ? "text-white/50" : "text-slate"
                      }`}
                    >
                      {t.source}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
