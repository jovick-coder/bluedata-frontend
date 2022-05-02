import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { ThemesProvider } from "./context/themesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemesProvider>
  </React.StrictMode>
);
