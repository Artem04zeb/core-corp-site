import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProjectsHero from './ProjectsHero';
import ProjectsGrid from './ProjectsGrid';
import RunningText from './RunningText';
import Footer from '../../components/Footer/Footer';

const ProjectsPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

const ProjectsPage = () => {
  const breadcrumbItems = [
    { label: 'Главная', path: '/' },
    { label: 'Проекты', path: '/projects' }
  ];

  return (
    <ProjectsPageContainer>
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <ProjectsHero />
      <ProjectsGrid />
      <RunningText />
      <Footer />
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;
