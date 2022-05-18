import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import {
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
  MdFlight,
} from "react-icons/md";
import { Private_Data } from "../../private/private";
import LoadingComponent from "../Loading/LoadingComponent";
import "./SearchComponent.css";
function SearchComponent() {
  const [airport, setAirport] = useState("KEDC");

  const [states, setStates] = useState({ loading: true, data: [] });
  const [departure, setDeparture] = useState({ loading: true, data: [] });
  const [arriving, setArriving] = useState({ loading: true, data: [] });
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  const url = `https://${Private_Data.key}@opensky-network.org/api`;

  // data for the current timestamp returns null
  //  i got the  unix time for today
  let dateNow = Math.floor(Date.now() / 1000);
  // get record starting from a week back
  let begin = dateNow - 604800;
  // till one hours back
  let end = dateNow - 3600;

  const params = `airport=${airport}&begin=${begin}&end=${end}`;

  useEffect(() => {
    getStates();
    getDeparture();
    getArriving();
    //  for some reasons the Arrival endpoint is returning cors error so i am stopping the search in 3seconds
    setTimeout(() => {
      setArriving({ loading: false, data: [] });
    }, 3000);
  }, [airport]);
  useEffect(() => {
    setInterval(() => setError({ error: false, message: "" }), 4000);
  }, [error]);
  const handelSearch = () => {
    if (searchInput === "") {
      setError({ error: true, message: "Search input Empty" });
      return;
    }

    setAirport(searchInput);
    setStates({ loading: true, data: [] });
    setDeparture({ loading: true, data: [] });
    setArriving({ loading: true, data: [] });
  };
  // getStates function

  async function getStates() {
    try {
      let response = await axios({
        method: "get",
        url: `${url}/states/all?${params}`,
        json: true,
      });

      setStates({
        loading: false,
        data: response.data.states,
      });
    } catch (err) {
      console.error(err);
    }
  }
  // getDeparture function
  async function getDeparture() {
    try {
      let response = await axios({
        method: "get",
        url: `${url}/flights/departure?${params}`,
        json: true,
      });

      setDeparture({
        loading: false,
        data: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  }
  // getArriving function

  async function getArriving() {
    try {
      let response = await axios({
        method: "get",
        url: `${url}/flights/arriving?${params}`,
        json: true,
      });

      setArriving({
        loading: false,
        data: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="SearchComponent">
      <div className="row my-3 mt-0 search-input-row">
        <div className="col-md-6 my-auto">
          {" "}
          <b className="my-auto"> Flights Record for {airport} Airport.</b>
        </div>
        <div className="col-md-6">
          <div className=" search-div mt-3 d-flex mx-md-5">
            <input
              type="search"
              className="form-control rounded-0"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              placeholder="Search via airport"
            />
            {/* search button */}
            <button
              className="btn btn-primary rounded-0"
              onClick={() => handelSearch()}
            >
              <BiSearchAlt />
            </button>
          </div>
        </div>
        {error.error ? <div className="text-end">{error.message}</div> : null}
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row">
            <div className="d-flex flex-column">
              AIRPORTS
              <MdFlight className="mx-auto fs-2" />
            </div>
            <div className="count m-auto fs-3">
              {" "}
              {states.loading ? <LoadingComponent /> : states.data.length}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row">
            <div className="d-flex flex-column">
              departing
              <MdOutlineFlightTakeoff className="mx-auto fs-2" />
            </div>
            <div className="count m-auto fs-3">
              {departure.loading ? <LoadingComponent /> : departure.data.length}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 d-flex flex-row">
            <div className="d-flex flex-column">
              arriving
              <MdOutlineFlightLand className="mx-auto fs-2" />
            </div>
            <div className="count m-auto fs-3">
              {" "}
              {arriving.loading ? <LoadingComponent /> : arriving.data.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
