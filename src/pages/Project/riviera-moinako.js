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

// Header внутри Hero
const HeroHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 0;
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
  background: linear-gradient(135deg, rgba(21, 21, 21, 0.8) 0%, rgba(42, 42, 42, 0.6) 100%);
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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, 0.65);
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
  font-weight: 300;
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
    background: transparent;
    color: #FFFFFF;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SecondaryButton = styled(motion.a)`
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
    
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Основные секции
const Section = styled.section`
  padding: 120px 0;
  background-color: #EAE6DC;
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
  color: #28161F;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  color: #28161F;
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
  color: #28161F;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  
  &:before {
    content: "•";
    color: #28161F;
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
  background: #FAF8F5;
  // border: 1px solid #3A3A3A;
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
  color: #28161F;
  margin-bottom: 16px;
`;

const WorkflowText = styled.p`
  font-size: 16px;
  color: #28161F;
  font-weight: 300;
  line-height: 1.6;
`;


const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 48px;
`;

const ResultCard = styled.div`
  background: #FAF8F5;
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
  color: #28161F;
  margin-bottom: 16px;
  line-height: 1;
`;

const ResultText = styled.div`
  font-size: 16px;
  color: #28161F;
  font-weight: 400;
  line-height: 1.4;
`;

const ContactSection = styled.section`
  padding: 120px 0;
  background-color: #EAE6DC;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #28161F;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 18px;
  color: #28161F;
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
  color: #28161F;
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
    border: 1px solid #28161F;
    color: #28161F;
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
  color: #28161F;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
`;


const RivieraMoinakoPage = () => {
  const { openPopup } = useContactPopupContext();

  const handleContactClick = () => {
    openPopup();
  };

  return (
    <ProjectPageContainer>
      <main>
        {/* Hero Section */}
        <HeroSection>
          <HeroHeader>
            <HeaderContainer>
              <Logo to="/">CORE</Logo>
              <BackButton to="/projects">
                ← Все проекты
              </BackButton>
            </HeaderContainer>
          </HeroHeader>
          <HeroBackground />
          <Container>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ЖК «Мойнако»
              </Title>
              
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                От анализа конкурентов до запуска с рекламой и SEO. Полный цикл разработки лендинга.
              </Subtitle>
              
              <CTAButtons
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
                  href="https://riviera-moinako.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                >
                  Посетить страницу проекта
                </SecondaryButton>
              </CTAButtons>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Введение */}
        <Section>
          <SectionContainer>
            <SectionTitle>О проекте</SectionTitle>
            <SectionText>
              ЖК «Мойнако» — жилой комплекс в Крыму, которому нужен был современный лендинг для презентации объекта, повышения узнаваемости и привлечения покупателей. 
              К нам обратился крупный клиент, представляющий агенство недвижимости. Мы разработали полноценное решение: от анализа конкурентов до тестирования и запуска рекламных кампаний.
            </SectionText>
          </SectionContainer>
        </Section>

        {/* Цели и задачи */}
        <Section style={{ backgroundColor: '#EAE6DC' }}>
          <SectionContainer>
            <SectionTitle>Задачи проекта</SectionTitle>
            <TasksList>
              <TaskItem>Изучить рынок и лучшие практики в недвижимости</TaskItem>
              <TaskItem>Спроектировать удобную структуру лендинга</TaskItem>
              <TaskItem>Создать дизайн в премиальном стиле, соответствующий бренду ЖК</TaskItem>
              <TaskItem>Подготовить копирайтинг с фокусом на продажи</TaskItem>
              <TaskItem>Оптимизировать сайт для поисковиков (SEO)</TaskItem>
              <TaskItem>Настроить рекламу и протестировать гипотезы</TaskItem>
              <TaskItem>Передать заказчику все исходные данные для дальнейшего использования</TaskItem>
            </TasksList>
          </SectionContainer>
        </Section>

        {/* Этапы работы */}
        <Section>
          <SectionContainer>
            <SectionTitle>Как мы работали над проектом</SectionTitle>
            <WorkflowGrid>
              <WorkflowCard>
                <WorkflowTitle>Анализ конкурентов</WorkflowTitle>
                <WorkflowText>
                  Изучили сайты девелоперов в сегменте. Составили подборку лучших решений и функционала. Определили, что реально работает для продажи ЖК.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Прототипирование</WorkflowTitle>
                <WorkflowText>
                  Создали структуру будущего лендинга. Проработали сценарии пользователя (инвестор / покупатель). Проверили логику взаимодействия до разработки.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Дизайн</WorkflowTitle>
                <WorkflowText>
                  Минималистичный стиль с акцентом на визуал ЖК. Большие фотографии, типографика премиум-класса. Адаптив для мобильных устройств.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Копирайтинг</WorkflowTitle>
                <WorkflowText>
                  Написали продающие тексты. Подчеркнули уникальные преимущества ЖК. Сделали акценты на выгоды для инвестора и покупателя.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>SEO-оптимизация</WorkflowTitle>
                <WorkflowText>
                  Подбор ключевых запросов (региональные + ЖК). Правильная структура заголовков H1–H3. Мета-теги и микроразметка.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Реклама и A/B тесты</WorkflowTitle>
                <WorkflowText>
                  Запустили рекламные кампании в Google Ads / Яндекс. Провели A/B-тесты разных вариантов CTA и заголовков. Определили лучший вариант для максимальной конверсии.
                </WorkflowText>
              </WorkflowCard>
              
              <WorkflowCard>
                <WorkflowTitle>Передача исходных данных</WorkflowTitle>
                <WorkflowText>
                  Клиент получил полный пакет: макеты, тексты, доступы. Возможность масштабировать проект дальше без ограничений.
                </WorkflowText>
              </WorkflowCard>
            </WorkflowGrid>
          </SectionContainer>
        </Section>


        {/* Результаты проекта */}
        <Section>
          <SectionContainer>
            <SectionTitle>Что получилось</SectionTitle>
            <ResultsGrid>
              <ResultCard>
                <ResultNumber>+45%</ResultNumber>
                <ResultText>заявок по сравнению с предыдущим решением</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>100%</ResultNumber>
                <ResultText>рост узнаваемости ЖК «Мойнако» в регионе</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>-30%</ResultNumber>
                <ResultText>стоимости лида благодаря SEO и оптимизации рекламы</ResultText>
              </ResultCard>
              
              <ResultCard>
                <ResultNumber>∞</ResultNumber>
                <ResultText>возможность самостоятельного развития проекта</ResultText>
              </ResultCard>
            </ResultsGrid>
            
            <SectionText style={{ marginTop: '48px' }}>
              Клиент получил весь пакет исходных данных, что позволяет ему самостоятельно развивать проект дальше.
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
              Хотите лендинг для жилого комплекса с реальным результатом?
            </ContactTitle>
            <ContactText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Мы создаём сайты, которые продают. Обсудим ваш проект?
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

export default RivieraMoinakoPage;
