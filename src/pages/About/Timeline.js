import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineSection = styled.section`
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
  text-align: center;
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

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3A3A3A;
  
  @media (max-width: 768px) {
    left: 15px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    padding-left: 50px;
    margin-bottom: 40px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -20px;
  top: 8px;
  width: 12px;
  height: 12px;
  background: #3A5AFF;
  border-radius: 50%;
  border: 3px solid #151515;
  
  @media (max-width: 768px) {
    left: -15px;
    width: 10px;
    height: 10px;
  }
`;

const TimelineYear = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #3A5AFF;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TimelineContent = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2022',
      content: 'Запуск первых проектов как дизайн-бюро. Работа с брендингом и веб-дизайном, формирование команды и первых клиентов'
    },
    {
      year: '2023',
      content: 'Крупные заказы в недвижимости и девелопменте. Разработка сайтов для жилых комплексов и сервисов управления объектами'
    },
    {
      year: '2024',
      content: 'Выход на SaaS и продуктовый дизайн. Создание digital-решений для технологических компаний и стартапов'
    },
    {
      year: '2025',
      content: 'Запуск CORE как премиального веб-агенства. 47+ реализованных проектов, расширение команды и уклон в новое направление — "Масштабирование и оптимизация бизнеса"'
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <TimelineSection role="complementary" aria-label="История развития компании CORE">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Наш путь
          </Title>
        </SectionHeader>

        <TimelineContainer role="list" aria-label="Хронология развития CORE">
          <TimelineLine />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                role="listitem"
                aria-label={`${event.year}: ${event.content}`}
              >
                <TimelineDot />
                <TimelineYear>{event.year}</TimelineYear>
                <TimelineContent>{event.content}</TimelineContent>
              </TimelineItem>
            ))}
          </motion.div>
        </TimelineContainer>
        
        {/* Structured Data for Timeline */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "История развития CORE",
            "description": "Хронология развития компании CORE с 2022 по 2025 год",
            "url": "https://core-studio.ru/about",
            "numberOfItems": timelineEvents.length,
            "itemListElement": timelineEvents.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": `CORE в ${event.year}`,
                "description": event.content,
                "startDate": event.year,
                "organizer": {
                  "@type": "Organization",
                  "name": "CORE Studio"
                }
              }
            }))
          })}
        </script>
      </Container>
    </TimelineSection>
  );
};

export default Timeline;
