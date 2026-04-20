type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  );
}

