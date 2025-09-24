import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextSection = styled.section`
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

const TextContent = styled.div`
  max-width: 1000px;
  text-align: left;
  margin-left: 60px;
  
  @media (max-width: 768px) {
    margin-left: 24px;
  }
`;

const MainText = styled(motion.h2)`
  font-size: 50px;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SubText = styled(motion.div)`
  font-size: 20px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  p {
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TextBlockLeft = () => {
  return (
    <TextSection>
      <Container>
        <TextContent>
          <MainText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Мы разрабатываем сайты, брендинг и системы, которые помогают бизнесу расти и выделяться. Для нас каждый проект — это возможность создать решение с эффектом ВАУ и задать новые стандарты качества
          </MainText>
          
          <SubText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
            Сегодня CORE — это премиальное веб-агенство, где каждый член команды вовлечён в процесс. Мы растём вместе с нашими клиентами, разделяем их амбиции и празднуем успехи бок о бок.
            Больше всего мы дорожим сотрудничеством с компаниями, которые ценят результат и хотят быть на шаг впереди конкурентов.
            </p>
          </SubText>
        </TextContent>
      </Container>
    </TextSection>
  );
};

export default TextBlockLeft;
