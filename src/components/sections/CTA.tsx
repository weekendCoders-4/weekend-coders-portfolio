import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard maxTilt={6} innerClassName="group">
            <div className="glow-border relative overflow-hidden rounded-3xl border border-border bg-surface-card/60 px-8 py-20 text-center backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
              <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <p className="mb-4 font-mono text-xs tracking-widest text-cyan-400/80 uppercase">
                  Let&apos;s build something
                </p>
                <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Got something you want{" "}
                  <span className="gradient-text-animated">built?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-lg text-text-secondary">
                  Tell us what you&apos;re thinking. We&apos;ll tell you how we&apos;d
                  build it.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="#contact" variant="primary">
                    Start a Project →
                  </Button>
                  <Button href="mailto:hello@weekendcoders.dev" variant="secondary">
                    hello@weekendcoders.dev
                  </Button>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </Container>
    </section>
  );
}
