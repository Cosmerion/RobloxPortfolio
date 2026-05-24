"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const modelingSkills = [
  "3D Modeling",
  "Game Assets",
  "Props & Environment",
  "Character Models",
  "Basic Animations",
  "Rigging",
];

export default function Collaboration() {
  return (
    <section id="collaboration" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #d4a847, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">Creative Work</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            Modeling &amp; <span className="gold-text">Animation</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 60px rgba(212,168,71,0.12), 0 0 30px rgba(212,168,71,0.06)",
              borderColor: "rgba(212,168,71,0.35)",
            }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-10 border border-white/[0.07] relative overflow-hidden group cursor-default"
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(212,168,71,0.12), transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating ring */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full border border-[#d4a847]/20 opacity-50" />
            <motion.div
              className="absolute top-6 right-6 w-16 h-16 rounded-full border border-t-[#d4a847]/50 border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              {/* Avatar + name */}
              <div className="mb-7 flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#d4a847]/30 blur-lg" />
                  <Image
                    src="/assets/PleaseRestore Roblox Icon.webp"
                    alt="PleaseRestore"
                    width={64}
                    height={64}
                    className="relative rounded-full border-2 border-[#d4a847]/50 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#d4a847]/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="section-heading text-2xl font-bold text-white">PleaseRestore</h3>
                  <p className="text-[#d4a847]/80 text-sm font-semibold tracking-wide">
                    Developer · Modeler · Animator
                  </p>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Beyond programming, PleaseRestore handles all modeling and animation work across
                projects — creating the assets, props, environments, and animations that bring
                each Roblox experience to life.
              </p>

              {/* Skill tags */}
              <div>
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-4">
                  Modeling &amp; Animation Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {modelingSkills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="px-3 py-1.5 rounded-lg glass border border-[#d4a847]/20 text-[#d4a847]/70 text-xs font-semibold tracking-wide"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a847]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
