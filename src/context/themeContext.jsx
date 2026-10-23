
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [lightCount, setLightCount] = useState(0);
  const [darkCount, setDarkCount] = useState(0);

  const toggleTheme = () => {
    if (theme === 'light') {
      setLightCount((count) => count + 1);
      setTheme('dark');
    } else {
      setDarkCount((count) => count + 1);
      setTheme('light');
    }
  };

  useEffect(() => {
    console.log('light', lightCount);
    console.log('dark', darkCount);
  }, [lightCount, darkCount]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lightCount,
        darkCount
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
