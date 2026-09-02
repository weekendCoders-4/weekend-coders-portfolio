import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { TiltCard } from "../ui/TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const HeroScene = lazy(() =>
  import("../three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

const terminalLines = [
  { text: "$ weekend-coders init project", type: "command" as const },
  { text: "", type: "blank" as const },
  { text: "✓ Idea received", type: "success" as const },
  { text: "✓ Architecture designed", type: "success" as const },
  { text: "✓ Code written", type: "success" as const },
  { text: "✓ Tests passing", type: "success" as const },
  { text: "✓ Deployment ready", type: "success" as const },
  { text: "", type: "blank" as const },
  { text: "STATUS: SHIPPED 🚀", type: "status" as const },
];

function TerminalWindow() {
  const reducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(
    reducedMotion ? terminalLines.length : 0
  );

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(terminalLines.length);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= terminalLines.length) clearInterval(interval);
    }, 350);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <TiltCard maxTilt={18} className="w-full max-w-lg" innerClassName="group">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-emerald-500/20 blur-3xl"
          style={{ transform: "translateZ(-40px)" }}
        />

        <div
          className="scanlines relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl shadow-cyan-500/10"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-[11px] text-text-muted">
              ~/weekend-coders
            </span>
          </div>

          <div className="space-y-1 p-5 font-mono text-[13px] leading-relaxed">
            {terminalLines.slice(0, visibleLines).map((line, i) => {
              if (line.type === "blank") return <div key={i} className="h-2" />;

              const colorClass =
                line.type === "command"
                  ? "text-cyan-400"
                  : line.type === "success"
                    ? "text-emerald-400"
                    : "text-purple-300 font-semibold";

              return (
                <motion.div
                  key={i}
                  initial={reducedMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={colorClass}
                >
                  {line.text}
                </motion.div>
              );
            })}
            {visibleLines < terminalLines.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400" />
            )}
          </div>
        </div>

        <motion.div
          className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 font-mono text-xs text-emerald-400"
          style={{ transform: "translateZ(30px)" }}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Currently accepting projects
        </motion.div>
      </motion.div>
    </TiltCard>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const headlineWords = ["Four", "coders.", "One", "team.", "Real", "software."];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div style={{ transformStyle: "preserve-3d" }}>
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-sm"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-xs tracking-wide text-cyan-400/90">
                // WE BUILD THINGS ON WEEKENDS
              </span>
            </motion.div>

            <h1
              className="font-display text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className={`mr-[0.25em] inline-block ${
                    word === "software." ? "gradient-text-animated" : ""
                  }`}
                  initial={reducedMotion ? false : { opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-7 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We turn ideas into production-ready websites, applications,
              automation tools and software —{" "}
              <span className="text-text-primary">without the agency overhead.</span>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Button href="#contact" variant="primary">
                Start a Project →
              </Button>
              <Button href="#work" variant="secondary">
                See Our Work ↓
              </Button>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TerminalWindow />
          </div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="#stats"
          aria-label="Scroll down"
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 pt-2 backdrop-blur-sm transition-colors hover:border-cyan-500/40"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-text-muted" />
        </a>
      </motion.div>
    </section>
  );
}
