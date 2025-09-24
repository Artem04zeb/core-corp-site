import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import RecentProjects from './RecentProjects';
import AboutSection from './AboutSection';
import Footer from '../../components/Footer/Footer';
import ContactPopup from '../../components/ContactPopup/ContactPopup';
import { ContactPopupProvider, useContactPopupContext } from '../../contexts/ContactPopupContext';

const ServicesPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

const ServicesPageContent = () => {
  const { isPopupOpen, closePopup } = useContactPopupContext();

  return (
    <ServicesPageContainer>
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <RecentProjects />
      <AboutSection />
      <Footer />
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </ServicesPageContainer>
  );
};

const ServicesPage = () => {
  return (
    <ContactPopupProvider>
      <ServicesPageContent />
    </ContactPopupProvider>
  );
};

export default ServicesPage;
