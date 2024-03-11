"use client"
import { createContext, useContext, useState } from "react";

const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

    console.log("isNightMode in Provider:", isNightMode);
  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => {
  return useContext(NightModeContext);
};


