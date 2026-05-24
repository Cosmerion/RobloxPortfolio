"use client";

import { motion } from "framer-motion";

export default function Collaboration() {
  return (
    <section id="collaboration" className="relative py-32 px-6 overflow-hidden">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
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
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">The Team</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            Collaboration
          </h2>
        </motion.div>

        {/* LifeFabrication card */}
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
              boxShadow: "0 0 60px rgba(167,139,250,0.12), 0 0 30px rgba(167,139,250,0.06)",
              borderColor: "rgba(167,139,250,0.35)",
            }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-10 border border-white/[0.07] relative overflow-hidden group cursor-default"
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15), transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating ring */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full border border-purple-400/20 opacity-50" />
            <motion.div
              className="absolute top-6 right-6 w-16 h-16 rounded-full border border-t-purple-400/50 border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              {/* Avatar placeholder */}
              <div className="mb-7 flex items-center gap-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-700/20 border border-purple-400/30 flex items-center justify-center">
                    <span className="section-heading text-2xl font-black text-purple-300">LF</span>
                  </div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-400/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="section-heading text-2xl font-bold text-white">LifeFabrication</h3>
                  <p className="text-purple-300/80 text-sm font-semibold tracking-wide">
                    Main Asset Creator &amp; Modeler
                  </p>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-7">
                Responsible for the majority of assets and models across the showcased projects.
                LifeFabrication handles most of the visual asset production, creating the environments,
                characters, props, and decorative elements that bring each experience to life.
              </p>

              {/* Contribution breakdown */}
              <div className="space-y-3">
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-4">
                  Asset Contribution
                </p>

                {[
                  { label: "LifeFabrication",    value: 85, color: "rgba(167,139,250,0.8)" },
                  { label: "PleaseRestore (~15%)", value: 15, color: "rgba(212,168,71,0.8)"  },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60 font-medium">{label}</span>
                      <span className="font-semibold" style={{ color }}>{value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}

                <p className="text-white/35 text-xs mt-5 leading-relaxed">
                  PleaseRestore contributes around 15% of assets/models and can also create
                  some simple/basic animations when needed.
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
