import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import AboutHero from './AboutHero';
import TextBlockLeft from './TextBlockLeft';
import Timeline from './Timeline';
import ParallaxBlock from './ParallaxBlock';
import Footer from '../../components/Footer/Footer';

const AboutPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <Header />
      <AboutHero />
      <TextBlockLeft />
      <Timeline />
      <ParallaxBlock />
      <Footer />
    </AboutPageContainer>
  );
};

export default AboutPage;
