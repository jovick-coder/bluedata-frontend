import React, { useContext } from "react";
import {
  BsFillExclamationTriangleFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import GroupCard from "../../components/CroupCard/GroupCardComponent";
import ModalComponent from "../../components/Modal/ModalComponent";
import { UserContext } from "../../context/userContext";

function CustomersListPage() {
  // Check privilege before showing page content
  // const token = localStorage.getItem("telecomMerchantToken");
  // const tokenArray = token.split(".");
  // const decode = JSON.parse(atob(tokenArray[1]));
  const { apiUrl, getUserPrivilege } = useContext(UserContext);

  if (getUserPrivilege() < 2) {
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
  return (
    <div>
      <GroupCard>
        {getUserPrivilege() >= 2 ? (
          <>
            <ModalComponent modalTitle="Add Note" modalId={"AddCustomers"}>
              Add Customer
            </ModalComponent>
            <div className="header d-flex justify-content-between">
              {/* <h3>New Customer</h3> */}
              <button
                className="button "
                // onClick={() => markHasSeen("*")}
                // className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#AddCustomers"
              >
                {" "}
                <BsPlusCircleFill className="me-2 fs-5 my-auto" />
                Add Customer
              </button>
            </div>
            <hr />
          </>
        ) : null}
      </GroupCard>
    </div>
  );
}

export default CustomersListPage;
