"use client";

import { motion, useReducedMotion } from "motion/react";

const floatingCode = [
  "async function deploy()",
  "useEffect(() => {})",
  "SELECT * FROM users",
  "rag.retrieve(query)",
  "llm.generate(prompt)",
  "docker compose up",
  "git push origin main",
  "npm run build",
];

export function TechGridBackground({ variant = "default" }: { variant?: "default" | "dense" }) {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="tech-grid absolute inset-0 opacity-[0.35]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.07),transparent_45%)]" />

      <motion.div
        className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full border border-amber-300/15"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full border border-sky-400/10"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0">
        {(variant === "dense" ? floatingCode : floatingCode.slice(0, 5)).map((line, index) => (
          <motion.span
            key={line}
            className="absolute font-mono text-[10px] tracking-wide text-zinc-600/80 sm:text-xs"
            style={{
              left: `${8 + ((index * 17) % 70)}%`,
              top: `${12 + ((index * 23) % 70)}%`,
            }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -18, 0],
                    opacity: [0.15, 0.45, 0.15],
                  }
            }
            transition={{
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {line}
          </motion.span>
        ))}
      </div>

      <div className="scanline absolute inset-x-0 top-0 h-24 opacity-30" />
    </div>
  );
}
