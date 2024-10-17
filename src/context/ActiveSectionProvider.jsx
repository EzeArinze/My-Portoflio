import { createContext, useContext, useState } from "react";

const ActiveSection = createContext();

// eslint-disable-next-line react/prop-types
function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ActiveSection.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSection.Provider>
  );
}

export function useActive() {
  const context = useContext(ActiveSection);
  if (context === undefined) throw new Error("used outside it's scope");
  return context;
}

export default ActiveSectionProvider;
