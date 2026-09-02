import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const TEAM_COLORS = ["#22d3ee", "#34d399", "#a78bfa", "#f59e0b"];

function TeamOrb({ color, angle, radius }: { color: string; angle: number; radius: number }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.4 + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.3;
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.8} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function TeamVisualization() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.7} />
        </mesh>
      </Float>

      {TEAM_COLORS.map((color, i) => (
        <TeamOrb
          key={color}
          color={color}
          angle={(i / TEAM_COLORS.length) * Math.PI * 2}
          radius={1.4}
        />
      ))}

      {/* Connection ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.4, 0.01, 8, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export function TeamScene() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className="mx-auto h-64 w-full max-w-md" aria-hidden="true">
      <Suspense fallback={<div className="h-full w-full animate-pulse rounded-2xl bg-white/5" />}>
        <Canvas
          camera={{ position: [0, 1.5, 4], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.4} color="#22d3ee" />
          <TeamVisualization />
        </Canvas>
      </Suspense>
    </div>
  );
}
