import React, { createContext, useState } from "react";
import App from "../App";

export const ThemesContext = createContext();

export function ThemesProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemesContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemesContext.Provider>
  );
}
