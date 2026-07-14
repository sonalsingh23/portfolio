"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function HeroVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const play = () => {
      void video.play().catch(() => undefined);
    };
    play();
  }, [reduce]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={reduce ? undefined : { y, opacity }} className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover ken-burns"
          src={src}
          poster={poster}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#050505]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(5,5,5,0.8)_100%)]" />
    </div>
  );
}

export function ProjectVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    void video.play().catch(() => undefined);
  }, [reduce, src]);

  return (
    <motion.div
      className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={`${title} demo video`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/90">Animated preview</p>
        <p className="mt-1 text-sm text-white">{title}</p>
      </div>
    </motion.div>
  );
}
