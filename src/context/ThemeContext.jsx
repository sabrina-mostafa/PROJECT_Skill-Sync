import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const themes = ['light', 'dark', 'sepia', 'forest'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.className = ''; // clear all classes
    html.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
