import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Taste Adventures</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-2 fs-5">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
