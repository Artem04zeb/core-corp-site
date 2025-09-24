import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessSection = styled.section`
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProcessColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProcessStep = styled(motion.div)`
  // background: #2A2A2A;
  // border: 1px solid #3A3A3A;
  // padding: 32px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    // border-color: #BFBFBF;
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    // background: #3A5AFF;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;


const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;

const Process = () => {
  const leftColumnSteps = [
    {
      title: 'Знакомство',
      description: 'Определяем цели и задачи, изучаем рынок и ваши ожидания. Формируем общее видение проекта'
    },
    {
      title: 'Аналитика',
      description: 'Изучаем конкурентов и аудиторию, проводим UX-исследования, разрабатываем стратегию и дорожную карту'
    },
    {
      title: 'Прототип',
      description: 'Строим информационную архитектуру, создаём пользовательские сценарии и UX-макеты'
    }
  ];

  const rightColumnSteps = [
    {
      title: 'Дизайн',
      description: 'Разрабатываем UI и визуальный стиль, адаптируем макеты под все устройства'
    },
    {
      title: 'Разработка',
      description: 'Реализуем проект на современном стеке технологий. Обеспечиваем скорость, безопасность и удобство управления'
    },
    {
      title: 'Запуск и поддержка',
      description: 'Выводим проект в онлайн, обеспечиваем техническое сопровождение, обновления и продвижение'
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
    <ProcessSection id="process">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Процесс работы
          </Title>
        </SectionHeader>

        <ProcessGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProcessColumn>
            {leftColumnSteps.map((step, index) => (
              <ProcessStep
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessColumn>

          <ProcessColumn>
            {rightColumnSteps.map((step, index) => (
              <ProcessStep
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessColumn>
        </ProcessGrid>
      </Container>
    </ProcessSection>
  );
};

export default Process;
