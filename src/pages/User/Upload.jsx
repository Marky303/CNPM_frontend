// src/components/FileDropArea.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../../pagestyles/Upload.css';

const Upload = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleDrop = (event) => { //Hàm này dùng cho drop file
      event.preventDefault(); //ngăn chặn trình duyệt cố gắn mở tệp
      event.stopPropagation();  //ngăn sự kiện hiện tại lan truyền (bubbling) đến các thành phần cha khác
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        setFile(event.dataTransfer.files[0]);
        event.dataTransfer.clearData(); //Phương thức clearData() sẽ xóa toàn bộ dữ liệu đó khỏi dataTransfer
      }
    };
  
    const handleDragOver = (event) => { //Hàm này dùng cho Drag file (Lướt qua vùng chia sẻ file)
      event.preventDefault();
      event.stopPropagation();
    };
  
    return (
      <div className="fullpage">
        <div className="NavBar"></div>
      <div className="body">
        {/* <Row> */}
          {/* <Col md={8}> */}
          <div className="dialog">
          <div className="Upload">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="file-drop-area border border-secondary rounded"
            >
              <Form.Label htmlFor="fileInput" className="file-drop-label">
                Kéo thả file hoặc chọn tệp
                <div className="file-drop-icon">📁</div>
              </Form.Label>
              <Form.Control
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Button
                variant="outline-secondary"
                onClick={() => document.getElementById('fileInput').click()}
              >
                Chọn tệp
              </Button>
            </div>
            </div>
            {/* {file && (
              <div>
                <strong>File đã chọn:</strong> {file.name}
              </div>
            )} */}
          {/* </Col> */}
          
          {/* <Col md={4}> */}
          <div className="price-and-notice">
            <div className="price">
              <h5>GIÁ IN</h5>
              <ul className="pricing-list">
                <li>A4: 1 TOKEN / 1 tờ</li>
                <li>A3: 2 TOKEN / 1 tờ</li>
                <li>A2: 4 TOKEN / 1 tờ</li>
                </ul>
            </div>
            <div className="note">
                <div id="textluuy">
              <strong>Lưu ý:</strong>
              <p>
                Khi xảy ra lỗi trong quá trình in xin vui lòng lưu lại ảnh và báo
                cáo lại với hệ thống để được xử lí.
              </p>
              <p>
                Hãy kiểm tra kĩ file, thông tin máy in và các lựa chọn khi in.
              </p>
              </div>
            </div>

            </div>
          {/* </Col> */}
          
        {/* </Row> */}
            </div>
          </div>
      </div>
    );
  };
  
  export default Upload;