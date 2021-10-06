import React from "react";
import { Zoom,Fade } from "react-reveal";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";

import "./Home.css";



const TechStack = () => {
  return (
    <div style={{height:"60vh"}}>
      <Fade bottom>
        <h1 className="title3">Tech I use</h1>
      </Fade>
      <div className="tech">
        <Fade bottom>
        <Fade right>
          <img src={img2} alt="" width="200" />
        </Fade>
          <img src={img1} alt="" />
        </Fade>
         <Fade left>
          <img src={img3} alt="" width="200" />
        </Fade>
        <Zoom top>
          <img src={img4} alt="" width="200" />
        </Zoom>
      </div>
      <div>
        <Fade bottom>
          <img src={img5} alt="" width="200" />
        </Fade>
        <Fade right>
          <img src={img6} alt="" width="100" />
        </Fade>
         <Fade left>
          <img src={img7} alt="" width="100" />
        </Fade>
      </div>
    </div>
  );
};

export default TechStack;
