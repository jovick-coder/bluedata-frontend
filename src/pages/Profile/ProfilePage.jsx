import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { ProfilePicture } from "../../components/NavBar/NavBarComponent";
import "./ProfilePage.css";
import { UserContext } from "../../context/userContext";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";

function ProfilePage() {
  const [isUpdateProfile, setIseUpdateProfile] = useState(false);
  const { userInformation, getUserInfo } = useContext(UserContext);
  useEffect(() => {
    // getUserInfo();
  }, []);
  return (
    <>
      {isUpdateProfile ? (
        <UpdateProfile
          userInformation={userInformation}
          isUpdateProfile={isUpdateProfile}
          setIseUpdateProfile={setIseUpdateProfile}
          getUserInfo={getUserInfo}
        />
      ) : (
        <Profile
          userInformation={userInformation}
          isUpdateProfile={isUpdateProfile}
          setIseUpdateProfile={setIseUpdateProfile}
          getUserInfo={getUserInfo}
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
  getUserInfo,
}) {
  const { email, fullName, joinDate, phoneNumber, privilege, userName } =
    userInformation;

  useEffect(() => {
    // getUserInfo();
  }, []);
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
        {/* <SwitchAccountButton privilege={privilege} /> */}

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

// export function SwitchAccountButton({ privilege }) {
//   const navigate = useNavigate();
//   const { apiUrl, userInformation } = useContext(UserContext);
//   const { email } = userInformation;
//   async function switchAccount(from, to) {
//     const password = window.prompt("Enter your Password");

//     if (window.prompt("Enter your Password") === "") {
//       alert(" Empty password");
//       return;
//     }

//     if (!window.prompt("Enter your Password")) {
//       return;
//     }
//     const url = `${apiUrl}/user/login`;

//     console.log(password, email);
//     const sendBody = {
//       email: email,
//       password: password,
//     };
//     try {
//       const resp = await axios.post(url, sendBody);
//       if (resp.data.ok) {
//         if (to === 2) {
//           navigate("/adminDashboard/home");
//           return;
//         }
//         if (to === 1) {
//           navigate("/Dashboard/home");
//           return;
//         }
//       }
//     } catch (error) {
//       console.log("Error->", error.response.data);
//     }
//   }
//   return (
//     <>
//       {privilege != 1 && privilege != 2 ? (
//         <>
//           {" "}
//           Switch Account
//           <div className="d-flex justify-content-center my-3">
//             {privilege === 4 || 3 ? (
//               <>
//                 <button
//                   className="button btn-sm m-auto"
//                   onClick={() => switchAccount(privilege, 1)}
//                 >
//                   User
//                 </button>
//                 <button
//                   className="button btn-sm m-auto"
//                   onClick={() => switchAccount(privilege, 2)}
//                 >
//                   Admin
//                 </button>
//                 {privilege === 4 ? (
//                   <>
//                     <button className="button btn-sm m-auto">
//                       Super Admin
//                     </button>
//                   </>
//                 ) : null}
//               </>
//             ) : null}
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// }

export function UpdateProfile({
  userInformation,
  isUpdateProfile,
  setIseUpdateProfile,
  // getUserInfo,
}) {
  useEffect(() => {
    // getUserInfo();
  }, []);
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const { token, getUserInfo } = useContext(UserContext);
  const { email, fullName, phoneNumber, userName } = userInformation;
  let [updateEmail, setUpdateEmail] = useState("");
  let [updateFullName, setUpdateFullName] = useState("");
  let [updatePhoneNumber, setUpdatePhoneNumber] = useState("");
  let [updateUserName, setUpdateUserName] = useState("");
  const { apiUrl } = useContext(UserContext);
  const url = `${apiUrl}/userInfo`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (
      updateEmail === "" &&
      updateFullName === "" &&
      updatePhoneNumber === "" &&
      updateUserName === ""
    ) {
      setPopUpMessage({
        messageType: "error",
        message: "No Data to be Updated",
      });
      return;
    }

    if (updateEmail === "") {
      updateEmail = email;
    }
    if (updateFullName === "") {
      updateFullName = fullName;
    }
    if (updatePhoneNumber === "") {
      updatePhoneNumber = phoneNumber;
    }
    if (updateUserName === "") {
      updateUserName = userName;
    }

    const sendBody = {
      email: updateEmail,
      fullName: updateFullName,
      phoneNumber: updatePhoneNumber,
      userName: updateUserName,
    };

    // console.log(sendBody);
    formElement[4].innerText = "Updating Profile...";
    formElement[4].setAttribute("disabled", true);
    try {
      const axiosInstance = axios.create({
        headers: {
          Authorization: token,
        },
      });
      const resp = await axiosInstance.put(url, sendBody);

      // setFormMessage({ ok: true, message: "Update SuccessFul" });

      if (!resp.data.ok) {
        // console.log(resp);
        formElement[4].innerText = "Update Profile";
        formElement[4].removeAttribute("disabled");
        formElement[4].style.border = "solid red 1px";
        setPopUpMessage({
          messageType: "error",
          message: "Error Updating Profile",
        });
      }
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "success",
          message: "Profile updated",
        });
        getUserInfo();
        setUpdateEmail("");
        setUpdateFullName("");
        setUpdatePhoneNumber("");
        setUpdateUserName("");
        formElement[4].innerText = "Updating Profile";
        formElement[4].removeAttribute("disabled");
        formElement[4].style.border = "none";
      }
      // if (resp.data.ok) {
      //   formElement[4].innerText = "Submit";
      //   formElement[4].removeAttribute("disabled");
      //   formElement[4].style.border = "solid red 1px";
      // }
    } catch (error) {
      console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      // setFormMessage({ error: true, message: error.response.data.message });
      formElement[4].innerText = "Update Profile";
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
          <div className="row">
            <div className="col-md-6 my-2 px-2">
              <b>User Name</b>
              <input
                type="text"
                className="form-control"
                placeholder={userName}
                value={updateUserName}
                onChange={(e) => {
                  setUpdateUserName(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6 my-2 px-2">
              <b>Full Name</b>
              <input
                type="text"
                className="form-control"
                placeholder={fullName}
                value={updateFullName}
                onChange={(e) => {
                  setUpdateFullName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-2 px-2">
              <b>Email</b>
              <input
                type="text"
                className="form-control"
                placeholder={email}
                value={updateEmail}
                onChange={(e) => {
                  setUpdateEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6 my-2 px-2">
              <b>PhoneNumber</b>
              <input
                type="number"
                className="form-control"
                placeholder={phoneNumber}
                value={updatePhoneNumber}
                onChange={(e) => {
                  setUpdatePhoneNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            {" "}
            <button
              className="button my-3 mx-auto"
              // onClick={() => setIseUpdateProfile(!isUpdateProfile)}
            >
              Update Profile
            </button>
          </div>
        </form>
      </GroupCard>
    </div>
  );
}
