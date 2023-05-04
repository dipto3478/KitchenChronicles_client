import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result);
          form.reset();
          navigate(from, { replace: true });
          toast.success("👍successfully Login✌");
          setError("");
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success("👍successfully Login✌");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success("👍successfully Login✌");
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
      <Form onSubmit={handleLogin} className="w-75">
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
        <p>{error}</p>
        <div className="my-3 d-flex gap-2">
          <Button onClick={handleGoogle}>Login With Google</Button>
          <Button onClick={handleGithub}>Login With Github</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
