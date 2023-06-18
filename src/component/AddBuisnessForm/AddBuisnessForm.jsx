import React from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelectInput from '../CustomSelectInput/CustomSelectInput'
import {  faEnvelope, faPhone , faMapLocation , faBusinessTime , faList} from "@fortawesome/free-solid-svg-icons";
import MainPageText from "../MainPageText/MainPageText";
import addBuisnessSchema from "../../validationSchema/addBuisnessSchema";
const AddBuisnessForm = () => {
  return (
    <div className="container my-5 pb-4 bg-white rounded-2 shadow-sm">
       <MainPageText text='Fill Information'/> 
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          address: "",
          type: "Choose Buisness Type",
        }}
        onSubmit={() => {}} 
        validationSchema={addBuisnessSchema}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSumbit={handleSubmit}>
              <CustomInput
                name='name' 
                label="Name"
                placeholder="Enter Buisness Name"
                icon={faBusinessTime}
              />
               <CustomInput
                name='email' 
                label="Email"
                placeholder="Enter Buisness Email"
                icon={faEnvelope}
              />
               <CustomInput
                name='phone' 
                label="Phone"
                placeholder="Enter Buisness Phone"
                icon={faPhone}
              />
                <CustomInput
                name='address' 
                label="Address"
                placeholder="Enter Buisness Address"
                icon={faMapLocation}
              />
                <CustomSelectInput
                name='type' 
                label="Type"
                placeholder="Choose Buisness Type"
                icon={faList}
                options={[  {type : 'resturant'} ,  {type :  "super market"}]}
              />
              <Button type='submit' className='w-100 p-2 mt-4'>Add</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddBuisnessForm;
