import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

// Container
const ProjectPageContainer = styled.div`
  background-image: url('/images/my-kit/bg4.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(21, 21, 21, 0.85);
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`;

// Minimal Header
const MinimalHeader = styled.header`
  padding: 24px 0;
  background-color: transparent;
  // border-bottom: 1px solid rgba(42, 42, 42, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
`;


// Проблема (вступление)
const ProblemSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`;

const ProblemBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
    margin-top: 60px;
  }
`;

const ProblemContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ProblemText = styled.div`
  // max-width: 600px;
`;

const ProblemImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 90%;
    height: auto;
  }
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

const ProblemDescription = styled(motion.p)`
  font-size: 20px;
  color: #FFFFFF;
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
  margin-top: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 12px 24px;
  background: transparent;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: #FFFFFF;
    // border-color: #3A5AFF;
    background:rgba(255, 195, 254, 0.26);
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    width: 100%;
  }
`;

const PrimaryHeroButton = styled(HeroButton)`
  background: #3A5AFF;
  color: #FFFFFF;
  border-color: #3A5AFF;
  
  &:hover {
    background: #3A5AFF;
    color: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(58, 91, 255, 0.5);
  }
`;

// Основные секции  
const Section = styled.section`
  padding: 120px 0;
  background-color: transparent;
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


// Ключевые функции - сетка 3x2
const FunctionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FunctionCard = styled(motion.div)`
  background: #43baff;
  border: 2px solid #3A5AFF;
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3A5AFF;
    transform: translateY(-4px);
  }
`;

const FunctionIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #3A5AFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #FFFFFF;
  font-size: 24px;
`;

const FunctionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const FunctionDescription = styled.p`
  font-size: 14px;
  color: #1b38c8;
  font-weight: 500;
  line-height: 1.5;
`;

// Процесс работы - карточки
const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProcessCard = styled(motion.div)`
  background: #43baff;
  border: 2px solid #3A5AFF;
  border-radius: 8px;
  overflow: hidden;
`;


const ProcessContent = styled.div`
  padding: 32px 24px;
`;

const ProcessTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const ProcessText = styled.p`
  font-size: 16px;
  // color: #1b38c8;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.6;
`;

// Карусель интерфейсов
const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const CarouselTrack = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CarouselItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 120px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    gap: 24px;
  }
`;

const PhoneMockup = styled.div`
  position: relative;
  width: 200px;
  height: 400px;
  background: #1A1A1A;
  border-radius: 30px;
  padding: 7px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 2px solid #3A3A3A;
  
  @media (max-width: 768px) {
    width: 160px;
    height: 320px;
    padding: 16px;
    border-radius: 24px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
    
    img {
      border-radius: 16px;
    }
  }
`;

const ScreenInfo = styled.div`
  flex: 1;
  max-width: 500px;
`;

const ScreenTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ScreenDescription = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  // margin-top: 32px;
  position: relative;
  z-index: 10;
`;

const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #3A3A3A;
  background: #2A2A2A;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 11;
  
  &:hover {
    border-color: #3A5AFF;
    color: #3A5AFF;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  position: relative;
  z-index: 10;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#3A5AFF' : '#3A3A3A'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 11;
  
  &:hover {
    background: #3A5AFF;
  }
`;

// Модальное окно для увеличенного мокапа
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalPhoneMockup = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
  background: #1A1A1A;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid #3A3A3A;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
    border-radius: 35px;
    padding: 8px;
  }
`;

const ModalPhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  
  @media (max-width: 768px) {
    border-radius: 25px;
    
    img {
      border-radius: 25px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #3A3A3A;
  background: #2A2A2A;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3A5AFF;
    color: #3A5AFF;
  }
`;

const ClickablePhoneMockup = styled(PhoneMockup)`
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: attentionGrab 3s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.05);
    animation-play-state: paused;
  }
  
  @keyframes attentionGrab {
    0%, 100% {
      transform: scale(1) translateX(0);
    }
    50% {
      transform: scale(1.04) translateX(0);
    }
    99% {
      transform: scale(1.00) translateX(0);
    }
  }
`;

// Достижения
const AchievementsSection = styled.div`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 8px;
  padding: 48px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AchievementItem = styled.li`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #3A5AFF;
    font-weight: 600;
  }
`;

const RequestButton = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  background: #3A5AFF;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #3A5AFF;
  cursor: pointer;
  font-family: inherit;
  margin-top: 24px;
  
  &:hover {
    background: transparent;
    color: #3A5AFF;
  }
`;

// Заключение и призыв
const ConclusionSection = styled.section`
  padding: 120px 0;
  background-color: transparent;
  text-align: center;
`;

const ConclusionTitle = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ConclusionText = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ConclusionCTA = styled(motion.button)`
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

