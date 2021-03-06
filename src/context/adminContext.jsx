import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [resellers, setResellers] = useState([]);
  const [admins, setAdmins] = useState([]);

  const { apiUrl, token } = useContext(UserContext);

  async function getAllInfo() {
    const tokenArray = token.split(".");
    const decode = JSON.parse(atob(tokenArray[1]));

    const userPrivilege = decode.privilege;
    const axiosInstance = axios.create({
      headers: {
        Authorization: token,
      },
    });
    if (userPrivilege >= 3) {
      // here example how to wait axios all fetch
      let listUsers = `${apiUrl}/userInfo/1`;
      let listResellers = ` ${apiUrl}/userInfo/2`;
      let listAdmins = `${apiUrl}/userInfo/3`;
      let usersRequest = axiosInstance.get(listUsers);
      let adminsRequest = axiosInstance.get(listAdmins);
      let resellersRequest = axiosInstance.get(listResellers);
      let [usersResponse, adminsResponse, resellersResponse] = await axios.all([
        usersRequest,
        adminsRequest,
        resellersRequest,
      ]);
      // console.log(
      //   usersResponse.data,
      //   adminsResponse.data,
      //   resellersResponse.data
      // );
      setUsers(usersResponse.data.data);
      setAdmins(adminsResponse.data.data);
      setResellers(resellersResponse.data.data);
    }
  }

  return (
    <AdminContext.Provider value={{ users, resellers, admins, getAllInfo }}>
      {children}
    </AdminContext.Provider>
  );
}
