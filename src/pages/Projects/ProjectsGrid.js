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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
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

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(21, 21, 21, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 24px;
  text-align: center;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

const OverlayResult = styled.p`
  font-size: 16px;
  color: #BFBFBF;
  font-weight: 400;
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

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.6;
`;



const ProjectsGridComponent = () => {
  const projects = [
    {
      id: 1,
      title: 'Агенство недвижимости Solterra',
      description: 'Разработка фирменного стиля, лендинга и полного сайта агентства недвижимости',
      result: 'Рост узнаваемости бренда на 65%',
      image: './images/solterra/preview/preview.png',
      link: '/project/solterra'
    },
    {
      id: 2,
      title: 'Riviera-Moinako',
      description: 'Сайт жилого комплекса с современным дизайном и удобной навигацией для потенциальных покупателей',
      result: '+40% обращений инвесторов за 3 месяца',
      image: './images/moinako/preview/preview.png',
      link: '/project/riviera-moinako'
    },
    {
      id: 3,
      title: 'Spectra CPQ',
      description: 'SaaS-сервис для автоматизации процессов производства и управления заказами',
      result: 'Сокращение времени обработки заказов на 30%',
      image: './images/spectra/preview/preview.png',
      link: '/project/spectra-cpq'

    },
    {
      id: 4,
      title: 'Онлайн очередь МИСИС',
      description: 'Внедрение системы онлайн очереди в университет МИСИС для оптимизации работы с абитуриентами',
      result: 'Сокращение времени ожидания на 70%',
      image: './images/misis/preview/preview.jpeg',
      link: '/project/misis-queue'
    },
    {
      id: 5,
      title: 'МедКаб',
      description: 'Сайт для медицинского технологического стартапа с современным дизайном и функциональностью',
      result: '+120% заявок от клиентов',
      image: './images/preview/medcab.png',
      link: '/medkab'
    },
    {
      id: 6,
      title: 'Моя Аптечка',
      description: 'Мобильное приложение для медицинского стартапа с функцией управления лекарствами и напоминаниями',
      result: '4.8★ в App Store, 50K+ скачиваний',
      image: './images/my-kit/preview/preview.png',
      link: '/project/moya-aptechka'
    },
    {
      id: 7,
      title: 'Туристический агрегатор',
      description: 'Разработка полнофункционального туристического агрегатора с системой бронирования и отзывов',
      result: 'Обработка 10K+ запросов в день',
      image: './images/preview.png',
      link: '/project/travel-aggregator'
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
            Галерея работ
          </Title>
        </SectionHeader>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Первый проект */}
          <ProjectCard
            key={projects[0].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[0].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[0].image} alt={projects[0].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[0].title}</OverlayTitle>
                <OverlayResult>{projects[0].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[0].title}</ProjectTitle>
              <ProjectDescription>{projects[0].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>

          {/* Второй проект */}
          <ProjectCard
            key={projects[1].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[1].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[1].image} alt={projects[1].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[1].title}</OverlayTitle>
                <OverlayResult>{projects[1].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[1].title}</ProjectTitle>
              <ProjectDescription>{projects[1].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>

          {/* Третий проект */}
          <ProjectCard
            key={projects[2].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[2].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[2].image} alt={projects[2].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[2].title}</OverlayTitle>
                <OverlayResult>{projects[2].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[2].title}</ProjectTitle>
              <ProjectDescription>{projects[2].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>

          {/* Четвертый проект */}
          <ProjectCard
            key={projects[3].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[3].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[3].image} alt={projects[3].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[3].title}</OverlayTitle>
                <OverlayResult>{projects[3].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[3].title}</ProjectTitle>
              <ProjectDescription>{projects[3].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>

          {/* Пятый проект */}
          {/* <ProjectCard
            key={projects[4].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[4].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[4].image} alt={projects[4].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[4].title}</OverlayTitle>
                <OverlayResult>{projects[4].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[4].title}</ProjectTitle>
              <ProjectDescription>{projects[4].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard> */}

          {/* Шестой проект */}
          <ProjectCard
            key={projects[5].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[5].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[5].image} alt={projects[5].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[5].title}</OverlayTitle>
                <OverlayResult>{projects[5].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[5].title}</ProjectTitle>
              <ProjectDescription>{projects[5].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>

          {/* Седьмой проект */}
          {/* <ProjectCard
            key={projects[6].id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = `/project${projects[6].link}`}
          >
            <ProjectImageContainer>
              <ProjectImage src={projects[6].image} alt={projects[6].title} />
              <ProjectOverlay>
                <OverlayTitle>{projects[6].title}</OverlayTitle>
                <OverlayResult>{projects[6].result}</OverlayResult>
              </ProjectOverlay>
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>{projects[6].title}</ProjectTitle>
              <ProjectDescription>{projects[6].description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard> */}  

        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsGridComponent;
