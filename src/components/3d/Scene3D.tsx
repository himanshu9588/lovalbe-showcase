import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
}

export const Scene3D = ({ 
  children, 
  enableControls = false, 
  cameraPosition = [0, 0, 5] 
}: Scene3DProps) => {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={0.5} />
      
      {enableControls && <OrbitControls enableZoom={false} />}
      
      <Environment preset="night" />
      
      {children}
      
      {/* Default floating geometries */}
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <FloatingGeometry 
          position={[-3, 2, 0]} 
          geometry="octahedron" 
          color="#8B5CF6" 
          scale={0.5}
        />
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <FloatingGeometry 
          position={[3, -1, -2]} 
          geometry="torus" 
          color="#00D4FF" 
          scale={0.3}
        />
      </Float>
      
      <Float speed={0.8} rotationIntensity={1} floatIntensity={3}>
        <FloatingGeometry 
          position={[0, -3, -1]} 
          geometry="sphere" 
          color="#8B5CF6" 
          scale={0.4}
        />
      </Float>
    </Canvas>
  );
};