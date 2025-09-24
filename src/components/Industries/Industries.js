import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IndustriesSection = styled.section`
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

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const IndustryCard = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  padding: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-6px);
  }
`;

const IndustryTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IndustryDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;


const Industries = () => {
  const industries = [
    {
      title: 'Недвижимость',
      description: 'Сайты для застройщиков, агентств и ЖК. Каталоги объектов, онлайн-бронирование, интеграция с CRM'
    },
    {
      title: 'IT и SaaS',
      description: 'Веб-приложения и SaaS-платформы. API, интеграции и сложные технические системы'
    },
    {
      title: 'Образование',
      description: 'Сайты и платформы для школ, курсов и университетов. Системы дистанционного обучения (LMS)'
    },
    {
      title: 'Ритейл и e-commerce',
      description: 'Интернет-магазины и маркетплейсы. Интеграция с платёжными сервисами и системами учёта'
    },
    {
      title: 'Финансы и инвестиции',
      description: 'Цифровые продукты для банков, финтеха и инвестиционных компаний. Платформы для управления капиталом'
    },
    {
      title: 'Сфера услуг',
      description: 'Сайты для компаний, работающих с клиентами напрямую. Онлайн-запись, бронирование, CRM'
    },
    {
      title: 'Туризм и гостеприимство',
      description: 'Сайты отелей и туроператоров. Системы бронирования и управления клиентским опытом'
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
    <IndustriesSection id="industries">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Сферы, в которых мы успели поработать
          </Title>
        </SectionHeader>

        <IndustriesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <IndustryTitle>{industry.title}</IndustryTitle>
              <IndustryDescription>{industry.description}</IndustryDescription>
            </IndustryCard>
          ))}

        </IndustriesGrid>
      </Container>
    </IndustriesSection>
  );
};

export default Industries;
