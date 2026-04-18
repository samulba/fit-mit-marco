"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Ist Personal Training im Alter überhaupt noch sinnvoll?",
    a: "Ja, gerade im Alter ist gezieltes Training wichtig, um Kraft, Gleichgewicht, Mobilität und Selbstständigkeit zu erhalten. Mit regelmäßigen Einheiten wirst du schon nach wenigen Wochen einen spürbaren Unterschied merken.",
  },
  {
    q: "Muss ich fit sein oder Vorerfahrung haben?",
    a: "Nein. Das Training wird individuell an deinen aktuellen Gesundheitszustand und dein persönliches Niveau angepasst. Wir starten genau dort, wo du heute stehst.",
  },
  {
    q: "Findet das Training bei mir zu Hause statt?",
    a: "Ja, das Training kann bequem bei dir zu Hause stattfinden – oder nach Absprache an einem anderen geeigneten Ort. Ich bringe alles Nötige mit.",
  },
  {
    q: "Was passiert beim ersten Termin?",
    a: "Im kostenlosen Erstgespräch lernen wir uns kennen und besprechen deine Ziele, Beschwerden und deinen Alltag. Darauf aufbauend können wir dann das Training sicher und passend gestalten.",
  },
  {
    q: "Wie oft sollte ich trainieren?",
    a: "Für viele Kunden sind 1 bis 2 Einheiten pro Woche ein guter Start, ergänzt durch einfache Übungen für den Alltag zwischendurch.",
  },
  {
    q: "Kann ich auch gemeinsam mit meinem Partner trainieren?",
    a: "Ja, Partnertraining ist möglich und kann zusätzlich motivieren. Für zwei Personen entsteht ein kleiner Aufpreis von 30 € pro Einheit.",
  },
];

const concerns = [
  { text: "\u201EIch bin zu alt dafür.\u201C" },
  { text: "\u201EIch bin zu unsportlich.\u201C" },
  { text: "\u201EIch habe Angst, mich zu verletzen.\u201C" },
  { text: "\u201EDas bringt in meinem Alter nichts mehr.\u201C" },
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
            Antworten auf die häufigsten Fragen meiner Kunden. Falls du eine
            Frage hast die hier nicht steht, melde dich gerne direkt bei mir.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3 mb-14">
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

        {/* Bedenken-Block mit klarer Botschaft */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-forest text-cream rounded-3xl p-8 sm:p-10 lg:p-14 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal/20 blur-[100px] pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/10 border border-mint/30 text-mint text-[0.65rem] tracking-[0.25em] uppercase font-semibold mb-6">
              <Sparkles size={12} />
              Häufige Bedenken
            </div>
            <h3
              className="font-display font-bold leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Kommt dir bekannt vor?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {concerns.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-forest-mid border border-white/10 rounded-2xl px-5 py-4 font-display italic text-white/70 text-base sm:text-lg"
                >
                  {c.text}
                </motion.div>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Training im Alter ist nicht dazu da, Höchstleistungen zu
                bringen. Es geht um{" "}
                <span className="text-mint">Sicherheit</span>,{" "}
                <span className="text-mint">Kraft</span> und{" "}
                <span className="text-mint">Lebensqualität</span> im Alltag.
              </p>
              <div
                className="mt-6 font-display italic text-teal"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                Wer rastet, der rostet.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
