import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  InputGroup,
  Image,
  NavDropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";
import DelImg from "../../assets/images/del.png";
import UserImg from "../../assets/images/pic.jpg";

import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNav = ({ isNotActive, setNotActive }) => {
  var barsIcon = <i className="fas fa-bars fs-2" style={{color : 'rgb(2, 36, 71)'}}></i>;
  var crossIcon = <i className="fa-solid fa-xmark fs-2"></i>;
  const [serchFilter, setSearchFilter] = useState("buisness");
  const handleSearchFilter = (e) => {
    setSearchFilter(() => {
      return e;
    });
  };
  return (
    <Navbar
      className='shadow'
      bg="white"
      expand="lg"
      style={{ position: "fixed", top: "0", width: "100%", zIndex: "10" }}
    >
      <Container fluid>
        <button
          type="button"
          onClick={() => setNotActive(!isNotActive)}
          className="btn"
        >
          <span className={isNotActive ? "text-primary" : "hidden"}>
            {barsIcon}
          </span>
          <span
            className={isNotActive ? "text-primary hidden" : ""}
          >
            {crossIcon}
          </span>
        </button>
        <Navbar.Brand
          className="d-flex align-items-center justify-content-center mx-2"
          style={{ fontWeight: "800" }}
        >
          <img
            alt="logo"
            src={DelImg}
            width="50"
            height="50"
            className="d-inline-block align-top mx-2"
          />{" "}
          FAST <span className="text-primary">X</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ height: "50%" }}>
          <Form
            className="me-auto my-2 my-lg-0 mx-lg-5 d-flex"
            style={{ width: "100%" }}
          >
            <InputGroup className="me-2">
              <InputGroup.Text>
                <NavDropdown title={serchFilter} onSelect={handleSearchFilter}>
                  <NavDropdown.Item eventKey="buisness">
                    {" "}
                    Buisness{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="customers">
                    Customers
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="Drivers">
                    {" "}
                    Drivers{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          <Nav className="d-flex justify-content-center align-items-center mx-4">
            <Image
              alt="logo"
              src={UserImg}
              width="50"
              height="50"
              roundedCircle
              className="border border-1 border-primary p-1"
            />
            <NavDropdown title="Ahmed Khayreey" className="mx-4">
              <NavDropdown.Item>Customers</NavDropdown.Item>
              <NavDropdown.Item> Drivers </NavDropdown.Item>
              <NavDropdown.Item> Buisness </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopNav;
