import React, { useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import mtnLogo from ".././../assets/mtn.png";
import gloLogo from ".././../assets/glo.jpeg";
import airtelLogo from ".././../assets/airtel.png";
import mobileLogo from ".././../assets/9mobile.png";
import "./SubscriptionsPage.css";

function SubscriptionsPage() {
  const [formError, setFormError] = useState({
    error: false,
    message: "",
  });
  const [formMessage, setFormMessage] = useState({
    ok: false,
    message: "",
  });
  const [network, setNetwork] = useState("");
  const [dataPlan, setDataPlan] = useState([]);

  useEffect(() => {
    if (network === "MTN") {
      setDataPlan([
        { plan: "MTN 500MB @150", value: "MTN 500MB" },
        { plan: "MTN 1GB @300", value: "MTN 1GB" },
        { plan: "MTN 2GB @600", value: "MTN 2GB" },
        { plan: "MTN 3GB @1200", value: "MTN 3GB" },
      ]);
      return;
    }
    if (network === "GLO") {
      setDataPlan([
        { plan: "GLO 500MB @200", value: "GLO 500MB" },
        { plan: "GLO 1GB @400", value: "GLO 1GB" },
        { plan: "GLO 2GB @800", value: "GLO 2GB" },
        { plan: "GLO 3GB @1400", value: "GLO 3GB" },
      ]);
      return;
    }
    if (network === "Artel") {
      setDataPlan([
        { plan: "Artel 500MB @500", value: "Artel 500MB" },
        { plan: "Artel 1GB @1000", value: "Artel 1GB" },
        { plan: "Artel 2GB @2000", value: "Artel 2GB" },
        { plan: "Artel 3GB @3000", value: "Artel 3GB" },
      ]);
      return;
    }
    if (network === "9Mobile") {
      setDataPlan([
        { plan: "9Mobile 500MB @550", value: "9mobile 500MB" },
        { plan: "9Mobile 1GB @1200", value: "9mobile 1GB" },
        { plan: "9Mobile 2GB @2400", value: "9mobile 2GB" },
        { plan: "9Mobile 3GB @3600", value: "9mobile 3GB" },
      ]);
      return;
    }
    if (network !== "") {
      setFormError({ error: true, message: "Invalid Network" });
    }
  }, [network]);

  function selectNetwork(network) {
    // console.log(network);
    setNetwork(network);
  }
  function handelSubmit(e) {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setFormError({ error: true, message: "Network is not selected" });
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
      setFormError({ error: true, message: "Amount is empty" });
      return;
    }
    setFormError({ error: false, message: "" });
    formElement[2].style.border = "solid #ddd 1px";
    const sendBody = {
      plan: formElement[0].value,
      Number: parseInt(formElement[1].value),
      amount: parseInt(formElement[2].value),
      method: "-",
    };
    console.log(sendBody);
    // formElement[3].innerText = "Sending...";
    // formElement[3].setAttribute("disabled", true);
  }

  return (
    <div className="FoundAccountPage mt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>Buy Subscriptions</h3>
        </div>
        <hr />

        <div className="form-div">
          <form className="form" onSubmit={(e) => handelSubmit(e)}>
            {formError.error ? (
              <div className="alert alert-danger">{formError.message}</div>
            ) : null}
            {formMessage.ok ? (
              <div className="alert alert-success">{formMessage.message}</div>
            ) : null}

            {/* <NetworkLogo
              selectNetwork={selectNetwork}
              setNetwork={setNetwork}
            /> */}
            <div className="d-flex NetworkLogo">
              <img
                src={mtnLogo}
                alt={"MTN Logo"}
                onClick={() => selectNetwork("MTN")}
                className={network === "MTN" ? "active" : null}
              />
              <img
                src={gloLogo}
                alt={"glo Logo"}
                onClick={() => selectNetwork("GLO")}
                className={network === "GLO" ? "active" : null}
              />
              <img
                src={airtelLogo}
                alt={"airtel Logo"}
                onClick={() => selectNetwork("Artel")}
                className={network === "Artel" ? "active" : null}
              />
              <img
                src={mobileLogo}
                alt={"mobile Logo"}
                onClick={() => selectNetwork("9Mobile")}
                className={network === "9Mobile" ? "active" : null}
              />
            </div>

            <select name="" className="form-select my-2" id="">
              {network === "" ? (
                <option value="">Select a Network</option>
              ) : (
                <option value="">{`Select an ${network} Plan `}</option>
              )}
              {dataPlan.map((plan) => (
                <option value={plan.value}>{plan.plan}</option>
              ))}
            </select>
            <input
              type="number"
              className="form-control my-2"
              placeholder="Number"
            />
            <input
              type="number"
              className="form-control my-2"
              placeholder="Amount"
            />
            <button className="button" type="submit">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </GroupCard>
    </div>
  );
}

export default SubscriptionsPage;

// export function NetworkLogo(selectNetwork, setNetwork) {
//   return (

//   );
// }
