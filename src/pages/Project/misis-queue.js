import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

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
    color: #FFFFFF;
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
  background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(42, 42, 42, 0.6) 100%);
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/misis/background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
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
  color: #FFFFFF;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 18px;
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
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
`;

// Основные секции
const Section = styled.section`
  padding: 120px 0;
  background-color: #ffffff;

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
  color:rgb(27, 56, 200);
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
  color:rgb(27, 56, 200);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 800px;
`;

const TasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
`;

const TaskItem = styled.li`
  font-size: 18px;
  color: #E0E0E0;
  color: #1b38c8;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  
  &:before {
    content: "•";
    color: #1b38c8;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 48px;
`;

const WorkflowCard = styled.div`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  background: #f1f2fe;
  border: 1px solid #1b38c8;  
  padding: 40px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3A5AFF;
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const WorkflowTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  // смена цвета
  color: #1b38c8;
  margin-bottom: 16px;
`;

const WorkflowText = styled.p`
  font-size: 16px;
  color: #1b38c8;
  font-weight: 300;
  line-height: 1.6;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const GalleryItem = styled(motion.div)`
  border: 1px solid #1b38c8;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px 0;
`;

const GalleryImage = styled.img`
  object-fit: cover;
  object-position: center;
  display: block;
  
  @media (max-width: 768px) {
    // height: 300px;
  }
`;

const GalleryCaption = styled.p`
  padding: 22px;
  font-size: 14px;
  color: #1b38c8;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 48px;
`;

const ResultCard = styled.div`
  background: #f1f2fe;
  border: 1px solid #1b38c8;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const ResultNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #1b38c8;
  margin-bottom: 16px;
  line-height: 1;
`;

const ResultText = styled.div`
  font-size: 16px;
  color: #1b38c8;
  font-weight: 400;
  line-height: 1.4;
`;

const ContactSection = styled.section`
  padding: 120px 0;
  background-color: #1A1A1A;
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

