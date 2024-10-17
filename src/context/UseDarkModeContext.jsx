import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkMode = createContext();

// eslint-disable-next-line react/prop-types
function UseDarkModeContext({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme)").matches,
    "DarkMode"
  );

  const toggleDark = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkMode.Provider value={{ isDarkMode, toggleDark }}>
      {children}
    </DarkMode.Provider>
  );
}

const useDarkMode = () => {
  const context = useContext(DarkMode);
  if (context === undefined)
    throw new Error("used context outside of it's scope ");
  return context;
};

export { UseDarkModeContext, useDarkMode };
