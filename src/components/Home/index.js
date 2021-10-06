import React from 'react'
import Fade from 'react-reveal/Fade';
import DemoProjects from './DemoProjects';
import "./Home.css"
import TechStack from './TechStack';

const index = () => {
  return (
    <>
      <div className="home1">
        <Fade left>
          <h1 className="title1">Hi I'm</h1>
        </Fade>
        <Fade right>
          <h1 className="title2">Jagdish Saini</h1>
        </Fade>
        <Fade top>
          <h4 className="title3">Web Developer</h4>
        </Fade>
      </div>
      <TechStack />
      <DemoProjects  />
    </>
  )
}

export default index
