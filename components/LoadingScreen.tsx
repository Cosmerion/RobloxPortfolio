"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/** Cinematic loading screen — disappears after ~2 s */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#09090f" }}
        >
          {/* Animated ring */}
          <motion.div
            className="relative mb-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#d4a847]/20" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-t-[#d4a847] border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner glow dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#d4a847] shadow-[0_0_16px_6px_rgba(212,168,71,0.5)]" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="section-heading text-lg sm:text-xl text-[#d4a847] tracking-[0.3em] gold-glow-text"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            PLEASE RESTORE
          </motion.h1>

          {/* Progress bar */}
          <motion.div className="mt-8 w-48 h-px bg-white/10 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#d4a847] to-[#f0c040]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
