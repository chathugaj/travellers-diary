import React, {useContext} from "react";
import {Navbar, Nav, Container, NavDropdown, Image} from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import {Link} from "react-router-dom";
import {useCurrentUser, useSetCurrentUser} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios, {addCsrfTokenHeaders} from "../api/axiosDefaults";
import {useCurrentProfile} from "../contexts/ProfileContext";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const currentProfile = useCurrentProfile();

    const handleSignOut = async (event) => {
        try {
            await axios.post("/dj-rest-auth/logout/");
            setCurrentUser(null)
        } catch (error) {
            console.log(error);
        }
    }

    const loggedOutNavItems = <>
        <Link className={styles.NavLink} to="/signin">
            SIGN IN
        </Link>
        <Link className={styles.NavLink} to="/signup">
            SIGN UP
        </Link>
    </>

    const loggedInNavItems = <>
        <Link className={` ${styles.NavLink} justify-content-center`} to="/" onClick={handleSignOut}>
            SIGN OUT
        </Link>
        <Link className={styles.NavLink} to={`/profiles/${currentProfile?.id}`}>
            <Avatar src={currentUser?.profile_image} height={40} />
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
                <Navbar.Brand className={styles.NavTitle} href="/">
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
                        <Link className={styles.NavLink} to="/contactus">
                            CONTACT US
                        </Link>
                        {currentUser ? loggedInNavItems : loggedOutNavItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
