import React from "react";
import ProjectCard from "./Projects/ProjectCard";

const Projects = () => {
  // CONTAINER
  /*
  mt :  margin top
  grid : will create a grid container
  */
  // GRID PROJECTS
  return (
    <div className="container mt-60 bg-bgSurface rounded">
      <section>
        <h2>Mes projets</h2>
        <p>BLA BLA BLA BLA</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 bg-purple-300">
          <ProjectCard projectName="API : User" />
          <ProjectCard projectName="API : Pokemon" />
          <ProjectCard projectName="Mon portfolio" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
