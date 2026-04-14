"use client";

import { Canvas, type ThreeEvent, useFrame } from "@react-three/fiber";
import { Billboard, Float, Sparkles, Text } from "@react-three/drei";
import {
  Euler,
  MathUtils,
  Quaternion,
  Vector3,
  type Group
} from "three";
import { useRef, useState } from "react";
import { clubSegments } from "@/data/club-segments";
import { footballFaces } from "@/lib/truncated-icosahedron";

type FootballSceneProps = {
  activeIndex: number;
  onSelectSegment?: (segmentIndex: number) => void;
  priorityView?: boolean;
};

const pentagonSegmentMap = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
const frontVector = new Vector3(0, 0, 1);

const pentagonSnapRotations = footballFaces.slice(0, 12).map((face) => {
  const faceCenter = new Vector3(...face.center).normalize();
  const quaternion = new Quaternion().setFromUnitVectors(faceCenter, frontVector);
  const euler = new Euler().setFromQuaternion(quaternion, "XYZ");

  return [euler.x, euler.y, euler.z] as const;
});

type PointerCaptureTarget = EventTarget & {
  setPointerCapture: (pointerId: number) => void;
  releasePointerCapture: (pointerId: number) => void;
};

function SceneBall({ activeIndex, onSelectSegment }: FootballSceneProps) {
  const group = useRef<Group>(null);
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState<number | null>(null);
  const dragRotation = useRef({ x: 0, y: 0, z: 0 });
  const dragState = useRef({
    isDragging: false,
    pointerId: -1,
    lastX: 0,
    lastY: 0,
    totalMovement: 0
  });

  function handlePointerDown(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation();
    const captureTarget = event.target as PointerCaptureTarget | null;

    dragState.current = {
      isDragging: true,
      pointerId: event.pointerId,
      lastX: event.clientX,
      lastY: event.clientY,
      totalMovement: 0
    };
    captureTarget?.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ThreeEvent<PointerEvent>) {
    if (!dragState.current.isDragging || dragState.current.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.current.lastX;
    const deltaY = event.clientY - dragState.current.lastY;

    dragRotation.current.y += deltaX * 0.012;
    dragRotation.current.x += deltaY * 0.012;
    dragState.current.lastX = event.clientX;
    dragState.current.lastY = event.clientY;
    dragState.current.totalMovement += Math.abs(deltaX) + Math.abs(deltaY);
  }

  function handlePointerUp(event: ThreeEvent<PointerEvent>) {
    if (dragState.current.pointerId !== event.pointerId) {
      return;
    }

    const captureTarget = event.target as PointerCaptureTarget | null;
    dragState.current.isDragging = false;
    dragState.current.pointerId = -1;
    captureTarget?.releasePointerCapture(event.pointerId);
  }

  function handleFaceClick(event: ThreeEvent<MouseEvent>, faceIndex: number, segmentIndex: number) {
    event.stopPropagation();

    if (dragState.current.totalMovement > 10) {
      return;
    }

    const [baseX, baseY, baseZ] = clubSegments[segmentIndex]?.targetRotation ?? [0, 0, 0];
    const [snapX, snapY, snapZ] = pentagonSnapRotations[faceIndex] ?? [baseX, baseY, baseZ];

    dragRotation.current = {
      x: snapX - baseX,
      y: snapY - baseY,
      z: snapZ - baseZ
    };
    onSelectSegment?.(segmentIndex);
  }

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const [targetX, targetY, targetZ] = clubSegments[activeIndex]?.targetRotation ?? [0, 0, 0];

    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      targetX + dragRotation.current.x,
      4,
      delta
    );
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      targetY + dragRotation.current.y,
      4,
      delta
    );
    group.current.rotation.z = MathUtils.damp(
      group.current.rotation.z,
      targetZ + dragRotation.current.z,
      4,
      delta
    );
  });

  return (
    <group
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <Float speed={2} rotationIntensity={0} floatIntensity={0.38}>
        <mesh visible={false}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <mesh scale={0.976}>
          <sphereGeometry args={[1.78, 64, 64]} />
          <meshPhysicalMaterial
            color="#faf9f3"
            roughness={0.72}
            metalness={0.02}
            clearcoat={0.3}
            clearcoatRoughness={0.92}
          />
        </mesh>

        <mesh scale={0.95}>
          <sphereGeometry args={[1.78, 64, 64]} />
          <meshStandardMaterial color="#101413" roughness={0.96} metalness={0.02} />
        </mesh>

        {footballFaces.map((face, faceIndex) => {
          const segmentIndex =
            face.kind === "pentagon" ? pentagonSegmentMap[faceIndex] ?? -1 : -1;
          const isInteractive = segmentIndex >= 0;
          const isActive = segmentIndex === activeIndex;
          const isHovered = hoveredSegmentIndex === segmentIndex;
          const accent = isInteractive ? clubSegments[segmentIndex]?.accent : "#000000";
          const emissiveColor = isActive || isHovered
            ? accent
            : face.kind === "pentagon"
              ? "#000000"
              : "#101613";

          return (
            <group key={`${face.kind}-${faceIndex}`}>
              <mesh
                geometry={face.geometry}
                castShadow
                receiveShadow
                onClick={
                  isInteractive
                    ? (event) => handleFaceClick(event, faceIndex, segmentIndex)
                    : undefined
                }
                onPointerOver={
                  isInteractive
                    ? (event) => {
                        event.stopPropagation();
                        setHoveredSegmentIndex(segmentIndex);
                      }
                    : undefined
                }
                onPointerOut={
                  isInteractive
                    ? (event) => {
                        event.stopPropagation();
                        setHoveredSegmentIndex((current) =>
                          current === segmentIndex ? null : current
                        );
                      }
                    : undefined
                }
              >
                {face.kind === "pentagon" ? (
                  <meshPhysicalMaterial
                    color="#080808"
                    emissive={emissiveColor}
                    emissiveIntensity={isActive ? 0.24 : isHovered ? 0.14 : 0}
                    roughness={0.86}
                    metalness={0.01}
                    clearcoat={0.08}
                    clearcoatRoughness={1}
                    polygonOffset
                    polygonOffsetFactor={-2}
                    polygonOffsetUnits={-2}
                  />
                ) : (
                  <meshPhysicalMaterial
                    color="#f8f7f1"
                    emissive={emissiveColor}
                    emissiveIntensity={isActive ? 0.1 : 0}
                    roughness={0.6}
                    metalness={0.02}
                    clearcoat={0.16}
                    clearcoatRoughness={0.88}
                    polygonOffset
                    polygonOffsetFactor={-1}
                    polygonOffsetUnits={-1}
                  />
                )}
              </mesh>

              {isInteractive && face.kind === "pentagon" ? (
                <Billboard
                  position={[
                    face.center[0] * 1.025,
                    face.center[1] * 1.025,
                    face.center[2] * 1.025
                  ]}
                  follow
                >
                  <Text
                    color="#f3f7f4"
                    fontSize={0.11}
                    maxWidth={0.72}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.005}
                    outlineColor="#000000"
                  >
                    {clubSegments[segmentIndex]?.title}
                  </Text>
                </Billboard>
              ) : null}
            </group>
          );
        })}

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.45, 0]}>
          <circleGeometry args={[3.55, 64]} />
          <meshBasicMaterial color="#57d4ff" transparent opacity={0.08} />
        </mesh>
      </Float>
    </group>
  );
}

