import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardSideNav } from "../../components/NavBar/NavBarComponent";
import "./Dashboard.css";
import { UserContext } from "../../context/userContext";
import { AuthorizeAction } from "../../components/Forms/FormsComponent";

function Dashboard() {
  const { loggedIn, getUserInfo } = useContext(UserContext);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  if (loggedIn === false) {
    navigate("/");
  }

  useEffect(() => {
    // getUserInfo();
  }, []);
  return (
    <div className="Dashboard">
      <input
        type="checkbox"
        className="sideBarCheck"
        checked={sideNavOpen ? true : false}
        style={{ display: "none" }}
        onChange={() => null}
      />
      <AuthorizeAction />
      <div className="page-body-wrapper">
        <div className="side-nav">
          <DashboardSideNav
            sideNavOpen={sideNavOpen}
            setSideNavOpen={setSideNavOpen}
          />
        </div>
        <main className="main-dashboard-page ps-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
