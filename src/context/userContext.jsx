import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderBorderComponent } from "../components/Spinner/SpinnerComponent";
import { PopUpMessageContext } from "./PopUpMessageContext";

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
  // const apiUrl = "http://localhost:5000/api";
  const apiUrl = "https://blue-data-api.herokuapp.com/api";

  useEffect(() => {
    if (!token || token === "") {
      setLoggedIn(false);
      return;
    }
    setLoggedIn(true);
  }, [loggedIn, token]);

  useEffect(() => {
    // if(!token && token!== ''){
    //   getUserInfo();
    // }
  }, []);

  const navigate = useNavigate();
  function logOut() {
    if (window.confirm("You will be logged out of your account")) {
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
  async function authorizeAction(e) {
    // e.preventDefault();
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Password is empty",
      });
      // setFormError({ error: true, message: "Email is empty" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";

    formElement[1].innerText = `Loading...`;
    formElement[1].setAttribute("disabled", true);
    const sendBody = {
      email: userInformation.email,
      password: formElement[0].value,
    };
    try {
      const resp = await axios.post(`${apiUrl}/user/auth`, sendBody);
      console.log(resp.data.ok);
      if (resp.data.ok) {
        formElement[1].removeAttribute("disabled");
        formElement[1].innerText = `Authorize Action`;
        formElement[0].value = "";
        window.document.getElementById("closeModal").click();
      }
    } catch (error) {
      console.log("Error->", error.response.data);
      // setFormError({ error: true, message: error.response.data.message });
      formElement[1].innerText = "Try Agin";
      formElement[1].removeAttribute("disabled");
      formElement[1].style.border = "solid red 1px";
    }
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
