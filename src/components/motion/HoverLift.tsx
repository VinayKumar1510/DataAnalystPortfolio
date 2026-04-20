"use client";

import { motion, useReducedMotion } from "framer-motion";

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function HoverLift({ children, className }: HoverLiftProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

