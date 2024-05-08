import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar
      className={styles.NavBar}
      collapseOnSelect
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className={styles.NavTitle} href="#">
          TRAVELER'S DIARY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className={styles.NavLink} href="#action1">
              HOME
            </Nav.Link>
            <Nav.Link className={styles.NavLink} href="#action2">
              CONTACT US
            </Nav.Link>
            <Nav.Link className={styles.NavLink} href="#action3">
              BLOG POST
            </Nav.Link>
            <Nav.Link className={styles.NavLink} href="#action4">
              SIGN IN
            </Nav.Link>
            <Nav.Link className={styles.NavLink} href="#action5">
              SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
