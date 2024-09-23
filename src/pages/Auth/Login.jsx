import React, { useState, useEffect, useContext } from "react";

// Import bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

// Importing contexts
import AuthContext from "../../context/UserauthContext";

const Login = () => {
  // Get functions + variables from contexts
  let { login, loading } = useContext(AuthContext);

  // Handle disable form when loading
  useEffect(() => {}, [loading]);

  // Handle submit button onClick
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call login function
    login(e);
  };

  return (
    <Container
      style={{
        background: "url(/src/assets/background.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        maxWidth: 100 + "%",
        height: 120 + "dvh",
        margin: 0 + "px",
      }}
    >
      <Row>
        <div
          className="col-4 mx-auto"
          style={{
            marginTop: 40 + "px",
            backgroundColor: "grey",
            padding: 30 + "px",
            paddingTop: 12 + "px",
            paddingBottom: 12 + "px",
            borderRadius: 10 + "px",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Form onSubmit={(e) => handleSubmit(e)}>
            <p
              className="text-center"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                margin: 0 + "px",
                marginBottom: 5 + "px",
                color: "white",
              }}
            >
              Login
            </p>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  color: "white",
                }}
              >
                <i className="fa-solid fa-envelope"></i> Email address
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label
                style={{
                  color: "white",
                }}
              >
                <i className="fa-solid fa-key"></i> Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                disabled={loading}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                style={{
                  color: "white",
                }}
                type="checkbox"
                name="remember"
                label="Remember me"
                disabled={loading}
              />
            </Form.Group>
            <Button
              style={{
                width: 100 + "%",
              }}
              variant="primary"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>

            <p
              style={{
                marginTop: 12 + "px",
                color: "white",
              }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: "white",
                }}
              >
                Sign up here!
              </a>
            </p>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Login;
