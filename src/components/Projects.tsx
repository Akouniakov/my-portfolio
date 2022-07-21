import React from "react";
import ProjectCard from "./ProjectCard";
import { TechnoImage } from "../helper/TechnoImage";
import { TechnoColor } from "../helper/TechnoColor";

const Projects = () => {
  // CONTAINER
  //
  // mt       :  margin top
  // grid     : will create a grid container
  // mx-auto  : center un container
  // GRID PROJECTS
  return (
    <div className="lg:px-24-w-full container mx-auto items-center justify-between px-8 md:px-14">
      <section>
        <div className="flex">
          <h1 className="my-6 text-2xl font-bold">Mes projets personnels :</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            projectName="Front : Pets Shelter"
            image={TechnoImage.React}
            color="#61dafb"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
          <ProjectCard
            projectName="API : Task"
            image={TechnoImage.React}
            color={TechnoColor.Express}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
          <ProjectCard
            projectName="API : Pets Shelter"
            image={TechnoImage.NestJS}
            color={TechnoColor.React}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
          <ProjectCard
            projectName="Front : Pets Shelter"
            image={TechnoImage.React}
            color={TechnoColor.React}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