export function FootballScene({
  activeIndex,
  onSelectSegment,
  priorityView = false
}: FootballSceneProps) {
  return (
    <div
      className={`relative overflow-hidden ${
        priorityView ? "h-[30rem] sm:h-[38rem] lg:h-[48rem]" : "h-[26rem] lg:h-[42rem]"
      }`}
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_58%)]" />
      <div className="absolute inset-x-[18%] top-10 h-40 rounded-full bg-[radial-gradient(circle,_rgba(124,255,103,0.26),_transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-[8%] bottom-6 h-24 rounded-full bg-[radial-gradient(circle,_rgba(87,212,255,0.24),_transparent_72%)] blur-3xl" />
      <div className="absolute left-1/2 top-5 z-10 max-w-sm -translate-x-1/2 rounded-full border border-white/10 bg-black/18 px-4 py-2 text-center text-[11px] uppercase tracking-[0.34em] text-white/68 backdrop-blur">
        Central Match Core
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-black/18 px-4 py-2 text-center text-[10px] uppercase tracking-[0.32em] text-white/60 backdrop-blur">
        Drag to rotate or click black panels
      </div>
      <Canvas camera={{ position: [0, 0.1, 6.7], fov: 34 }} dpr={[1, 1.75]}>
        <color attach="background" args={["#04100d"]} />
        <fog attach="fog" args={["#04100d", 7, 14]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 6, 4]} intensity={2.1} color="#f7fff8" />
        <pointLight position={[-4, -1, 4]} intensity={18} distance={12} color="#57d4ff" />
        <pointLight position={[4, 3, -2]} intensity={14} distance={10} color="#7cff67" />
        <pointLight position={[0, 4, 3]} intensity={12} distance={8} color="#ffffff" />
        <Sparkles
          count={priorityView ? 85 : 60}
          scale={priorityView ? 10 : 9}
          size={2.2}
          speed={0.35}
          color="#d8fff0"
        />
        <SceneBall
          activeIndex={activeIndex}
          onSelectSegment={onSelectSegment}
        />
      </Canvas>
    </div>
  );
}
