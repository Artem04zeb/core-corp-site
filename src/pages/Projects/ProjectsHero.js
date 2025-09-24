import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContentSection = styled.div``;

const Title = styled(motion.h1)`
  font-family: 'Akkurat Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 32px;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  
  @media (max-width: 1200px) {
    font-size: 56px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
`;

const CTAButton = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  background: #FFFFFF;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: transparent;
    color: #FFFFFF;
  }
`;

const StatsSection = styled.div`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const StatsCard = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  padding: 40px;
  text-align: center;
  
  @media (max-width: 1024px) {
    padding: 32px 24px;
  }
`;

const StatsNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #1A3FFF;
  margin-bottom: 16px;  
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatsLabel = styled.div`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 400;
  line-height: 1.4;
`;

const ProjectsHero = () => {
  const { openPopup } = useContactPopupContext();

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <ContentSection>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Проекты CORE
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Мы разрабатываем сайты, сервисы и бренды, которые работают на рост бизнеса. В подборке — избранные кейсы, показывающие наш уровень компетенций и подход к решению задач
            </Subtitle>
            
            <CTAButton
              onClick={openPopup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              Обсудить ваш проект
            </CTAButton>
          </ContentSection>

          <StatsSection>
            <StatsCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <StatsNumber>47+</StatsNumber>
              <StatsLabel>проектов за 4 голода</StatsLabel>
            </StatsCard>
          </StatsSection>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default ProjectsHero;
