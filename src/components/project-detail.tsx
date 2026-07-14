"use client";

import { AmbientStage } from "@/components/ambient-stage";
import { CustomCursor } from "@/components/custom-cursor";
import { MagneticLink, Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { TechGridBackground } from "@/components/tech-grid-bg";
import { ProjectVideo } from "@/components/video";
import type { Project } from "@/lib/profile";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ProjectDetail({
  project,
  nextSlug,
  nextTitle,
}: {
  project: Project;
  nextSlug: string;
  nextTitle: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100">
      <CustomCursor />
      <AmbientStage />
      <SiteHeader />

      <main className="relative z-10 overflow-hidden pb-28 pt-28">
        <TechGridBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <Link
            href="/projects"
            data-cursor="pointer"
            className="text-sm text-zinc-400 transition hover:text-amber-200"
          >
            ← All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.live ? (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live
              </span>
            ) : (
              <span className="rounded-md border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Research
              </span>
            )}
            <p className="eyebrow">Case study</p>
          </div>
          <h1 className="heading-xl mt-4 max-w-4xl text-4xl text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="lede mt-5 max-w-3xl">{project.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <MagneticLink
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="shadow-inset-hover inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-200"
                data-cursor="pointer"
              >
                Open live site
              </MagneticLink>
            ) : null}
            {project.githubUrl ? (
              <MagneticLink
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50"
                data-cursor="pointer"
              >
                View on GitHub
              </MagneticLink>
            ) : null}
            <MagneticLink
              href="/projects"
              className="inline-flex rounded-md border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:text-white"
              data-cursor="pointer"
            >
              Browse all
            </MagneticLink>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ProjectVideo src={project.video} title={project.title} />
          <motion.div
            className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-zinc-200">{project.stack}</p>
          </motion.div>
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Features</p>
            <Stagger className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="shadow-inset-hover rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                    {feature}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Tech stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6">
              <p className="text-sm text-zinc-400">Next up</p>
              <Link
                href={`/projects/${nextSlug}`}
                data-cursor="pointer"
                className="heading-lg mt-2 block text-2xl text-white transition hover:text-amber-200"
              >
                {nextTitle} →
              </Link>
            </div>
          </Reveal>
        </section>
        </div>
      </main>
    </div>
  );
}
