"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Bist du zertifiziert und versichert?",
    a: "Ja, ich bin zertifizierter Personal Trainer mit Zusatzqualifikationen im Bereich Senioren-Fitness und Reha-Sport. Selbstverständlich bin ich vollständig haftpflichtversichert.",
  },
  {
    q: "Ist das Erstgespräch wirklich kostenlos?",
    a: "Ja, das Erstgespräch ist komplett kostenlos und unverbindlich. Wir lernen uns kennen, besprechen deine Ziele und ich zeige dir, wie wir zusammen arbeiten können.",
  },
  {
    q: "Wie läuft das Training bei mir zuhause ab?",
    a: "Ich komme mit allem nötigen Equipment direkt zu dir. Du brauchst nur bequeme Kleidung und etwa 60 Minuten Zeit. Wir trainieren in deinem Tempo.",
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Du kannst per Überweisung, PayPal oder Bar bezahlen. Die Abrechnung erfolgt monatlich oder als Paketpreis – ganz wie es dir lieber ist.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            FAQ
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[0.95] mb-4 sm:mb-5">
            Deine <span className="italic text-teal">Fragen</span>, beantwortet
          </h2>
          <p className="text-base sm:text-lg text-slate leading-relaxed max-w-xl mx-auto">
            Antworten auf die häufigsten Fragen meiner Kunden. Falls du weitere
            Fragen hast, melde dich gerne bei mir.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? "bg-forest text-white border-forest"
                    : "bg-white border-sand hover:border-teal/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-bold text-base sm:text-lg lg:text-xl leading-snug ${
                      isOpen ? "text-white" : "text-forest"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? "bg-teal rotate-45" : "bg-cream text-teal"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8 text-white/80 leading-relaxed text-base sm:text-lg">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
