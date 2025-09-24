import React, { createContext, useContext } from 'react';
import useContactPopup from '../hooks/useContactPopup';

const ContactPopupContext = createContext();

export const useContactPopupContext = () => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error('useContactPopupContext must be used within ContactPopupProvider');
  }
  return context;
};

export const ContactPopupProvider = ({ children }) => {
  const popupControls = useContactPopup();

  return (
    <ContactPopupContext.Provider value={popupControls}>
      {children}
    </ContactPopupContext.Provider>
  );
};

export default ContactPopupContext;
