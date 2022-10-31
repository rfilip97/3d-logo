import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RLogo(props) {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "models/r-logo/r-logo.glb"
  );
  const scaleWeight = 60;
  const [rotationWeight, setRotationWeight] = useState(0.17);

  useFrame(({ clock }) => {
    const value = clock.getElapsedTime();
    setRotationWeight(value);
  });

  return (
    <>
      <ambientLight />
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.shape0.geometry}
          material={materials["SVGMat.001"]}
          rotation={[1.7, 0, rotationWeight]}
          scale={scaleWeight}
        />
        <mesh
          geometry={nodes.shape1.geometry}
          material={materials["SVGMat.002"]}
          rotation={[1.7, 0, rotationWeight]}
          scale={scaleWeight}
        />
        <mesh
          geometry={nodes.shape2.geometry}
          material={materials["SVGMat.003"]}
          rotation={[1.7, 0, rotationWeight]}
          scale={scaleWeight}
        />
      </group>
    </>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "models/r-logo/r-logo.glb");
