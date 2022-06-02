import React from "react";

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
