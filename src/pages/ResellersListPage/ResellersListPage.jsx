import React, { useContext, useState, useEffect } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import ActionDropDownMenu, {
  UserActionDropDown,
} from "../../components/DropDownMenu/DropDownMenu";
import { UnAuthorizeAccess } from "../error_page/error_page.component";

function ResellersListPage() {
  const [requestedUsers, setRequestedUsers] = useState("*");
  const [users, setUsers] = useState([]);

  const { apiUrl } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  // get account information
  async function getUsers() {
    try {
      const resp = await axios.get(`${apiUrl}/userInfo/2`, {
        headers: {
          authorization: token,
        },
      });
      // console.log(token);
      // console.log(resp.data);
      setUsers(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
  // console.log(users);
  // Check privilege before showing page content
  const token = localStorage.getItem("telecomMerchantToken");
  const tokenArray = token.split(".");
  const decode = JSON.parse(atob(tokenArray[1]));

  const userPrivilege = decode.privilege;
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
          <h3>Resellers List</h3>
        </div>
        <hr />

        <ul className="userList">
          {users.length === 0 ? (
            <div className="notFound">No Reseller Found</div>
          ) : (
            users.map((user) => {
              const { joinDate, _id, fullName, privilege } = user;
              return (
                <>
                  {privilege === 2 ? (
                    <li
                      key={_id}
                      data-id={_id}
                      // className={type === "+" ? "cr" : "dr"}
                    >
                      <span className="w-100 me-4">
                        <sup className="d-flex mt-2 mb-0">
                          {/* <div className="figure me-2">{amount}</div> */}
                          <div className="date">{getDate(joinDate)}</div>
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
                  {/* ); */}
                </>
              );
            })
          )}
        </ul>
      </GroupCard>
    </div>
  );
}

export default ResellersListPage;
