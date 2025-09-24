import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const ServicesSection = styled.section`
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
  line-height: 1.6;
  max-width: 800px;
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
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

const ServiceItem = styled.li`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #BFBFBF;
  }
`;

const ConsultationCard = styled(motion.div)`
  background: radial-gradient(circle at center, #3A3A3A 0%, #2A2A2A 100%);
  border: 1px solid #3A3A3A;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-4px);
  }
`;

const ConsultationTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const ConsultationSubtitle = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ConsultationCTA = styled.button`
  display: inline-block;
  padding: 12px 24px;
  background: #3A5AFF;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #5A7AFF;
  }
`;

const ServicesGridComponent = () => {
  const { openPopup } = useContactPopupContext();
  
  const services = [
    {
      id: 1,
      title: 'Брендинг',
      items: [
        'Логотипы и фирменный стиль',
        'Гайдлайны и бренд-кит',
        'Тональность, месседж-фреймворк',
        'Дизайн носителей / мерча'
      ],
      link: '/services/branding',
      cases: ['Solterra', 'CORE Branding']
    },
    {
      id: 2,
      title: 'UI/UX дизайн',
      items: [
        'CJM и прототипирование',
        'Дизайн веб/моб интерфейсов',
        'Дизайн CRM/ERP, дэшбордов',
        'Дизайн систем'
      ],
      link: '/services/ui-ux',
      cases: ['Spectra CPQ']
    },
    {
      id: 3,
      title: 'Разработка сайтов',
      items: [
        'Лендинги, корпоративные сайты',
        'E-commerce / каталоги',
        'Headless CMS',
        'Интеграции (CRM / оплата / аналитика)'
      ],
      link: '/services/development',
      cases: ['Riviera-Moinako']
    },
    {
      id: 4,
      title: 'Маркетинг и рост',
      items: [
        'Стратегия развития бренда под ключ',
        'SEO-стратегия и оптимизация',
        'Контент и медиа-продакшн',
        'Запуск рекламной кампании',
      ],
      link: '/services/marketing',
      cases: ['Выборочно']
    },
    {
      id: 5,
      title: 'Сопровождение и поддержка',
      items: [
        'Техподдержка SLA',
        'Мониторинг / аналитика',
        'А/В-тесты, CRO',
        'Ретейнер'
      ],
      link: '/services/support',
      cases: ['Продуктовые проекты']
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
    <ServicesSection>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Услуги CORE
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Формируем команду под задачу: от быстрого лендинга до комплексной цифровой экосистемы. Каждое направление масштабируется под ваши цели
          </Description>
        </SectionHeader>

        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item, index) => (
                  <ServiceItem key={index}>{item}</ServiceItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}

          <ConsultationCard
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <ConsultationTitle>Консультация со специалистом</ConsultationTitle>
            <ConsultationSubtitle>
            Определим необходимые услуги и формат сотрудничества под ваши задачи
            </ConsultationSubtitle>
            <ConsultationCTA onClick={openPopup}>
              Обсудить проект
            </ConsultationCTA>
          </ConsultationCard>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default ServicesGridComponent;
