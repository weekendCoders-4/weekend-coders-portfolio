import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { ProjectPreview } from "../ui/ProjectPreview";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Work() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="work" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="// portfolio"
          index="02"
          title="Things we've built"
          subtitle="A peek at what we ship on weekends — each project built with the same care we'd put into yours."
          align="center"
        />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                className={isFeatured ? "md:col-span-2" : ""}
                initial={reducedMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard
                  maxTilt={10}
                  className="h-full"
                  innerClassName="group h-full"
                >
                  <article
                    className="glow-border flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card/60 backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-500/[0.06]"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
                        isFeatured ? "h-56 lg:h-72" : "h-48"
                      }`}
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <ProjectPreview
                        type={project.preview}
                        number={project.number}
                        className="h-full"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                    </div>

                    <div
                      className="flex flex-1 flex-col p-6"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-mono text-[10px] tracking-widest text-cyan-400/70 uppercase">
                            Project {project.number}
                          </span>
                          <h3 className="mt-1 font-display text-xl font-bold text-text-primary sm:text-2xl">
                            {project.name}
                          </h3>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated/80 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                          <ArrowUpRight className="h-4 w-4 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                        </div>
                      </div>

                      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="mono">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
