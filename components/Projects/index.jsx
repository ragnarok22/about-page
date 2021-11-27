import Link from "next/link";

import {projects} from "../../data/projects";
import Project from "./Project.jsx";

const ProjectList = () => {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectList;
