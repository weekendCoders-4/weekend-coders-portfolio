import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
}

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:brightness-110",
  secondary:
    "border border-border bg-surface-card/40 text-text-primary backdrop-blur-sm hover:border-cyan-500/30 hover:bg-surface-elevated/80",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  const combined = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={combined}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
