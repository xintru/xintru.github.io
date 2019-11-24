import React from 'react';
import classes from './App.module.css';
import { Canvas } from 'react-three-fiber'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'

import RainEffect from './Three.js/RainEffect'
import Controls from './Three.js/Controls'

const App = () => {
  console.log(isMobile)
  return (
    <div>
      <Canvas>
        <RainEffect />
        {/* <Controls /> */}
      </Canvas>
      <div className={classNames(
        classes.aboutMe,
        isMobile && classes.aboutMeMobile
      )}>
        <h1>Xintru</h1>
        <p>Frontend developer</p>
        <a href="https://github.com/xintru">My github</a>

      </div>
    </div>

  );
}

export default App;