const MoyaAptechkaPage = () => {
  const { openPopup } = useContactPopupContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handleContactClick = () => {
    openPopup();
  };

  const handleRequestResults = () => {
    openPopup();
  };

  const screens = [
    {
      image: '/images/my-kit/screens/today-screen.png',
      title: 'Главный экран',
      description: 'Удобный список всех лекарств с возможностью быстрого добавления новых препаратов. Показывает актуальные напоминания и сроки годности.'
    },
    {
      image: '/images/my-kit/screens/data-screen.png',
      title: 'Добавление лекарства',
      description: 'Простой процесс добавления препарата с возможностью сканирования штрих-кода, фотографирования упаковки и ввода данных вручную.'
    },
    {
      image: '/images/my-kit/screens/notify-screen.png',
      title: 'Уведомления',
      description: 'Система напоминаний о приеме лекарств с настраиваемым расписанием. Показывает время приема и дозировку.'
    },
    {
      image: '/images/my-kit/screens/сканирование.png',
      title: 'Сканирование',
      description: 'Быстрое добавление лекарств через сканирование штрих-кода. Автоматическое заполнение информации о препарате.'
    },
    {
      image: '/images/my-kit/screens/c семьей.png',
      title: 'Семейный доступ',
      description: 'Управление аптечкой для всей семьи. Возможность создавать профили для каждого члена семьи и отслеживать их лекарства.'
    },
    {
      image: '/images/my-kit/screens/Мое здоровье.png',
      title: 'Мое здоровье',
      description: 'Отслеживание курсов лечения и истории приема лекарств. Аналитика и статистика для контроля здоровья.'
    },
    {
      image: '/images/my-kit/screens/ввод номера.png',
      title: 'Ввод номера телефона',
      description: 'Простая авторизация через номер телефона для быстрого входа в приложение и синхронизации данных.'
    },
    {
      image: '/images/my-kit/screens/subscribe-screen.png',
      title: 'Подписка',
      description: 'Премиум-функции приложения с расширенными возможностями для управления здоровьем и лекарствами.'
    },
    {
      image: '/images/my-kit/screens/completed — с рекламой.png',
      title: 'Завершенные курсы',
      description: 'Отслеживание завершенных курсов лечения с возможностью просмотра истории и получения рекомендаций.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ProjectPageContainer>
      <main>
        {/* Проблема (вступление) */}
        <ProblemSection>
          <ProblemBackground />
          <MinimalHeader>
            <HeaderContainer>
              <Logo to="/">CORE</Logo>
              <BackButton to="/projects">
                ← Все проекты
              </BackButton>
            </HeaderContainer>
          </MinimalHeader>
          <Container>
            <ProblemContent>
              <ProblemText>
                <Title
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Моя Аптечка &mdash; мобильное приложение
                </Title>
                
                <ProblemDescription
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Большинство людей теряют контроль над домашними лекарствами: просроченные препараты, отсутствие инструкции под рукой, дубли при покупках. Мы вместе с заказчиком создали мобильное приложение, которое решает эти проблемы и помогает управлять аптечкой ответственно
                </ProblemDescription>
                
                <HeroButtons
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <HeroButton
                    onClick={() => window.open('https://my-kit.ru', 'blank')}
                    whileHover={{ scale: 1.02 }}
                  >
                    Посетить посадочную страницу проекта
                  </HeroButton>
                  <PrimaryHeroButton
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.02 }}
                  >
                    Заказать консультацию по проекту
                  </PrimaryHeroButton>
                </HeroButtons>
              </ProblemText>
              
              <ProblemImage
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src="/images/my-kit/hero.png" 
                  alt="Моя Аптечка - мобильное приложение"
                />
              </ProblemImage>
            </ProblemContent>
          </Container>
        </ProblemSection>

        {/* Ключевые функции */}
        <Section>
          <SectionContainer>
            <SectionTitle>Что умеет «Моя Аптечка»</SectionTitle>
            <FunctionsGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>📱</FunctionIcon>
                <FunctionTitle>Учет лекарств</FunctionTitle>
                <FunctionDescription>
                  Учет всех лекарств с фото и сроками годности
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>🔔</FunctionIcon>
                <FunctionTitle>Уведомления</FunctionTitle>
                <FunctionDescription>
                  Уведомления о приеме препаратов
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>🔍</FunctionIcon>
                <FunctionTitle>Поиск</FunctionTitle>
                <FunctionDescription>
                  Поиск по названию и инструкции
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>👨‍👩‍👧‍👦</FunctionIcon>
                <FunctionTitle>Семейный доступ</FunctionTitle>
                <FunctionDescription>
                  Контроль за лекарствами членов семьи
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>✅</FunctionIcon>
                <FunctionTitle>Курсы лечения</FunctionTitle>
                <FunctionDescription>
                  Создание и следование курсов лечения
                </FunctionDescription>
              </FunctionCard>
              
              <FunctionCard variants={itemVariants}>
                <FunctionIcon>☁️</FunctionIcon>
                <FunctionTitle>Синхронизация</FunctionTitle>
                <FunctionDescription>
                  Синхронизация между устройствами
                </FunctionDescription>
              </FunctionCard>
            </FunctionsGrid>
          </SectionContainer>
        </Section>

        {/* Процесс работы */}
        <Section>
          <SectionContainer>
            <SectionTitle>Как CORE разрабатывает медтех-проекты</SectionTitle>
            <ProcessGrid>
              <ProcessCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProcessContent>
                  <ProcessTitle>Исследование и аналитика</ProcessTitle>
                  <ProcessText>
                    Анализ лучших приложений в сфере eHealth. Определение регуляторных требований 152-ФЗ. Составление CJM пользователей (пациенты, семьи, врачи, клиники).
                  </ProcessText>
                </ProcessContent>
              </ProcessCard>
              
              <ProcessCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ProcessContent>
                  <ProcessTitle>Прототипирование и дизайн</ProcessTitle>
                  <ProcessText>
                    UX-прототипы (добавление лекарства за 2 клика). UI-дизайн в спокойных, доверительных цветах. Тестирование на фокус-группе студентов-медиков. Консультации с врачами.
                  </ProcessText>
                </ProcessContent>
              </ProcessCard>
              
              <ProcessCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ProcessContent>
                  <ProcessTitle>Разработка</ProcessTitle>
                  <ProcessText>
                    Кроссплатформенная или нативная архитектура (iOS, Android). Система напоминаний (push-уведомления). Локальное хранение данных с шифрованием.
                  </ProcessText>
                </ProcessContent>
              </ProcessCard>
              
              <ProcessCard
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ProcessContent>
                  <ProcessTitle>Тестирование и публикация</ProcessTitle>
                  <ProcessText>
                    Многоуровневое тестирование (unit, интеграционные, UX). Публикация в 4 маркетплейсах (App Store, Google Play, Huawei AppGallery, RuStore). Настройка мониторинга crash-логов.
                  </ProcessText>
                </ProcessContent>
              </ProcessCard>
            </ProcessGrid>
          </SectionContainer>
        </Section>

        {/* Галерея интерфейсов */}
        <Section>
          <SectionContainer>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ marginBottom: '0' }}
            >
              Интерфейсы «Моей Аптечки»
            </SectionTitle>
            <CarouselContainer>
              <CarouselTrack>
                {screens.map((screen, index) => (
                  currentSlide === index && (
                    <CarouselItem
                      key={index}
                      as={motion.div}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1,
                        y: 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <ClickablePhoneMockup onClick={() => openModal(screen.image)}>
                        <PhoneScreen>
                          <img 
                            src={screen.image} 
                            alt={screen.title}
                            loading="lazy"
                          />
                        </PhoneScreen>
                      </ClickablePhoneMockup>
                      <ScreenInfo>
                        <ScreenTitle>{screen.title}</ScreenTitle>
                        <ScreenDescription>{screen.description}</ScreenDescription>
                      </ScreenInfo>
                    </CarouselItem>
                  )
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            <CarouselControls>
              <CarouselButton 
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ‹
              </CarouselButton>
              <CarouselButton 
                onClick={nextSlide}
                disabled={currentSlide === screens.length - 1}
              >
                ›
              </CarouselButton>
            </CarouselControls>
            
            <CarouselDots>
              {screens.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </CarouselDots>
          </SectionContainer>
        </Section>

        {/* Достижения */}
        <Section>
          <SectionContainer>
            <SectionTitle>Результаты проекта</SectionTitle>
            <AchievementsSection>
              <AchievementsList>
                <AchievementItem>Опубликовано в 4 интернет-магазинах</AchievementItem>
                <AchievementItem>Более X скачиваний (данные можно указать по согласию клиента)</AchievementItem>
                <AchievementItem>Приложение используется семьями и студентами-медиками</AchievementItem>
                <AchievementItem>Получены положительные отзывы о простоте и удобстве</AchievementItem>
              </AchievementsList>
              <RequestButton
                onClick={handleRequestResults}
                whileHover={{ scale: 1.02 }}
              >
                Обсудить детали проекта
              </RequestButton>
            </AchievementsSection>
          </SectionContainer>
        </Section>

        {/* Заключение и призыв */}
        <ConclusionSection>
          <SectionContainer>
            <ConclusionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Готовы создать медтех-продукт?
            </ConclusionTitle>
            <ConclusionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Проект «Моя Аптечка» доказал: мы умеем работать с медтехом, где важна не только эстетика, но и безопасность. Мы готовы создавать приложения для здравоохранения и других высокоответственных сфер
            </ConclusionText>
            <ConclusionCTA
              onClick={handleContactClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Заказать разработку медтех-продукта
            </ConclusionCTA>
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
        </ConclusionSection>
      </main>
      
      {/* Модальное окно для увеличенного мокапа */}
      {modalImage && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={closeModal}>
              ×
            </CloseButton>
            <ModalPhoneMockup>
              <ModalPhoneScreen>
                <img 
                  src={modalImage} 
                  alt="Увеличенный скриншот"
                />
              </ModalPhoneScreen>
            </ModalPhoneMockup>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectPageContainer>
  );
};

export default MoyaAptechkaPage;
