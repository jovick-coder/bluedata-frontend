import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import NavBarComponent from "./components/NavBar/NavBarComponent.jsx";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState({ error: false, message: "" });

  return (
    <div className="App">
      <NavBarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        {/* <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
