import React from "react";
import Divider from "./shared/Divider";

interface ProjectCardProps {
  projectName: string;
  image: string;
  color: string;
  githubUrl?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  image,
  color,
  githubUrl,
  description,
}) => {
  console.log(color);
  return (
    <div className={`rounded-xl border-b-2 border-[${color}]`}>
      <div className="flex flex-col items-center rounded-xl bg-bgSurface1">
        <img
          className="my-3 h-10 w-10 object-contain"
          src={image}
          alt="technologie logo"
        />

        <Divider color={color} />
        <h2 className="my-3">{projectName}</h2>
        <p className="mx-3">{description}</p>
        <button className="mx-3 rounded-lg bg-white">Github</button>
      </div>
    </div>
  );
};

export default ProjectCard;
