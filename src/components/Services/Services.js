import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
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

const ServiceCard = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  padding: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-4px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  margin-bottom: 8px;
  line-height: 1.5;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AllServicesButton = styled(motion.div)`
  background: #2A2A2A;
  border: 2px solid #3A5AFF;
  padding: 32px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #3A5AFF;
    border-color: #3A5AFF;
  }
`;

const AllServicesText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Services = () => {
  const services = [
    {
      title: 'Маркетинг',
      items: [
        'Спонсорство',
        'PR',
        'Маркетинговые исследования',
        'Рекламные материалы'
      ]
    },
    {
      title: 'Брендинг',
      items: [
        'Логотипы',
        'Айдентика',
        'Гайдлайны',
        'Мерч'
      ]
    },
    {
      title: 'Разработка сайтов',
      items: [
        'Лендинги',
        'Корпоративные сайты',
        'E-commerce',
        'Порталы'
      ]
    },
    {
      title: 'UI/UX дизайн',
      items: [
        'Прототипирование',
        'Дизайн интерфейсов',
        'Дизайн приложений',
        'Дизайн CRM/ERP'
      ]
    },
    {
      title: 'Поддержка',
      items: [
        'SEO',
        'Контент',
        'Техподдержка',
        'A/B тесты'
      ]
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
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Услуги
          </Title>
        </SectionHeader>

        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item, itemIndex) => (
                  <ServiceItem key={itemIndex}>{item}</ServiceItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}

          <AllServicesButton
            as={motion.div}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '/services'}
          >
            <AllServicesText>Все услуги</AllServicesText>
          </AllServicesButton>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
