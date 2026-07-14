"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function ContactBackdrop({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={reduce ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[#050505]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
    </div>
  );
}
