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
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
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

const Description = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  max-width: 800px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  
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
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 32px;
`;

const ProjectType = styled.div`
  font-size: 14px;
  color: #BFBFBF;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const ProjectResult = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ProjectCTA = styled.a`
  color: #3A5AFF;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #5A7AFF;
  }
`;

const AllProjectsCTA = styled(motion.div)`
  text-align: center;
`;

const AllProjectsButton = styled.a`
  display: inline-block;
  padding: 16px 48px;
  background: #FFFFFF;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #FFFFFF;
  
  &:hover {
    background: transparent;
    color: #FFFFFF;
  }
`;

const RecentProjectsComponent = () => {
  const projects = [
    {
      id: 1,
      type: 'Сайт ЖК/девелопер',
      title: 'Агентство недвижимости SOLTERRA',
      result: '+40% инвест-заявок за 3 месяца',
      link: '/project/solterra',
      image: './images/solterra/preview/preview.png'
    },
    {
      id: 2,
      type: 'SaaS/продукт',
      title: 'Spectra CPQ',
      result: '–30% времени обработки заказа, +12% CR',
      link: '/project/spectra-cpq',
      image: './images/spectra/preview/preview.png'
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
    <ProjectsSection>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Недавние проекты
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы оцениваем результат в деньгах и метриках, а не в пикселях. Ниже — свежие кейсы, где видно, как digital решает бизнес-задачи
          </Description>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.location.href = project.link}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectResult>{project.result}</ProjectResult>
                <ProjectCTA href={project.link}>
                  Смотреть кейс →
                </ProjectCTA>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <AllProjectsCTA
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AllProjectsButton href="/projects">
            Все проекты
          </AllProjectsButton>
        </AllProjectsCTA>
      </Container>
    </ProjectsSection>
  );
};

export default RecentProjectsComponent;
