import { motion } from "framer-motion";
import { stats } from "../../data/site";
import { Container } from "../ui/Container";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Stats() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="stats" className="relative py-6">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="group relative bg-surface-card/80 px-6 py-8 text-center backdrop-blur-sm transition-colors hover:bg-surface-elevated/80"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl gradient-text">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-widest text-text-muted uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
