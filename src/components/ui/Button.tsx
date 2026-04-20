import Link from "next/link";
import { forwardRef } from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[color:var(--accent)] text-black shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_rgba(168,85,247,0.28)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_50px_rgba(168,85,247,0.35)]",
  secondary:
    "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/15",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton>(
  function Button({ variant = "primary", size = "md", className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
}: ButtonAsLink) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
    >
      {children}
    </Link>
  );
}

