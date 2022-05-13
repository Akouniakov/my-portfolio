import React from "react";

interface ProjectCardProps {
  projectName: string;
  image?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return <div className="">{props.projectName}</div>;
};

export default ProjectCard;
