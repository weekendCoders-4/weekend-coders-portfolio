import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: boolean;
  index?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  gradient = false,
  index,
  children,
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`relative mb-14 max-w-3xl ${alignClass}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {index && (
        <span
          className={`pointer-events-none absolute -top-8 font-display text-7xl font-bold text-white/[0.03] select-none sm:text-8xl ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2"
          }`}
          aria-hidden="true"
        >
          {index}
        </span>
      )}

      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400/90 uppercase">
          <span className="h-px w-6 bg-gradient-to-r from-cyan-500/60 to-transparent" />
          {eyebrow.replace("// ", "")}
        </p>
      )}

      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          gradient ? "gradient-text" : "text-text-primary"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}

      {children}
    </motion.div>
  );
}
