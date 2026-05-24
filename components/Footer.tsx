"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-10 px-6 overflow-hidden">
      {/* Animated gold divider */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-px w-full origin-left"
          style={{ background: "linear-gradient(to right, transparent, #d4a847, #f0c040, #d4a847, transparent)" }}
        />
        {/* Glow duplicate */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.05 }}
          className="h-4 w-full origin-left -mt-4 blur-sm"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,168,71,0.3), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo/name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/assets/PleaseRestore Roblox Icon.webp"
            alt="PleaseRestore"
            width={32}
            height={32}
            className="rounded-full border border-[#d4a847]/40 opacity-80"
          />
          <span className="section-heading text-sm font-bold text-[#d4a847]/80 tracking-widest">
            PLEASE RESTORE
          </span>
        </motion.div>

        {/* Center text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/30 text-xs tracking-widest text-center"
        >
          Built by{" "}
          <span className="text-[#d4a847]/70 font-semibold">PleaseRestore</span>
          {" "}· {year}
        </motion.p>

        {/* Roblox logo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/assets/robloxlogo.png"
            alt="Roblox"
            width={60}
            height={20}
            className="opacity-30 hover:opacity-60 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Floating ambient orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.04), transparent 70%)" }}
      />
    </footer>
  );
}
