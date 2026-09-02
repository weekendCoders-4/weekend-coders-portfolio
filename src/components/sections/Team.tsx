import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { teamMembers } from "../../data/team";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const TeamScene = lazy(() =>
  import("../three/TeamScene").then((m) => ({ default: m.TeamScene }))
);

export function Team() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(167,139,250,0.06)_0%,_transparent_60%)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="// the team"
          index="05"
          title="Meet the Weekend Coders"
          subtitle="Four developers, four specialties, one shared obsession with shipping good software."
          align="center"
        />

        <div className="mb-12">
          <Suspense fallback={<div className="mx-auto h-64 w-full max-w-md animate-pulse rounded-2xl bg-white/5" />}>
            <TeamScene />
          </Suspense>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <TiltCard maxTilt={14} className="h-full" innerClassName="group h-full">
                <article
                  className="glow-border flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card/60 backdrop-blur-sm"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${member.accent}`}
                    style={{ transform: "translateZ(5px)" }}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <div
                      className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-2xl font-bold text-black shadow-xl transition-transform duration-300 group-hover:scale-105`}
                      style={{ transform: "translateZ(40px)" }}
                    >
                      {member.initials}
                    </div>

                    <div className="text-center" style={{ transform: "translateZ(25px)" }}>
                      <h3 className="font-display text-lg font-bold text-text-primary">
                        {member.name}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] tracking-wide text-cyan-400/90">
                        {member.role}
                      </p>
                    </div>

                    <blockquote
                      className="mt-4 flex-1 text-center text-sm leading-relaxed text-text-secondary"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      &ldquo;{member.bio}&rdquo;
                    </blockquote>

                    <div
                      className="mt-5 flex flex-wrap justify-center gap-1.5"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {member.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div
                      className="mt-5 flex justify-center gap-4 border-t border-border/50 pt-5"
                      style={{ transform: "translateZ(5px)" }}
                    >
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-border-hover hover:text-text-primary"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-border-hover hover:text-text-primary"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
