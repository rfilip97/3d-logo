import React from 'react';
import { Canvas } from '@react-three/fiber';
import RLogo from '../Logos/RLogo/RLogo';
import './canvas.scss';

export default function MainCanvas() {
  return (
    <div className='canvasWrapper'>
      <Canvas>
          <ambientLight color="white" intensity={0.03} />
          <pointLight position={[0, 20, 10]} intensity={0.05} />
          <RLogo />
      </Canvas>
    </div>
  )
}
