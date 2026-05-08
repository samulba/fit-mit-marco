"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LogoIcon } from "./Logo";

type Props = {
  backLabel?: string;
  backHref?: string;
};

export function SubPageNav({
  backLabel = "Zur Startseite",
  backHref = "/",
}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-forest/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-forest/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between text-cream">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Fit mit Marco – Zur Startseite"
        >
          <LogoIcon size={34} variant="dark" />
          <span className="font-display font-bold text-[1.05rem] leading-none whitespace-nowrap">
            fit mit <span className="italic text-mint">marco</span>
          </span>
        </Link>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/85 hover:text-mint transition-colors"
        >
          <ArrowLeft size={14} /> {backLabel}
        </Link>
      </div>
    </motion.header>
  );
}
