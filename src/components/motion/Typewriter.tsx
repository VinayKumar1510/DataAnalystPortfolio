"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterProps = {
  phrases: string[];
  className?: string;
  typingMsPerChar?: number;
  pauseMs?: number;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Typewriter({
  phrases,
  className,
  typingMsPerChar = 28,
  pauseMs = 1100,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const safePhrases = useMemo(
    () => phrases.filter((p) => p.trim().length > 0),
    [phrases],
  );

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (!safePhrases.length) return;

    const current = safePhrases[phraseIdx] ?? "";
    const isDoneTyping = charIdx >= current.length;
    const isDoneDeleting = charIdx <= 0;

    const baseDelay = deleting ? Math.max(typingMsPerChar * 0.6, 14) : typingMsPerChar;
    const delay = isDoneTyping && !deleting ? pauseMs : baseDelay;

    const t = window.setTimeout(() => {
      if (!deleting) {
        if (isDoneTyping) setDeleting(true);
        else setCharIdx((v) => v + 1);
      } else {
        if (isDoneDeleting) {
          setDeleting(false);
          setPhraseIdx((v) => (v + 1) % safePhrases.length);
        } else {
          setCharIdx((v) => v - 1);
        }
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [reduce, safePhrases, phraseIdx, charIdx, deleting, typingMsPerChar, pauseMs]);

  if (!safePhrases.length) return null;
  if (reduce) return <span className={className}>{safePhrases[0]}</span>;

  const current = safePhrases[phraseIdx] ?? "";
  const shown = current.slice(0, charIdx);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{shown}</span>
      <span className="ml-1 inline-block h-[1.15em] w-[1px] bg-white/70 animate-pulse" />
    </span>
  );
}

