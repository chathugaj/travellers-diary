import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

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
            {/* <Nav.Link className={styles.NavLink} href="/">
              HOME
            </Nav.Link> */}
            <Link className={styles.NavLink} to="/">
              HOME
            </Link>
            <Link className={styles.NavLink} to="/posts">
              BLOG POSTS
            </Link>
            <Link className={styles.NavLink} to="/signin">
              SIGN IN
            </Link>
            <Link className={styles.NavLink} to="/signup">
              SIGN UP
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
