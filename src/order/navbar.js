import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NAV_LINKS } from "../utils.js";
import "../App.css";

export default function NavbarComp() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Reeco</Navbar.Brand>
          <Nav className="me-auto">
            {NAV_LINKS?.map((item) => {
              return (
                <Nav.Link style={{ paddingLeft: "30px" }}>
                  {item.value}
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
