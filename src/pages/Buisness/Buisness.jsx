import React from "react";
import { Container , Placeholder} from "react-bootstrap";
import MainPageText from "../../component/MainPageText/MainPageText";
import TableView from "../../component/TableView/TableView";
import { useSelector } from "react-redux";
import SkeltonLoader from '../../component/SkeltonLoader/SkeltonLoader'
import ErrorGettingData from "../../component/ErrorGetingData/ErrorGettingData";
const Buisness = () => {

  const allBuisness = useSelector((state) => state.buisness.allBuisness);
 
  const isWaitingForGetBusiness = useSelector(
    (state) => state.buisness.isWaitingForGetBusiness
  );
  const isErrorGetBuisness = useSelector(
    (state) => state.buisness.errorInGetBusiness
  );
  
 
  
  return (
    <Container fluid>
      <MainPageText text="Buisness" />
      <Container className="container my-5 pb-4 bg-white rounded-2 shadow-sm">
        {isWaitingForGetBusiness ? (
          <SkeltonLoader />
        ) : isErrorGetBuisness ? (
          <ErrorGettingData />
        ) : (
          allBuisness.length > 0 &&
          <>
          <MainPageText text="Buisness Table" />
         <TableView to='buisness' columns={Object.keys(allBuisness[0])} data={allBuisness} />
         </>
        )}
      </Container>
    </Container>
  );
};

export default Buisness;
