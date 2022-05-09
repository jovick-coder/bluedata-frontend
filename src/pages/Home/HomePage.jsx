import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import "./HomePage.css";

function HomePage() {
  const { logOut, userInformation, apiUrl } = useContext(UserContext);
  const [userAccountInformation, setUserAccountInformation] = useState([]);

  useEffect(() => {
    getUserAccountInfo();
  });

  const token = localStorage.getItem("telecomMerchantToken");

  async function getUserAccountInfo() {
    try {
      const resp = await axios.get(`${apiUrl}/account`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      setUserAccountInformation(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
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
      <div className="row">
        <div className="col-6 amount-col">
          <GroupCard>
            <div className="label">Amount</div>
            <div className="amount-figure">{userAccountInformation.amount}</div>
          </GroupCard>
        </div>
      </div>
      {/* <GroupCard> */}
      <div className="row action">
        <div className="col-sm-6 px-3">
          {/* <GroupCard> */}
          <button> Edit Profile</button>
          {/* </GroupCard> */}
        </div>
        <div className="col-sm-6 px-3">
          <button>Found Account</button>
        </div>
      </div>
      <div className="row action">
        <div className="col-sm-6 px-3">
          <button>Edit Profile</button>
        </div>
        <div className="col-sm-6 px-3">
          <button>Found Account</button>
        </div>
      </div>
      {/* </GroupCard> */}
    </div>
  );
}

export default HomePage;
