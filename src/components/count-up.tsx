"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export function CountUp({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    if (reduce && display.current) {
      display.current.textContent = `${value}${suffix}`;
      return;
    }

    const unsubscribe = spring.on("change", (latest) => {
      if (display.current) {
        display.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });

    return unsubscribe;
  }, [spring, suffix, value, reduce]);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 pt-5"
    >
      <p className="display-xl text-5xl text-white sm:text-6xl">
        <span ref={display}>{reduce ? `${value}${suffix}` : `0${suffix}`}</span>
      </p>
      <p className="mt-2 text-sm font-light tracking-wide text-zinc-400">{label}</p>
    </motion.div>
  );
}
