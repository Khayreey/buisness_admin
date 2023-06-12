import React from "react";
import AnalysticCard from "../Analystic/AnalysticCard";
const HomeCard = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <AnalysticCard
          iconColor="#4154f1"
          bgColor="#f6f6fe"
          number="15000"
          text="Total Buisness"
          icon="fa-solid fa-shop"
        />
        <AnalysticCard
          iconColor="#2eca6a"
          bgColor="#e0f8e9"
          number="15000"
          text="Total Orders"
          icon="fa-solid fa-briefcase"
        />
        <AnalysticCard
          iconColor="#1b0158"
          bgColor="#e1e9ff"
          number="15000"
          text="Total Customer"
          icon="fa-solid fa-people-group "
        />
        <AnalysticCard
          iconColor="#ff771d"
          bgColor="#ffecdf"
          number="15000"
          text="Total Drivers"
          icon="fa-solid fa-motorcycle"
        />
      </div>
    </div>
  );
};

export default HomeCard;
