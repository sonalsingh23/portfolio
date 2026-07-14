"use client";

import { motion, useReducedMotion } from "motion/react";

const codeLines = [
  { className: "text-zinc-500", text: "// full-stack · available now" },
  { className: "text-zinc-300", prefix: true },
  { className: "text-amber-100/90", text: '  name: "Sonal Kumari",' },
  { className: "text-amber-100/90", text: '  stack: ["React", "Node", "LLM", "RAG"],' },
  { className: "text-amber-100/90", text: "  years: 2," },
  { className: "text-amber-100/90", text: "  shipping: true," },
  { className: "text-zinc-300", text: "};" },
];

const chips = ["React", "Node.js", "Next.js", "LLM", "RAG", "TypeScript"];

export function HeroVisualPanel() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <motion.div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-transparent to-sky-400/15 blur-2xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.7, 0.35], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a]/85 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-zinc-500">
            sonal.dev — terminal
          </span>
        </div>

        <div className="space-y-1.5 p-5 font-mono text-[12px] leading-6 sm:text-[13px]">
          {codeLines.map((line, index) => (
            <motion.p
              key={index}
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + index * 0.08, duration: 0.45 }}
              className={line.className}
            >
              {"prefix" in line && line.prefix ? (
                <>
                  <span className="text-sky-300">const</span> engineer = {"{"}
                </>
              ) : (
                line.text
              )}
            </motion.p>
          ))}
          <motion.span
            className="inline-block h-4 w-2 bg-amber-300 align-middle"
            animate={reduce ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-4">
          {[
            { label: "Experience", value: "2+ yrs" },
            { label: "Focus", value: "Full Stack" },
            { label: "Status", value: "Open" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-3 text-center"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip, index) => (
          <motion.span
            key={chip}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + index * 0.06 }}
            className="rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur"
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
