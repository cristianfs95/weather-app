import React, { createContext, useContext } from 'react';
import useToggle from '../hooks/useToggle';
import { ThemeContextProps, ThemeProviderProps } from '../components/types';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setToggleDarkMode] = useToggle(false);
  const value: ThemeContextProps = { isDarkMode, setToggleDarkMode };
  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext (): ThemeContextProps | null {
  const context = useContext(ThemeContext);
  if (context === undefined || context === null) {
    console.error('Theme context must be used within a Theme Provider');
    return null;
  }
  return context;
}
