import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import bootstrap tags
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import token page style
import "../../pagestyles/token.css";

const Token = () => {
  return (
    <div className="token_wrapper">
      <div className="token_content">
      <Form onSubmit={(e) => handleSubmit(e)}>
            <p
              className="text-center"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                margin: 0 + "px",
                marginBottom: 10 + "px",
                color: "black",
                textDecoration: "underline"
              }}
            >
              Mua token
            </p>

            <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
              <Form.Label
                style={{
                  color: "back",
                }}
              >
              </Form.Label>
              <Form.Control
                type="number"
                name="email"
                placeholder="Điền số token..."
              />
            </Form.Group>

            <Button
              style={{
                width: 100 + "%",
              }}
              variant="primary"
              type="submit"
            >
              Mua
            </Button>
        </Form>
      </div>
    </div>
  );
};

export default Token;
