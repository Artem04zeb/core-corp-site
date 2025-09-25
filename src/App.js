import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import ContactPopup from './components/ContactPopup/ContactPopup';
import { ContactPopupProvider, useContactPopupContext } from './contexts/ContactPopupContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Компоненты главной страницы
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import About from './components/About/About';
import Industries from './components/Industries/Industries';
import Footer from './components/Footer/Footer';

// Страницы
import ProjectsPage from './pages/Projects/ProjectsPage';
import ServicesPage from './pages/Services/ServicesPage';
import CitiesPage from './pages/Cities/CitiesPage';
import AboutPage from './pages/About/AboutPage';
import ProjectPage from './pages/Project/solterra_page';
import RivieraMoinakoPage from './pages/Project/riviera-moinako';
import MisisQueuePage from './pages/Project/misis-queue';
import SpectraCpqPage from './pages/Project/spectra-cpq';
import MoyaAptechkaPage from './pages/Project/moya-aptechka';
import TravelAggregatorPage from './pages/Project/travel-aggregator';
import TestProject from './pages/Project/test-project';
import SolterraSimple from './pages/Project/solterra-simple';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Process />
        <About />
        <Industries />
      </main>
      <Footer />
    </>
  );
}

function AppContent() {
  const { isPopupOpen, closePopup } = useContactPopupContext();

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/goroda" element={<CitiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/solterra" element={<ProjectPage />} />
          <Route path="/project/riviera-moinako" element={<RivieraMoinakoPage />} />
          <Route path="/project/misis-queue" element={<MisisQueuePage />} />
          <Route path="/project/spectra-cpq" element={<SpectraCpqPage />} />
          <Route path="/project/moya-aptechka" element={<MoyaAptechkaPage />} />
          <Route path="/project/travel-aggregator" element={<TravelAggregatorPage />} />
          <Route path="/project/test" element={<TestProject />} />
          <Route path="/project/solterra-simple" element={<SolterraSimple />} />
        </Routes>
      </Router>
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContactPopupProvider>
        <AppContent />
      </ContactPopupProvider>
    </ThemeProvider>
  );
}

export default App;
