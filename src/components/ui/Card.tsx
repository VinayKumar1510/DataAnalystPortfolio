type CardProps = {
  className?: string;
  children: React.ReactNode;
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/[0.04] ring-1 ring-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

