"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { LogoIcon } from "./Logo";

const links = [
  { href: "/", label: "Home", type: "page" as const },
  { href: "#leistungen", label: "Leistungen", type: "anchor" as const },
  { href: "/preise", label: "Preise", type: "page" as const },
  { href: "/fuer-angehoerige", label: "Angehörige", type: "page" as const },
  { href: "#kontakt", label: "Kontakt", type: "anchor" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  useEffect(() => {
    const anchorLinks = links.filter((l) => l.type === "anchor");
    const ids = anchorLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`xl:hidden fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? "bg-cream/90 backdrop-blur-2xl border-b border-forest/5 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5">
          <a href="#home" className="flex items-center gap-2 group">
            <LogoIcon size={36} variant="dark" />
            <div className="font-display font-bold leading-none text-forest">
              <div className="text-base">fit mit</div>
              <div className="text-base text-teal -mt-0.5">marco</div>
            </div>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 rounded-full bg-forest text-cream flex items-center justify-center"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* DESKTOP: Floating Glass Pill Navigation */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hidden xl:block fixed top-6 inset-x-0 z-50 px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo capsule */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group flex items-center gap-3 pl-2 pr-5 py-2 rounded-full transition-all duration-500 ease-smooth ${
              scrolled
                ? "bg-forest/90 backdrop-blur-2xl shadow-soft-md"
                : "bg-forest shadow-soft-sm"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-teal/15 flex items-center justify-center">
              <LogoIcon size={26} variant="dark" />
            </div>
            <div className="font-display font-bold leading-none text-white">
              <div className="text-sm">fit mit</div>
              <div className="text-sm text-mint -mt-0.5">marco</div>
            </div>
          </motion.a>

          {/* Main pill nav */}
          <nav
            className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ease-smooth ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl shadow-soft-md border border-white/60"
                : "bg-white/55 backdrop-blur-xl border border-white/40"
            }`}
          >
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-forest rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-cream" : "text-forest/70 hover:text-forest"
                    }`}
                  >
                    {l.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+491726223371"
              className={`flex items-center gap-2 px-4 py-3 rounded-full font-mono text-xs transition-all duration-500 ease-smooth ${
                scrolled
                  ? "bg-white/80 backdrop-blur-2xl border border-white/60 text-forest hover:bg-white hover:shadow-soft"
                  : "bg-white/55 backdrop-blur-xl border border-white/40 text-forest/80 hover:bg-white/80"
              }`}
              aria-label="Marco anrufen"
            >
              <Phone size={14} />
              <span>+49 172 6223371</span>
            </a>
            <a
              href="/erstgespraech"
              className="group relative overflow-hidden flex items-center gap-2 bg-teal hover:bg-mint text-forest pl-5 pr-2 py-2 rounded-full text-sm font-semibold transition-all duration-400 ease-smooth hover:shadow-teal-glow"
            >
              <span className="relative z-10">Erstgespräch</span>
              <span className="relative z-10 w-8 h-8 rounded-full bg-forest group-hover:bg-forest flex items-center justify-center text-cream transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 z-40 bg-forest text-cream"
          >
            <div className="pt-20 px-8 pb-10 h-full flex flex-col">
              <div className="flex-1 flex flex-col justify-center gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="font-display font-bold text-5xl py-2 hover:text-mint transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 pt-8 border-t border-white/10"
              >
                <a
                  href="tel:+491726223371"
                  className="flex items-center gap-3 text-white/70"
                >
                  <Phone size={16} /> +49 172 6223371
                </a>
                <a
                  href="/erstgespraech"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-teal text-forest py-4 rounded-full font-semibold"
                >
                  Erstgespräch buchen
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
