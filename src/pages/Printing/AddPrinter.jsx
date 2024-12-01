import React, { useState, useEffect, useContext } from "react";

// Import bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

const AddPrinter = () => {
    return (
        <Container
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
            maxWidth: 100 + "%",
            height: 120 + "dvh",
            margin: 0 + "px",
            paddingBottom: 20 + "px",
          }}
        >
          <Row>
            <div
              className="col-4 mx-auto"
              style={{
                marginTop: 15 + "px",
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
                  Thêm máy in
                </p>
    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                    <i className="fa-solid fa-id-card"></i> Serial ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Nhập ID của máy in..."
                    
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                   <i className="fa-solid fa-font"></i> Tên
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    placeholder="Nhập tên của máy in..."
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                    <i className="fa-solid fa-copyright"></i> Thương hiệu
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    placeholder="Nhập thương hiệu của máy in"
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                    <i class="fa-solid fa-square-binary"></i> Model
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    placeholder="Nhập model của máy in..."
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{
                      color: "white",
                    }}
                  >
                    <i className="fa-solid fa-location-dot"></i> Địa điểm
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    placeholder="Nhập địa điểm của máy in..."
                    
                  />
                </Form.Group>
                <Button
                  style={{
                    width: 100 + "%",
                  }}
                  variant="primary"
                  type="submit"
                  
                >
                  Xác nhận
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      );
};

export default AddPrinter;
