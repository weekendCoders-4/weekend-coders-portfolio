import { motion } from "framer-motion";
import { teamMembers } from "../../data/team";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="// about us"
              index="01"
              title="Small team. Serious engineering."
              subtitle="We're four developers who decided weekends shouldn't only be for sleeping — so we started building things together. From simple websites to full-stack applications and automation systems, we bring engineering discipline without the layers of a traditional agency."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TiltCard maxTilt={16} innerClassName="group">
                  <div
                    className="glow-border rounded-2xl border border-border bg-surface-card/60 p-5 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-cyan-500/5"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${member.accent} text-sm font-bold text-black shadow-lg`}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {member.initials}
                    </div>
                    <p
                      className="font-display font-bold text-text-primary"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="mt-1 font-mono text-[10px] leading-tight text-text-muted"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
