import React, { useState } from 'react';
import classes from './App.module.css';
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import { renderInit } from './Three.js/CloudScene'

const App = () => {
  renderInit()
  return (
    <div className={classNames(
      classes.aboutMe,
      isMobile && classes.aboutMeMobile
    )} id="content">
      <h1>Xintru</h1>
      <p>Frontend разработчик</p>
      <a href="https://github.com/xintru">Github</a>
      <p>Моб. телефон: +79133768339</p>
      <p>Email: xintru@gmail.com</p>
    </div>
  );
}

export default App;
