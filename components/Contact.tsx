"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section id="kontakt" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Kontakt
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[0.95] mb-4 sm:mb-5">
            Lass uns <span className="italic text-teal">kennenlernen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Ruf mich einfach an oder schreib mir eine Nachricht – ich melde mich
            innerhalb von 24 Stunden bei dir zurück.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-forest text-white rounded-3xl p-7 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal/15 blur-3xl" />
            <div className="absolute top-10 -left-10 w-48 h-48 rounded-full bg-mint/10 blur-3xl" />

            <div className="relative">
              <h3 className="font-display text-2xl font-bold mb-6 sm:mb-8">
                Sprich mit Marco
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <a
                  href="tel:+491762346578"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/15 group-hover:bg-teal text-mint group-hover:text-forest flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Telefon
                    </div>
                    <div className="font-mono text-sm sm:text-base group-hover:text-mint transition-colors">
                      +49 176 2346578
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:marco@fit-mit-marco.de"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/15 group-hover:bg-teal text-mint group-hover:text-forest flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      E-Mail
                    </div>
                    <div className="font-mono text-sm sm:text-base group-hover:text-mint transition-colors break-all">
                      marco@fit-mit-marco.de
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 text-mint flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Einsatzgebiet
                    </div>
                    <div className="text-sm sm:text-base">München & Umgebung</div>
                    <div className="text-xs sm:text-sm text-white/60 mt-0.5">
                      Hausbesuche im Umkreis von 30 km
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 text-mint flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                      Erreichbarkeit
                    </div>
                    <div className="text-sm sm:text-base">
                      Mo – Sa, 8:00 – 20:00 Uhr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sent");
            }}
            className="lg:col-span-3 bg-cream rounded-3xl p-7 sm:p-8 lg:p-10 border border-sand"
          >
            <h3 className="font-display text-2xl font-bold text-forest mb-5 sm:mb-6">
              Kostenloses Erstgespräch anfragen
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <Field label="Vorname" name="firstName" required />
              <Field label="Nachname" name="lastName" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <Field label="Telefon" name="phone" type="tel" required />
              <Field label="E-Mail" name="email" type="email" required />
            </div>

            <div className="mb-5">
              <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                Worum geht&apos;s?
              </label>
              <textarea
                rows={4}
                placeholder="Erzähl mir kurz von deinen Zielen oder Fragen…"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-none text-charcoal text-base"
              />
            </div>

            <p className="text-xs text-slate mb-5 sm:mb-6 leading-relaxed">
              Mit dem Absenden stimmst du zu, dass deine Angaben zur Bearbeitung
              deiner Anfrage verwendet werden. Mehr in der{" "}
              <a href="#" className="text-teal underline">
                Datenschutzerklärung
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto bg-forest hover:bg-teal text-white hover:text-forest px-7 sm:px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-teal/30"
            >
              {status === "sent"
                ? "✓ Danke! Ich melde mich."
                : "Anfrage senden"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-teal mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl border border-sand bg-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all text-charcoal text-base"
      />
    </div>
  );
}
