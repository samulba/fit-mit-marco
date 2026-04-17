"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import { LogoIcon } from "./Logo";

type LegalPageProps = {
  kicker: string;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function LegalPage({
  kicker,
  title,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-cream min-h-screen">
      {/* Minimal header */}
      <header className="relative z-10 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Zurück zur Startseite"
          >
            <LogoIcon size={36} variant="dark" />
            <div className="font-display font-bold leading-none">
              <div className="text-base">fit mit</div>
              <div className="text-base text-mint -mt-0.5">marco</div>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/60 hover:text-mint transition-colors"
          >
            <ArrowLeft size={14} /> Zur Startseite
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-forest text-cream pb-20 sm:pb-28 pt-10 sm:pt-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/15 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-4">
              {kicker}
            </div>
            <h1
              className="font-display font-bold leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              {title}
            </h1>
            {lastUpdated && (
              <div className="mt-6 font-mono text-xs text-white/50">
                Stand: {lastUpdated}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="legal-prose"
          >
            {children}
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
