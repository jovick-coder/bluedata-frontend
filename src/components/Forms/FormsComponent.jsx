import React from "react";
// import MojoAuth from "mojoauth-web-sdk";
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
        <input type="text" className="form-control" />
        <button type="submit" className="button w-100">
          GET STARED
        </button>
      </form>
    </>
  );
}
