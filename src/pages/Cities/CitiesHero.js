import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  padding: 160px 0 0;
  background-color: #151515;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  max-width: 1000px;
`;

const Title = styled(motion.h1)`
  font-family: 'Akkurat Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 32px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 60px;
  }
`;

const CitiesHero = () => {
  return (
    <HeroSection role="banner" aria-label="CORE работает по всей России">
      <Container>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CORE работает по всей России
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
           Наши проекты реализованы в 35 городах России, помогая компаниям привлекать клиентов <br></br>и усиливать бренды.
           От Калининграда до Владивостока — у нас уже есть запущенные проекты, <br></br>и мы готовы рассказать, как решить задачи именно вашей компании
          </Subtitle>
          
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default CitiesHero;
