import { useReducedMotion } from "../../hooks/useReducedMotion";

const items = [
  "React",
  "React Native",
  "Next.js",
  "JavaScript",
  "FastAPI",
  "Playwright",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Python",
  "Tailwind",
  "CI/CD",
  "Node.js",
  "OpenAI",
  "Selenium",
  "AWS",
];

interface MarqueeProps {
  reverse?: boolean;
  className?: string;
}

export function Marquee({ reverse = false, className = "" }: MarqueeProps) {
  const reducedMotion = useReducedMotion();
  const doubled = [...items, ...items];

  if (reducedMotion) {
    return (
      <div
        className={`flex flex-wrap justify-center gap-3 py-4 ${className}`}
        aria-hidden="true"
      >
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface-card/50 px-4 py-1.5 font-mono text-xs text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border-y border-border/50 bg-surface-elevated/40 py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 rounded-full border border-border/60 bg-surface-card/60 px-5 py-2 font-mono text-xs text-text-muted whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
