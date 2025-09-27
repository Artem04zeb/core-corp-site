import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #151515 0%, #1A1A1A 100%);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContentSection = styled.div`
`;

const Title = styled(motion.h1)`
  font-family: 'Neue Haas Grotesk Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 180px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0;
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
  font-size: 24px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
`;
const ConsultationButton = styled(motion.a)`
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



const NewsSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
  height: 400px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    height: 350px;
    padding: 20px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    padding: 16px;
  }
`;

const NewsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NewsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
`;

const ScrollIndicator = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #3A5AFF;
  border-radius: 50%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: #3A5AFF;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const NewsContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
`;

const NewsItem = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const NewsItemTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const NewsItemDescription = styled.p`
  font-size: 12px;
  color: #BFBFBF;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const NewsItemLink = styled(Link)`
  font-size: 12px;
  color: #3A5AFF;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #5A7AFF;
  }
`;

const NewsItemDate = styled.span`
  font-size: 10px;
  color: #3A5AFF;
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
`;

const NotificationItem = styled.div`
  background: rgba(58, 90, 255, 0.1);
  border: 1px solid rgba(58, 90, 255, 0.2);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NotificationText = styled.p`
  font-size: 12px;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4;
`;

const NotificationTime = styled.span`
  font-size: 10px;
  color: #BFBFBF;
  display: block;
  margin-top: 4px;
`;

const Hero = () => {
  const { openPopup } = useContactPopupContext();

  // Данные для новостей и проектов
  const newsData = [
    {
      id: 1,
      title: "Запуск проекта Riviera Moinako",  
      description: "Новый веб-сайт для жилого комплекса с интерактивными картами и виртуальными турами",
      link: "/project/riviera-moinako",
      date: "27.09.2025"
    },
    {
      id: 2,
      title: "Обновление MISIS Queue",
      description: "Система управления очередями получила новые функции аналитики",
      link: "/project/misis-queue",
      date: "20.09.2025"
    },
    {
      id: 3,
      title: "Запуск My Kit",
      description: "Мобильное приложение для управления аптечкой и здоровьем семьи",
      link: "/project/moya-aptechka",
      date: "18.08.2025"
    },
    {
      id: 4,
      title: "Spectra CPQ обновлен",
      description: "Конфигуратор продуктов получил улучшенный интерфейс",
      link: "/project/spectra-cpq",
      date: "17.08.2024"
    },
    {
      id: 5,
      title: "Travel Aggregator",
      description: "Новая платформа для агрегации туристических услуг",
      link: "/project/travel-aggregator",
      date: "20.12.2024"
    }
  ];

  const notifications = [
    {
      id: 1,
      text: "Новый проект в разработке - Solterra",
      time: "19.09.2025"
    },
    {
      id: 2,
      text: "Обновление портфолио завершено",
      time: "17.08.2025"
    },
    {
      id: 3,
      text: "Доступны новые услуги по разработке",
      time: "16.07.2025"
    }
  ];

  // Функция для преобразования даты в формат для сортировки
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
    return new Date(year, month - 1, day);
  };

  // Объединяем и сортируем данные в хронологическом порядке
  const combinedData = [
    ...newsData.map(item => ({
      ...item,
      type: 'news',
      sortDate: parseDate(item.date)
    })),
    ...notifications.map(item => ({
      ...item,
      type: 'notification',
      sortDate: parseDate(item.time)
    }))
  ].sort((a, b) => b.sortDate - a.sortDate); // Сортировка по убыванию (новые сверху)

  return (
    <HeroSection role="banner" aria-label="Главная секция">
      <Container>
        <HeroGrid>
          <ContentSection>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Цифровое агентство
            </Title>

            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              От лендингов до комплексных веб-платформ — создаём решения, которые помогают бизнесу расти
            </Subtitle>

            <ConsultationButton
              as="button"
              onClick={openPopup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              aria-label="Получить бесплатную консультацию"
            >
              Бесплатная консультация
            </ConsultationButton>

          </ContentSection>

          <NewsSection
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            role="complementary"
            aria-label="Новости и уведомления"
          >
            <NewsHeader>
              <NewsTitle>Новости</NewsTitle>
              <ScrollIndicator />
            </NewsHeader>
            
            <NewsContent>
              {combinedData.map((item) => (
                item.type === 'news' ? (
                  <NewsItem key={`news-${item.id}`} role="article">
                    <NewsItemTitle>{item.title}</NewsItemTitle>
                    <NewsItemDescription>{item.description}</NewsItemDescription>
                    <NewsItemDate>{item.date}</NewsItemDate>
                    <NewsItemLink to={item.link} aria-label={`Подробнее о ${item.title}`}>
                      Подробнее →
                    </NewsItemLink>
                  </NewsItem>
                ) : (
                  <NotificationItem key={`notification-${item.id}`} role="alert">
                    <NotificationText>{item.text}</NotificationText>
                    <NotificationTime>{item.time}</NotificationTime>
                  </NotificationItem>
                )
              ))}
            </NewsContent>
          </NewsSection>

        </HeroGrid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
