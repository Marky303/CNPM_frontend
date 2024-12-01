import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

// Bootstrap tags
import Button from "react-bootstrap/Button";

// Import style
import "../../pagestyles/bigtable.css";

// Import functions
import notify from "../../functions/toastify/notify";

// Import context
import PrintingContext from "../../context/PrintingContext";

const PrinterTable = () => {
  // Get navigate function
  const navigate = useNavigate();

  // Get context dependencies
  let { getAllPrinters, printerList, deletePrinter, togglePrinter } =
    useContext(PrintingContext);

  // Get all printers
  useEffect(() => {
    getAllPrinters();
  }, []);

  useEffect(() => {}, [printerList]);

  // Add printer
  const handleAddPrinter = () => {
    navigate("/addprinter");
  };

  // Edit printer
  const handleEditPrinter = (id) => {
    navigate("/editprinter/" + id);
  };

  // Delete printer
  const handleDeletePrinter = (id) => {
    let foo = prompt('Type "accept" to delete the vehicle');
    if (foo == "accept") deletePrinter(id);
    else notify("warning", "Wrong input");
  };

  // Toggle printer
  const handleTogglePrinter = (id) => {
    togglePrinter(id);
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
          {printerList.length != 0 ? (
            printerList.map((printer) => (
              <div className="bigtable-entry-printer" id={printer.id}>
                <div className="bigtable-entry-field">
                  {printer.SerialNumber}
                </div>
                <div className="bigtable-entry-field">{printer.Name}</div>
                <div className="bigtable-entry-field">{printer.Brand}</div>
                <div className="bigtable-entry-field">{printer.Model}</div>
                <div className="bigtable-entry-field">{printer.Location}</div>
                <div className="bigtable-entry-field">{printer.Status}</div>
                <div className="bigtable-entry-field">
                  <Button
                    onClick={() => handleTogglePrinter(printer.id)}
                    variant="primary"
                    className="mb-2"
                  >
                    <i className="fa-solid fa-repeat"></i>
                  </Button>
                  <Button
                    onClick={() => {
                      handleEditPrinter(printer.id);
                    }}
                    variant="warning"
                    className="mb-2 ms-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button
                    onClick={() => handleDeletePrinter(printer.id)}
                    variant="danger"
                    className="mb-2 ms-1"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrinterTable;
