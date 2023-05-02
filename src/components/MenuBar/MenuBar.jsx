import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./MenuBar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="fs-4 fw-bold text-decoration-none text-dark">
            Kitchen Chronicles
          </Link>
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
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
                  <span title={user?.displayName}>
                    <img
                      style={{ width: "40px" }}
                      className="rounded-circle"
                      src={user?.photoURL ? user?.photoURL : <FaUserCircle />}
                      alt="user photo"
                    />
                  </span>
                  <button onClick={handleLogOut} className="btn btn-dark">
                    LogOut
                  </button>
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
