import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const ProjectPageContainer = styled.div`
  background-color: #29161f;
  min-height: 100vh;
`;

const MinimalHeader = styled.header`
  padding: 24px 0;
  background-color: transparent;
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

const HeroSection = styled.section`
  padding: 120px 0;
  min-height: 100vh;
  background-image: url('./images/solterra/background2.png');
  background-size: cover;
  background-color: #29161f;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to bottom, transparent 0%, #2c151f 100%);
    z-index: 2;
  }
`;

const HeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 3;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const HeroContent = styled.div``;

const HeroTitle = styled(motion.h1)`
  font-size: 64px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 20px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const HeroCTA = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  background: #FFFFFF;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
  margin-right: 16px;
  cursor: pointer;
  
  &:hover {
    background: transparent;
    color: #FFFFFF;
  }
`;

const HeroCTAButton = styled(motion.a)`
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
  
  &:hover {
    background: #FFFFFF;
    color: #151515;
  }
`;

const HeroButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const LogoImage = styled.img`
  max-width: 400px;
  width: 50%;
  height: auto;
  filter: brightness(0) invert(1);
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Section = styled.section`
  padding: 120px 0;
  background-color: #2c151f;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 40px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionText = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 800px;
`;

const TasksList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled(motion.li)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  
  &::before {
    content: '•';
    color: #3A5AFF;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const WorkflowCard = styled(motion.div)`
  // background: #2A2A2A;
  border: 1px solid rgb(255, 255, 255);
  padding: 32px;
  border-radius: 8px;
`;

const WorkflowTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const WorkflowDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;

const CarouselContainer = styled(motion.div)`
  margin-top: 40px;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CarouselTrack = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 12px;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const CarouselButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
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
  margin-top: 16px;
`;

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const CarouselCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(26, 63, 255, 0.1) 0%, rgba(21, 21, 21, 0.9) 100%);
  border: 1px solid rgba(26, 63, 255, 0.2);
  border-radius: 32px;
  padding: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 300px;
    padding: 24px;
  }
`;

const CTATitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CTAText = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButton = styled.button`
  display: inline-block;
  padding: 16px 32px;
  background: #FFFFFF;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3A5AFF;
    color: #FFFFFF;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ResultCard = styled(motion.div)`
  text-align: center;
  padding: 32px 24px;
  border-radius: 8px;
`;

const ResultNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color:rgb(255, 255, 255);
  margin-bottom: 16px;
  line-height: 1;
`;

const ResultText = styled.div`
  font-size: 16px;
  color:#ffffff;
  font-weight: 400;
  line-height: 1.4;
`;

const QuoteCard = styled(motion.div)`
  border: 1px solid rgb(255, 255, 255);
  border-radius: 8px;
  padding: 32px;
  margin-top: 40px;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 16px;
    left: 24px;
    font-size: 48px;
    color:rgb(255, 255, 255);
    font-weight: 700;
  }
`;

const QuoteText = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  padding-left: 40px;
  font-style: italic;
`;

const ContactSection = styled.section`
  padding: 120px 0;
  background-color: #29161f;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
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

const ContactCTA = styled(motion.a)`
  display: inline-block;
  padding: 16px 32px;
  background: #FFFFFF;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
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

const ProjectPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openPopup } = useContactPopupContext();
  
  const images = [
    "./images/solterra/screens/1.png",
    "./images/solterra/screens/2.png", 
    "./images/solterra/screens/3.png",
    "cta"
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
    <ProjectPageContainer>
      {/* Минималистичный хеддер */}
      <MinimalHeader>
        <HeaderContainer>
          <Logo to="/">CORE</Logo>
          <BackButton to="/projects">
            ← Все проекты
          </BackButton>
        </HeaderContainer>
      </MinimalHeader>

      {/* Hero-блок */}
      <HeroSection>
        <HeroContainer>
          <HeroGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroContent>
              <HeroTitle variants={itemVariants}>
                Агентство недвижимости SOLTERRA
              </HeroTitle>
              <HeroSubtitle variants={itemVariants}>
                Разработка фирменного стиля, лендинга и полного сайта агентства
              </HeroSubtitle>
              <HeroButtonsContainer variants={itemVariants}>
              <HeroCTA
                  onClick={openPopup}
                  whileHover={{ scale: 1.02 }}
                >
                  Обсудить похожий проект для вашей организации
                </HeroCTA>
                <HeroCTAButton
                  href="https://solterragroup.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                >
                  Открыть сайт проекта
                </HeroCTAButton>
              </HeroButtonsContainer>
            </HeroContent>
            <HeroVisual variants={itemVariants}>
              <LogoImage 
                src="./images/solterra/logo.svg" 
                alt="Solterra Logo"
              />
            </HeroVisual>
          </HeroGrid>
        </HeroContainer>
      </HeroSection>

      {/* О клиенте */}
      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            О проекте
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SOLTERRA — компания, работающая с жилыми комплексами бизнес-класса. 
            Мы помогли агентству пройти полный цикл: от разработки бренда до запуска сайта, 
            который стал ключевым инструментом продаж.
          </SectionText>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Проект включал создание фирменного стиля, запуск лендинга для быстрого старта 
            и разработку полноценного сайта агентства с каталогом объектов и системой управления заявками.
          </SectionText>
        </Container>
      </Section>

      {/* Цели и задачи */}
      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Задачи
          </SectionTitle>
          <TasksList
            as={motion.ul}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TaskItem variants={itemVariants}>
              Сформировать фирменный стиль и позиционирование
            </TaskItem>
            <TaskItem variants={itemVariants}>
              Запустить быстрый лендинг для теста гипотез и первых заявок
            </TaskItem>
            <TaskItem variants={itemVariants}>
              Подключить рекламу и SEO для старта продаж
            </TaskItem>
            <TaskItem variants={itemVariants}>
              Разработать сайт агентства с каталогами ЖК и брокеров
            </TaskItem>
            <TaskItem variants={itemVariants}>
              Организовать прозрачный процесс разработки
            </TaskItem>
            <TaskItem variants={itemVariants}>
              Обеспечить ускоренный запуск (с доплатой клиента)
            </TaskItem>
          </TasksList>
        </Container>
      </Section>

      {/* Этапы работы */}
      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Этапы работы
          </SectionTitle>
          <WorkflowGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WorkflowCard variants={itemVariants}>
              <WorkflowTitle>Этап 1. Брендинг</WorkflowTitle>
              <WorkflowDescription>
                Разработка логотипа, айдентики и фирменного стиля. 
                Формирование позиционирования: миссия, ценности, tone of voice. 
                Подготовка брендбука.
              </WorkflowDescription>
            </WorkflowCard>
            <WorkflowCard variants={itemVariants}>
              <WorkflowTitle>Этап 2. Лендинг + быстрый запуск</WorkflowTitle>
              <WorkflowDescription>
                Создание одностраничного лендинга для генерации первых заявок. 
                Настройка рекламных кампаний (Google Ads / Яндекс). 
                Базовое SEO. Получены первые заявки уже на этапе разработки основного сайта.
              </WorkflowDescription>
            </WorkflowCard>
            <WorkflowCard variants={itemVariants}>
              <WorkflowTitle>Этап 3. Сайт агентства недвижимости</WorkflowTitle>
              <WorkflowDescription>
                Архитектура сайта: главная, каталог ЖК, брокеры, о компании. 
                Упаковка объектов недвижимости с фильтрацией. 
                Представление брокеров. Интеграция с CRM для учёта заявок.
              </WorkflowDescription>
            </WorkflowCard>
            <WorkflowCard variants={itemVariants}>
              <WorkflowTitle>Этап 4. Организация процесса</WorkflowTitle>
              <WorkflowDescription>
                Прозрачное планирование: доступ заказчика к Trello/Notion. 
                Еженедельные отчёты и согласования. 
                Отдельная опция — ускоренный запуск: клиент оплатил за приоритет и получил сайт быстрее.
              </WorkflowDescription>
            </WorkflowCard>
          </WorkflowGrid>
        </Container>
      </Section>

      {/* Визуализация проекта */}
      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Дизайн и реализация
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Дизайн можно оценить сразу на сайте заказчика. Ниже доступны демо-страницы брендбука с содержанием разработанного решения. Полную версию вы сможете увидеть вместе с нашим менеджером на звонке
          </SectionText>
          
          <CarouselContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CarouselTrack>
              <CarouselSlide>
                {images[currentSlide] === "cta" ? (
                  <CarouselCTA>
                    <CTATitle>Готовы обсудить ваш проект?</CTATitle>
                    <CTAText>
                      Свяжитесь с нами, чтобы обсудить детали и получить персональное предложение
                    </CTAText>
                    <CTAButton onClick={openPopup}>
                      Обсудить проект
                    </CTAButton>
                  </CarouselCTA>
                ) : (
                  <CarouselImage 
                    src={images[currentSlide]} 
                    alt={`Solterra Screen ${currentSlide + 1}`} 
                  />
                )}
              </CarouselSlide>
            </CarouselTrack>
            <CarouselNav>
              <CarouselButton onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)}>
                ← Назад
              </CarouselButton>
              <CarouselButton onClick={() => setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0)}>
                Вперед →
              </CarouselButton>
            </CarouselNav>
            <CarouselDots>
              <CarouselDot 
                active={currentSlide === 0} 
                onClick={() => setCurrentSlide(0)}
              />
              <CarouselDot 
                active={currentSlide === 1} 
                onClick={() => setCurrentSlide(1)}
              />
              <CarouselDot 
                active={currentSlide === 2} 
                onClick={() => setCurrentSlide(2)}
              />
              <CarouselDot 
                active={currentSlide === 3} 
                onClick={() => setCurrentSlide(3)}
              />
            </CarouselDots>
          </CarouselContainer>
        </Container>
      </Section>

      {/* Результаты */}
      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Результаты проекта
          </SectionTitle>
          <ResultsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ResultCard variants={itemVariants}>
              <ResultNumber>+35%</ResultNumber>
              <ResultText>заявок после запуска лендинга и рекламы</ResultText>
            </ResultCard>
            <ResultCard variants={itemVariants}>
              <ResultNumber>ТОП-10</ResultNumber>
              <ResultText>по запросам «купить квартиру [регион]»</ResultText>
            </ResultCard>
            <ResultCard variants={itemVariants}>
              <ResultNumber>100%</ResultNumber>
              <ResultText>сайт стал основным каналом продаж</ResultText>
            </ResultCard>
          </ResultsGrid>
          
          <QuoteCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <QuoteText>
              Благодаря прозрачности процесса мы всегда знали, на каком этапе работа. 
              Ускоренный запуск позволил стартовать раньше конкурентов.
            </QuoteText>
          </QuoteCard>
        </Container>
      </Section>

      {/* Контакты и возврат */}
      <ContactSection>
        <Container>
          <ContactTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Хотите запустить сайт для агентства недвижимости с быстрым результатом?
          </ContactTitle>
          <ContactText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Обсудим ваш проект и предложим путь, который поможет вашей идее раскрыться в полной мере
          </ContactText>
          <ContactCTA
            href="/contact"
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
        </Container>
      </ContactSection>
    </ProjectPageContainer>
  );
};

export default ProjectPage;
