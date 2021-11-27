import Image from 'next/image';

const Project = ({ project }) => {
  return (
    <div className="flex">
      <Image src={project.logo} alt={project.name} />
      <div className="flex flex-col">
        <h3>{project.name}</h3>
        <small>{project.status}</small>
        <p>{project.description}</p>
        <p>{project.startDate}/{project.endDate || 'presente'}</p>
      </div>
    </div>
  );
}

export default Project;