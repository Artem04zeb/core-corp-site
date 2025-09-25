import React, { useState } from 'react';
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
  background-color: transparent;
  border-bottom: none;
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
    color: #1d4ed8;
  }
`;

// Hero компонент
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  // background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(42, 42, 42, 0.6) 100%);
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1d4ed8 0%, #FFFFFF 100%);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const AdditionalText = styled(motion.p)`
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 600px;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

const CTAButton = styled(motion.button)`
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

const SecondaryButton = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: #FFFFFF;
    color: #151515;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

// Основные секции
const Section = styled.section`
  padding: 120px 0;
  background: #FFFFFF;
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
  color: #1d4ed8;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  color: #1d4ed8;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 800px;
`;

// Подход CORE - горизонтальный таймлайн для десктопа, вертикальный для мобильных
const ApproachTimelineContainer = styled.div`
  margin-top: 48px;
  position: relative;
  
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 20px;
    
    &:before {
      content: '';
      position: absolute;
      top: 30px;
      left: 60px;
      right: 60px;
      height: 2px;
      background: rgba(255, 255, 255, 0.3);
      z-index: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding-left: 20px;
    
    &:before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255, 255, 255, 0.3);
      z-index: 1;
    }
  }
`;

const ApproachTimelineItem = styled.div`
  position: relative;
  z-index: 2;
  
  @media (min-width: 769px) {
    flex: 1;
    max-width: 300px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    display: flex;
    align-items: flex-start;
  }
`;

const ApproachTimelineNumber = styled.div`
  width: 60px;
  height: 60px;
  background: rgb(125 153 232);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  margin: 0 auto 24px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
    margin: 0 20px 0 0;
    flex-shrink: 0;
  }
`;

const ApproachTimelineContent = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ApproachTimelineTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const ApproachTimelineText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
    background: #3A5AFF;
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
  background: #3A5AFF;
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
  color: #1d4ed8;
  margin-bottom: 8px;
`;

const TimelineDescription = styled.p`
  font-size: 16px;
  color: #1d4ed8;
  font-weight: 400;
  line-height: 1.6;
`;


// Карусель интерфейсов
const CarouselContainer = styled.div`
  position: relative;
  margin-top: 48px;
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

  @media (max-width: 768px) {
    height: 300px;
  }
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
    padding: 0 24px;
    gap: 24px;
  }
`;

const DesktopMockup = styled.div`
  position: relative;
  width: fit-content;
  height: 300px;
  background: #1A1A1A;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 2px solid #3A3A3A;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 225px;
    padding: 6px;
    border-radius: 8px;
  }
`;

const DesktopScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    border-radius: 6px;
    
    img {
      border-radius: 6px;
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
  color:#ffffff;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 0;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
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

const ClickableDesktopMockup = styled(DesktopMockup)`
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

const ModalDesktopMockup = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  background: #1A1A1A;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid #3A3A3A;
  
  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
    border-radius: 12px;
    padding: 8px;
  }
`;

const ModalDesktopScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    
    img {
      border-radius: 8px;
      height: min-content;
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

// Результаты по запросу
const ResultsSection = styled.div`
  background: #7d99e8;
  // border: 2px solid #3A5AFF;
  border-radius: 8px;
  padding: 48px;
  text-align: center;
  margin-top: 48px;
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const ResultsText = styled.p`
  font-size: 18px;
  color:rgb(255, 255, 255);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;


// Контактный блок
const ContactSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #7d99e8 40%, #FFFFFF 100%);
  text-align: center;
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
  color: #ffffff;
  font-weight: 400;
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
  color: #3A5AFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
`;


const SpectraCpqPage = () => {
  const { openPopup } = useContactPopupContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handleContactClick = () => {
    openPopup();
  };


  const screens = [
    {
      image: '/images/spectra/screens/tenant.png',
      title: 'Мультитенантность',
      description: 'Система поддерживает одновременную работу нескольких организаций в едином решении. Данные, настройки и бизнес-процессы изолированы, что обеспечивает безопасность и удобство для каждого клиента.'
  },
    {
      image: '/images/spectra/screens/planning.png',
      title: 'Планирование и аналитика',
      description: 'Интерактивный календарь для управления графиками сотрудников. Позволяет создавать собственные типы событий, отслеживать загруженность замерщиков и других специалистов, оптимизируя распределение ресурсов компании.'
    },
    {
      image: '/images/spectra/screens/order-main.png',
      title: 'Конфигуратор заказов',
      description: 'Гибкий инструмент для создания и настройки типов заказов под любые бизнес-процессы. Позволяет инженерам формировать сложные формы с учётом параметров, ограничений и взаимосвязей, обеспечивая точность и прозрачность обработки заказов.'
    },
    {
      image: '/images/spectra/screens/catalog-products.png',
      title: 'Настраиваемый каталог продуктов',
      description: 'Централизованная база всех товаров и услуг компании. В каталоге отражаются характеристики, цены, комплектации и совместимость, что позволяет инженерам задавать сложные конфигурации и гарантировать корректность предложений.'
    },
    {
      image: '/images/spectra/screens/documents.png',
      title: 'Конфигуратор шаблонов документов',
      description: 'Единый модуль для подготовки, редактирования и хранения документов. Система автоматизирует работу с коммерческими предложениями, договорами и приложениями, отслеживает их статус и минимизирует ошибки при документообороте.'
    },
    {
      image: '/images/spectra/screens/role-fonfigure.png',
      title: 'Настройка ролей',
      description: 'Гибкая система разграничения прав пользователей. Позволяет назначать роли, управлять уровнем доступа к данным и функциям, обеспечивая безопасность и прозрачность работы внутри организации.'
    },
    {
      image: '/images/spectra/screens/status-configure.png',
      title: 'Управление статусами',
      description: 'Инструмент для детальной настройки этапов жизненного цикла заказа. Подстраивается под уникальные бизнес-процессы компании и позволяет точно отслеживать статус выполнения в любой момент времени.'
    },
    {
      image: '/images/spectra/screens/import.png',
      title: 'Импорт данных',
      description: 'Функционал для массовой загрузки информации о продуктах, клиентах и заказах из внешних источников. Поддерживает импорт через файлы и API, ускоряя внедрение и обновление данных в системе.'
    },
    {
      image: '/images/spectra/screens/lk.png',
      title: 'Личный кабинет',
      description: 'Персонализированная рабочая среда для пользователей. Содержит историю действий, быстрый доступ к инструментам и возможность интеграции с Telegram через webhooks для мгновенных уведомлений и удобного взаимодействия.'
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
          <Container>
            <HeroContent>
              <HeroText>
                <Title
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  CPQ-система «Спектра»
                </Title>
                
                <Subtitle
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Отечественное комплексное решение для автоматизации коммерческих предложений и производственных заказов
                </Subtitle>
                
                <AdditionalText
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  В этом кейсе мы раскрываем наш подход к аналитике, проектированию и согласованию, но без публикации конфиденциальных бизнес-результатов
                </AdditionalText>
                
                <ButtonGroup
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <CTAButton
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.02 }}
                  >
                    Обсудить проект
                  </CTAButton>
                  
                  <SecondaryButton
                    as="a"
                    href="https://spectra-cpq.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                  >
                    Перейти на посадочную страницу
                  </SecondaryButton>
                </ButtonGroup>
              </HeroText>
              
              <HeroImage
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src="/images/spectra/preview/preview.png" 
                  alt="CPQ-система Спектра - интерфейс системы"
                />
              </HeroImage>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Контекст проекта */}
        <Section>
          <SectionContainer>
            <SectionTitle>О проекте</SectionTitle>
            <SectionText>
              «Спектра» — специализированная CPQ-система (Configure — Price — Quote), разработанная для российского B2B-сегмента. Позволяет компаниям быстро собирать коммерческие предложения, рассчитывать стоимость и формировать заказы в единой системе
            </SectionText>
            <SectionText>
              Перед нашей командой стояла задача — создать систему, которая станет ядром цифрового процесса заказчика
            </SectionText>
          </SectionContainer>
        </Section>

        {/* Подход CORE */}
        <Section style={{ backgroundColor: '#7d99e8' }}>
          <SectionContainer>
            <SectionTitle style={{ color: '#FFFFFF' }}
            >Как мы взаимодействуем с клиентом при работе над сложными системами. Например, в этом проекте:
            </SectionTitle>
            <ApproachTimelineContainer>
              <ApproachTimelineItem>
                <ApproachTimelineNumber>01</ApproachTimelineNumber>
                <ApproachTimelineContent>
                  <ApproachTimelineTitle>Аналитика</ApproachTimelineTitle>
                  <ApproachTimelineText>
                    Провели интервью с ключевыми сотрудниками заказчика. Разобрали существующие бизнес-процессы. Построили CJM (карта взаимодействия ролей и документов). Зафиксировали боли и точки роста.
                  </ApproachTimelineText>
                </ApproachTimelineContent>
              </ApproachTimelineItem>
              
              <ApproachTimelineItem>
                <ApproachTimelineNumber>02</ApproachTimelineNumber>
                <ApproachTimelineContent>
                  <ApproachTimelineTitle>Проектирование и дизайн</ApproachTimelineTitle>
                  <ApproachTimelineText>
                    Составили прототипы интерфейсов. Проработали сценарии работы с заказами, прайсами и ролями. Разработали систему UI-компонентов.
                  </ApproachTimelineText>
                </ApproachTimelineContent>
              </ApproachTimelineItem>
              
              <ApproachTimelineItem>
                <ApproachTimelineNumber>03</ApproachTimelineNumber>
                <ApproachTimelineContent>
                  <ApproachTimelineTitle>Разработка и согласование</ApproachTimelineTitle>
                  <ApproachTimelineText>
                    Итеративная разработка на спринтах. Постоянные демо для заказчика. Быстрые правки по обратной связи.
                  </ApproachTimelineText>
                </ApproachTimelineContent>
              </ApproachTimelineItem>
            </ApproachTimelineContainer>
          </SectionContainer>
        </Section>

        {/* Этапы работы */}
        <Section>
          <SectionContainer>
            <SectionTitle>Этапы реализации</SectionTitle>
            <TimelineContainer>
              <TimelineItem>
                <TimelineNumber>01</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Анализ и постановка задачи</TimelineTitle>
                  <TimelineDescription>
                    Изучение бизнес-процессов, интервью с заказчиком, формирование технического задания
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>02</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Прототипирование и согласование CJM</TimelineTitle>
                  <TimelineDescription>
                    Создание карты взаимодействия пользователей, прототипов и согласование с заказчиком
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>03</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>UI/UX-дизайн и дизайн-система</TimelineTitle>
                  <TimelineDescription>
                    Разработка интерфейсов, создание дизайн-системы и компонентов
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>04</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Разработка MVP</TimelineTitle>
                  <TimelineDescription>
                    Создание минимально жизнеспособного продукта с ключевой функциональностью
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>05</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Итеративное улучшение и интеграции</TimelineTitle>
                  <TimelineDescription>
                    Доработка функциональности, интеграция с внешними системами
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineNumber>06</TimelineNumber>
                <TimelineContent>
                  <TimelineTitle>Поддержка и масштабирование</TimelineTitle>
                  <TimelineDescription>
                    Техническая поддержка, мониторинг, планы развития системы
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </TimelineContainer>
          </SectionContainer>
        </Section>

        {/* Галерея интерфейсов */}
        <Section style={{ backgroundColor: '#7D99E8' }}>
          <SectionContainer>
            <SectionTitle 
              as={motion.h2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ color: '#FFFFFF' }}
            >
              Интерфейсы системы
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
                      <ClickableDesktopMockup onClick={() => openModal(screen.image)}>
                        <DesktopScreen>
                          <img 
                            src={screen.image} 
                            alt={screen.title}
                            loading="lazy"
                          />
                        </DesktopScreen>
                      </ClickableDesktopMockup>
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

        {/* Результаты по запросу */}
        <Section style={{ backgroundColor: '#7d99e8', paddingBottom: '0px' }}>
          <SectionContainer>
            <SectionTitle style={{ color: '#FFFFFF'}}
              >
              Результаты внедрения
            </SectionTitle>
            <ResultsSection>
              <ResultsText>
              CPQ-система «Спектра» уже работает на стороне заказчика. Детали эффективности и показатели скрыты в силу коммерческой тайны, что подтверждает уровень доверия к нам. В личной беседе мы можем поделиться опытом и обсудить, как создать решение сопоставимой сложности для вашей компании.
              </ResultsText>
            </ResultsSection>
          </SectionContainer>
        </Section>

        {/* Контактный блок */}
        <ContactSection>
          <SectionContainer>
            <ContactTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Спроектируем цифровую систему для вашего бизнеса?
            </ContactTitle>
            <ContactText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Мы специализируемся на сложных B2B-решениях: CPQ, ERP, SaaS.
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
              <NavLink to="/projects">Все проекты</NavLink>
              <NavLink to="/">Главная</NavLink>
            </NavigationLinks>
          </SectionContainer>
        </ContactSection>
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
            <ModalDesktopMockup>
              <ModalDesktopScreen>
                <img 
                  src={modalImage} 
                  alt="Увеличенный скриншот"
                />
              </ModalDesktopScreen>
            </ModalDesktopMockup>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectPageContainer>
  );
};

export default SpectraCpqPage;
