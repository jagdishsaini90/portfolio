import React from "react";
import { Fade, Rotate } from "react-reveal";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";
import img10 from "../../images/img10.png";

const DemoProjects = () => {
  return (
    <div className="demo__projects">
      <Fade top>
        <h1 className="title3">Projects</h1>
      </Fade>
      <div className="tech2">
        <Rotate bottom left>
          <a href="https://github.com/jagdishsaini90/fun-with-triangles" style={{textDecoration:"none"}}>
            <div>
            <div className="card">
              <img
                src={img8}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Fade left>
              <h2>Fun with Triangles</h2>
            </Fade>
          </div>
          </a>
        </Rotate>
        <Fade bottom>
          <a href="https://github.com/jagdishsaini90/lucky-birthday" style={{textDecoration:"none"}}>
            <div>
            <div className="card">
              <img
                src={img10}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Fade bottom>
              <h2>is Your birthday lucky</h2>
            </Fade>
          </div>
          </a>
        </Fade>
        <Rotate bottom right>
          <a href="https://github.com/jagdishsaini90/minion-translator" style={{textDecoration:"none"}}>
            <div>
            <div className="card">
              <img
                src={img9}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Fade right>
              <h2>Minion translater</h2>
            </Fade>
          </div>
          </a>
        </Rotate>
      </div>
    </div>
  );
};

export default DemoProjects;
