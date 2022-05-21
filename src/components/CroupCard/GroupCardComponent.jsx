import React from "react";
import "./GroupCardComponent.css";
import { BsWallet } from "react-icons/bs";

const GroupCard = ({ children }) => {
  return <div className="main-card">{children}</div>;
};

export default GroupCard;

export function DashboardCard({ icon, label, figure }) {
  return (
    <div className="DashboardCard">
      <div className="icon-div">{icon}</div>
      <div className="label-div">
        {label}
        <div className="figure-div">{figure}</div>
      </div>
    </div>
  );
}
export function DashboardActionCard({ icon, label, figure }) {
  return (
    <div className="DashboardActionCard">
      <div className="icon-div">{icon}</div>
      <div className="label-div">
        {label}
        <div className="figure-div">{figure}</div>
      </div>
    </div>
  );
}
