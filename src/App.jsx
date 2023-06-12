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


function App() {
 
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainNavigation />,
      children: [
        { path: "", element: <Home /> },
        { path: "/addBuisness", element: <AddBuisness /> },
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
