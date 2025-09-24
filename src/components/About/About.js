import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 120px 0;
  background-color: #151515;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
`;

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  max-width: 600px;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 40px 24px;
  // background: #2A2A2A;
  // border: 1px solid #3A3A3A;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 400;
  line-height: 1.4;
`;

const AboutButton = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 24px;
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-4px);
    background: #3A3A3A;
  }
`;

const AboutButtonText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const AboutButtonSubtext = styled.div`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 400;
`;

const About = () => {
  const stats = [
    {
      number: '47+',
      label: 'реализованных проектов'
    },
    {
      number: '4 года',
      label: 'опыта на рынке'
    },
    {
      number: '10+',
      label: 'отраслей: от девелопмента до государственного сектора'
    },
    {
      number: '35',
      label: 'городов России, с успешной реализацией проектов'
    },
    {
      number: '80%',
      label: 'клиентов приходят по рекомендациям'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Об агенстве
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы создаём digital-продукты, которые работают на результат. Команда с продуктовым опытом и вниманием к деталям
          </Description>
        </SectionHeader>

        <StatsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
          
          {/* Кнопка "Об агенстве" */}
          <AboutButton
            href="/about"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <AboutButtonText>О нас</AboutButtonText>
            <AboutButtonSubtext>Узнать больше о команде</AboutButtonSubtext>
          </AboutButton>
        </StatsGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
