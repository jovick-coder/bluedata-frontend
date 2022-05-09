import React, { useContext } from "react";
import "./error_page.style.css";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import errorImage from "../../assets/images/page_not_found.svg";
import { UserContext } from "../../context/userContext";

const ErrorPage = () => {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <section className="ErrorPage">
        <div className="image-404-div">
          <img src={errorImage} alt="Page not found" />
        </div>
        <div className="error-message">Page Not Found</div>
        <div className="alt-message">Page may be deleted or not Created</div>
        {loggedIn ? (
          <Link to="/dashboard/home">
            <button className=" button">Go Back To Home</button>
          </Link>
        ) : (
          <Link to="/">
            <button className=" button">Go Back To Landing page</button>
          </Link>
        )}
      </section>
    </>
  );
};

export default ErrorPage;
