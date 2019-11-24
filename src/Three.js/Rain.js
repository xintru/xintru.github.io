import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Rain = (props) => {
    const { Points } = useThree()
    const ref = useRef()
    const rainGeo = new THREE.Geometry();
    for (let i = 0; i < 10000; i++) {
        const rainDrop = new THREE.Vector3(
            Math.random() * 400 - 200,
            Math.random() * 500 - 250,
            Math.random() * 400 - 200
        );
        rainDrop.velocity = 0;
        rainGeo.vertices.push(rainDrop);
    }
    const rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.15,
        transparent: true
    });

    useFrame(() => {
        rainGeo.vertices.forEach(p => {
            p.velocity -= 0.1 + Math.random() * 0.1;
            p.y += p.velocity;
            if (p.y < -200) {
              p.y = 200;
              p.velocity = 0;
            }
          });
          rainGeo.verticesNeedUpdate = true;
          ref.current.rotation.y +=0.002;
    })
    return (
        <points ref={ref} args={[rainGeo, rainMaterial]} />
    )
}

export default Rain