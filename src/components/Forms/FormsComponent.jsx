import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
// import GoogleLogin from "react-google-login";
// import FacebookStrategy from 'passport-facebook'.sta
// import { LogoComponent } from "../NavBar/NavBarComponent";
// import MojoAuth from "mojoauth-web-sdk";
// import "./https://accounts.google.com/gsi/client";

import "./Forms.css";
import ModalComponent from "../Modal/ModalComponent";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
function Forms() {
  // const [payload, setPayload] = React.useState(null);
  // {
  //   /* 1 Initialize and show the form*/
  // }
  // React.useEffect(() => {
  //   const mojoauth = new MojoAuth("test-4dfa5ecd-c439-45bc-9dba-bd6e2e50e233", {
  //     source: [{ type: "email", feature: "magiclink" }],
  //   });
  //   mojoauth.signIn().then((payload) => {
  //     setPayload(payload);
  //     document.getElementById("mojoauth-passwordless-form").remove();
  //   });
  // }, []);
  // return (
  //   <div>
  //     {/* 2 Put a div that will contain the form*/}
  //     <div id="mojoauth-passwordless-form" />
  //     <pre>{JSON.stringify(payload, null, 4)}</pre>
  //   </div>
  // );
}
export default Forms;

export const FaceBookLogin = () => {
  return (
    <>
      {/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */}
    </>
  );
};

export function ContactUsForm() {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    // console.dir(e.target[0]);
    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";
    console.log({
      email: formElement[0].value,
      message: formElement[1].value,
    });
  };
  return (
    <>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <input type="text" className="form-control" />
        <textarea
          name=""
          className="form-control"
          id=""
          cols="2"
          rows="3"
        ></textarea>
        <button type="submit" className="button w-100">
          GET STARED
        </button>
      </form>
    </>
  );
}
export function LoginForm() {
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  const navigate = useNavigate();

  const { setLoggedIn, apiUrl } = useContext(UserContext);
  // const [formError, setFormError] = useState({
  //   error: false,
  //   message: "",
  // });
  const url = `${apiUrl}/user/login`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Email is empty",
      });
      // setFormError({ error: true, message: "Email is empty" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Password is empty",
      });
      // setFormError({ error: true, message: "password is empty" });
      return;
    }
    // setFormError({ error: false, message: "" });
    formElement[1].style.border = "solid #ddd 1px";
    formElement[2].innerText = "Loading...";
    formElement[2].setAttribute("disabled", true);
    const sendBody = {
      email: formElement[0].value,
      password: formElement[1].value,
    };
    try {
      const resp = await axios.post(url, sendBody);
      localStorage.setItem("telecomMerchantToken", resp.data.token);
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "success",
          message: "Welcome Back",
        });
        setLoggedIn(true);
        navigate("/dashboard/home");
      }
    } catch (error) {
      // console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      // setFormError({ error: true, message:  });
      formElement[2].innerText = "Sign In";
      formElement[2].removeAttribute("disabled");
      formElement[2].style.border = "solid red 1px";
    }
  };
  return (
    <>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <h2 className="text-center fs-5 mt-0">Welcome to Telecom Merchant</h2>
        {/* {formError.error ? (
          <div className="alert alert-danger">{formError.message}</div>
        ) : null} */}
        <input type="text" className="form-control" placeholder="Email" />
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
        <button type="submit" className="button w-100">
          Sign In
        </button>
        {/* <GoogleLoginButton /> */}
      </form>
    </>
  );
}

export function AuthorizeAction() {
  const { authorizeAction } = useContext(UserContext);

  return (
    <ModalComponent
      btnText="UpGreed User"
      modalTitle="Authorize Action"
      modalId="AuthorizeAction"
    >
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          authorizeAction(e);
        }}
      >
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
        <button className="button mt-3">Authorize Action</button>
      </form>
    </ModalComponent>
  );
}

export function SignUpForm({ setLoginCardIsOpen, setSignInCardIsOpen }) {
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  // const [formError, setFormError] = useState({
  //   error: false,
  //   message: "",
  // });
  const { apiUrl } = useContext(UserContext);

  const url = `${apiUrl}/user/register`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Email is empty",
      });
      // setFormError({ error: true, message: "" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Number is empty",
      });
      // setFormError({ error: true, message: "" });
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";
    if (formElement[2].value === "") {
      formElement[2].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Password is empty",
      });
      // setFormError({ error: true, message: "" });
      return;
    }
    // setFormError({ error: false, message: "" });
    formElement[2].style.border = "solid #ddd 1px";
    formElement[3].innerText = "Loading...";
    formElement[3].setAttribute("disabled", true);
    const sendBody = {
      email: formElement[0].value,
      phoneNumber: formElement[1].value,
      password: formElement[2].value,
      userName: "userName",
    };
    console.log(sendBody);
    try {
      // const resp = await axios.post(url, sendBody);
      formElement[3].innerText = "Successful";
      setSignInCardIsOpen(false);
      setLoginCardIsOpen(true);
    } catch (error) {
      // console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      // setFormError({ error: true, message:  });
      formElement[3].innerText = "GET STARED";
      formElement[3].removeAttribute("disabled");
      formElement[3].style.border = "solid red 1px";
    }
  };

  return (
    <div className="SignInForm">
      {/* <LogoComponent /> */}
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <h2 className="text-center fs-5 mt-0">Welcome to Telecom Merchant</h2>
        {/* {formError.error ? (
          <div className="alert alert-danger">{formError.message}</div>
        ) : null} */}
        <input type="text" className="form-control" placeholder="Email" />
        <input type="num" className="form-control" placeholder="Number" />
        <input
          type="password"
          className="form-control my-1"
          placeholder="create a password"
        />
        <button className="btn w-100">GET STARED</button>
      </form>
    </div>
  );
}

