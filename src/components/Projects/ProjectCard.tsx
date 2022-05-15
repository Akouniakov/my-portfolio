import React from "react";

interface ProjectCardProps {
  projectName?: string;
  image?: string;
  githubUrl?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return <div className="container"></div>;
};

export default ProjectCard;
