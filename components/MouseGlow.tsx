"use client";

import { useEffect, useState } from "react";

/** Subtle radial gold glow that follows the cursor */
export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(212,168,71,0.05), transparent 70%)`,
      }}
    />
  );
}
