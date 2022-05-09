import React, { useContext } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { ProfilePicture } from "../../components/NavBar/NavBarComponent";
import "./ProfilePage.css";
import { UserContext } from "../../context/userContext";

function ProfilePage() {
  const { userInformation } = useContext(UserContext);
  const { email, fullName, joinDate, phoneNumber, privilege, userName } =
    userInformation;
  function checkPrivilege(privilege) {
    if (privilege === 1) {
      return "User";
    }
    if (privilege === 2) {
      return "Reseller";
    }
    if (privilege === 3) {
      return "Admin";
    }
    if (privilege === 4) {
      return "Super Admin";
    }
  }
  function getDate(date) {
    const dateArray = date.split("T");
    // console.log(dateArray);
    return dateArray[0];
  }
  return (
    <div className="ProfilePage pt-5">
      <GroupCard>
        <div className="row mt-5">
          <div className="col-12 mx-auto profilePictureCol">
            <ProfilePicture className="my-auto" />
            <h3 className="mt-3">{fullName}</h3>
          </div>
        </div>
        <div className="my-3 fs-3 text-center fw-900">
          <u>User Profile</u>
        </div>
        <div className="row">
          <div className="col-md-6 my-2 px-2">
            <b>User Name</b>
            <input
              type="text"
              className="form-control"
              value={userName}
              disabled
            />
          </div>
          <div className="col-md-6 my-2 px-2">
            <b>Full Name</b>
            <input
              type="text"
              className="form-control"
              value={fullName}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-2 px-2">
            <b>Email</b>
            <input
              type="text"
              className="form-control"
              value={email}
              disabled
            />
          </div>
          <div className="col-md-6 my-2 px-2">
            <b>PhoneNumber</b>
            <input
              type="number"
              className="form-control"
              value={phoneNumber}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-2 px-2">
            <b>Account Type</b>
            <input
              type="text"
              className="form-control"
              value={checkPrivilege(privilege)}
              disabled
            />
          </div>
          <div className="col-md-6 my-2 px-2">
            <b>Password</b>
            <input
              type="password"
              className="form-control"
              value={"0000"}
              disabled
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-2">
            <b>Account Created on</b> <br />
            <input
              type="date"
              className="form-control"
              value={getDate(joinDate)}
              disabled
            />
          </div>
        </div>
        <div className="d-flex">
          {" "}
          <button className="button my-3 mx-auto">Update Profile</button>
        </div>
      </GroupCard>
    </div>
  );
}

export default ProfilePage;
