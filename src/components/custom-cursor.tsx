"use client";

import { useEffect, useState } from "react";

type CursorMode = "default" | "pointer" | "move" | "text";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor]") as HTMLElement | null;
      const attr = interactive?.dataset.cursor as CursorMode | undefined;

      if (attr) {
        setMode(attr);
      } else if (target?.closest("a, button")) {
        setMode("pointer");
      } else if (target?.closest("p, h1, h2, h3, li, span")) {
        setMode("text");
      } else {
        setMode("default");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  const isActive = mode === "pointer" || mode === "move";

  return (
    <div
      className={`custom-cursor ${visible ? "is-visible" : ""} ${isActive ? "is-active" : ""} mode-${mode}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden
    >
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
      {mode === "move" ? <span className="custom-cursor__label">drag</span> : null}
    </div>
  );
}
