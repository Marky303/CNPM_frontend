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
  // Get context dependencies
  let { getAllPrinters, printerList, checkHistory, history } =
    useContext(PrintingContext);

  // Get all printers
  useEffect(() => {
    getAllPrinters();
  }, []);

  useEffect(() => {}, [printerList, history]);

  // Handle when form changes
  const [formData, setFormData] = useState({
    fromdate: "",
    todate: "",
    printer: "0",
  });

  // Generic onChange handler
  const [renderKey, setRenderKey] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Use this updated datae
    checkHistory(updatedData);
  };

  return (
    <div>
      <div className="filter-section">
        <Form.Group controlId="formBasicPassword">
          <Row>
            <div className="col-md-3">
              <Row>
                <Col className="filter_notation">Từ ngày</Col>
                <Col xs={8}>
                  <Form.Control
                    type="date"
                    name="fromdate"
                    value={formData.fromdate}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </div>
            <div className="col-md-3">
              <Row>
                <Col className="filter_notation">Đến ngày</Col>
                <Col xs={8}>
                  <Form.Control
                    type="date"
                    name="todate"
                    value={formData.todate}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </div>
            <div className="col-md-3">
              <Row>
                <Col>
                  <Form.Select
                    aria-label="Default select example"
                    name="printer"
                    value={formData.printer}
                    onChange={handleChange}
                  >
                    <option value={0}>Chọn máy in...</option>
                    {printerList.length != 0 ? (
                      printerList.map((printer) => (
                        <option value={printer.id}>
                          {printer.Name} | {printer.Location}
                        </option>
                      ))
                    ) : (
                      <option value="nuhuh">Không có máy in tróng</option>
                    )}
                  </Form.Select>
                </Col>
              </Row>
            </div>
            <div className="col-md-3">
              <Row>
                <Col className="filter_notation">
                  <i className="fa-solid fa-magnifying-glass"></i>
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
          {history && history.length !== 0 ? (
            history.map((entry) => (
              <button className="bigtable-entry-history" id={entry.id}>
                <div className="bigtable-entry-field">{entry.Printer ? entry.Printer.Name : null}</div>
                <div className="bigtable-entry-field">{entry.Date.split(" ")[0]}</div>
                <div className="bigtable-entry-field">{entry.Location}</div>
                <div className="bigtable-entry-field">{entry.FileName}</div>
                <div className="bigtable-entry-field">{entry.Cost}</div>
              </button>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
