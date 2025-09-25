import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
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

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  max-width: 600px;
  // margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #BFBFBF;
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const ProjectResult = styled.p`
  font-size: 16px;
  color: #BFBFBF;
  font-weight: 400;
`;

const CitiesButton = styled(motion.div)`
  grid-column: 1 / -1;
  background: transparent;
  color: #E0E0E0;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #3A3A3A;
  font-weight: 400;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-color: #BFBFBF;
    color: #FFFFFF;
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const CitiesButtonText = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;


const AllProjectsButton = styled(motion.a)`
  display: block;
  width: 66.66%;
  max-width: 400px;
  margin: 0 auto;
  background: #FFFFFF;
  color: #151515;
  text-align: center;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #FFFFFF;
  transition: all 0.3s ease;
  
  &:hover {
    background: transparent;
    color: #FFFFFF;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Агентство недвижимости SOLTERRA',
      result: 'Разработка фирменного стиля, лендинга и полного сайта агентства недвижимости',
      image: '/images/solterra/preview/preview.png',
      link: '/project/solterra'
    },
    {
      id: 2,
      title: 'Сервис онлайн-заселения НИТУ МИСИС',
      result: 'Внедрение системы онлайн очереди в университет МИСИС для оптимизации работы с абитуриентами',
      image: '/images/misis/preview/preview.jpeg',
      link: '/project/misis-queue'
    },
    {
      id: 3,
      title: 'CPQ-система «Спектра»',
      result: 'SaaS-сервис для автоматизации процессов производства и управления заказами',
      image: '/images/spectra/preview/preview.png',
      link: '/project/spectra-cpq'
    },
    {
      id: 4,
      title: 'Мобильное приложение «Моя Аптечка»',
      result: 'Мобильное приложение для медицинского стартапа с функцией управления лекарствами и напоминаниями',
      image: '/images/my-kit/preview/preview.png',
      link: '/my-pharmacy'
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
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Реальные проекты
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы показываем не картинки, а рабочие решения. Каждый кейс — это рост показателей и новые возможности для клиентов
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Первые два проекта */}
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.location.href = `${project.link}`}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectResult>{project.result}</ProjectResult>
              </ProjectContent>
            </ProjectCard>
          ))}

          {/* Кнопка "Смотреть города" */}
          <CitiesButton
            as={motion.div}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '/goroda'}
          >
            <CitiesButtonText>Смотреть города</CitiesButtonText>
          </CitiesButton>

          {/* Последние два проекта */}
          {projects.slice(2, 4).map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.location.href = `${project.link}`}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectResult>{project.result}</ProjectResult>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <AllProjectsButton
          href="/projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          Все проекты
        </AllProjectsButton>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
