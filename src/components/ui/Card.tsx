import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  glow = false,
}: CardProps) {
  const base = `rounded-2xl border border-border bg-surface-card/60 p-6 backdrop-blur-sm transition-all duration-300 ${
    glow ? "glow-border" : ""
  }`;

  if (hover) {
    return (
      <motion.div
        className={`${base} hover:border-border-hover hover:bg-surface-elevated/70 hover:shadow-xl hover:shadow-black/20 ${className}`}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
