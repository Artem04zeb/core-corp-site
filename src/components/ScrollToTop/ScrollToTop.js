import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Временно отключаем плавную прокрутку для моментального перехода
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Прокручиваем к началу страницы при изменении маршрута
    window.scrollTo(0, 0);
    
    // Восстанавливаем исходное поведение прокрутки
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
