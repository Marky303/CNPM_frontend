import React from "react";
import { Outlet } from "react-router-dom";

// Importing navbar
import NavbarComponent from "../components/Navbar/Navbar";

const Layout = (props) => (
  <>
    <NavbarComponent></NavbarComponent>
    <Outlet />
  </>
);

export default Layout;
