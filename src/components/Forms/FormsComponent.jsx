import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import GoogleLogin from "react-google-login";
// import FacebookStrategy from 'passport-facebook'.sta
// import { LogoComponent } from "../NavBar/NavBarComponent";
// import MojoAuth from "mojoauth-web-sdk";
// import "./https://accounts.google.com/gsi/client";

import "./Forms.css";
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
  const navigate = useNavigate();

  const { setLoggedIn, apiUrl } = useContext(UserContext);
  const [formError, setFormError] = useState({
    error: false,
    message: "",
  });
  const url = `${apiUrl}/user/login`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setFormError({ error: true, message: "Email is empty" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setFormError({ error: true, message: "password is empty" });
      return;
    }
    setFormError({ error: false, message: "" });
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
      setLoggedIn(true);
      // getUserInfo();
      navigate("/dashboard/home");
    } catch (error) {
      // console.log("Error->", error.response.data);
      setFormError({ error: true, message: error.response.data.message });
      formElement[2].innerText = "Sign In";
      formElement[2].removeAttribute("disabled");
      formElement[2].style.border = "solid red 1px";
    }
  };
  return (
    <>
      <form action="" onSubmit={(e) => handelSubmit(e)}>
        <h2 className="text-center fs-5 mt-0">Welcome to Telecom Merchant</h2>
        {formError.error ? (
          <div className="alert alert-danger">{formError.message}</div>
        ) : null}
        <input type="email" className="form-control" placeholder="Email" />
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

export function SignUpForm() {
  const [formError, setFormError] = useState({
    error: false,
    message: "",
  });
  const { apiUrl } = useContext(UserContext);

  const url = `${apiUrl}/user/register`;
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setFormError({ error: true, message: "Email is empty" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setFormError({ error: true, message: "Number is empty" });
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";
    if (formElement[2].value === "") {
      formElement[2].style.border = "solid red 1px";
      setFormError({ error: true, message: "Password is empty" });
      return;
    }
    setFormError({ error: false, message: "" });
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
      const resp = await axios.post(url, sendBody);
      console.log(resp.data);
      // localStorage.setItem("telecomMerchantToken", resp.data.token);
      // setLoggedIn(true);
      // getUserInfo();
      // navigate("/dashboard/home");
    } catch (error) {
      // console.log("Error->", error.response.data);
      setFormError({ error: true, message: error.response.data.message });
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
        {formError.error ? (
          <div className="alert alert-danger">{formError.message}</div>
        ) : null}
        <input type="email" className="form-control" placeholder="Email" />
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

export function GoogleLoginButton() {
  function responseSuccessGoogle(response) {
    console.log(response);
  }
  function responseFailureGoogle(response) {
    console.log(response);
  }
  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES,
  //     ux_mode: 'redirect'
  //  }).then(function () {
  //      ....
  //  });
  return (
    // <>
    //   <Script
    //     src="https://accounts.google.com/gsi/client"
    //     id="gsi-client"
    //     async
    //     defer
    //   />
    // </>
    <GoogleLogin
      clientId="90192338760-5po42gepdlg6akb893k0t0h2hn1tg54o.apps.googleusercontent.com"
      buttonText="Login With Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailureGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

// export function FaceBookLoginButton() {
//   // 2182381928591895

//   return FaceBookS;
// }
