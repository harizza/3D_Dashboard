import React, { use } from 'react';
import { Canvas } from '@react-three/fiber';
import {useState, Suspense} from 'react';
import Loader from '../components/Loader';
import Chiller from '../models/chiller';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustChillerForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; // Scale down for mobile
    } else {
      screenScale = [1, 1, 1]; // Default scale for larger screens
    }

    return [screenScale, screenPosition, rotation];
  }

  const [chillerScale, chillerPosition, chillerRotation] = adjustChillerForScreenSize();

  return (
    <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            POPUP
        </div> */}

        <Canvas 
          className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{near: 0.1, far: 1000}}
        >

          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1, 1, 1]} intensity={3}/>
            <ambientLight intensity={2}/>
            <pointLight />
            <spotLight />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

            <Chiller
              position ={chillerPosition}
              scale={chillerScale}
              rotation= {chillerRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home