import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
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
  
  const breadcrumbItems = [
    { label: 'Главная', path: '/' },
    { label: 'Услуги', path: '/services' }
  ];

  return (
    <ServicesPageContainer>
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
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
