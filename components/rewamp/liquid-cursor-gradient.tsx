"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, MotionConfig, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/cn";

export function LiquidCursorGradient({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <MotionConfig reducedMotion="user">
    <div
      ref={containerRef}
      onMouseMove={(event) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className={cn("relative min-h-svh w-full overflow-hidden bg-[#140606]", className)}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 50, -20, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full opacity-80 mix-blend-screen"
          style={{ backgroundColor: "#c44848" }}
        />
        <motion.div
          animate={{
            x: [0, -60, 20, 40, 0],
            y: [0, 40, -40, 30, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-10%] bottom-[-10%] h-[60%] w-[50%] rounded-full opacity-80 mix-blend-screen"
          style={{ backgroundColor: "#f0a8a8" }}
        />
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full opacity-70 mix-blend-screen"
          style={{
            backgroundColor: "#ffd0d0",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/10 backdrop-blur-[80px]" />
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[15] bg-[radial-gradient(ellipse_at_center,rgba(12,4,4,0.42),transparent_58%)]" />

      <div className="relative z-20">{children}</div>
    </div>
    </MotionConfig>
  );
}
