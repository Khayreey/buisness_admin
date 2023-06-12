import { useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";

import LogImage from "../../assets/images/blockchain.png";

import { Formik } from "formik";
import CustomInput from "../CustomInput/CustomInput";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  return (
    <Card className="m-2 col-lg-4 col-md-8 col-sm-11" style={{ height: "95%" }}>
      <Card.Img
        style={{ height: "35vh", width: "100%", objectFit: "contain" }}
        className="p-4"
        variant="top"
        src={LogImage}
      />
      <Card.Title className="p-2 text-primary border-bottom border-1">
        LOG IN
      </Card.Title>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, helpers) => {}}
      >
        {({ handleSubmit }) => {
          return (
            <Form
              className="d-flex flex-column justify-content-between"
              onSubmit={handleSubmit}
              noValidate
              style={{ height: "100%" }}
            >
              <Card.Body>
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
              </Card.Body>
              <Card.Footer>
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
              </Card.Footer>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default Login;