// export function GoogleLoginButton() {
//   function responseSuccessGoogle(response) {
//     console.log(response);
//   }
//   function responseFailureGoogle(response) {
//     console.log(response);
//   }
//   //   gapi.client.init({
//   //     apiKey: API_KEY,
//   //     clientId: CLIENT_ID,
//   //     discoveryDocs: DISCOVERY_DOCS,
//   //     scope: SCOPES,
//   //     ux_mode: 'redirect'
//   //  }).then(function () {
//   //      ....
//   //  });
//   return (
//     // <>
//     //   <Script
//     //     src="https://accounts.google.com/gsi/client"
//     //     id="gsi-client"
//     //     async
//     //     defer
//     //   />
//     // </>
//     <GoogleLogin
//       clientId="90192338760-5po42gepdlg6akb893k0t0h2hn1tg54o.apps.googleusercontent.com"
//       buttonText="Login With Google"
//       onSuccess={responseSuccessGoogle}
//       onFailure={responseFailureGoogle}
//       cookiePolicy={"single_host_origin"}
//     />
//   );
// }

// export function FaceBookLoginButton() {
//   // 2182381928591895

//   return FaceBookS;
// }

export function AddNotificationForm() {
  const [aUserNotification, setAUserNotification] = useState(false);
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const { apiUrl, userInformation, checkPrivilege, token } =
    useContext(UserContext);

  // function checkPrivilege(privilege) {
  //   if (privilege === 1) {
  //     return "Users";
  //   }
  //   if (privilege === 2) {
  //     return "Resellers";
  //   }
  //   if (privilege === 3) {
  //     return "Admins";
  //   }
  //   if (privilege === 4) {
  //     return "Super Admins";
  //   }
  // }

  async function handelSubmit(e) {
    e.preventDefault();

    const formElement = e.target;
    let messageError;
    if (aUserNotification) {
      messageError = "User ID is empty";
    } else {
      messageError = "Select A Category";
    }
    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: messageError,
      });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Notification Message is empty",
      });
      return;
    }
    let category;
    if (aUserNotification) {
      category = "Single User Notification";
    } else {
      if (formElement[0].value === "*") {
        category = `General Notification`;
      } else {
        let userPrivilege = checkPrivilege(Number(formElement[0].value));
        category = `${userPrivilege}s Notification`;
      }
    }
    formElement[1].style.border = "solid #ddd 1px";
    formElement[2].innerText = "Loading...";
    formElement[2].setAttribute("disabled", true);
    const { userName } = userInformation;
    const sendBody = {
      adminName: userName,
      message: formElement[1].value,
      privilege: formElement[0].value,
      category: category,
    };
    // console.log(sendBody);
    const axiosInstance = axios.create({
      headers: {
        Authorization: token,
      },
    });
    try {
      const resp = await axiosInstance.post(`${apiUrl}/notification`, sendBody);
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "success",
          message: ` Successfully set ${category}`,
        });
        formElement[2].innerText = "Send Notification";
        formElement[2].removeAttribute("disabled");
      }
    } catch (error) {
      // console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      formElement[2].innerText = "Send Notification";
      formElement[2].removeAttribute("disabled");
      formElement[2].style.border = "solid red 1px";
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <b>Send Notification</b>
        <span>
          Single User{" "}
          <input
            type="checkbox"
            onChange={() => setAUserNotification(!aUserNotification)}
          />
        </span>
      </div>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        {aUserNotification ? (
          <input className="form-control my-3" placeholder="User Id" />
        ) : (
          <select className="form-select mt-3">
            <option value="">Send To</option>
            <option value="*">General</option>
            <option value="1">Users</option>
            <option value="2">Resellers</option>
            <option value="3">Admins</option>
          </select>
        )}
        <textarea
          type="text"
          className="form-control my-3"
          placeholder="Notification"
          cols="10"
          rows="3"
        ></textarea>
        <button className="button" type="submit">
          Send Notification
        </button>
      </form>
    </>
  );
}
