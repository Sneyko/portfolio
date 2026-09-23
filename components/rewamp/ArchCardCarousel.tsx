"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import { animate, motion, useInView, useMotionValue, useTransform, type MotionValue } from "framer-motion";

const STOCK_IMAGES = [
  // Curated stock photos matching the clean editorial aesthetic in the video
  'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=85', // Pigeon studio portrait
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85', // Noir profile
  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=85', // Blue abstract geometry
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=85', // Colorful abstract
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85', // Modern portrait
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=85', // Red / plaid textile
  'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=85', // Minimalist ceramic vase
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=85', // Architecture
];

type ScreenSize = "mobile" | "tablet" | "desktop";

function subscribeToScreenSize(onChange: () => void) {
  const queries = [window.matchMedia("(min-width: 640px)"), window.matchMedia("(min-width: 1024px)")];
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () => queries.forEach((query) => query.removeEventListener("change", onChange));
}

function getScreenSize(): ScreenSize {
  return window.innerWidth < 640 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop";
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function wrappedAngle(rotation: number, index: number, step: number, count: number) {
  const span = Math.max(count, 1) * step;
  return ((rotation + index * step + span / 2) % span + span) % span - span / 2;
}

function ArchCard({ src, label, index, count, rotation, radius, step, width, height, moving, onSelect }: {
  src: string;
  label: string;
  index: number;
  count: number;
  rotation: MotionValue<number>;
  radius: number;
  step: number;
  width: number;
  height: number;
  moving: boolean;
  onSelect: (index: number) => void;
}) {
  const angle = useTransform(rotation, (value) => wrappedAngle(value, index, step, count));
  const transform = useTransform(angle, (value) => {
    const radians = value * Math.PI / 180;
    const scale = Math.max(0.86, 1 - Math.abs(value) / 55 * 0.15);
    // Keep server and browser CSS serialization identical during hydration.
    const x = Number((radius * Math.sin(radians)).toFixed(3));
    const y = Number((radius * (1 - Math.cos(radians))).toFixed(3));
    return `translate3d(${x}px, ${y}px, 0px) rotate(${Number(value.toFixed(3))}deg) scale(${Number(scale.toFixed(4))})`;
  });
  const opacity = useTransform(angle, (value) => Math.max(0, Math.min(1, (55 - Math.abs(value)) / 9)));
  const visibility = useTransform(angle, (value) => Math.abs(value) < 55 ? "visible" : "hidden");

  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={() => onSelect(index)}
      className="group/arch absolute cursor-pointer border-0 bg-transparent p-0 pointer-events-auto rounded-[18px] sm:rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current hover:z-10 focus-visible:z-10"
      style={{ width, height, transform, transformOrigin: "50% 100%", opacity, visibility, willChange: moving ? "transform" : "auto" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[inherit] border border-black/5 bg-zinc-200 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-out group-hover/arch:scale-[1.025] group-focus-visible/arch:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none">
        {/* The shadow is painted once; only the card's transform and opacity move. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={width} height={height} className="h-full w-full object-cover select-none pointer-events-none" loading="lazy" decoding="async" draggable={false} />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] ring-1 ring-inset ring-white/30 bg-gradient-to-t from-white/10 via-transparent to-white/15 opacity-0 transition-opacity duration-200 group-hover/arch:opacity-100 group-focus-visible/arch:opacity-100 motion-reduce:transition-none" />
      </div>
    </motion.button>
  );
}

export interface ArchCardCarouselProps {
  images?: string[];
  alts?: string[];
  ariaLabel?: string;
  radius?: number;
  stepAngleDeg?: number;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

export default function ArchCardCarousel({
  images = STOCK_IMAGES,
  alts,
  ariaLabel = "Project images",
  radius = 800,
  stepAngleDeg = 13.5,
  cardWidth = 156,
  cardHeight = 218,
  className = "",
}: ArchCardCarouselProps) {
  const screenSize = useSyncExternalStore(subscribeToScreenSize, getScreenSize, () => "desktop" as ScreenSize);
  const pageVisible = useSyncExternalStore(subscribeToVisibility, () => !document.hidden, () => true);
  const reduceMotion = useSyncExternalStore(subscribeToReducedMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.15 });
  const rotation = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pointerDown, setPointerDown] = useState(false);
  const [interaction, setInteraction] = useState(0);
  const elapsedRef = useRef(0);
  const cycleOriginRef = useRef(0);
  const lastInteractionRef = useRef(0);
  const suppressClickRef = useRef(false);
  const settleRef = useRef<{ stop: () => void } | null>(null);
  const gestureRef = useRef<{
    id: number; startX: number; startY: number; startRotation: number;
    lastX: number; lastTime: number; velocity: number; dragged: boolean;
  } | null>(null);

  const effRadius = screenSize === "mobile" ? 440 : screenSize === "tablet" ? 620 : radius;
  const effCardWidth = screenSize === "mobile" ? Math.min(cardWidth, 110) : screenSize === "tablet" ? Math.min(cardWidth, 136) : cardWidth;
  const effCardHeight = screenSize === "mobile" ? Math.min(cardHeight, 154) : screenSize === "tablet" ? Math.min(cardHeight, 190) : cardHeight;
  const effStep = screenSize === "mobile" ? 15.5 : screenSize === "tablet" ? 14.5 : stepAngleDeg;
  const active = inView && pageVisible && !reduceMotion;
  const autoplay = active && !hovered && !focused && !pointerDown && images.length > 1;

  useEffect(() => {
    if (!active) settleRef.current?.stop();
  }, [active]);

  useEffect(() => () => settleRef.current?.stop(), []);

  useEffect(() => {
    if (!autoplay) return;
    let frame: number;
    let lastStamp = 0;
    const tick = (now: number) => {
      const dt = lastStamp ? Math.min(now - lastStamp, 34) : 0;
      lastStamp = now;
      elapsedRef.current += dt;
      const progress = (elapsedRef.current % 5200) / 5200;
      const amplitude = effStep * 1.55;
      let target = 0;
      if (progress >= 0.1 && progress < 0.42) target = easeInOutCubic((progress - 0.1) / 0.32) * amplitude;
      else if (progress >= 0.42 && progress < 0.56) target = amplitude;
      else if (progress >= 0.56 && progress < 0.88) target = (1 - easeInOutCubic((progress - 0.56) / 0.32)) * amplitude;
      // Motion values update transforms without rendering every card in React.
      const blend = 1 - Math.pow(0.92, dt / (1000 / 60));
      rotation.set(rotation.get() + (cycleOriginRef.current + target - rotation.get()) * blend);
      frame = requestAnimationFrame(tick);
    };
    const delay = Math.max(0, 1200 - (performance.now() - lastInteractionRef.current));
    const timer = window.setTimeout(() => { frame = requestAnimationFrame(tick); }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [autoplay, effStep, interaction, rotation]);

  const markInteraction = () => {
    lastInteractionRef.current = performance.now();
    setInteraction((value) => value + 1);
  };

  const selectCard = (index: number) => {
    settleRef.current?.stop();
    markInteraction();
    const target = rotation.get() - wrappedAngle(rotation.get(), index, effStep, images.length);
    cycleOriginRef.current = target;
    elapsedRef.current = 0;
    if (reduceMotion) rotation.set(target);
    else settleRef.current = animate(rotation, target, { duration: 0.4, ease: [0.22, 1, 0.36, 1] });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    settleRef.current?.stop();
    suppressClickRef.current = false;
    gestureRef.current = {
      id: event.pointerId, startX: event.clientX, startY: event.clientY,
      startRotation: rotation.get(), lastX: event.clientX,
      lastTime: performance.now(), velocity: 0, dragged: false,
    };
    setPointerDown(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    if (!gesture.dragged) {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 6) return;
      if (event.pointerType === "touch" && Math.abs(deltaY) > Math.abs(deltaX)) {
        gestureRef.current = null;
        setPointerDown(false);
        return;
      }
      gesture.dragged = true;
      suppressClickRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    const now = performance.now();
    const degreesPerPixel = 180 / Math.PI / effRadius * 1.35;
    rotation.set(gesture.startRotation + deltaX * degreesPerPixel);
    gesture.velocity = Math.max(-0.15, Math.min(0.15, (event.clientX - gesture.lastX) * degreesPerPixel / Math.max(now - gesture.lastTime, 1)));
    gesture.lastX = event.clientX;
    gesture.lastTime = now;
  };

  const finishPointer = (event: PointerEvent<HTMLDivElement>, cancelled = false) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    gestureRef.current = null;
    setPointerDown(false);
    markInteraction();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    const target = rotation.get() + (!cancelled && active && performance.now() - gesture.lastTime < 80 ? gesture.velocity * 160 : 0);
    cycleOriginRef.current = Math.round(target / effStep) * effStep;
    elapsedRef.current = 0;
    if (!cancelled && gesture.dragged && active && performance.now() - gesture.lastTime < 80) {
      settleRef.current = animate(rotation, target, { duration: 0.45, ease: [0.16, 1, 0.3, 1] });
    }
  };

  return (
    <div className={`relative w-full max-w-full flex flex-col items-center select-none ${className}`}>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finishPointer(event)}
        onPointerCancel={(event) => finishPointer(event, true)}
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) finishPointer(event, true);
        }}
        onPointerLeave={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) finishPointer(event, true);
        }}
        onClickCapture={(event) => {
          if (!suppressClickRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClickRef.current = false;
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          const current = Math.round(-rotation.get() / effStep);
          selectCard(current + (event.key === "ArrowRight" ? 1 : -1));
        }}
        role="region"
        aria-label={ariaLabel}
        className="relative w-full overflow-hidden flex items-end justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ height: effCardHeight + (screenSize === "mobile" ? 95 : 165) }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {images.map((src, index) => (
            <ArchCard key={src} src={src} label={alts?.[index] ?? `Card ${index + 1}`} index={index} count={images.length} rotation={rotation} radius={effRadius} step={effStep} width={effCardWidth} height={effCardHeight} moving={active && (autoplay || pointerDown)} onSelect={selectCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
