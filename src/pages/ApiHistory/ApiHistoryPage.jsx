import React, { useContext, useEffect, useState } from "react";
import "./ApiHistoryPage.css";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { UserContext } from "../../context/userContext";
// import { env } from "process";

function ApiHistoryPage() {
  const [userHistories, setUserHistories] = useState([]);
  useEffect(() => {
    getUserHistory();
    // console.log(process.env.REACT_APP_API_KEY);
    // console.log(getUserAsync());
  }, []);
  // const  = localStorage.getItem("telecomMerchantToken");
  // const { apiUrl, token } = useContext(UserContext);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFormMessage({
  //       ok: false,
  //       message: "",
  //     });
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [formMessage.ok]);

  //
  async function getUserHistory() {
    try {
      const resp = await axios.get(`https://www.gongozconcept.com/api/data/`, {
        headers: {
          authorization: process.env.REACT_APP_API_KEY,
        },
      });

      console.log(resp);
      // setUserHistories(resp.data.data.reverse());
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  //
  // async function getUserAsync() {
  //   try {
  //     let response = await axios({
  //       method: "get",
  //       url: `https://www.gongozconcept.com/api/data/`,
  //       json: true,
  //     });
  //     return response;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  //

  function getDate(date) {
    const dateArray = date.split("T");
    // console.log(dateArray);
    return dateArray[0];
  }

  return (
    <div className="ApiHistoryPage pt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>API History</h3>
          {/* <button
            className="button btn-danger btn-sm"
            onClick={() => deleteHistory("*")}
          >
            {" "}
            <BsFillTrashFill /> Clear History
          </button> */}
        </div>
        <hr />
        <ul>
          {userHistories.length === 0 ? (
            <div className="notFound">No History Found</div>
          ) : (
            userHistories.map((history) => {
              const { amount, date, type, _id, description } = history;
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
                    {description === ""
                      ? `This is a ${type === "+" ? "credit" : "debit"} Alert`
                      : description}
                  </span>
                  {/* <button
                    className="button btn-danger btn-sm"
                    onClick={() => deleteHistory(_id)}
                  ></button> */}
                </li>
              );
            })
          )}
        </ul>
      </GroupCard>
    </div>
  );
}

export default ApiHistoryPage;
