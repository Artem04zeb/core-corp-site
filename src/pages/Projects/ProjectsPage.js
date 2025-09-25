import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProjectsHero from './ProjectsHero';
import ProjectsGrid from './ProjectsGrid';
import RunningText from './RunningText';
import Footer from '../../components/Footer/Footer';

const ProjectsPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

const ProjectsPage = () => {
  return (
    <ProjectsPageContainer>
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <RunningText />
      <Footer />
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;
