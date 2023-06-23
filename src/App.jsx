import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainNavigation from "./pages/MainNavigation/MainNavigation";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddBuisness from "./pages/AddBuisness/AddBuisness";
import ContactUs from "./pages/ContactUs/ContactUs";
import {useDispatch , useSelector} from 'react-redux'
import {getAllBusiness} from './store/bus-actions'
import Buisness from "./pages/Buisness/Buisness";
import SingleBuisness from "./pages/SingleBuisness/SingleBuisness";
import BuisnessMenu from "./pages/BuisnessMenu/BuisnessMenu";
import { getAllCustomers } from "./store/customer-actions";
import {getAllOrders} from './store/order-actions'
import Customers from "./pages/Customers/Customers";
import SingleCustomer from "./pages/SingleCustomer/SingleCustomer";
import SingleDriver from "./pages/SingleDriver/SingleDriver";
import Orders from "./pages/Orders/Orders";
import {getAllDrivers , getAllAvailableDrivers , getAllUnAvailableDrivers , getAllBusyDrivers}
from './store/driver-actions'
import Drivers from "./pages/Drivers/Drivers";
import PendingBuisness from "./pages/PendingBuisness/PendingBuisness";
import PendingDrivers from "./pages/PendingDrivers/PendingDrivers";
function App() {
  const dispatch = useDispatch()
  const isRequireRender = useSelector(
    (state) => state.buisness.isRequireRender
  );

  const isDriversRequireRender = useSelector(
    (state) => state.pendingDrivers.isRequireRender
  );
  useEffect(()=>{
    dispatch(getAllBusiness())
    
  },[isRequireRender])

 useEffect(()=>{
  dispatch(getAllCustomers())
 },[])

 useEffect(()=>{
  dispatch(getAllOrders())
 },[])


 useEffect(()=>{
  dispatch(getAllDrivers())
  dispatch(getAllAvailableDrivers())
  dispatch(getAllUnAvailableDrivers())
  dispatch(getAllBusyDrivers())
 },[isDriversRequireRender])
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainNavigation />,
      children: [
        { path: "", element: <Home /> },
        { path: "/addBuisness", element: <AddBuisness /> },
        { path: "/buisness", element: <Buisness /> },
        { path: "/buisness/:id", element: <SingleBuisness /> },
        { path: "/pendingBuisness", element: <PendingBuisness /> },
        { path: "/pendingDrivers", element: <PendingDrivers /> },
        
        { path: "/customers", element: <Customers /> },
        { path: "/customers/:id", element: <SingleCustomer /> },
        { path: "/drivers", element: <Drivers /> },
        { path: "/drivers/:id", element: <SingleDriver /> },
        { path: "/orders", element: <Orders /> },
        { path: "/contactus", element: <ContactUs /> },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={routers} />;
  
}
export default App;
