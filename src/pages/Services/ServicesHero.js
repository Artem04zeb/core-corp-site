import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const HeroSection = styled.section`
  padding: 160px 0 120px;
  background-color: #151515;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContentSection = styled.div` `;

const Title = styled(motion.h1)`
  font-family: 'Neue Haas Grotesk Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 120px;
  font-weight: 700;
  color: #FFFFFF;
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
  // margin-bottom: 48px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

const CTASection = styled(motion.div)`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

const PrimaryCTA = styled(motion.button)`
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

const SecondaryCTA = styled(motion.a)`
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: #E0E0E0;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #3A3A3A;
  
  &:hover {
    border-color: #BFBFBF;
    color: #FFFFFF;
  }
`;


const ServicesHero = () => {
  const { openPopup } = useContactPopupContext();

  const handleContactClick = () => {
    openPopup();
  };

  return (
    <HeroSection role="banner" aria-label="Услуги CORE - от стратегии до запуска">
      <Container>
        <HeroContent>
          <ContentSection>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Услуги CORE <br></br>— от стратегии до запуска
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Мы проектируем бренды, интерфейсы, сайты и системы с реальным эффектом: рост продаж, узнаваемости и лояльности. Полный цикл: анализ → дизайн → разработка → сопровождение
            </Subtitle>
            
            <CTASection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              role="group"
              aria-label="Действия"
            >
              <PrimaryCTA
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                aria-label="Обсудить вашу задачу с командой CORE"
              >
                Обсудить задачу
              </PrimaryCTA>
              <SecondaryCTA
                href="/projects"
                whileHover={{ scale: 1.02 }}
                aria-label="Посмотреть портфолио проектов"
              >
                Посмотреть проекты
              </SecondaryCTA>
            </CTASection>
          </ContentSection>

        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default ServicesHero;
