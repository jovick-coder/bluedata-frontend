import React, { useContext, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { ProfilePicture } from "../../components/NavBar/NavBarComponent";
import "./ProfilePage.css";
import { UserContext } from "../../context/userContext";
import axios from "axios";

function ProfilePage() {
  const [isUpdateProfile, setIseUpdateProfile] = useState(false);
  const { userInformation } = useContext(UserContext);
  return (
    <>
      {isUpdateProfile ? (
        <UpdateProfile
          userInformation={userInformation}
          isUpdateProfile={isUpdateProfile}
          setIseUpdateProfile={setIseUpdateProfile}
        />
      ) : (
        <Profile
          userInformation={userInformation}
          isUpdateProfile={isUpdateProfile}
          setIseUpdateProfile={setIseUpdateProfile}
        />
      )}
    </>
  );
}

export default ProfilePage;

export function Profile({
  userInformation,
  isUpdateProfile,
  setIseUpdateProfile,
}) {
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
          {isUpdateProfile ? null : (
            <button
              className="button my-3 mx-auto"
              onClick={() => setIseUpdateProfile(!isUpdateProfile)}
            >
              Update Profile
            </button>
          )}{" "}
        </div>
      </GroupCard>
    </div>
  );
}

export function UpdateProfile({
  userInformation,
  isUpdateProfile,
  setIseUpdateProfile,
}) {
  const { email, fullName, phoneNumber, userName } = userInformation;
  const [formMessage, setFormMessage] = useState({
    ok: false,
    message: "",
  });

  const { apiUrl } = useContext(UserContext);
  const url = `${apiUrl}/user/login`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    const sendBody = {
      email: formElement[0].value,
      password: formElement[1].value,
    };
    try {
      // const resp = await axios.put(url, sendBody);

      setFormMessage({ ok: true, message: "Update SuccessFul" });
      // if (resp.data.ok) {
      //   formElement[4].innerText = "Submit";
      //   formElement[4].removeAttribute("disabled");
      //   formElement[4].style.border = "solid red 1px";
      // }
    } catch (error) {
      // console.log("Error->", error.response.data);
      setFormMessage({ error: true, message: error.response.data.message });
      formElement[4].innerText = "Update";
      formElement[4].removeAttribute("disabled");
      formElement[4].style.border = "solid red 1px";
    }
  };

  return (
    <div className="ProfilePage pt-5">
      <GroupCard>
        {!isUpdateProfile ? null : (
          <button
            className="button my-3 mx-auto"
            onClick={() => setIseUpdateProfile(!isUpdateProfile)}
          >
            Cancel
          </button>
        )}
        <div className="row mt-5">
          <div className="col-12 mx-auto profilePictureCol">
            <ProfilePicture className="my-auto" />
            <h3 className="mt-3">{fullName}</h3>
          </div>
        </div>
        <div className="my-3 fs-3 text-center fw-900">
          <u>Update User Profile</u>
        </div>
        <div className="text-danger">
          * fill only the fields you want to update
        </div>
        <form action="" onSubmit={(e) => handelSubmit(e)}>
          {formMessage.ok ? (
            <div className="alert alert-success">{formMessage.message}</div>
          ) : null}
          <div className="row">
            <div className="col-md-6 my-2 px-2">
              <b>User Name</b>
              <input
                type="text"
                className="form-control"
                placeholder={userName}
              />
            </div>
            <div className="col-md-6 my-2 px-2">
              <b>Full Name</b>
              <input
                type="text"
                className="form-control"
                placeholder={fullName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-2 px-2">
              <b>Email</b>
              <input type="text" className="form-control" placeholder={email} />
            </div>
            <div className="col-md-6 my-2 px-2">
              <b>PhoneNumber</b>
              <input
                type="number"
                className="form-control"
                placeholder={phoneNumber}
              />
            </div>
          </div>
          <div className="d-flex">
            {" "}
            <button
              className="button my-3 mx-auto"
              // onClick={() => setIseUpdateProfile(!isUpdateProfile)}
            >
              Update
            </button>
          </div>
        </form>
      </GroupCard>
    </div>
  );
}
