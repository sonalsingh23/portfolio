"use client";

import { motion, useReducedMotion } from "motion/react";

export function AmbientStage() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,158,11,0.14),transparent_45%),radial-gradient(ellipse_at_85%_15%,rgba(14,165,233,0.12),transparent_40%),linear-gradient(180deg,#050505_0%,#0a0a0a_55%,#111111_100%)]" />

      <div className="film-grain absolute inset-0 opacity-[0.35]" />

      <motion.div
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-amber-500/20 blur-[120px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, 10, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8rem] top-32 h-[32rem] w-[32rem] rounded-full bg-sky-500/15 blur-[130px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -50, 10, 0],
                y: [0, 40, -15, 0],
                scale: [1, 0.94, 1.1, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-orange-400/10 blur-[110px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 30, -25, 0],
                y: [0, -20, 15, 0],
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
