import React, { useContext, useState, useEffect } from "react";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import { UserActionDropDown } from "../../components/DropDownMenu/DropDownMenu";
import { UnAuthorizeAccess } from "../error_page/error_page.component";
import { AdminContext } from "../../context/adminContext";

function AdminListPage() {
  // const [requestedUsers, setRequestedUsers] = useState("*");
  const [adminList, setAdminList] = useState([]);

  const { userPrivilege } = useContext(UserContext);

  const { admins } = useContext(AdminContext);

  useEffect(() => {
    let temp_adminList = [...adminList];

    temp_adminList = admins;

    setAdminList(temp_adminList);
  }, []);

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // // get account information
  // async function getUsers() {
  //   try {
  //     const resp = await axios.get(`${apiUrl}/userInfo/3`, {
  //       headers: {
  //         authorization: token,
  //       },
  //     });
  //     // console.log(token);
  //     // console.log(resp.data);
  //     setUsers(resp.data.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // }
  // console.log(users);
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
          <h3>Admin List</h3>
        </div>
        <hr />

        <ul className="userList">
          {adminList.length === 0 ? (
            <div className="notFound">No User Found</div>
          ) : (
            adminList.map((user) => {
              const { joinDate, _id, fullName, privilege } = user;
              return (
                <>
                  {privilege === 3 ? (
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

export default AdminListPage;
