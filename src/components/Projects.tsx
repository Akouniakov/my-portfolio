import React from "react";
import ProjectCard from "./Projects/ProjectCard";
import logoNest from "../img/nestjs.png";

const Projects = () => {
  // CONTAINER
  //
  // mt       :  margin top
  // grid     : will create a grid container
  // mx-auto  : center un container
  // GRID PROJECTS
  return (
    <div className="container bg-bgSurface rounded-xl  mx-auto">
      <section>
        <div className="flex justify-center">
          <h1 className="my-6 text-2xl">Mes projets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          <ProjectCard
            projectName="API : User"
            image={logoNest}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
          <ProjectCard
            projectName="API : User"
            image={logoNest}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
          <ProjectCard
            projectName="API : User"
            image={logoNest}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
