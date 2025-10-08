import React from 'react';
import ProjectCards from '../components/projectsComponents/ProjectCards';
import ProjectTechStack from '../components/projectsComponents/ProjectTechStack';
import ProjectTimeline from '../components/projectsComponents/ProjectTimeline';

const ProjectsContainer = () => {
  return (
    <>
      <ProjectCards />
      <ProjectTechStack />
      <ProjectTimeline />
    </>
  );
};

export default ProjectsContainer;
