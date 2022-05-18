import React, { useContext, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import "./FoundAccountPage.css";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";

function FoundAccountPage() {
  const { apiUrl } = useContext(UserContext);
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const token = localStorage.getItem("telecomMerchantToken");

  // const [] = useState();
  const [formError, setFormError] = useState({
    error: false,
    message: "",
  });
  const [formMessage, setFormMessage] = useState({
    ok: false,
    message: "",
  });

  const url = `${apiUrl}/account`;

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;

    if (formElement[0].value === "") {
      formElement[0].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Method is not selected",
      });
      // setFormError({ error: true, message: "Method is not selected" });
      return;
    }
    formElement[0].style.border = "solid #ddd 1px";
    if (formElement[1].value === "") {
      formElement[1].style.border = "solid red 1px";
      setPopUpMessage({
        messageType: "error",
        message: "Amount is empty",
      });
      // setFormError({ error: true, message: "Amount is empty" });
      return;
    }
    setFormError({ error: false, message: "" });
    formElement[1].style.border = "solid #ddd 1px";
    formElement[2].innerText = "Sending...";
    formElement[2].setAttribute("disabled", true);
    const sendBody = {
      method: formElement[0].value,
      amount: parseInt(formElement[1].value),
    };
    // console.log(sendBody, token);
    try {
      // const resp = await axios.post(url, sendBody,{
      //   headers: {
      //     authorization: token,
      //   });
      const resp = await axios.put(`${url}`, sendBody, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      // console.log(resp.data.ok);
      if (resp.data.ok) {
        setPopUpMessage({
          messageType: "success",
          message: "Transaction SuccessFul",
        });
        // setFormMessage({ ok: true, message: "" });
        formElement[2].innerText = "Submit";
        formElement[2].removeAttribute("disabled");
        formElement[2].style.border = "solid red 1px";
      }
    } catch (error) {
      // console.log("Error->", error.response.data);
      setPopUpMessage({
        messageType: "error",
        message: error.response.data.message,
      });
      // setFormError({ error: true, message:  });
      formElement[2].innerText = "Submit";
      formElement[2].removeAttribute("disabled");
      formElement[2].style.border = "solid red 1px";
    }
  };

  // async function foundAccount() {
  //   const resp = await axios.get(`${apiUrl}/notification`, {
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  //   try {
  //     // const resp = await axios.post(`${apiUrl}/amount`, {
  //     //   headers: {
  //     //     authorization: token,
  //     //   },
  //     // });
  //   } catch (error) {}
  // }
  return (
    <div className="FoundAccountPage mt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>Found Account</h3>
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
            <select name="" className="form-select my-2" id="">
              <option value="">Select a method</option>
              <option value="-">Debit</option>
              <option value="+">Credit</option>
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

export default FoundAccountPage;
