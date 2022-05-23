import React, { useState } from "react";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";
import { UserActionDropDown } from "../DropDownMenu/DropDownMenu";
// import LoadingComponent from "../Loading/LoadingComponent";
import PaginationComponent from "../Pagination/PaginationComponent";
import { LoaderBorderComponent } from "../Spinner/SpinnerComponent";
import "./MapListComponents.css";
function MapListComponents({ users }) {
  // // console.log(convertToDate(1649334180));
  // function convertToDate(unixTime) {
  //   // console.log(unixTime);
  //   var dateTIme = Date(unixTime * 1000);
  //   let dateTimeArray = dateTIme.split(" ");
  //   const date = `  ${dateTimeArray[0]}-${dateTimeArray[2]}-${dateTimeArray[1]}-${dateTimeArray[3]}`;
  //   const time = ` ${dateTimeArray[4]}-${dateTimeArray[5]}`;
  //   return [date, time];
  // }

  // let listIndexNumber = [...users];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentItems);
  return (
    <div className="MapListComponents">
      {/* {users ? (
        <LoaderBorderComponent />
      ) : ( */}
      <>
        <div className="table-responsive">
          <table className="table">
            <thead className="">
              <tr>
                <th> # </th>
                <th> Name </th>
                <th> Email </th>
                <th> Number </th>
                <th> User Name </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.userName}</td>
                    {/* <td>{user.userName}</td> */}
                    <td>
                      <UserActionDropDown />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
      {/* )} */}
      <PaginationComponent
        users={users}
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        setCurrentPage={setCurrentPage}
        setItemPerPage={setItemPerPage}
      />
    </div>
  );
}

export default MapListComponents;
