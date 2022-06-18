import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import mtnLogo from ".././../assets/mtn.png";
import gloLogo from ".././../assets/glo.jpeg";
import airtelLogo from ".././../assets/airtel.png";
import mobileLogo from ".././../assets/9mobile.png";
import "./SubscriptionsPage.css";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import { UserContext } from "../../context/userContext";
import axios from "axios";

function SubscriptionsPage() {
  const { apiUrl, token } = useContext(UserContext);
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const [network, setNetwork] = useState("");
  const [dataPlan, setDataPlan] = useState([]);
  const [allDataPlanes, setAllDataPlanes] = useState([
    {
      Data_ID: 289,
      Network: 1,
      Plan_type: "SME",
      Amount: 125,
      Size: "500 MB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 290,
      Network: 1,
      Plan_type: "SME",
      Amount: 250,
      Size: "1.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 291,
      Network: 1,
      Plan_type: "SME",
      Amount: 500,
      Size: "2.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 292,
      Network: 1,
      Plan_type: "SME",
      Amount: 750,
      Size: "3.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 293,
      Network: 1,
      Plan_type: "SME",
      Amount: 1250,
      Size: "5.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 294,
      Network: 1,
      Plan_type: "SME",
      Amount: 2500,
      Size: "10.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 252,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 400,
      Size: "1.3 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 253,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 800,
      Size: "2.9 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 254,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 1275,
      Size: "4.1 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 255,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 1600,
      Size: "5.2 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 256,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 2000,
      Size: "7.7 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 257,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 2550,
      Size: "10.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 258,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 3280,
      Size: "13.25 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 259,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 4250,
      Size: "18.25 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 260,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 6800,
      Size: "29.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 261,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 8000,
      Size: "50.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 262,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 12750,
      Size: "93.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 263,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 15300,
      Size: "119.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 264,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 17000,
      Size: "138.0 GB",
      Validity: "	MONTHLY",
    },
    {
      Data_ID: 295,
      Network: 2,
      Plan_type: "GIFTING",
      Amount: 1200,
      Size: "7.0 GB",
      Validity: "	SPECIAL 1500 7 DAYS",
    },
    {
      Data_ID: 312,
      Network: 4,
      Plan_type: "CORPORATE GIFTING",
      Amount: 175,
      Size: "500.0 MB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 313,
      Network: 4,
      Plan_type: "CORPORATE GIFTING",
      Amount: 350,
      Size: "1.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 314,
      Network: 4,
      Plan_type: "CORPORATE GIFTING",
      Amount: 700,
      Size: "2.0 GB",
      Validity: "MONTHLY",
    },
    {
      Data_ID: 315,
      Network: 4,
      Plan_type: "CORPORATE GIFTING",
      Amount: 1750,
      Size: "5.0 GB",
      Validity: "MONTHLY",
    },
  ]);

  useEffect(() => {
    if (network === 1) {
      setDataPlan([
        {
          Data_ID: 289,
          Network: 1,
          Plan_type: "SME",
          Amount: 125,
          Size: "500 MB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 290,
          Network: 1,
          Plan_type: "SME",
          Amount: 250,
          Size: "1.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 291,
          Network: 1,
          Plan_type: "SME",
          Amount: 500,
          Size: "2.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 292,
          Network: 1,
          Plan_type: "SME",
          Amount: 750,
          Size: "3.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 293,
          Network: 1,
          Plan_type: "SME",
          Amount: 1250,
          Size: "5.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 294,
          Network: 1,
          Plan_type: "SME",
          Amount: 2500,
          Size: "10.0 GB",
          Validity: "MONTHLY",
        },
      ]);
      return;
    }
    if (network === 2) {
      setDataPlan([
        {
          Data_ID: 252,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 400,
          Size: "1.3 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 253,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 800,
          Size: "2.9 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 254,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 1275,
          Size: "4.1 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 255,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 1600,
          Size: "5.2 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 256,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 2000,
          Size: "7.7 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 257,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 2550,
          Size: "10.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 258,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 3280,
          Size: "13.25 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 259,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 4250,
          Size: "18.25 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 260,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 6800,
          Size: "29.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 261,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 8000,
          Size: "50.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 262,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 12750,
          Size: "93.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 263,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 15300,
          Size: "119.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 264,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 17000,
          Size: "138.0 GB",
          Validity: "	MONTHLY",
        },
        {
          Data_ID: 295,
          Network: 2,
          Plan_type: "GIFTING",
          Amount: 1200,
          Size: "7.0 GB",
          Validity: "	SPECIAL 1500 7 DAYS",
        },
      ]);
      return;
    }
    if (network === 4) {
      setDataPlan([
        {
          Data_ID: 312,
          Network: 4,
          Plan_type: "CORPORATE GIFTING",
          Amount: 175,
          Size: "500.0 MB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 313,
          Network: 4,
          Plan_type: "CORPORATE GIFTING",
          Amount: 350,
          Size: "1.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 314,
          Network: 4,
          Plan_type: "CORPORATE GIFTING",
          Amount: 700,
          Size: "2.0 GB",
          Validity: "MONTHLY",
        },
        {
          Data_ID: 315,
          Network: 4,
          Plan_type: "CORPORATE GIFTING",
          Amount: 1750,
          Size: "5.0 GB",
          Validity: "MONTHLY",
        },
      ]);
      return;
    }
    if (network === 3) {
      setDataPlan([]);
      return;
    }
    if (network !== "") {
      setPopUpMessage({
        messageType: "error",
        message: "Invalid Network",
      });
      // setFormError({ error: true, message: "I" });
    }
  }, [network]);

  function getNetworkName(networkNumber) {
    if (networkNumber === 1) {
      return "MTN";
    }
    if (networkNumber === 2) {
      return "GLO";
    }
    if (networkNumber === 3) {
      return "9Mobile";
    }
    if (networkNumber === 4) {
      return "Artel";
    }
  }

  function selectNetwork(network) {
    if (network === "9Mobile") {
      setPopUpMessage({
        messageType: "error",
        message: "9Mobile Currently not available",
      });
      return;
    }
    let Network_id;

    if (network === "MTN") {
      Network_id = 1;
    }
    if (network === "GLO") {
      Network_id = 2;
    }
    if (network === "9Mobile") {
      Network_id = 3;
    }
    if (network === "Artel") {
      Network_id = 4;
    }
    // console.log(network);
    setNetwork(Network_id);
  }

  function getDataObject(data_id) {
    let objectId;
    allDataPlanes.some(function (el, i) {
      objectId = i;
      return el.Data_ID === data_id;
    });
    return objectId;
  }

  async function handelSubmit(e) {
    e.preventDefault();
    const url = `${apiUrl}/buySub`;
    const formElement = e.target;
    if (network === "") {
      setPopUpMessage({
        messageType: "error",
        message: "Network is not selected",
      });
      return;
    }

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Plan is not selected",
      });
      // setFormError({ error: true, message: "" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";

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

    if (formElement[1].value.toString().length < 11) {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Invalid Number",
      });
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";

    const objectId = getDataObject(parseInt(formElement[0].value));

    const sendBody = {
      ...allDataPlanes[objectId],
      Number: formElement[1].value,
      network_name: getNetworkName(network),
    };
    // console.log(sendBody);
    formElement[2].innerText = "Sending...";
    formElement[2].setAttribute("disabled", true);
    try {
      const resp = await axios.post(`${url}`, sendBody, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(resp);
      // if (resp.data.ok) {
      setPopUpMessage({
        messageType: "success",
        message: "Transaction SuccessFul",
      });

      formElement[2].innerText = "Submit";
      formElement[2].removeAttribute("disabled");
      // }
    } catch (error) {
      // if (error.response.data.ok) {
      // console.log(error);
      setPopUpMessage({
        messageType: "error",
        message: error.message,
      });
      formElement[2].innerText = "Submit";
      formElement[2].removeAttribute("disabled");
      formElement[2].style.border = "solid red 1px";
      // }

      console.log("error-> ", error);
    }
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
                <option value="">{`Select an ${getNetworkName(
                  network
                )} Plan `}</option>
              )}
              {dataPlan.map((plan) => (
                <option value={plan.Data_ID}>
                  ₦{plan.Amount}, {plan.Size} - {plan.Validity}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="form-control my-2"
              placeholder="Number"
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
