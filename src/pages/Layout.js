import Banner from "../components/Banner";
import Nav from "../components/NavBar";
import Footer from "../components/PageFooter";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Banner></Banner>
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
