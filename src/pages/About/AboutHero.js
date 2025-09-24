import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  padding: 160px 0 120px;
  background-color: #151515;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(21, 21, 21, 0.9) 0%, rgba(42, 42, 42, 0.7) 100%);
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: left;
  margin-left: 60px;
  
  @media (max-width: 768px) {
    margin-left: 24px;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Akkurat Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 90px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0;
  line-height: 1.0;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  
  @media (max-width: 1024px) {
    font-size: 90px;
  }
  
  @media (max-width: 768px) {
    font-size: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const AboutHero = () => {
  return (
    <HeroSection>
      <BackgroundOverlay />
      <Container>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{
              __html: "CORE — <br />проверенное временем цифровое агенство полного цикла"
            }}
          />
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;
