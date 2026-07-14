"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { TechGridBackground } from "@/components/tech-grid-bg";
import { experience } from "@/lib/profile";
import { motion, useReducedMotion } from "motion/react";

export function ExperienceTimeline() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <TechGridBackground variant="dense" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="heading-xl mt-4 text-4xl text-white sm:text-5xl">
            Where I&apos;ve built
          </h2>
          <p className="lede mt-3 max-w-xl">
            From internships to full-stack ownership — shipping features that scale.
          </p>
        </Reveal>

        <Stagger className="relative mt-14 space-y-0" stagger={0.12}>
          <div className="pointer-events-none absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-amber-300/50 via-white/15 to-transparent sm:left-[15px]" />

          {experience.map((job, index) => (
            <StaggerItem key={`${job.company}-${job.period}`}>
              <motion.article
                data-cursor="pointer"
                className="group relative grid gap-4 pb-12 pl-10 sm:pl-14 lg:grid-cols-[220px_1fr] lg:gap-10"
                whileHover={reduce ? undefined : { x: 4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
                  <span className="absolute h-6 w-6 rounded-full border border-amber-300/40 bg-[#050505] sm:h-8 sm:w-8" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.55)] transition group-hover:scale-125" />
                </span>

                <div>
                  <p className="font-mono text-xs text-amber-200/80">{job.period}</p>
                </div>

                <div className="shadow-inset-hover rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition duration-500 group-hover:border-amber-300/25 sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-medium text-white">{job.role}</h3>
                    <span className="text-amber-200/90">@ {job.company}</span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-300/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(experience.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
