"use client";

import { profile } from "@/lib/profile";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || pathname !== "/"
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          data-cursor="pointer"
          className="font-display text-lg tracking-[0.28em] text-white"
        >
          {profile.shortName}
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor="pointer"
              className={`relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full ${
                pathname.startsWith("/projects") && link.href === "/projects"
                  ? "text-white after:w-full"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            className="hidden text-sm text-zinc-400 transition hover:text-white sm:inline"
          >
            GitHub
          </a>
          <a
            href={profile.resume}
            data-cursor="pointer"
            className="shadow-inset-hover rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-amber-300/40 hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
}
