import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { ThemesProvider } from "./context/themesContext";
import { UserProvider } from "./context/userContext";
import { PopUpMessageProvider } from "./context/PopUpMessageContext";
import { AdminProvider } from "./context/adminContext";

ReactDOM.render(
  <React.StrictMode>
    <PopUpMessageProvider>
      <ThemesProvider>
        <BrowserRouter>
          <UserProvider>
            <AdminProvider>
              <App />
            </AdminProvider>
          </UserProvider>
        </BrowserRouter>
      </ThemesProvider>
    </PopUpMessageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
