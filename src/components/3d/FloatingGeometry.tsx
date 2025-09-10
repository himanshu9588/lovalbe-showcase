import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'octahedron' | 'torus';
  color?: string;
  scale?: number;
  speed?: number;
}

export const FloatingGeometry = ({ 
  position, 
  geometry, 
  color = "#8B5CF6", 
  scale = 1,
  speed = 1 
}: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.8, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.8]} />;
      case 'torus':
        return <torusGeometry args={[0.6, 0.3, 16, 100]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};