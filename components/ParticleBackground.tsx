"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  dAlpha: number;
}

/** Canvas-based floating particle system */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 60;
    const particles: Particle[] = [];
    let animId: number;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      r: Math.random() * 1.5 + 0.4,
      alpha: 0,
      dAlpha: Math.random() * 0.004 + 0.001,
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = spawn();
      p.alpha = Math.random(); // start at random opacity
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x  += p.vx;
        p.y  += p.vy;
        p.alpha += p.dAlpha;

        if (p.alpha > 0.6) p.dAlpha = -Math.abs(p.dAlpha);
        if (p.alpha < 0 || p.y < -10) {
          Object.assign(p, spawn(), { alpha: 0, dAlpha: Math.random() * 0.004 + 0.001 });
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle   = "#d4a847";
        ctx.shadowBlur  = 6;
        ctx.shadowColor = "#d4a847";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
