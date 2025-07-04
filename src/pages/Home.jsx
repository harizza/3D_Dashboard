import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import HmiChiller from "../components/HMIChiller"; 
import Loader from '../components/Loader';
import Chiller from '../models/chiller';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [showChillerModal, setShowChillerModal] = useState(false);

  const adjustChillerForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [1, -40, 60];
    let rotation = [0.1, 19.5, 0];
    
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; // Scale down for mobile
    } else {
      screenScale = [1, 1, 1]; // Default scale for larger screens
    }

    return [screenScale, screenPosition, rotation];
  };

  const [chillerScale, chillerPosition, chillerRotation] = adjustChillerForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen relative`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 100] }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          {/* OrbitControls: Ini yang bikin interaktif */}
          <OrbitControls 
            target={[10, 5, 0]}
            makeDefault
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            rotateSpeed={0.4}       // ← makin kecil, makin lambat
            zoomSpeed={0.5}         // ← zoom lebih pelan
            panSpeed={0.5}          // ← geser kiri-kanan atas-bawah lebih lambat
            dampingFactor={0.1}     // ← smoothing efek (kayak easing)
            enableDamping={true}    // ← wajib buat dampingFactor bisa jalan
          />
          
          {/* 3D Model */}
          <Chiller
            setShowChillerModal={setShowChillerModal}
            position={[0, 0, 0]}
            scale={chillerScale}
            rotation={chillerRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
      {showChillerModal && <HmiChiller onClose={() => setShowChillerModal(false)} />}
    </section>
  );
};

export default Home;