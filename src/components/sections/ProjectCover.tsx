"use client";

import { TechIcon } from "@/components/icons/TechIcon";

type ProjectCoverProps = {
  title: string;
  tools: string[];
};

function initials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function ProjectCover({ title, tools }: ProjectCoverProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02] ring-1 ring-white/10">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(500px_260px_at_30%_20%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(420px_260px_at_70%_70%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="relative flex h-full min-h-[150px] flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/40 text-sm font-semibold text-white ring-1 ring-white/10">
            {initials(title)}
          </div>
          <div className="h-10 w-10 rounded-full bg-[color:var(--accent)]/20 blur-xl" />
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.slice(0, 3).map((t) => (
            <TechIcon key={t} tech={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

