"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ProjectCard({
  index,
  slug,
  title,
  description,
  stack,
  image,
  live,
  liveUrl,
}: {
  index: number;
  slug: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  live?: boolean;
  liveUrl?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      data-cursor="pointer"
      className="shadow-inset-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      <Link href={`/projects/${slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={reduce ? undefined : { scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
        <span className="absolute left-4 top-4 font-mono text-xs text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        {live ? (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col space-y-3 p-6">
        <Link href={`/projects/${slug}`}>
        <h3 className="font-display text-2xl tracking-[-0.02em] text-white transition group-hover:text-amber-100">
          {title}
        </h3>
        </Link>
        <p className="flex-1 text-sm leading-6 text-zinc-400">{description}</p>
        <p className="text-sm font-medium tracking-wide text-amber-200/90">{stack}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href={`/projects/${slug}`}
            data-cursor="pointer"
            className="inline-flex rounded-md border border-white/15 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-amber-300/40 hover:text-white"
          >
            View case study
          </Link>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="inline-flex rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-amber-200"
            >
              Open live site
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
