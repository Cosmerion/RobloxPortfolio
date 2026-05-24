"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",   href: "#about"    },
  { label: "Skills",  href: "#skills"   },
  { label: "Projects",href: "#projects" },
  { label: "Contact", href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* Scroll detection – solid bg + active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const ids = LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#09090f]/85 border-b border-white/[0.06]"
          : "backdrop-blur-sm  bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleLink("#home")}
          className="section-heading text-sm font-bold text-[#d4a847] tracking-widest hover:text-[#f0c040] transition-colors"
        >
          PR
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => handleLink(href)}
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-white/70 hover:text-white"
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#d4a847] to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-px bg-[#d4a847]/30 blur-sm" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#d4a847] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4a847] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4a847] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-2xl bg-[#09090f]/95 border-t border-white/[0.06]"
          >
            {LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleLink(href)}
                className="block w-full text-left px-8 py-4 text-sm font-medium text-white/70 hover:text-[#d4a847] transition-colors border-b border-white/[0.04] tracking-wide"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
