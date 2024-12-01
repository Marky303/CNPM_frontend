import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

// Bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../pagestyles/bigtable.css";

import PrintingContext from "../../context/PrintingContext";

const PrinterTable = () => {
  // Get navigate function
  const navigate = useNavigate();
  // let {  } = useContext(PrintingContext);

  useEffect(() => {}, []);

  useEffect(() => {}, [history]);

  // Add printer
  const handleAddPrinter = () => {
    navigate("/addprinter");
  };

  // Edit printer
  const handleEditPrinter = () => {
    navigate("/editprinter");
  };

  return (
    <div>
      <div className="bigtable-content-printer">
        <div className="bigtable-header-printer">
          <div className="column-header">ID</div>
          <div className="column-header">Tên</div>
          <div className="column-header">Thương hiệu</div>
          <div className="column-header">Model</div>
          <div className="column-header">Địa điểm</div>
          <div className="column-header">Trạng thái</div>
          <Button
            onClick={() => {
              handleAddPrinter();
            }}
            className="m-3"
          >
            <i className="fa-solid fa-plus"></i> Thêm
          </Button>
          <div className="fillerdiv"></div>
        </div>
        <div className="bigtable-body-printer">
          <button className="bigtable-entry-printer" id="69420">
            <div className="bigtable-entry-field">One</div>
            <div className="bigtable-entry-field">asdasd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">asd</div>
            <div className="bigtable-entry-field">sdads</div>
            <div className="bigtable-entry-field">sdadsa</div>
            <div className="bigtable-entry-field">
              <Button variant="primary" className="mb-2">
                <i className="fa-solid fa-repeat"></i>
              </Button>
              <Button
                onClick={() => {
                  handleEditPrinter();
                }}
                variant="warning"
                className="mb-2 ms-1"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button variant="danger" className="mb-2 ms-1">
                <i className="fa-regular fa-trash-can"></i>
              </Button>
            </div>
          </button>

          {/* {history.length != 0 ? (
          history.map((trip) => (
            <button className="bigtable-entry-printer" id="69420">
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

export default PrinterTable;
