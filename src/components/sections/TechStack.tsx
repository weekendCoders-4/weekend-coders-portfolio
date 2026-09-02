import { Marquee } from "../ui/Marquee";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function TechStack() {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="// tech stack"
          index="06"
          title="Our toolbox"
          subtitle="Languages, frameworks, and tools we actually use — not just logo wallpaper."
          align="center"
        />
      </Container>

      <div className="space-y-3">
        <Marquee />
        <Marquee reverse />
      </div>
    </section>
  );
}
