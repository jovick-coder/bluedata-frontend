import React, { useEffect, useState } from "react";
// import LoadingComponent from "../Loading/LoadingComponent";
// import { LoaderBorderComponent } from "../Spinner/SpinnerComponent";
import "./PaginationComponent.css";

function PaginationComponent({
  users,
  itemPerPage,
  currentPage,
  setCurrentPage,
  setItemPerPage,
}) {
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let pages = [];

  const handlePageNumberCLick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  // console.log(Math.ceil(users.length / itemPerPage));
  for (let i = 0; i < Math.ceil(users.length / itemPerPage); i++) {
    pages.push(i);

    // console.log(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handlePageNumberCLick}
          className={currentPage === number ? "button" : "btn"}
          title={`Page ${number}`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handelNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handelPrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <>
        <li onClick={() => handelNextBtn()} className="btn">
          ...
        </li>
        <li className="btn" title="Total page">
          {pages.length - 1}
        </li>
      </>
    );
  }

  let pageDecrementBtn = null;

  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <>
        {" "}
        <li onClick={() => handelPrevBtn()} className="btn">
          ...
        </li>
      </>
    );
  }
  // useEffect(() => {
  //   console.log(pages);
  //   console.log(users);
  // }, [users]);

  return (
    <div className="d-flex flex-wrap justify-content-between PaginationComponent">
      <ul>
        <li>
          <button
            className="button"
            onClick={() => handelPrevBtn()}
            disabled={currentPage === pages[1] ? true : false}
          >
            {"<-"}
          </button>
        </li>
        {/* {users.loading ? (
          <LoaderBorderComponent />
        ) : ( */}
        <>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
        </>
        {/* )} */}
        <li>
          <button
            className="button"
            onClick={() => handelNextBtn()}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            {"->"}
          </button>
        </li>
      </ul>
      <div className="select-div mb-2">
        <select
          name=""
          id=""
          className="form-select w-100"
          onChange={(e) => {
            setItemPerPage(e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default PaginationComponent;
