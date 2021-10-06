import React from 'react';
import { PROJECTS } from '../../projects'
import ProjectCard from './project.card';

const index = () => {
  return (
    <div>
      <h1>See my Projects</h1>

      <div>
        {PROJECTS.map((doc, i) => {
          return <ProjectCard doc={doc} key={i} num={i+1}  />
        })}
      </div>
    </div>
  )
}

export default index;
