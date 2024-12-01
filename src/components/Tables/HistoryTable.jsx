import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

// Bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../pagestyles/bigtable.css";

import PrintingContext from "../../context/PrintingContext";

const HistoryTable = () => {
  // Get navigate function
  const navigate = useNavigate();
  // let {  } = useContext(PrintingContext);

  useEffect(() => {}, []);

  useEffect(() => {}, [history]);

  return (
    <div>
      <div className="filter-section">
        <Form.Group controlId="formBasicPassword">
          <Row>
            <div class="col-md-3">
              <Row>
                <Col className="filter_notation">Từ ngày</Col>
                <Col xs={8}>
                  <Form.Control
                    type="date"
                    name="password"
                    placeholder="Từ ngày"
                  />
                </Col>
              </Row>
            </div>
            <div class="col-md-3">
              <Row>
                <Col className="filter_notation">Đến ngày</Col>
                <Col xs={8}>
                  <Form.Control
                    type="date"
                    name="password"
                    placeholder="Từ ngày"
                  />
                </Col>
              </Row>
            </div>
            <div class="col-md-3">
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example" name="size">
                    <option>Chọn máy in...</option>
                    <option value="Vertical">Máy in 1</option>
                    <option value="Horizontal">Máy in 1</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>
            <div class="col-md-3">
              <Row>
                <Col className="filter_notation">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    name="password"
                    placeholder="Tìm kiếm"
                  />
                </Col>
              </Row>
            </div>
          </Row>
        </Form.Group>
      </div>
      <div className="bigtable-content">
        <div className="bigtable-header-trip">
          <div className="column-header">Máy in</div>
          <div className="column-header">Thời gian</div>
          <div className="column-header">Địa điểm</div>
          <div className="column-header">Tên file</div>
          <div className="column-header">Phí</div>
          <div className="fillerdiv"></div>
        </div>
        <div className="bigtable-body">
          <button className="bigtable-entry-history" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
          </button>
          <button className="bigtable-entry-history" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
          </button>
          <button className="bigtable-entry-history" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
          </button>
          <button className="bigtable-entry-history" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
          </button>
          <button className="bigtable-entry-history" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
          </button>
          {/* {history.length != 0 ? (
          history.map((trip) => (
            <button className="bigtable-entry-history" id="69420">
              <div className="bigtable-entry-field">One</div>
              <div className="bigtable-entry-field">asdasd</div>
              <div className="bigtable-entry-field">asd</div>
              <div className="bigtable-entry-field">asd</div>
              <div className="bigtable-entry-field">sdads</div>
              <div className="bigtable-entry-field">sdadsa</div>
              <div className="bigtable-entry-field">asdasd</div>
            </button>
          ))
        ) : (
          <div></div>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
