import { motion } from "framer-motion";
import { processSteps } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function HowWeWork() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="// process"
          index="04"
          title={'From "I have an idea" to "It\'s live."'}
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <TiltCard maxTilt={10} className="h-full" innerClassName="group h-full">
                <div
                  className="relative h-full rounded-2xl border border-border/50 bg-surface-card/40 p-6 pt-12 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-purple-500/5"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div
                    className="absolute -top-0 left-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-cyan-500/30 bg-surface-card font-mono text-xs font-medium text-cyan-400 shadow-lg shadow-cyan-500/10"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="font-display text-lg font-bold text-text-primary"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-text-secondary"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
