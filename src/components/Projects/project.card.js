import React from "react";
import { Fade } from "react-reveal";
import "./Project.css";

const Card = ({ doc }) => {
  return (
    <div className="project__Card">
      <h2>{doc.name}</h2>
      <h5 style={{ margin: "10px 0 10px 0" }}>{doc.date}</h5>
      <h3 style={{ color: "grey" }}>{doc.description}</h3>
      <a href={doc.link} style={{ cursor: "pointer" }}>
        <button className="live__button">Live Project</button>
      </a>
      <a href={doc.github} style={{ cursor: "pointer" }}>
        <button className="github__button">View Source</button>
      </a>
    </div>
  );
};

const ProjectCard = ({ doc, num }) => {
  return (
    <Fade bottom>
      <Card doc={doc} />
    </Fade>
  );
};

export default ProjectCard;
