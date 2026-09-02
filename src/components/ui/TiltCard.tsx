import type { ReactNode } from "react";
import { useTilt3D } from "../../hooks/useTilt3D";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxTilt?: number;
  glow?: boolean;
}

export function TiltCard({
  children,
  className = "",
  innerClassName = "",
  maxTilt = 12,
  glow = true,
}: TiltCardProps) {
  const { ref, tilt, perspective, handleMove, handleLeave, style, reducedMotion } =
    useTilt3D({ maxTilt });

  return (
    <div
      className={className}
      style={{ perspective }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={ref}
        className={`relative transition-transform duration-200 ease-out will-change-transform ${innerClassName}`}
        style={style}
      >
        {children}

        {glow && !reducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.rotateY * 2}% ${50 - tilt.rotateX * 2}%, rgba(34,211,238,0.12), transparent 60%)`,
              transform: "translateZ(30px)",
            }}
          />
        )}
      </div>
    </div>
  );
}
