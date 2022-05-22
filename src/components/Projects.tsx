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
    <div className="container rounded-xl  mx-auto">
      <section>
        <div className="flex justify-center">
          <h1 className="my-6 text-2xl">Mes projets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          <ProjectCard
            projectName="API : User"
            image={TechnoImage.NestJS}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
            tags={[{ name: "TypeScript", color: TechnoColor.TypeScript }]}
          />
          <ProjectCard
            projectName="BDD : User"
            image={TechnoImage.PostgreSQL}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
            tags={[{ name: "SQL", color: TechnoColor.Sql }]}
          />
          <ProjectCard
            projectName="Docker : User"
            image={TechnoImage.Docker}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a. "
            tags={[{ name: "YAML", color: TechnoColor.Yaml }]}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
