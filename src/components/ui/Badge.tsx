interface BadgeProps {
  children: string;
  variant?: "default" | "outline" | "mono";
  className?: string;
}

const variants = {
  default: "bg-white/5 text-text-secondary border border-border",
  outline: "border border-border text-text-muted bg-transparent",
  mono: "font-mono text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
