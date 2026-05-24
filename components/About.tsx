"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutStats } from "@/data/skills";

const roles = [
  "Owner",
  "Project Manager",
  "Sole Programmer",
  "Backend Developer",
  "Frontend Developer",
  "Modeler",
  "Animator",
];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#d4a847]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">Full Stack Developer</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            About <span className="gold-text">Me</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ─ Left: profile card ─ */}
          <motion.div {...fadeUp(0.1)} className="space-y-6">
            {/* Avatar + name card */}
            <div className="glass rounded-2xl p-8 border border-white/[0.06] relative overflow-hidden group">
              {/* Corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#d4a847]/10 blur-2xl group-hover:bg-[#d4a847]/20 transition-all duration-700" />

              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#d4a847]/30 blur-lg" />
                  <Image
                    src="/assets/PleaseRestore Roblox Icon.webp"
                    alt="PleaseRestore"
                    width={80}
                    height={80}
                    className="relative rounded-full border-2 border-[#d4a847]/50 object-cover"
                  />
                </div>
                <div>
                  <h3 className="section-heading text-xl font-bold text-white">PleaseRestore</h3>
                  <p className="text-[#d4a847] text-sm tracking-wide">Full Stack Roblox Developer</p>
                </div>
              </div>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 mb-7">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#d4a847]/30 text-[#d4a847] bg-[#d4a847]/05"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-4">
                PleaseRestore is a full stack Roblox developer capable of building a complete
                Roblox game entirely solo — from backend systems and frontend development to
                gameplay architecture, UI systems, combat systems, data persistence, optimization,
                and project management. Beyond programming, PleaseRestore also handles all{" "}
                <span className="text-white/80">modeling and animation</span> work across projects.
              </p>
              <p className="text-[#d4a847]/80 text-xs font-semibold tracking-wide uppercase border border-[#d4a847]/20 rounded-lg px-4 py-2 inline-block">
                ✦ Can build a complete Roblox game entirely on my own
              </p>
            </div>

            {/* Modeling & animation note */}
            <motion.div
              {...fadeUp(0.2)}
              className="glass rounded-xl p-5 border border-[#d4a847]/15 text-sm text-white/50 leading-relaxed"
            >
              <span className="text-[#d4a847] font-semibold">Modeling &amp; Animation: </span>
              PleaseRestore handles all modeling and animation work across projects — crafting
              every asset, prop, environment, and animation that brings each experience to life.
            </motion.div>
          </motion.div>

          {/* ─ Right: stat cards ─ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.065 } },
            }}
            className="grid grid-cols-2 gap-3"
          >
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden:  { opacity: 0, y: 30, scale: 0.92 },
                  visible: { opacity: 1, y: 0,  scale: 1    },
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, borderColor: "rgba(212,168,71,0.35)" }}
                className="glass rounded-xl p-4 border border-white/[0.06] cursor-default relative overflow-hidden group transition-colors duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a847]/0 to-[#d4a847]/0 group-hover:from-[#d4a847]/05 group-hover:to-transparent transition-all duration-500 rounded-xl" />
                {/* Number */}
                <div className="text-[#d4a847]/30 section-heading text-3xl font-black mb-1 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-white/75 text-xs font-semibold tracking-wide leading-tight">
                  {stat.label}
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#d4a847]/50 to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
