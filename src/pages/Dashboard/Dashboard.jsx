import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardSideNav } from "../../components/NavBar/NavBarComponent";
import "./Dashboard.css";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { loggedIn } = useContext(UserContext);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  if (loggedIn === false) {
    navigate("/");
  }

  return (
    <div className="Dashboard">
      <input
        type="checkbox"
        className="sideBarCheck"
        checked={sideNavOpen ? true : false}
        style={{ display: "none" }}
        onChange={() => null}
      />

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

export function User() {
  return (
    <div className="">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate a,
      repellat optio assumenda commodi saepe sint nostrum possimus, quasi
      voluptates nemo eum nesciunt, officiis quisquam vitae hic maxime deleniti
      blanditiis!
    </div>
  );
}

// export function DashboardSideNav() {
//   return <div>DashboardSideNav</div>;
// }