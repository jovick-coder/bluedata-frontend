import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import NavBarComponent from "./components/NavBar/NavBarComponent.jsx";
import { useContext, useState } from "react";
import { ThemesContext } from "./context/themesContext";
import ThemeTogglerComponent from "./components/ThemeToggler/ThemeTogglerComponent";
import LoginPage from "./pages/Loginpage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/Home/HomePage";
import ErrorPage from "./pages/error_page/error_page.component";
import ProfilePage from "./pages/Profile/ProfilePage";
import HistoryPage from "./pages/History/HistoryPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import FoundAccountPage from "./pages/FoundAccount/FoundAccountPage";
import SubscriptionsPage from "./pages/Subscriptions/SubscriptionsPage";
import USerListPage from "./pages/UserList/USerListPage";
import CustomersListPage from "./pages/CustomersListPage/CustomersListPage";
import AdminListPage from "./pages/AdminListPage/AdminListPage";
import ResellersListPage from "./pages/ResellersListPage/ResellersListPage";
import PopUpMessageComponent from "./components/PopUpMessage/PopUpMessageComponent";
import ApiHistoryPage from "./pages/ApiHistory/ApiHistoryPage";
import APIDashboard from "./pages/APIDashboard/APIDashboard";
import RequestConfirmationPage from "./pages/RequestConfirmation/RequestConfirmationPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isError, setIsError] = useState({ error: false, message: "" });
  const [theme] = useContext(ThemesContext);
  return (
    <div className="App" data-theme={theme} s>
      <NavBarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* <ThemeTogglerComponent /> */}
      <PopUpMessageComponent />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="found-account" element={<FoundAccountPage />} />
          <Route path="Subscriptions" element={<SubscriptionsPage />} />
          <Route path="user-list" element={<USerListPage />} />
          <Route path="resellers-list" element={<ResellersListPage />} />
          <Route path="customers-list" element={<CustomersListPage />} />
          <Route path="admin-list" element={<AdminListPage />} />
          <Route path="api-dashboard" element={<APIDashboard />} />
          <Route path="api-history" element={<ApiHistoryPage />} />
          <Route
            path="request-confirmation"
            element={<RequestConfirmationPage />}
          />
        </Route>

        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
