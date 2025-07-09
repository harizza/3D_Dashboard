import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import HmiChiller from "../components/HMIChiller";
import HmiSensor from "../components/HMISensor";
import Loader from '../components/Loader';
import Chiller from '../models/chiller';

const AutoRotateUpdater = ({ controlsRef }) => {
  useFrame(() => {
    if (controlsRef.current && controlsRef.current.autoRotate) {
      controlsRef.current.update();
    }
  });
  return null;
};

const Home = () => {
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showChillerModal, setShowChillerModal] = useState(false);
  const [showSensorModal, setShowSensorModal] = useState(false);

  const cameraRef = useRef();
  const controlsRef = useRef();
  const idleTimerRef = useRef(null);

  const chillerScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];

  const enableAutoRotate = () => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 0.5;
      setIsAutoRotating(true);

      // Set kamera ke posisi awal "Sensor Ruangan"
      cameraRef.current.position.set(11.292, 50.871, -50);
      controlsRef.current.target.set(11.623, 33.392, -12.233);
      controlsRef.current.update();
    }
  };

  const disableAutoRotate = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
      setIsAutoRotating(false);
    }
  };

  const resetIdleTimer = () => {
    // 🔻 1. Matikan autoRotate saat ada interaksi
    disableAutoRotate();

    // 🔄 2. Reset timer
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      enableAutoRotate();
    }, 60000); // 10 detik idle → baru muter lagi
  };

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'wheel', 'touchstart', 'touchmove'];
    events.forEach(event => window.addEventListener(event, resetIdleTimer));
    resetIdleTimer(); // Start on mount

    return () => {
      events.forEach(event => window.removeEventListener(event, resetIdleTimer));
      clearTimeout(idleTimerRef.current);
    };
  }, []);

  const handleCameraMove = (target) => {
    if (!cameraRef.current || !controlsRef.current) return;

    let position = [0, 0, 50];
    let lookAt = [0, 0, 0];

    if (target === 'chiller') {
      position = [-9.617, 51.031, 0.121];
      lookAt = [-7.742, 50.168, -4.438];
    } else if (target === 'chiller2') {
      position = [8.919, 50.711, -11.037];
      lookAt = [7.191, 50.168, -6.122];
    } else if (target === 'sensor') {
      position = [2, 52, -10];
      lookAt = [-0.5, 50, -9];
    } else if (target === 'sensorruangan') {
      position = [11.292, 33.871, -34.391];
      lookAt = [11.623, 33.392, -12.233];
    }

    cameraRef.current.position.set(...position);
    cameraRef.current.lookAt(...lookAt);
    controlsRef.current.target.set(...lookAt);
    controlsRef.current.update();

    disableAutoRotate(); // stop autorotate
    resetIdleTimer(); // restart idle timer
    setShowMenu(false);
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setShowMenu(prev => !prev)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          🎛️ Menu Panel
        </button>
        {showMenu && (
          <div className="mt-2 bg-white rounded shadow p-3 space-y-2">
            <button onClick={() => handleCameraMove('chiller')} className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded">HMI Chiller 1</button>
            <button onClick={() => handleCameraMove('chiller2')} className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded">HMI Chiller 2</button>
            <button onClick={() => handleCameraMove('sensor')} className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded">HMI Sensor Flow</button>
            <button onClick={() => handleCameraMove('sensorruangan')} className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded">Sensor Ruangan</button>
          </div>
        )}
      </div>

      <Canvas
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000, position: [-50, 65, 39] }}
        onCreated={({ camera }) => {
          cameraRef.current = camera;
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <OrbitControls
            ref={controlsRef}
            makeDefault
            target={[10, 5, 0]} // default, akan ditimpa manual
            enablePan
            enableZoom
            enableRotate
            rotateSpeed={0.4}
            zoomSpeed={0.5}
            panSpeed={0.5}
            dampingFactor={0.1}
            enableDamping
            autoRotate={isAutoRotating}
          />
          <Chiller
            setShowChillerModal={setShowChillerModal}
            setShowSensorModal={setShowSensorModal}
            position={[0, 0, 0]}
            scale={chillerScale}
            rotation={[0, 0, 0]}
          />
          <AutoRotateUpdater controlsRef={controlsRef} />
        </Suspense>
      </Canvas>

      {showChillerModal && <HmiChiller onClose={() => setShowChillerModal(false)} />}
      {showSensorModal && <HmiSensor onClose={() => setShowSensorModal(false)} />}
    </section>
  );
};

export default Home;
