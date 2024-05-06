import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">TRAVELER'S DIARY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">CONTACT US</Nav.Link>
            <Nav.Link href="#action3">BLOG POST</Nav.Link>
            <Nav.Link href="#action4">SIGN IN</Nav.Link>
            <Nav.Link href="#action5">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
