import React from "react";
import ProjectCard from "./ProjectCard";
import { stringify } from "querystring";
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
          <h1 className="my-6 text-2xl">Mes projets</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            projectName="Pets Shelter"
            image={TechnoImage.NestJS}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
            tags={[{ name: "TypeScript", color: TechnoColor.TypeScript }]}
          />
          <ProjectCard
            projectName="Portfolio"
            image={TechnoImage.React}
            description="Mon site portfolio"
            tags={[{ name: "TypeScript", color: TechnoColor.TypeScript }]}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
