import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import NavBarComponent from "./components/NavBar/NavBarComponent.jsx";
import { useContext, useState } from "react";
import { ThemesContext, ThemesProvider } from "./context/themesContext";
import ThemeTogglerComponent from "./components/ThemeToggler/ThemeTogglerComponent";
import LoginPage from "./pages/Loginpage/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isError, setIsError] = useState({ error: false, message: "" });
  const [theme, setTheme] = useContext(ThemesContext);
  return (
    <div className="App" data-theme={theme} s>
      <NavBarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ThemeTogglerComponent />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* 
    <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}
      </Routes>
    </div>
    // </ThemesProvider>
  );
}

export default App;
