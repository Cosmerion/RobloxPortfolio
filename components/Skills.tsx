"use client";

import { motion } from "framer-motion";
import { skills, categoryColors } from "@/data/skills";

/* Category-specific icons as simple SVG paths */
const categoryIcons: Record<string, string> = {
  Language:     "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  Framework:    "M4 6h16M4 10h16M4 14h16M4 18h16",
  Development:  "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  Systems:      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18",
  Design:       "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  Performance:  "M13 10V3L4 14h7v7l9-11h-7z",
  Architecture: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  Leadership:   "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, #d4a847, transparent 60%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            Technical <span className="gold-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.055 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => {
            const color = categoryColors[skill.category] ?? "#d4a847";
            const iconPath = categoryIcons[skill.category] ?? categoryIcons.Language;

            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden:  { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0,  scale: 1   },
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: `0 0 28px ${color}33, 0 0 12px ${color}1a`,
                  borderColor: `${color}55`,
                }}
                className="glass rounded-xl p-5 border border-white/[0.06] cursor-default relative overflow-hidden group transition-all duration-300"
              >
                {/* Background sweep on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}08, transparent 60%)` }}
                />

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={iconPath} />
                  </svg>
                </div>

                {/* Name */}
                <p className="text-white/85 text-sm font-semibold leading-snug mb-2">{skill.name}</p>

                {/* Category tag */}
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: `${color}99` }}
                >
                  {skill.category}
                </span>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
