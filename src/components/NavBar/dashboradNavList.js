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

export const userNavLinkObject = [
  {
    name: "Home",
    icon: <BsHouseFill />,
    path: "/dashboard/home",
    userPrivilege: 1,
  },
  {
    name: "profile",
    icon: <BsPerson />,
    path: "/dashboard/profile",
    userPrivilege: 1,
  },
  {
    name: "History",
    icon: <BsFillHddStackFill />,
    path: "/dashboard/history",
    userPrivilege: 1,
  },
  {
    name: "Notification",
    icon: <BsBellFill />,
    path: "/dashboard/notification",
    userPrivilege: 1,
  },
  {
    name: "Found Account",
    icon: <BsCoin />,
    path: "/dashboard/Found-account",
    userPrivilege: 1,
  },
  {
    name: "Buy Subscriptions",
    icon: <BsSimFill />,
    path: "/dashboard/Subscriptions",
    userPrivilege: 1,
  },
  {
    name: "Customers List",
    icon: <BsPersonCheck />,
    path: "/dashboard/customers-list",
    userPrivilege: 2,
  },
  {
    name: "Users List",
    icon: <BsPeople />,
    path: "/dashboard/user-list",
    userPrivilege: 3,
  },
  {
    name: "Resellers List",
    icon: <BsPersonPlus />,
    path: "/dashboard/resellers-list",
    userPrivilege: 3,
  },
  {
    name: "Admins List",
    icon: <BsPersonBoundingBox />,
    path: "/dashboard/admin-list",
    userPrivilege: 4,
  },
];
// export const superAdminNavLinkObject = [
//   // {
//   //   name: "Home",
//   //   icon: <BsHouseFill />,
//   //   path: "/adminDashboard/home",
//   // },
//   {
//     name: "profile",
//     icon: <BsPerson />,
//     path: "/adminDashboard/profile",
//   },
//   // {
//   //   name: "History",
//   //   icon: <BsFillHddStackFill />,
//   //   path: "/adminDashboard/history",
//   // },
//   // {
//   //   name: "Notification",
//   //   icon: <BsBellFill />,
//   //   path: "/adminDashboard/notification",
//   // },
//   // {
//   //   name: "Found Account",
//   //   icon: <BsCoin />,
//   //   path: "/adminDashboard/Found-account",
//   // },
//   // {
//   //   name: "Buy Subscriptions",
//   //   icon: <BsSimFill />,
//   //   path: "/adminDashboard/Subscriptions",
//   // },
// ];
// export const adminNavLinkObject = [
//   // {
//   //   name: "Home",
//   //   icon: <BsHouseFill />,
//   //   path: "/adminDashboard/home",
//   // },
//   {
//     name: "profile",
//     icon: <BsPerson />,
//     path: "/SuperAdminDashboard/profile",
//   },
//   // {
//   //   name: "History",
//   //   icon: <BsFillHddStackFill />,
//   //   path: "/adminDashboard/history",
//   // },
//   // {
//   //   name: "Notification",
//   //   icon: <BsBellFill />,
//   //   path: "/adminDashboard/notification",
//   // },
//   // {
//   //   name: "Found Account",
//   //   icon: <BsCoin />,
//   //   path: "/adminDashboard/Found-account",
//   // },
//   // {
//   //   name: "Buy Subscriptions",
//   //   icon: <BsSimFill />,
//   //   path: "/adminDashboard/Subscriptions",
//   // },
// ];
