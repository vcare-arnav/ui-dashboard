// side bar dash routes


import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import VendorPage from "views/VendorPage.js";
// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
// import Maps from "views/Maps.js";
// import Upgrade from "views/Upgrade.js";

// var login =[
//   // 
// ]


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  
  {
    path: "/vendorpage",
    name: "Vendor Profile",
    icon: "users_single-02",
    component: VendorPage,
    layout: "/admin",
  },

// ___--------------CATEGORIES________________

  {
    path: "/categories",
    name: "Categories",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },

  // ___--------------ICONS________________

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin",
  // },

  // ___--------------MAPS________________

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "location_map-big",
  //   component: Maps,
  //   layout: "/admin",
  // },



  // ___--------------NOTIFICATION________________
  
  
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin",
  // },

  // ________________TYPOGRAPHY_________________

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin",
  // },

  // -------------------UPGRADE____________
  
  // {
    // pro: true,
    // path: "/upgrade",
    // name: "Upgrade to PRO",
    // icon: "objects_spaceship",
    // component: Upgrade,
    // layout: "/admin",
  // },
];
export default dashRoutes;
