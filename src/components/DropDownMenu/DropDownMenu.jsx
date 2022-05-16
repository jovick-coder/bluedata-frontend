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
