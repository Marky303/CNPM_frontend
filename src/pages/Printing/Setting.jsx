import React, { useState, useEffect, useContext } from "react";

// Import bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import "../../pagestyles/setting.css";
import { Col } from "react-bootstrap";

// Importing contexts
import PrintingContext from "../../context/PrintingContext";

const Setting = () => {
  // Get functions + variables from contexts
  let { settings, checkSettings, changeSettings } = useContext(PrintingContext);

  // Get settings
  useEffect(() => {
    checkSettings();
  }, []);

  // Get the current settings and load fields
  const settingInfo = {
    Token: settings ? settings.Token : null,
    AllowedFiles: settings ? settings.AllowedFiles : null,
    Time: settings ? settings.Time : null,
  };
  const textFieldList = ["Token", "AllowedFiles", "Time"];

  useEffect(() => {
    for (let i of textFieldList) {
      let element;
      element = document.getElementsByName(i)[0];
      element.setAttribute("value", settingInfo[i]);
    }
  }, [settings]);

  // Handle submit button onClick
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call change setting function
    changeSettings(e);
  };

  return (
    <div className="setting_background">
      <p
        className="text-center"
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          margin: 10 + "px",
          marginBottom: 5 + "px",
          color: "black",
        }}
      >
        Cài đặt hệ thống
      </p>
      <hr></hr>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col className="mx-5">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-envelope"></i> Lượng Token nhận được mỗi
              kỳ
            </Form.Label>
            <Form.Control
              type="number"
              name="Token"
              placeholder="Điền số token..."
            />
          </Col>
          <Col className="mx-5">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-envelope"></i> Thời gian nhận Token mỗi
              kỳ
            </Form.Label>
            <Form.Control
              type="date"
              name="Time"
              placeholder="Chọn thời gian..."
            />
          </Col>
        </Row>
        <Row>
          <Col className="mx-5 mt-4">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-file"></i> Định dạng file cho phép
            </Form.Label>
            <Form.Control
              style={{
                color: "black",
                textAlign: "left",
                verticalAlign: "top",
              }}
              type="text"
              name="AllowedFiles"
              placeholder="Nhập định dạng file..."
            />
          </Col>
        </Row>
        <Row>
          <Button
            className="m-auto mt-4"
            style={{
              width: 45 + "%",
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Setting;
