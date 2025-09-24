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
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: 60px;
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
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 60px;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 32px 24px;
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 400;
  line-height: 1.4;
`;

const AboutLink = styled(motion.a)`
  display: inline-block;
  color: #FFFFFF;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color:rgb(125, 140, 255);
  }
`;

const AboutSectionComponent = () => {
  const stats = [
    {
      number: '47+',
      label: 'реализованных проектов'
    },
    {
      number: '4 года',
      label: 'на рынке'
    },
    {
      number: '35',
      label: 'городов России, с успешной реализацией проектов'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AboutSection>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Об агентстве CORE
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы объединяем стратегию, дизайн и разработку в единый процесс. Наша команда имеет опыт запуска решений для девелопмента, SaaS и e-commerce, превращая идеи в работающие продукты
          </Description>
        </SectionHeader>

        <StatsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} as={motion.div} variants={itemVariants}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <AboutLink
          href="/about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          Подробнее о нас →
        </AboutLink>
      </Container>
    </AboutSection>
  );
};

export default AboutSectionComponent;
