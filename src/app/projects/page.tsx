"use client";

import { AmbientStage } from "@/components/ambient-stage";
import { CustomCursor } from "@/components/custom-cursor";
import { ProjectCard } from "@/components/project-card";
import { MagneticLink, Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { TechGridBackground } from "@/components/tech-grid-bg";
import { moreProjects, projects } from "@/lib/profile";
import { motion, useReducedMotion } from "motion/react";

export default function ProjectsPage() {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100">
      <CustomCursor />
      <AmbientStage />
      <SiteHeader />

      <main className="relative z-10 overflow-hidden pb-28 pt-28">
        <TechGridBackground variant="dense" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="heading-xl mt-4 max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
              Live products &amp; case studies
            </h1>
            <p className="lede mt-5 max-w-2xl">
              Explore shipped work with live demos, animated previews, and implementation
              details.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <StaggerItem key={project.slug} className="h-full">
                <ProjectCard
                  index={index}
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  image={project.image}
                  live={project.live}
                  liveUrl={project.liveUrl}
                />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-24">
            <p className="eyebrow">More live work</p>
            <h2 className="heading-lg mt-3 text-3xl text-white sm:text-4xl">
              Additional deployments
            </h2>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {moreProjects.map((item) => (
              <StaggerItem key={item.title}>
                <motion.a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="pointer"
                  className="shadow-inset-hover block rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition hover:border-amber-300/30"
                  whileHover={reduce ? undefined : { y: -4 }}
                >
                  <h3 className="font-display text-xl tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                  <p className="mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-amber-200">
                    Open live →
                  </p>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-16">
            <MagneticLink
              href="/#contact"
              className="inline-flex rounded-md border border-white/15 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300/40 hover:text-white"
              data-cursor="pointer"
            >
              ← Back to home contact
            </MagneticLink>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
