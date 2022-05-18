import React, { useState } from "react";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";
import LoadingComponent from "../Loading/LoadingComponent";
import PaginationComponent from "../Pagination/PaginationComponent";
import "./MapListComponents.css";
function MapListComponents({ allFlights }) {
  // console.log(convertToDate(1649334180));
  function convertToDate(unixTime) {
    // console.log(unixTime);
    var dateTIme = Date(unixTime * 1000);
    let dateTimeArray = dateTIme.split(" ");
    const date = `  ${dateTimeArray[0]}-${dateTimeArray[2]}-${dateTimeArray[1]}-${dateTimeArray[3]}`;
    const time = ` ${dateTimeArray[4]}-${dateTimeArray[5]}`;
    return [date, time];
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = allFlights.data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="MapListComponents">
      {allFlights.loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead className="">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">icao24 address </th>
                  <th scope="col">
                    <MdOutlineFlightTakeoff className="" />
                    DepartureAirport
                  </th>

                  <th
                    scope="col"
                    style={{ minWidth: "200px", textAlign: "center" }}
                  >
                    firstSeen
                  </th>
                  <th scope="col">
                    {" "}
                    <MdOutlineFlightLand className="" />
                    ArrivalAirport
                  </th>
                  <th
                    scope="col"
                    style={{ minWidth: "200px", textAlign: "center" }}
                  >
                    lastSeen
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((flight, index) => {
                  const {
                    icao24,
                    estDepartureAirport,
                    firstSeen,
                    estArrivalAirport,
                    lastSeen,
                  } = flight;
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{icao24}</td>
                      <td>
                        {estDepartureAirport ? estDepartureAirport : "..."}
                      </td>
                      <td>
                        {convertToDate(firstSeen)[0] +
                          "/ " +
                          convertToDate(firstSeen)[1]}
                      </td>
                      <td>{estArrivalAirport ? estArrivalAirport : "..."}</td>
                      <td>
                        {convertToDate(lastSeen)[0] +
                          "/ " +
                          convertToDate(lastSeen)[1]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
      <PaginationComponent
        allFlights={allFlights}
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        setCurrentPage={setCurrentPage}
        setItemPerPage={setItemPerPage}
      />
    </div>
  );
}

export default MapListComponents;
