import React from "react";

import { TechnoImage } from "../helper/TechnoImage";

interface ProjectCardProps {
  projectName?: string;
  image?: string;
  githubUrl?: string;
  description?: string;
  tags?: tag[];
}

type tag = {
  name: string;
  color: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div
      className="
    container
    border-solid
    bg-gradient-to-tr
    from-[#4158D0]
    to-[#C850C0]
    rounded-xl"
    >
      <div className="m-0.5 flex-col bg-bgSurface1 rounded-xl ">
        <div className="flex flex-row p-4 items-center space-x-4 justify-between">
          <img
            className="object-contain h-10 w-10"
            src={props.image}
            alt="technologie logo"
          />
          <h2>{props.projectName}</h2>
          {props.tags?.map((x) => (
            <div
              className={`uppercase text-xs px-2 bg-blue-400 ${x.color} rounded-lg`}
            >
              {x.name}
            </div>
          ))}
        </div>
        <p className="px-4">{props.description}</p>
        <div className="flex flex-row p-4">
          <button className="bg-white rounded-lg w-max">Github</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
