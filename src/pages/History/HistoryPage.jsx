import React, { useContext, useEffect, useState } from "react";
import "./HistoryPage.css";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { UserContext } from "../../context/userContext";

function HistoryPage() {
  const [formMessage, setFormMessage] = useState({
    ok: false,
    message: "",
  });
  const [userHistories, setUserHistories] = useState([]);
  useEffect(() => {
    getUserHistory();
  }, []);
  const token = localStorage.getItem("telecomMerchantToken");
  const { apiUrl } = useContext(UserContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormMessage({
        ok: false,
        message: "",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [formMessage.ok]);

  async function getUserHistory() {
    try {
      const resp = await axios.get(`${apiUrl}/history`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      setUserHistories(resp.data.data.reverse());
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
  function getDate(date) {
    const dateArray = date.split("T");
    // console.log(dateArray);
    return dateArray[0];
  }

  async function deleteHistory(id) {
    // e.preventDefault();
    const historyId = id;
    let deleteMessage;
    let FormMessage;

    if (id === "*") {
      deleteMessage = "All History Will be Deleted!!!";

      FormMessage = "All History SuccessFully Deleted";
    } else {
      FormMessage = "History SuccessFully Deleted";
      deleteMessage = "This History Will be Deleted!!!";
    }

    if (!window.confirm(deleteMessage)) {
      setFormMessage({ ok: false, message: "" });
      return;
    }
    // console.log(historyId);
    try {
      const resp = await axios.delete(`${apiUrl}/history/${historyId}`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      if (resp.data.ok) {
        setFormMessage({ ok: true, message: FormMessage });
        getUserHistory();
      }
      // setUserHistories(resp.data.data.reverse());

      // console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
  return (
    <div className="HistoryPage pt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>History</h3>
          <button
            className="button btn-danger btn-sm"
            onClick={() => deleteHistory("*")}
          >
            {" "}
            <BsFillTrashFill /> Clear History
          </button>
        </div>
        <hr />
        {formMessage.ok ? (
          <div className="alert alert-success">{formMessage.message}</div>
        ) : null}
        <ul>
          {userHistories.length === 0 ? (
            <div className="notFound">No History Found</div>
          ) : (
            userHistories.map((history) => {
              const { amount, date, type, _id } = history;
              return (
                <li
                  key={_id}
                  data-id={_id}
                  className={type === "+" ? "cr" : "dr"}
                >
                  <span className="w-100 me-4">
                    <sup className="d-flex mt-2 mb-0">
                      <div className="figure me-2">{amount}</div>
                      <div className="date">{getDate(date)}</div>
                    </sup>
                    <hr className="my-0" />
                    This is a {type === "+" ? "credit" : "debit"} Alert
                  </span>
                  <button
                    className="button btn-danger btn-sm"
                    onClick={() => deleteHistory(_id)}
                  ></button>
                </li>
              );
            })
          )}
        </ul>
      </GroupCard>
    </div>
  );
}

export default HistoryPage;
