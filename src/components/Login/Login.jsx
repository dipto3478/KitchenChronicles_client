import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{ height: "calc(100vh - 62px)" }}
      className="container  d-flex align-items-center justify-content-center"
    >
      <Form onSubmit={handleLogin} className="w-25">
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
        </Form.Group>

        <p>
          Do not have an Accounts? <Link to="/register">Please Register</Link>
        </p>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <div className="my-3 d-flex gap-2">
          <Button>Login With Google</Button>
          <Button>Login With Github</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
