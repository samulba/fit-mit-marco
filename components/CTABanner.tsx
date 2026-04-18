"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="deferred-section py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-forest text-white p-8 sm:p-12 lg:p-20"
        >
          <div className="absolute -top-32 -right-32 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-teal/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-mint/10 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
            <div className="max-w-2xl">
              <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-3 lg:mb-4">
                Dein nächster Schritt
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.05]">
                Bereit für dein neues{" "}
                <span className="italic text-teal">Lebensgefühl?</span>
              </h2>
              <p className="mt-4 lg:mt-6 text-base lg:text-lg text-white/70 leading-relaxed">
                Ein Anruf genügt – das Erstgespräch ist kostenlos und
                unverbindlich. Ich freue mich darauf, dich kennenzulernen.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 lg:items-end w-full lg:w-auto">
              <a
                href="/erstgespraech"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-teal hover:bg-mint text-forest px-6 sm:px-8 py-4 lg:py-5 rounded-full font-semibold text-base lg:text-lg transition-all duration-400 ease-smooth hover:shadow-teal-glow whitespace-nowrap"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-smooth"
                />
                <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-400 group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+491726223371"
                className="text-white/60 hover:text-white transition-colors text-center lg:text-right font-mono text-xs lg:text-sm"
              >
                oder direkt anrufen: +49 172 6223371
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
