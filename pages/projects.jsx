import PageLayout from '../components/layouts/page';
import ProjectList from '../components/Projects';

const ProjectsPage = () => {
  return (
    <PageLayout className="px-5 md:px-28">
      <h1 className="text-4xl text-center mt-3">Mis proyectos</h1>
      <ProjectList />
    </PageLayout>
  )
}

export default ProjectsPage