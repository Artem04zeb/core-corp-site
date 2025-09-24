import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FullscreenMenu from '../Menu/FullscreenMenu';
import { useContactPopupContext } from '../../contexts/ContactPopupContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background-color: ${props => props.$menuOpen ? 'transparent' : (props.$scrolled ? '#151515' : 'transparent')};
  transition: background-color 0.3s ease;
  padding: 24px 0;
`;

const HeaderContent = styled.div`
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

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Neue Haas Grotesk Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: all 0.3s ease;
  ${props => props.$hidden && `
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  `}
  
  &:hover {
    color: #BFBFBF;
  }
`;

const MenuButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const BurgerLine = styled.span`
  width: 24px;
  height: 2px;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
  border-radius: 2px;
  
  &:not(:last-child) {
    margin-bottom: 6px;
  }
  
  ${props => props.$isOpen && `
    &:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;




const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  transition: all 0.3s ease;
  ${props => props.$hidden && `
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  `}
  
  @media (max-width: 768px) {
    display: ${props => props.$scrolled ? 'none' : 'flex'};
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #BFBFBF;
  }
  
  ${props => props.$accent && `
    color: #1A3FFF ;
    font-weight: 500;
    
    &:hover {
      color: #3A5AFF;
    }
  `}
`;

const ContactButton = styled.button`
  color: #1A3FFF ;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    color: #5A7AFF;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPopup } = useContactPopupContext();

  const handleContactClick = () => {
    openPopup();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <>
      <HeaderContainer $scrolled={scrolled} $menuOpen={isMenuOpen}>
        <HeaderContent>
          <LeftSection>
            <MenuButton 
              onClick={toggleMenu} 
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <BurgerLine $isOpen={isMenuOpen} />
              <BurgerLine $isOpen={isMenuOpen} />
              <BurgerLine $isOpen={isMenuOpen} />
            </MenuButton>
            <Logo to="/" $hidden={isMenuOpen}>CORE</Logo>
          </LeftSection>
          
          <Navigation $scrolled={scrolled} $hidden={isMenuOpen} aria-label="Основная навигация">
            <NavLink to="/projects">Проекты</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/goroda">Города</NavLink>
            <ContactButton onClick={handleContactClick}>Связаться</ContactButton>
          </Navigation>
        </HeaderContent>
      </HeaderContainer>

      <FullscreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;