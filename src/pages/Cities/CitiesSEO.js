import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SEOSection = styled.section`
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
  margin-bottom: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 32px;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.div`
  max-width: 900px;
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  color: #E0E0E0;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CitiesSEOComponent = () => {
  return (
    <SEOSection role="complementary" aria-label="Информация о работе CORE по всей России">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CORE — ваш digital-партнёр по всей России
          </Title>
        </SectionHeader>

        <Content>
          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Мы реализовали более 47 проектов в разных регионах страны. 
            CORE разрабатывает сайты и цифровые продукты для Москвы, Сочи, Крыма, Санкт-Петербурга, Екатеринбурга и других городов. 
            Наши сайты, брендинг и интерфейсы помогают компаниям выделяться на конкурентных рынках и привлекать новых клиентов.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Наши услуги включают брендинг, разработку сайтов под ключ, дизайн интерфейсов и маркетинговое сопровождение. 
            Независимо от региона, мы выстраиваем единый стандарт качества и прозрачный процесс работы. 
            CORE работает в едином стандарте качества, где каждый этап прозрачен и понятен заказчику. 
            Мы берём на себя всё — от разработки под ключ до маркетингового сопровождения.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            CORE объединяет экспертизу в разных отраслях — от девелопмента и недвижимости до SaaS-сервисов и e-commerce. 
            Мы делаем проекты, которые приносят результат и в федеральных центрах, и в регионах. 
            Благодаря нашей экспертизе в отраслях вы получаете не просто красивый сайт, а инструмент продаж и роста. 
            Звоните — обсудим, как сделать ваш проект результативнее
          </Paragraph>
        </Content>
      </Container>
    </SEOSection>
  );
};

export default CitiesSEOComponent;
