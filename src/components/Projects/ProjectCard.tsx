import React from "react";

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
    <div className="container">
      <img src={props.image} />
      <div className="flex flex-row">
        {props.tags?.map((x) => (
          <div className="uppercase text-xs px-2 bg-blue-400 rounded-lg">
            {x.name}
          </div>
        ))}
      </div>
      <div>{props.projectName}</div>
    </div>
  );
};

export default ProjectCard;
