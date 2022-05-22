import React, { useContext, useState, useEffect } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { UserActionDropDown } from "../../components/DropDownMenu/DropDownMenu";
import { AuthorizeAction } from "../../components/Forms/FormsComponent";
import "./UserListPage.css";
import MapListComponents from "../../components/MapList/MapListComponents";
import { UnAuthorizeAccess } from "../error_page/error_page.component";
import { AdminContext } from "../../context/adminContext";

function USerListPage() {
  const [requestedUsers, setRequestedUsers] = useState("*");
  const [usersList, setUsersList] = useState([]);

  const { userPrivilege } = useContext(UserContext);
  const { users } = useContext(AdminContext);

  useEffect(() => {
    let temp_usersList = [...usersList];

    temp_usersList = users;

    setUsersList(temp_usersList);
  }, []);

  // Check privilege before showing page content
  if (userPrivilege < 3) {
    return <UnAuthorizeAccess />;
  }
  function getDate(date) {
    const dateArray = date.split("T");
    // console.log(dateArray);
    return dateArray[0];
  }
  function checkType(privilege) {
    if (privilege === 1) {
      return "User";
    }
    if (privilege === 2) {
      return "Reseller";
    }
    if (privilege === 3) {
      return "Admin";
    }
    if (privilege === 4) {
      return "Super Admin";
    }
  }
  return (
    <div className="mt-5">
      <GroupCard>
        <div className="header d-flex justify-content-between">
          <h3>Users List</h3>
        </div>
        <hr />

        {/* <ul className="userList">
          {users.length === 0 ? (
            <div className="notFound">No User Found</div>
          ) : (
            users.map((user) => {
              const { joinDate, _id, fullName, privilege } = user;
              return (
                <>
                  {privilege === 1 ? (
                    <li
                      key={_id}
                      data-id={_id}
                      // className={type === "+" ? "cr" : "dr"}
                    >
                      <span className="w-100 me-4">
                        <sup className="d-flex mt-2 mb-0">
                          {/* <div className="figure me-2">{amount}</div> * /}
                          <b> Account Created: </b>
                          <div className="date ms-2">{getDate(joinDate)}</div>
                        </sup>
                        <hr className="my-0" />
                        <b>Name</b> {fullName} <br />
                        <b>Account type </b>
                        {checkType(privilege)}
                      </span>
                      <UserActionDropDown
                        accountType={checkType(privilege)}
                        accountPrivilege={privilege}
                      />
                    </li>
                  ) : null}
                  {/* ); * /}
                </>
              );
            })
          )}
        </ul> */}

        <MapListComponents users={usersList} />
      </GroupCard>
    </div>
  );
}

export default USerListPage;
