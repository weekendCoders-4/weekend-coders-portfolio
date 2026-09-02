import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface MousePosition {
  x: number;
  y: number;
}

function WireframeShapes({ mouse }: { mouse: MousePosition }) {
  const groupRef = useRef<Group>(null);
  const torusRef = useRef<Mesh>(null);
  const icoRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += (mouse.y * 0.4 - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.y += (mouse.x * 0.4 - groupRef.current.rotation.y) * 0.02;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.z = t * 0.1;
    }

    if (icoRef.current) {
      icoRef.current.rotation.y = -t * 0.2;
      icoRef.current.rotation.x = t * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={torusRef} position={[-1.8, 0.5, -2]}>
          <torusKnotGeometry args={[0.9, 0.28, 160, 24]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.55} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh ref={icoRef} position={[2.2, -0.3, -1.5]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.45} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0.5, 1.2, -3]}>
          <octahedronGeometry args={[0.7]} />
          <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2.5, -1, -2.5]} rotation={[0.5, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>

      <mesh position={[3, 1.5, -4]} rotation={[1, 0.5, 0.2]}>
        <torusGeometry args={[0.6, 0.15, 16, 48]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  return (
    <Stars
      radius={80}
      depth={60}
      count={3000}
      factor={3}
      saturation={0}
      fade
      speed={0.4}
    />
  );
}

function Scene({ mouse }: { mouse: MousePosition }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#22d3ee" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#a78bfa" />
      <ParticleField />
      <WireframeShapes mouse={mouse} />
    </>
  );
}

function HeroCanvas({ mouse }: { mouse: MousePosition }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene mouse={mouse} />
    </Canvas>
  );
}

export function HeroScene() {
  const reducedMotion = useReducedMotion();
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface" />
      <Suspense fallback={null}>
        <HeroCanvas mouse={mouse} />
      </Suspense>
    </div>
  );
}
