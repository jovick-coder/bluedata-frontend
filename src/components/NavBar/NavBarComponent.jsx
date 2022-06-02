import React, { useContext, useState } from "react";
import "./NavBarComponent.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsBell,
  BsCaretDownFill,
  BsFillDoorOpenFill,
  BsHouse,
  BsPerson,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm, SignUpForm } from "../Forms/FormsComponent";
import { UserContext } from "../../context/userContext";
import {
  userNavLinkObject,
  adminNavLinkObject,
  superAdminNavLinkObject,
} from "./dashboradNavList";
function NavBarComponent() {
  // function handelLogin() {
  //   // confirm("Logout?") navigate("/");
  //   // window.confirm("login?") && setLoggedIn(true);

  //   window.document.querySelector(".LoginComponent").style.border = "solid red";
  // }
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [loginCardIsOpen, setLoginCardIsOpen] = useState(false);
  const [signInCardIsOpen, setSignInCardIsOpen] = useState(false);
  return (
    <div className="NavBarComponent">
      <div className="container mx-auto d-flex justify-content-between ">
        <LogoComponent />
        {loggedIn ? (
          <div className="d-flex">
            <NavMenuComponent setLoggedIn={setLoggedIn} />{" "}
            {/* <button className="button h-75 my-auto ms-2">
              <Link to={"./dashboard/home"}>Home</Link>
            </button> */}
          </div>
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
              <div className="mt-5">
                <SignUpForm
                  setSignInCardIsOpen={setSignInCardIsOpen}
                  setLoginCardIsOpen={setLoginCardIsOpen}
                />
              </div>
            </div>
            <div
              className={`drop-down-card `}
              style={
                !loginCardIsOpen
                  ? { width: "0", height: 0, border: "none" }
                  : null
              }
            >
              <div className="mt-5">
                <LoginForm />
              </div>
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
  const { userInformation } = useContext(UserContext);

  return (
    <div className="ms-auto my-auto">
      <b> {userInformation.userName}</b>
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

export const NavMenuComponent = ({ setLoggedIn }) => {
  const [navMenuComponent, setNavMenuComponent] = useState(false);
  const navigate = useNavigate();
  function logout() {
    window.confirm("logout?") && setLoggedIn(false);
    navigate("/");
  }

  const { logOut } = useContext(UserContext);
  return (
    <>
      {" "}
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
          <li>
            <Link to={"./dashboard/home"}>
              <span className="me-2">
                <BsHouse />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"./dashboard/profile"}>
              <span className="me-2">
                <BsPerson />
              </span>
              Profile
            </Link>
          </li>
          <li>
            <Link to={"./dashboard/notification"}>
              <span className="me-2">
                <BsBell />
              </span>
              Notification
            </Link>
          </li>

          <hr />
          <li onClick={() => logOut()} className="logout text-danger">
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export const ProfilePicture = ({ className }) => {
  return (
    <img
      src={profilePicture}
      className={`ProfilePicture ms-2 ${className}`}
      alt="ProfilePicture"
    />
  );
};

export const DashboardSideNav = ({ sideNavOpen, setSideNavOpen }) => {
  // const {  } = useContext(UserContext);
  // const [sideNavOpen, setSideNavOpen] = useState(false);
  function navToggle() {
    setSideNavOpen(!sideNavOpen);
  }

  const { logOut, userInformation } = useContext(UserContext);
  const { privilege } = userInformation;
  return (
    <>
      {/* <div className="btn btn-primary"> open</div> */}
      <div
        className="side-nav-icon toggle"
        onClick={() => {
          navToggle();
        }}
      >
        {sideNavOpen ? <BsArrowLeftSquareFill /> : <BsArrowRightSquareFill />}
      </div>
      <ul>
        {userNavLinkObject.map((link, i) => {
          const { name, icon, path, userPrivilege } = link;
          // console.log("userPrivilege");
          return (
            <>
              {privilege >= userPrivilege ? (
                <li key={i}>
                  <Link to={path}>
                    <div className="side-nav-icon">{icon}</div>
                    <span className="nav-link-name">{name}</span>
                  </Link>
                </li>
              ) : null}
            </>
          );
        })}
        <li>
          <Link
            to="#"
            onClick={() => {
              logOut();
            }}
          >
            <div className="side-nav-icon text-danger">
              {" "}
              <BsFillDoorOpenFill />
            </div>
            <span className="nav-link-name text-danger">LogOut</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
