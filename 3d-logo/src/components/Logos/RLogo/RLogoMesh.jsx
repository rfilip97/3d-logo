import React from 'react';
import { useGLTF } from "@react-three/drei";

export default function RLogoMesh({ rotationWeight, shapeIndex}) {
  const scaleWeight = 60;
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "models/r-logo/r-logo.glb"
  );

  return (
    <mesh
    geometry={nodes["shape" + shapeIndex].geometry}
    material={materials["SVGMat.001"]}
    rotation={[1.7, 0, rotationWeight]}
    scale={scaleWeight}
  />
  )
}
