"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, MotionConfig, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/cn";

export function LiquidCursorGradient({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const redGlowRef = useRef<HTMLDivElement>(null);
  const pinkGlowRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  useEffect(() => {
    const el = containerRef.current;
    const redGlow = redGlowRef.current;
    const pinkGlow = pinkGlowRef.current;
    const cursorGlow = cursorGlowRef.current;
    if (!el || !redGlow || !pinkGlow || !cursorGlow) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const glows = [redGlow, pinkGlow];
    const animations = [
      animate(redGlow, {
        transform: [
          "translate3d(0, 0, 0) scale(1)",
          "translate3d(50px, -30px, 0) scale(1.08)",
          "translate3d(-30px, 30px, 0) scale(0.96)",
          "translate3d(0, 0, 0) scale(1)",
        ],
      }, { duration: 18, repeat: Infinity, ease: "easeInOut", autoplay: false }),
      animate(pinkGlow, {
        transform: [
          "translate3d(0, 0, 0) scale(1)",
          "translate3d(-40px, 30px, 0) scale(0.96)",
          "translate3d(30px, -30px, 0) scale(1.08)",
          "translate3d(0, 0, 0) scale(1)",
        ],
      }, { duration: 22, repeat: Infinity, ease: "easeInOut", autoplay: false }),
    ];
    let visible = false;
    let active = false;
    let bounds = { left: 0, top: 0, width: 0, height: 0 };

    const measure = () => {
      const rect = el.getBoundingClientRect();
      bounds = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    };
    const resetPointer = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    const updateActivity = () => {
      active = visible && !document.hidden && !reducedMotion.matches;
      animations.forEach((animation) => active ? animation.play() : animation.pause());
      glows.forEach((glow) => { glow.style.willChange = active ? "transform" : "auto"; });
      cursorGlow.style.willChange = active && finePointer.matches ? "transform" : "auto";
      if (!active || !finePointer.matches) {
        resetPointer();
        springX.jump(0);
        springY.jump(0);
      }
    };
    const movePointer = (event: PointerEvent) => {
      if (!active || !finePointer.matches || event.pointerType === "touch") return;
      mouseX.set(event.pageX - bounds.left - bounds.width / 2);
      mouseY.set(event.pageY - bounds.top - bounds.height / 2);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateActivity();
    });
    const resizeObserver = new ResizeObserver(measure);

    measure();
    observer.observe(el);
    resizeObserver.observe(el);
    el.addEventListener("pointerenter", measure, { passive: true });
    el.addEventListener("pointermove", movePointer, { passive: true });
    el.addEventListener("pointerleave", resetPointer, { passive: true });
    document.addEventListener("visibilitychange", updateActivity);
    reducedMotion.addEventListener("change", updateActivity);
    finePointer.addEventListener("change", updateActivity);

    return () => {
      animations.forEach((animation) => animation.stop());
      springX.stop();
      springY.stop();
      observer.disconnect();
      resizeObserver.disconnect();
      el.removeEventListener("pointerenter", measure);
      el.removeEventListener("pointermove", movePointer);
      el.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", updateActivity);
      reducedMotion.removeEventListener("change", updateActivity);
      finePointer.removeEventListener("change", updateActivity);
    };
  }, [mouseX, mouseY, springX, springY]);

  return (
    <MotionConfig reducedMotion="user">
    <div
      ref={containerRef}
      className={cn("relative min-h-svh w-full overflow-hidden bg-[#140606]", className)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          ref={redGlowRef}
          className="absolute -top-[25%] -left-[25%] h-[115%] w-[105%]"
          style={{ background: "radial-gradient(ellipse, #c44848b8 0%, #c4484866 35%, #c4484800 70%)" }}
        />
        <div
          ref={pinkGlowRef}
          className="absolute -right-[25%] -bottom-[35%] h-[115%] w-[95%]"
          style={{ background: "radial-gradient(ellipse, #f0a8a8b8 0%, #f0a8a84d 35%, #f0a8a800 70%)" }}
        />
        <motion.div
          ref={cursorGlowRef}
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] opacity-70"
          style={{
            background: "radial-gradient(circle, #ffd0d066 0%, #ffd0d026 35%, #ffd0d000 70%)",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-black/10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[15] bg-[radial-gradient(ellipse_at_center,rgba(12,4,4,0.42),transparent_58%)]" />

      <div className="relative z-20">{children}</div>
    </div>
    </MotionConfig>
  );
}
