import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MenuBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="fs-4 fw-bold">
            Kitchen Chronicles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3  fw-semibold fs-6 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "text-decoration-none text-dark"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "active" : "text-decoration-none text-dark"
                }
              >
                Blog
              </NavLink>

              {!user && (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "text-decoration-none text-dark"
                  }
                >
                  Login
                </NavLink>
              )}
              {user && (
                <div>
                  <span>{user.email}</span>
                  <button className="btn btn-dark">LogOut</button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
