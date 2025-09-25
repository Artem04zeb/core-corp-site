import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageSection = styled.section`
  padding: 120px 0;
  background-color: #151515;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImageDescription = styled(motion.div)`
  margin-top: 32px;
  max-width: 1000px;
  margin-left: 60px;
  
  @media (max-width: 768px) {
    margin-left: 24px;
    margin-top: 24px;
  }
`;

const DescriptionText = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ParallaxBlock = () => {
  const handleImageLoad = () => {
    console.log('✅ Изображение успешно загружено!');
  };

  const handleImageError = () => {
    console.error('❌ Ошибка загрузки изображения');
  };

  return (
    <ImageSection role="complementary" aria-label="Команда CORE - участие в международных программах">
      <Container>
        <ImageContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StyledImage 
            src="/images/photo_2025.jpg" 
            alt="Команда студии CORE за работой - стажёры в оранжевых футболках на летней школе университета UESTC в Китае 2025"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </ImageContainer>
        
        <ImageDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <DescriptionText>
            Стажёры (в оранжевых футболках) нашего агентства приняли участие в летней школе университета UESTC в Китае в 2025 году. Программа была посвящена цифровым технологиям и управлению проектами — направлениям, которые лежат в основе нашей работы
          </DescriptionText>
        </ImageDescription>
      </Container>
    </ImageSection>
  );
};

export default ParallaxBlock;
