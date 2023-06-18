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
import Orders from "./pages/Orders/Orders";

function App() {
  const dispatch = useDispatch()
 
  useEffect(()=>{
    dispatch(getAllBusiness())
    
  },[])

 useEffect(()=>{
  dispatch(getAllCustomers())
 },[])

 useEffect(()=>{
  dispatch(getAllOrders())
 },[])
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainNavigation />,
      children: [
        { path: "", element: <Home /> },
        { path: "/addBuisness", element: <AddBuisness /> },
        { path: "/buisness", element: <Buisness /> },
        { path: "/buisness/:id", element: <SingleBuisness /> },
        { path: "/buisness/:id/:menu", element: <BuisnessMenu /> },
        { path: "/customers", element: <Customers /> },
        { path: "/customers/:id", element: <SingleCustomer /> },
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
