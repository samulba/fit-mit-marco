"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { SubPageNav } from "./SubPageNav";
import { Footer } from "./Footer";
import { articles, estimateReadingTime, type Article } from "@/lib/ratgeber";

const accentClasses: Record<Article["accent"], string> = {
  teal: "from-teal/30 to-teal/10",
  mint: "from-mint/30 to-teal/10",
  sage: "from-sage/40 to-teal/15",
  gold: "from-gold/25 to-teal/10",
  coral: "from-coral/20 to-teal/10",
};

export function RatgeberIndexPage() {
  const [featured, ...rest] = articles;

  return (
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav />

      {/* Hero */}
      <section className="relative bg-forest text-cream pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-teal/20 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-mint/15 blur-[70px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/5 text-mint text-[0.78rem] tracking-[0.15em] uppercase font-semibold mb-6">
              <BookOpen size={13} /> Ratgeber für Senioren
            </div>
            <h1
              className="font-display font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Wissen, das dich
              <br />
              <span className="italic text-teal">stärker macht.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl font-normal">
              Artikel zu Training, Gesundheit und Alltag – geschrieben für
              Menschen ab 60 und ihre Angehörigen. Keine Versprechen, keine
              Marketingfloskeln. Nur das, was ich aus der Arbeit mit echten
              Kunden weiß.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-6">
            Aktueller Artikel
          </div>
          <FeaturedCard article={featured} />
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 lg:mb-14">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-3">
                Alle Artikel
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
                Thematisch sortiert
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-teal mb-4">
            Persönliche Beratung
          </div>
          <h2
            className="font-display font-bold text-forest leading-[0.95] mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Mehr als Lesen? Lass uns sprechen.
          </h2>
          <p className="text-base sm:text-lg text-forest/75 leading-relaxed max-w-2xl mx-auto mb-10">
            Artikel sind ein guter Anfang. Aber jede Situation ist individuell.
            Im kostenlosen Erstgespräch schauen wir uns an, was für dich
            persönlich wirklich passt.
          </p>
          <Link
            href="/erstgespraech"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-forest hover:bg-teal text-white hover:text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all duration-400 hover:shadow-teal-glow"
          >
            <span className="relative z-10">Kostenloses Erstgespräch</span>
            <span className="relative z-10 w-11 h-11 rounded-full bg-teal text-forest group-hover:bg-forest group-hover:text-teal flex items-center justify-center transition-colors">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─────── Featured card (top article, large) ─────── */
function FeaturedCard({ article }: { article: Article }) {
  const readingTime = estimateReadingTime(article);
  const date = new Date(article.published).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Link
        href={`/ratgeber/${article.slug}`}
        className="group grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10 items-center bg-white rounded-3xl border border-sand p-6 sm:p-10 lg:p-12 hover:border-teal/40 hover:shadow-soft-lg transition-all duration-500 ease-smooth"
      >
        {/* Visual side */}
        <div
          className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${accentClasses[article.accent]} relative overflow-hidden border border-sand`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-white/40" />
            <div className="w-64 h-64 rounded-full border border-white/25 absolute" />
          </div>
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-forest text-[0.78rem] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
            {article.category}
          </div>
          <div className="absolute bottom-5 left-5 right-5 font-display italic text-forest/70 text-xl sm:text-2xl leading-tight">
            {article.excerpt.slice(0, 80)}…
          </div>
        </div>

        {/* Text side */}
        <div>
          <div className="flex items-center gap-4 text-xs text-forest/75 mb-4">
            <span className="font-mono">{date}</span>
            <span className="w-1 h-1 rounded-full bg-slate/40" />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} /> {readingTime} Min Lesezeit
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-forest leading-[1.1] mb-4 group-hover:text-teal transition-colors duration-400">
            {article.title}
          </h3>
          <p className="text-base sm:text-lg text-forest/75 leading-relaxed mb-6">
            {article.excerpt}
          </p>
          <div className="inline-flex items-center gap-2 text-teal font-semibold text-sm">
            Artikel lesen
            <ArrowUpRight
              size={14}
              className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* ─────── Compact article card (grid) ─────── */
function ArticleCard({
  article,
  delay,
}: {
  article: Article;
  delay: number;
}) {
  const readingTime = estimateReadingTime(article);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={`/ratgeber/${article.slug}`}
        className="group block h-full bg-white border border-sand rounded-3xl overflow-hidden hover:border-teal/40 hover:shadow-soft-md hover:-translate-y-1 transition-all duration-500 ease-smooth"
      >
        <div
          className={`aspect-[5/3] bg-gradient-to-br ${accentClasses[article.accent]} relative`}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-32 h-32 rounded-full border-2 border-white/40" />
            <div className="w-48 h-48 rounded-full border border-white/20 absolute" />
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest text-[0.75rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
            {article.category}
          </div>
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-1.5 text-xs text-forest/75 mb-3">
            <Clock size={12} /> {readingTime} Min Lesezeit
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-forest leading-tight mb-3 group-hover:text-teal transition-colors duration-400">
            {article.title}
          </h3>
          <p className="text-sm sm:text-base text-forest/75 leading-relaxed mb-5 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="inline-flex items-center gap-1.5 text-teal font-semibold text-sm">
            Weiterlesen
            <ArrowUpRight
              size={14}
              className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
