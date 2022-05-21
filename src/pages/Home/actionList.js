import { GiTwoCoins } from "react-icons/gi";
import {
  BsAward,
  BsBellFill,
  BsCoin,
  BsFillHddStackFill,
  BsHouseFill,
  BsPeople,
  BsPerson,
  BsPersonBadge,
  BsPersonBoundingBox,
  BsPersonCheck,
  BsPersonPlus,
  BsPersonX,
  BsSimFill,
} from "react-icons/bs";

export const actionList = [
  {
    label: "Fund Account",
    icon: <BsCoin />,
    path: "/dashboard/Found-account",
    userPrivilege: 1,
  },
  {
    label: "Buy Airtime",
    icon: <GiTwoCoins />,
    path: "/dashboard/home",
    userPrivilege: 1,
  },
  {
    label: "Buy Data",
    icon: <BsSimFill />,
    path: "/dashboard/Subscriptions",
    userPrivilege: 1,
  },
  {
    label: "Profile",
    icon: <BsPerson />,
    path: "/dashboard/profile",
    userPrivilege: 1,
  },
  {
    label: "Customers List",
    icon: <BsPersonCheck />,
    path: "/dashboard/customers-list",
    userPrivilege: 2,
  },
  {
    label: "Users List",
    icon: <BsPeople />,
    path: "/dashboard/user-list",
    userPrivilege: 3,
  },
  {
    label: "Resellers List",
    icon: <BsPersonPlus />,
    path: "/dashboard/resellers-list",
    userPrivilege: 3,
  },
  {
    label: "Admin List",
    icon: <BsPersonBoundingBox />,
    path: "/dashboard/admin-list",
    userPrivilege: 4,
  },
];
