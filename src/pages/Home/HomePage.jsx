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

function HomePage() {
  const {
    logOut,
    userInformation,
    apiUrl,
    getUserInfo,
    userAccountInformation,
    getUserAccountInfo,
  } = useContext(UserContext);

  useEffect(() => {
    getUserAccountInfo();
    getUserInfo();
  }, []);
  const { privilege } = userInformation;
  // const token = localStorage.getItem("telecomMerchantToken");
  // Check privilege before showing page content
  const token = localStorage.getItem("telecomMerchantToken");
  const tokenArray = token.split(".");
  const decode = JSON.parse(atob(tokenArray[1]));

  const userPrivilege = decode.privilege;
  if (userPrivilege < 1) {
    return <UnAuthorizeAccess />;
  }
  return (
    <div className="HomePage">
      <div className="header my-4 d-flex justify-content-between">
        Welcome
        {userInformation.userName}
        <button className="btn-danger btn-sm" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
      <div className="row ">
        <div className="col-md-4 px-1">
          <DashboardCard
            label={"Wallet Balance"}
            icon={<BsWallet />}
            figure={<div className="n">{userAccountInformation.amount}</div>}
          />
        </div>
        {userPrivilege > 1 ? (
          <>
            <div className="col-md-4 px-1">
              <DashboardCard
                label={"Total Customers"}
                icon={<BsPersonCheck />}
                figure={"0"}
              />
            </div>
          </>
        ) : null}
        {userPrivilege > 2 ? (
          <>
            <div className="col-md-4 px-1">
              <DashboardCard
                label={"Total Users"}
                icon={<BsPeople />}
                figure={"0"}
              />
            </div>
            <div className="col-md-4 px-1">
              <DashboardCard
                label={"Total Resellers"}
                icon={<BsPersonPlus />}
                figure={"0"}
              />
            </div>
          </>
        ) : null}
        {userPrivilege > 3 ? (
          <>
            <div className="col-md-4 px-1">
              <DashboardCard
                label={"Total Admin"}
                icon={<BsPersonBoundingBox />}
                figure={"0"}
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
              {privilege >= userPrivilege ? (
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
