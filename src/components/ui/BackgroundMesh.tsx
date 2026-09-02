import { useReducedMotion } from "../../hooks/useReducedMotion";

export function BackgroundMesh() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className={`absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[100px] ${reducedMotion ? "" : "animate-float"}`}
      />
      <div
        className={`absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[100px] ${reducedMotion ? "" : "animate-float-delayed"}`}
      />
      <div
        className={`absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.05] blur-[100px] ${reducedMotion ? "" : "animate-float"}`}
      />
    </div>
  );
}
