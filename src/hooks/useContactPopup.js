import { useState } from 'react';

const useContactPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(prev => !prev);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    togglePopup
  };
};

export default useContactPopup;
