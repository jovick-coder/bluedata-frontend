import React, { useContext, useState, useEffect } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import ActionDropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import ModalComponent from "../../components/Modal/ModalComponent";
import {
  LoaderBorderComponent,
  LoaderGrowComponent,
} from "../../components/Spinner/SpinnerComponent";

function USerListPage() {
  const [requestedUsers, setRequestedUsers] = useState("*");
  const [users, setUsers] = useState([]);

  const { apiUrl } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  // get account information
  async function getUsers() {
    try {
      const resp = await axios.get(`${apiUrl}/userInfo/1`, {
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
    return (
      <div className="mt-5 text-center ">
        <GroupCard>
          <div className=" fs-1 text-danger">
            <BsFillExclamationTriangleFill />
          </div>
          You dont have Access to this page. <br /> if you thing you should
          access this page try login out and login in aging <br />
          Contact the Admin if it repeats for privilege check <br />
          Thanks. <br />
          Developer
        </GroupCard>
      </div>
    );
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
    <div>
      <GroupCard>
        <h1 className="heder">List Of Users</h1>
        {/* 
        {users.forEach((user) => {
          return <div key={user._id}>{user.fullName}</div>;
        })} */}
        <ModalComponent
          btnText="UpGreed User"
          modalTitle="Authorize Action"
        ></ModalComponent>
        <ul>
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
                          {/* <div className="figure me-2">{amount}</div> */}
                          <div className="date">{getDate(joinDate)}</div>
                        </sup>
                        <hr className="my-0" />
                        <b>Name</b> {fullName} <br />
                        <b>Account type </b>
                        {checkType(privilege)}
                      </span>
                      <ActionDropDownMenu>
                        <li>
                          <a class="dropdown-item" href="#">
                            Action222
                          </a>
                        </li>
                      </ActionDropDownMenu>
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

export default USerListPage;
