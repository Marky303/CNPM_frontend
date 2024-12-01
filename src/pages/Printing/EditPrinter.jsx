import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

// Import context
import PrintingContext from "../../context/PrintingContext";

const EditPrinter = () => {
  // Get navigate function
  const navigate = useNavigate();

  // Get context dependencies
  let { printerList, editPrinter } = useContext(PrintingContext);

  // Get the current printer and load fields
  const { id } = useParams();
  const printer = printerList.find((p) => p.id == parseInt(id));
  const printerInfo = {
    serialID: printer ? printer.SerialNumber : null,
    name: printer ? printer.Name : null,
    brand: printer ? printer.Brand : null,
    model: printer ? printer.Model : null,
    location: printer ? printer.Location : null,
  };
  const textFieldList = ["serialID", "name", "brand", "model", "location"];

  useEffect(() => {
    for (let i of textFieldList) {
      let element;
      element = document.getElementsByName(i)[0];
      element.setAttribute("value", printerInfo[i]);
    }
  }, []);

  // Back to printer list
  const handleBack = () => {
    navigate("/printer");
  };

  // Edit printer
  const handleSubmit = (e) => {
    editPrinter(e);
    // Navigate back
    navigate("/printer");
  };

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
              Chỉnh sửa thông tin máy in
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
                name="serialID"
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
                name="name"
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
                name="brand"
                placeholder="Nhập thương hiệu của máy in"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label
                style={{
                  color: "white",
                }}
              >
                <i className="fa-solid fa-square-binary"></i> Model
              </Form.Label>
              <Form.Control
                type="text"
                name="model"
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
                name="location"
                placeholder="Nhập địa điểm của máy in..."
              />
            </Form.Group>
            <Row>
              <Col>
                <Button
                  style={{
                    width: 100 + "%",
                  }}
                  variant="danger"
                  onClick={() => {
                    handleBack();
                  }}
                >
                  Hủy
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 100 + "%",
                  }}
                  variant="primary"
                  type="submit"
                >
                  Xác nhận
                </Button>
              </Col>
            </Row>
            <Form.Control type="hidden" name="id" value={id} />
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default EditPrinter;
