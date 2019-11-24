/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react'
import { useThree } from 'react-three-fiber'

import Lights from './Lights'
import Clouds from './Clouds'
import Lightning from './Lightning'
import Rain from './Rain'

const rainEffect = () => {
  const { camera, gl, size } = useThree()

  camera.fov = 60
  camera.aspect = window.innerWidth / window.innerHeight
  camera.near = 1
  camera.far = 1000

  camera.position.set(0, 0, 1)
  camera.rotation.set(1.16, -0.12, 0.27)

  useEffect(() => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    gl.setSize(size.width, size.height)
  }, [size])

  return (
    <>
      <Lights
        type='AmbientLight'
        color={0x555555}
      />
      <Lights
        type='DirectionalLight'
        color={0xffeedd}
        position={[0, 0, 1]}
      />
      <Lightning />
      <fogExp2 color={0x11111f} density={0.002} />
      <React.Suspense fallback={<mesh />} >
        {[...Array(25)].map((cloud, i) => <Clouds key={i}/>)}
      </React.Suspense>
      
      <Rain />
    </>
  )
}

export default rainEffect