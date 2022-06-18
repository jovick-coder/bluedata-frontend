import React, { createContext, useEffect, useState } from "react";

export const PopUpMessageContext = createContext();

export function PopUpMessageProvider({ children }) {
  const [popUpMessage, setPopUpMessage] = useState({
    messageType: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUpMessage({ messageType: "", message: "" });
    }, 6000);
    return () => clearTimeout(timer);
  }, [popUpMessage]);

  return (
    <PopUpMessageContext.Provider value={{ popUpMessage, setPopUpMessage }}>
      {children}
    </PopUpMessageContext.Provider>
  );
}
