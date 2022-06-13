import React, { useContext } from "react";
import { FoundAccountForm } from "../Forms/FormsComponent";
import ModalComponent from "../Modal/ModalComponent";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";

function ActionDropDownMenu({ children }) {
  return (
    <div className="dropdown">
      <button
        className="button dropdown-toggle"
        type="button"
        id="ActionDropDown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Action
      </button>
      <ul className="dropdown-menu" aria-labelledby="ActionDropDown">
        {children}
      </ul>
    </div>
  );
}

export default ActionDropDownMenu;

export function UserActionDropDown({ accountType, accountPrivilege }) {
  function UpgradeType(accountPrivilege) {
    const privilege = accountPrivilege + 1;
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
    <ActionDropDownMenu>
      <li>
        <span
          className="dropdown-item"
          data-bs-toggle="modal"
          data-bs-target="#AuthorizeAction"
        >
          Delete this {accountType} Account
        </span>
      </li>
      <li>
        <span
          className="dropdown-item"
          data-bs-toggle="modal"
          data-bs-target="#AuthorizeAction"
        >
          Suspend this {accountType} Account
        </span>
      </li>
      <li>
        <span
          className="dropdown-item"
          data-bs-toggle="modal"
          data-bs-target="#AuthorizeAction"
        >
          Up Grade {accountType} to {UpgradeType(accountPrivilege)}
        </span>
      </li>
      <li>
        <span
          className="dropdown-item"
          data-bs-toggle="modal"
          data-bs-target="#AuthorizeAction"
        >
          Up Grade User Account
        </span>
      </li>
    </ActionDropDownMenu>
  );
}

// this will be an update latter in the future
// users will have to input password to authorize the confirm command
export function RequestConfirmationDropDown({ currentRequest, getRequest }) {
  const { apiUrl, token, getUserPrivilege } = useContext(UserContext);
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  async function deleteRequest() {
    // auto close modal box
    window.document
      .getElementById("RequestConfirmationAuthorizeAction")
      .click();

    if (getUserPrivilege() < 4) {
      setPopUpMessage({
        messageType: "error",
        message: "User Not An Admin",
      });
      return;
    }
    if (window.confirm("This request will be deleted")) {
      // console.log("request deleted", getUserPrivilege());
      // console.log(currentRequest);
      // return;
      try {
        const sendBody = { ...currentRequest };
        const resp = await axios.delete(
          `${apiUrl}/request-confirmation/${currentRequest._id}&${currentRequest.uId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (resp.data.ok) {
          setPopUpMessage({
            messageType: "success",
            message: "Request Deleted",
          });
          // call the function to update the request table
          getRequest();
        }
        if (resp.data.ok === false) {
          setPopUpMessage({
            messageType: "error",
            message: "Request Deleted was not successfully",
          });
          // call the function to update the request table
          getRequest();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  function ConfirmRequest() {
    // auto close modal box
    window.document.getElementById("RequestConfirmation").click();
  }

  return (
    <>
      <ModalComponent
        modalTitle="Request Confirmation"
        modalId="RequestConfirmation"
      >
        <FoundAccountForm
          currentRequest={currentRequest}
          getRequest={getRequest}
        />
      </ModalComponent>
      <ActionDropDownMenu>
        <li>
          <span
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target="#RequestConfirmation"
            onClick={() => {
              ConfirmRequest();
            }}
          >
            Confirm Request
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            // data-bs-toggle="modal"
            // data-bs-target="#RequestConfirmationAuthorizeAction"
            onClick={() => {
              deleteRequest();
            }}
          >
            Delete Request
          </span>
        </li>
      </ActionDropDownMenu>
    </>
  );
}
