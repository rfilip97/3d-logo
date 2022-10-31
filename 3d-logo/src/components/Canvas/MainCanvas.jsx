import React from 'react';
import { Canvas } from '@react-three/fiber';
import RLogo from '../Logos/RLogo/RLogo';

export default function MainCanvas() {
  return (
    <Canvas style={{ background: "#999999" }}>
        <RLogo />
    </Canvas>
  )
}