const MisisQueuePage = () => {
  const { openPopup } = useContactPopupContext();
  
  const breadcrumbItems = [
    { label: 'Главная', path: '/' },
    { label: 'Проекты', path: '/projects' },
    { label: 'МИСИС Queue', path: '/project/misis-queue' }
  ];

  const handleContactClick = () => {
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
      
      {/* Хлебные крошки */}
      <Breadcrumbs items={breadcrumbItems} />

      <main role="main" aria-label="Проект МИСИС Queue - цифровой сервис для студентов">
        {/* Hero Section */}
        <HeroSection role="banner" aria-label="МИСИС-заселение - цифровой сервис для студентов">
          <HeroBackground />
          <Container>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                МИСИС-заселение — цифровой сервис для студентов
              </Title>
              
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Регистрация и заселение студентов НИТУ МИСИС в общежития. Под контролем студии CORE с 2023 года
              </Subtitle>
              
              <CTAButton
                onClick={handleContactClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                aria-label="Обсудить проект МИСИС Queue с командой CORE"
              >
                Обсудить проект для вашей организации
              </CTAButton>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* О проекте */}
        <Section role="complementary" aria-label="Информация о проекте МИСИС Queue">
          <SectionContainer>
            <SectionTitle>О проекте</SectionTitle>
            <SectionText>
              В 2023 году студия CORE разработала и запустила сервис «МИСИС-заселение» — цифровую платформу для регистрации абитуриентов и студентов в общежития НИТУ МИСИС. Система охватывает более 1400 студентов ежегодно, координирует работу более 70 сотрудников, включая администрацию, охрану и волонтёров, и интегрирована в экосистему цифровых сервисов университета
            </SectionText>
            <SectionText>
              Благодаря внедрению удалось существенно сократить нагрузку на персонал и сделать процесс заселения прозрачным, удобным и безопасным
            </SectionText>
          </SectionContainer>
        </Section>

        {/* Цели и задачи */}
        {/* <Section style={{ backgroundColor: '#1A1A1A' }}> */}
        <Section style={{ backgroundColor: '#f1f2fe' }}>
          <SectionContainer>
            <SectionTitle style={{ color: '#1b38c8' }}>Цели и задачи</SectionTitle>
            <TasksList>
              <TaskItem>Создать удобный сервис для абитуриентов и студентов</TaskItem>
              <TaskItem>Автоматизировать процесс распределения и заселения</TaskItem>
              <TaskItem>Оптимизировать работу сотрудников (администрация, охрана, волонтёры)</TaskItem>
              <TaskItem>Интегрировать систему в цифровую экосистему НИТУ МИСИС</TaskItem>
              <TaskItem>Обеспечить безопасность данных и бесперебойную работу в пиковые периоды.</TaskItem>
            </TasksList>
          </SectionContainer>
        </Section>

        {/* Этапы работы */}
        <Section>
          <SectionContainer>
            <SectionTitle>Как мы работали</SectionTitle>
            <WorkflowGrid>
              <WorkflowCard>
                <WorkflowTitle>Анализ и интервью</WorkflowTitle>
                <WorkflowText>
                  Изучение текущих процессов заселения. Интервью с администрацией и студентами. Формулировка проблем: перегруженность персонала, очереди, отсутствие прозрачности
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Прототипирование и проектирование системы</WorkflowTitle>
                <WorkflowText>
                  CJM студента: от подачи заявки до заселения. Прототипы интерфейсов для студентов и сотрудников. Валидация с администрацией МИСИС
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Разработка и интеграции</WorkflowTitle>
                <WorkflowText>
                  Реализация веб-сервиса для студентов. Личный кабинет сотрудников и администраторов. Интеграция с внутренними сервисами университета
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Запуск и поддержка</WorkflowTitle>
                <WorkflowText>
                  Тестирование в пиковые периоды (приёмная кампания). Обучение сотрудников. Техническая поддержка и доработки
                </WorkflowText>
              </WorkflowCard>
            </WorkflowGrid>
          </SectionContainer>
        </Section>

        {/* Визуализация интерфейсов */}
        {/* <Section style={{ backgroundColor: '#1A1A1A' }}> */}
        <Section style={{ backgroundColor: '#FFFFFF' }}>
          <SectionContainer>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Интерфейсы и функциональность
            </SectionTitle>
            <GalleryGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="grid"
              aria-label="Галерея скриншотов МИСИС Queue"
            >
              <GalleryItem variants={itemVariants} role="gridcell" aria-label="Автоматическое распределение студентов">
                <GalleryImage 
                  src="/images/misis/screens/time.png" 
                  alt="Скриншот системы МИСИС Queue - автоматическое распределение студентов в общежитиях с выбором времени заселения" 
                  loading="lazy"
                />
                <GalleryCaption>
                Система обрабатывает загруженный оператором файл и автоматически определяет, в какое общежитие направлен студент. 
                Далее она ограничивает выбор и предоставляет пользователю только релевантные варианты. 
                Студент может выбрать удобный день и время заселения, а администрация корпуса получает списки и ожидает его в назначенный срок.
                </GalleryCaption>
              </GalleryItem>
              
              <GalleryItem variants={itemVariants} role="gridcell" aria-label="Организация информации и документов">
                <GalleryImage 
                  src="/images/misis/screens/info.png" 
                  alt="Скриншот системы МИСИС Queue - организация информации и документов для студентов" 
                  loading="lazy"
                />
                <GalleryCaption>
                Вся необходимая организационная информация и обязательные документы собраны в отдельном окне. 
                Это исключает путаницу и гарантирует, что студент всегда имеет доступ к актуальным данным в удобном формате.
                </GalleryCaption>
              </GalleryItem>
              
              <GalleryItem variants={itemVariants} role="gridcell" aria-label="Удобный интерфейс для студентов">
                <GalleryImage 
                  src="/images/misis/screens/final.png" 
                  alt="Скриншот системы МИСИС Queue - удобный интерфейс для студентов с простой регистрацией" 
                  loading="lazy"
                />
                <GalleryCaption>
                Простая регистрация и быстрый вход позволяют студентам заселиться без лишних ожиданий. 
                Нет необходимости стоять у дверей общежития часами: система формирует точный график, и каждого студента ждут к назначенному времени.
                </GalleryCaption>
              </GalleryItem>
              
              <GalleryItem variants={itemVariants} role="gridcell" aria-label="Панель управления для администрации">
                <GalleryImage 
                  src="/images/misis/screens/list.png" 
                  alt="Скриншот системы МИСИС Queue - панель управления для административной стороны с мониторингом и контролем" 
                  loading="lazy"
                />
                <GalleryCaption>
                Для администрации реализован модуль мониторинга и контроля. 
                Он позволяет отслеживать активность студентов, просматривать статистику и оперативно решать спорные ситуации. 
                Отдельные таблицы по каждому общежитию можно сохранять, печатать и редактировать.
                </GalleryCaption>
              </GalleryItem>
            </GalleryGrid>
          </SectionContainer>
        </Section>

        {/* Результаты */}
        <Section>
          <SectionContainer>
            <SectionTitle>Что дало внедрение</SectionTitle>
            <ResultsGrid>
              <ResultCard>
                <ResultNumber>&gt;1400</ResultNumber>
                <ResultText>студентов заселяются через систему ежегодно</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>&gt;70</ResultNumber>
                <ResultText>сотрудников оптимизирована работа</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>-50%</ResultNumber>
                <ResultText>сокращено время на обработку заявок</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>100%</ResultNumber>
                <ResultText>устранены очереди и ручные ошибки</ResultText>
              </ResultCard>
            </ResultsGrid>
            
            <SectionText style={{ marginTop: '48px' }}>
              Интеграция с экосистемой МИСИС обеспечивает долгосрочную устойчивость и масштабируемость решения
            </SectionText>
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
              Готовы внедрить цифровой сервис в вашей организации?
            </ContactTitle>
            <ContactText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Команда CORE разрабатывает решения для гос. сектора и образовательных учреждений. Мы знаем, как делать процессы удобными и прозрачными.
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
        
        {/* Structured Data for Project */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "МИСИС Queue - система заселения студентов",
            "description": "Цифровая платформа для регистрации абитуриентов и студентов в общежития НИТУ МИСИС. Система охватывает более 1400 студентов ежегодно и координирует работу более 70 сотрудников.",
            "url": "https://core-studio.ru/project/misis-queue",
            "applicationCategory": "EducationApplication",
            "operatingSystem": "Web",
            "dateCreated": "2023",
            "creator": {
              "@type": "Organization",
              "name": "CORE Studio",
              "url": "https://core-studio.ru"
            },
            "publisher": {
              "@type": "Organization",
              "name": "НИТУ МИСИС",
              "url": "https://misis.ru"
            },
            "featureList": [
              "Автоматическое распределение студентов в общежития",
              "Организация информации и документов",
              "Удобный интерфейс для студентов",
              "Панель управления для администрации",
              "Мониторинг и контроль процесса заселения"
            ],
            "screenshot": [
              "https://core-studio.ru/images/misis/screens/time.png",
              "https://core-studio.ru/images/misis/screens/info.png",
              "https://core-studio.ru/images/misis/screens/final.png",
              "https://core-studio.ru/images/misis/screens/list.png"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "1400",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </main>
    </ProjectPageContainer>
  );
};

export default MisisQueuePage;
