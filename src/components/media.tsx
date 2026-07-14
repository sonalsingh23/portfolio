"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HeroBackdrop({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={reduce ? undefined : { y, opacity }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#050505]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,5,5,0.75)_100%)]" />
    </div>
  );
}

export function AboutPortrait({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduce ? undefined : { scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
