"use client";

/**
 * Cookie-Banner — DSGVO-konform, marken-gestylt.
 *
 * Architektur:
 *  - Erste Besucher sehen den Banner (unten fixed). Zustand in localStorage ("fmm-consent").
 *  - Drei Optionen: "Alle akzeptieren", "Nur notwendige", "Einstellungen".
 *  - Einstellungen öffnen ein Modal mit 3 Kategorien: Notwendig (immer), Statistik, Marketing.
 *  - Consent wird in localStorage gespeichert, plus ein `window.dispatchEvent("consentchange")`
 *    Event wird geschickt, damit Analytics-Scripts (Google Analytics, etc.) später reagieren können.
 *  - Über Footer-Link `/datenschutz#cookies` kann der Banner jederzeit neu geöffnet werden
 *    (window.__openCookieSettings() funktion ist global verfügbar).
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck, BarChart3, Target, Settings } from "lucide-react";

type Consent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  timestamp: string;
};

const STORAGE_KEY = "fmm-consent";
const CONSENT_VERSION = 1;

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.v !== CONSENT_VERSION) return null;
    return parsed.c as Consent;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: CONSENT_VERSION, c: consent })
    );
    // Broadcast so analytics/tag-manager scripts can react
    window.dispatchEvent(
      new CustomEvent("consentchange", { detail: consent })
    );
  } catch {
    // no-op: storage not available (private mode, etc.)
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Initial: show banner if no consent stored
  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    }

    // Expose global helper so a Datenschutz page link can re-open the banner
    (window as any).__openCookieSettings = () => {
      const existingNow = readConsent();
      if (existingNow) {
        setStatistics(existingNow.statistics);
        setMarketing(existingNow.marketing);
      }
      setShowSettings(true);
      setVisible(true);
    };
  }, []);

  // Persist + close
  const persist = (stats: boolean, mkt: boolean) => {
    writeConsent({
      necessary: true,
      statistics: stats,
      marketing: mkt,
      timestamp: new Date().toISOString(),
    });
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => persist(true, true);
  const necessaryOnly = () => persist(false, false);
  const saveCustom = () => persist(statistics, marketing);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Settings modal backdrop */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-forest/40 backdrop-blur-sm z-[94]"
              onClick={() => setShowSettings(false)}
              aria-hidden="true"
            />
          )}

          {/* Banner itself */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-body"
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "120%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-6 z-[95] max-w-3xl mx-auto"
          >
            <div className="bg-forest text-cream rounded-3xl overflow-hidden shadow-soft-xl border border-white/10">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/15 blur-[60px] pointer-events-none" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/30 text-mint flex items-center justify-center flex-shrink-0">
                    <Cookie size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2
                      id="cookie-title"
                      className="font-display text-xl sm:text-2xl font-bold leading-tight mb-2"
                    >
                      Wir respektieren deine Privatsphäre.
                    </h2>
                    <p
                      id="cookie-body"
                      className="text-sm sm:text-base text-white/85 leading-relaxed"
                    >
                      Diese Website nutzt Cookies für das technische
                      Funktionieren und{" "}
                      <span className="text-mint">optional</span> zur anonymen
                      Reichweitenmessung. Du kannst frei entscheiden — Details
                      findest du in den Einstellungen.
                    </p>
                  </div>
                </div>

                {/* Settings panel */}
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-5"
                  >
                    <div className="space-y-3 pt-3 pb-2">
                      <ConsentRow
                        icon={<ShieldCheck size={16} />}
                        title="Notwendig"
                        desc="Für grundlegende Funktionen der Website (z. B. Formulare, Sicherheit). Immer aktiv."
                        checked
                        disabled
                      />
                      <ConsentRow
                        icon={<BarChart3 size={16} />}
                        title="Statistik"
                        desc="Anonymisierte Reichweitenmessung (z. B. Google Analytics), um die Seite zu verbessern."
                        checked={statistics}
                        onChange={setStatistics}
                      />
                      <ConsentRow
                        icon={<Target size={16} />}
                        title="Marketing"
                        desc="Eventuelle Remarketing-Technologien (z. B. Meta-Pixel). Aktuell nicht aktiv."
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-teal hover:bg-mint text-forest px-6 py-3 rounded-full font-semibold text-sm transition-all duration-400 hover:shadow-teal-glow flex-1 sm:flex-initial"
                  >
                    <span className="relative z-10">Alle akzeptieren</span>
                  </button>
                  <button
                    type="button"
                    onClick={showSettings ? saveCustom : necessaryOnly}
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mint/40 text-white/80 hover:text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-400 flex-1 sm:flex-initial"
                  >
                    {showSettings ? "Auswahl speichern" : "Nur notwendige"}
                  </button>
                  {!showSettings && (
                    <button
                      type="button"
                      onClick={() => setShowSettings(true)}
                      className="inline-flex items-center justify-center gap-2 text-white/85 hover:text-mint text-sm transition-colors px-4 py-2"
                    >
                      <Settings size={14} />
                      Einstellungen
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    aria-label="Schließen"
                    className={`${
                      showSettings ? "inline-flex" : "hidden"
                    } w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/85 hover:text-white items-center justify-center transition-colors sm:ml-auto`}
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-x-5 gap-y-1 text-[0.7rem] text-white/85">
                  <a
                    href="/datenschutz"
                    className="hover:text-mint transition-colors"
                  >
                    Datenschutz
                  </a>
                  <a
                    href="/impressum"
                    className="hover:text-mint transition-colors"
                  >
                    Impressum
                  </a>
                  <span>Deine Entscheidung kannst du jederzeit ändern.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ConsentRow({
  icon,
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-colors ${
        disabled ? "" : "cursor-pointer hover:bg-white/[0.05] hover:border-mint/30"
      }`}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 text-mint flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-display font-bold text-sm text-cream">
            {title}
          </span>
          {disabled && (
            <span className="font-mono text-[0.75rem] tracking-widest uppercase text-mint/70 px-2 py-0.5 rounded-full bg-mint/10 border border-mint/20">
              Aktiv
            </span>
          )}
        </div>
        <p className="text-xs text-white/85 leading-relaxed">{desc}</p>
      </div>
      {/* Toggle switch (or static check if disabled) */}
      <div
        className={`flex-shrink-0 mt-1 w-10 h-6 rounded-full relative transition-colors ${
          checked ? "bg-teal" : "bg-white/15"
        } ${disabled ? "opacity-60" : ""}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
      </div>
    </label>
  );
}
