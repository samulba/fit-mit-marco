"use client";

import { motion } from "framer-motion";
import { Footer } from "./Footer";
import { SubPageNav } from "./SubPageNav";

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
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav />

      {/* Hero */}
      <section className="bg-forest text-cream pb-20 sm:pb-28 pt-28 sm:pt-32 lg:pt-36 relative overflow-hidden">
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
