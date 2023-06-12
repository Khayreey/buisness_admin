import { useState } from "react";

import { useField } from "formik";
import { Form, InputGroup } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomInput = ({ type, icon, label, ...props }) => {
  const [showPass, setShowPass] = useState(false);
  const [field, meta] = useField(props);

  console.log(meta.error);
  return (
    <Form.Group className="p-2">
      {label ? (
        <Form.Label>
          {label}
          <span className="text-danger"> *</span>
        </Form.Label>
      ) : null}
      <InputGroup hasValidation>
        <InputGroup.Text>
          <FontAwesomeIcon icon={icon} />
        </InputGroup.Text>
        <Form.Control
          type={
            type !== "password"
              ? type
              : type === "password" && !showPass
              ? "password"
              : "text"
          }
          {...field}
          {...props}
          isInvalid={meta.touched && !!meta.error}
          isValid={meta.touched && !Boolean(meta.error)}
        />

        {type && type === "password" ? (
          <InputGroup.Text>
            <FontAwesomeIcon
              onClick={() => setShowPass((state) => !state)}
              icon={showPass ? faEye : faEyeSlash}
            ></FontAwesomeIcon>
          </InputGroup.Text>
        ) : null}
        <Form.Control.Feedback className="alert alert-danger" type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};
export default CustomInput;
