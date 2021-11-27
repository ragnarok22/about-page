import PageLayout from '../components/layouts/page';
import ProjectList from '../components/Projects';

const ProjectsPage = () => {
  return (
    <PageLayout>
      <h1 className="page-title">Mis proyectos</h1>
      <ProjectList />
    </PageLayout>
  )
}

export default ProjectsPage