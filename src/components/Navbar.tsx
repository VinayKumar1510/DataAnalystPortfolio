"use client";

import { useEffect, useMemo, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Navbar() {
  const [active, setActive] = useState<(typeof sections)[number]["id"]>("about");

  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = visible?.target?.id as (typeof sections)[number]["id"] | undefined;
        if (id) setActive(id);
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.05, 0.1, 0.2, 0.3],
      },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight text-white">
          Vinay<span className="text-white/50">.dev</span>
        </a>
        <nav className="hidden gap-1 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition",
                active === s.id
                  ? "bg-white/8 text-white ring-1 ring-white/12"
                  : "text-white/70 hover:text-white hover:bg-white/5",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-black hover:brightness-110 transition"
        >
          Hire me
        </a>
      </div>
    </div>
  );
}

