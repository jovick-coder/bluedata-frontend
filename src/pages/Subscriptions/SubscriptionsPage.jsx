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
        { plan: "500MB @150", value: "500MB" },
        { plan: "1GB @300", value: "1GB" },
        { plan: "2GB @600", value: "2GB" },
        { plan: "3GB @1200", value: "3GB" },
      ]);
      return;
    }
    if (network === "GLO") {
      setDataPlan([
        { plan: "500MB @200", value: "500MB" },
        { plan: "1GB @400", value: "1GB" },
        { plan: "2GB @800", value: "2GB" },
        { plan: "3GB @1400", value: "3GB" },
      ]);
      return;
    }
    if (network === "Artel") {
      setDataPlan([
        { plan: "500MB @500", value: "500MB" },
        { plan: "1GB @1000", value: "1GB" },
        { plan: "2GB @2000", value: "2GB" },
        { plan: "3GB @3000", value: "3GB" },
      ]);
      return;
    }
    if (network === "9Mobile") {
      setDataPlan([
        { plan: "500MB @550", value: "500MB" },
        { plan: "1GB @1200", value: "1GB" },
        { plan: "2GB @2400", value: "2GB" },
        { plan: "3GB @3600", value: "3GB" },
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
  function handelSubmit(e) {}

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
              />
              <img
                src={gloLogo}
                alt={"glo Logo"}
                onClick={() => selectNetwork("GLO")}
              />
              <img
                src={airtelLogo}
                alt={"airtel Logo"}
                onClick={() => selectNetwork("Artel")}
              />
              <img
                src={mobileLogo}
                alt={"mobile Logo"}
                onClick={() => selectNetwork("9Mobile")}
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
