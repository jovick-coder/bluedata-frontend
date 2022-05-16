import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import GroupCard from "../../components/CroupCard/GroupCardComponent";

function CustomersListPage() {
  // Check privilege before showing page content
  const token = localStorage.getItem("telecomMerchantToken");
  const tokenArray = token.split(".");
  const decode = JSON.parse(atob(tokenArray[1]));
  if (decode.privilege < 3) {
    return (
      <div className="mt-5 text-center ">
        <GroupCard>
          <div className=" fs-1 text-danger">
            <BsFillExclamationTriangleFill />
          </div>
          You dont have Access to this page. <br /> if you thing you should
          access this page try login out and login in aging <br />
          Contact the Admin if it repeats for privilege check <br />
          Thanks. <br />
          Developer
        </GroupCard>
      </div>
    );
  }
  return (
    <div>
      <GroupCard>CustomersListPage</GroupCard>
    </div>
  );
}

export default CustomersListPage;
