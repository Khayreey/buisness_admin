import React from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../CustomInput/CustomInput";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MainPageText from "../MainPageText/MainPageText";
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
          type: "",
        }}
        onSubmit={() => {}}
      >
        {({ handleSubmit }) => {
          return (
            <Form>
              <CustomInput
                name='name' 
                label="Name"
                placeholder="Enter Buisness Name"
                icon={faEnvelope}
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
                icon={faEnvelope}
              />
                <CustomInput
                name='address' 
                label="Address"
                placeholder="Enter Buisness Address"
                icon={faEnvelope}
              />
                <CustomInput
                name='type' 
                label="Type"
                placeholder="Choose Buisness Type"
                icon={faEnvelope}
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
