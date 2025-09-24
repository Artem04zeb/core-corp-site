// Утилита для форматирования номера телефона
export const formatPhoneNumber = (value) => {
  console.log('formatPhoneNumber input:', value); // Отладка
  
  // Удаляем все символы кроме цифр
  const phoneNumber = value.replace(/\D/g, '');
  console.log('Digits only:', phoneNumber); // Отладка
  
  // Если номер начинается с 8, заменяем на 7
  let formattedNumber = phoneNumber;
  if (formattedNumber.startsWith('8')) {
    formattedNumber = '7' + formattedNumber.slice(1);
  }
  
  // Если номер не начинается с 7, добавляем 7
  if (!formattedNumber.startsWith('7') && formattedNumber.length > 0) {
    formattedNumber = '7' + formattedNumber;
  }
  
  // Ограничиваем до 11 цифр (7 + 10 цифр)
  if (formattedNumber.length > 11) {
    formattedNumber = formattedNumber.slice(0, 11);
  }
  
  // Форматируем в +7 (XXX) XXX-XX-XX
  let result;
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
  
  console.log('formatPhoneNumber result:', result); // Отладка
  return result;
};

// Функция для обработки ввода телефона
export const handlePhoneInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  
  console.log('handlePhoneInputChange called:', { name, value }); // Отладка
  
  if (name === 'phone') {
    const formattedPhone = formatPhoneNumber(value);
    console.log('Formatted phone:', formattedPhone); // Отладка
    setFormData(prev => ({
      ...prev,
      [name]: formattedPhone
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

// Функция для обработки нажатий клавиш (только цифры)
export const handlePhoneKeyDown = (e) => {
  // Разрешаем: цифры, Backspace, Delete, Tab, Escape, Enter, стрелки
  if (!/[0-9]/.test(e.key) && 
      !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
};

// Функция для валидации номера телефона
export const validatePhoneNumber = (phone) => {
  const phoneDigits = phone.replace(/\D/g, '');
  return phoneDigits.length === 11 && phoneDigits.startsWith('7');
};
