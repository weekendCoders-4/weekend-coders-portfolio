import { useCallback, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseTilt3DOptions {
  maxTilt?: number;
  scale?: number;
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useTilt3D({ maxTilt = 14, scale = 1.02 }: UseTilt3DOptions = {}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setTilt({
        rotateX: -y * maxTilt * 2,
        rotateY: x * maxTilt * 2,
        scale,
      });
    },
    [maxTilt, scale, reducedMotion]
  );

  const handleLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const style = reducedMotion
    ? {}
    : {
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transformStyle: "preserve-3d" as const,
      };

  return {
    ref,
    tilt,
    perspective: 1000,
    handleMove,
    handleLeave,
    style,
    reducedMotion,
  };
}
