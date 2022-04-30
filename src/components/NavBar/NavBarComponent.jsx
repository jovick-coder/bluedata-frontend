import React, { useState } from "react";
import "./NavBarComponent.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import { BsCaretDownFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SignInForm } from "../Forms/FormsComponent";

function NavBarComponent({ isLoggedIn, setIsLoggedIn }) {
  function handelLogin() {
    // confirm("Logout?") navigate("/");
    // window.confirm("login?") && setIsLoggedIn(true);

    window.document.querySelector(".LoginComponent").style.border = "solid red";
  }
  const [loginCardIsOpen, setLoginCardIsOpen] = useState(false);
  const [signInCardIsOpen, setSignInCardIsOpen] = useState(false);
  return (
    <div className="NavBarComponent">
      <div className="container mx-auto d-flex justify-content-between ">
        <LogoComponent />
        {isLoggedIn ? (
          <NavMenuComponent setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <div className="d-flex drop-down-div">
            {/* <Link className="my-auto mx-3" to="/">
              Home
            </Link>
            <Link className="my-auto mx-3" to="explore">
              Explore
            </Link> */}
            <button
              className="button my-auto mx-3"
              // onClick={() => handelLogin()}
              onClick={() => {
                if (signInCardIsOpen) {
                  setSignInCardIsOpen(false);
                }
                setLoginCardIsOpen(!loginCardIsOpen);
              }}
            >
              Sign in
            </button>
            <button
              className="button my-auto mx-3"
              onClick={() => {
                if (loginCardIsOpen) {
                  setLoginCardIsOpen(false);
                }

                setSignInCardIsOpen(!signInCardIsOpen);
              }}
            >
              Sign up
            </button>

            <div
              className={`drop-down-card `}
              style={
                !signInCardIsOpen
                  ? { width: "0", height: 0, border: "none" }
                  : null
              }
            >
              <SignInForm />
            </div>
            <div
              className={`drop-down-card `}
              style={
                !loginCardIsOpen
                  ? { width: "0", height: 0, border: "none" }
                  : null
              }
            >
              Sign Up
            </div>
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
