import React, { useContext, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import "./FoundAccountPage.css";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import ModalComponent from "../../components/Modal/ModalComponent";
import { BsPhone } from "react-icons/bs";
import { FoundAccountForm } from "../../components/Forms/FormsComponent";

function FoundAccountPage() {
  const { apiUrl, userInformation, getUserPrivilege } = useContext(UserContext);
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const token = localStorage.getItem("telecomMerchantToken");

  const [adminSendRequest, setAdminSendRequest] = useState();

  // const url = `${apiUrl}/account`;

  // const handelFoundAccount = async (e) => {
  //   e.preventDefault();
  //   const formElement = e.target;

  //   if (formElement[0].value === "") {
  //     formElement[0].style.border = "solid red 1px";
  //     setPopUpMessage({
  //       messageType: "error",
  //       message: "USer ID Required",
  //     });
  //     return;
  //   }
  //   formElement[0].style.border = "solid #ddd 1px";
  //   if (formElement[1].value === "") {
  //     formElement[1].style.border = "solid red 1px";
  //     setPopUpMessage({
  //       messageType: "error",
  //       message: "Amount is empty",
  //     });
  //     return;
  //   }
  //   formElement[1].style.border = "solid #ddd 1px";
  //   formElement[2].innerText = "Sending...";
  //   formElement[2].setAttribute("disabled", true);
  //   const sendBody = {
  //     userId: formElement[0].value,
  //     method: "+",
  //     amount: parseInt(formElement[1].value),
  //   };
  //   // console.log(sendBody, token);
  //   try {
  //     // const resp = await axios.post(url, sendBody,{
  //     //   headers: {
  //     //     authorization: token,
  //     //   });
  //     const resp = await axios.put(`${url}`, sendBody, {
  //       headers: {
  //         Authorization: token,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     console.log(resp);
  //     if (resp.data.ok) {
  //       setPopUpMessage({
  //         messageType: "success",
  //         message: "Transaction SuccessFul",
  //       });
  //       // setFormMessage({ ok: true, message: "" });
  //       formElement[2].innerText = "Submit";
  //       formElement[2].removeAttribute("disabled");
  //       formElement[2].style.border = "solid red 1px";
  //     }
  //   } catch (error) {
  //     // console.log("Error->", error.response.data);
  //     setPopUpMessage({
  //       messageType: "error",
  //       message: error.response.data.message,
  //     });
  //     // setFormError({ error: true, message:  });
  //     formElement[2].innerText = "Submit";
  //     formElement[2].removeAttribute("disabled");
  //     formElement[2].style.border = "solid red 1px";
  //   }
  // };

  async function handelSendQuickMessage(e) {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Receiver Bank Not Selected",
      });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Sender Account Name Required",
      });
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";
    if (formElement[2].value === "") {
      formElement[2].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Sender Account Number Required",
      });
      return;
    }
    formElement[2].style.border = "solid #ddd 1px";
    if (formElement[3].value === "") {
      formElement[3].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Amount Founded Required",
      });
      return;
    }
    formElement[3].style.border = "solid #ddd 1px";

    const sendBody = {
      uId: userInformation._id,
      amount: formElement[3].value,
      sName: userInformation.userName,
      rBankName: formElement[0].value,
      sAccountName: formElement[1].value,
      sAccountNumber: formElement[2].value,
    };
    // console.log(sendBody);
    const axiosInstance = axios.create({
      headers: {
        Authorization: token,
      },
    });
    try {
      const resp = await axiosInstance.post(
        `${apiUrl}/request-confirmation`,
        sendBody
      );
      console.log("responce", resp.data);
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "success",
          message: `Request for confirmation Successfully sent`,
        });
      }
      let messageBody = `Good day i Founded my account.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    \n  Account details, -> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    *AccountNumber:* \`\`\`${formElement[2].value}, \`\`\`+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    *AccountName:* \`\`\`${formElement[1].value}\`\`\`,++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    *Amount:* \`\`\`${formElement[3].value}\`\`\`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Sent to your \`\`\`${formElement[0].value}\`\`\` Account.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
    Thanks,++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    \`\`\`${userInformation.userName}\`\`\` +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    \`\`\`${userInformation._id}\`\`\` Seek for confirmation.
    
    `;
      messageBody = messageBody.split(" ").join("+");
      window.open(
        `https://api.whatsapp.com/send/?phone=2349034165800&text=${messageBody}&app_absent=0`,
        "_blank"
      );

      // formElement[0].value = "";
      formElement[1].value = "";
      formElement[2].value = "";
      formElement[3].value = "";

      window.document.getElementById("closeRequestConfirmation").click();

      // setPopUpMessage({
      //   messageType: "error",
      //   message: "Amount is empty",
      // });
    } catch (error) {
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
    }
  }

  const url = `${apiUrl}/account`;
  const handelFoundAccount = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[2].value === "") {
      formElement[2].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Empty Admin Password",
      });
      return;
    }

    // // console.log(formElement[2].value);
    // const adminCheck = await authorizeAction(formElement[2].value);
    // console.log("adminCheck", adminCheck);

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "USer ID Required",
      });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Amount is empty",
      });
      return;
    }
    formElement[1].style.border = "solid #ddd 1px";
    formElement[3].innerText = "Sending...";
    formElement[3].setAttribute("disabled", true);
    try {
      const sendBody = {
        email: userInformation.email,
        password: formElement[2].value,
      };
      const response = await axios.post(`${apiUrl}/user/auth`, sendBody);
      console.log("authorizeAction->", response.data.ok);
      if (response.data.ok === false) {
        setPopUpMessage({
          messageType: "error",
          message: "UnAuthorized Password",
        });
        return;
      }
      // console.log(formElement[0].value);
      const foundSendBody = {
        userId: formElement[0].value,
        method: "+",
        amount: parseInt(formElement[1].value),
      };
      const resp = await axios.put(`${url}`, foundSendBody, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      // console.log(resp);
      if (resp.data.ok) {
        // console.log("request-confirmation", resp);
        // if (resp.data.ok) {
        // window.document.getElementById("closeRequestConfirmation").click();
        setPopUpMessage({
          messageType: "success",
          message: "Transaction SuccessFul",
        });
        // setFormMessage({ ok: true, message: "" });
        formElement[3].innerText = "Submit";
        formElement[3].removeAttribute("disabled");
        formElement[3].style.border = "solid red 1px";
        // }
      }
    } catch (error) {
      // console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      // setFormError({ error: true, message:  });
      formElement[3].innerText = "Submit";
      formElement[3].removeAttribute("disabled");
      formElement[3].style.border = "solid red 1px";
    }
  };

  return (
    <div className="FoundAccountPage mt-5">
      {/* Request Confirmation model form */}
      <ModalComponent
        modalTitle="Request Confirmation"
        modalId="RequestConfirmation"
      >
        <div>
          <h5>#1. Call Admin</h5>
          <BsPhone /> 09034165800 <b>{"//"}</b>
          <BsPhone /> 08137297150
        </div>
        <hr />
        <form
          action=""
          className="mt-3"
          onSubmit={(e) => handelSendQuickMessage(e)}
        >
          <h5>#2. Quick Message.</h5>
          <sup>
            {" "}
            <b>Note:</b> This make use of whatsapp <br />
            if you are on desktop and don`t have whatsapp installed use web
            Whatsapp.{" "}
          </sup>
          <select name="" className="form-select my-2" id="" disabled>
            {/* <option value="">Select Receiver Bank </option> */}
            <option value="Zenith">Zenith</option>
            {/* <option value="Opay">Opay</option> */}
          </select>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Sender Account Name"
          />
          <input
            type="number"
            className="form-control my-2"
            placeholder="Sender Account Number"
          />
          <input
            type="number"
            className="form-control my-2"
            placeholder="Amount Founded "
          />
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </ModalComponent>
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>Found Account</h3>
        </div>
        <hr />

        {getUserPrivilege() === 4 && !adminSendRequest ? (
          <form
            className="form mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setPopUpMessage({
                messageType: "error",
                message:
                  "this function is disabled \n if you want to fund a yourself send a request for record propose.\n super Admin.",
              });
              // remove when you are done fixing found user form
              return;
              handelFoundAccount(e);
            }}
          >
            <h3>Admin found account</h3>
            <input
              type="text"
              className="form-control my-2"
              placeholder="User ID"
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Amount"
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Amin Password"
            />
            <button className="button" type="submit">
              {" "}
              Submit
            </button>{" "}
            <br />
            <button
              className="button my-4"
              onClick={() => setAdminSendRequest(!adminSendRequest)}
            >
              Send Request
            </button>
          </form>
        ) : (
          // <FoundAccountForm />
          <div className="form-div">
            <h5>Manual Transfer</h5>
            <div className="mt-4">
              <b>Bank Name:</b> Access Bank <br />
              <b>Account Name:</b> Paul Adeyemi <br />
              <b>Account Number:</b> 1537354815 <br />
              <button
                className="button"
                data-bs-toggle="modal"
                data-bs-target="#RequestConfirmation"
              >
                Request Confirmation
              </button>
            </div>
            {/* Another account number */}
            {/* <div className="mt-4">
              <b>Bank Name:</b> Opay Bank <br />
              <b>Account Name:</b> Josiah Victor <br />
              <b>Account Number:</b> 8137297150 <br />
              <button
                className="button"
                data-bs-toggle="modal"
                data-bs-target="#RequestConfirmation"
              >
                Request Confirmation
              </button>
            </div> */}
            {getUserPrivilege() === 4 ? (
              <button
                className="button my-4"
                onClick={() => setAdminSendRequest(!adminSendRequest)}
              >
                Cancel Send Request
              </button>
            ) : null}
          </div>
        )}
      </GroupCard>
    </div>
  );
}

export default FoundAccountPage;
