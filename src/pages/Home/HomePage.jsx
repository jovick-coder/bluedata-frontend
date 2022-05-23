import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GroupCard, {
  DashboardActionCard,
  DashboardCard,
} from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import "./HomePage.css";

import {
  BsDoorOpen,
  BsPeople,
  BsPersonBoundingBox,
  BsPersonCheck,
  BsPersonPlus,
  BsWallet,
} from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { UnAuthorizeAccess } from "../error_page/error_page.component";
import { actionList } from "./actionList";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/adminContext";

function HomePage() {
  const {
    logOut,
    userInformation,
    apiUrl,
    getUserInfo,
    userAccountInformation,
    getUserAccountInfo,
    token,
    getUserPrivilege,
  } = useContext(UserContext);
  const { users, admins, resellers, getAllInfo } = useContext(AdminContext);

  useEffect(() => {
    // const { token, userPrivilege } = getToken();
    getUserAccountInfo();
    getUserInfo();
    getAllInfo();
  }, []);
  const { privilege } = userInformation;
  // const token = localStorage.getItem("telecomMerchantToken");
  // Check privilege before showing page content

  if (getUserPrivilege() < 1) {
    return <UnAuthorizeAccess />;
  }
  return (
    <div className="HomePage">
      <div className="header my-4  d-flex justify-content-between">
        <div className="welcome ms-4"> Welcome {userInformation.userName}</div>
        <button className="btn-danger btn me-4 btn-sm" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
      <hr />
      <div className="d-flex flex-wrap ">
        <div className="px-1">
          <DashboardCard
            label={"Wallet Balance"}
            icon={<BsWallet />}
            figure={<div className="n">{userAccountInformation.amount}</div>}
          />
        </div>
        {getUserPrivilege() > 1 ? (
          <>
            <div className="px-1">
              <DashboardCard
                label={"Total Customers"}
                icon={<BsPersonCheck />}
                figure={"0"}
              />
            </div>
          </>
        ) : null}
        {getUserPrivilege() > 2 ? (
          <>
            <div className="px-1">
              <DashboardCard
                label={"Total Users"}
                icon={<BsPeople />}
                figure={users.length}
              />
            </div>
            <div className="px-1">
              <DashboardCard
                label={"Total Resellers"}
                icon={<BsPersonPlus />}
                figure={resellers.length}
              />
            </div>
          </>
        ) : null}
        {getUserPrivilege() > 3 ? (
          <>
            <div className="px-1">
              <DashboardCard
                label={"Total Admin"}
                icon={<BsPersonBoundingBox />}
                figure={admins.length}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="row">
        {actionList.map((link, i) => {
          const { label, icon, path, userPrivilege } = link;
          // console.log("userPrivilege");
          return (
            <>
              {getUserPrivilege() >= userPrivilege ? (
                <div className="col-6 col-md-3 px-1" key={i}>
                  <Link to={path}>
                    <DashboardActionCard label={label} icon={icon} />
                  </Link>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
