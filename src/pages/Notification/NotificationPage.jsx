import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import {
  BsEyeFill,
  BsPlus,
  BsPlusCircleDotted,
  BsPlusCircleFill,
} from "react-icons/bs";
import "./NotificationPage.css";
import ModalComponent from "../../components/Modal/ModalComponent";
import { AddNotificationForm } from "../../components/Forms/FormsComponent";
function NotificationPage() {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    getNotification();
  }, []);
  const token = localStorage.getItem("telecomMerchantToken");
  const { apiUrl, getUserPrivilege, decodeDate } = useContext(UserContext);

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
      {/* Add notification model */}
      <ModalComponent modalTitle="Add Note" modalId={"AddNotification"}>
        <AddNotificationForm />
      </ModalComponent>
      <GroupCard>
        {getUserPrivilege() >= 3 ? (
          <>
            <div className="header d-flex justify-content-between">
              {/* <h3>New Notification</h3> */}
              <button
                className="button "
                data-bs-toggle="modal"
                data-bs-target="#AddNotification"
              >
                {" "}
                <BsPlusCircleFill className="me-2 fs-4" />
                Add Notification
              </button>
            </div>
            <hr />
          </>
        ) : null}
        <div className="header d-flex justify-content-between">
          <h3>Notification</h3>
          {/* <button className="button  btn-sm" onClick={() => markHasSeen("*")}>
            {" "}
            <BsEyeFill className="me-2" />
            Mark all has seen
          </button> */}
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
                    <sup className="d-inline d-md-flex mt-2 mb-0 flex-wrap">
                      <div className="figure me-2 my-2 ">
                        {adminName}, {privilege === 3 ? "Admin" : "Super Admin"}{" "}
                      </div>
                      <div className="date my-2 ">
                        {decodeDate(date)[0]}, {decodeDate(date)[1]}
                      </div>
                    </sup>
                    <hr className="my-0" />
                    {message}
                  </span>
                  {/* <button
                    className="button btn-sm"
                    onClick={() => markHasSeen(_id)}
                  >
                    <BsEyeFill />
                  </button> */}
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
