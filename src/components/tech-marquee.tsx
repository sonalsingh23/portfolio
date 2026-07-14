"use client";

import { techItems } from "@/lib/profile";
import { motion, useReducedMotion } from "motion/react";

export function TechMarquee() {
  const reduce = useReducedMotion();
  const row = [...techItems, ...techItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduce ? undefined : { duration: 32, ease: "linear", repeat: Infinity }
        }
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm tracking-[0.28em] text-zinc-500"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
