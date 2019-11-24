import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const Lightning = (props) => {
    const ref = useRef()
    const color = 0x062d89
    const power = 20
    const distance = 500
    const decay = 2
    const position = [200, 300, 100]
    useFrame(() => {
        if(Math.random() > 0.96 || ref.current.power > 200) {
            if(ref.current.power < 100) 
              ref.current.position.set(
                Math.random()*400,
                300 + Math.random() *200,
                100
              );
            ref.current.power = 50 + Math.random() * 500;
          
    }})
    
    return <pointLight
        ref={ref}
        color={color}
        power={power}
        distance={distance}
        decay={decay}
        position={position} />
}

export default Lightning