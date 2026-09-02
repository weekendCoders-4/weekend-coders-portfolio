import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <Container className="relative">
        <SectionHeading
          eyebrow="// services"
          index="03"
          title="What we can build"
          subtitle="From MVPs to full platforms — we pick the right stack and ship with intent."
          align="center"
          gradient
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={reducedMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <TiltCard maxTilt={12} className="h-full" innerClassName="group h-full">
                  <div
                    className="glow-border relative h-full overflow-hidden rounded-2xl border border-border bg-surface-card/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-xl hover:shadow-cyan-500/5"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all group-hover:bg-cyan-500/20" />

                    <div className="relative">
                      <div
                        className="mb-5 flex items-center gap-4"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-cyan-500/15 to-transparent shadow-lg shadow-cyan-500/5 transition-all group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/15">
                          <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-[10px] tracking-widest text-text-muted">
                          0{i + 1}
                        </span>
                      </div>

                      <h3
                        className="font-display text-lg font-bold text-text-primary"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="mt-2.5 text-sm leading-relaxed text-text-secondary"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        {service.description}
                      </p>

                      <div
                        className="mt-5 flex flex-wrap gap-2"
                        style={{ transform: "translateZ(5px)" }}
                      >
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="mono">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
