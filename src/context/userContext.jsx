import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoaderBorderComponent } from "../components/Spinner/SpinnerComponent";
import { PopUpMessageContext } from "./PopUpMessageContext";

import moment from "moment";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userAccountInformation, setUserAccountInformation] = useState([]);

  const [userInformation, setUserInformation] = useState([]);
  // const [, setUserAccountInformation] = useState([]);

  const token = localStorage.getItem("telecomMerchantToken");

  function getUserPrivilege() {
    const tokenArray = token.split(".");
    const decode = JSON.parse(atob(tokenArray[1]));

    const userPrivilege = decode.privilege;
    return userPrivilege;
  }

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
  const apiUrl = "http://localhost:5000/api";
  // const apiUrl = "https://blue-data-api.herokuapp.com/api";

  useEffect(() => {
    if (!token || token === "") {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
  }, [loggedIn, token]);

  useEffect(() => {
    // if(!token && token!== ''){
    getUserInfo();
    // }
  }, []);

  const navigate = useNavigate();
  function logOut() {
    if (window.confirm("You will be logged out of your account !!!")) {
      localStorage.removeItem("telecomMerchantToken");

      setUserAccountInformation([]);
      setUserInformation([]);
      setLoggedIn(false);
      navigate("/");
    }
  }

  async function getUserInfo() {
    const tokenArray = token.split(".");
    // console.log(tokenArray);
    const decode = JSON.parse(atob(tokenArray[1]));
    // console.log();

    try {
      // console.log(data);
      const resp = await axios.get(`${apiUrl}/userInfo/${decode.uId}`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      // let temp_userInformation = [...userInformation];

      // temp_userInformation = resp.data.data;

      // setUserInformation(temp_userInformation);
      setUserInformation(resp.data.data);
      // setUserHistories(resp.data.data);
      return;

      // const axiosInstance = axios.create({
      //   headers: {
      //     Authorization: token,
      //   },
      // });

      // // here example how to wait axios all fetch
      // let userInfoUrl = `${apiUrl}/userInfo/${decode.uId}`;
      // let userAccountUrl = ` ${apiUrl}/account`;
      // let userInfoRequest = axiosInstance.get(userInfoUrl);
      // let userAccountRequest = axiosInstance.get(userAccountUrl);
      // let [userInfoResponse, userAccountResponse] = await axios.all([
      //   userInfoRequest,
      //   userAccountRequest,
      // ]);

      // let temp_userInformation = [...userInformation];

      // temp_userInformation = userInfoResponse.data.data;

      // setUserInformation(temp_userInformation);

      // let temp_userAccountInformation = [...userAccountInformation];

      // temp_userAccountInformation = userAccountResponse.data.data;
      // setUserAccountInformation(temp_userAccountInformation);
      // let temp_userAccountInformation = [...userAccountInformation];

      // temp_userAccountInformation = ;
      // setUserAccountInformation(userAccountResponse.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  // get account information
  async function getUserAccountInfo() {
    try {
      const resp = await axios.get(`${apiUrl}/account`, {
        headers: {
          authorization: token,
        },
      });
      // console.log(token);
      // console.log(resp.data);
      setUserAccountInformation(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  // get account information
  async function authorizeAction(password) {
    try {
      const sendBody = {
        email: userInformation.email,
        password: password,
      };
      const resp = await axios.post(`${apiUrl}/user/auth`, sendBody);
      console.log("authorizeAction->", resp.data.ok);
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "error",
          message: "UnAuthorized Password",
        });
        return;
      }
      return resp.data.ok;
    } catch (error) {
      // console.log("Error->", error.response.data);
      return error.response.data.ok;
    }
  }
  // decodeDate();
  function decodeDate(date) {
    // moment()
    const dateArray = moment(date)
      .format("ddd, MMM Do YYYY T h:mm:ss a")
      .split("T");
    // console.log(dateArray);
    const timeOnly = dateArray[1].split("+");
    // console.log(dateArray);
    return [dateArray[0], timeOnly[0]];
  }

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userInformation,
        logOut,
        getUserAccountInfo,
        userAccountInformation,
        apiUrl,
        getUserInfo,
        authorizeAction,
        token,
        getUserPrivilege,
        checkPrivilege,
        decodeDate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
