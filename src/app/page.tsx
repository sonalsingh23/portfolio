"use client";

import { AmbientStage } from "@/components/ambient-stage";
import { ContactBackdrop } from "@/components/contact-backdrop";
import { CountUp } from "@/components/count-up";
import { CustomCursor } from "@/components/custom-cursor";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroVisualPanel } from "@/components/hero-visual-panel";
import { AboutPortrait, HeroBackdrop } from "@/components/media";
import { ProjectCard } from "@/components/project-card";
import {
  HeroText,
  MagneticLink,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { TechGridBackground } from "@/components/tech-grid-bg";
import { TechMarquee } from "@/components/tech-marquee";
import {
  certifications,
  education,
  profile,
  projects,
  skills,
} from "@/lib/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100">
      <CustomCursor />
      <AmbientStage />
      <SiteHeader />

      <main className="relative z-10">
        <section
          id="home"
          className="relative flex min-h-screen items-center px-6 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-12"
        >
          <HeroBackdrop
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=80"
            alt="Developer workspace with code on screen"
          />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <HeroText delay={0.05}>
                <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available for full-stack roles
                </p>
              </HeroText>

              <HeroText delay={0.12}>
                <p className="display-xl text-6xl text-white sm:text-7xl md:text-8xl lg:text-[7.75rem]">
                  <span className="hero-gradient-text">{profile.shortName}</span>
                </p>
              </HeroText>

              <div className="mt-7 max-w-xl space-y-5">
                <HeroText delay={0.28}>
                  <h1 className="text-2xl font-medium leading-snug tracking-[-0.02em] text-zinc-50 sm:text-3xl lg:text-[2.2rem] lg:leading-[1.2]">
                    I craft{" "}
                    <span className="text-amber-200">fast, elegant interfaces</span> and the{" "}
                    <span className="text-sky-300">APIs that power them</span>.
                  </h1>
                </HeroText>
                <HeroText delay={0.4}>
                  <p className="lede !text-zinc-300">
                    Full-stack developer building with React, Node.js, Express, Next.js, LLM,
                    RAG, and cloud-ready systems. 2+ years turning product ideas into
                    production.
                  </p>
                </HeroText>
                <HeroText delay={0.52}>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <MagneticLink
                      href="/projects"
                      className="shadow-inset-hover inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-200"
                      data-cursor="pointer"
                    >
                      Explore work
                    </MagneticLink>
                    <MagneticLink
                      href={`mailto:${profile.email}`}
                      className="shadow-inset-pulse inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-200"
                      data-cursor="pointer"
                    >
                      Let&apos;s talk
                    </MagneticLink>
                    <MagneticLink
                      href={profile.resume}
                      download
                      className="inline-flex items-center rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                      data-cursor="pointer"
                    >
                      Resume
                    </MagneticLink>
                  </div>
                </HeroText>
              </div>
            </div>

            <div className="lg:pl-2">
              <HeroVisualPanel />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
            <div className="scroll-cue h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        <TechMarquee />

        <section id="about" className="relative overflow-hidden py-24">
          <TechGridBackground />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <AboutPortrait
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Developer collaborating on a digital product"
            />

            <div>
              <Reveal>
                <p className="eyebrow">About</p>
                <h2 className="heading-xl mt-4 max-w-xl text-4xl text-white sm:text-5xl">
                  Sonal — full-stack developer from idea to production.
                </h2>
              </Reveal>

              <Reveal delay={0.1} className="mt-6">
                <p className="text-lg leading-8 text-zinc-400">
                  Currently at <span className="text-zinc-200">Ultrashield Software Private limited</span>, I build full-stack
                  features for web and mobile. Previously at Primafelicitas and PerfectKode,
                  I shipped APIs, reusable React components, and responsive product UIs.
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {education.degree} · {education.school} ({education.period}) · CGPA{" "}
                  {education.cgpa}
                </p>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <CountUp value={2} suffix="+" label="Years experience" />
                <CountUp value={3} suffix="" label="Companies" />
                <CountUp value={5} suffix="+" label="Certifications" />
              </div>
            </div>
          </div>
          </div>
        </section>

        <ExperienceTimeline />

        <section id="skills" className="relative overflow-hidden py-24">
          <TechGridBackground />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">Skills</p>
            <h2 className="heading-xl mt-4 text-4xl text-white sm:text-5xl">
              Technical toolkit
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <StaggerItem key={skill.title}>
                <article
                  data-cursor="pointer"
                  className="skill-card shadow-inset-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
                >
                  <div className="skill-sheen pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <span className="font-mono text-xs text-zinc-600">{skill.icon}</span>
                  <h3 className="mt-5 text-xl font-medium text-white transition group-hover:text-amber-200">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{skill.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Certifications</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-zinc-300 backdrop-blur-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>
          </div>
        </section>

        <section id="projects" className="relative overflow-hidden py-24">
          <TechGridBackground variant="dense" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow">Featured work</p>
            <h2 className="heading-xl mt-4 text-4xl text-white sm:text-5xl">
              Projects &amp; research
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
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

          <Reveal className="mt-10">
            <MagneticLink
              href="/projects"
              className="inline-flex rounded-md border border-white/15 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300/40 hover:text-white"
              data-cursor="pointer"
            >
              See all projects &amp; live demos →
            </MagneticLink>
          </Reveal>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-28 pt-12 sm:px-8 lg:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <ContactBackdrop
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
                alt="Abstract technology network imagery"
              />
              <div className="shadow-inset-pulse relative px-6 py-20 text-center sm:px-12">
                <p className="eyebrow">
                  Let&apos;s connect
                </p>
                <h2 className="heading-xl mt-4 text-4xl text-white sm:text-5xl">
                  Open to full-stack opportunities
                </h2>
                <p className="lede mx-auto mt-4 max-w-2xl">
                  Open to full-stack roles where I can own UI, APIs, and delivery end to
                  end. Let&apos;s build something great together.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <MagneticLink
                    href={`mailto:${profile.email}`}
                    className="shadow-inset-hover inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-200"
                    data-cursor="pointer"
                  >
                    {profile.email}
                  </MagneticLink>
                  <MagneticLink
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/50"
                    data-cursor="pointer"
                  >
                    {profile.phone}
                  </MagneticLink>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-400">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="transition hover:text-amber-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="transition hover:text-amber-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="transition hover:text-amber-200"
                  >
                    HackerRank
                  </a>
                  <a
                    href={profile.resume}
                    data-cursor="pointer"
                    className="transition hover:text-amber-200"
                  >
                    Resume PDF
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-10 flex flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="tracking-[0.18em]">FULL STACK DEVELOPER</p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
