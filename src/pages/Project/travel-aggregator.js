import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

// Container
const ProjectPageContainer = styled.div`
  background-color: #151515;
  min-height: 100vh;
`;

// Minimal Header
const MinimalHeader = styled.header`
  padding: 24px 0;
  background-color: #151515;
  border-bottom: 1px solid #2A2A2A;
`;

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Neue Haas Grotesk Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #3A5AFF;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E0E0E0;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
`;

// Hero компонент
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(21, 21, 21, 0.7) 0%, rgba(42, 42, 42, 0.5) 100%);
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/moinako/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const DynamicGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(58, 90, 255, 0.3) 0%,
    rgba(255, 107, 53, 0.2) 25%,
    rgba(0, 200, 200, 0.3) 50%,
    rgba(255, 193, 7, 0.2) 75%,
    rgba(58, 90, 255, 0.3) 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  z-index: -1;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-family: 'Akkurat Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 32px;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const HeroButton = styled(motion.button)`
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
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondaryHeroButton = styled(HeroButton)`
  background: transparent;
  color: #FFFFFF;
  border-color: #FFFFFF;
  
  &:hover {
    background: #FFFFFF;
    color: #151515;
  }
`;

// Основные секции
const Section = styled.section`
  padding: 120px 0;
  background-color: #151515;
`;

const SectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Akkurat Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 800px;
`;

// Подход CORE - 3 блока
const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 48px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ApproachCard = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3A5AFF;
    transform: translateY(-8px);
  }
`;

const ApproachImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BFBFBF;
  font-size: 14px;
`;

const ApproachContent = styled.div`
  padding: 32px 24px;
`;

const ApproachTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const ApproachText = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;

// Функционал - плитки
const FunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FunctionCard = styled(motion.div)`
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border: 1px solid #3A3A3A;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #3A5AFF;
    transform: translateY(-4px);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3A5AFF, #FF6B35, #00C8C8);
  }
`;

const FunctionIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3A5AFF 0%, #00C8C8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #FFFFFF;
  font-size: 24px;
`;

const FunctionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const FunctionDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.5;
`;

// Галерея интерфейсов
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const GalleryItem = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3A5AFF;
    transform: translateY(-4px);
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BFBFBF;
  font-size: 14px;
`;

const GalleryCaption = styled.p`
  padding: 16px;
  font-size: 14px;
  color: #BFBFBF;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
`;

// Timeline
const TimelineContainer = styled.div`
  margin-top: 48px;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 40px;
    bottom: -40px;
    width: 2px;
    background: linear-gradient(180deg, #3A5AFF, #FF6B35, #00C8C8);
  }
  
  &:last-child:before {
    display: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 32px;
    
    &:before {
      display: none;
    }
  }
`;

const TimelineNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3A5AFF 0%, #00C8C8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  margin-right: 32px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const TimelineDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;

// Результаты по запросу
const ResultsSection = styled.div`
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border: 1px solid #3A3A3A;
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  margin-top: 48px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3A5AFF, #FF6B35, #00C8C8);
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const ResultsText = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const RequestButton = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(135deg, #3A5AFF 0%, #00C8C8 100%);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(58, 90, 255, 0.3);
  }
`;

// Контактный блок
const ContactSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(21, 21, 21, 0.9) 0%, rgba(42, 42, 42, 0.7) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ContactBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/moinako/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactCTA = styled(motion.button)`
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
  margin-bottom: 40px;
  
  &:hover {
    background: transparent;
    color: #FFFFFF;
  }
`;

const NavigationLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #E0E0E0;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
`;

// Анимационные варианты
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const TravelAggregatorPage = () => {
  const { openPopup } = useContactPopupContext();

  const handleContactClick = () => {
    openPopup();
  };

  const handleRequestDetails = () => {
    openPopup();
  };

  return (
    <ProjectPageContainer>
      <MinimalHeader>
        <HeaderContainer>
          <Logo to="/">CORE</Logo>
          <BackButton to="/projects">
            ← Все проекты
          </BackButton>
        </HeaderContainer>
      </MinimalHeader>

      <main>
        {/* Hero Section */}
        <HeroSection>
          <HeroBackground />
          <DynamicGradient />
          <Container>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Туристический сервис — кейс CORE
              </Title>
              
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Универсальная платформа для путешественников и владельцев недвижимости. Улучшенный аналог Booking и Airbnb, созданный с нуля.
              </Subtitle>
              
              <HeroButtons
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <HeroButton
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.02 }}
                >
                  Обсудить разработку похожего продукта
                </HeroButton>
                <SecondaryHeroButton
                  onClick={() => window.open('https://travel-platform.app', '_blank')}
                  whileHover={{ scale: 1.02 }}
                >
                  Открыть страницу продукта
                </SecondaryHeroButton>
              </HeroButtons>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Введение */}
        <Section>
          <SectionContainer>
            <SectionTitle>О проекте</SectionTitle>
            <SectionText>
              Туристический сервис — это единая экосистема для бронирования туров, управления недвижимостью и планирования отдыха. Руководит проектом команда менеджеров из сфер туризма, недвижимости, управления персоналом и отельного бизнеса.
            </SectionText>
            <SectionText>
              Мы, как команда CORE, отвечаем за аналитику, прототипирование, дизайн и разработку.
            </SectionText>
          </SectionContainer>
        </Section>

        {/* Наш подход */}
        <Section style={{ backgroundColor: '#1A1A1A' }}>
          <SectionContainer>
            <SectionTitle>Как CORE работает с комплексными сервисами</SectionTitle>
            <ApproachGrid>
              <ApproachCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ApproachImage>Аналитика</ApproachImage>
                <ApproachContent>
                  <ApproachTitle>Аналитика</ApproachTitle>
                  <ApproachText>
                    Изучили международные сервисы: Booking, Airbnb, Афиша. Провели интервью с будущими пользователями: туристы, владельцы жилья, администраторы отелей. Составили CJM: путь туриста от поиска тура → до заселения.
                  </ApproachText>
                </ApproachContent>
              </ApproachCard>
              
              <ApproachCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ApproachImage>Прототипирование</ApproachImage>
                <ApproachContent>
                  <ApproachTitle>Прототипирование</ApproachTitle>
                  <ApproachText>
                    Проработали десятки экранов: поиск, бронирование, личные кабинеты. Протестировали сценарии (поиск жилья, покупка тура, возврат билетов). Подготовили интерактивные прототипы в Figma.
                  </ApproachText>
                </ApproachContent>
              </ApproachCard>
              
              <ApproachCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ApproachImage>Согласование и разработка</ApproachImage>
                <ApproachContent>
                  <ApproachTitle>Согласование и разработка</ApproachTitle>
                  <ApproachText>
                    Регулярные воркшопы с заказчиком. Итеративное согласование через демо-версии. Работа в формате agile: быстрые спринты, тесты, корректировки.
                  </ApproachText>
                </ApproachContent>
              </ApproachCard>
            </ApproachGrid>
          </SectionContainer>
        </Section>

        {/* Функционал сервиса */}
        <Section>
          <SectionContainer>
            <SectionTitle>Что умеет туристический сервис</SectionTitle>
            <FunctionsGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>🏨</FunctionIcon>
                <FunctionTitle>Бронирование туров</FunctionTitle>
                <FunctionDescription>
                  Отели, перелёты, экскурсии
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>🏠</FunctionIcon>
                <FunctionTitle>Управление недвижимостью</FunctionTitle>
                <FunctionDescription>
                  Владельцы могут добавлять объекты, управлять ценами и доступностью
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>👤</FunctionIcon>
                <FunctionTitle>Личный кабинет туриста</FunctionTitle>
                <FunctionDescription>
                  История бронирований, сохранённые поездки, уведомления
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>📊</FunctionIcon>
                <FunctionTitle>Личный кабинет владельца</FunctionTitle>
                <FunctionDescription>
                  Тарифы, календари, аналитика
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>⭐</FunctionIcon>
                <FunctionTitle>Система отзывов и рейтингов</FunctionTitle>
                <FunctionDescription>
                  Прозрачные оценки туристов и владельцев
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>💳</FunctionIcon>
                <FunctionTitle>Интеграция с платёжными системами</FunctionTitle>
                <FunctionDescription>
                  Быстрые и безопасные транзакции
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>🤖</FunctionIcon>
                <FunctionTitle>Рекомендательная система</FunctionTitle>
                <FunctionDescription>
                  Умный подбор туров на основе предпочтений
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>📱</FunctionIcon>
                <FunctionTitle>Мобильное приложение</FunctionTitle>
                <FunctionDescription>
                  Для быстрого доступа и уведомлений
                </FunctionDescription>
              </FunctionCard>
            </FunctionsGrid>
          </SectionContainer>
        </Section>

        {/* Дизайн и UX */}
        <Section style={{ backgroundColor: '#1A1A1A' }}>
          <SectionContainer>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Интерфейсы и пользовательский опыт
            </SectionTitle>
            <GalleryGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GalleryItem variants={itemVariants}>
                <GalleryImage>Поиск туров</GalleryImage>
                <GalleryCaption>
                  Поиск туров с умными фильтрами
                </GalleryCaption>
              </GalleryItem>
              
              <GalleryItem variants={itemVariants}>
                <GalleryImage>Карточка тура</GalleryImage>
                <GalleryCaption>
                  Детальная информация о туре
                </GalleryCaption>
              </GalleryItem>
              
              <GalleryItem variants={itemVariants}>
                <GalleryImage>Личный кабинет</GalleryImage>
                <GalleryCaption>
                  Календарь для владельцев недвижимости
                </GalleryCaption>
              </GalleryItem>
            </GalleryGrid>
          </SectionContainer>
        </Section>

        {/* Этапы реализации */}
        <Section>
          <SectionContainer>
            <SectionTitle>Как мы создавали сервис</SectionTitle>
            <TimelineContainer>
              <TimelineItem>
                <TimelineNumber>01</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Аналитика рынка и интервью с пользователями</TimelineTitle>
                  <TimelineDescription>
                    Изучение конкурентов, интервью с туристами и владельцами недвижимости
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>02</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Построение CJM и прототипов</TimelineTitle>
                  <TimelineDescription>
                    Создание карты пользовательского пути и интерактивных прототипов
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>03</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Дизайн-система и UI-кит</TimelineTitle>
                  <TimelineDescription>
                    Разработка единой дизайн-системы и компонентов интерфейса
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>04</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>MVP: поиск + бронирование + кабинеты</TimelineTitle>
                  <TimelineDescription>
                    Создание минимально жизнеспособного продукта с ключевой функциональностью
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>05</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Расширение: платежи, отзывы, рекомендации</TimelineTitle>
                  <TimelineDescription>
                    Добавление дополнительных функций и интеграций
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>06</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Тестирование и поддержка</TimelineTitle>
                  <TimelineDescription>
                    Финальное тестирование, запуск и техническая поддержка
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </TimelineContainer>
          </SectionContainer>
        </Section>

        {/* Результаты по запросу */}
        <Section style={{ backgroundColor: '#1A1A1A' }}>
          <SectionContainer>
            <SectionTitle>Результаты по запросу</SectionTitle>
            <ResultsSection>
              <ResultsText>
                Платформа уже работает и используется командами заказчика. Подробные бизнес-результаты не публикуются по требованию клиента. По запросу мы готовы поделиться частью данных при личной встрече.
              </ResultsText>
              <RequestButton
                onClick={handleRequestDetails}
                whileHover={{ scale: 1.02 }}
              >
                Запросить подробности
              </RequestButton>
            </ResultsSection>
          </SectionContainer>
        </Section>

        {/* Контактный блок */}
        <ContactSection>
          <ContactBackground />
          <SectionContainer>
            <ContactTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Хотите сервис уровня Booking под ваш рынок?
            </ContactTitle>
            <ContactText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Мы создаём комплексные туристические экосистемы. Обсудим проект?
            </ContactText>
            <ContactCTA
              onClick={handleContactClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Обсудить проект
            </ContactCTA>
            <NavigationLinks
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <NavLink to="/projects">← Все проекты</NavLink>
              <NavLink to="/">Главная</NavLink>
            </NavigationLinks>
          </SectionContainer>
        </ContactSection>
      </main>
    </ProjectPageContainer>
  );
};

export default TravelAggregatorPage;
