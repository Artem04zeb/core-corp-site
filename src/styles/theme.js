export const theme = {
  colors: {
    // Основные цвета
    primary: '#151515', // Основной фон
    secondary: '#2A2A2A', // Геометрия и подложки
    text: '#FFFFFF', // Основной текст
    textSecondary: '#E0E0E0', // Вторичный текст
    accent: '#BFBFBF', // Платиновый акцент
    accentBlue: '#3A5AFF', // Холодный синий для кнопок/ссылок
    
    // Дополнительные оттенки
    gray: {
      100: '#FFFFFF',
      200: '#E0E0E0',
      300: '#BFBFBF',
      400: '#8A8A8A',
      500: '#5A5A5A',
      600: '#3A3A3A',
      700: '#2A2A2A',
      800: '#1A1A1A',
      900: '#151515'
    }
  },
  
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '56px',
      '6xl': '72px'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.8
    }
  },
  
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '120px'
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
    ultra: '1440px'
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  },
  
  borderRadius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px'
  }
};

export default theme;
