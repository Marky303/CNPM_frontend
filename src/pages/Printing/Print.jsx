import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import bootstrap tags
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

// Import dashboard page styles
import "../../pagestyles/dashboard.css";

// Import context
import PrintingContext from "../../context/PrintingContext";

const Print = () => {
  // Get context dependencies
  let { getActivePrinters, printerList, printDocument } = useContext(PrintingContext);

  // Setup
  const navigate = useNavigate();
  const location = useLocation();
  const { fileName, fileSize, fileType } = location.state || {};

  useEffect(() => {
    if (!fileName) {
      navigate("/filenotfound");
    } else {
      getActivePrinters();
    }
  }, []);

  // Handle form change
  const [formData, setFormData] = useState({
    pages: 0,
    copies: 1,
    size: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call submit function
    printDocument(e);
  };

  return (
    <div className="print_wrapper">
      <div className="fileupload_wrapper">
        <div className="fileupload_section">
          <div className="fileupload_after_text">
            <div>
              <h2>Thông tin file</h2>
              <p>
                <strong>Tên:</strong> {fileName}
              </p>
              <p>
                <strong>Kích thước:</strong> {fileSize} bytes
              </p>
              <p>
                <strong>Loại:</strong> {fileType}
              </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <div className="fileupload_settings_section">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <p
            className="text-center"
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              margin: 0 + "px",
              marginBottom: 5 + "px",
              color: "black",
            }}
          >
            Cài đặt in
          </p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-print"></i> Máy in
            </Form.Label>
            <Form.Select name="printer" aria-label="Default select example">
              <option>Chọn máy in...</option>
              {printerList.length != 0 ? (
                printerList.map((printer) => (
                  <option value={printer.id}>{printer.Name} | {printer.Location}</option>
                ))
              ) : (
                <option value="nuhuh">Không có máy in tróng</option>
              )}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-list-ol"></i> Trang
            </Form.Label>
            <Form.Control
              type="number"
              name="pages"
              placeholder="Nhập số trang..."
              value={formData.pages}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-hashtag"></i> Số bản
            </Form.Label>
            <Form.Control
              type="number"
              name="copies"
              placeholder="Nhập số bản in..."
              value={formData.copies}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-square-up-right"></i> Hướng trang
            </Form.Label>
            <Form.Select aria-label="Default select example" name="direction">
              <option>Chọn hướng trang in...</option>
              <option value="Vertical">Dọc</option>
              <option value="Horizontal">Ngang</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "black",
              }}
            >
              <i className="fa-solid fa-expand"></i> Kích cỡ
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
            >
              <option>Chọn kích cỡ trang...</option>
              <option value="1">A4</option>
              <option value="2">A3</option>
              <option value="4">A2</option>
            </Form.Select>
          </Form.Group>
          <Button
            style={{
              width: 100 + "%",
            }}
            variant="primary"
            type="submit"
          >
            In tài liệu ({formData.pages * formData.copies * formData.size}{" "}
            token <i className="fa-solid fa-circle-dollar-to-slot"></i>)
          </Button>
          <Form.Control
              type="hidden"
              name="filename"
              value={fileName}
            />
        </Form>
      </div>
    </div>
  );
};

export default Print;
