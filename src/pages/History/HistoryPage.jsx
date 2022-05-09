import React, { useEffect, useState } from "react";
import "./HistoryPage.css";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";

function HistoryPage() {
  const [userHistories, setUserHistories] = useState([]);
  useEffect(() => {
    getUserHistory();
  });
  const token = localStorage.getItem("telecomMerchantToken");

  async function getUserHistory() {
    try {
      const resp = await axios.get(" http://localhost:5000/api/history", {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      setUserHistories(resp.data.data);
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
    // const historyId = e.target.parentElement.getAttribute("data-id");
    const historyId = id;
    let deleteMessage;

    if (id === "*") {
      deleteMessage = "All History Will be Deleted!!!";
    } else {
      deleteMessage = "This History Will be Deleted!!!";
    }

    if (!window.confirm(deleteMessage)) {
      return;
    }
    console.log(historyId);
    try {
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
