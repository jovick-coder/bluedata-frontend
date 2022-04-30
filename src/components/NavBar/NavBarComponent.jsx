import React, { useState } from "react";
import "./NavBarComponent.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import { BsCaretDownFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function NavBarComponent({ isLoggedIn, setIsLoggedIn }) {
  function handelLogin() {
    // confirm("Logout?") navigate("/");
    // window.confirm("login?") && setIsLoggedIn(true);
    window.document.querySelector(".LoginComponent").style.border = "solid red";
  }
  return (
    <div className="NavBarComponent">
      <div className="container mx-auto d-flex justify-content-between ">
        <LogoComponent />
        {isLoggedIn ? (
          <NavMenuComponent setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <div className="d-flex">
            {/* <Link className="my-auto mx-3" to="/">
              Home
            </Link>
            <Link className="my-auto mx-3" to="explore">
              Explore
            </Link> */}
            <button
              className="button my-auto mx-3"
              onClick={() => handelLogin()}
            >
              Sign in
            </button>
            <button
              className="button my-auto mx-3"
              onClick={() => handelLogin()}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBarComponent;

export const LogoComponent = () => {
  return <div className="LogoComponent">TcM</div>;
};

export const NavProfilePicture = () => {
  return (
    <div className="ms-auto my-auto">
      <b>UserName</b>
      <img
        src={profilePicture}
        className="NavProfilePicture ms-2"
        alt="NavProfilePicture"
      />
    </div>
  );
};

export const NavLinkComponent = ({ linkText, to }) => {
  return <div className="NavLinkComponent">{linkText} </div>;
};

export const NavMenuComponent = ({ setIsLoggedIn }) => {
  const [navMenuComponent, setNavMenuComponent] = useState(false);
  const navigate = useNavigate();
  function logout() {
    window.confirm("logout?") && setIsLoggedIn(false);
    navigate("/");
  }
  return (
    <div
      className="NavMenuComponent"
      onClick={() => {
        navMenuComponent
          ? setNavMenuComponent(false)
          : setNavMenuComponent(true);
      }}
    >
      <NavProfilePicture
        navMenuComponent={navMenuComponent}
        setNavMenuComponent={setNavMenuComponent}
      />{" "}
      <BsCaretDownFill className="my-auto" />
      <ul
        className="dropdown-menu-ul"
        style={
          navMenuComponent ? { display: "inline-block" } : { display: "none" }
        }
      >
        <li>Post</li>
        <li>Profile</li>
        <li>Favorite</li>
        <hr />
        <li onClick={() => logout()} className="logout">
          Logout
        </li>
      </ul>
    </div>
  );
};

export const ProfilePicture = () => {
  return (
    <img
      src={profilePicture}
      className="ProfilePicture ms-2"
      alt="ProfilePicture"
    />
  );
};
