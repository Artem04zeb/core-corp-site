import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PopupContainer = styled(motion.div)`
  background-color: #151515;
  border: 1px solid #2A2A2A;
  border-radius: 8px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 24px;
    max-width: 90vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  
  line {
    stroke: #BFBFBF;
    stroke-width: 2;
    stroke-linecap: round;
    transition: stroke 0.2s ease;
  }
  
  &:hover line {
    stroke: #FFFFFF;
  }
`;

const PopupTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const PopupSubtitle = styled.p`
  font-size: 16px;
  color: #BFBFBF;
  margin: 0 0 32px 0;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #E0E0E0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FormInput = styled.input`
  padding: 16px;
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
    border-color: #3A5AFF;
    box-shadow: 0 0 0 2px rgba(58, 90, 255, 0.2);
  }
  
  &:hover {
    border-color: #E0E0E0;
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background-color: #3A5AFF;
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  
  &:hover {
    background-color: #5A7AFF;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(58, 90, 255, 0.4);
  }
  
  &:disabled {
    background-color: #2A2A2A;
    color: #BFBFBF;
    cursor: not-allowed;
    transform: none;
  }
`;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const popupVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: { duration: 0.2 }
  }
};

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Блокировка скролла при открытом попапе
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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

  const handleSubmit = async (e) => {
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
    
    setIsSubmitting(true);
    
    try {
      // Имитация отправки на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Отправка формы:', formData);
      alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
      
      // Очистка формы и закрытие попапа
      setFormData({ name: '', phone: '' });
      onClose();
      
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <PopupOverlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <PopupContainer
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="Закрыть">
              <CloseIcon viewBox="0 0 20 20">
                <line x1="15" y1="5" x2="5" y2="15" />
                <line x1="5" y1="5" x2="15" y2="15" />
              </CloseIcon>
            </CloseButton>

            <PopupTitle>Быстрая связь</PopupTitle>
            <PopupSubtitle>
              Оставьте свои контакты, и мы свяжемся с вами в течение 15 минут
            </PopupSubtitle>

            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="popup-name">Имя</FormLabel>
                <FormInput
                  id="popup-name"
                  type="text"
                  name="name"
                  placeholder="Как к вам обращаться"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="popup-phone">Телефон</FormLabel>
                <FormInput
                  id="popup-phone"
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
                  disabled={isSubmitting}
                  required
                  maxLength={18} // +7 (XXX) XXX-XX-XX = 18 символов
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Отправляем...' : 'Отправить'}
              </SubmitButton>
            </ContactForm>
          </PopupContainer>
        </PopupOverlay>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
