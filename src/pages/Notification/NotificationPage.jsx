import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import { BsEyeFill, BsFillTrashFill } from "react-icons/bs";
import "./NotificationPage.css";
function NotificationPage() {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    getNotification();
  }, []);
  const token = localStorage.getItem("telecomMerchantToken");
  const { apiUrl } = useContext(UserContext);

  async function getNotification() {
    try {
      const resp = await axios.get(`${apiUrl}/notification`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      setNotification(resp.data.data.reverse());
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

  // function getAdminName(id){
  //   try {
  //     const resp = await axios.get(`${apiUrl}/userInfo/${decode.uId}`, {
  //       headers: {
  //         authorization: token,
  //       },
  //     });

  //     resp.data.data
  //   } catch (error) {
  //     console.log("Error getting admin name", error);
  //   }
  // }

  async function markHasSeen(id) {
    // e.preventDefault();
    // const historyId = e.target.parentElement.getAttribute("data-id");
    const historyId = id;
    let confirmMessage;

    if (id === "*") {
      confirmMessage = "All Notification Will be Marked has seen!!!";
    } else {
      confirmMessage = "This Notification Will be Marked has seen!!!";
    }

    if (!window.confirm(confirmMessage)) {
      return;
    }
    // console.log(historyId);
    try {
      // console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
  // console.log(notification);
  return (
    <div className="NotificationPage pt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>Notification</h3>
          <button className="button  btn-sm" onClick={() => markHasSeen("*")}>
            {" "}
            <BsEyeFill className="me-2" />
            Mark all has seen
          </button>
        </div>
        <hr />
        <ul>
          {notification.length === 0 ? (
            <div className="notFound">No Notification Found</div>
          ) : (
            notification.map((notification) => {
              const { _id, aId, message, privilege, date, adminName } =
                notification;
              return (
                <li
                  key={_id}
                  data-id={_id}
                  // className={type === "+" ? "cr" : "dr"}
                >
                  <span className="w-100 me-4">
                    <sup className="d-flex mt-2 mb-0">
                      <div className="figure me-2">
                        {adminName}, {privilege === 3 ? "Admin" : "Super Admin"}{" "}
                      </div>
                      <div className="date">{getDate(date)}</div>
                    </sup>
                    <hr className="my-0" />
                    {message}
                  </span>
                  <button
                    className="button btn-sm"
                    onClick={() => markHasSeen(_id)}
                  >
                    <BsEyeFill />
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </GroupCard>
    </div>
  );
}

export default NotificationPage;
