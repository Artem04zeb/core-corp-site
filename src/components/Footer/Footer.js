import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const FooterSection = styled.footer`
  background-color: #151515;
  padding: 120px 0 0;
  border-top: 1px solid #2A2A2A;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ImageSection = styled.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const FooterText = styled.div`
  width: 100%;
  padding: 18px;
  // background: linear-gradient(135deg, rgba(26, 63, 255, 0.1) 0%, rgba(21, 21, 21, 0.9) 100%);
  // border-radius: 8px;
  // border: 1px solid rgba(26, 63, 255, 0.2);
  
  @media (max-width: 1024px) {
    padding: 32px;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const FooterTextContent = styled.p`
  font-size: 18px;
  color:rgb(255, 255, 255);
  font-weight: 200;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContentSection = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const IdeaButton = styled(motion.div)`
  font-size: 88px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 60px;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1A3FFF;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const InfoColumn = styled.div``;

const InfoTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLink = styled.a`
  color: #E0E0E0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
  transition: color 0.3s ease;
  
  &:hover {
    color: #BFBFBF;
  }
`;


const BottomSection = styled.div`
  margin-top: 2em;
  border-top: 1px solid #2A2A2A;
  padding-top: 40px;
  text-align: center;
`;

const PrivacyLink = styled.a`
  color: #E0E0E0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  transition: color 0.3s ease;
  
  &:hover {
    color: #BFBFBF;
  }
`;

const Footer = () => {
  const { openPopup } = useContactPopupContext();

  const handleIdeaClick = () => {
    openPopup();
  };

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <ImageSection>
            <FooterText>
              <FooterTextContent>
                Наш продуктовый менеджер всегда следит за развитием идей клиентов, как за своим дитя. А большая команда специалистов берёт на себя все этапы — от исследования и проектирования до реализации и поддержки. В итоге вы получаете больше, чем ожидали. <br></br><br></br>С радостью обсудим вашу задумку на первом же звонке и поможем превратить её в чёткую идею!
              </FooterTextContent>
            </FooterText>
          </ImageSection>

          <ContentSection>
            <IdeaButton
              onClick={handleIdeaClick}
              whileHover={{ scale: 1.02 }}
            >
              Воплотить идею →
            </IdeaButton>

            <InfoGrid>
              <InfoColumn>
                <InfoTitle>Новости</InfoTitle>
                <InfoList>
                  <InfoItem>
                    <InfoLink href="https://t.me/core_studio" target="_blank" rel="noopener noreferrer">
                      Наш Telegram-канал
                    </InfoLink>
                  </InfoItem>
                </InfoList>
              </InfoColumn>

              <InfoColumn>
                <InfoTitle>Связь</InfoTitle>
                <InfoList>
                  <InfoItem>
                    <InfoLink href="mailto:info@core-studio.ru">
                      info@core-studio.ru
                    </InfoLink>
                  </InfoItem>
                  <InfoItem>
                    <InfoLink href="tel:+79180038384">
                      +7 (918) 003-83-84
                    </InfoLink>
                  </InfoItem>
                </InfoList>
              </InfoColumn>

            </InfoGrid>
            
            <BottomSection>
              <PrivacyLink href="/privacy">
                Политика конфиденциальности
              </PrivacyLink>
            </BottomSection>

          </ContentSection>
        </FooterContent>


      </Container>

      {/* Микроразметка Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CORE",
            "description": "Премиальное веб-агенство. Разработка сайтов, брендинг, маркетинг и дизайн для бизнеса.",
            "url": "https://core-studio.ru",
            "logo": "https://core-studio.ru/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-999-123-45-67",
              "contactType": "customer service",
              "email": "info@core-studio.ru"
            },
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Москва",
                "addressCountry": "RU"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              }
            ],
            "sameAs": [
              "https://t.me/core_studio"
            ]
          })
        }}
      />
    </FooterSection>
  );
};

export default Footer;
