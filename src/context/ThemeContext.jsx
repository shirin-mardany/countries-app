import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  useEffect(() => {
    localStorage.setItem("them", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
    
export { ThemeProvider, ThemeContext };
    