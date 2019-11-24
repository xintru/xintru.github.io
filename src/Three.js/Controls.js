import React, { useRef } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend( {OrbitControls} )

function Controls() {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate
      enablePan={false}
      maxDistance={1000}
      minDistance={5}
      minPolarAngle={Math.PI / 100}
      maxPolarAngle={Math.PI}
    />
  );
}

export default Controls;