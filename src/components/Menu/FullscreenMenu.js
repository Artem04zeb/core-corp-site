import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0B0D12;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 60px;
  }
`;

const NavigationColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const NavLink = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.$isActive ? '#FFFFFF' : '#E0E0E0'};
  text-decoration: none;
  letter-spacing: -0.02em;
  line-height: 1.1;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    color: #FFFFFF;
    transform: translateX(8px);
  }
  
  ${props => props.$isActive && `
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  `}
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
  
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const ContactSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #BFBFBF;
  letter-spacing: 0.1em;
  margin: 0;
`;

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SocialLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #E0E0E0;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
    transform: translateX(4px);
  }
`;

const AddressText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #E0E0E0;
  margin: 0;
  line-height: 1.4;
`;

const ContactLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3A5AFF;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 300px;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  background-color: transparent;
  border: 1px solid #2A2A2A;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #BFBFBF;
  }
  
  &:focus {
    outline: none;
    border-color: #1A3FFF;
    box-shadow: 0 0 0 2px rgba(58, 90, 255, 0.2);
  }
  
  &:hover {
    border-color: #E0E0E0;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #1A3FFF;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color:rgb(45, 80, 255);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(58, 90, 255, 0.4);
  }
`;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const slideUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const FullscreenMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  
  const navigation = [
    { label: 'Главная', path: '/' },
    { label: 'Проекты', path: '/projects' },
    { label: 'Услуги', path: '/services' },
    { label: 'Все города', path: '/goroda' },
    { label: 'О нас', path: '/about' },
  ];

  const socialLinks = [
    { label: 'Telegram', url: 'https://t.me/core_studio' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Маска телефона
      const phoneNumber = value.replace(/\D/g, '');
      let formattedNumber = phoneNumber;
      
      if (formattedNumber.startsWith('8')) {
        formattedNumber = '7' + formattedNumber.slice(1);
      }
      
      if (!formattedNumber.startsWith('7') && formattedNumber.length > 0) {
        formattedNumber = '7' + formattedNumber;
      }
      
      if (formattedNumber.length > 11) {
        formattedNumber = formattedNumber.slice(0, 11);
      }
      
      let result = '';
      if (formattedNumber.length === 0) {
        result = '';
      } else if (formattedNumber.length <= 1) {
        result = '+7';
      } else if (formattedNumber.length <= 4) {
        result = `+7 (${formattedNumber.slice(1)}`;
      } else if (formattedNumber.length <= 7) {
        result = `+7 (${formattedNumber.slice(1, 4)}) ${formattedNumber.slice(4)}`;
      } else if (formattedNumber.length <= 9) {
        result = `+7 (${formattedNumber.slice(1, 4)}) ${formattedNumber.slice(4, 7)}-${formattedNumber.slice(7)}`;
      } else {
        result = `+7 (${formattedNumber.slice(1, 4)}) ${formattedNumber.slice(4, 7)}-${formattedNumber.slice(7, 9)}-${formattedNumber.slice(9)}`;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: result
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    
    // Проверяем, что номер телефона содержит 11 цифр и начинается с 7
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Отправка формы:', formData);
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
    
    // Очистка формы
    setFormData({ name: '', phone: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            <NavigationColumn
              role="navigation"
              aria-label="Основное меню"
              as={motion.nav}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navigation.map((item, index) => (
                <NavLink key={item.path} variants={slideUp}>
                  <StyledLink
                    to={item.path}
                    $isActive={location.pathname === item.path}
                    onClick={onClose}
                  >
                    {item.label}
                  </StyledLink>
                </NavLink>
              ))}
            </NavigationColumn>

            <ContactsColumn
              as={motion.div}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <ContactSection variants={slideUp}>
                <ContactTitle>Новости</ContactTitle>
                <SocialList>
                  {socialLinks.map((social) => (
                    <SocialLink
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </SocialLink>
                  ))}
                </SocialList>
              </ContactSection>

              <ContactSection variants={slideUp}>
                <ContactTitle>Большой опыт в городах</ContactTitle>
                <AddressText>
                  Москва, Сочи, Крым, СПБ, Волгоград
                </AddressText>
              </ContactSection>

              <ContactSection variants={slideUp}>
                <ContactTitle>Связь</ContactTitle>
                <ContactLink href="mailto:info@core.studio">
                  info@core.studio
                </ContactLink>
                <ContactLink href="tel:+79180038384">
                  +7 (918) 003-83-84
                </ContactLink>
              </ContactSection>

              <ContactSection variants={slideUp}>
                <ContactTitle>Быстрая связь</ContactTitle>
                <ContactForm onSubmit={handleSubmit}>
                  <FormInput 
                    type="text" 
                    name="name"
                    placeholder="Как к вам обращаться" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                  <FormInput 
                    type="tel" 
                    name="phone"
                    placeholder="+7 (918) 003-83-84" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      // Разрешаем: цифры, Backspace, Delete, Tab, Escape, Enter, стрелки
                      if (!/[0-9]/.test(e.key) && 
                          !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    maxLength={18}
                    required 
                  />
                  <SubmitButton type="submit">
                    Отправить
                  </SubmitButton>
                </ContactForm>
              </ContactSection>
              
            </ContactsColumn>
          </MenuContainer>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu;
