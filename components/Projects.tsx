"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, type Project } from "@/data/projects";

/* ─── Tilt card wrapper ──────────────────────────────────── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 140, damping: 20 });
  const springY = useSpring(y, { stiffness: 140, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Single project card ───────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tab, setTab] = useState<"video" | "screenshots">("video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const hasScreenshots = project.images.length > 0;

  /* Play/pause video based on hover */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isHovered) vid.play().catch(() => {});
    else vid.pause();
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <TiltCard className="relative">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="glass rounded-2xl overflow-hidden border border-white/[0.07] group relative"
          whileHover={{ borderColor: "rgba(212,168,71,0.30)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none z-0"
            animate={isHovered ? { boxShadow: "0 0 60px rgba(212,168,71,0.12) inset, 0 0 80px rgba(212,168,71,0.06)" } : {}}
            transition={{ duration: 0.4 }}
          />

          {/* ── Media area ── */}
          <div className="relative aspect-video overflow-hidden bg-[#0d0d1a]">
            {/* Tab switcher — only when screenshots exist */}
            {hasScreenshots && (
              <div className="absolute top-3 left-3 z-20 flex gap-1.5">
                {(["video", "screenshots"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-3 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                      tab === t
                        ? "bg-[#d4a847] text-[#09090f]"
                        : "glass text-white/50 border border-white/10 hover:text-white/80"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}

            {/* Video */}
            {tab === "video" && project.video && (
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Screenshots */}
            {tab === "screenshots" && hasScreenshots && (
              <ScreenshotGallery images={project.images} />
            )}

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Floating particles on hover */}
            {isHovered && <HoverParticles />}
          </div>

          {/* ── Project info ── */}
          <div className="p-7 relative z-10">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="section-heading text-xl font-bold text-white mb-1 group-hover:text-[#f0c040] transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.roles.map((r) => (
                    <span key={r} className="text-[10px] font-semibold tracking-widest text-[#d4a847]/70 uppercase">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              {/* Index number */}
              <span className="section-heading text-4xl font-black text-[#d4a847]/10 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

            {/* Responsibilities */}
            <div className="mb-6">
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-3">Responsibilities</p>
              <div className="flex flex-wrap gap-2">
                {project.responsibilities.map((r) => (
                  <motion.span
                    key={r}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 rounded-md glass border border-white/[0.06] text-white/60 text-xs font-medium transition-colors hover:border-[#d4a847]/30 hover:text-[#d4a847]/80"
                  >
                    {r}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#d4a847]/10 border border-[#d4a847]/25 text-[#d4a847]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Animated bottom border */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5"
            animate={isHovered ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 0.5 }}
            style={{ background: "linear-gradient(to right, #d4a847, #f0c040, transparent)" }}
          />
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

/* ─── Screenshot gallery (simple fade carousel) ─────────── */
function ScreenshotGallery({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 2800);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={src}
            alt="Screenshot"
            fill
            className="object-cover transition-transform duration-700 scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "bg-[#d4a847] w-4" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Hover particle burst ──────────────────────────────── */
function HoverParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#d4a847]"
          initial={{
            x: `${10 + i * 12}%`,
            y: "90%",
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            y: `${20 + Math.random() * 50}%`,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            delay: i * 0.06,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">Showcase</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm max-w-xl mx-auto">
            Hover to preview • Switch between video & screenshots on Divine Journey
          </p>
        </motion.div>

        {/* Projects grid — 2 columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
