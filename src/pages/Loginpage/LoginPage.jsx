import React from "react";
// import "https://cdn.mojoauth.com/js/mojoauth.min.js";
import MojoAuth from "mojoauth-web-sdk";

function LoginPage() {
  const [payload, setPayload] = React.useState(null);
  React.useEffect(() => {
    const mojoauth = new MojoAuth("test-4dfa5ecd-c439-45bc-9dba-bd6e2e50e233", {
      language: "language_code",
      redirect_url: "/",
      source: [{ type: "email", feature: "magiclink" }],
    });
    mojoauth.signIn().then((payload) => {
      setPayload(payload);
    });
  }, [payload]);
  // const mojoauth = new MojoAuth("test-4dfa5ecd-c439-45bc-9dba-bd6e2e50e233", {
  //   source: [{ type: "email", feature: "magiclink" }],
  // });
  return (
    <div className="mt-5">
      {/*  2 Put a <div> that will contain the form */}
      <div id="mojoauth-passwordless-form" />

      <pre>{JSON.stringify(payload, null, 4)}</pre>
    </div>
  );
}

export default LoginPage;
