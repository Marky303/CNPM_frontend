import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

// Import bootstrap-react tags
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Importing contexts
import AuthContext from "../../context/UserauthContext";

// Route -> Nav link highlight dictionary
const dict = {
  "/": "navlink-home",
  "/features": "navlink-features",
  "/pricing": "navlink-pricing",
  "/dashboard": "navlink-dashboard",
};

const NavbarComponent = () => {
  // Get functions + variables from contexts
  let { accessToken, userinfo, logout, getUserinfo } = useContext(AuthContext);

  // Check for location and highlights
  const location = useLocation().pathname;
  useEffect(() => {
    if (dict[location] && document.getElementsByClassName(dict[location])[0]) {
      // Highlight
      let e = document.getElementsByClassName(dict[location])[0];
      e.style.color = "white";
      e.style.fontWeight = "600";
    }
  }, [location]);

  // Get userinfo and whatnot
  useEffect(() => {
    if (accessToken) getUserinfo();
  }, []);

  // Logout
  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container
        style={{
          marginLeft: 0 + "em",
          marginRight: 0 + "em",
          maxWidth: 100 + "%",
          height: 7 + "dvh",
        }}
      >
        <Navbar.Brand href={accessToken ? "/dashboard" : "/"}>
          <img
            alt=""
            src="/src/assets/BKLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {import.meta.env.VITE_APPLICATION_NAME}
        </Navbar.Brand>
        {accessToken ? (
          (userinfo ? userinfo.is_SPSO : null) ? (
            <Nav className="me-auto">
              <Nav.Link className="navlink-dashboard" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link className="navlink-personel" href="/printer">
                Quản lý máy in
              </Nav.Link>
              <Nav.Link className="navlink-dispatch" href="/history">
                Xem lịch sử
              </Nav.Link>
              <Nav.Link className="navlink-dispatch" href="/setting">
                Cài đặt
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link className="navlink-dashboard" href="/dashboard">
                In tài liệu
              </Nav.Link>
              <Nav.Link className="navlink-personel" href="/history">
                Xem lịch sử
              </Nav.Link>
              <Nav.Link className="navlink-dispatch" href="/token">
                Mua token
              </Nav.Link>
            </Nav>
          )
        ) : (
          <Nav className="me-auto">
            <Nav.Link className="navlink-home" href="/">
              Trang chủ
            </Nav.Link>
            <Nav.Link className="navlink-features" href="/features">
              Tính năng
            </Nav.Link>
            <Nav.Link className="navlink-pricing" href="/pricing">
              Chi phí
            </Nav.Link>
          </Nav>
        )}
        <Navbar.Toggle />
        {accessToken ? (
          <Navbar.Collapse className="justify-content-end">
            <DropdownButton
              as={ButtonGroup}
              variant={"primary"}
              title={
                (userinfo ? userinfo.name : null) +
                " | " +
                (userinfo ? userinfo.token : null) +
                " $"
              }
              style={{
                width: "auto",
                borderWidth: 1 + "px",
                border: "solid",
                backgroundColor: "gre",
              }}
            >
              {/* <Dropdown.Item href="/account" eventKey="1">
                Account
              </Dropdown.Item> */}
              <Dropdown.Item
                onClick={() => {
                  handleLogout();
                }}
                eventKey="2"
              >
                Đăng xuất
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse className="justify-content-end">
            <DropdownButton
              as={ButtonGroup}
              variant={"primary"}
              title={"Bắt đầu"}
              style={{
                width: 10 + "rem",
                borderWidth: 1 + "px",
                border: "solid",
                backgroundColor: "gre",
              }}
            >
              <Dropdown.Item href="/login" eventKey="1">
                Đăng nhập
              </Dropdown.Item>
              <Dropdown.Item href="/signup" eventKey="2">
                Đăng ký
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
