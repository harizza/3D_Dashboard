import * as THREE from 'three';
import { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { a } from "@react-spring/three";
import { Text } from '@react-three/drei';

import HmiChiller from "../components/HMIChiller";
import HmiSensor from "../components/HMISensor";
import useLineSensorData from "../hooks/useLineSensorData";
import FullAllSystem from "../assets/3d/FullAllSystem.glb";

const Chiller = ({ setShowChillerModal, setShowSensorModal, ...props }) => {
  const chillerRef = useRef();
  const { nodes, materials } = useGLTF(FullAllSystem);
  const { suhu, rh, pressure } = useLineSensorData();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState([0, 0, 0]);
  const [activeTooltip, setActiveTooltip] = useState({
    visible: false,
    text: '',
    position: [0, 0, 0],
  });
  return (
    <a.group ref={chillerRef} {...props}>
      <group name="Scene">
        <mesh
          name="Pipe"
          geometry={nodes.Pipe.geometry}
          material={nodes.Pipe.material}
          position={[-5.268, 49.336, -5.315]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Pipe001"
          geometry={nodes.Pipe001.geometry}
          material={nodes.Pipe001.material}
          position={[-5.268, 48.96, -5.315]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Pipe003"
          geometry={nodes.Pipe003.geometry}
          material={nodes.Pipe003.material}
          position={[-5.592, 50.173, -5.315]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Pipe002"
          geometry={nodes.Pipe002.geometry}
          material={nodes.Pipe002.material}
          position={[4.864, 49.336, -5.315]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Pipe004"
          geometry={nodes.Pipe004.geometry}
          material={nodes.Pipe004.material}
          position={[4.864, 48.96, -5.315]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Pipe005"
          geometry={nodes.Pipe005.geometry}
          material={nodes.Pipe005.material}
          position={[5.189, 50.173, -5.315]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.144}
        />
        <mesh
          name="Holder004"
          geometry={nodes.Holder004.geometry}
          material={nodes.Holder004.material}
          position={[6.695, 48.681, 4.439]}
          scale={[0.364, 0.156, 0.334]}
        />
        <mesh
          name="Cooling_Tower"
          geometry={nodes.Cooling_Tower.geometry}
          material={materials['Material.046']}
          position={[8.537, 49.825, 4.439]}
          scale={0.164}>
          <mesh
            name="Body003"
            geometry={nodes.Body003.geometry}
            material={materials['Material.047']}
            position={[0, 10.828, 0]}
            scale={9.815}>
            <mesh
              name="Cylinder007"
              geometry={nodes.Cylinder007.geometry}
              material={nodes.Cylinder007.material}
              position={[0, 0.788, 0]}
              scale={0.07}>
              <mesh
                name="Poros003"
                geometry={nodes.Poros003.geometry}
                material={nodes.Poros003.material}
                position={[0, 0.229, 0]}
                scale={[-0.395, -1.981, -0.395]}>
                <mesh
                  name="Rotator"
                  geometry={nodes.Rotator.geometry}
                  material={nodes.Rotator.material}
                  position={[0, -0.906, 0]}
                  rotation={[-Math.PI, 0.778, -Math.PI]}
                  scale={[-10.567, -0.169, -10.567]}>
                  <mesh
                    name="Fan_Lid"
                    geometry={nodes.Fan_Lid.geometry}
                    material={nodes.Fan_Lid.material}
                    rotation={[0, Math.PI / 4, -1.571]}
                    scale={[1.834, 0.147, 0.147]}
                  />
                </mesh>
              </mesh>
            </mesh>
            <mesh
              name="Mesh"
              geometry={nodes.Mesh.geometry}
              material={nodes.Mesh.material}
              position={[0, 1.004, 0]}
              scale={1.502}
            />
            <mesh
              name="Motor_Holder"
              geometry={nodes.Motor_Holder.geometry}
              material={nodes.Motor_Holder.material}
              position={[0, 1.237, 0.982]}
              scale={[0.161, 0.24, 0.017]}>
              <group
                name="Motor002"
                position={[0, 0, -7.58]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.95, 13.423, 1.419]}>
                <mesh
                  name="Holder002"
                  geometry={nodes.Holder002.geometry}
                  material={nodes.Holder002.material}
                  position={[-0.4, 0, 0]}
                  scale={[0.082, 0.085, 0.085]}>
                  <mesh
                    name="Body002"
                    geometry={nodes.Body002.geometry}
                    material={materials['Material.005']}
                    position={[4.909, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[4.911, 6.384, 4.911]}>
                    <mesh
                      name="Controller002"
                      geometry={nodes.Controller002.geometry}
                      material={nodes.Controller002.material}
                      position={[-1.268, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.292, 0.271, 0.409]}
                    />
                    <mesh
                      name="Cup002"
                      geometry={nodes.Cup002.geometry}
                      material={nodes.Cup002.material}
                      position={[0, 1.27, 0]}
                      scale={[0.397, 0.317, 0.397]}
                    />
                    <mesh
                      name="Electric002"
                      geometry={nodes.Electric002.geometry}
                      material={nodes.Electric002.material}
                      position={[-1.079, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.198, 0.271, 0.33]}
                    />
                    <mesh
                      name="Poros002"
                      geometry={nodes.Poros002.geometry}
                      material={nodes.Poros002.material}
                      position={[0, 0.237, 0]}
                      scale={[0.131, 1.523, 0.131]}>
                      <mesh
                        name="Fan002"
                        geometry={nodes.Fan002.geometry}
                        material={nodes.Fan002.material}
                        position={[0, -0.964, 0]}
                        scale={[2.59, 0.177, 2.59]}
                      />
                    </mesh>
                    <mesh
                      name="Sink002"
                      geometry={nodes.Sink002.geometry}
                      material={materials['Material.007']}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.746, 1.571, 0.01]}
                    />
                  </mesh>
                  <mesh
                    name="Cover002"
                    geometry={nodes.Cover002.geometry}
                    material={materials['Material.007']}
                    position={[-1.835, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[5.776, 4.909, 5.776]}
                  />
                  <mesh
                    name="Hanger002"
                    geometry={nodes.Hanger002.geometry}
                    material={nodes.Hanger002.material}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[11.804, 12.259, 11.804]}
                  />
                </mesh>
              </group>
            </mesh>
          </mesh>
          <mesh
            name="Lower_Cover"
            geometry={nodes.Lower_Cover.geometry}
            material={materials['Material.045']}
            scale={[11.449, 5.791, 11.449]}
          />
          <mesh
            name="Lower_Filter"
            geometry={nodes.Lower_Filter.geometry}
            material={materials['Material.001']}
            position={[0, 10.828, 0]}
            scale={9.815}
          />
        </mesh>
        <mesh
          name="Cooling_Tower001"
          geometry={nodes.Cooling_Tower001.geometry}
          material={materials['Material.046']}
          position={[4.852, 49.825, 4.439]}
          scale={0.164}>
          <mesh
            name="Body004"
            geometry={nodes.Body004.geometry}
            material={materials['Material.047']}
            position={[0, 10.828, 0]}
            scale={9.815}>
            <mesh
              name="Cylinder008"
              geometry={nodes.Cylinder008.geometry}
              material={nodes.Cylinder008.material}
              position={[0, 0.788, 0]}
              scale={0.07}>
              <mesh
                name="Poros004"
                geometry={nodes.Poros004.geometry}
                material={nodes.Poros004.material}
                position={[0, 0.229, 0]}
                scale={[-0.395, -1.981, -0.395]}>
                <mesh
                  name="Rotator001"
                  geometry={nodes.Rotator001.geometry}
                  material={nodes.Rotator001.material}
                  position={[0, -0.906, 0]}
                  rotation={[-Math.PI, 0.778, -Math.PI]}
                  scale={[-10.567, -0.169, -10.567]}>
                  <mesh
                    name="Fan_Lid001"
                    geometry={nodes.Fan_Lid001.geometry}
                    material={nodes.Fan_Lid001.material}
                    rotation={[0, Math.PI / 4, -1.571]}
                    scale={[1.834, 0.147, 0.147]}
                  />
                </mesh>
              </mesh>
            </mesh>
            <mesh
              name="Mesh001"
              geometry={nodes.Mesh001.geometry}
              material={nodes.Mesh001.material}
              position={[0, 1.004, 0]}
              scale={1.502}
            />
            <mesh
              name="Motor_Holder001"
              geometry={nodes.Motor_Holder001.geometry}
              material={nodes.Motor_Holder001.material}
              position={[0, 1.237, 0.982]}
              scale={[0.161, 0.24, 0.017]}>
              <group
                name="Motor003"
                position={[0, 0, -7.58]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.95, 13.423, 1.419]}>
                <mesh
                  name="Holder003"
                  geometry={nodes.Holder003.geometry}
                  material={nodes.Holder003.material}
                  position={[-0.4, 0, 0]}
                  scale={[0.082, 0.085, 0.085]}>
                  <mesh
                    name="Body005"
                    geometry={nodes.Body005.geometry}
                    material={materials['Material.005']}
                    position={[4.909, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[4.911, 6.384, 4.911]}>
                    <mesh
                      name="Controller003"
                      geometry={nodes.Controller003.geometry}
                      material={nodes.Controller003.material}
                      position={[-1.268, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.292, 0.271, 0.409]}
                    />
                    <mesh
                      name="Cup003"
                      geometry={nodes.Cup003.geometry}
                      material={nodes.Cup003.material}
                      position={[0, 1.27, 0]}
                      scale={[0.397, 0.317, 0.397]}
                    />
                    <mesh
                      name="Electric003"
                      geometry={nodes.Electric003.geometry}
                      material={nodes.Electric003.material}
                      position={[-1.079, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.198, 0.271, 0.33]}
                    />
                    <mesh
                      name="Poros005"
                      geometry={nodes.Poros005.geometry}
                      material={nodes.Poros005.material}
                      position={[0, 0.237, 0]}
                      scale={[0.131, 1.523, 0.131]}>
                      <mesh
                        name="Fan003"
                        geometry={nodes.Fan003.geometry}
                        material={nodes.Fan003.material}
                        position={[0, -0.964, 0]}
                        scale={[2.59, 0.177, 2.59]}
                      />
                    </mesh>
                    <mesh
                      name="Sink003"
                      geometry={nodes.Sink003.geometry}
                      material={materials['Material.007']}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.746, 1.571, 0.01]}
                    />
                  </mesh>
                  <mesh
                    name="Cover003"
                    geometry={nodes.Cover003.geometry}
                    material={materials['Material.007']}
                    position={[-1.835, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[5.776, 4.909, 5.776]}
                  />
                  <mesh
                    name="Hanger003"
                    geometry={nodes.Hanger003.geometry}
                    material={nodes.Hanger003.material}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[11.804, 12.259, 11.804]}
                  />
                </mesh>
              </group>
            </mesh>
          </mesh>
          <mesh
            name="Lower_Cover001"
            geometry={nodes.Lower_Cover001.geometry}
            material={materials['Material.045']}
            scale={[11.449, 5.791, 11.449]}
          />
          <mesh
            name="Lower_Filter001"
            geometry={nodes.Lower_Filter001.geometry}
            material={materials['Material.001']}
            position={[0, 10.828, 0]}
            scale={9.815}
          />
        </mesh>
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials['Material.045']}
          position={[6.695, 51.473, 4.439]}
          scale={[3.626, 0.69, 1.761]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setActiveTooltip({
              visible: true,
              text: 'Cooling Tower 1',
              position: e.point.toArray(),
            });
          }}
          onPointerOut={() => {
            setActiveTooltip((prev) => ({ ...prev, visible: false }));
          }}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials['Material.045']}
          position={[6.695, 51.473, 4.439]}
          scale={[3.626, 0.69, 1.761]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials['Material.048']}
          position={[10.325, 51.835, 4.439]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.332, 0.345, 0.718]}
        />
        <mesh
          name="BézierCurve"
          geometry={nodes.BézierCurve.geometry}
          material={nodes.BézierCurve.material}
          position={[8.537, 53.478, 5.617]}
        />
        <mesh
          name="BézierCurve001"
          geometry={nodes.BézierCurve001.geometry}
          material={nodes.BézierCurve001.material}
          position={[4.851, 53.478, 5.617]}
        />
        <mesh
          name="Holder006"
          geometry={nodes.Holder006.geometry}
          material={nodes.Holder006.material}
          position={[-5.527, 48.681, 4.439]}
          scale={[0.364, 0.156, 0.334]}
        />
        <mesh
          name="Cooling_Tower002"
          geometry={nodes.Cooling_Tower002.geometry}
          material={materials['Material.046']}
          position={[-3.685, 49.825, 4.439]}
          scale={0.164}>
          <mesh
            name="Body006"
            geometry={nodes.Body006.geometry}
            material={materials['Material.047']}
            position={[0, 10.828, 0]}
            scale={9.815}>
            <mesh
              name="Cylinder066"
              geometry={nodes.Cylinder066.geometry}
              material={nodes.Cylinder066.material}
              position={[0, 0.788, 0]}
              scale={0.07}>
              <mesh
                name="Poros006"
                geometry={nodes.Poros006.geometry}
                material={nodes.Poros006.material}
                position={[0, 0.229, 0]}
                scale={[-0.395, -1.981, -0.395]}>
                <mesh
                  name="Rotator002"
                  geometry={nodes.Rotator002.geometry}
                  material={nodes.Rotator002.material}
                  position={[0, -0.906, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={[-10.567, -0.169, -10.567]}>
                  <mesh
                    name="Fan_Lid002"
                    geometry={nodes.Fan_Lid002.geometry}
                    material={nodes.Fan_Lid002.material}
                    rotation={[0, Math.PI / 4, -1.571]}
                    scale={[1.834, 0.147, 0.147]}
                  />
                </mesh>
              </mesh>
            </mesh>
            <mesh
              name="Mesh002"
              geometry={nodes.Mesh002.geometry}
              material={nodes.Mesh002.material}
              position={[0, 1.004, 0]}
              scale={1.502}
            />
            <mesh
              name="Motor_Holder002"
              geometry={nodes.Motor_Holder002.geometry}
              material={nodes.Motor_Holder002.material}
              position={[0, 1.237, 0.982]}
              scale={[0.161, 0.24, 0.017]}>
              <group
                name="Motor004"
                position={[0, 0, -7.58]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.95, 13.423, 1.419]}>
                <mesh
                  name="Holder007"
                  geometry={nodes.Holder007.geometry}
                  material={nodes.Holder007.material}
                  position={[-0.4, 0, 0]}
                  scale={[0.082, 0.085, 0.085]}>
                  <mesh
                    name="Body007"
                    geometry={nodes.Body007.geometry}
                    material={materials['Material.005']}
                    position={[4.909, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[4.911, 6.384, 4.911]}>
                    <mesh
                      name="Controller004"
                      geometry={nodes.Controller004.geometry}
                      material={nodes.Controller004.material}
                      position={[-1.268, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.292, 0.271, 0.409]}
                    />
                    <mesh
                      name="Cup004"
                      geometry={nodes.Cup004.geometry}
                      material={nodes.Cup004.material}
                      position={[0, 1.27, 0]}
                      scale={[0.397, 0.317, 0.397]}
                    />
                    <mesh
                      name="Electric004"
                      geometry={nodes.Electric004.geometry}
                      material={nodes.Electric004.material}
                      position={[-1.079, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.198, 0.271, 0.33]}
                    />
                    <mesh
                      name="Poros007"
                      geometry={nodes.Poros007.geometry}
                      material={nodes.Poros007.material}
                      position={[0, 0.237, 0]}
                      scale={[0.131, 1.523, 0.131]}>
                      <mesh
                        name="Fan004"
                        geometry={nodes.Fan004.geometry}
                        material={nodes.Fan004.material}
                        position={[0, -0.964, 0]}
                        scale={[2.59, 0.177, 2.59]}
                      />
                    </mesh>
                    <mesh
                      name="Sink004"
                      geometry={nodes.Sink004.geometry}
                      material={materials['Material.007']}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.746, 1.571, 0.01]}
                    />
                  </mesh>
                  <mesh
                    name="Cover004"
                    geometry={nodes.Cover004.geometry}
                    material={materials['Material.007']}
                    position={[-1.835, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[5.776, 4.909, 5.776]}
                  />
                  <mesh
                    name="Hanger004"
                    geometry={nodes.Hanger004.geometry}
                    material={nodes.Hanger004.material}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[11.804, 12.259, 11.804]}
                  />
                </mesh>
              </group>
            </mesh>
          </mesh>
          <mesh
            name="Lower_Cover002"
            geometry={nodes.Lower_Cover002.geometry}
            material={materials['Material.045']}
            scale={[11.449, 5.791, 11.449]}
          />
          <mesh
            name="Lower_Filter002"
            geometry={nodes.Lower_Filter002.geometry}
            material={materials['Material.001']}
            position={[0, 10.828, 0]}
            scale={9.815}
          />
        </mesh>
        <mesh
          name="Cooling_Tower003"
          geometry={nodes.Cooling_Tower003.geometry}
          material={materials['Material.046']}
          position={[-7.37, 49.825, 4.439]}
          scale={0.164}>
          <mesh
            name="Body008"
            geometry={nodes.Body008.geometry}
            material={materials['Material.047']}
            position={[0, 10.828, 0]}
            scale={9.815}>
            <mesh
              name="Cylinder067"
              geometry={nodes.Cylinder067.geometry}
              material={nodes.Cylinder067.material}
              position={[0, 0.788, 0]}
              scale={0.07}>
              <mesh
                name="Poros008"
                geometry={nodes.Poros008.geometry}
                material={nodes.Poros008.material}
                position={[0, 0.229, 0]}
                scale={[-0.395, -1.981, -0.395]}>
                <mesh
                  name="Rotator003"
                  geometry={nodes.Rotator003.geometry}
                  material={nodes.Rotator003.material}
                  position={[0, -0.906, 0]}
                  rotation={[-Math.PI, 0.778, -Math.PI]}
                  scale={[-10.567, -0.169, -10.567]}>
                  <mesh
                    name="Fan_Lid003"
                    geometry={nodes.Fan_Lid003.geometry}
                    material={nodes.Fan_Lid003.material}
                    rotation={[0, Math.PI / 4, -1.571]}
                    scale={[1.834, 0.147, 0.147]}
                  />
                </mesh>
              </mesh>
            </mesh>
            <mesh
              name="Mesh003"
              geometry={nodes.Mesh003.geometry}
              material={nodes.Mesh003.material}
              position={[0, 1.004, 0]}
              scale={1.502}
            />
            <mesh
              name="Motor_Holder003"
              geometry={nodes.Motor_Holder003.geometry}
              material={nodes.Motor_Holder003.material}
              position={[0, 1.237, 0.982]}
              scale={[0.161, 0.24, 0.017]}>
              <group
                name="Motor005"
                position={[0, 0, -7.58]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.95, 13.423, 1.419]}>
                <mesh
                  name="Holder008"
                  geometry={nodes.Holder008.geometry}
                  material={nodes.Holder008.material}
                  position={[-0.4, 0, 0]}
                  scale={[0.082, 0.085, 0.085]}>
                  <mesh
                    name="Body009"
                    geometry={nodes.Body009.geometry}
                    material={materials['Material.005']}
                    position={[4.909, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[4.911, 6.384, 4.911]}>
                    <mesh
                      name="Controller005"
                      geometry={nodes.Controller005.geometry}
                      material={nodes.Controller005.material}
                      position={[-1.268, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.292, 0.271, 0.409]}
                    />
                    <mesh
                      name="Cup005"
                      geometry={nodes.Cup005.geometry}
                      material={nodes.Cup005.material}
                      position={[0, 1.27, 0]}
                      scale={[0.397, 0.317, 0.397]}
                    />
                    <mesh
                      name="Electric005"
                      geometry={nodes.Electric005.geometry}
                      material={nodes.Electric005.material}
                      position={[-1.079, 0.569, 0]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.198, 0.271, 0.33]}
                    />
                    <mesh
                      name="Poros009"
                      geometry={nodes.Poros009.geometry}
                      material={nodes.Poros009.material}
                      position={[0, 0.237, 0]}
                      scale={[0.131, 1.523, 0.131]}>
                      <mesh
                        name="Fan005"
                        geometry={nodes.Fan005.geometry}
                        material={nodes.Fan005.material}
                        position={[0, -0.964, 0]}
                        scale={[2.59, 0.177, 2.59]}
                      />
                    </mesh>
                    <mesh
                      name="Sink005"
                      geometry={nodes.Sink005.geometry}
                      material={materials['Material.007']}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={[0.746, 1.571, 0.01]}
                    />
                  </mesh>
                  <mesh
                    name="Cover005"
                    geometry={nodes.Cover005.geometry}
                    material={materials['Material.007']}
                    position={[-1.835, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[5.776, 4.909, 5.776]}
                  />
                  <mesh
                    name="Hanger005"
                    geometry={nodes.Hanger005.geometry}
                    material={nodes.Hanger005.material}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[11.804, 12.259, 11.804]}
                  />
                </mesh>
              </group>
            </mesh>
          </mesh>
          <mesh
            name="Lower_Cover003"
            geometry={nodes.Lower_Cover003.geometry}
            material={materials['Material.045']}
            scale={[11.449, 5.791, 11.449]}
          />
          <mesh
            name="Lower_Filter003"
            geometry={nodes.Lower_Filter003.geometry}
            material={materials['Material.001']}
            position={[0, 10.828, 0]}
            scale={9.815}
          />
        </mesh>
        <mesh
          name="Cube055"
          geometry={nodes.Cube055.geometry}
          material={materials['Material.045']}
          position={[-5.527, 51.473, 4.439]}
          scale={[3.626, 0.69, 1.761]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setActiveTooltip({
              visible: true,
              text: 'Cooling Tower 2',
              position: e.point.toArray(),
            });
          }}
          onPointerOut={() => {
            setActiveTooltip((prev) => ({ ...prev, visible: false }));
          }}
        />
        <mesh
          name="Cube056"
          geometry={nodes.Cube056.geometry}
          material={materials['Material.045']}
          position={[-5.527, 51.473, 4.439]}
          scale={[3.626, 0.69, 1.761]}
        />
        <group
          name="Plane001"
          position={[-1.897, 51.835, 4.439]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.332, 0.345, 0.718]}
        />
        <mesh
          name="BézierCurve002"
          geometry={nodes.BézierCurve002.geometry}
          material={nodes.BézierCurve002.material}
          position={[-3.685, 53.478, 5.617]}
        />
        <mesh
          name="BézierCurve003"
          geometry={nodes.BézierCurve003.geometry}
          material={nodes.BézierCurve003.material}
          position={[-7.371, 53.478, 5.617]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.007']}
          position={[8.537, 51.688, 2.751]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.007']}
          position={[4.852, 49.36, 1.434]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder005"
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.007']}
          position={[4.592, 49.358, 1.434]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.531, 84.459, 1.531]}
        />
        <mesh
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={materials['Material.007']}
          position={[4.223, 51.829, -0.57]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <mesh
          name="Cylinder009"
          geometry={nodes.Cylinder009.geometry}
          material={materials['Material.007']}
          position={[4.592, 49.358, 2.371]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.531, 84.459, 1.531]}
        />
        <mesh
          name="Cylinder014"
          geometry={nodes.Cylinder014.geometry}
          material={materials['Material.007']}
          position={[2.35, 49.385, 2.345]}
          rotation={[-Math.PI, 0, 0]}
          scale={1.246}
        />
        <group
          name="Motor001"
          position={[2.35, 49.129, 5.512]}
          rotation={[0, 1.571, 0]}
          scale={0.544}>
          <mesh
            name="Holder001"
            geometry={nodes.Holder001.geometry}
            material={materials['Material.006']}
            position={[-0.4, 0, 0]}
            scale={[0.082, 0.085, 0.085]}>
            <mesh
              name="Body001"
              geometry={nodes.Body001.geometry}
              material={materials['Material.006']}
              position={[4.909, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[4.911, 6.384, 4.911]}>
              <mesh
                name="Controller001"
                geometry={nodes.Controller001.geometry}
                material={nodes.Controller001.material}
                position={[-1.268, 0.569, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.292, 0.271, 0.409]}
              />
              <mesh
                name="Cup001"
                geometry={nodes.Cup001.geometry}
                material={nodes.Cup001.material}
                position={[0, 1.27, 0]}
                scale={[0.397, 0.317, 0.397]}
              />
              <mesh
                name="Electric001"
                geometry={nodes.Electric001.geometry}
                material={nodes.Electric001.material}
                position={[-1.079, 0.569, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.198, 0.271, 0.33]}
              />
              <mesh
                name="Poros001"
                geometry={nodes.Poros001.geometry}
                material={nodes.Poros001.material}
                position={[0, 0.237, 0]}
                scale={[0.131, 1.523, 0.131]}>
                <mesh
                  name="Fan001"
                  geometry={nodes.Fan001.geometry}
                  material={nodes.Fan001.material}
                  position={[0, -0.964, 0]}
                  scale={[2.59, 0.177, 2.59]}
                />
              </mesh>
              <mesh
                name="Sink001"
                geometry={nodes.Sink001.geometry}
                material={materials['Material.006']}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.746, 1.571, 0.01]}
              />
            </mesh>
            <mesh
              name="Cover001"
              geometry={nodes.Cover001.geometry}
              material={nodes.Cover001.material}
              position={[-1.834, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[5.776, 4.909, 5.776]}
            />
            <mesh
              name="Hanger001"
              geometry={nodes.Hanger001.geometry}
              material={nodes.Hanger001.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[11.804, 12.259, 11.804]}
            />
          </mesh>
        </group>
        <mesh
          name="Cube057"
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[2.35, 48.638, 4.682]}
          scale={[-0.345, -0.11, -0.768]}
        />
        <mesh
          name="Mesh_1168"
          geometry={nodes.Mesh_1168.geometry}
          material={materials.Standard_3}
          position={[2.281, 48.746, 4.911]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.002}
        />
        <mesh
          name="Mesh_1169"
          geometry={nodes.Mesh_1169.geometry}
          material={materials.Standard_3}
          position={[2.417, 48.746, 4.911]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.002}
        />
        <mesh
          name="Mesh_1170"
          geometry={nodes.Mesh_1170.geometry}
          material={materials.Standard_3}
          position={[2.065, 48.786, 4.374]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1171"
          geometry={nodes.Mesh_1171.geometry}
          material={materials.Standard_3}
          position={[2.065, 48.786, 4.175]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1172"
          geometry={nodes.Mesh_1172.geometry}
          material={materials.Standard_3}
          position={[2.628, 48.786, 4.374]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1173"
          geometry={nodes.Mesh_1173.geometry}
          material={materials.Standard_3}
          position={[2.628, 48.786, 4.175]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Cylinder068"
          geometry={nodes.Cylinder068.geometry}
          material={materials['Material.007']}
          position={[2.35, 49.129, 5.094]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[-0.106, -0.092, -0.106]}
        />
        <mesh
          name="Cube058"
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[7.812, 48.574, 1.93]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.122, 0.2, 0.122]}>
          <mesh
            name="Cube059"
            geometry={nodes.Cube059.geometry}
            material={nodes.Cube059.material}
            position={[-0.001, 0.148, 3.458]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.265, 0.77, 0.729]}>
            <mesh
              name="Torus005"
              geometry={nodes.Torus005.geometry}
              material={nodes.Torus005.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[2.661, 7.727, 1.711]}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cube060"
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[3.21, 48.574, 1.93]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.122, 0.2, 0.122]}>
          <mesh
            name="Cube061"
            geometry={nodes.Cube061.geometry}
            material={nodes.Cube061.material}
            position={[-0.001, 0.148, 3.458]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.265, 0.77, 0.729]}>
            <mesh
              name="Torus001"
              geometry={nodes.Torus001.geometry}
              material={nodes.Torus001.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[2.661, 7.727, 1.711]}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cylinder069"
          geometry={nodes.Cylinder069.geometry}
          material={materials['Material.007']}
          position={[3.752, 50.342, -2.029]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <group name="Empty002" position={[2.35, 49.129, 4.864]} scale={0.334}>
          <group name="POMPESLDASM001" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.005}>
            <group name="anneau_de_blocage_D_fautSTEP-1001" position={[481.238, 1, -0.002]}>
              <mesh
                name="Mesh_1157"
                geometry={nodes.Mesh_1157.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.004]}
              />
            </group>
            <group
              name="anneau_de_blocage_D_fautSTEP-2001"
              position={[489.739, 0, -0.002]}
              rotation={[-0.019, 0, -Math.PI]}>
              <mesh
                name="Mesh_1158"
                geometry={nodes.Mesh_1158.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="Arbre_D_fautSTEP-1001"
              position={[361.7, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <group name="Mesh_1109" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1072"
                  geometry={nodes.Mesh_1072.geometry}
                  material={materials.Standard_3}
                />
                <mesh
                  name="Mesh_1072_1"
                  geometry={nodes.Mesh_1072_1.geometry}
                  material={materials.Standard}
                />
              </group>
            </group>
            <group
              name="bague_d''appui_D_fautSTEP-1001"
              position={[-8.8, 0, -0.002]}
              rotation={[2.824, 0, Math.PI]}>
              <mesh
                name="Mesh_1110"
                geometry={nodes.Mesh_1110.geometry}
                material={materials.Standard_3}
                position={[0, 0.001, 0]}
              />
            </group>
            <group
              name="Cale_de_r_glage_D_fautSTEP-1001"
              position={[-52, 0, -0.002]}
              rotation={[-0.007, 0, Math.PI]}>
              <mesh
                name="Mesh_1119"
                geometry={nodes.Mesh_1119.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.003]}
              />
            </group>
            <group
              name="Cartouche_d''etancheite_D_fautSTEP-1001"
              position={[326.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1150"
                geometry={nodes.Mesh_1150.geometry}
                material={materials.Standard_6}
                position={[0, 0, -0.004]}
              />
            </group>
            <group name="CLAVETTE_D_fautSTEP-1001" position={[332.2, -21.5, 4.998]}>
              <mesh
                name="Mesh_1152"
                geometry={nodes.Mesh_1152.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Corps_de_palier_D_fautSTEP-1001"
              position={[168, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <group name="Mesh_1120" position={[0, 0, -0.004]}>
                <mesh
                  name="Mesh_1081"
                  geometry={nodes.Mesh_1081.geometry}
                  material={materials.Standard_1}
                />
                <mesh
                  name="Mesh_1081_1"
                  geometry={nodes.Mesh_1081_1.geometry}
                  material={materials.Standard_7}
                />
              </group>
            </group>
            <group
              name="corps_de_pompeSTEP-1001"
              position={[361, 0, -0.002]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1156"
                geometry={nodes.Mesh_1156.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
              <mesh
                name="Mesh_2007"
                geometry={nodes.Mesh_2007.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
              <mesh
                name="Mesh_3001"
                geometry={nodes.Mesh_3001.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Couvercle_de_corps_D_fautSTEP-1001"
              position={[326.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1140"
                geometry={nodes.Mesh_1140.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.004]}
              />
            </group>
            <group
              name="Couvercle_de_palier_D_fautSTEP-1001"
              position={[10.7, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1114"
                geometry={nodes.Mesh_1114.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Deflecteur_D_fautSTEP-1001"
              position={[170, 0, -0.002]}
              rotation={[2.824, 0, Math.PI]}>
              <mesh
                name="Mesh_1125"
                geometry={nodes.Mesh_1125.geometry}
                material={materials.Standard_3}
                position={[0, 0.001, 0]}
              />
            </group>
            <group name="Disque_d''usure_D_fautSTEP-1001" position={[379.739, 0, -0.002]}>
              <mesh
                name="Mesh_1167"
                geometry={nodes.Mesh_1167.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.004]}
              />
            </group>
            <group
              name="Ecrou___encoches_D_fautSTEP-1001"
              position={[-57.1, 0, -0.002]}
              rotation={[-2.491, 0, -Math.PI]}>
              <group name="Mesh_1112" position={[0, 0.001, 0.001]}>
                <mesh
                  name="Mesh_1075"
                  geometry={nodes.Mesh_1075.geometry}
                  material={materials.Standard_4}
                />
                <mesh
                  name="Mesh_1075_1"
                  geometry={nodes.Mesh_1075_1.geometry}
                  material={materials.Standard_3}
                />
              </group>
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-1001"
              position={[264, 147.5, -0.004]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1141"
                geometry={nodes.Mesh_1141.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-2001"
              position={[264, -147.5, 0]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1142"
                geometry={nodes.Mesh_1142.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-3001"
              position={[264, 0.002, 118.998]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1143"
                geometry={nodes.Mesh_1143.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-4001"
              position={[264, -103.058, -59.5]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1144"
                geometry={nodes.Mesh_1144.geometry}
                material={materials.Standard_3}
                position={[-0.003, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-5001"
              position={[264, 73.752, 127.735]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1145"
                geometry={nodes.Mesh_1145.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-6001"
              position={[264, 103.056, -59.502]}
              rotation={[-0.449, Math.PI / 2, 0]}>
              <mesh
                name="Mesh_1146"
                geometry={nodes.Mesh_1146.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-7001"
              position={[264, 73.747, -127.742]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1147"
                geometry={nodes.Mesh_1147.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-8001"
              position={[264, -73.752, -127.738]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1148"
                geometry={nodes.Mesh_1148.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-9001"
              position={[264, -73.748, 127.74]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1149"
                geometry={nodes.Mesh_1149.geometry}
                material={materials.Standard_3}
                position={[-0.003, 0, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-1002"
              position={[292.833, 103.056, -59.502]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1106"
                geometry={nodes.Mesh_1106.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-1003"
              position={[301.333, 147.5, -0.004]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1161"
                geometry={nodes.Mesh_1161.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="goujon_M10x60STEP-2002"
              position={[292.833, 0.002, 118.998]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1107"
                geometry={nodes.Mesh_1107.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-2003"
              position={[301.333, -73.752, -127.738]}
              rotation={[-1.638, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1162"
                geometry={nodes.Mesh_1162.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="goujon_M10x60STEP-3002"
              position={[292.833, -103.058, -59.5]}
              rotation={[0.513, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1108"
                geometry={nodes.Mesh_1108.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, -0.001]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-3003"
              position={[301.333, 73.747, -127.742]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1163"
                geometry={nodes.Mesh_1163.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="goujon_M10x60STEP-4001"
              position={[301.333, -73.748, 127.74]}
              rotation={[-1.592, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1164"
                geometry={nodes.Mesh_1164.geometry}
                material={materials.Standard_3}
                position={[-0.002, 0, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-5001"
              position={[301.333, -147.5, 0]}
              rotation={[0.208, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1165"
                geometry={nodes.Mesh_1165.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-6001"
              position={[301.333, 73.752, 127.735]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1166"
                geometry={nodes.Mesh_1166.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Graisseur_D_fautSTEP-1001"
              position={[-61, 0, -82.002]}
              rotation={[-Math.PI, 1.571, 0]}>
              <mesh
                name="Mesh_1126"
                geometry={nodes.Mesh_1126.geometry}
                material={materials.Standard_3}
                position={[0.002, 0, 0]}
              />
            </group>
            <group
              name="Graisseur_D_fautSTEP-2001"
              position={[150, -0.002, -87.002]}
              rotation={[3.142, Math.PI / 2, 0]}>
              <mesh
                name="Mesh_1127"
                geometry={nodes.Mesh_1127.geometry}
                material={materials.Standard_3}
                position={[-0.002, 0, 0]}
              />
            </group>
            <group
              name="Impulseur_D_fautSTEP-1001"
              position={[398.2, 0, -0.002]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="Mesh_1153"
                geometry={nodes.Mesh_1153.geometry}
                material={materials.Standard_3}
                position={[0, -0.004, 0]}
              />
            </group>
            <group
              name="Joint___l_vres_D_45STEP-1001"
              position={[156, 0, -0.002]}
              rotation={[2.819, 0, Math.PI]}>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_01STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1097"
                  geometry={nodes.Mesh_1097.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_02STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1098"
                  geometry={nodes.Mesh_1098.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_03STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1099"
                  geometry={nodes.Mesh_1099.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_04STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1100"
                  geometry={nodes.Mesh_1100.geometry}
                  material={materials.Standard_2}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_05STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1101"
                  geometry={nodes.Mesh_1101.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
                <mesh
                  name="Mesh_2006"
                  geometry={nodes.Mesh_2006.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_06STEP"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1102"
                  geometry={nodes.Mesh_1102.geometry}
                  material={materials.Standard_5}
                  position={[0, 0, -0.002]}
                />
              </group>
            </group>
            <group
              name="joint___l_vres_D40STEP-1001"
              position={[-69, 0, -0.002]}
              rotation={[3.023, 0, 0]}>
              <group name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_01STE">
                <mesh
                  name="Mesh_1092"
                  geometry={nodes.Mesh_1092.geometry}
                  material={materials.Standard_5}
                />
              </group>
              <group name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_02STE">
                <mesh
                  name="Mesh_1093"
                  geometry={nodes.Mesh_1093.geometry}
                  material={materials.Standard_2}
                />
              </group>
              <group name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_03STE">
                <mesh
                  name="Mesh_1094"
                  geometry={nodes.Mesh_1094.geometry}
                  material={materials.Standard_5}
                />
                <mesh
                  name="Mesh_2004"
                  geometry={nodes.Mesh_2004.geometry}
                  material={materials.Standard_5}
                />
              </group>
              <group name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_04STE">
                <mesh
                  name="Mesh_1095"
                  geometry={nodes.Mesh_1095.geometry}
                  material={materials.Standard_5}
                />
              </group>
              <group name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_05STE">
                <mesh
                  name="Mesh_1096"
                  geometry={nodes.Mesh_1096.geometry}
                  material={materials.Standard_5}
                />
                <mesh
                  name="Mesh_2005"
                  geometry={nodes.Mesh_2005.geometry}
                  material={materials.Standard_5}
                />
              </group>
            </group>
            <group
              name="Joint_torique_(palier)_D_fautSTEP-1001"
              position={[-30.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1118"
                geometry={nodes.Mesh_1118.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group name="Joint_torique_(tube_guide)_D_fautSTEP-1001" position={[325.2, 0, -0.002]}>
              <mesh
                name="Mesh_1139"
                geometry={nodes.Mesh_1139.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group name="lanterneSTEP-1001" position={[187, 0, -0.002]} rotation={[0, 0, 1.571]}>
              <group name="Mesh_1131" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1087_1"
                  geometry={nodes.Mesh_1087_1.geometry}
                  material={materials.Standard_1}
                />
                <mesh
                  name="Mesh_1087_2"
                  geometry={nodes.Mesh_1087_2.geometry}
                  material={materials.Standard_3}
                />
              </group>
            </group>
            <group
              name="Palier_D_fautSTEP-1001"
              position={[0, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1113"
                geometry={nodes.Mesh_1113.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Pied_D_fautSTEP-1001"
              position={[-52, -65.996, 235]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1130"
                geometry={nodes.Mesh_1130.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="rondelle_(pied)_D_fautSTEP-1001"
              position={[-62, 12.002, 93.998]}
              rotation={[2.83, 0, Math.PI]}>
              <mesh
                name="Mesh_1128"
                geometry={nodes.Mesh_1128.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0]}
              />
            </group>
            <group
              name="rondelle_(pied)_D_fautSTEP-2001"
              position={[-62, -11.998, 93.998]}
              rotation={[2.893, 0, Math.PI]}>
              <mesh
                name="Mesh_1129"
                geometry={nodes.Mesh_1129.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0.001, -0.003]}
              />
            </group>
            <group
              name="rondelle_de_blocage_D_fautSTEP-1001"
              position={[261, -0.001, -66.002]}
              rotation={[1.963, 0, Math.PI]}>
              <mesh
                name="Mesh_1151"
                geometry={nodes.Mesh_1151.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0.003, 0]}
              />
            </group>
            <group
              name="Rondelle_de_roue_D_fautSTEP-1001"
              position={[412.2, 0, -0.002]}
              rotation={[-2.378, 0, -Math.PI]}>
              <mesh
                name="Mesh_1154"
                geometry={nodes.Mesh_1154.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              name="Rondelle_frein_D_fautSTEP-1001"
              position={[-53.5, 0, -0.002]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="Mesh_1111"
                geometry={nodes.Mesh_1111.geometry}
                material={materials.Standard_4}
                position={[0.001, -0.004, 0]}
              />
            </group>
            <group
              name="Roulement___2_rang_es_de_billes___contact_obliqueSTEP-1001"
              position={[-13.8, 0, -0.002]}
              rotation={[2.858, 0, Math.PI]}>
              <group name="snr_3309aj30_0_01STEP-1001" position={[-0.001, 0, -0.001]}>
                <mesh
                  name="Mesh_1084"
                  geometry={nodes.Mesh_1084.geometry}
                  material={materials.Standard_3}
                  position={[-0.001, 0, -0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_02STEP-1001" position={[-0.001, 0, -0.001]}>
                <mesh
                  name="Mesh_1085"
                  geometry={nodes.Mesh_1085.geometry}
                  material={materials.Standard_3}
                  position={[-0.001, 0, -0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_03STEP-1001" position={[-0.001, 0, -0.001]}>
                <mesh
                  name="Mesh_1086"
                  geometry={nodes.Mesh_1086.geometry}
                  material={materials.Standard_3}
                  position={[-0.001, 0, -0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_04STEP-1001" position={[-0.001, 0, -0.001]}>
                <mesh
                  name="Mesh_1087"
                  geometry={nodes.Mesh_1087.geometry}
                  material={materials.Standard_3}
                  position={[-0.001, 0, -0.001]}
                />
              </group>
            </group>
            <group
              name="Roulement_radial___1_rang_e_de_billesSTEP-1001"
              position={[123.2, 0, -0.002]}>
              <group name="snr_qj309ma_0_01STEP-1001" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1088"
                  geometry={nodes.Mesh_1088.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_02STEP-1001" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1089"
                  geometry={nodes.Mesh_1089.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_03STEP-1001" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1090"
                  geometry={nodes.Mesh_1090.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_04STEP-1001" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1091"
                  geometry={nodes.Mesh_1091.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
            </group>
            <group
              name="Tube_guide_D_fautSTEP-1001"
              position={[326.2, 0, -0.002]}
              rotation={[1.03, 0, -Math.PI]}>
              <mesh
                name="Mesh_1138"
                geometry={nodes.Mesh_1138.geometry}
                material={materials.Standard_3}
                position={[0, 0.001, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-1001"
              position={[-73, 51.935, -52.717]}
              rotation={[2.798, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1121"
                geometry={nodes.Mesh_1121.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.003]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-2001"
              position={[-73, -51.935, 52.713]}
              rotation={[1.411, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1122"
                geometry={nodes.Mesh_1122.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-3001"
              position={[-73, 52.714, 51.934]}
              rotation={[0.861, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1123"
                geometry={nodes.Mesh_1123.geometry}
                material={materials.Standard_3}
                position={[-0.003, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-4001"
              position={[-73, -52.714, -51.935]}
              rotation={[2.668, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1124"
                geometry={nodes.Mesh_1124.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="vis_ISO_4014_M12X120STEP-1001"
              position={[412.2, 0, -0.002]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1155"
                geometry={nodes.Mesh_1155.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-1002"
              position={[-63.5, 12.002, 93.998]}
              rotation={[2.784, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1103"
                geometry={nodes.Mesh_1103.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-1003"
              position={[481.238, 112, -0.004]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1159"
                geometry={nodes.Mesh_1159.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-2002"
              position={[-63.5, -11.998, 93.998]}
              rotation={[2.329, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1104"
                geometry={nodes.Mesh_1104.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-2003"
              position={[481.238, -112, 0]}
              rotation={[-0.118, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1160"
                geometry={nodes.Mesh_1160.geometry}
                material={materials.Standard_3}
                position={[0, 0.001, -0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-3001"
              position={[258, -0.001, -66.002]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1105"
                geometry={nodes.Mesh_1105.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-1001"
              position={[174, -76, 0]}
              rotation={[0.21, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1132"
                geometry={nodes.Mesh_1132.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-2001"
              position={[174, 38.001, 65.817]}
              rotation={[0.216, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1133"
                geometry={nodes.Mesh_1133.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-3001"
              position={[174, 37.999, -65.818]}
              rotation={[-0.69, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1134"
                geometry={nodes.Mesh_1134.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-4001"
              position={[174, 76, -0.004]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1135"
                geometry={nodes.Mesh_1135.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-5001"
              position={[174, -38.001, -65.818]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1136"
                geometry={nodes.Mesh_1136.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-6001"
              position={[174, -37.999, 65.817]}
              rotation={[-0.122, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1137"
                geometry={nodes.Mesh_1137.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-1001"
              position={[10.7, 48.93, -28.252]}
              rotation={[-1.794, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1115"
                geometry={nodes.Mesh_1115.geometry}
                material={materials.Standard_3}
                position={[0.004, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-2001"
              position={[10.7, -48.93, -28.252]}
              rotation={[2.76, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1116"
                geometry={nodes.Mesh_1116.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-3001"
              position={[10.7, 0, 56.498]}
              rotation={[2.736, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1117"
                geometry={nodes.Mesh_1117.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
        </group>
        <group
          name="Cylinder084"
          position={[4.223, 53.865, -0.57]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <mesh
          name="Cylinder070"
          geometry={nodes.Cylinder070.geometry}
          material={materials['Material.007']}
          position={[-3.668, 51.688, 2.751]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder071"
          geometry={nodes.Cylinder071.geometry}
          material={materials['Material.007']}
          position={[-7.352, 49.36, 1.434]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder072"
          geometry={nodes.Cylinder072.geometry}
          material={materials['Material.007']}
          position={[-5.998, 49.358, 1.434]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.531, 84.459, 1.531]}
        />
        <mesh
          name="Cylinder073"
          geometry={nodes.Cylinder073.geometry}
          material={materials['Material.007']}
          position={[-9.855, 49.385, 2.345]}
          rotation={[-Math.PI, 0, 0]}
          scale={1.246}
        />
        <group
          name="Motor006"
          position={[-9.855, 49.129, 5.512]}
          rotation={[0, 1.571, 0]}
          scale={0.544}>
          <mesh
            name="Holder009"
            geometry={nodes.Holder009.geometry}
            material={materials['Material.006']}
            position={[-0.4, 0, 0]}
            scale={[0.082, 0.085, 0.085]}>
            <mesh
              name="Body010"
              geometry={nodes.Body010.geometry}
              material={materials['Material.006']}
              position={[4.909, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[4.911, 6.384, 4.911]}>
              <mesh
                name="Controller006"
                geometry={nodes.Controller006.geometry}
                material={nodes.Controller006.material}
                position={[-1.268, 0.569, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.292, 0.271, 0.409]}
              />
              <mesh
                name="Cup006"
                geometry={nodes.Cup006.geometry}
                material={nodes.Cup006.material}
                position={[0, 1.27, 0]}
                scale={[0.397, 0.317, 0.397]}
              />
              <mesh
                name="Electric006"
                geometry={nodes.Electric006.geometry}
                material={nodes.Electric006.material}
                position={[-1.079, 0.569, 0]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.198, 0.271, 0.33]}
              />
              <mesh
                name="Poros010"
                geometry={nodes.Poros010.geometry}
                material={nodes.Poros010.material}
                position={[0, 0.237, 0]}
                scale={[0.131, 1.523, 0.131]}>
                <mesh
                  name="Fan006"
                  geometry={nodes.Fan006.geometry}
                  material={nodes.Fan006.material}
                  position={[0, -0.964, 0]}
                  scale={[2.59, 0.177, 2.59]}
                />
              </mesh>
              <mesh
                name="Sink006"
                geometry={nodes.Sink006.geometry}
                material={materials['Material.006']}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.746, 1.571, 0.01]}
              />
            </mesh>
            <mesh
              name="Cover006"
              geometry={nodes.Cover006.geometry}
              material={nodes.Cover006.material}
              position={[-1.834, 0, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[5.776, 4.909, 5.776]}
            />
            <mesh
              name="Hanger006"
              geometry={nodes.Hanger006.geometry}
              material={nodes.Hanger006.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[11.804, 12.259, 11.804]}
            />
          </mesh>
        </group>
        <mesh
          name="Cube062"
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[-9.855, 48.638, 4.682]}
          scale={[-0.345, -0.11, -0.768]}
        />
        <mesh
          name="Mesh_1258"
          geometry={nodes.Mesh_1258.geometry}
          material={materials.Standard_3}
          position={[-9.923, 48.746, 4.911]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.002}
        />
        <mesh
          name="Mesh_1259"
          geometry={nodes.Mesh_1259.geometry}
          material={materials.Standard_3}
          position={[-9.788, 48.746, 4.911]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.002}
        />
        <mesh
          name="Mesh_1260"
          geometry={nodes.Mesh_1260.geometry}
          material={materials.Standard_3}
          position={[-10.14, 48.786, 4.374]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1261"
          geometry={nodes.Mesh_1261.geometry}
          material={materials.Standard_3}
          position={[-10.14, 48.786, 4.175]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1262"
          geometry={nodes.Mesh_1262.geometry}
          material={materials.Standard_3}
          position={[-9.577, 48.786, 4.374]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Mesh_1263"
          geometry={nodes.Mesh_1263.geometry}
          material={materials.Standard_3}
          position={[-9.577, 48.786, 4.175]}
          rotation={[Math.PI, -0.473, 0]}
          scale={0.003}
        />
        <mesh
          name="Cylinder074"
          geometry={nodes.Cylinder074.geometry}
          material={materials['Material.007']}
          position={[-9.855, 49.129, 5.094]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[-0.106, -0.092, -0.106]}
        />
        <mesh
          name="Cube063"
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.393, 48.574, 1.93]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.122, 0.2, 0.122]}>
          <mesh
            name="Cube064"
            geometry={nodes.Cube064.geometry}
            material={nodes.Cube064.material}
            position={[-0.001, 0.148, 3.458]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.265, 0.77, 0.729]}>
            <mesh
              name="Torus026"
              geometry={nodes.Torus026.geometry}
              material={nodes.Torus026.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[2.661, 7.727, 1.711]}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cube065"
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[-8.995, 48.574, 1.93]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.122, 0.2, 0.122]}>
          <mesh
            name="Cube066"
            geometry={nodes.Cube066.geometry}
            material={nodes.Cube066.material}
            position={[-0.001, 0.148, 3.458]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.265, 0.77, 0.729]}>
            <mesh
              name="Torus027"
              geometry={nodes.Torus027.geometry}
              material={nodes.Torus027.material}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[2.661, 7.727, 1.711]}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cylinder075"
          geometry={nodes.Cylinder075.geometry}
          material={materials['Material.007']}
          position={[-8.453, 50.342, -2.029]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <group name="Empty004" position={[-9.855, 49.129, 4.864]} scale={0.334}>
          <group name="POMPESLDASM002" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.005}>
            <group name="anneau_de_blocage_D_fautSTEP-1002" position={[481.238, 1, -0.002]}>
              <mesh
                name="Mesh_1174"
                geometry={nodes.Mesh_1174.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.003]}
              />
            </group>
            <group
              name="anneau_de_blocage_D_fautSTEP-2002"
              position={[489.738, 0, -0.002]}
              rotation={[-0.019, 0, -Math.PI]}>
              <mesh
                name="Mesh_1175"
                geometry={nodes.Mesh_1175.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.002]}
              />
            </group>
            <group
              name="Arbre_D_fautSTEP-1002"
              position={[361.7, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <group name="Mesh_1176" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1106_1"
                  geometry={nodes.Mesh_1106_1.geometry}
                  material={materials.Standard_3}
                />
                <mesh
                  name="Mesh_1106_2"
                  geometry={nodes.Mesh_1106_2.geometry}
                  material={materials.Standard}
                />
              </group>
            </group>
            <group
              name="bague_d''appui_D_fautSTEP-1002"
              position={[-8.8, 0, -0.002]}
              rotation={[2.824, 0, Math.PI]}>
              <mesh
                name="Mesh_1177"
                geometry={nodes.Mesh_1177.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              name="Cale_de_r_glage_D_fautSTEP-1002"
              position={[-52, 0, -0.002]}
              rotation={[-0.007, 0, Math.PI]}>
              <mesh
                name="Mesh_1178"
                geometry={nodes.Mesh_1178.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              name="Cartouche_d''etancheite_D_fautSTEP-1002"
              position={[326.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1179"
                geometry={nodes.Mesh_1179.geometry}
                material={materials.Standard_6}
                position={[0, 0, -0.004]}
              />
            </group>
            <group name="CLAVETTE_D_fautSTEP-1002" position={[332.2, -21.5, 4.998]}>
              <mesh
                name="Mesh_1180"
                geometry={nodes.Mesh_1180.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Corps_de_palier_D_fautSTEP-1002"
              position={[168, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <group name="Mesh_1181" position={[0, 0, -0.004]}>
                <mesh
                  name="Mesh_1114_1"
                  geometry={nodes.Mesh_1114_1.geometry}
                  material={materials.Standard_1}
                />
                <mesh
                  name="Mesh_1114_2"
                  geometry={nodes.Mesh_1114_2.geometry}
                  material={materials.Standard_7}
                />
              </group>
            </group>
            <group
              name="corps_de_pompeSTEP-1002"
              position={[361, 0, -0.002]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1182"
                geometry={nodes.Mesh_1182.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
              <mesh
                name="Mesh_2008"
                geometry={nodes.Mesh_2008.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
              <mesh
                name="Mesh_3002"
                geometry={nodes.Mesh_3002.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Couvercle_de_corps_D_fautSTEP-1002"
              position={[326.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1183"
                geometry={nodes.Mesh_1183.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.004]}
              />
            </group>
            <group
              name="Couvercle_de_palier_D_fautSTEP-1002"
              position={[10.7, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1184"
                geometry={nodes.Mesh_1184.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Deflecteur_D_fautSTEP-1002"
              position={[170, 0, -0.002]}
              rotation={[2.824, 0, Math.PI]}>
              <mesh
                name="Mesh_1185"
                geometry={nodes.Mesh_1185.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.001]}
              />
            </group>
            <group name="Disque_d''usure_D_fautSTEP-1002" position={[379.738, 0, -0.002]}>
              <mesh
                name="Mesh_1186"
                geometry={nodes.Mesh_1186.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.003]}
              />
            </group>
            <group
              name="Ecrou___encoches_D_fautSTEP-1002"
              position={[-57.1, 0, -0.002]}
              rotation={[-2.491, 0, -Math.PI]}>
              <group name="Mesh_1187" position={[0, 0.001, 0.003]}>
                <mesh
                  name="Mesh_1120_1"
                  geometry={nodes.Mesh_1120_1.geometry}
                  material={materials.Standard_4}
                />
                <mesh
                  name="Mesh_1120_2"
                  geometry={nodes.Mesh_1120_2.geometry}
                  material={materials.Standard_3}
                />
              </group>
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-1002"
              position={[264, 147.5, -0.004]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1188"
                geometry={nodes.Mesh_1188.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-2002"
              position={[264, -147.5, 0]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1189"
                geometry={nodes.Mesh_1189.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-3002"
              position={[264, 0.001, 118.998]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1190"
                geometry={nodes.Mesh_1190.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-4002"
              position={[264, -103.058, -59.5]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1191"
                geometry={nodes.Mesh_1191.geometry}
                material={materials.Standard_3}
                position={[-0.003, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-5002"
              position={[264, 73.752, 127.735]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1192"
                geometry={nodes.Mesh_1192.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-6002"
              position={[264, 103.055, -59.502]}
              rotation={[-0.449, Math.PI / 2, 0]}>
              <mesh
                name="Mesh_1193"
                geometry={nodes.Mesh_1193.geometry}
                material={materials.Standard_3}
                position={[-0.002, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-7002"
              position={[264, 73.747, -127.742]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1194"
                geometry={nodes.Mesh_1194.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-8002"
              position={[264, -73.753, -127.738]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1195"
                geometry={nodes.Mesh_1195.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="ecrou_ISO_4032-M10STEP-9002"
              position={[264, -73.749, 127.74]}
              rotation={[0, 1.571, 0]}>
              <mesh
                name="Mesh_1196"
                geometry={nodes.Mesh_1196.geometry}
                material={materials.Standard_3}
                position={[-0.003, 0.001, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-1004"
              position={[292.833, 103.055, -59.502]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1197"
                geometry={nodes.Mesh_1197.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-1005"
              position={[301.333, 147.5, -0.004]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1198"
                geometry={nodes.Mesh_1198.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-2004"
              position={[292.833, 0.001, 118.998]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1199"
                geometry={nodes.Mesh_1199.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-2005"
              position={[301.333, -73.753, -127.738]}
              rotation={[-1.638, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1200"
                geometry={nodes.Mesh_1200.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0.001]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-3004"
              position={[292.833, -103.058, -59.5]}
              rotation={[0.513, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1201"
                geometry={nodes.Mesh_1201.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0.001]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-3005"
              position={[301.333, 73.747, -127.742]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1202"
                geometry={nodes.Mesh_1202.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-4002"
              position={[301.333, -73.749, 127.74]}
              rotation={[-1.592, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1203"
                geometry={nodes.Mesh_1203.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.001]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-5002"
              position={[301.333, -147.5, 0]}
              rotation={[0.208, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1204"
                geometry={nodes.Mesh_1204.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, -0.001]}
              />
            </group>
            <group
              name="goujon_M10x60STEP-6002"
              position={[301.333, 73.752, 127.735]}
              rotation={[0, 0, -1.571]}>
              <mesh
                name="Mesh_1205"
                geometry={nodes.Mesh_1205.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Graisseur_D_fautSTEP-1002"
              position={[-61, 0, -82.002]}
              rotation={[-Math.PI, 1.571, 0]}>
              <mesh
                name="Mesh_1206"
                geometry={nodes.Mesh_1206.geometry}
                material={materials.Standard_3}
                position={[0.002, -0.001, 0]}
              />
            </group>
            <group
              name="Graisseur_D_fautSTEP-2002"
              position={[150, -0.003, -87.002]}
              rotation={[3.142, Math.PI / 2, 0]}>
              <mesh
                name="Mesh_1207"
                geometry={nodes.Mesh_1207.geometry}
                material={materials.Standard_3}
                position={[-0.004, 0, 0]}
              />
            </group>
            <group
              name="Impulseur_D_fautSTEP-1002"
              position={[398.2, 0, -0.002]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="Mesh_1208"
                geometry={nodes.Mesh_1208.geometry}
                material={materials.Standard_3}
                position={[0, -0.005, 0]}
              />
            </group>
            <group
              name="Joint___l_vres_D_45STEP-1002"
              position={[156, 0, -0.002]}
              rotation={[2.819, 0, Math.PI]}>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_01STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1209"
                  geometry={nodes.Mesh_1209.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_02STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1210"
                  geometry={nodes.Mesh_1210.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_03STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1211"
                  geometry={nodes.Mesh_1211.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_04STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1212"
                  geometry={nodes.Mesh_1212.geometry}
                  material={materials.Standard_2}
                  position={[0, 0.001, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_05STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1213"
                  geometry={nodes.Mesh_1213.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
                <mesh
                  name="Mesh_2009"
                  geometry={nodes.Mesh_2009.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
              </group>
              <group
                name="trelleborg_tru000450-vcbv_5qpdm21hrrcf1x6jg39v0oqhg_06STEP001"
                position={[0, 0.001, -0.002]}>
                <mesh
                  name="Mesh_1214"
                  geometry={nodes.Mesh_1214.geometry}
                  material={materials.Standard_5}
                  position={[0, 0.001, -0.002]}
                />
              </group>
            </group>
            <group
              name="joint___l_vres_D40STEP-1002"
              position={[-69, 0, -0.002]}
              rotation={[3.023, 0, 0]}>
              <group
                name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_01STE001"
                position={[0, -0.001, -0.001]}>
                <mesh
                  name="Mesh_1215"
                  geometry={nodes.Mesh_1215.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
              </group>
              <group
                name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_02STE001"
                position={[0, -0.001, -0.001]}>
                <mesh
                  name="Mesh_1216"
                  geometry={nodes.Mesh_1216.geometry}
                  material={materials.Standard_2}
                  position={[0, -0.001, -0.001]}
                />
              </group>
              <group
                name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_03STE001"
                position={[0, -0.001, -0.001]}>
                <mesh
                  name="Mesh_1217"
                  geometry={nodes.Mesh_1217.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
                <mesh
                  name="Mesh_2010"
                  geometry={nodes.Mesh_2010.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
              </group>
              <group
                name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_04STE001"
                position={[0, -0.001, -0.001]}>
                <mesh
                  name="Mesh_1218"
                  geometry={nodes.Mesh_1218.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
              </group>
              <group
                name="trelleborg_trpb00400-4n011_bmu8sm1j3k8rptiml8o6kh8sr_05STE001"
                position={[0, -0.001, -0.001]}>
                <mesh
                  name="Mesh_1219"
                  geometry={nodes.Mesh_1219.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
                <mesh
                  name="Mesh_2011"
                  geometry={nodes.Mesh_2011.geometry}
                  material={materials.Standard_5}
                  position={[0, -0.001, -0.001]}
                />
              </group>
            </group>
            <group
              name="Joint_torique_(palier)_D_fautSTEP-1002"
              position={[-30.5, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1220"
                geometry={nodes.Mesh_1220.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group name="Joint_torique_(tube_guide)_D_fautSTEP-1002" position={[325.2, 0, -0.002]}>
              <mesh
                name="Mesh_1221"
                geometry={nodes.Mesh_1221.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group name="lanterneSTEP-1002" position={[187, 0, -0.002]} rotation={[0, 0, 1.571]}>
              <group name="Mesh_1222" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1138_1"
                  geometry={nodes.Mesh_1138_1.geometry}
                  material={materials.Standard_1}
                />
                <mesh
                  name="Mesh_1138_2"
                  geometry={nodes.Mesh_1138_2.geometry}
                  material={materials.Standard_3}
                />
              </group>
            </group>
            <group
              name="Palier_D_fautSTEP-1002"
              position={[0, 0, -0.002]}
              rotation={[0, 0, Math.PI]}>
              <mesh
                name="Mesh_1223"
                geometry={nodes.Mesh_1223.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="Pied_D_fautSTEP-1002"
              position={[-52, -65.996, 235]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1224"
                geometry={nodes.Mesh_1224.geometry}
                material={materials.Standard_1}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="rondelle_(pied)_D_fautSTEP-1002"
              position={[-62, 12.002, 93.998]}
              rotation={[2.83, 0, Math.PI]}>
              <mesh
                name="Mesh_1225"
                geometry={nodes.Mesh_1225.geometry}
                material={materials.Standard_3}
                position={[0, 0.001, 0]}
              />
            </group>
            <group
              name="rondelle_(pied)_D_fautSTEP-2002"
              position={[-62, -11.999, 93.998]}
              rotation={[2.893, 0, Math.PI]}>
              <mesh
                name="Mesh_1226"
                geometry={nodes.Mesh_1226.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="rondelle_de_blocage_D_fautSTEP-1002"
              position={[261, -0.002, -66.002]}
              rotation={[1.963, 0, Math.PI]}>
              <mesh
                name="Mesh_1227"
                geometry={nodes.Mesh_1227.geometry}
                material={materials.Standard_3}
                position={[0, 0.003, 0]}
              />
            </group>
            <group
              name="Rondelle_de_roue_D_fautSTEP-1002"
              position={[412.2, 0, -0.002]}
              rotation={[-2.378, 0, -Math.PI]}>
              <mesh
                name="Mesh_1228"
                geometry={nodes.Mesh_1228.geometry}
                material={materials.Standard_3}
                position={[0, -0.001, 0]}
              />
            </group>
            <group
              name="Rondelle_frein_D_fautSTEP-1002"
              position={[-53.5, 0, -0.002]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="Mesh_1229"
                geometry={nodes.Mesh_1229.geometry}
                material={materials.Standard_4}
                position={[0.001, -0.005, -0.001]}
              />
            </group>
            <group
              name="Roulement___2_rang_es_de_billes___contact_obliqueSTEP-1002"
              position={[-13.8, 0, -0.002]}
              rotation={[2.858, 0, Math.PI]}>
              <group name="snr_3309aj30_0_01STEP-1002" position={[0, 0, 0.001]}>
                <mesh
                  name="Mesh_1230"
                  geometry={nodes.Mesh_1230.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, 0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_02STEP-1002" position={[0, 0, 0.001]}>
                <mesh
                  name="Mesh_1231"
                  geometry={nodes.Mesh_1231.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, 0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_03STEP-1002" position={[0, 0, 0.001]}>
                <mesh
                  name="Mesh_1232"
                  geometry={nodes.Mesh_1232.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, 0.001]}
                />
              </group>
              <group name="snr_3309aj30_0_04STEP-1002" position={[0, 0, 0.001]}>
                <mesh
                  name="Mesh_1233"
                  geometry={nodes.Mesh_1233.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, 0.001]}
                />
              </group>
            </group>
            <group
              name="Roulement_radial___1_rang_e_de_billesSTEP-1002"
              position={[123.2, 0, -0.002]}>
              <group name="snr_qj309ma_0_01STEP-1002" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1234"
                  geometry={nodes.Mesh_1234.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_02STEP-1002" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1235"
                  geometry={nodes.Mesh_1235.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_03STEP-1002" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1236"
                  geometry={nodes.Mesh_1236.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
              <group name="snr_qj309ma_0_04STEP-1002" position={[0, 0, -0.002]}>
                <mesh
                  name="Mesh_1237"
                  geometry={nodes.Mesh_1237.geometry}
                  material={materials.Standard_3}
                  position={[0, 0, -0.002]}
                />
              </group>
            </group>
            <group
              name="Tube_guide_D_fautSTEP-1002"
              position={[326.2, 0, -0.002]}
              rotation={[1.03, 0, -Math.PI]}>
              <mesh
                name="Mesh_1238"
                geometry={nodes.Mesh_1238.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.001]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-1002"
              position={[-73, 51.934, -52.717]}
              rotation={[2.798, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1239"
                geometry={nodes.Mesh_1239.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.004]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-2002"
              position={[-73, -51.935, 52.713]}
              rotation={[1.411, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1240"
                geometry={nodes.Mesh_1240.geometry}
                material={materials.Standard_3}
                position={[-0.002, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-3002"
              position={[-73, 52.713, 51.934]}
              rotation={[0.861, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1241"
                geometry={nodes.Mesh_1241.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4014_M10x40STEP-4002"
              position={[-73, -52.715, -51.935]}
              rotation={[2.668, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1242"
                geometry={nodes.Mesh_1242.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.001]}
              />
            </group>
            <group
              name="vis_ISO_4014_M12X120STEP-1002"
              position={[412.2, 0, -0.002]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1243"
                geometry={nodes.Mesh_1243.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-1004"
              position={[-63.5, 12.002, 93.998]}
              rotation={[2.784, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1247"
                geometry={nodes.Mesh_1247.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-1005"
              position={[481.238, 112, -0.004]}
              rotation={[0, 0, 1.571]}>
              <mesh
                name="Mesh_1248"
                geometry={nodes.Mesh_1248.geometry}
                material={materials.Standard_3}
                position={[0.001, -0.001, 0]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-2004"
              position={[-63.5, -11.999, 93.998]}
              rotation={[2.329, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1249"
                geometry={nodes.Mesh_1249.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-2005"
              position={[481.238, -112, 0]}
              rotation={[-0.118, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1250"
                geometry={nodes.Mesh_1250.geometry}
                material={materials.Standard_3}
                position={[0, 0, -0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x20STEP-3002"
              position={[258, -0.002, -66.002]}
              rotation={[0, 0, -Math.PI / 2]}>
              <mesh
                name="Mesh_1251"
                geometry={nodes.Mesh_1251.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-1002"
              position={[174, -76, 0]}
              rotation={[0.21, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1252"
                geometry={nodes.Mesh_1252.geometry}
                material={materials.Standard_3}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-2002"
              position={[174, 38.001, 65.817]}
              rotation={[0.216, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1253"
                geometry={nodes.Mesh_1253.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-3002"
              position={[174, 37.998, -65.818]}
              rotation={[-0.69, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1254"
                geometry={nodes.Mesh_1254.geometry}
                material={materials.Standard_3}
                position={[0.002, 0, -0.003]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-4002"
              position={[174, 76, -0.004]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1255"
                geometry={nodes.Mesh_1255.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-5002"
              position={[174, -38.002, -65.818]}
              rotation={[0, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1256"
                geometry={nodes.Mesh_1256.geometry}
                material={materials.Standard_3}
                position={[-0.001, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M10x30STEP-6002"
              position={[174, -37.999, 65.817]}
              rotation={[-0.122, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1257"
                geometry={nodes.Mesh_1257.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-1002"
              position={[10.7, 48.93, -28.252]}
              rotation={[-1.794, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1244"
                geometry={nodes.Mesh_1244.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, 0]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-2002"
              position={[10.7, -48.931, -28.252]}
              rotation={[2.76, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1245"
                geometry={nodes.Mesh_1245.geometry}
                material={materials.Standard_3}
                position={[0.001, 0, -0.002]}
              />
            </group>
            <group
              name="vis_ISO_4762_M6x16STEP-3002"
              position={[10.7, 0, 56.498]}
              rotation={[2.736, 0, Math.PI / 2]}>
              <mesh
                name="Mesh_1246"
                geometry={nodes.Mesh_1246.geometry}
                material={materials.Standard_3}
                position={[0, 0, 0.002]}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Cylinder076"
          geometry={nodes.Cylinder076.geometry}
          material={materials['Material.007']}
          position={[-5.998, 49.128, 2.371]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.531, 84.459, 1.531]}
        />
        <group
          name="Cylinder077"
          position={[-9.313, 50.647, 1.416]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <mesh
          name="Cylinder078"
          geometry={nodes.Cylinder078.geometry}
          material={materials['Material.007']}
          position={[-9.313, 50.647, 1.416]}
          rotation={[Math.PI / 2, 0, -3.142]}
          scale={1.246}
        />
        <mesh
          name="Pipa_Evaporator_Leaving"
          geometry={nodes.Pipa_Evaporator_Leaving.geometry}
          material={materials['Material.054']}
          position={[-11.196, 34.992, -2.675]}
          rotation={[0, 0, -1.571]}
          scale={1.246}
          onPointerOver={(e) => {
            e.stopPropagation();
            setActiveTooltip({
              visible: true,
              text: 'Pipa Evaporator Leaving',
              position: e.point.toArray(),
            });
          }}
          onPointerOut={() => {
            setActiveTooltip((prev) => ({ ...prev, visible: false }));
          }}
        />
        <mesh
          name="Pipa_Evaporator_Entering"
          geometry={nodes.Pipa_Evaporator_Entering.geometry}
          material={materials['Material.011']}
          position={[-10.959, 34.988, -2.154]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}

          onPointerOver={(e) => {
            e.stopPropagation();
            setActiveTooltip({
              visible: true,
              text: 'Pipa Evaporator Entering',
              position: e.point.toArray(),
            });
          }}
          onPointerOut={() => {
            setActiveTooltip((prev) => ({ ...prev, visible: false }));
          }}
        >
        </mesh>
        <mesh
          geometry={nodes.Pipa_Evaporator_Entering.geometry}

          position={[-10.959, 34.988, -2.154]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}  
        />
        <mesh
          name="Cylinder029"
          geometry={nodes.Cylinder029.geometry}
          material={materials['Material.054']}
          position={[-9.637, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder030"
          geometry={nodes.Cylinder030.geometry}
          material={materials['Material.011']}
          position={[-9.293, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder041"
          geometry={nodes.Cylinder041.geometry}
          material={materials['Material.054']}
          position={[-4.416, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder042"
          geometry={nodes.Cylinder042.geometry}
          material={materials['Material.011']}
          position={[-4.073, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder045"
          geometry={nodes.Cylinder045.geometry}
          material={materials['Material.054']}
          position={[0.829, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder046"
          geometry={nodes.Cylinder046.geometry}
          material={materials['Material.011']}
          position={[1.173, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder049"
          geometry={nodes.Cylinder049.geometry}
          material={materials['Material.054']}
          position={[6.083, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder050"
          geometry={nodes.Cylinder050.geometry}
          material={materials['Material.011']}
          position={[6.426, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder053"
          geometry={nodes.Cylinder053.geometry}
          material={materials['Material.054']}
          position={[11.31, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder054"
          geometry={nodes.Cylinder054.geometry}
          material={materials['Material.011']}
          position={[11.654, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder057"
          geometry={nodes.Cylinder057.geometry}
          material={materials['Material.054']}
          position={[16.63, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder058"
          geometry={nodes.Cylinder058.geometry}
          material={materials['Material.011']}
          position={[16.973, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder061"
          geometry={nodes.Cylinder061.geometry}
          material={materials['Material.054']}
          position={[21.935, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder062"
          geometry={nodes.Cylinder062.geometry}
          material={materials['Material.011']}
          position={[22.279, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder065"
          geometry={nodes.Cylinder065.geometry}
          material={materials['Material.054']}
          position={[27.329, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder091"
          geometry={nodes.Cylinder091.geometry}
          material={materials['Material.011']}
          position={[27.673, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder094"
          geometry={nodes.Cylinder094.geometry}
          material={materials['Material.054']}
          position={[32.778, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder095"
          geometry={nodes.Cylinder095.geometry}
          material={materials['Material.011']}
          position={[33.121, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder040"
          geometry={nodes.Cylinder040.geometry}
          material={materials['Material.011']}
          position={[-4.194, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder044"
          geometry={nodes.Cylinder044.geometry}
          material={materials['Material.011']}
          position={[1.046, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder048"
          geometry={nodes.Cylinder048.geometry}
          material={materials['Material.011']}
          position={[6.309, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder052"
          geometry={nodes.Cylinder052.geometry}
          material={materials['Material.011']}
          position={[11.538, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder056"
          geometry={nodes.Cylinder056.geometry}
          material={materials['Material.011']}
          position={[16.852, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder060"
          geometry={nodes.Cylinder060.geometry}
          material={materials['Material.011']}
          position={[22.159, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder064"
          geometry={nodes.Cylinder064.geometry}
          material={materials['Material.011']}
          position={[27.55, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder093"
          geometry={nodes.Cylinder093.geometry}
          material={materials['Material.011']}
          position={[33, 32.118, 1.502]}
          rotation={[1.571, 0, 1.571]}
          scale={1.246}
        />
        <mesh
          name="Cylinder039"
          geometry={nodes.Cylinder039.geometry}
          material={materials['Material.054']}
          position={[-6.863, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder097"
          geometry={nodes.Cylinder097.geometry}
          material={materials['Material.011']}
          position={[-6.519, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder098"
          geometry={nodes.Cylinder098.geometry}
          material={materials['Material.054']}
          position={[-1.6, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder099"
          geometry={nodes.Cylinder099.geometry}
          material={materials['Material.011']}
          position={[-1.257, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder100"
          geometry={nodes.Cylinder100.geometry}
          material={materials['Material.054']}
          position={[3.64, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder101"
          geometry={nodes.Cylinder101.geometry}
          material={materials['Material.011']}
          position={[3.984, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder102"
          geometry={nodes.Cylinder102.geometry}
          material={materials['Material.054']}
          position={[8.899, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder103"
          geometry={nodes.Cylinder103.geometry}
          material={materials['Material.011']}
          position={[9.243, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder104"
          geometry={nodes.Cylinder104.geometry}
          material={materials['Material.054']}
          position={[14.149, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder105"
          geometry={nodes.Cylinder105.geometry}
          material={materials['Material.011']}
          position={[14.493, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder106"
          geometry={nodes.Cylinder106.geometry}
          material={materials['Material.054']}
          position={[19.447, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder107"
          geometry={nodes.Cylinder107.geometry}
          material={materials['Material.011']}
          position={[19.79, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder108"
          geometry={nodes.Cylinder108.geometry}
          material={materials['Material.054']}
          position={[24.744, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder109"
          geometry={nodes.Cylinder109.geometry}
          material={materials['Material.011']}
          position={[25.087, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder110"
          geometry={nodes.Cylinder110.geometry}
          material={materials['Material.054']}
          position={[30.156, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder111"
          geometry={nodes.Cylinder111.geometry}
          material={materials['Material.011']}
          position={[30.499, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder112"
          geometry={nodes.Cylinder112.geometry}
          material={materials['Material.054']}
          position={[35.596, 33.122, -2.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Cylinder113"
          geometry={nodes.Cylinder113.geometry}
          material={materials['Material.011']}
          position={[35.939, 33.122, -2.139]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.246}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials['Material.048']}
          position={[-1.884, 51.835, 4.439]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.332, 0.345, 0.718]}
        />
        <mesh
          name="Tower_Lamp_Chiller2"
          geometry={nodes.Tower_Lamp_Chiller2.geometry}
          material={nodes.Tower_Lamp_Chiller2.material}
          position={[7.025, 51.036, -5.964]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.003}
        />
        <group
          name="CHILLER_2"
          position={[7.495, 50.152, -5.036]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[0.016, 0.366, 0.016]}>
          <mesh
            name="Cylinder015"
            geometry={nodes.Cylinder015.geometry}
            material={materials['Material.005']}
            onPointerOver={(e) => {
              e.stopPropagation();
              setActiveTooltip({
                visible: true,
                text: 'Chiller 2',
                position: e.point.toArray(),
              });
            }}
            onPointerOut={() => {
              setActiveTooltip((prev) => ({ ...prev, visible: false }));
            }}
          />
          <mesh
            name="Cylinder015_1"
            geometry={nodes.Cylinder015_1.geometry}
            material={nodes.Cylinder015_1.material}
          />
          <mesh
            name="Cylinder015_2"
            geometry={nodes.Cylinder015_2.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Cylinder015_3"
            geometry={nodes.Cylinder015_3.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Cylinder015_4"
            geometry={nodes.Cylinder015_4.geometry}
            material={materials['Material.010']}
          />
        </group>
        <mesh
          name="Tower_Lamp_Chiller1"
          geometry={nodes.Tower_Lamp_Chiller1.geometry}
          material={nodes.Tower_Lamp_Chiller1.material}
          position={[-7.358, 50.935, -4.713]}
          rotation={[0, -1.571, 0]}
          scale={0.003}
        />
        <group
          name="CHILLER_1"
          position={[-5.666, 49.15, -5.314]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.374}>
          <mesh
            name="Sphere005"
            geometry={nodes.Sphere005.geometry}
            material={materials['Material.005']}
            onPointerOver={(e) => {
            e.stopPropagation();
              setActiveTooltip({
                visible: true,
                text: 'Chiller 1',
                position: e.point.toArray(),
              });
            }}
            onPointerOut={() => {
              setActiveTooltip((prev) => ({ ...prev, visible: false }));
            }}
          />
          <mesh
            name="Sphere005_1"
            geometry={nodes.Sphere005_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Sphere005_2"
            geometry={nodes.Sphere005_2.geometry}
            material={nodes.Sphere005_2.material}
          />
          <mesh
            name="Sphere005_3"
            geometry={nodes.Sphere005_3.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Sphere005_4"
            geometry={nodes.Sphere005_4.geometry}
            material={materials['Material.010']}
          />
        </group>
        <mesh
          name="POMPA_1"
          geometry={nodes.POMPA_1.geometry}
          material={materials['Material.006']}
          position={[0.103, 49.059, -6.03]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.001}
        />
        <mesh
          name="POMPA_2"
          geometry={nodes.POMPA_2.geometry}
          material={materials['Material.006']}
          position={[0.136, 49.059, -4.79]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.001}
        />
        <mesh
          name="POMPA_3"
          geometry={nodes.POMPA_3.geometry}
          material={materials['Material.006']}
          position={[0.136, 49.059, -3.56]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.001}
        />
        <mesh
          name="Lantai"
          geometry={nodes.Lantai.geometry}
          material={materials['Material.056']}
          position={[9.283, 23.061, -2.748]}
          scale={[21.293, 22.933, 10.04]}
        />
        <group
          name="AHU_Post_Cooling_A"
          position={[-8.682, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube039"
            geometry={nodes.Cube039.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube039_1"
            geometry={nodes.Cube039_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube039_2"
            geometry={nodes.Cube039_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube039_3"
            geometry={nodes.Cube039_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube039_4"
            geometry={nodes.Cube039_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube039_5"
            geometry={nodes.Cube039_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube039_6"
            geometry={nodes.Cube039_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube039_7"
            geometry={nodes.Cube039_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube039_8"
            geometry={nodes.Cube039_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube039_9"
            geometry={nodes.Cube039_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text001"
          geometry={nodes.Text001.geometry}
          material={materials['Material.019']}
          position={[-10.77, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials['Material.019']}
          position={[-10.907, 32.455, 1.588]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_A"
          position={[-10.82, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube067"
            geometry={nodes.Cube067.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube067_1"
            geometry={nodes.Cube067_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube067_2"
            geometry={nodes.Cube067_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube067_3"
            geometry={nodes.Cube067_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube067_4"
            geometry={nodes.Cube067_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube067_5"
            geometry={nodes.Cube067_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube067_6"
            geometry={nodes.Cube067_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube067_7"
            geometry={nodes.Cube067_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube067_8"
            geometry={nodes.Cube067_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube067_9"
            geometry={nodes.Cube067_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube067_10"
            geometry={nodes.Cube067_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube067_11"
            geometry={nodes.Cube067_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_A" position={[-5.547, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube091"
            geometry={nodes.Cube091.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube091_1"
            geometry={nodes.Cube091_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube091_2"
            geometry={nodes.Cube091_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube091_3"
            geometry={nodes.Cube091_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube091_4"
            geometry={nodes.Cube091_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube091_5"
            geometry={nodes.Cube091_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube091_6"
            geometry={nodes.Cube091_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube091_7"
            geometry={nodes.Cube091_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube091_8"
            geometry={nodes.Cube091_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube091_9"
            geometry={nodes.Cube091_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text002"
          geometry={nodes.Text002.geometry}
          material={materials['Material.019']}
          position={[-10.757, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_A"
          geometry={nodes.Ducting_RFU_A.geometry}
          material={materials['Material.041']}
          position={[-10.391, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text003"
          geometry={nodes.Text003.geometry}
          material={materials['Material.019']}
          position={[-8.292, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text004"
          geometry={nodes.Text004.geometry}
          material={materials['Material.019']}
          position={[-5.647, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_B"
          position={[-3.436, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube139"
            geometry={nodes.Cube139.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube139_1"
            geometry={nodes.Cube139_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube139_2"
            geometry={nodes.Cube139_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube139_3"
            geometry={nodes.Cube139_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube139_4"
            geometry={nodes.Cube139_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube139_5"
            geometry={nodes.Cube139_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube139_6"
            geometry={nodes.Cube139_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube139_7"
            geometry={nodes.Cube139_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube139_8"
            geometry={nodes.Cube139_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube139_9"
            geometry={nodes.Cube139_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text005"
          geometry={nodes.Text005.geometry}
          material={materials['Material.019']}
          position={[-5.524, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text006"
          geometry={nodes.Text006.geometry}
          material={materials['Material.019']}
          position={[-6.079, 32.455, 1.588]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_B"
          position={[-5.574, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube140"
            geometry={nodes.Cube140.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube140_1"
            geometry={nodes.Cube140_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube140_2"
            geometry={nodes.Cube140_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube140_3"
            geometry={nodes.Cube140_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube140_4"
            geometry={nodes.Cube140_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube140_5"
            geometry={nodes.Cube140_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube140_6"
            geometry={nodes.Cube140_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube140_7"
            geometry={nodes.Cube140_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube140_8"
            geometry={nodes.Cube140_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube140_9"
            geometry={nodes.Cube140_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube140_10"
            geometry={nodes.Cube140_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube140_11"
            geometry={nodes.Cube140_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_B" position={[-0.301, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube141"
            geometry={nodes.Cube141.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube141_1"
            geometry={nodes.Cube141_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube141_2"
            geometry={nodes.Cube141_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube141_3"
            geometry={nodes.Cube141_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube141_4"
            geometry={nodes.Cube141_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube141_5"
            geometry={nodes.Cube141_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube141_6"
            geometry={nodes.Cube141_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube141_7"
            geometry={nodes.Cube141_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube141_8"
            geometry={nodes.Cube141_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube141_9"
            geometry={nodes.Cube141_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text007"
          geometry={nodes.Text007.geometry}
          material={materials['Material.019']}
          position={[-5.511, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_B"
          geometry={nodes.Ducting_RFU_B.geometry}
          material={materials['Material.041']}
          position={[-5.145, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text008"
          geometry={nodes.Text008.geometry}
          material={materials['Material.019']}
          position={[-3.046, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text009"
          geometry={nodes.Text009.geometry}
          material={materials['Material.019']}
          position={[-0.401, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_C"
          position={[1.789, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube143"
            geometry={nodes.Cube143.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube143_1"
            geometry={nodes.Cube143_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube143_2"
            geometry={nodes.Cube143_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube143_3"
            geometry={nodes.Cube143_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube143_4"
            geometry={nodes.Cube143_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube143_5"
            geometry={nodes.Cube143_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube143_6"
            geometry={nodes.Cube143_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube143_7"
            geometry={nodes.Cube143_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube143_8"
            geometry={nodes.Cube143_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube143_9"
            geometry={nodes.Cube143_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text010"
          geometry={nodes.Text010.geometry}
          material={materials['Material.019']}
          position={[-0.299, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_C"
          position={[-0.349, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube144"
            geometry={nodes.Cube144.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube144_1"
            geometry={nodes.Cube144_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube144_2"
            geometry={nodes.Cube144_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube144_3"
            geometry={nodes.Cube144_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube144_4"
            geometry={nodes.Cube144_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube144_5"
            geometry={nodes.Cube144_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube144_6"
            geometry={nodes.Cube144_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube144_7"
            geometry={nodes.Cube144_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube144_8"
            geometry={nodes.Cube144_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube144_9"
            geometry={nodes.Cube144_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube144_10"
            geometry={nodes.Cube144_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube144_11"
            geometry={nodes.Cube144_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_C" position={[4.925, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube145"
            geometry={nodes.Cube145.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube145_1"
            geometry={nodes.Cube145_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube145_2"
            geometry={nodes.Cube145_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube145_3"
            geometry={nodes.Cube145_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube145_4"
            geometry={nodes.Cube145_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube145_5"
            geometry={nodes.Cube145_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube145_6"
            geometry={nodes.Cube145_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube145_7"
            geometry={nodes.Cube145_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube145_8"
            geometry={nodes.Cube145_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube145_9"
            geometry={nodes.Cube145_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text011"
          geometry={nodes.Text011.geometry}
          material={materials['Material.019']}
          position={[-0.285, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_C"
          geometry={nodes.Ducting_RFU_C.geometry}
          material={materials['Material.041']}
          position={[0.08, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text012"
          geometry={nodes.Text012.geometry}
          material={materials['Material.019']}
          position={[2.179, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text013"
          geometry={nodes.Text013.geometry}
          material={materials['Material.019']}
          position={[4.824, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_D"
          position={[7.054, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube147"
            geometry={nodes.Cube147.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube147_1"
            geometry={nodes.Cube147_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube147_2"
            geometry={nodes.Cube147_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube147_3"
            geometry={nodes.Cube147_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube147_4"
            geometry={nodes.Cube147_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube147_5"
            geometry={nodes.Cube147_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube147_6"
            geometry={nodes.Cube147_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube147_7"
            geometry={nodes.Cube147_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube147_8"
            geometry={nodes.Cube147_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube147_9"
            geometry={nodes.Cube147_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text014"
          geometry={nodes.Text014.geometry}
          material={materials['Material.019']}
          position={[4.966, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text015"
          geometry={nodes.Text015.geometry}
          material={materials['Material.019']}
          position={[3.599, 32.455, 1.588]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_D"
          position={[4.916, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube148"
            geometry={nodes.Cube148.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube148_1"
            geometry={nodes.Cube148_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube148_2"
            geometry={nodes.Cube148_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube148_3"
            geometry={nodes.Cube148_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube148_4"
            geometry={nodes.Cube148_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube148_5"
            geometry={nodes.Cube148_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube148_6"
            geometry={nodes.Cube148_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube148_7"
            geometry={nodes.Cube148_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube148_8"
            geometry={nodes.Cube148_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube148_9"
            geometry={nodes.Cube148_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube148_10"
            geometry={nodes.Cube148_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube148_11"
            geometry={nodes.Cube148_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_D" position={[10.19, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube149"
            geometry={nodes.Cube149.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube149_1"
            geometry={nodes.Cube149_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube149_2"
            geometry={nodes.Cube149_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube149_3"
            geometry={nodes.Cube149_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube149_4"
            geometry={nodes.Cube149_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube149_5"
            geometry={nodes.Cube149_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube149_6"
            geometry={nodes.Cube149_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube149_7"
            geometry={nodes.Cube149_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube149_8"
            geometry={nodes.Cube149_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube149_9"
            geometry={nodes.Cube149_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text016"
          geometry={nodes.Text016.geometry}
          material={materials['Material.019']}
          position={[4.98, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_D"
          geometry={nodes.Ducting_RFU_D.geometry}
          material={materials['Material.041']}
          position={[5.346, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text017"
          geometry={nodes.Text017.geometry}
          material={materials['Material.019']}
          position={[7.444, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text018"
          geometry={nodes.Text018.geometry}
          material={materials['Material.019']}
          position={[10.09, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_E"
          position={[12.307, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube151"
            geometry={nodes.Cube151.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube151_1"
            geometry={nodes.Cube151_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube151_2"
            geometry={nodes.Cube151_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube151_3"
            geometry={nodes.Cube151_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube151_4"
            geometry={nodes.Cube151_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube151_5"
            geometry={nodes.Cube151_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube151_6"
            geometry={nodes.Cube151_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube151_7"
            geometry={nodes.Cube151_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube151_8"
            geometry={nodes.Cube151_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube151_9"
            geometry={nodes.Cube151_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text019"
          geometry={nodes.Text019.geometry}
          material={materials['Material.019']}
          position={[10.219, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_E"
          position={[10.169, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube152"
            geometry={nodes.Cube152.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube152_1"
            geometry={nodes.Cube152_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube152_2"
            geometry={nodes.Cube152_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube152_3"
            geometry={nodes.Cube152_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube152_4"
            geometry={nodes.Cube152_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube152_5"
            geometry={nodes.Cube152_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube152_6"
            geometry={nodes.Cube152_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube152_7"
            geometry={nodes.Cube152_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube152_8"
            geometry={nodes.Cube152_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube152_9"
            geometry={nodes.Cube152_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube152_10"
            geometry={nodes.Cube152_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube152_11"
            geometry={nodes.Cube152_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_E" position={[15.443, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube153"
            geometry={nodes.Cube153.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube153_1"
            geometry={nodes.Cube153_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube153_2"
            geometry={nodes.Cube153_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube153_3"
            geometry={nodes.Cube153_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube153_4"
            geometry={nodes.Cube153_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube153_5"
            geometry={nodes.Cube153_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube153_6"
            geometry={nodes.Cube153_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube153_7"
            geometry={nodes.Cube153_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube153_8"
            geometry={nodes.Cube153_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube153_9"
            geometry={nodes.Cube153_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text020"
          geometry={nodes.Text020.geometry}
          material={materials['Material.019']}
          position={[10.233, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_E"
          geometry={nodes.Ducting_RFU_E.geometry}
          material={materials['Material.041']}
          position={[10.598, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text021"
          geometry={nodes.Text021.geometry}
          material={materials['Material.019']}
          position={[12.697, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text022"
          geometry={nodes.Text022.geometry}
          material={materials['Material.019']}
          position={[15.342, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_F"
          position={[17.601, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube155"
            geometry={nodes.Cube155.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube155_1"
            geometry={nodes.Cube155_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube155_2"
            geometry={nodes.Cube155_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube155_3"
            geometry={nodes.Cube155_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube155_4"
            geometry={nodes.Cube155_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube155_5"
            geometry={nodes.Cube155_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube155_6"
            geometry={nodes.Cube155_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube155_7"
            geometry={nodes.Cube155_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube155_8"
            geometry={nodes.Cube155_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube155_9"
            geometry={nodes.Cube155_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text023"
          geometry={nodes.Text023.geometry}
          material={materials['Material.019']}
          position={[15.512, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_F"
          position={[15.462, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube156"
            geometry={nodes.Cube156.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube156_1"
            geometry={nodes.Cube156_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube156_2"
            geometry={nodes.Cube156_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube156_3"
            geometry={nodes.Cube156_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube156_4"
            geometry={nodes.Cube156_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube156_5"
            geometry={nodes.Cube156_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube156_6"
            geometry={nodes.Cube156_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube156_7"
            geometry={nodes.Cube156_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube156_8"
            geometry={nodes.Cube156_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube156_9"
            geometry={nodes.Cube156_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube156_10"
            geometry={nodes.Cube156_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube156_11"
            geometry={nodes.Cube156_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_F" position={[20.736, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube157"
            geometry={nodes.Cube157.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube157_1"
            geometry={nodes.Cube157_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube157_2"
            geometry={nodes.Cube157_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube157_3"
            geometry={nodes.Cube157_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube157_4"
            geometry={nodes.Cube157_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube157_5"
            geometry={nodes.Cube157_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube157_6"
            geometry={nodes.Cube157_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube157_7"
            geometry={nodes.Cube157_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube157_8"
            geometry={nodes.Cube157_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube157_9"
            geometry={nodes.Cube157_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text024"
          geometry={nodes.Text024.geometry}
          material={materials['Material.019']}
          position={[15.526, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_F"
          geometry={nodes.Ducting_RFU_F.geometry}
          material={materials['Material.041']}
          position={[15.892, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text025"
          geometry={nodes.Text025.geometry}
          material={materials['Material.019']}
          position={[17.991, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text026"
          geometry={nodes.Text026.geometry}
          material={materials['Material.019']}
          position={[20.636, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_G"
          position={[22.917, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube159"
            geometry={nodes.Cube159.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube159_1"
            geometry={nodes.Cube159_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube159_2"
            geometry={nodes.Cube159_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube159_3"
            geometry={nodes.Cube159_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube159_4"
            geometry={nodes.Cube159_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube159_5"
            geometry={nodes.Cube159_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube159_6"
            geometry={nodes.Cube159_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube159_7"
            geometry={nodes.Cube159_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube159_8"
            geometry={nodes.Cube159_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube159_9"
            geometry={nodes.Cube159_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text027"
          geometry={nodes.Text027.geometry}
          material={materials['Material.019']}
          position={[20.828, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_G"
          position={[20.778, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube160"
            geometry={nodes.Cube160.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube160_1"
            geometry={nodes.Cube160_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube160_2"
            geometry={nodes.Cube160_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube160_3"
            geometry={nodes.Cube160_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube160_4"
            geometry={nodes.Cube160_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube160_5"
            geometry={nodes.Cube160_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube160_6"
            geometry={nodes.Cube160_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube160_7"
            geometry={nodes.Cube160_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube160_8"
            geometry={nodes.Cube160_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube160_9"
            geometry={nodes.Cube160_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube160_10"
            geometry={nodes.Cube160_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube160_11"
            geometry={nodes.Cube160_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_G" position={[26.052, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube161"
            geometry={nodes.Cube161.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube161_1"
            geometry={nodes.Cube161_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube161_2"
            geometry={nodes.Cube161_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube161_3"
            geometry={nodes.Cube161_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube161_4"
            geometry={nodes.Cube161_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube161_5"
            geometry={nodes.Cube161_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube161_6"
            geometry={nodes.Cube161_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube161_7"
            geometry={nodes.Cube161_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube161_8"
            geometry={nodes.Cube161_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube161_9"
            geometry={nodes.Cube161_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text028"
          geometry={nodes.Text028.geometry}
          material={materials['Material.019']}
          position={[20.842, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_G"
          geometry={nodes.Ducting_RFU_G.geometry}
          material={materials['Material.041']}
          position={[21.208, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text029"
          geometry={nodes.Text029.geometry}
          material={materials['Material.019']}
          position={[23.307, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text030"
          geometry={nodes.Text030.geometry}
          material={materials['Material.019']}
          position={[25.952, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_H"
          position={[28.321, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube163"
            geometry={nodes.Cube163.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube163_1"
            geometry={nodes.Cube163_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube163_2"
            geometry={nodes.Cube163_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube163_3"
            geometry={nodes.Cube163_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube163_4"
            geometry={nodes.Cube163_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube163_5"
            geometry={nodes.Cube163_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube163_6"
            geometry={nodes.Cube163_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube163_7"
            geometry={nodes.Cube163_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube163_8"
            geometry={nodes.Cube163_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube163_9"
            geometry={nodes.Cube163_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text031"
          geometry={nodes.Text031.geometry}
          material={materials['Material.019']}
          position={[26.233, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text032"
          geometry={nodes.Text032.geometry}
          material={materials['Material.019']}
          position={[22.933, 32.455, 1.588]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_H"
          position={[26.183, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube164"
            geometry={nodes.Cube164.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube164_1"
            geometry={nodes.Cube164_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube164_2"
            geometry={nodes.Cube164_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube164_3"
            geometry={nodes.Cube164_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube164_4"
            geometry={nodes.Cube164_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube164_5"
            geometry={nodes.Cube164_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube164_6"
            geometry={nodes.Cube164_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube164_7"
            geometry={nodes.Cube164_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube164_8"
            geometry={nodes.Cube164_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube164_9"
            geometry={nodes.Cube164_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube164_10"
            geometry={nodes.Cube164_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube164_11"
            geometry={nodes.Cube164_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_H" position={[31.456, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube165"
            geometry={nodes.Cube165.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube165_1"
            geometry={nodes.Cube165_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube165_2"
            geometry={nodes.Cube165_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube165_3"
            geometry={nodes.Cube165_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube165_4"
            geometry={nodes.Cube165_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube165_5"
            geometry={nodes.Cube165_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube165_6"
            geometry={nodes.Cube165_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube165_7"
            geometry={nodes.Cube165_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube165_8"
            geometry={nodes.Cube165_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube165_9"
            geometry={nodes.Cube165_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text033"
          geometry={nodes.Text033.geometry}
          material={materials['Material.019']}
          position={[26.246, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_H"
          geometry={nodes.Ducting_RFU_H.geometry}
          material={materials['Material.041']}
          position={[26.612, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text034"
          geometry={nodes.Text034.geometry}
          material={materials['Material.019']}
          position={[28.711, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text035"
          geometry={nodes.Text035.geometry}
          material={materials['Material.019']}
          position={[31.356, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Post_Cooling_I"
          position={[33.764, 32.624, 1.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.013, 0.013, 0.007]}>
          <mesh
            name="Cube167"
            geometry={nodes.Cube167.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Cube167_1"
            geometry={nodes.Cube167_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube167_2"
            geometry={nodes.Cube167_2.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cube167_3"
            geometry={nodes.Cube167_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube167_4"
            geometry={nodes.Cube167_4.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="Cube167_5"
            geometry={nodes.Cube167_5.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="Cube167_6"
            geometry={nodes.Cube167_6.geometry}
            material={materials['Material.016']}
          />
          <mesh
            name="Cube167_7"
            geometry={nodes.Cube167_7.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Cube167_8"
            geometry={nodes.Cube167_8.geometry}
            material={materials['Material.018']}
          />
          <mesh
            name="Cube167_9"
            geometry={nodes.Cube167_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text036"
          geometry={nodes.Text036.geometry}
          material={materials['Material.019']}
          position={[31.676, 31.894, 3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <group
          name="AHU_Pre_Cooling_I"
          position={[31.626, 32.45, 2.353]}
          scale={[0.46, 0.42, 0.012]}>
          <mesh
            name="Cube168"
            geometry={nodes.Cube168.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="Cube168_1"
            geometry={nodes.Cube168_1.geometry}
            material={materials['Material.021']}
          />
          <mesh
            name="Cube168_2"
            geometry={nodes.Cube168_2.geometry}
            material={materials['Material.022']}
          />
          <mesh
            name="Cube168_3"
            geometry={nodes.Cube168_3.geometry}
            material={materials['Material.023']}
          />
          <mesh
            name="Cube168_4"
            geometry={nodes.Cube168_4.geometry}
            material={materials['Material.024']}
          />
          <mesh
            name="Cube168_5"
            geometry={nodes.Cube168_5.geometry}
            material={materials['Material.025']}
          />
          <mesh
            name="Cube168_6"
            geometry={nodes.Cube168_6.geometry}
            material={materials['Material.026']}
          />
          <mesh
            name="Cube168_7"
            geometry={nodes.Cube168_7.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Cube168_8"
            geometry={nodes.Cube168_8.geometry}
            material={materials['Material.028']}
          />
          <mesh
            name="Cube168_9"
            geometry={nodes.Cube168_9.geometry}
            material={materials['Material.029']}
          />
          <mesh
            name="Cube168_10"
            geometry={nodes.Cube168_10.geometry}
            material={materials['Material.030']}
          />
          <mesh
            name="Cube168_11"
            geometry={nodes.Cube168_11.geometry}
            material={materials['Material.040']}
          />
        </group>
        <group name="AHU_RFU_I" position={[36.899, 34.195, -0.979]} scale={[0.475, 0.7, 0.875]}>
          <mesh
            name="Cube169"
            geometry={nodes.Cube169.geometry}
            material={materials['Material.035']}
          />
          <mesh
            name="Cube169_1"
            geometry={nodes.Cube169_1.geometry}
            material={materials['Material.031']}
          />
          <mesh
            name="Cube169_2"
            geometry={nodes.Cube169_2.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="Cube169_3"
            geometry={nodes.Cube169_3.geometry}
            material={materials['Material.033']}
          />
          <mesh
            name="Cube169_4"
            geometry={nodes.Cube169_4.geometry}
            material={materials['Material.034']}
          />
          <mesh
            name="Cube169_5"
            geometry={nodes.Cube169_5.geometry}
            material={materials['Material.036']}
          />
          <mesh
            name="Cube169_6"
            geometry={nodes.Cube169_6.geometry}
            material={materials['Material.037']}
          />
          <mesh
            name="Cube169_7"
            geometry={nodes.Cube169_7.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="Cube169_8"
            geometry={nodes.Cube169_8.geometry}
            material={materials['Material.039']}
          />
          <mesh
            name="Cube169_9"
            geometry={nodes.Cube169_9.geometry}
            material={materials['Material.040']}
          />
        </group>
        <mesh
          name="Text037"
          geometry={nodes.Text037.geometry}
          material={materials['Material.019']}
          position={[31.689, 32.126, 3.971]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Ducting_RFU_I"
          geometry={nodes.Ducting_RFU_I.geometry}
          material={materials['Material.041']}
          position={[32.055, 32.809, 4.318]}
          scale={[0.488, 0.341, 0.341]}
        />
        <mesh
          name="Text038"
          geometry={nodes.Text038.geometry}
          material={materials['Material.019']}
          position={[34.154, 32.126, 4.052]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="Text039"
          geometry={nodes.Text039.geometry}
          material={materials['Material.019']}
          position={[36.799, 33.66, -0.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.106}
        />
        <mesh
          name="DINDING"
          geometry={nodes.DINDING.geometry}
          material={materials['Material.047']}
          position={[37.771, 35.404, -8.737]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[4.715, 22.933, 13.052]}
        />
        <group
          name="HMI_Chiller2"
          position={[7.191, 50.168, -6.122]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.029, 0.153, 0.246]}>
          <mesh
          onClick={(e) => {
            e.stopPropagation(); // ⛔️ supaya klik tidak bubble ke canvas lain
            setShowChillerModal(true); // ✅ panggil function dari props
          }}
          >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              transparent={true}
              opacity={0} // 0 = tidak terlihat
            />
        </mesh>
          <mesh
            name="Cube171"
            geometry={nodes.Cube171.geometry}
            material={nodes.Cube171.material}
          />
          <mesh
            name="Cube171_1"
            geometry={nodes.Cube171_1.geometry}
            material={materials['Material.049']}
          />
          <mesh
            name="Cube171_2"
            geometry={nodes.Cube171_2.geometry}
            material={materials['Material.050']}
          />
          <mesh
            name="Cube171_3"
            geometry={nodes.Cube171_3.geometry}
            material={materials['Material.051']}
          />
        </group>
        {/* <mesh
          position={[10, 0, 0]}
          onClick={(e) => {
            e.stopPropagation(); // ⛔️ supaya klik tidak bubble ke canvas lain
            setShowSensorModal(true); // ✅ panggil function dari props
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh> */}
        <group
          name="HMI_Chiller1"
          position={[-7.742, 50.168, -4.438]}
          rotation={[0, -1.571, 0]}
          scale={[0.029, 0.153, 0.246]}>
          onClick={(e) => {
            e.stopPropagation(); // ⛔️ supaya klik tidak bubble ke canvas lain
            setShowChillerModal(true); // ✅ panggil function dari props
          }}
          <mesh
          onClick={(e) => {
            e.stopPropagation(); // ⛔️ supaya klik tidak bubble ke canvas lain
            setShowChillerModal(true); // ✅ panggil function dari props
          }}
          >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              transparent={true}
              opacity={0} // 0 = tidak terlihat
            />
        </mesh>
          <mesh
            name="Cube172"
            geometry={nodes.Cube172.geometry}
            material={nodes.Cube172.material}
          />
          <mesh
            name="Cube172_1"
            geometry={nodes.Cube172_1.geometry}
            material={materials['Material.049']}
          />
          <mesh
            name="Cube172_2"
            geometry={nodes.Cube172_2.geometry}
            material={materials['Material.050']}
          />
          <mesh
            name="Cube172_3"
            geometry={nodes.Cube172_3.geometry}
            material={materials['Material.051']}
          />
        </group>
        <group name="SensorFlow" 
          position={[-0.578, 49.168, -9.116]} 
          scale={[0.069, 0.067, 0.146]}
          >
          <mesh
          onClick={(e) => {
            e.stopPropagation(); // ⛔️ supaya klik tidak bubble ke canvas lain
            setShowSensorModal(true); // ✅ panggil function dari props
          }}
          >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              transparent={true}
              opacity={0} // 0 = tidak terlihat
            />
          </mesh>
          <mesh
            name="Cube173"
            geometry={nodes.Cube173.geometry}
            material={materials['Material.052']}
          />
          <mesh
            name="Cube173_1"
            geometry={nodes.Cube173_1.geometry}
            material={materials['Material.053']}
          />
        </group>
        <mesh
          name="SensorALT6"
          geometry={nodes.SensorALT6.geometry}
          material={nodes.SensorALT6.material}
          position={[-9.41, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6A"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorALT5"
          geometry={nodes.SensorALT5.geometry}
          material={nodes.SensorALT5.material}
          position={[-9.41, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5A"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorALT4"
          geometry={nodes.SensorALT4.geometry}
          material={nodes.SensorALT4.material}
          position={[-9.41, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4A"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorALT3"
          geometry={nodes.SensorALT3.geometry}
          material={nodes.SensorALT3.material}
          position={[-9.41, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3A"]?.toFixed(1) ?? "-"}}`}
        </Text>
        <mesh
          name="SensorALT2"
          geometry={nodes.SensorALT2.geometry}
          material={nodes.SensorALT2.material}
          position={[-9.41, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2A"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorALT1"
          geometry={nodes.SensorALT1.geometry}
          material={nodes.SensorALT1.material}
          position={[-9.41, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-9.41, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1A"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1A"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1A"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT6"
          geometry={nodes.SensorBLT6.geometry}
          material={nodes.SensorBLT6.material}
          position={[-4.277, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT5"
          geometry={nodes.SensorBLT5.geometry}
          material={nodes.SensorBLT5.material}
          position={[-4.277, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT4"
          geometry={nodes.SensorBLT4.geometry}
          material={nodes.SensorBLT4.material}
          position={[-4.277, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT3"
          geometry={nodes.SensorBLT3.geometry}
          material={nodes.SensorBLT3.material}
          position={[-4.277, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT2"
          geometry={nodes.SensorBLT2.geometry}
          material={nodes.SensorBLT2.material}
          position={[-4.277, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorBLT1"
          geometry={nodes.SensorBLT1.geometry}
          material={nodes.SensorBLT1.material}
          position={[-4.277, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[-4.3, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1B"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1B"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1B"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT6"
          geometry={nodes.SensorCLT6.geometry}
          material={nodes.SensorCLT6.material}
          position={[1.137, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT5"
          geometry={nodes.SensorCLT5.geometry}
          material={nodes.SensorCLT5.material}
          position={[1.137, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT4"
          geometry={nodes.SensorCLT4.geometry}
          material={nodes.SensorCLT4.material}
          position={[1.137, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT3"
          geometry={nodes.SensorCLT3.geometry}
          material={nodes.SensorCLT3.material}
          position={[1.137, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT2"
          geometry={nodes.SensorCLT2.geometry}
          material={nodes.SensorCLT2.material}
          position={[1.137, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorCLT1"
          geometry={nodes.SensorCLT1.geometry}
          material={nodes.SensorCLT1.material}
          position={[1.137, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[1.3, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1C"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1C"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1C"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT6"
          geometry={nodes.SensorDLT6.geometry}
          material={nodes.SensorDLT6.material}
          position={[6.176, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT5"
          geometry={nodes.SensorDLT5.geometry}
          material={nodes.SensorDLT5.material}
          position={[6.176, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT4"
          geometry={nodes.SensorDLT4.geometry}
          material={nodes.SensorDLT4.material}
          position={[6.176, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT3"
          geometry={nodes.SensorDLT3.geometry}
          material={nodes.SensorDLT3.material}
          position={[6.176, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT2"
          geometry={nodes.SensorDLT2.geometry}
          material={nodes.SensorDLT2.material}
          position={[6.176, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorDLT1"
          geometry={nodes.SensorDLT1.geometry}
          material={nodes.SensorDLT1.material}
          position={[6.176, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[6.3, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1D"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1D"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1D"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT6"
          geometry={nodes.SensorELT6.geometry}
          material={nodes.SensorELT6.material}
          position={[11.623, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT5"
          geometry={nodes.SensorELT5.geometry}
          material={nodes.SensorELT5.material}
          position={[11.623, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT4"
          geometry={nodes.SensorELT4.geometry}
          material={nodes.SensorELT4.material}
          position={[11.623, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT3"
          geometry={nodes.SensorELT3.geometry}
          material={nodes.SensorELT3.material}
          position={[11.623, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT2"
          geometry={nodes.SensorELT2.geometry}
          material={nodes.SensorELT2.material}
          position={[11.623, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorELT1"
          geometry={nodes.SensorELT1.geometry}
          material={nodes.SensorELT1.material}
          position={[11.623, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[11.7, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1E"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1E"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1E"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT6"
          geometry={nodes.SensorFLT6.geometry}
          material={nodes.SensorFLT6.material}
          position={[16.702, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT5"
          geometry={nodes.SensorFLT5.geometry}
          material={nodes.SensorFLT5.material}
          position={[16.702, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT4"
          geometry={nodes.SensorFLT4.geometry}
          material={nodes.SensorFLT4.material}
          position={[16.702, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT3"
          geometry={nodes.SensorFLT3.geometry}
          material={nodes.SensorFLT3.material}
          position={[16.702, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT2"
          geometry={nodes.SensorFLT2.geometry}
          material={nodes.SensorFLT2.material}
          position={[16.702, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorFLT1"
          geometry={nodes.SensorFLT1.geometry}
          material={nodes.SensorFLT1.material}
          position={[16.702, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[16.75, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1F"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1F"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1F"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT6"
          geometry={nodes.SensorGLT6.geometry}
          material={nodes.SensorGLT6.material}
          position={[22.173, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT5"
          geometry={nodes.SensorGLT5.geometry}
          material={nodes.SensorGLT5.material}
          position={[22.173, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT4"
          geometry={nodes.SensorGLT4.geometry}
          material={nodes.SensorGLT4.material}
          position={[22.173, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT3"
          geometry={nodes.SensorGLT3.geometry}
          material={nodes.SensorGLT3.material}
          position={[22.173, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT2"
          geometry={nodes.SensorGLT2.geometry}
          material={nodes.SensorGLT2.material}
          position={[22.173, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorGLT1"
          geometry={nodes.SensorGLT1.geometry}
          material={nodes.SensorGLT1.material}
          position={[22.173, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[22.25, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1G"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1G"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1G"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT6"
          geometry={nodes.SensorHLT6.geometry}
          material={nodes.SensorHLT6.material}
          position={[27.375, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[27.45, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT5"
          geometry={nodes.SensorHLT5.geometry}
          material={nodes.SensorHLT5.material}
          position={[27.375, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[27.45, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT4"
          geometry={nodes.SensorHLT4.geometry}
          material={nodes.SensorHLT4.material}
          position={[27.375, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        /><Text
          position={[27.45, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT3"
          geometry={nodes.SensorHLT3.geometry}
          material={nodes.SensorHLT3.material}
          position={[27.375, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[27.45, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT2"
          geometry={nodes.SensorHLT2.geometry}
          material={nodes.SensorHLT2.material}
          position={[27.375, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[27.45, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorHLT1"
          geometry={nodes.SensorHLT1.geometry}
          material={nodes.SensorHLT1.material}
          position={[27.375, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[27.45, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1H"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1H"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1H"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT6"
          geometry={nodes.SensorILT6.geometry}
          material={nodes.SensorILT6.material}
          position={[33.869, 46.273, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 46.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL6I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL6I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT5"
          geometry={nodes.SensorILT5.geometry}
          material={nodes.SensorILT5.material}
          position={[33.869, 42.184, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 42.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL5I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL5I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT4"
          geometry={nodes.SensorILT4.geometry}
          material={nodes.SensorILT4.material}
          position={[33.869, 37.822, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 38, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL4I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL4I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT3"
          geometry={nodes.SensorILT3.geometry}
          material={nodes.SensorILT3.material}
          position={[33.869, 33.392, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 33.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL3I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL3I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT2"
          geometry={nodes.SensorILT2.geometry}
          material={nodes.SensorILT2.material}
          position={[33.869, 29.234, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 29.4, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL2I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL2I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="SensorILT1"
          geometry={nodes.SensorILT1.geometry}
          material={nodes.SensorILT1.material}
          position={[33.869, 25.043, -12.233]}
          scale={[1, 1, 0.28]}
        />
        <Text
          position={[33.95, 25.1, -12.58]} // agak di atas mesh
          scale={[-1, 1, 1]}
          fontSize={0.3}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          lineHeight={1.5}
        >
          {`T: ${suhu["SL1I"]?.toFixed(1) ?? "-"}°C\nRH: ${rh["RHL1I"]?.toFixed(1) ?? "-"}%\nP: ${pressure["PAL1I"]?.toFixed(1) ?? "-"}`}
        </Text>
        <mesh
          name="TagA"
          geometry={nodes.TagA.geometry}
          material={materials['Material.055']}
          position={[-9.365, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text040"
          geometry={nodes.Text040.geometry}
          material={materials.Material}
          position={[-8.561, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagB"
          geometry={nodes.TagB.geometry}
          material={materials['Material.055']}
          position={[-4.27, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text041"
          geometry={nodes.Text041.geometry}
          material={materials.Material}
          position={[-3.467, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagC"
          geometry={nodes.TagC.geometry}
          material={materials['Material.055']}
          position={[1.12, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text042"
          geometry={nodes.Text042.geometry}
          material={materials.Material}
          position={[1.924, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagD"
          geometry={nodes.TagD.geometry}
          material={materials['Material.055']}
          position={[6.232, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text043"
          geometry={nodes.Text043.geometry}
          material={materials.Material}
          position={[7.035, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagE"
          geometry={nodes.TagE.geometry}
          material={materials['Material.055']}
          position={[11.546, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text044"
          geometry={nodes.Text044.geometry}
          material={materials.Material}
          position={[12.349, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagF"
          geometry={nodes.TagF.geometry}
          material={materials['Material.055']}
          position={[16.777, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text045"
          geometry={nodes.Text045.geometry}
          material={materials.Material}
          position={[17.581, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagG"
          geometry={nodes.TagG.geometry}
          material={materials['Material.055']}
          position={[22.161, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text046"
          geometry={nodes.Text046.geometry}
          material={materials.Material}
          position={[22.964, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagH"
          geometry={nodes.TagH.geometry}
          material={materials['Material.055']}
          position={[27.506, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text047"
          geometry={nodes.Text047.geometry}
          material={materials.Material}
          position={[28.309, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
        <mesh
          name="TagI"
          geometry={nodes.TagI.geometry}
          material={materials['Material.055']}
          position={[33.838, 48.114, -13.315]}
          scale={[1.934, 0.282, 0.091]}
        />
        <mesh
          name="Text048"
          geometry={nodes.Text048.geometry}
          material={materials.Material}
          position={[34.642, 47.901, -13.434]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.569}
        />
      </group>
      {activeTooltip.visible && (
          <Html position={activeTooltip.position} center distanceFactor={8} occlude>
            <div className="bg-white text-gray-800 px-3 py-1 rounded-md shadow-md border text-sm font-medium whitespace-nowrap">
              {activeTooltip.text}
            </div>
          </Html>
        )}
    </a.group>
  );
};

export default Chiller;