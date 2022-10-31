import React from 'react';
import { Canvas } from '@react-three/fiber';
import RLogo from '../Logos/RLogo/RLogo';
import './canvas.scss';

export default function MainCanvas() {
  return (
    <div className='canvasWrapper'>
      <Canvas style={{ background: "#ffffff" }}>
          <RLogo />
      </Canvas>
    </div>
  )
}
