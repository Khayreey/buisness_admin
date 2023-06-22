import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Container, Button } from "react-bootstrap";
import CustomInput from "../../component/CustomInput/CustomInput";
import { Formik } from "formik";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MainPageText from "../../component/MainPageText/MainPageText";
import { useDispatch } from "react-redux";
import { deleteBuisness, getSingleBusiness, updateBuisness } from "../../store/bus-actions";
import SkeltonLoader from "../../component/SkeltonLoader/SkeltonLoader";
import ErrorGettingData from "../../component/ErrorGetingData/ErrorGettingData";
import './style.css'
import addBuisnessSchema from "../../validationSchema/addBuisnessSchema";
import { useNavigate } from "react-router-dom";
const SingleBuisness = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedBuisness = useSelector(
    (state) => state.buisness.selectedBuisness
  );
  const isWaitingForGetBusiness = useSelector(
    (state) => state.buisness.isWaitingForGetBusiness
  );
  const isErrorGetBuisness = useSelector(
    (state) => state.buisness.errorInGetBusiness
  );
  
  const isRequireRender = useSelector(
    (state) => state.buisness.isRequireRender
  );
  useEffect(() => {
    dispatch(getSingleBusiness(id));
  }, [isRequireRender]);

  const navigateHandler = ()=>{
      navigate('/buisness' , {replace : true})
  }
  const deleteHandler = ()=>{
    dispatch(deleteBuisness(id , navigateHandler))
  }
  return (
    <Container fluid>
      <MainPageText text="Buisness" />
      <Container className="container my-5 pb-4 bg-white rounded-2 shadow-sm">
      <MainPageText text="Buisness Information" />
        {isWaitingForGetBusiness ? (
          <SkeltonLoader />
        ) : isErrorGetBuisness ? (
          <ErrorGettingData />
        ) : (
          selectedBuisness  && Object.keys(selectedBuisness).length > 0 &&  (
            <>
            
              <Formik
                initialValues={{
                  email: selectedBuisness.email,
                  name : selectedBuisness.name , 
                  phone : selectedBuisness.phone , 
                  type : selectedBuisness.type , 
                  address : selectedBuisness.address
                }}
                onSubmit={(values , helpers)=>{
                  console.log('hamada')
                   dispatch(updateBuisness(id , values))
                }}

                
              >
                {({initialValues  , values , handleSubmit}) => {
                  return (
                    <Form className='w-100' onSubmit={handleSubmit}>
                      <CustomInput
                        name="name"
                        label="Name"
                        isUpdate={true}
                        icon={faEnvelope}
                      />
                       <CustomInput
                        name="email"
                        label="Email"
                        isUpdate={true}
                        icon={faEnvelope}
                      />
                        <CustomInput
                        name="phone"
                        label="Phone"
                        isUpdate={true}
                        icon={faEnvelope}
                      />
                        <CustomInput
                        name="type"
                        label="Type"
                        isUpdate={true}
                        icon={faEnvelope}
                      />
                       <CustomInput
                        name="address"
                        label="Adress"
                        isUpdate={true}
                        icon={faEnvelope}
                      />
                     {JSON.stringify(values) !== JSON.stringify(initialValues)
                      ? <Button className='w-100' type='submit'>UPDATE</Button> : null}
                      <Button className='w-100 mt-2 btn-danger' onClick={deleteHandler}>DELETE</Button>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )
        )}
      </Container>
    </Container>
  );
};

export default SingleBuisness;
