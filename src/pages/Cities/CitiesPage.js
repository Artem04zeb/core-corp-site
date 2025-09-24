import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import CitiesHero from './CitiesHero';
import CitiesGrid from './CitiesGrid';
import CitiesSEO from './CitiesSEO';
import Footer from '../../components/Footer/Footer';

const CitiesPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

const CitiesPage = () => {
  return (
    <CitiesPageContainer>
      <Header />
      <CitiesHero />
      <CitiesGrid />
      <CitiesSEO />
      <Footer />
    </CitiesPageContainer>
  );
};

export default CitiesPage;
