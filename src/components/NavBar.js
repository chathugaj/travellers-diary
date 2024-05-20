import React, {useContext} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import {Link} from "react-router-dom";
import {useCurrentUser, useSetCurrentUser} from "../contexts/CurrentUserContext";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    console.log("Current User", currentUser);

    const loggedOutNavItems = <>
        <Link className={styles.NavLink} to="/signin">
            SIGN IN
        </Link>
        <Link className={styles.NavLink} to="/signup">
            SIGN UP
        </Link>
    </>

    const loggedInNavItems = <>
        <Link className={styles.NavLink} to="/">
            <Navbar.Text>
                Signed in as: {currentUser?.username}
            </Navbar.Text>
        </Link>
    </>

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
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
                        <Link className={styles.NavLink} to="/">
                            HOME
                        </Link>
                        <Link className={styles.NavLink} to="/posts">
                            BLOG POSTS
                        </Link>
                        {currentUser ? loggedInNavItems : loggedOutNavItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
