# Изображения и ассеты для компонентов

Эта папка содержит изображения, которые импортируются в React компоненты.

## Структура:

- **components/** - изображения для специфических компонентов
- **icons/** - SVG иконки для импорта
- **ui/** - UI элементы (кнопки, декорации)
- **patterns/** - паттерны и текстуры

## Использование:

Изображения импортируются в компоненты:
```javascript
import heroImage from '../assets/images/hero/background.jpg';
import iconLogo from '../assets/images/icons/logo.svg';

// В styled-components
const Background = styled.div`
  background-image: url(${heroImage});
`;

// В JSX
<img src={iconLogo} alt="Logo" />
```

## Преимущества:

- **Webpack оптимизация**: автоматическое сжатие и хеширование
- **Tree shaking**: неиспользуемые изображения не попадут в билд
- **TypeScript поддержка**: типизация для импортов
- **Hot reload**: изменения применяются мгновенно

## Требования:

- **Формат**: JPG, PNG, WebP, SVG
- **Размер**: до 500KB на файл
- **Оптимизация**: обязательна перед добавлением
