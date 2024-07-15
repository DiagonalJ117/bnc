// src/contexts/LanguageContext.tsx
import { createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';

// Define the shape of the context
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>({
  language: 'en',
  setLanguage: () => {},
});

const LanguageProvider: FunctionalComponent = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageContext, LanguageProvider};