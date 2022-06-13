import React, { useContext, useState, useEffect } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import "./RequestConfirmationPage.css";
// import MapListComponents from "../../components/MapList/MapListComponents";
import { UnAuthorizeAccess } from "../error_page/error_page.component";
import { AdminContext } from "../../context/adminContext";
import {
  RequestConfirmationDropDown,
  UserActionDropDown,
} from "../../components/DropDownMenu/DropDownMenu";
import axios from "axios";
import { RequestConfirmationAuthorizeAction } from "../../components/Forms/FormsComponent";

function RequestConfirmationPage() {
  // const [requestedUsers, setRequestedUsers] = useState("*");
  const [requestList, setRequestList] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({});

  const { apiUrl, userPrivilege, token } = useContext(UserContext);
  // const { users } = useContext(AdminContext);

  useEffect(() => {
    getRequest();
  }, []);

  async function getRequest() {
    try {
      const resp = await axios.get(`${apiUrl}/request-confirmation`, {
        headers: {
          authorization: token,
        },
      });

      // console.log(resp.data);
      setRequestList(resp.data.data.reverse());
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  // Check privilege before showing page content
  if (userPrivilege < 3) {
    return <UnAuthorizeAccess />;
  }
  function getDate(date) {
    const dateArray = date.split("T");
    // console.log(dateArray);
    return dateArray[0];
  }
  return (
    <div className="mt-5">
      <RequestConfirmationAuthorizeAction />
      {/* <GroupCard> */}
      <div className="header d-flex justify-content-between">
        <h3>Request List</h3>
      </div>
      <hr />

      {/* <ul className="userList"> */}
      <div className="table-respo nsive">
        <table className="table">
          <thead className="">
            <tr>
              <th> # </th>
              <th> User ID </th>
              <th> Name </th>
              <th> Amount </th>
              <th> Account Number </th>
              <th> Account Name </th>
              <th> Sent to </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {requestList.length === 0 ? (
              <div className="notFound">No request Found</div>
            ) : (
              requestList.map((request, index) => {
                const {
                  _id,
                  uId,
                  amount,
                  sAccountName,
                  sAccountNumber,
                  sName,
                  rBankName,
                  approved,
                } = request;
                return (
                  <>
                    {!approved ? (
                      <tr>
                        <td>{index + 1}</td>
                        {/* <td>{_id}</td> */}
                        <td>{uId}</td>
                        <td>{sName}</td>
                        <td>{amount}</td>
                        <td>{sAccountNumber}</td>
                        <td>{sAccountName}</td>
                        <td>{rBankName}</td>
                        {/* <td>{user.userName}</td> */}
                        <td>
                          <button
                            onClick={() => {
                              setCurrentRequest({ ...request });
                            }}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          >
                            {/* click */}
                            <RequestConfirmationDropDown
                              currentRequest={currentRequest}
                              getRequest={getRequest}
                            />
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* <MapListComponents users={requestList} /> */}
      {/* </GroupCard> */}
    </div>
  );
}

export default RequestConfirmationPage;
