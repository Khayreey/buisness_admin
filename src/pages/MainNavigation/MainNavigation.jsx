import React, { useState , useEffect} from "react";
import TopNav from "../../component/TopNav/TopNav";
import LeftNav from "../../component/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import "./style.css";
import { useLocation } from "react-router-dom";
const MainNavigation = () => {
  const currentRoute = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentRoute.pathname]);
  const [isNotActive, setNotActive] = useState("true");
  return (
    <>
      <TopNav isNotActive={isNotActive} setNotActive={setNotActive} />
      <div className="d-flex">
        <LeftNav isNotActive={isNotActive} setNotActive={setNotActive} />
        <div
          className="outlet container-fluid ms-4 mt-4"
          style={{
            paddingLeft: isNotActive ? "4rem" : "16rem",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
