import Nav from "../components/NavBar";
import Footer from "../components/PageFooter";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet/>
            <Footer></Footer>
        </>
    );
};

export default Layout;
