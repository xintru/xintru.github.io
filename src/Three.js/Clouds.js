import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame, useThree } from 'react-three-fiber'
import {
    TextureLoader,
} from 'three'

import smokeTexture from '../assets/smoke-1.png'

function Clouds(props) {
    const { size } = useThree()
    const ref = useRef()
    const smoke = useLoader(TextureLoader, smokeTexture)
    useFrame(() => {
        ref.current.rotation.z -= 0.00045
    })
    useEffect(() => {
        ref.current.position.x = Math.random() * 800 - 400
        ref.current.position.y = 500
        ref.current.position.z = Math.random() * 500 - 450
    }, [size])

    return (
        <mesh
            ref={ref}
            position={[
                Math.random() * 800 - 400,
                500,
                Math.random() * 500 - 450
            ]}
            rotation={[1.16, -0.12, Math.random() * 360]}>
            <planeBufferGeometry attach="geometry" args={[500, 500]} />
            <meshLambertMaterial attach="material" map={smoke} transparent={true} opacity={0.6}/>
        </mesh>
    )
}

export default Clouds