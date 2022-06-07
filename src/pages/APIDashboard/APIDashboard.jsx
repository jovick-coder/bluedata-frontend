import React, { useContext, useEffect } from "react";
import { DashboardCard } from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import "./APIDashboard.css";

import { BsPersonBoundingBox, BsWallet } from "react-icons/bs";
import { UnAuthorizeAccess } from "../error_page/error_page.component";
// import { actionList } from "./actionList";
import { AdminContext } from "../../context/adminContext";

function APIDashboard() {
  const {
    userInformation,
    getUserInfo,
    userAccountInformation,
    getUserAccountInfo,
    getUserPrivilege,
  } = useContext(UserContext);
  const { admins, getAllInfo } = useContext(AdminContext);

  // const [apiInfo, setApiInfo] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    // const { token, userPrivilege } = getToken();
    getUserAccountInfo();
    getUserInfo();
    getAllInfo();
  });
  // const { privilege } = userInformation;
  // const token = localStorage.getItem("telecomMerchantToken");
  // Check privilege before showing page content

  if (getUserPrivilege() < 4) {
    return <UnAuthorizeAccess />;
  }
  return (
    <div className="APIDashboard">
      <div className="header my-4  d-flex justify-content-between">
        <h1 className="ms-4">API Dashboard</h1>
        <div className="welcome me-4"> Welcome {userInformation.userName}</div>
        {/* <button className="btn-danger btn me-4 btn-sm" onClick={() => logOut()}>
          LogOut
        </button> */}
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
        {/* {actionList.map((link, i) => {
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
        })} */}
      </div>
    </div>
  );
}

export default APIDashboard;
