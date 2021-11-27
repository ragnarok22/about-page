import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <div className="flex my-4 flex-col md:flex-row">
      <div className="min-w-max w-16 h-16 mb-1">
        <Image
          src={project.logo}
          alt={project.name}
          width="64"
          height="64"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:ml-3">
        <Link href={project.url}>
          <a className="" target="_blank">
          <h3 className="text-xl mb-2 md:mb-0">{project.name}</h3>
          </a>
        </Link>
        <p>{project.status}</p>
        <p>{project.description}</p>
        <p className="text-xs">
          {project.startDate} / {project.endDate || "presente"}
        </p>
      </div>
    </div>
  );
};

export default Project;
