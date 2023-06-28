import { useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";

import LogImage from "../../assets/images/blockchain.png";

import { Formik } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import loginSchema from "../../validationSchema/loginSchema";
import { loginHandler } from "../../store/auth-actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const dispatch = useDispatch()
  return (
    <Card className="m-2 col-lg-4 col-md-8 col-sm-11" style={{ height: "80%" }}>
      <Card.Img
        style={{ height: "35%", width: "100%", objectFit: "contain" }}
        className="p-4"
        variant="top"
        src={LogImage}
      />
      <Card.Title className="p-2 text-primary border-bottom border-1">
        LOG IN
      </Card.Title>
      <Card.Body style={{height : '70%' , overflow : 'auto'}}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, {setFieldError}) => {
          dispatch(loginHandler(values.email , values.password , setFieldError))
        }}
        validationSchema={loginSchema}
      >
        {({ handleSubmit }) => {
          return (
            <Form
              className="d-flex flex-column justify-content-between"
              onSubmit={handleSubmit}
              noValidate
              style={{ height: "100%" }}
            >
              
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  icon={faEnvelope}
                />
                <CustomInput
                  name="password"
                  label="Password"
                  placeholder="Enter Your Password"
                  type="password"
                  icon={faLock}
                />
             
             
                <Button
                  className="w-100"
                  disabled={isLoginLoading}
                  type="submit"
                  variant="success"
                >
                  {!isLoginLoading ? (
                    " Log In"
                  ) : (
                    <>
                      <Spinner
                        size="sm"
                        as="span"
                        animation="grow"
                        role="status"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Button>
              
            </Form>
          );
        }}
      </Formik>
      </Card.Body>
    </Card>
  );
};

export default Login;
