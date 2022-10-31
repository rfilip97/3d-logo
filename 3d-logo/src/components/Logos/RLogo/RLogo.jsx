import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import RLogoMesh from "./RLogoMesh";

export default function RLogo(props) {
  const [rotationWeight, setRotationWeight] = useState(0.17);

  useFrame(({ clock }) => {
    const value = clock.getElapsedTime();
    setRotationWeight(value);
  });

  return (
    <group {...props} dispose={null}>
      <RLogoMesh rotationWeight={rotationWeight} shapeIndex={0} />
      <RLogoMesh rotationWeight={rotationWeight} shapeIndex={1} />
      <RLogoMesh rotationWeight={rotationWeight} shapeIndex={2} />
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "models/r-logo/r-logo.glb");
