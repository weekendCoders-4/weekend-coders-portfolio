import { motion } from "framer-motion";
import { whyUsPoints } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const accents = [
  "from-cyan-500/20 to-transparent",
  "from-emerald-500/20 to-transparent",
  "from-purple-500/20 to-transparent",
  "from-amber-500/20 to-transparent",
];

export function WhyUs() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="why-us" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.06)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-20" />

      <Container className="relative">
        <SectionHeading
          eyebrow="// why us"
          index="07"
          title="Why hire four weekend coders?"
          align="center"
          gradient
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {whyUsPoints.map((point, i) => (
            <motion.div
              key={point.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface-card/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-border-hover"
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accents[i]} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <span className="relative font-mono text-4xl font-bold text-white/[0.04]">
                0{i + 1}
              </span>
              <h3 className="relative mt-2 font-display text-xl font-bold text-text-primary">
                {point.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-text-secondary">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
