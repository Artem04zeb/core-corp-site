import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Neue Haas Grotesk Display';
    src: url('/fonts/neue-haas-grotesk-display-black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Akkurat Pro';
    src: url('/fonts/AkkuratPro-Regular.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #151515;
    color: #FFFFFF;
    line-height: 1.6;
    font-weight: 400;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  h4 {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    color: #E0E0E0;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #BFBFBF;
    }
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Сетка 12 колонок */
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .grid-12 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 40px;
  }

  /* Утилиты для отступов */
  .section {
    padding: 120px 0;
  }

  .section-sm {
    padding: 80px 0;
  }

  /* Анимации */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease-out;
  }

  /* Скроллбар */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #151515;
  }

  ::-webkit-scrollbar-thumb {
    background: #2A2A2A;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #3A3A3A;
  }

  /* Медиа-запросы */
  @media (max-width: 1200px) {
    h1 {
      font-size: 56px;
    }
    
    h2 {
      font-size: 32px;
    }
    
    .container {
      padding: 0 32px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
    
    h2 {
      font-size: 28px;
    }
    
    body {
      font-size: 16px;
    }
    
    .container {
      padding: 0 24px;
    }
    
    .section {
      padding: 80px 0;
    }
    
    .section-sm {
      padding: 60px 0;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 32px;
    }
    
    h2 {
      font-size: 24px;
    }
    
    .container {
      padding: 0 16px;
    }
  }
`;

export default GlobalStyles;
