import React, { createContext, useEffect, useState } from "react";

export const ThemesContext = createContext();

export function ThemesProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme = localStorage.getItem("telecomMerchantTheme");
    if (!currentTheme || currentTheme === "") {
      return;
    }
    setTheme(currentTheme);
  }, [theme]);
  return (
    <ThemesContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemesContext.Provider>
  );
}
