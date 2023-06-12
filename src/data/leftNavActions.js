const leftNavActions = [
  {
    link: '/' , 
    listAction : 'Map View' , 
    icon : 'fa-solid fa-map-location-dot'
  } ,
  {
    lists: [
      { link: "/addBuisness", txt: "Add New Business" },
      { link: "/", txt: "All Business" },
      { link: "/", txt: "Business Orders" },
    ],
    listAction: "Manage Business",
    icon : 'fa-solid fa-business-time' ,
  },
  {
    lists: [
      { link: "/", txt: "Get All Orders" },
    ],
    listAction: "Manage Orders",
    icon : 'fa-solid fa-cart-shopping'
  },
  
  {
    lists: [
      { link: "/", txt: "Get All Customers" },
    ],
    listAction: "Manage Customers",
    icon : 'fas fa-users'
  },
  {
    lists: [
      { link: "/", txt: "Get All Drivers" },
    ],
    listAction: "Manage Drivers",
    icon : 'fa-solid fa-motorcycle'
  },
  {
    link : '/contactus' , 
    listAction: "Contact Us",
    icon : 'fa-solid fa-address-book'
  },
  
];

export default leftNavActions
