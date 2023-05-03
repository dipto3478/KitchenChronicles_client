import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Minimum six characters, at least one letter and one number:");
      return;
    } else if ((name, photo, email, password)) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          setError("");
          form.reset();
          toast.success("✌successfully Register👍");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div
      style={{ height: "calc(100vh - 62px)" }}
      className="container  d-flex align-items-center justify-content-center"
    >
      <Form onSubmit={handleRegister} className="w-25">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="text-danger">{error}</p>
          <p>
            Already have an Accounts? <Link to="/login">Please Login</Link>
          </p>
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
