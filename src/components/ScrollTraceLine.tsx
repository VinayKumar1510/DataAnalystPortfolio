"use client";

import { useEffect, useState } from "react";

/**
 * Fixed left rail whose fill height tracks scroll progress — neon gradient + glow.
 */
export function ScrollTraceLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const root = document.documentElement;
      const scrollTop = window.scrollY || root.scrollTop;
      const scrollable = root.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? scrollTop / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const fillPct = progress * 100;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-40 flex h-screen"
    >
      <div className="shrink-0" style={{ width: "env(safe-area-inset-left, 0px)" }} />
      <div className="relative h-full w-1 sm:w-1.5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-white/[0.07]" />

        <div
          className="absolute left-0 top-0 w-full overflow-visible rounded-b-sm"
          style={{
            height: `${fillPct}%`,
            minHeight: progress > 0 ? 3 : 0,
          }}
        >
          <div
            className="h-full w-full bg-gradient-to-b from-cyan-300 via-violet-500 to-fuchsia-400 opacity-95"
            style={{
              boxShadow:
                "0 0 14px rgba(34,211,238,0.55), 0 0 28px rgba(167,139,250,0.45), 0 0 42px rgba(232,121,249,0.35)",
            }}
          />
          {progress > 0.002 && (
            <div
              className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white"
              style={{
                boxShadow:
                  "0 0 10px 2px rgba(244,244,255,0.95), 0 0 22px 6px rgba(168,85,247,0.65), 0 0 36px 10px rgba(34,211,238,0.35)",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
