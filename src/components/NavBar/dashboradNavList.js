import {
  BsBellFill,
  BsCoin,
  BsFillHddStackFill,
  BsHouseFill,
  BsPerson,
  BsSimFill,
} from "react-icons/bs";

export const navLinkObject = [
  {
    name: "Home",
    icon: <BsHouseFill />,
    path: "/dashboard/home",
  },
  {
    name: "profile",
    icon: <BsPerson />,
    path: "/dashboard/profile",
  },
  {
    name: "History",
    icon: <BsFillHddStackFill />,
    path: "/dashboard/history",
  },
  {
    name: "Notification",
    icon: <BsBellFill />,
    path: "/dashboard/notification",
  },
  {
    name: "Found Account",
    icon: <BsCoin />,
    path: "/dashboard/Found-account",
  },
  {
    name: "Buy Subscriptions",
    icon: <BsSimFill />,
    path: "/dashboard/Subscriptions",
  },
];
