import React from 'react';
import { MyProjects,NavBar} from '../../components';
import './style.css'

const Projects = () => {
  return (
    <>
        <NavBar/>
    <div className="projects" >
      <MyProjects />
    </div>
    </>
  )
}

export default Projects
