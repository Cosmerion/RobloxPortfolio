"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/* ─── Floating shape definitions ───── */
const shapes = [
  { size: 120, x: "8%",  y: "18%", delay: 0,   dur: 5.5, rotate:  12 },
  { size:  72, x: "88%", y: "12%", delay: 0.8, dur: 4.8, rotate: -20 },
  { size:  90, x: "78%", y: "70%", delay: 1.2, dur: 6.0, rotate:  30 },
  { size:  55, x: "14%", y: "72%", delay: 0.4, dur: 5.2, rotate: -10 },
  { size:  40, x: "52%", y: "85%", delay: 1.8, dur: 4.4, rotate:  45 },
  { size:  30, x: "62%", y: "8%",  delay: 0.6, dur: 6.5, rotate: -35 },
];

const HERO_DELAY = 2.3; // seconds after loading screen fades

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay"
    >
      {/* ── Animated gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left amber blob */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #d4a847, transparent 70%)",
            top: "-200px", left: "-200px",
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom-right blue blob */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
            bottom: "-180px", right: "-180px",
          }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Center gold streak */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[280px] opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, #d4a847, transparent)" }}
        />
      </div>

      {/* ── Floating geometric shapes ── */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 0.18, 0.12],
            scale:   [0.4, 1, 1],
            y:       [0, -18, 0],
            rotate:  [0, s.rotate, 0],
          }}
          transition={{
            opacity:  { duration: 1.4, delay: HERO_DELAY + s.delay },
            scale:    { duration: 1.4, delay: HERO_DELAY + s.delay },
            y:        { duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: HERO_DELAY + s.delay + 1 },
            rotate:   { duration: s.dur * 1.4, repeat: Infinity, ease: "easeInOut", delay: HERO_DELAY + s.delay + 1 },
          }}
        >
          {/* Alternating shapes */}
          {i % 3 === 0 ? (
            <div
              className="w-full h-full rounded-lg"
              style={{ border: "1px solid rgba(212,168,71,0.3)", background: "rgba(212,168,71,0.03)" }}
            />
          ) : i % 3 === 1 ? (
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 86.6%, 0% 86.6%)",
                border: "1px solid rgba(212,168,71,0.2)",
                background: "rgba(212,168,71,0.02)",
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-full"
              style={{ border: "1px solid rgba(212,168,71,0.2)", background: "rgba(212,168,71,0.02)" }}
            />
          )}
        </motion.div>
      ))}

      {/* ── Hero content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: HERO_DELAY }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass border border-[#d4a847]/25 text-[#d4a847] text-xs tracking-[0.2em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a847] animate-pulse" />
          Roblox Developer Portfolio
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: HERO_DELAY + 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="section-heading font-black leading-tight mb-2"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
        >
          <span className="text-white">PleaseRestore&apos;s</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: HERO_DELAY + 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="section-heading font-black leading-tight mb-8"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
        >
          <span className="gold-text">Roblox Portfolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: HERO_DELAY + 0.4 }}
          className="text-[#d4a847] font-semibold tracking-widest text-sm sm:text-base uppercase mb-5"
        >
          Owner · Project Manager · Sole Programmer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: HERO_DELAY + 0.55 }}
          className="text-white/55 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12"
        >
          Specialized in backend systems, frontend development, scalable Roblox architecture,
          optimization, gameplay systems, UI development, and project leadership.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: HERO_DELAY + 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(212,168,71,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-[#09090f] cursor-pointer"
            style={{ background: "linear-gradient(135deg, #d4a847, #f0c040)" }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04, borderColor: "#f0c040", color: "#f0c040", boxShadow: "0 0 24px rgba(212,168,71,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-[#d4a847] cursor-pointer glass border border-[#d4a847]/40 transition-colors duration-200"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: HERO_DELAY + 1.4 }}
          className="mt-20 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest"
        >
          <span>SCROLL</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#d4a847]/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
