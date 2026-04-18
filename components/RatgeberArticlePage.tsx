"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  User,
  Calendar,
  Quote,
  Lightbulb,
} from "lucide-react";
import { SubPageNav } from "./SubPageNav";
import { Footer } from "./Footer";
import {
  articles,
  estimateReadingTime,
  type Article,
  type ArticleBlock,
} from "@/lib/ratgeber";

export function RatgeberArticlePage({ article }: { article: Article }) {
  const readingTime = estimateReadingTime(article);
  const date = new Date(article.published).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav backLabel="Alle Artikel" backHref="/ratgeber" />

      {/* Hero */}
      <section className="relative bg-forest text-cream pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-teal/15 blur-[80px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/5 text-mint text-[0.65rem] tracking-[0.25em] uppercase font-semibold mb-6">
              Ratgeber · {article.category}
            </div>
            <h1
              className="font-display font-bold leading-[0.98] tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            >
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <User size={14} /> {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} /> {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {readingTime} Min
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          {article.body.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
      </article>

      {/* Author */}
      <section className="py-12 bg-cream border-t border-sand">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-sand">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border border-sand">
              <Image
                src="/marco.jpg"
                alt="Marco Degel – Personal Trainer für Senioren in München"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-teal font-semibold mb-1">
                Geschrieben von
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-forest mb-1">
                Marco Degel
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Personal Trainer für Senioren in München. Mehrjährige Erfahrung
                aus Hochleistungssport und Personal Training. Training bei dir
                zuhause – individuell, sicher und ehrlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-3">
                Passt dazu
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest leading-tight">
                Weiter lesen
              </h2>
            </div>
            <Link
              href="/ratgeber"
              className="hidden sm:inline-flex items-center gap-2 text-forest hover:text-teal font-semibold transition-colors link-underline"
            >
              Alle Artikel <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/ratgeber/${r.slug}`}
                className="group block bg-white border border-sand rounded-2xl p-6 hover:border-teal/40 hover:shadow-soft-md hover:-translate-y-1 transition-all duration-500 ease-smooth"
              >
                <div className="text-[0.65rem] tracking-[0.25em] uppercase text-teal font-semibold mb-3">
                  {r.category}
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-forest leading-snug mb-3 group-hover:text-teal transition-colors">
                  {r.title}
                </div>
                <div className="text-sm text-slate leading-relaxed mb-4 line-clamp-2">
                  {r.excerpt}
                </div>
                <div className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold">
                  Artikel lesen
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ───────── Block Renderer — one block type per branch ───────── */
function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base sm:text-lg text-charcoal leading-[1.85] mb-5">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-forest leading-tight mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-xl sm:text-2xl font-bold text-forest leading-tight mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="space-y-2.5 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-7 text-base sm:text-lg text-charcoal leading-relaxed"
            >
              <span className="absolute left-0 top-[0.7em] w-2 h-2 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="relative my-8 p-6 sm:p-7 rounded-2xl bg-cream border-l-4 border-teal">
          <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-teal font-semibold mb-2">
            <Lightbulb size={12} />
            {block.title}
          </div>
          <p className="text-base sm:text-lg text-charcoal leading-relaxed mb-0">
            {block.text}
          </p>
        </div>
      );
    case "quote":
      return (
        <figure className="my-10 relative">
          <Quote
            className="absolute -top-2 -left-2 text-mint/40"
            size={36}
            aria-hidden="true"
          />
          <blockquote className="pl-10 font-display italic text-xl sm:text-2xl lg:text-3xl text-forest leading-tight">
            {block.text}
          </blockquote>
        </figure>
      );
    case "cta":
      return (
        <div className="my-10 relative overflow-hidden rounded-2xl bg-forest text-cream p-7 sm:p-8">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-teal/20 blur-[60px] pointer-events-none" />
          <div className="relative">
            {block.sub && (
              <div className="font-mono text-xs text-mint/80 mb-3 tracking-wider">
                {block.sub}
              </div>
            )}
            <Link
              href={block.href}
              className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-6 pr-2 py-2 rounded-full font-semibold transition-all duration-400 hover:shadow-teal-glow"
            >
              <span>{block.label}</span>
              <span className="w-10 h-10 rounded-full bg-forest text-teal flex items-center justify-center group-hover:bg-cream group-hover:text-forest transition-colors duration-400">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      );
  }
}
